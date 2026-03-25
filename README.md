# SweetNecta

> *Four moments. Four coffees.*

A cinematic coffee brand experience built with scroll-scrub video, kinetic typography, and smooth Lenis scroll.

![SweetNecta](https://img.shields.io/badge/built%20with-homepage--master-ff6b6b?style=flat-square)

## The Experience

Four videos. Four panels. One journey through coffee.

**The Classic** — Your morning ritual, perfected.  
**The Night Owl** — For those who burn the midnight oil.  
**The Sunrise** — Bright, floral, hopeful.  
**The Sunset** — The perfect end to any day.

## Tech Stack

| Layer | Tool |
|-------|------|
| Scroll | [Lenis](https://github.com/studio-freight/lenis) |
| Animation | [GSAP](https://greensock.com/gsap/) + ScrollTrigger |
| Typography | [SplitType](https://github.com/lukePeavey/SplitType) |
| Fonts | Playfair Display, Inter, IBM Plex Mono |

## Features

- **Scroll-scrub video** — Videos scrub with scroll position
- **Pinned panels** — Full-viewport sections that lock in place
- **Kinetic typography** — Text animates with scroll progress
- **Smooth momentum** — Lenis provides buttery scroll physics
- **Performance-first** — GPU-accelerated transforms only

## Local Development

```bash
cd sweetnecta-final
# Serve with any static server
python3 -m http.server 8000
# or
npx serve .
```

Open `http://localhost:8000`

## Structure

```
sweetnecta-final/
├── index.html          # Single-page cinematic experience
├── css/
│   └── style.css       # Custom properties + animations
├── js/
│   ├── main.js         # Lenis + GSAP setup
│   └── scroll-scrub.js # Video scroll-scrub logic
└── videos/             # 4 scroll-scrub video assets
    ├── make_the_woman_turn_her_head...
    ├── make_the_coffee_pour...
    ├── pour_the_coffee_down...
    └── pour_the_coffee_out_the_robot...
```

## Design System

```css
/* Colors */
--color-bg: #0A0806;
--color-text: #E8E6E3;
--color-text-muted: rgba(232, 230, 227, 0.6);
--color-accent: #E8E6E3;

/* Typography */
--font-display: 'Playfair Display', serif;
--font-body: 'Inter', sans-serif;
--font-mono: 'IBM Plex Mono', monospace;

/* Animation */
--ease-expo: cubic-bezier(0.16, 1, 0.3, 1);
```

## Credits

Built with the **homepage-master** skill — premium cinematic website builder for award-winning scroll experiences.

## Contact

Want a cinematic website like this? Get in touch:

- 📧 **Email**: aiagent.mackenzie@gmail.com
- 💼 **Services**: Web Design, Mobile App Development, AI Solutions, OpenClaw Setup

## License

Proprietary — SweetNecta Brand Experience

---

*"When you don't have your morning coffee, things just aren't right."*
