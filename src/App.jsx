/**
 * APP SHELL
 * Canvas (WebGL world) is a full-viewport sibling of HTML overlays.
 * Never parent a <button> inside <Canvas>.
 */

import { useEffect } from 'react'
import { useGameStore } from './store/useGameStore'
import GameCanvas from './game/GameCanvas'
import Hud from './ui/Hud'
import Crosshair from './ui/Crosshair'
import BossHealthBar from './ui/BossHealthBar'
import MainMenu from './ui/MainMenu'
import PauseMenu from './ui/PauseMenu'
import Store from './ui/Store'
import SkillTree from './ui/SkillTree'
import Inventory from './ui/Inventory'
import { DeadScreen, VictoryScreen } from './ui/EndScreens'
import RiveWeaponViewmodel from './rive/RiveWeaponViewmodel'
import RiveHud from './rive/RiveHud'
import RegenSystem from './game/RegenSystem'
import WaveShop from './ui/WaveShop'
import Settings from './ui/Settings'
import HelpTip from './ui/HelpTip'

export default function App() {
  const phase = useGameStore((s) => s.phase)
  const hydrateProgress = useGameStore((s) => s.hydrateProgress)

  useEffect(() => {
    hydrateProgress()
  }, [hydrateProgress])

  const inWorld = phase !== 'menu'
  const showPlayHud = phase === 'playing'

  return (
    <div className="relative h-dvh w-dvw overflow-hidden bg-black text-white antialiased">
      {inWorld && <GameCanvas />}
      <RegenSystem />
      {showPlayHud && (
        <button
          id="lock-target"
          aria-label="Click to lock mouse and play"
          className="absolute inset-0 z-10 cursor-crosshair bg-transparent"
        />
      )}
      {showPlayHud && (
        <>
          <RiveHud />
          <Hud />
          <BossHealthBar />
          <Crosshair />
          <RiveWeaponViewmodel />
          <HelpTip />
        </>
      )}
      {phase === 'menu' && <MainMenu />}
      {phase === 'paused' && <PauseMenu />}
      {phase === 'store' && <Store />}
      {phase === 'skills' && <SkillTree />}
      {phase === 'inventory' && <Inventory />}
      {phase === 'settings' && <Settings />}
      {phase === 'waveShop' && <WaveShop />}
      {phase === 'dead' && <DeadScreen />}
      {phase === 'victory' && <VictoryScreen />}
      {phase === 'playing' && (
        <p className="pointer-events-none absolute left-1/2 top-4 z-30 -translate-x-1/2 text-[10px] uppercase tracking-[0.35em] text-white/30">
          click the world to lock mouse
        </p>
      )}
    </div>
  )
}
