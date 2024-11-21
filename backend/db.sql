CREATE DATABASE minizoo;

CREATE TABLE animal_types (
  id serial PRIMARY KEY,
  name TEXT UNIQUE NOT NULL
);

CREATE TABLE animals (
  id serial PRIMARY KEY,
  name TEXT NOT NULL,
  weight VARCHAR(50),
  type INTEGER NOT NULL,
  image VARCHAR NOT NULL,
  FOREIGN KEY(type) REFERENCES animal_types(id)
);

INSERT INTO animal_types (name)
VALUES ('Elefant'); -- 1
INSERT INTO animal_types (name)
VALUES ('Giraff'); -- 2
INSERT INTO animal_types (name)
VALUES ('Pilgiftsgroda'); -- 3
INSERT INTO animal_types (name)
VALUES ('Pytonorm'); -- 4
INSERT INTO animal_types (name)
VALUES ('Panda'); --5
INSERT INTO animal_types (name)
VALUES ('Brunbjörn'); -- 6

INSERT INTO animals (name, weight, type, image)
VALUES ('Brumma', '250 kg', 6, 'https://cdn.pixabay.com/photo/2016/03/27/18/10/bear-1283347_1280.jpg');

INSERT INTO animals (name, weight, type, image)
VALUES ('Björne', '60 kg', 6, 'https://cdn.pixabay.com/photo/2021/11/05/18/23/bear-6771842_1280.jpg');

INSERT INTO animals (name, weight, type, image)
VALUES ('Phil', '30 g', 3, 'https://www.pandaplanet.se/sites/default/files/styles/paragraph_image_1800xauto_/public/image_paragraph/pilgiftsgroda-bla%CC%8A.png?itok=kiQCmyUZ');


-- 1. psql --username=postgres
-- 2. lösenord

-- 3.  \d - se saker (display)
    -- \c - byta databas (connect)
    -- \l - lista saker (list)
    -- \q - stänga av (quit)
