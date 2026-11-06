# Corner Shop — one codebase, N agents via worktrees

A single student-facing repository for the Herdr, t3, and Orca agent tutorials.
Instead of running three separate repos, you add **this one repo** to your tool
and let **N agents each work in their own Git worktree** on the same codebase —
one writer per folder, a shared contract everyone reads.

> Fictional sample data. No real store, prices, or inventory.

## Ownership map

Each worker owns exactly one top-level folder. No worker edits another's folder,
and no worker edits `shared/` — that contract is human-owned and changes only
through the workshop's dependency gate.

```
corner-shop/
├── shared/contract.ts   ← human-owned product contract + sample fixture
├── web/                 ← web-builder worktree owns this   (dashboard, Vite)
├── api/                 ← api-builder worktree owns this   (TypeScript HTTP API)
├── batch/               ← batch-builder worktree owns this (nightly report)
└── README.md            ← this ownership map
```

The three folders are the default fleet. The pattern generalizes: add an
`orders/` or `mobile/` folder and a worktree that owns it for the Nth agent.

## The worktree model

1. Add this repository to your agent tool **once**.
2. Create one **worktree (workspace) per worker**, each on its own branch off
   `main` — e.g. `web-builder`, `api-builder`, `batch-builder`.
3. Give each worktree an agent/identity and point it at **its** folder only.
4. Workers run in parallel without colliding, because file ownership is split by
   folder and the shared contract is read-only to them.
5. You review each worktree's diff and merge accepted branches back into `main`.

## The shared contract

`shared/contract.ts` is the single source of truth for Corner Shop products.
Every worker imports the `Product` type and the `products` fixture from it rather
than redefining the data. Changing stock, names, or shape is a **contract
change**: you edit `shared/`, accept it, then release the consumers to adopt it.
That is the dependency gate the tutorials teach.

Sample fixture: `p1` "Tea & Coffee" stock 3, `p2` "Mug <blue>" stock 2.
`Mug <blue>` deliberately contains HTML-like characters so consumers must render
names literally (e.g. via `textContent`), not as markup.
