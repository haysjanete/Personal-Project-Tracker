from pydantic import BaseModel
from queries.pool import pool

class DuplicateAccountError(ValueError):
    pass

class Account(BaseModel):
    id: str
    name: str
    email: str
    hashed_password: str


class AccountIn(BaseModel):
    name: str
    email: str
    password: str

class AccountOut(BaseModel): # what the user sees. Removed the password
    id: str
    name: str
    email: str


class AccountRepo():
    def create(self, info: AccountIn, hashed_password: str) -> Account:
        # connect to the database
        with pool.connection() as conn:
            # get a cursor
            with conn.cursor() as db:
                # run our INSERT statement
                result = db.execute(
                    """
                    INSERT INTO users
                        (name, email, hashed_password)
                    VALUES
                        (%s, %s, %s)
                    RETURNING id;
                    """,
                    [info.name, info.email, hashed_password]
                )
                id = result.fetchone()[0]
                return Account(
                    id=id,
                    name=info.name,
                    email=info.email,
                    hashed_password=hashed_password
                )

    def get(self, email: str) -> Account:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    SELECT id, name, email, hashed_password
                    FROM users
                    where email = %s;
                    """,
                    [email]
                )
                record = result.fetchone()
                if record is None:
                    return None
                return Account(
                    id=record[0],
                    name=record[1],
                    email=record[2],
                    hashed_password=record[3],
                )
