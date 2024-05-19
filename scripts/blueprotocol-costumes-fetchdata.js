import fs from 'fs';
import { createClient } from "microcms-js-sdk";
import dotenv from 'dotenv';

dotenv.config();

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

const getAllContents = async (endpoint, queries = {}) => {
  return await client.getAllContents({ endpoint, queries });
};

async function fetchData() {
  const data = await getAllContents("costumes");
  const colorOrder = ["赤", "橙", "黄", "黄緑", "緑", "水", "青", "藤", "紫", "桃", "黒", "白"];
  const sortedDate = data.sort((a, b) => {
    const colorA = a.color[0];
    const colorB = b.color[0];
    return colorOrder.indexOf(colorA) - colorOrder.indexOf(colorB);
  });
  fs.writeFileSync('src/features/blueprotocol/costumes/assets/data/costumes.json', JSON.stringify(sortedDate));
  console.log("Created projects.json");
}

fetchData().catch(err => console.error('Data fetch failed:', err));