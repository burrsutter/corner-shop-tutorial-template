# batch/ — Corner Shop nightly report (owned by the batch-builder worktree)

A TypeScript batch job that summarizes inventory from `../shared/contract.ts`:
`summarize(items)` returns `{ count, totalStock }` for typed
`{ id: string; stock: number }` items. A report entry point and `npm run report`
print the summary as JSON. For the sample fixture the result is
`count 2, totalStock 5` (and `totalStock 7` after the dependency-gate change).

Only the `batch-builder` worktree edits this folder. Do not touch `web/`, `api/`,
or `shared/`. Run it manually; scheduling is a later task. The workshop prompt in
Module 06 gives the exact requirements. Nothing is implemented yet.
