# Public repository safety

This repository is public and is deployed directly as the browser-facing website.

## Safe to publish

- Website layout, styles and public assets
- Deliberately published report output
- Public Blizzard profile and guild snapshot data used by the website
- User-facing descriptions of confidence and evidence limits

## Keep private

- Raw combat logs and uploaded source files
- Parser implementation and field mappings
- Cause & Effect rules, scoring weights and mechanic classifications
- AI prompts, evaluation data and private review evidence
- API credentials, tokens, environment files and service-account files
- Authentication records, approved-user lists, billing data and admin controls

Run `node scripts/check-public-safety.js` before each release. The GitHub workflow runs the same check on pushes and pull requests.

Published report output can still reveal player activity and analysis conclusions. Only publish reports intended to be publicly viewable. Future private reports and uploads require authenticated backend storage rather than this static repository.
