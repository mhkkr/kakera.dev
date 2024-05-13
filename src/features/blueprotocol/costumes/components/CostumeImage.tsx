import { useStore } from '@nanostores/react'
import { currentCostume } from './../stores/currentCostumeStore'
import { currentLighting } from './../stores/currentLightingStore'

export default function CostumeImage() {
  const $currentCostume = useStore(currentCostume)
  const $currentLighting = useStore(currentLighting)

  return (
    <div className="relative overflow-hidden rounded-lg aspect-[4_/_5] shadow-lg">
      <img className="absolute left-[-143%] top-[-17%] max-w-[283%]" src={`/images/blueprotocol/costumes/${$currentCostume.title}_${$currentLighting}.webp`} alt={$currentCostume.title} />
    </div>
  )
}