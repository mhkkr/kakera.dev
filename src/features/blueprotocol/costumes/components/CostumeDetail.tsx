import { useStore } from '@nanostores/react'
import { currentCostume } from './../stores/currentCostumeStore'
import { currentLighting } from './../stores/currentLightingStore'

export default function CostumeImage() {
  const $currentCostume = useStore(currentCostume)
  const $currentLighting = useStore(currentLighting)
  
  return (
    <div className="overflow-hidden rounded-lg shadow-lg bg-gradient-to-b from-[#2C282E] to-[#524E4F] text-white">
      <div className="relative overflow-hidden aspect-[18_/_5]">
        <img className="absolute left-[-77%] top-[-242%] max-w-[450%]" src={`/images/blueprotocol/costumes/${$currentCostume.title}_${$currentLighting}.webp`} alt={$currentCostume.title} />
      </div>
      <dl className="h-[272px] p-4 pt-0 [&_dt]:mt-4 [&_li:before]:content-['・'] text-sm">
        {$currentCostume.costume && (
          <>
            <dt className="font-bold">COSTUME</dt>
            <dd><ul>{$currentCostume.costume?.map(costume => <li key={costume}>{costume}</li>)}</ul></dd>
          </>
        )}
        {$currentCostume.under_wear && (
          <>
            <dt className="font-bold">UNDER WEAR</dt>
            <dd><ul>{$currentCostume.under_wear?.map(under_wear => <li key={under_wear}>{under_wear}</li>)}</ul></dd>
          </>
        )}
        {$currentCostume.accessories && (
          <>
            <dt className="font-bold">ACCESSORIES</dt>
            <dd><ul>{$currentCostume.accessories?.map(accessories => <li key={accessories}>{accessories}</li>)}</ul></dd>
          </>
        )}
      </dl>
    </div>
  )
}