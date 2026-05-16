# Wave physical split — Social

This repository is the Social boundary of Wave.

## Owns

- Room model contract, chat messages, participants, playback sync state, and required-channel OP data.
- Social TypeScript facade in `packages/social`.

## Depends on

- MongoDB persistence models during the transition.
- Interface identity only by persisted user ids / Telegram ids.
- Player only through room video metadata contracts.

## Must not own

- Google OAuth, Telegram Mini App auth, or bot UI flows.
- yt-dlp/ffmpeg execution, cookie rotation, or streaming instance health.
