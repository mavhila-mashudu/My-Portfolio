# Personal Portfolio Website

## Overview

The design follows a clean professional portfolio style with large editorial typography, fixed project cards, rotating project images, direct project links, and responsive layouts for desktop, tablet, and mobile screens.

## Sections

- **Home** - Hero introduction with summary highlights.
- **Selected Projects** - Project cards generated from `js/data.js`; external projects open their links directly, while the portfolio card shows an in-page message.
- **Skills** - Technical and soft skills grouped into readable panels.
- **Journey** - Timeline of academic and project milestones.
- **Why Me** - Service/value cards explaining strengths.
- **About** - Personal profile, university context, facts, and focus areas.
- **Contact** - Email action, social links, quick facts, and footer copyright.


## File Responsibilities

- `index.html` defines the semantic page shell, landmarks, section anchors, stylesheet links, and script loading order.
- `js/data.js` stores portfolio content, project data, image paths, project links, skills, journey entries, about copy, and contact details.
- `js/main.js` renders the hero, skills, journey, service, about, contact, and footer content from `data.js`.
- `js/projects.js` renders selected project cards and links them directly to each project's URL.
- `js/animation.js` handles reveal and scroll-based animation behavior.
- `css/variables.css` stores shared design tokens.
- `css/reset.css` normalizes browser defaults.
- `css/layout.css` controls page-level layout and section spacing.
- `css/components.css` styles navigation, buttons, cards, project visuals, skills, timeline, about, contact, and footer components.

## Features

- Data-driven portfolio content.
- Semantic HTML page structure.
- Direct project-card navigation to live sites or repositories, with an in-page message for the portfolio card.
- Responsive project cards with fixed image frames.
- Rotating project image pairs with reduced-motion support.
- Professional typography and consistent card styling.
- Accessible alt text, labeled navigation, and SVG icons.
- Mobile-friendly layout and touch-sized navigation links.
