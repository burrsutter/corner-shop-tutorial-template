# api/ — Corner Shop inventory API (owned by the api-builder worktree)

A TypeScript HTTP API on `node:http` that serves the Corner Shop products from
`../shared/contract.ts`. First slice: `GET /health` → `{"status":"ok"}`,
`GET /products` → the typed product array, unknown routes → 404. It binds
`127.0.0.1`, reads `PORT` (default 5614), and separates an exported server
factory (`src/app.ts`) from the entry point (`src/server.ts`).

Only the `api-builder` worktree edits this folder. Do not touch `web/`, `batch/`,
or `shared/`. The workshop prompt in Module 06 gives the exact requirements and
toolchain. Nothing is implemented yet.
