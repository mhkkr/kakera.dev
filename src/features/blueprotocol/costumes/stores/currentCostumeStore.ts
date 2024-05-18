import { map } from 'nanostores';
import type { Costume } from '@bpCostumes/types/costume';
import costumes from '@bpCostumes/assets/data/costumes.json';

export const currentCostume = map<Costume>({
  id: costumes[costumes.length - 1].id,
  createdAt: costumes[costumes.length - 1].createdAt,
  updatedAt: costumes[costumes.length - 1].updatedAt,
  publishedAt: costumes[costumes.length - 1].publishedAt,
  revisedAt: costumes[costumes.length - 1].revisedAt,
  title: costumes[costumes.length - 1].title,
  image_dawn: costumes[costumes.length - 1].image_dawn,
  image_morning: costumes[costumes.length - 1].image_morning,
  image_afternoon: costumes[costumes.length - 1].image_afternoon,
  image_evening: costumes[costumes.length - 1].image_evening,
  image_night: costumes[costumes.length - 1].image_night,
  comment: costumes[costumes.length - 1].comment,
  costume: costumes[costumes.length - 1].costume,
  accessories: costumes[costumes.length - 1].accessories
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