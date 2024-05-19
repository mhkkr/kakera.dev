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

// TODO: 色で並び替え
async function fetchData() {
  const data = await getAllContents("costumes");
  fs.writeFileSync('src/features/blueprotocol/costumes/assets/data/costumes.json', JSON.stringify(data));
  console.log("Created projects.json");
}

fetchData().catch(err => console.error('Data fetch failed:', err));