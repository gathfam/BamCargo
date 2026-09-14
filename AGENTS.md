# BAM Cargo — AI Agent Rules

This document defines operational rules, coding philosophy, and boundaries for AI agents working on BAM Cargo.

Read this before making any code changes.

---

# 1. Project Philosophy

BAM Cargo prioritizes:

- Maintainability
- Explicit code
- Pragmatic architecture
- Production stability
- Minimal unnecessary abstraction
- Reusable utilities where appropriate
- Clean and readable implementation

Avoid:

- Overengineering
- Premature abstraction
- "Smart" but unreadable code
- AI-generated boilerplate patterns
- Massive refactors without strong justification

The codebase intentionally favors straightforward implementations.

---

# 2. AI Behavior Rules

## Do NOT:

- Use emojis
- Add unnecessary greetings/opening/closing text
- Add motivational or moralizing explanations
- Generate placeholder code
- Generate incomplete implementations
- Produce overly verbose explanations
- Use semicolons
- Overuse bullet points for reasoning-heavy tasks
- Generate overly "AI sounding" responses

---

# 3. Code Quality Standards

Generated code must be:

- Production-ready
- Complete
- Readable
- Explicit
- Consistent with existing patterns
- Minimal in diff size when possible

Avoid introducing unnecessary dependencies.

Avoid changing architecture unless clearly needed.

---

# 4. Refactor Rules

AI may:

- Refactor duplicated logic
- Extract reusable utilities
- Improve readability
- Improve maintainability

AI must NOT:

- Perform massive rewrites without permission
- Rename major folders/files unnecessarily
- Change API contracts without approval
- Change deployment workflow without approval
- Change database schema without approval

Large architectural changes require explicit confirmation.

---

# 5. Frontend Conventions

## App Router Structure

Public pages:

```txt
app/(main)
```

Admin pages:

```txt
app/(admin)/admin
```

API routes:

```txt
app/api
```

---

## Client vs Server Components

Default to Server Components unless interactivity is required.

Use Client Components for:

- Interactive UI
- Local state
- Browser APIs
- Event handlers
- Static/non-server-request components

Avoid unnecessary `"use client"` usage.

---

## Forms

Forms commonly use:

- local state
- FormData
- direct validation inside submit handler
- toast-based feedback

Typical pattern:

```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (!title.trim()) {
    toast.error("Judul wajib diisi");
    return;
  }

  mutate(formData);
};
```

Keep validation explicit and readable.

---

# 6. Backend Conventions

Database uses raw mysql2.

Connection pool:

```ts
import mysql from "mysql2/promise";
```

No ORM is used intentionally.

Avoid introducing ORM layers unless explicitly requested.

Prefer explicit SQL queries.

---

# 7. Utilities

Prefer centralized reusable utilities for repeated logic.

Example:

- image URL normalization
- formatting helpers
- date formatting
- fetch wrappers

Avoid duplicating helper logic across components.

---

# 8. Deployment Safety Rules

Critical deployment workflows already exist and are stable.

AI must be extremely careful with:

- standalone output
- pnpm runtime layout
- node_modules handling
- CloudLinux symlink setup
- uploads symlink
- baked environment variables

Never suggest random deployment changes without understanding the existing workflow.

---

# 9. Current Project Direction

Current priorities:

- Feature development
- Copywriting improvements
- UX improvements
- Maintainability improvements
- Small safe refactors

Major infrastructure problems from earlier deployment phases are already resolved.

Production is currently stable.

# Language and Communication Profile

- Main Language: Always respond, explain code, and interact using Indonesian (Bahasa Indonesia).
- Tone: Casual, direct, and to the point.
- Technical Terms: Keep strict coding terms (e.g., middleware, controller, route, request, interface) in English to avoid awkward translations, but write all explanations in Indonesian.
