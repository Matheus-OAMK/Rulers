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




CREATE TABLE test (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  rarity VARCHAR(255) NOT NULL
);

INSERT INTO card(name,rarity, price, img_front, img_back,info_link ) VALUES('queen', 'Common', '100', 'https://i.imgur.com/1ZQZ1Zm.png', 'https://i.imgur.com/1ZQZ1Zm.png', 'https://en.wikipedia.org/wiki/King_(playing_card)');
