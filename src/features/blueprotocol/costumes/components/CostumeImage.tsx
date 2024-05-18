import { useState, useRef, useEffect } from 'react';

import { useStore } from '@nanostores/react';
import { currentCostume, updateCurrentCostume } from '@bpCostumes/stores/currentCostumeStore';
import { currentLighting } from '@bpCostumes/stores/currentLightingStore';

import type { Costume } from '@bpCostumes/types/costume';
import costumes from '@bpCostumes/assets/data/costumes.json';

export default function CostumeImage() {
  const [isLoading, setIsLoading] = useState(false);
  
  const imgRef = useRef<HTMLImageElement>(null);
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  const $currentCostume = useStore(currentCostume);
  const $currentLighting = useStore(currentLighting);

  let src: string;
  switch ($currentLighting) {
    case 'dawn': src = $currentCostume.image_dawn.url; break;
    case 'morning': src = $currentCostume.image_morning.url; break;
    case 'afternoon': src = $currentCostume.image_afternoon.url; break;
    case 'evening': src = $currentCostume.image_evening.url; break;
    case 'night': src = $currentCostume.image_night.url; break;
  }

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

  useEffect(() => {
    const img = imgRef.current;

    if (!img) return;

    img.addEventListener('wheel', cancelDefaultWheel, { passive: false });
    img.addEventListener('touchmove', cancelDefaultTouchMove, { passive: false });

    return () => {
      img.removeEventListener('wheel', cancelDefaultWheel);
      img.removeEventListener('touchmove', cancelDefaultTouchMove);
    };
  }, []);

  const handleLoad = () => setIsLoading(false);
  const cancelDefaultWheel = (event: WheelEvent) => event.preventDefault();
  const cancelDefaultTouchMove = (event: TouchEvent) => event.preventDefault();

  const handleTouchStart = (event: React.TouchEvent) => {
    const touch = event.touches[0];
    touchStartY.current = touch.clientY;
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    const touch = event.touches[0];
    touchEndY.current = touch.clientY;
  };

  const handleTouchEnd = () => {
    if (isLoading) return;

    const deltaY = touchEndY.current - touchStartY.current;
    
    changeCostume(deltaY);
  };

  const handleWheel = (event: React.WheelEvent) => {
    if (isLoading) return;
    
    if (event.shiftKey) {
      changeLighting(event.deltaY);
    } else {
      changeCostume(event.deltaY);
    }
  };

  const changeLighting = (deltaY: number) => {
    const lightings = ['dawn', 'morning', 'afternoon', 'evening', 'night'] as const;
    const lightingIndex = lightings.findIndex(lighting => lighting === $currentLighting);

    let nextLightingId: 'dawn' | 'morning' | 'afternoon' | 'evening' | 'night';
    if (deltaY > 0) {
      nextLightingId = lightings[lightingIndex - 1] ? lightings[lightingIndex - 1] : lightings[lightings.length - 1];
    } else {
      nextLightingId = lightings[lightingIndex + 1] ? lightings[lightingIndex + 1] : lightings[0];
    }

    currentLighting.set(nextLightingId);
  };

  const changeCostume = (deltaY: number) => {
    const costumeIndex = costumes.findIndex(costume => costume.title === $currentCostume.title);

    let nextCostume: Costume;
    if (deltaY > 0) {
      nextCostume = costumes[costumeIndex - 1] ? costumes[costumeIndex - 1] : costumes[costumes.length - 1];
    } else {
      nextCostume = costumes[costumeIndex + 1] ? costumes[costumeIndex + 1] : costumes[0];
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
      <img
        className="absolute left-[-141%] top-[-17%] max-w-[283%]"
        ref={imgRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onWheel={handleWheel}
        src={src}
        alt={$currentCostume.title}
      />
    </div>
  );
}