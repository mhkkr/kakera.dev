'use client';

import { FaPerson, FaPeopleGroup } from 'react-icons/fa6';
import { PiSwordFill } from "react-icons/pi";
import { BsAlarmFill } from "react-icons/bs";
import { BsBoxFill } from "react-icons/bs";

export default function NamedEnemyConditionIcon({ condition }: { condition: string }) {
	if (condition.includes('周辺')) {
		return <FaPeopleGroup />;
	} else if (condition.includes('滞在') || condition.includes('プレイヤー')) {
		return <FaPerson />;
	} else if (condition.includes('宝箱')) {
		return <BsBoxFill />;
	} else if (condition.includes('期間')) {
		return <BsAlarmFill />;
	}
	return <PiSwordFill />;
}