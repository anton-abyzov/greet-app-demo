---
name: commit-message
description: Write a git commit message for a diff in this team's format. Use when asked to write, suggest or fix a commit message.
metadata:
  version: "1.0.1"
---

# Commit message

Write one commit message for the change you are given.

## Format

- Subject line: `<type>: <summary>`, where type is one of feat, fix, docs, refactor, test or chore.
- Keep the subject at 50 characters or fewer, in the imperative mood ("add", not "added"), with no full stop.
- Leave one blank line, then a body of one to three lines that says why the change was made.
- Mention the issue number in the body when there is one.

## Output

Reply with the commit message only: plain text, no code fences, no preamble.
