DROP DATABASE IF EXISTS rulers;
CREATE DATABASE rulers;
USE rulers;


CREATE TABLE card (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  rarity VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL,
  price SMALLINT NOT NULL,
  img_front VARCHAR(255) NOT NULL,
  img_back VARCHAR(255) NOT NULL,
  info_link VARCHAR(255) NOT NULL
);


CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  gems SMALLINT NOT NULL
);

CREATE TABLE card_owner (
  user_id INTEGER REFERENCES users(id),
  card_id INTEGER REFERENCES card(id),
  amount INTEGER NOT NULL,
  PRIMARY KEY (user_id, card_id)
);




-- CREATE TABLE test (
--   id SERIAL PRIMARY KEY,
--   name VARCHAR(255) NOT NULL,
--   rarity VARCHAR(255) NOT NULL
-- );

insert into card(id, name, rarity, role, price, img_front, img_back, info_link) values(1, 'diana', 'epic', 'burst dealer', 200, '../Images/Epic-cards/FRONT/DIANA.webp', '../Images/Epic-cards/BACK/diana-BACK.webp', 'https://www.leagueoflegends.com/en-us/champions/diana/');

