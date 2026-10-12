# Self-assessment — IA#1

Submitted by: 24127119 —  Tran Phuoc Tai 

Total I claim: 91 / 100

## Assessment Against the Rubric

| Criterion | Max | I claim | Evidence |
|---|---:|---:|---|
| Behaviour | 30 | 30 | `src/cart.js`: empty-cart handling, negative-price and positive-integer quantity validation, subtotal calculation, VAT, subtotal-based shipping eligibility, and numeric rounding with `Math.round`. `test/cart.test.js` verifies the numeric worked-example result `467400` and the required edge cases. Review of the submitted archive found no mismatch with the README contract. |
| Tests | 20 | 20 | `test/cart.test.js` contains 12 passing cart tests: the worked example, empty cart, exact shipping threshold, VAT exclusion from threshold eligibility, negative price, three separate invalid-quantity cases, rounding, shipping one dong below and above the threshold, and rounding a positive total ending in `.5`. The improved project also includes 5 checker tests in `test/format.test.js`. Running `npm run check` passed all 17 tests (12 cart and 5 gate tests) and the formatting gate. |
| Harness | 20 | 19 | `AGENTS.md` documents the stack, file roles, commands, contract, and explicit prohibitions. `package.json` defines the combined gate. `scripts/check-format.js` checks tabs, trailing whitespace, and final newlines without external dependencies. `.github/workflows/ci.yml` runs the gate on push and pull request using Node.js 24. `test/format.test.js` verifies successful LF/CRLF input and nonzero failure results for missing final newlines, tabs, and trailing whitespace. Earlier evidence shows a green status for commit `789adc2`; the current archive's 17-test CI run has not been independently confirmed. |
| Brief | 15 | 15 | `brief.md`, sections 3–8, documents permitted files, the function contract, error cases, acceptance criteria, and no external dependencies. These documents satisfy the top-band content requirements: permitted files, contract, error cases, and no dependencies. Section 1 honestly discloses that the original brief was completed after implementation. Section 10 documents the follow-up boundary-test task; the three corresponding tests are present in `test/cart.test.js`. `docs/harness-brief.md` was saved before implementing the checker-verification task, with scope, constraints, failure cases, and validation requirements. |
| AI-LOG.md | 15 | 7 | `AI-LOG.md` records the tool, requested tasks, retained output, actual changes, rejected output where applicable, and direct manual work. It distinguishes AI-generated code from applying changes and running checks. The initial log was compiled retrospectively; the follow-up task was recorded during the improvement process. The conservative claim reflects the rubric's warning about after-the-fact logs. |
| **Total** | **100** | **91** | **30 + 20 + 19 + 15 + 7 = 91** |

## What I Did Not Manage

I did not maintain the initial AI log continuously during development or save the complete original brief before requesting implementation. Both limitations are disclosed instead of reconstructing a false timeline.

The format checker enforces a small set of basic rules rather than providing comprehensive formatting or lint analysis. The earlier repository screenshot showed a green status for the initial commit; I still need to verify the final 17-test version in GitHub Actions before submission.

I have not run the instructor's hidden tests. AI supplied most of the implementation, additional tests, harness configuration, and document drafts. My direct work included applying the changes, running checks, fixing reported formatting problems, and managing the repository.

## What I Would Do Differently

I would write the original brief before implementation, record AI assistance immediately after each task, and independently design some tests. I would also verify and record the final CI run and practise explaining each validation condition, shipping eligibility before VAT, numeric return type, and rounding behaviour.

## Before Submission

- Replace the student ID and full-name placeholders above.
- Confirm that the final GitHub Actions run passes all 17 tests and formatting checks.
- Keep this report consistent with the actual final files and evidence.
- Include this file at the root of the submission ZIP, alongside `package.json`.
- Name the ZIP `<StudentID>_91.zip` if the claimed total remains 91.

The score is a self-assessment proposal, not a confirmed instructor mark.

## Scoring Basis and Remaining Uncertainty

The Brief claim evaluates the document against the rubric's explicit
content requirements. Its retrospective timing is still disclosed.
The AI-log claim remains conservative because the rubric separately
mentions logs written after the fact. Later contemporaneous entries
may be assessed differently by the instructor; this report does not
assume a higher score for them.

The final remote CI result is not established by a passing local run.
If the final 17-test GitHub Actions run is confirmed green, the Harness
claim can be reconsidered up to 20 and the total up to 92. A claim of 95
would also require an independently defensible higher AI-log assessment;
it is not established by rewording the log.
