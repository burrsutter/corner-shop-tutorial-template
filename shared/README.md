# shared/ — human-owned contract

`contract.ts` is the Corner Shop product contract and sample fixture used by
`web/`, `api/`, and `batch/`. Workers **read** it; they do not change it.

Change this folder only through the tutorial's dependency gate: edit the
contract, accept the change, then release the consuming worktrees to adopt the
new value. This is how the workshop teaches coordinating a change that several
agents depend on.
