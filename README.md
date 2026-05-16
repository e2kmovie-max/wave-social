# wave-social

Wave social service: rooms, chat messages, playback sync state, user presence/status, and Telegram required-channel gate data.

## Contents

- `packages/social` — TypeScript social facade (`Room`, `makeRoomState`, required-channel CRUD, OP helpers).
- `packages/shared` — current shared persistence/util implementation required by social logic during the split transition.

## Local development

```bash
bun install
bun run typecheck
bun run build
bun run lint
```

## Service boundary

This repository owns user-to-user interaction state. Interface code should use the social facade/API for rooms, chat and sync state; Player code should only depend on social contracts needed to attach videos to rooms.
