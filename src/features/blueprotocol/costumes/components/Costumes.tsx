import { useStore } from '@nanostores/react';
import { currentCostume, updateCurrentCostume } from '@bpCostumes/stores/currentCostumeStore';

import costumes from '@bpCostumes/assets/data/costumes.json';

export default function Costumes() {
  const $currentCostume = useStore(currentCostume);

  return (
    <ul className="grid grid-cols-8 lg:grid-cols-4 gap-2">
      {costumes.map(costume => {
        return (
          <li key={costume.title} className={`relative overflow-hidden rounded-lg border aspect-[4_/_5] ${$currentCostume.title === costume.title ? 'border-orange-400 outline outline-orange-400' : 'border-gray-400'}`}>
            <button onClick={() => updateCurrentCostume(costume)} type="button">
              <img
                className="absolute left-[-486%] top-[-62%] max-w-[800%]"
                src={costume.image_afternoon.src}
                alt={costume.title}
                title={costume.title}
              />
            </button>
          </li>
        )
      })}
    </ul>
  );
}