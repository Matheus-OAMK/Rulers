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

DROP TABLE card;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  gems SMALLINT NOT NULL DEFAULT 0
);

DROP TABLE users;

CREATE TABLE card_owner (
  user_id INTEGER NOT NULL REFERENCES users(id),
  card_id INTEGER NOT NULL REFERENCES card(id)
);

DROP TABLE card_owner;


insert into card(id, name, rarity, role, price, img_front, img_back, info_link) values(1, 'diana', 'epic', 'burst dealer', 200, '../Images/Epic-cards/FRONT/DIANA.webp', '../Images/Epic-cards/BACK/DIANA-BACK.webp', 'https://www.leagueoflegends.com/en-us/champions/diana/');
insert into card(id, name, rarity, role, price, img_front, img_back, info_link) values(11, 'annie', 'rare', 'burst dealer', 100, '../Images/Rare-cards/FRONT/ANNIE.webp', '../Images/Rare-cards/BACK/ANNIE-BACK.webp', 'https://www.leagueoflegends.com/en-us/champions/annie/');
insert into card(id, name, rarity, role, price, img_front, img_back, info_link) values(8, 'azir', 'legendary', 'burst dealer', 400, '../Images/Legendary-cards/FRONT/AZIR.webp', '../Images/Legendary-cards/BACK/AZIR-BACK.webp', 'https://www.leagueoflegends.com/en-us/champions/azir/');
insert into card(id, name, rarity, role, price, img_front, img_back, info_link) values(2, 'ezreal', 'epic', 'support', 200, '../Images/Epic-cards/FRONT/EZREAL.webp', '../Images/Epic-cards/BACK/EZREAL-BACK.webp', 'https://www.leagueoflegends.com/en-us/champions/ezreal/');
insert into card(id, name, rarity, role, price, img_front, img_back, info_link) values(20, 'vlad', 'rare', 'support', 100, '../Images/Rare-cards/FRONT/VLADIMIR.webp', '../Images/Rare-cards/BACK/VLADIMIR-BACK.webp', 'https://www.leagueoflegends.com/en-us/champions/vladimir/');
insert into card(id, name, rarity, role, price, img_front, img_back, info_link) values(4, 'ryze', 'epic', 'tank', 200, '../Images/Epic-cards/FRONT/RYZE.webp', '../Images/Epic-cards/BACK/RYZE-BACK.webp', 'https://www.leagueoflegends.com/en-us/champions/ryze/');
insert into card(id, name, rarity, role, price, img_front, img_back, info_link) values(12, 'darius', 'rare', 'support', 100, '../Images/Rare-cards/FRONT/DARIUS.webp', '../Images/Rare-cards/BACK/DARIUS-BACK.webp', 'https://www.leagueoflegends.com/en-us/champions/darius/');
insert into card(id, name, rarity, role, price, img_front, img_back, info_link) values(6, 'shyvana', 'epic', 'support', 200, '../Images/Epic-cards/FRONT/SHYVANA.webp', '../Images/Epic-cards/BACK/SHYVANA-BACK.webp', 'https://www.leagueoflegends.com/en-us/champions/shyvana/');
insert into card(id, name, rarity, role, price, img_front, img_back, info_link) values(13, 'garen', 'rare', 'support', 100, '../Images/Rare-cards/FRONT/GAREN.webp', '../Images/Rare-cards/BACK/GAREN-BACK.webp', 'https://www.leagueoflegends.com/en-us/champions/garen/');
insert into card(id, name, rarity, role, price, img_front, img_back, info_link) values(7, 'zyra', 'epic', 'burst dealer', 200, '../Images/Epic-cards/FRONT/ZYRA.webp', '../Images/Epic-cards/BACK/ZYRA-BACK.webp', 'https://www.leagueoflegends.com/en-us/champions/zyra/');
insert into card(id, name, rarity, role, price, img_front, img_back, info_link) values(10, 'trynda', 'legendary', 'tank', 400, '../Images/Legendary-cards/FRONT/TRYNDAMERE.webp', '../Images/Legendary-cards/BACK/TRYNDAMERE-BACK.webp', 'https://www.leagueoflegends.com/en-us/champions/tryndamere/');
insert into card(id, name, rarity, role, price, img_front, img_back, info_link) values(15, 'shaco', 'rare', 'tank', 100, '../Images/Rare-cards/FRONT/SHACO.webp', '../Images/Rare-cards/BACK/SHACO-BACK.webp', 'https://www.leagueoflegends.com/en-us/champions/shaco/');
insert into card(id, name, rarity, role, price, img_front, img_back, info_link) values(18, 'yasuo', 'rare', 'support', 100, '../Images/Rare-cards/FRONT/YASUO.webp', '../Images/Rare-cards/BACK/YASUO-BACK.webp', 'https://www.leagueoflegends.com/en-us/champions/yasuo/');
insert into card(id, name, rarity, role, price, img_front, img_back, info_link) values(14, 'nocturne', 'rare', 'tank', 100, '../Images/Rare-cards/FRONT/NOCTURNE.webp', '../Images/Rare-cards/BACK/NOCTURNE-BACK.webp', 'https://www.leagueoflegends.com/en-us/champions/nocturne/');
insert into card(id, name, rarity, role, price, img_front, img_back, info_link) values(5, 'shen', 'epic', 'burst dealer', 200, '../Images/Epic-cards/FRONT/SHEN.webp', '../Images/Epic-cards/BACK/SHEN-BACK.webp', 'https://www.leagueoflegends.com/en-us/champions/shen/');
insert into card(id, name, rarity, role, price, img_front, img_back, info_link) values(16, 'sion', 'rare', 'burst dealer', 100, '../Images/Rare-cards/FRONT/SION.webp', '../Images/Rare-cards/BACK/SION-BACK.webp', 'https://www.leagueoflegends.com/en-us/champions/sion/');
insert into card(id, name, rarity, role, price, img_front, img_back, info_link) values(9, 'master-yi', 'legendary', 'support', 400, '../Images/Legendary-cards/FRONT/MASTER-YI.webp', '../Images/Legendary-cards/BACK/MASTER-YI-BACK.webp', 'https://www.leagueoflegends.com/en-us/champions/master-yi/');
insert into card(id, name, rarity, role, price, img_front, img_back, info_link) values(17, 'vi', 'rare', 'burst dealer', 100, '../Images/Rare-cards/FRONT/VI.webp', '../Images/Rare-cards/BACK/VI-BACK.webp', 'https://www.leagueoflegends.com/en-us/champions/vi/');
insert into card(id, name, rarity, role, price, img_front, img_back, info_link) values(3, 'ori', 'epic', 'support', 200, '../Images/Epic-cards/FRONT/ORI.webp', '../Images/Epic-cards/BACK/ORI-BACK.webp', 'https://www.leagueoflegends.com/en-us/champions/orianna/');
insert into card(id, name, rarity, role, price, img_front, img_back, info_link) values(19, 'zed', 'rare', 'tank', 100, '../Images/Rare-cards/FRONT/ZED.webp', '../Images/Rare-cards/BACK/ZED-BACK.webp', 'https://www.leagueoflegends.com/en-us/champions/zed/');

