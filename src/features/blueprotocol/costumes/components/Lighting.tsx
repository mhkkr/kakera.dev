import { useStore } from '@nanostores/react'
import { currentLighting } from './../stores/currentLightingStore'

import type { IconType } from 'react-icons'
import { PiSunHorizon } from 'react-icons/pi'
import { BsSun } from 'react-icons/bs'
import { BsFillSunFill } from 'react-icons/bs'
import { GiStripedSun } from 'react-icons/gi'
import { IoMoon } from 'react-icons/io5'

const lightings: {
  id: 'dawn' | 'morning' | 'afternoon' | 'evening' | 'night',
  label: string,
  icon: IconType
}[] = [
  {
    id: 'dawn',
    label: '未明',
    icon: PiSunHorizon
  },
  {
    id: 'morning',
    label: '朝',
    icon: BsSun
  },
  {
    id: 'afternoon',
    label: '昼',
    icon: BsFillSunFill
  },
  {
    id: 'evening',
    label: '夕方',
    icon: GiStripedSun
  },
  {
    id: 'night',
    label: '夜',
    icon: IoMoon
  }
]

export default function Lighting() {
  const $currentLighting = useStore(currentLighting)

  return (
    <ul className="grid grid-cols-1 gap-1 text-white">
      {lightings.map(lighting => {
        return (
          <li key={lighting.id}>
            <button className={`p-1 outline outline-1 outline-white rounded ${$currentLighting === lighting.id ? 'bg-orange-400' : 'bg-[#524E4F]'}`} onClick={() => currentLighting.set(lighting.id)} title={lighting.label} type="button">
              <lighting.icon />
            </button>
          </li>
        )
      })}
    </ul>
  )
}