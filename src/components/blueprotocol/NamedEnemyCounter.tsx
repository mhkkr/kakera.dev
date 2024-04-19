'use client';

import { FaEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";

// import useNamedEnemyCounter from "@/hooks/blueprotocol/useNamedEnemyCounter";

import type { NamedEnemyType } from '@/types/blueprotocol/namedEnemy';

import React, { useState, useEffect } from 'react';

export default function NamedEnemyCounter({ namedEnemy }: { namedEnemy: NamedEnemyType }) {
  // Stateを定義
  const [count, setCount] = useState<number>(0);

  // コンポーネントがマウントされたときにローカルストレージからデータを読み込む
  useEffect(() => {
    const storedCount = localStorage.getItem(`countData_${namedEnemy.id}`);
    if (storedCount) {
      setCount(Number(storedCount));
    }
  }, [namedEnemy.id]);

  // カウントをインクリメントしてローカルストレージに保存する関数
  const incrementCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem(`countData_${namedEnemy.id}`, String(newCount));
  };

	return (
		<div className="flex flex-col h-full bg-stone-300">
			<div className="text-center py-3">
				<span className="text-4xl font-black font-roboto">{count}</span>
				<span className="-mr-[1em] ml-1 text-sm">体</span>
			</div>
			<div className="flex border-t-2 border-stone-200 text-sm">
				<button onClick={incrementCount} className="w-1/2 py-3 border-r-2 border-stone-200 flex gap-1 items-center justify-center transition-colors hover:bg-stone-400" type="button"><FaEdit />編集</button>
				<button onClick={incrementCount} className="w-1/2 py-3 flex gap-1 items-center justify-center transition-colors hover:bg-stone-400" type="button"><FaPlus />討伐</button>
			</div>
			<div className="text-center py-3 border-t-2 border-stone-200 relative">
				{/* <button onClick={handleDataClear} className="absolute right-2 top-1/2 -translate-y-1/2" title="タイマーを止める"><IoMdCloseCircle /></button> */}
				<div className="text-xs leading-none">リポップまで</div>
				<div className="mt-1 text-xl font-black font-roboto leading-none tracking-wider">00:00</div>
			</div>
		</div>
	);
}