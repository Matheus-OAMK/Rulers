
const openDb = require('./openDb');
const fs = require('fs');

class Card {
  name
  rarity
  price
  img_front
  img_back
  info_link

  constructor(name, rarity, price, img_front, img_back, info_link) {
    this.name = name;
    this.rarity = rarity;
    this.price = price;
    this.img_front = img_front;
    this.img_back = img_back;
    this.info_link = info_link;
  }
}

const allCards = [];

//declare a variable to hold the path to the images folder
const imageFolder = '../Images';

//loop through subfolders in the images folder
fs.readdir(imageFolder, (err, subfolders) => {
  if (err) throw err;

  subfolders.forEach( folder => {
    //check if folder contains '-cards'
    if ( folder.includes('-cards') && !folder.includes('section-cards') ) {
      //define a path to subfolder
      const subfoldersPath = `${imageFolder}/${folder}/FRONT`;

      //loop through files in subfolder
      fs.readdir(subfoldersPath, (err, images) => {
        if (err) throw err;

        images.forEach(image => {
          if ( image.endsWith('.webp') ) {
            const name = image.split('.')[0];
            const img_front = `${imageFolder}/${folder}/FRONT/${image}`;
            const img_back = `${imageFolder}/${folder}/BACK/${name}-BACK.webp`;
            const rarity = folder.split('-')[0];
            const info_link = `https://www.leagueoflegends.com/en-us/champions/${name}/`;
            const price = (rarity === 'Legendary') ? 400 : (rarity === 'Epic') ? 200 : (rarity === 'Rare') ? 100 : 0;
            //push card to allCards array
            const card = new Card(name, rarity, price, img_front, img_back, info_link);
            allCards.push(card);
          };
        });
      });
    };
  });
});

async function createCards() {
  const pool = openDb();
  const promises = [];
  for (const card of allCards) {
    //check if already exist in db
    const query = {
      text: 'SELECT * FROM card WHERE name = $1',
      values: [card.name],
    };
    promises.push(
      pool.query(query)
        .then(result => {
          //if card doesnt exist insert it into db
          if (result.rows.length === 0) {
            const insertQuery = {
              text: 'INSERT INTO card(name,rarity, price, img_front, img_back,info_link ) VALUES($1,$2,$3,$4,$5,$6)',
              values: [card.name, card.rarity, card.price, card.img_front, card.img_back, card.info_link],
            };
            return pool.query(insertQuery);
          } else {
            console.log(`Card ${card.name} already exists in the database.`);
          }
        })
        .catch(error => { throw error })
    );
  }
  await Promise.all(promises);
  console.log('All cards have been inserted into the database.');
  pool.end();
}

module.exports =  createCards ;



















