# Plan: Phần trắc nghiệm dành cho người xem

Status: Complete
Mode: --fast
Risk: tiny — add one gated, client-side quiz to the existing page.

## Objective

Add a fourth, clearly labeled trắc nghiệm section with five multiple-choice questions grounded only in the existing 1954–1975 presentation content. Unlock it using the characters of `30/04/1975` in reverse order; ignore separators when checking the entered password.

## Phase 01 — Add the password-gated quiz

- [x] Add five questions covering the historical context, meaning, victory factors, campaign sequence, and present-day application.
- [x] Add an accessible password form without showing the password hint.
- [x] Show correctness and explanation as soon as each answer is selected; keep questions independent and allow a full retry.
- [x] Add a fourth navigation item and active-section tracking.
- [x] Keep the existing Vietnamese typeface, palette, mobile layout, and reduced-motion support.
- [x] Build the site successfully.

## Session Notes

**Last active:** 2026-10-23
**Phase in progress:** none
**Status:** Implemented and build verified.

### Decisions made this session

- Password is the complete character reversal of `30/04/1975`, accepted with or without separators.
- The quiz is a presentation interaction, not account security; it uses the existing static frontend.

### Next immediate action

None.
