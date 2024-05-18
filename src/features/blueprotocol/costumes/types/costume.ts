export interface Costume {
  id: string,
  createdAt: string,
  updatedAt: string,
  publishedAt: string,
  revisedAt: string,
  title: string,
  image_dawn: CostumeImage,
  image_morning: CostumeImage,
  image_afternoon: CostumeImage,
  image_evening: CostumeImage,
  image_night: CostumeImage,
  comment?: string,
  costume?: string,
  under_wear?: string,
  accessories?: string
}

interface CostumeImage {
  url: string,
  height: number,
  width: number
}