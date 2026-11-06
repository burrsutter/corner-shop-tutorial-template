# web/ — Corner Shop stock dashboard (owned by the web-builder worktree)

A browser dashboard built with plain HTML, JavaScript modules, and CSS, served
locally by Vite. It reads products from `../shared/contract.ts` (the human-owned
contract) and must render product names literally via `textContent`.

Only the `web-builder` worktree edits this folder. Do not touch `api/`, `batch/`,
or `shared/`. The workshop prompt in Module 06 gives the exact requirements
(table "Corner Shop inventory", type-to-filter search, Vite dev on
127.0.0.1:5714, `build`/`dev` scripts). Nothing is implemented yet.
