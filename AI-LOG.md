# AI-LOG.md — CSC13008 IA#1

This log was compiled from the guidance conversation and terminal
results after implementation and CI setup. It was not maintained
continuously from the beginning.

## 2026-10-11 — Assignment Requirements and Workflow Planning

Tool: ChatGPT.
Asked for: Explain the starter project, assignment rubric, AI log,
and self-assessment requirements.
Kept: The workflow of running the initial test, implementing the
function, adding tests, configuring checks and CI, and documenting
AI assistance.
Changed: None.
Rejected: None.
By hand: No code was written at this stage; this task focused on
understanding the assignment requirements.

## 2026-10-12 — Environment Setup and Initial Failing Test

Tool: ChatGPT.
Asked for: Help resolve the PowerShell error blocking npm and run
the starter test.
Kept: Using npm.cmd instead of npm in Windows PowerShell.
Changed: Adjusted the terminal commands without changing the
PowerShell execution policy.
Rejected: None.
By hand: Checked the Node.js version, ran npm.cmd test, and inspected
the initial failure caused by Error: not implemented.

## 2026-10-12 — cartTotal Implementation

Tool: ChatGPT.
Asked for: Guide the implementation of cartTotal and explain each
part of the function.
Kept: The proposed implementation using a single loop, RangeError
validation, subtotal-based shipping eligibility, and Math.round.
Changed: Added the final newline in src/cart.js after the formatting
check reported it missing. The proposed calculation logic was kept.
Rejected: None.
By hand: Applied the code to src/cart.js, saved the file, and ran the
starter test. Confirmed that the worked example passed with the
expected total of 467400. The function logic was AI-generated.

## 2026-10-12 — Specification-Based Tests

Tool: ChatGPT.
Asked for: Add tests covering the remaining rules and explain
the assertions.
Kept: Eight additional tests covering an empty cart, the exact
free-shipping threshold, VAT exclusion from threshold eligibility,
a negative price, three invalid quantities, and rounding.
Changed: Added the final newline in test/cart.test.js after the
formatting check reported it missing.
Rejected: None.
By hand: Added the proposed tests while retaining the original
starter test. Ran npm.cmd test and checked that all 9 tests passed.
The additional test code was AI-generated.

## 2026-10-12 — Project Rules and Format Quality Gate

Tool: ChatGPT.
Asked for: Guide the creation of project-specific rules and
a dependency-free formatting check.
Kept: AGENTS.md, the Node.js formatting checker, and the test,
format:check, and check npm scripts.
Changed: Added missing final newlines in src/cart.js,
test/cart.test.js, and scripts/check-format.js after the first
combined check failed.
Rejected: None.
By hand: Created the files, updated package.json, ran
npm.cmd run check, and corrected the reported formatting issues.
Ran the check again and confirmed 9 passing tests and
Basic formatting checks passed.

## 2026-10-12 — GitHub Actions CI and Repository Setup

Tool: ChatGPT.
Asked for: Guide CI configuration, Git initialization, committing,
and pushing the project to GitHub.
Kept: The workflow using Node.js 24 and npm run check on push and
pull request, together with the Git setup instructions.
Changed: None.
Rejected: None.
By hand: Created .github/workflows/ci.yml, initialized Git, created
commit 789adc2, created the GitHub repository, and pushed the project.
Checked the repository page, which displayed a green status beside
the commit.

## 2026-10-12 — Implementation Brief Documentation

Tool: ChatGPT.
Asked for: Draft the contents of brief.md and improve its Markdown
heading structure.
Kept: The permitted files, function contract, error cases, worked
example, acceptance criteria, constraints, and validation commands.
Also kept the note disclosing that the brief was documented after
implementation.
Changed: Requested numbered sections and clearer heading levels.
Rejected: None.
By hand: Created an empty brief.md initially. The complete brief
was drafted by ChatGPT after implementation; I requested a clearer
layout. The brief was not used as a complete written prompt before
code generation.

## Scope of AI Assistance

ChatGPT supplied the function implementation, additional tests,
project rules, formatting script, CI configuration, and document
drafts.

My direct work included applying the proposed changes, running
checks, correcting reported formatting issues, and managing the
Git repository. I have not claimed the generated code as
independently written by me.
