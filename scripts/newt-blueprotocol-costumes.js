import fs from 'fs';
import { createClient } from 'newt-client-js';
import dotenv from 'dotenv';

dotenv.config();

const newtClient = createClient({
  spaceUid: process.env.NEWT_SPACE_UID,
  token: process.env.NEWT_CDN_API_TOKEN,
  apiType: 'cdn',
});

async function fetchData() {
  const data = await newtClient.getContents({
    appUid: 'BpCostumes',
    modelUid: 'article',
    query: {
      select: [
        'title',
        'color',
        'image_dawn',
        'image_morning',
        'image_afternoon',
        'image_evening',
        'image_night',
        'comment',
        'costume',
        'accessories'
      ],
    }
  });
  const items = data.items;
  const colorOrder = [
    '#96676a', // '赤'
    '#b29679', // '橙'
    '#a59e71', // '黄'
    '#959b74', // '黄緑'
    '#738675', // '緑'
    '#7c9395', // '水'
    '#7c8695', // '青'
    '#817f95', // '藤'
    '#908095', // '紫'
    '#ae98a1', // '桃'
    '#969696', // '黒'
    '#d6d6d6'  // '白'
  ];
  const sortedItems = items.sort((a, b) => {
    const colorA = a.color;
    const colorB = b.color;
    return colorOrder.indexOf(colorA) - colorOrder.indexOf(colorB);
  });
  fs.writeFileSync('src/features/blueprotocol/costumes/assets/data/costumes.json', JSON.stringify(sortedItems));
  console.log('Created projects.json');
}

fetchData().catch(err => console.error('Data fetch failed:', err));