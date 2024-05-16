import { useState, useRef, useEffect } from 'react';

import { useStore } from '@nanostores/react';
import { currentCostume, updateCurrentCostume } from '@bpCostumes/stores/currentCostumeStore';
import { currentLighting } from '@bpCostumes/stores/currentLightingStore';

import type { Costume } from '@/features/blueprotocol/costumes/types/costume';
import costumes from '@bpCostumes/libs/costumes.json';

export default function CostumeImage() {
  const [isLoading, setIsLoading] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const $currentCostume = useStore(currentCostume);
  const $currentLighting = useStore(currentLighting);

  useEffect(() => {
    const img = imgRef.current;

    if (!img) return;

    setIsLoading(true);

    if (img.complete) {
      handleLoad();
    } else {
      img.addEventListener('load', handleLoad);
    }

    return () => {
      img.removeEventListener('load', handleLoad);
    };
  }, [$currentCostume, $currentLighting]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleWheel = (event: React.WheelEvent) => {
    if (isLoading) return;
    
    if (event.shiftKey) {
      changeLighting(event);
    } else {
      changeCostume(event);
    }
  };

  const changeLighting = (event: React.WheelEvent) => {
    const lightings = ['dawn', 'morning', 'afternoon', 'evening', 'night'] as const;
    const lightingIndex = lightings.findIndex(lighting => lighting === $currentLighting);
    let nextLightingId: 'dawn' | 'morning' | 'afternoon' | 'evening' | 'night';
    if (event.deltaY > 0) {
      nextLightingId = lightings[lightingIndex + 1] ? lightings[lightingIndex + 1] : lightings[0];
    } else {
      nextLightingId = lightings[lightingIndex - 1] ? lightings[lightingIndex - 1] : lightings[lightings.length - 1];
    }
    currentLighting.set(nextLightingId);
  };

  const changeCostume = (event: React.WheelEvent) => {
    const costumeIndex = costumes.findIndex(costume => costume.title === $currentCostume.title);
    let nextCostume: Costume;
    if (event.deltaY > 0) {
      nextCostume = costumes[costumeIndex + 1] ? costumes[costumeIndex + 1] : costumes[0];
    } else {
      nextCostume = costumes[costumeIndex - 1] ? costumes[costumeIndex - 1] : costumes[costumes.length - 1];
    }
    updateCurrentCostume(nextCostume);
  };

  return (
    <div className="relative overflow-hidden rounded-lg aspect-[4_/_5] shadow-lg">
      {isLoading && (
        <div className="z-10 absolute inset-0 flex items-center justify-center" title="読み込み中" aria-label="読み込み中">
          <div className="animate-spin h-10 w-10 border-4 border-white rounded-full border-t-transparent"></div>
        </div>
      )}
      <img className="absolute left-[-143%] top-[-17%] max-w-[283%]" ref={imgRef} onWheel={handleWheel} src={`/images/blueprotocol/costumes/${$currentCostume.title}_${$currentLighting}.webp`} alt={$currentCostume.title} />
    </div>
  );
}