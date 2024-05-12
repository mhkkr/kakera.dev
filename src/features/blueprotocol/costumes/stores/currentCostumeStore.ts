import { map } from 'nanostores'
import costumes from '../libs/costumes.json'

export const currentCostume = map<{
  'title': string,
  'costume': string[] | null,
  'under_wear': string[] | null,
  'accessories': string[] | null
}>({
  title: costumes[0].title,
  costume: costumes[0].costume,
  under_wear: costumes[0].under_wear,
  accessories: costumes[0].accessories
})