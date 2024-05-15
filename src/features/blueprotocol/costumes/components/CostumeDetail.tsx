import { useStore } from '@nanostores/react';
import { currentCostume } from '@bpCostumes/stores/currentCostumeStore';
import { currentLighting } from '@bpCostumes/stores/currentLightingStore';

export default function CostumeImage() {
  const $currentCostume = useStore(currentCostume);
  const $currentLighting = useStore(currentLighting);
  
  return (
    <>
      <div className="overflow-hidden rounded-lg shadow-lg bg-gradient-to-b from-[#2C282E] to-[#524E4F] text-white">
        <div className="relative overflow-hidden aspect-[18_/_5]">
          <img className="absolute left-[-77%] top-[-242%] max-w-[450%]" src={`/images/blueprotocol/costumes/${$currentCostume.title}_afternoon.webp`} alt={$currentCostume.title} />
        </div>
        <dl className="h-[272px] p-4 pt-0 [&_dt]:mt-4 [&_li:before]:content-['・'] text-sm">
          {$currentCostume.costume && (
            <div>
              <dt className="font-bold">COSTUME</dt>
              <dd><ul>{$currentCostume.costume?.map(costume => <li key={costume}>{costume}</li>)}</ul></dd>
            </div>
          )}
          {$currentCostume.under_wear && (
            <div>
              <dt className="font-bold">UNDER WEAR</dt>
              <dd><ul>{$currentCostume.under_wear?.map(under_wear => <li key={under_wear}>{under_wear}</li>)}</ul></dd>
            </div>
          )}
          {$currentCostume.accessories && (
            <div>
              <dt className="font-bold">ACCESSORIES</dt>
              <dd><ul>{$currentCostume.accessories?.map(accessories => <li key={accessories}>{accessories}</li>)}</ul></dd>
            </div>
          )}
        </dl>
      </div>
      {$currentCostume.comment && (
        <div className="relative mt-6 p-4 rounded-lg shadow-lg bg-gradient-to-b bg-white text-sm">
          <div className="absolute left-4 top-0 -translate-y-1/2 text-outline-white text-xs font-bold">COMMENT</div>
          <p className="whitespace-pre-wrap">{$currentCostume.comment}</p>
        </div>
      )}
    </>
  );
}