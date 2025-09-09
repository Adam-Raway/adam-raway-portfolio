# Portfolio Website Spec Sheet + Task Checklist

## Setup & Deployment

### Coding

- [ ] Initialize Next.js project with TypeScript
- [ ] Set up project structure (pages, components, styles)
- [ ] Configure routing for scroll-to-section navigation
- [ ] Prepare mock data (JSON) for Projects and Publications
- [ ] Add environment config for future database connection
- [ ] Deploy initial version to Render

### Designing

- [ ] Decide on base layout (grid/flexbox strategy)
- [ ] Create placeholder color palette & typography tokens
- [ ] Set up global styles (spacing, shadows, etc.)

### Writing

- [ ] Draft initial placeholder content for all sections

---

## Navbar

### Coding

- [ ] Implement sticky, semi-transparent navbar
- [ ] Add scroll-to-section functionality with highlighting
- [ ] Add icon buttons (light/dark toggle, etc.)

### Designing

- [ ] Style hover/focus states
- [ ] Ensure highlight animation for current section
- [ ] Apply semi-transparency and shadow for floating effect

### Writing

- [ ] Finalize section titles (About Me, Career, Skills, Portfolio, Contact)

---

## About Me

### Coding

- [ ] Create component with profile image, intro text, and quick links
- [ ] Add token-style buttons for interests

### Designing

- [ ] Layout for image + text balance
- [ ] Styling for tokens (consistent across site)
- [ ] Hover animation for links

### Writing

- [ ] Short greeting (1–2 sentences)
- [ ] Intro text about who you are
- [ ] Fill in interests list

---

## Career

### Coding

- [ ] Implement timeline component with icons
- [ ] Add ability to switch to “Education” view
- [ ] Fetch data from mock JSON

### Designing

- [ ] Roman-style layout with clean visual hierarchy
- [ ] Icons for each entry
- [ ] Smooth animation for expanding/swapping panels

### Writing

- [ ] Write 4 highlighted experiences (roles, dates, short descriptions)
- [ ] Write education info (relevant courses, GPA, clubs)

---

## Skills

### Coding

- [ ] Build “Skills Tree” component (root → categories → skills)
- [ ] Implement expandable/collapsible layers

### Designing

- [ ] Define distinct color palette for parent/child buttons
- [ ] Ensure consistent button shapes & transitions
- [ ] Add hover descriptions

### Writing

- [ ] List all technical & professional skills
- [ ] Add one-line description/example for each skill

---

## Portfolio (Projects + Publications)

### Coding

- [ ] Implement card-based grid with scrollable carousel if >3 items
- [ ] Add logic for project vs publication card types
- [ ] Load mock JSON as initial data source

### Designing

- [ ] Card layout (image, title, description)
- [ ] Hover effect to indicate clickability
- [ ] Ensure consistent sizing, spacing, shadows

### Writing

- [ ] Add 2–3 projects (images, titles, descriptions, tags)
- [ ] Add 2–3 publications (titles, sublabels: journal/issue/blog)
- [ ] Add links if applicable

---

## Contact

### Coding

- [ ] Build “console” style interface with buttons for contact methods
- [ ] Add functional links (email, LinkedIn, GitHub)
- [ ] Implement big pause/play button (toggles animation state)
- [ ] **Stretch/Bonus:** Three-Body Problem star animation

### Designing

- [ ] Create console aesthetic (dark theme, terminal font)
- [ ] Style buttons as “commands”
- [ ] Smooth transitions between states

### Writing

- [ ] Short “Get in Touch” blurb
- [ ] Add contact info (email, GitHub, LinkedIn)
- [ ] Add optional witty console text

---

## Endbar

### Coding

- [ ] Add footer with name + quick links back to sections
- [ ] Include copyright text

### Designing

- [ ] Keep minimal, clean aesthetic
- [ ] Match navbar styling

### Writing

- [ ] Finalize quick link labels
- [ ] Add copyright statement

---

## Future Enhancements

- [ ] Replace mock JSON with real database integration (tech TBD)
- [ ] Advanced star simulation for Contact section
- [ ] Add analytics (visitor count, clicks)
- [ ] Expand Projects/Publications dynamically from DB
