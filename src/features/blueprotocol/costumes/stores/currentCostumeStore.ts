import { map } from 'nanostores';
import type { Costume } from '@bpCostumes/types/costume';
import costumes from '@bpCostumes/assets/data/costumes.json';

export const currentCostume = map<Costume>({
  id: costumes[0].id,
  createdAt: costumes[0].createdAt,
  updatedAt: costumes[0].updatedAt,
  publishedAt: costumes[0].publishedAt,
  revisedAt: costumes[0].revisedAt,
  title: costumes[0].title,
  image_dawn: costumes[0].image_dawn,
  image_morning: costumes[0].image_morning,
  image_afternoon: costumes[0].image_afternoon,
  image_evening: costumes[0].image_evening,
  image_night: costumes[0].image_night,
  comment: costumes[0].comment,
  costume: costumes[0].costume,
  accessories: costumes[0].accessories
});

export const updateCurrentCostume = (costume: Costume) => {
  currentCostume.setKey('id', costume.id);
  currentCostume.setKey('createdAt', costume.createdAt);
  currentCostume.setKey('updatedAt', costume.updatedAt);
  currentCostume.setKey('publishedAt', costume.publishedAt);
  currentCostume.setKey('revisedAt', costume.revisedAt);
  currentCostume.setKey('title', costume.title);
  currentCostume.setKey('image_dawn', costume.image_dawn);
  currentCostume.setKey('image_morning', costume.image_morning);
  currentCostume.setKey('image_afternoon', costume.image_afternoon);
  currentCostume.setKey('image_evening', costume.image_evening);
  currentCostume.setKey('image_night', costume.image_night);
  currentCostume.setKey('comment', costume.comment);
  currentCostume.setKey('costume', costume.costume);
  currentCostume.setKey('accessories', costume.accessories);
};