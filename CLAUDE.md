# CLAUDE.md — FamOS

## Project
**FamOS** — The Operating System for Modern Families. One dashboard for schedules, school updates, chores, and everything in between.

## Claude Code + Codex Guidelines

### Model & Collaboration Strategy
- Use **Opus** for system-level planning, cross-module refactors, and ambiguous/problem-finding tasks
- Use **Sonnet** for well-scoped, local changes and straightforward implementations
- Treat **Codex** as primary code-generation engine; Claude focuses on planning, coordination, review
- Pipeline: Opus plan → Sonnet tasks → Codex implement → Review & polish

### Session & Token Discipline
- Clear session history before unrelated tasks; treat each task as fresh context
- Keep CLAUDE.md concise; push detailed specs into `docs/`
- Prefer minimal context window for small diffs

### Tools & Skills
- Use `.claude/ralph/` for PRD-driven autonomous development
- Use `.claude/superpowers/` for planning, TDD, subagent-driven development
- Prefer project tools over manual work
- Parallelize: Sonnet agents for subtasks, Codex for implementation, Opus for design review

### Review & Quality
- Multi-AI review: Sonnet quick pass → Opus deep pass → Codex different-brain review
- Focus on: security, type safety, edge cases
- Small, meaningful commits at logical stopping points

## Project Structure
```
app/            – Next.js App Router pages
app/api/        – API routes
components/     – React components
lib/            – Utility functions
types/          – TypeScript types
public/         – Static assets
docs/           – Specs, flows, API docs
```

## Package Manager
npm (default Next.js). Do NOT use yarn or pnpm unless migrated.

## Common Commands
```bash
npm run dev     # Start dev server
npm run build   # Production build
npm run lint    # ESLint
npx tsc --noEmit # Type check
```

## Tech Stack
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS

## Product Context
- Target: Dual-income families with multiple kids
- Core insight: Family ops = small company complexity, but tools are WhatsApp + brain
- Zero-to-One: Family Operating System, not shared calendar
- Key features: Family dashboard, school email parsing, chore rotation, weekly prep view
- Pricing: Free (1 child) | Pro $8/mo (unlimited)
