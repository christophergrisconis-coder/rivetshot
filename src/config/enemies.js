export const ENEMY_TYPES = {
  grunt: { id: 'grunt', name: 'Toon Grunt', riveKey: 'grunt', maxHealth: 40, speed: 2.4, damage: 8, attackIntervalMs: 1400, attackRange: 2.2, coinDrop: [4, 8], xpDrop: 12, radius: 0.55, height: 1.8 },
  runner: { id: 'runner', name: 'Sugar Runner', riveKey: 'runner', maxHealth: 22, speed: 4.6, damage: 6, attackIntervalMs: 900, attackRange: 1.8, coinDrop: [6, 11], xpDrop: 16, radius: 0.4, height: 1.5 },
  tank: { id: 'tank', name: 'Grave Golem', riveKey: 'tank', maxHealth: 160, speed: 1.35, damage: 18, attackIntervalMs: 2000, attackRange: 2.6, coinDrop: [14, 24], xpDrop: 40, radius: 0.85, height: 2.4 },
}
export function rollDrop(range) {
  const [min, max] = range
  return min + Math.floor(Math.random() * (max - min + 1))
}
