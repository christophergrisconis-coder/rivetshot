# RivetShot — suggestions for Grok Bot / Copilot Agent

Paste the **First prompt** into Grok Bot after you open this project folder.

## First prompt (copy this)

```
This folder is RivetShot, a cartoon 2.5D FPS.

Hard rules:
- Keep WebGL <Canvas> and HTML UI as siblings. Never put buttons inside Canvas.
- Guns (equippedWeaponId) and skins (equippedWeaponSkin) stay separate.
- Pause / store / skills / inventory / waveShop must freeze enemy and boss AI.
- Missing .riv files must fall back to HTML / mesh placeholders. Do not crash.
- Do not rewrite the architecture. Patch the existing files.

First job only:
1. List which source files are missing compared to a playable Vite app
   (store, combat, player, world, enemies, HUD, menus).
2. If files are missing, restore them from the local zip or ask me for them.
3. Then run npm install && npm run dev and tell me the URL.

Do not start a redesign. Do not add Rapier. Do not add a backend.
```

## After the game runs — add these in order

Do **one** item per Bot session.

1. Finish the GitHub tree. This GitHub repo is incomplete. Copy every file from the local cartoon-fps folder onto this repo and commit.
2. Floating damage numbers when fx.lastHits[id] updates.
3. Inspect weapon on KeyV (Rive Inspect trigger, HTML fallback tilt).
4. Invert Y — Settings already has invertY; make look pitch respect it.
5. Enemy Rive billboard with plane fallback.
6. Tiny HTML minimap (player + enemy dots).
7. Death cam: keep canvas mounted, orbit last killer, stop shooting.
8. Daily seed modifier on the main menu card.

## Do not add yet

Rapier, multiplayer, procedural maps, a second mode, Redux rewrite.

## VS Code model

Default Agent: Claude Sonnet 5. Tight patch: GPT-5.6 Terra. Same skeleton: Grok 4.6 Copilot.
