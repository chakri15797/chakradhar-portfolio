# AGENTS.md

## Environment
- OS: win32, shell: PowerShell 5.1. No `&&`; chain with `;` or `if ($?) { ... }`.
- Quote paths with spaces; backtick is the escape char.
- Use `workdir` param instead of `cd`.
- Temp scratch dir (pre-approved): `C:\Users\nadik\AppData\Local\Temp\opencode`.
- PowerShell blocks `npm` (the .ps1 shim). Use `npm.cmd` (and `npx.cmd`) instead.

## Project
- Next.js 15 (Pages Router) + React 19 portfolio. Custom CSS in `styles/globals.css` (no Tailwind/MUI).
- Entry: `pages/index.js` (single `"use client"` page), wrapper `pages/_app.js`, design tokens in `styles/globals.css`.
- Personal data lives inline in `pages/index.js` (ROLES, PROJECTS, STACK, EXPERIENCE, etc.). Edit there.
- Profile photo: drop `photo.jpg` in `public/`; code already falls back to an SVG placeholder.
- Must keep single source of truth; don't duplicate content between files.

## Commands (run via `npm.cmd`, not `npm`)
- `npm.cmd run dev` — dev server
- `npm.cmd run build` — production build (also type-checks; Next auto-edits tsconfig on build)
- `npm.cmd run start` — serve production build
- `npm.cmd run typecheck` — `tsc --noEmit`

## Style
- Be concise; no back story, no filler. Answer in as few tokens as the task allows.