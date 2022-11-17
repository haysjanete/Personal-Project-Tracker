from pydantic import BaseModel
from queries.pool import pool

class DuplicateAccountError(ValueError):
    pass

class AccountIn(BaseModel):
    name: str
    phone_number: int
    email: str
    username: str
    password: str

class AccountOut(BaseModel):
    id: str
    name: str
    phone_number: int
    email: str
    username: str

class AccountRepo():
    def create(self, info: AccountIn, hashed_password: str) -> AccountOut:
        # connect to the database
        with pool.connection() as conn:
            # get a cursor
            with conn.cursor() as db:
                # run our INSERT statement
                props = info.dict()
                print(props)
                props["password"] = hashed_password
                result = db.execute(
                    """
                    INSERT INTO users
                        (name, phone_number, email, username, hashed_password)
                    VALUES
                        (%s, %s, %s, %s, %s)
                    RETURNING id, name, phone_number, email, username;
                    """,
                    props,
                )
                row = (result.fetchone())
                # return new data
