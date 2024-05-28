export interface Costume {
  title: string,
  color: string,
  image_dawn: CostumeImage,
  image_morning: CostumeImage,
  image_afternoon: CostumeImage,
  image_evening: CostumeImage,
  image_night: CostumeImage,
  comment: string,
  costume: string,
  accessories: string
}

interface CostumeImage {
  _id: string,
  altText: string,
  description: string,
  fileName: string,
  fileSize: number,
  fileType: string,
  height: number,
  metadata: {},
  src: string,
  title: string,
  width: number
}