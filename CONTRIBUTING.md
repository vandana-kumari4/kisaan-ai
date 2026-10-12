# Contributing to Kisaan.AI

Welcome, and thanks for helping! 🌱

## Workflow
1. Clone the repo: `git clone <repo-url>`
2. Create a branch for your work: `git checkout -b feature/short-name`
3. Make small, focused commits: `git commit -m "Add: market price filter"`
4. Pull the latest main before pushing: `git pull origin main --rebase`
5. Push your branch: `git push origin feature/short-name`
6. Open a Pull Request on GitHub and ask a teammate to review it.

**Don't push directly to `main`** once the team starts working in parallel.

## Tips
- Keep styles in `css/styles.css` and reuse the CSS variables in `:root`.
- Each dashboard panel lives in `index.html` under its `<!-- ===== ... ===== -->` comment — pick one panel per person to avoid merge conflicts.
- Never commit API keys or `.env` files.
