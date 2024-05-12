import { useStore } from '@nanostores/react'
import { currentCostume } from './../stores/currentCostumeStore'

import costumes from './../libs/costumes.json'

export default function Costumes() {
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
    <ul className="grid grid-cols-5 gap-2 [&_li]:relative [&_li]:overflow-hidden [&_li]:rounded-lg [&_li]:border [&_li]:border-gray-400 [&_li]:aspect-[4_/_5] [&_img]:absolute [&_img]:left-[-486%] [&_img]:top-[-62%] [&_img]:max-w-[800%]">
      {costumes.map((costume, index) => {
        return (
          <li key={costume.title + index}>
            <button onClick={() => update(costume)} type="button">
              <img
                src={`/src/features/blueprotocol/costumes/images/${costume.title}.webp`}
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