import { useCallback, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import World from './World'
import PlayerController from './PlayerController'
import CombatSystem from './CombatSystem'
import LevelManager from './LevelManager'
import Pickups from './Pickups'

export default function GameCanvas() {
  const [obstacles, setObstacles] = useState([])
  const handleObstacles = useCallback((boxes) => setObstacles(boxes), [])
  return (
    <Canvas shadows camera={{ fov: 75, near: 0.08, far: 140, position: [0, 1.7, 8] }} style={{ position: 'absolute', inset: 0 }} gl={{ antialias: true, alpha: false }}>
      <World onObstacles={handleObstacles} />
      <PlayerController obstacles={obstacles} lockSelector="#lock-target" />
      <CombatSystem />
      <LevelManager />
      <Pickups />
    </Canvas>
  )
}
