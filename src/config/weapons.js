export const WEAPONS = {
  blaster: { id: 'blaster', name: 'Toon Blaster', slot: 1, damage: 18, fireRateMs: 180, magSize: 18, reserve: 72, reloadMs: 1400, range: 55, spread: 0.012, adsSpread: 0.004, pellets: 1, recoil: 0.28, fovKick: 1.6, tracerColor: '#fde68a' },
  shotgun: { id: 'shotgun', name: 'Sugar Shotgun', slot: 2, damage: 9, fireRateMs: 650, magSize: 6, reserve: 24, reloadMs: 1800, range: 16, spread: 0.09, adsSpread: 0.05, pellets: 6, recoil: 0.85, fovKick: 4, tracerColor: '#fb7185' },
  repeater: { id: 'repeater', name: 'Tombstone Repeater', slot: 3, damage: 12, fireRateMs: 95, magSize: 30, reserve: 90, reloadMs: 1600, range: 48, spread: 0.022, adsSpread: 0.008, pellets: 1, recoil: 0.16, fovKick: 0.9, tracerColor: '#86efac' },
}
export const DEFAULT_WEAPON_ID = 'blaster'
export const WEAPON_LIST = Object.values(WEAPONS).sort((a, b) => a.slot - b.slot)
