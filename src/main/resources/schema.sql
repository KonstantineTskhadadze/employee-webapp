CREATE TABLE IF NOT EXISTS employees
(
    id         BIGSERIAL PRIMARY KEY,
    last_name  VARCHAR(30) NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    email      VARCHAR(30) NOT NULL
);
