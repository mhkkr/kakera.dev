import { useStore } from '@nanostores/react'
import { currentCostume } from '../stores/currentCostumeStore'

export default function CurrentCostumeImage() {
  const $currentCostume = useStore(currentCostume)

  return (
    <div className="relative overflow-hidden rounded-lg aspect-[4_/_5] shadow-lg">
      <img className="absolute left-[-143%] top-[-17%] max-w-[283%]" src={`/images/blueprotocol/costumes/${$currentCostume.title}.webp`} alt={$currentCostume.title} />
    </div>
  )
}