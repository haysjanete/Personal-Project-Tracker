steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE users (
            id SERIAL PRIMARY KEY NOT NULL,
            name VARCHAR(100) NOT NULL,
            email TEXT NOT NULL,
            phone_number INTEGER NOT NULL,
            username TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL,
            number INTEGER
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE users;
        """
    ],
]
