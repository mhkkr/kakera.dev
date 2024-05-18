import { useStore } from '@nanostores/react';
import { currentCostume } from '@bpCostumes/stores/currentCostumeStore';

export default function CostumeImage() {
  const $currentCostume = useStore(currentCostume);
  
  return (
    <>
      <p className="text-lg text-outline-white font-bold italic">{$currentCostume.title}</p>
      <div className="mt-4 overflow-hidden rounded-lg shadow-lg bg-gradient-to-b from-[#2C282E] to-[#524E4F] text-white">
        <div className="relative overflow-hidden aspect-[18_/_5]">
          <img
            className="absolute left-[-77%] top-[-242%] max-w-[450%]"
            src={$currentCostume.image_afternoon.url}
            alt={$currentCostume.title}
          />
        </div>
        <dl className="h-[272px] p-4 pt-0 [&_dt]:mt-4 [&_li:before]:content-['・'] text-sm">
          {$currentCostume.costume && (
            <div>
              <dt className="font-bold">COSTUME</dt>
              <dd><ul>{$currentCostume.costume?.split('\n').map(costume => <li key={costume}>{costume}</li>)}</ul></dd>
            </div>
          )}
          {$currentCostume.accessories && (
            <div>
              <dt className="font-bold">ACCESSORIES</dt>
              <dd><ul>{$currentCostume.accessories?.split('\n').map(accessories => <li key={accessories}>{accessories}</li>)}</ul></dd>
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