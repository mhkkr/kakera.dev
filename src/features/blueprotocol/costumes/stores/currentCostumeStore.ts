import { map } from 'nanostores';
import type { Costume } from '@/features/blueprotocol/costumes/types/costume';
import costumes from '@bpCostumes/libs/costumes.json';

export const currentCostume = map<Costume>({
  title: costumes[0].title,
  comment: costumes[0].comment,
  costume: costumes[0].costume,
  under_wear: costumes[0].under_wear,
  accessories: costumes[0].accessories
});

export const updateCurrentCostume = (costume: Costume) => {
  currentCostume.setKey('title', costume.title);
  currentCostume.setKey('comment', costume.comment);
  currentCostume.setKey('costume', costume.costume);
  currentCostume.setKey('under_wear', costume.under_wear);
  currentCostume.setKey('accessories', costume.accessories);
};