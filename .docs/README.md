# .docs

Internal documentation for development workflows and issue tracking.

## Structure

```
.docs/
├── issues/           # Detailed problem write-ups for complex bugs
│   └── *.md          # One file per issue, named descriptively
├── decisions/        # Architecture Decision Records (ADRs)
└── README.md         # This file
```

## Issues

When encountering a complex bug that requires deeper investigation or handoff:

1. Create a new file in `.docs/issues/` with a descriptive kebab-case name
2. Include:
   - **Goal** - What we're trying to achieve
   - **Current State** - Architecture, code snippets, file paths
   - **Strategies Attempted** - What's been tried and why it failed
   - **The Core Problem** - Root cause analysis
   - **Potential Solutions** - Untested approaches
   - **Question for Next Agent** - Clear problem statement

### Active Issues

- [carousel-right-padding.md](issues/carousel-right-padding.md) - Right-side padding not working on horizontal scroll carousels
