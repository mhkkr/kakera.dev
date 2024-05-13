import { map } from 'nanostores';
import type { Costumes } from '@bpCostumes/types/costumes';
import costumes from '@bpCostumes/libs/costumes.json';

export const currentCostume = map<Costumes>({
  title: costumes[0].title,
  comment: costumes[0].comment,
  costume: costumes[0].costume,
  under_wear: costumes[0].under_wear,
  accessories: costumes[0].accessories
});