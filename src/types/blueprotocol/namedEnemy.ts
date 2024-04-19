export type NamedEnemyType = {
  id: string;
  name: string;
  level: number;
  area: string;
  region: string;
  spawnConditions: string[];
  spawnPeriod: string;
  coolTime: number;
  notes?: string;
  limitedFlag?: boolean;
  StartDateTime?: string;
  EndDateTime?: string;
};