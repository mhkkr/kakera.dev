import { atom } from 'nanostores';

export const currentLighting = atom<'dawn' | 'morning' | 'afternoon' | 'evening' | 'night'>('afternoon');