import type { NamedEnemyType } from '@types/blueprotocol/namedEnemy';

declare module '@libs/blueprotocol/namedEnemy.json' {
  const value: NamedEnemyType;
  export = value;
}