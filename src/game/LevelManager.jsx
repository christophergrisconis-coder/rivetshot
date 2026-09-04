import { useMemo } from 'react'
import { useGameStore } from '../store/useGameStore'
import Enemy from './Enemy'
import BossManager from './BossManager'

export default function LevelManager() {
  const enemies = useGameStore((s) => s.enemies)
  const list = useMemo(() => Object.values(enemies), [enemies])
  return (
    <group name="level-actors">
      {list.map((inst) => (
        <Enemy key={inst.id} instance={inst} />
      ))}
      <BossManager />
    </group>
  )
}
