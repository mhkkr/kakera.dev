'use client';

export default function RegnusClock() {
	return (
		<>
			<h2 className="text-xl font-bold">レグナス時計</h2>
			<p className="mt-1">🌞🌒</p>
			<p className="mt-1 text-xs">※時刻の取得はデバイスのシステム時計に基づいていますのでズレる恐れがあります。</p>
		</>
	);
}