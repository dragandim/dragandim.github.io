# dragandimitrijevic.com — Redesign Brief

> Living document. Update as decisions are made.
> Repo: `~/dev/github/dragandim.github.io`
> Live site: https://www.dragandimitrijevic.com

---

## Stack

- **SSG:** Jekyll (keep — no migration)
- **CSS:** Tailwind CSS v3 + PostCSS (keep)
- **PDF rendering:** Prince XML (keep)
- **Hosting:** GitHub Pages

---

## Content Updates — DONE ✅

### New work experience
- `_posts/work/2025-09-01-myver.md` — Software Engineer @ Myver (Sep 2025–present)

### New projects
- `_posts/project/2025-09-03-cloud-infrastructure-platform.md`
- `_posts/project/2025-09-04-release-management-platform.md`

### Skills updated
- `_data/skills.yml` — Terraform added (#5), TypeScript raised to 80, PHP moved below limit:12, DynamoDB raised to 80
- `_data/frameworks.yml` — React raised to 80, React Router added, CodeIgniter removed
- `_data/cloud-frameworks.yml` — Added: Terraform, Terragrunt, OpenTofu, GitHub Actions, FluentBit, Betterstack, Ory Hydra, Ory Kratos
- `_data/aws.yml` — Added: CodeDeploy, EventBridge, CloudMap, ECR, SSM; raised ECS Fargate to 90, API Gateway to 85, VPC to 85

---

## PDF Templates — TODO

### Problem
Both CV and Portfolio dump all 11 work roles. 20+ years of history is too much for a CV.

### Solution: `cv_include` flag
Add `cv_include: true/false` to each work post frontmatter.
Update `pages/pdf-cv/work_experiences.md` template to filter:
```liquid
{% if post.cv_include != false %}
```

### CV — include these roles only (last ~8 years)
| Role | Company | cv_include |
|---|---|---|
| Software Engineer | Myver | true |
| Senior Backend Developer | Appvestor | true |
| Full Stack Developer | kompasbank | true |
| Senior Backend Developer | Nordlid | true |
| Freelancer | — | true |
| Lead Backend Developer | Increase | true (optional, borderline) |
| All earlier roles | — | false |

### CV target: 2 pages max
### Portfolio: include all, full content

---

## Website Redesign — TODO

### Aesthetic Direction: "Engineering Dark"
Inspired by GitHub, Linear, Vercel. Senior infrastructure engineer aesthetic — serious, precise, technical depth.

#### Color palette
```
--color-bg:        #0D1117   /* near-black, GitHub dark */
--color-surface:   #161B22   /* cards, sections */
--color-accent:    #58A6FF   /* electric blue */
--color-text:      #E6EDF3   /* near-white */
--color-muted:     #8B949E   /* secondary text, dates */
--color-border:    #30363D
```

#### Typography
- **Display/headings:** Geist (or similar — not Inter, not Roboto)
- **Body:** Inter or Geist
- **Technical details** (dates, tags, code snippets): Geist Mono or JetBrains Mono
- Fluid type sizing with `clamp()`

#### Layout changes per section

**Navbar**
- Keep sticky
- Add `backdrop-blur` + `border-b border-[#30363D]` instead of solid slate-800
- Subtle — doesn't compete with content

**Hero**
- Full viewport height
- Large name in display font (not Poppins)
- Role in mono below
- 3 stat pills: `20 yrs · 11 companies · AWS + Terraform`
- Two CTAs: Download CV + LinkedIn
- Background: subtle dot grid or noise texture — not a photo

**Work Experience**
- Vertical timeline layout (thin left border + dot nodes)
- Left column: date range in mono, right column: role + company + bullets
- Skill tags as small pills under each entry (from `skills:` frontmatter)
- Current role (Myver) has accent-colored border/dot

**Projects**
- 2-column card grid
- Each card: title, one-liner description, tech stack pills, AWS service badges
- Hover: subtle card lift (`translateY(-2px)` + border brightens)
- No more flat list

**Skills**
- Drop icon grids and percentage bars entirely
- Grouped tag clouds by category:
  - Cloud & Infrastructure
  - Backend
  - Frontend
  - DevOps & CI/CD
  - Databases
- Clean pill tags, monospace font, no icons, no percentages
- Much more scannable for recruiters/engineers

**Footer**
- Minimal: name + year + GitHub + LinkedIn + email
- Dark, matches navbar

---

## PDF Redesign — TODO

### CV (2 pages, Prince XML)
- Two-column header: name/role left, contact right
- Thin accent rule under header
- Work experience: compact, filtered via `cv_include`
- Skills: comma-separated tags grouped by category (no icons, no percentages)
- Clean running footer with page numbers via Prince `@page`

### Portfolio (longer, richer)
- Full project detail with tech stack
- All roles included
- Can use slightly more decorative layout

---

## Files to create/modify for redesign

| File | Action |
|---|---|
| `assets/css/main.css` | Full Tailwind theme overhaul, new CSS variables |
| `assets/css/print.css` | CV/Portfolio PDF styling |
| `_includes/navbar.html` | Backdrop blur, new color |
| `_includes/hero.html` | Full rewrite — stats, new layout |
| `_includes/work-experience.html` | Timeline layout |
| `_includes/project.html` | Card grid layout |
| `_includes/skills.html` | Tag cloud groups, drop icon grid |
| `_includes/head.html` | New fonts |
| `_layouts/home.html` | Adjust if needed |
| `_layouts/cv_print.html` | Two-column header, running footer |
| `_layouts/portfolio_print.html` | Richer layout |
| `pages/pdf-cv/work_experiences.md` | Add `cv_include` filter |
| Each `_posts/work/*.md` | Add `cv_include: true/false` |

---

## Plugin context
`frontend-design@claude-plugins-official` installed and enabled in `~/.claude/settings.json`.
Skill guidance: commit to bold aesthetic direction, distinctive typography, dominant color with sharp accents,
unexpected spatial composition, atmosphere over flat backgrounds.

---

## Session notes
- bypassPermissions mode enabled in `~/.claude/settings.json`
- prefersReducedMotion: true (no spinner animations)
