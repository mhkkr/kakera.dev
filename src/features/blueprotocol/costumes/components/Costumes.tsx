import { useStore } from '@nanostores/react'
import { currentCostume } from './../stores/currentCostumeStore'
import { currentLighting } from './../stores/currentLightingStore'

import costumes from './../libs/costumes.json'

export default function Costumes() {
  const $currentCostume = useStore(currentCostume)
  const $currentLighting = useStore(currentLighting)

  const update = (costume: {
    'title': string,
    'costume': string[] | null,
    'under_wear': string[] | null,
    'accessories': string[] | null
  }) => {
    currentCostume.setKey('title', costume.title)
    currentCostume.setKey('costume', costume.costume)
    currentCostume.setKey('under_wear', costume.under_wear)
    currentCostume.setKey('accessories', costume.accessories)
  }

  return (
    <ul className="grid grid-cols-4 gap-2">
      {costumes.map((costume, index) => {
        return (
          <li key={costume.title + index} className={`relative overflow-hidden rounded-lg border aspect-[4_/_5] ${$currentCostume.title === costume.title ? 'border-orange-400 outline outline-orange-400' : 'border-gray-400'}`}>
            <button onClick={() => update(costume)} type="button">
              <img
                className="absolute left-[-486%] top-[-62%] max-w-[800%]"
                src={`/images/blueprotocol/costumes/${costume.title}_${$currentLighting}.webp`}
                alt={costume.title}
                title={costume.title}
              />
            </button>
          </li>
        )
      })}
    </ul>
  )
}