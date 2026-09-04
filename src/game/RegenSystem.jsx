import { useEffect } from 'react'
import { useGameStore } from '../store/useGameStore'
const COMBAT_GRACE_MS = 2800
export default function RegenSystem() {
  useEffect(() => {
    const id = window.setInterval(() => {
      const s = useGameStore.getState()
      if (s.phase !== 'playing') return
      const { regenPerSec } = s.derived
      if (!regenPerSec) return
      if (performance.now() - s.lastHitAt < COMBAT_GRACE_MS) return
      if (s.player.health >= s.player.maxHealth) return
      s.healPlayer(regenPerSec * 0.25)
    }, 250)
    return () => window.clearInterval(id)
  }, [])
  return null
}
