

CREATE TABLE public."Users"
(
    UserId uuid NOT NULL,
    Email text COLLATE pg_catalog."default" NOT NULL,
    Password text COLLATE pg_catalog."default" NOT NULL,
    DateCreated TIMESTAMP NOT NULL,
    CONSTRAINT "Users_pkey" PRIMARY KEY (UserId)
)

TABLESPACE pg_default;

ALTER TABLE public."Users"
    OWNER to localdev;