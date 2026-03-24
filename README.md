# 🏞️ ParkFinder: The Ultimate US National Parks Explorer

[![Live Demo](https://img.shields.io/badge/Live_Demo-Play_Now-4a6cf7?style=for-the-badge&logo=vercel)](https://nikag-ai.github.io/national-parks/)
[![Vanilla JS](https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)]()

**ParkFinder** is a blazing-fast, strictly client-side Single Page Application (SPA) designed to help you intelligently discover, filter, and plan your trips across all **63 US National Parks**. 

Built with zero backend dependencies, it utilizes deeply structured offline data and a powerful Reactivity Engine written entirely in Vanilla JavaScript to provide an instantly responsive, heavily personalized travel planning experience.

## ✨ Features

* **Complete NPS Dataset**: Comprehensive 2026 data mapping all 63 official parks.
* **Smart Offline Filtering**: Instantly isolate parks by Best Month, Required Transit Time, Star Ratings (algorithmically scored out of 5), Transit Stops (e.g. Drive/No Flight vs 1-Stop), and Stargazing (`Dark Sky`) capabilities.
* **Persistent Local State**: Behave like a logged-in user without a database. Every park you explicitly ⭐ Favorite, ✓ Visit, or 🙈 Hide is mapped natively to your browser's `localStorage` and frozen across sessions.
* **Dynamic Dataset Constraints**: The UI intelligent sliders mathematically bounds themselves to the subset of parks you are currently looking at.
* **Algorithmic Sorting Engine**: Rank search results iteratively by total `Distance` (Flight Minutes + Drive Minutes from SFO), `Rating`, `Shortest Days required`, or `Stargazing`.
* **Deep Explanatory Modals**: Click into any card to surface extensive AI-curated metadata including:
  * Sample 3-5 day itineraries
  * Safety Warnings (Dos & Donts) and Travel Hacks
  * Aspirational Quotes representing genuine Reddit Consensus

## 🚀 Live Demo

You can explore the live, fully interactive application directly here:
👉 **[https://nikag-ai.github.io/national-parks/](https://nikag-ai.github.io/national-parks/)**

## 💻 Tech Stack Setup

ParkFinder embraces the raw power of the modern browser. No build steps, no complex framework configurations, and no compilation times.

* **HTML5**: Semantic document structuring.
* **CSS3**: Completely bespoke modern styling architecture utilizing Glassmorphism, smooth CSS gradients, flex-grids, and CSS Grid.
* **JavaScript (ES6+)**: A robust Vanilla JS state management engine that filters complex datasets and orchestrates real-time virtual DOM template rendering.

### 🏃 Running Locally

1. Clone the repository:
```bash
git clone https://github.com/nikag-ai/national-parks.git
cd national-parks
```

2. Open instantly locally:
```bash
# MacOS
open index.html

# Windows
start index.html
```
*(Optionally, spin up a lightweight local server like `npx serve .` or `python3 -m http.server`)*

---

*Data provided is highly curated but approximate. Always configure specific park availability, seasonal closures, and permit requirements via [recreation.gov](https://recreation.gov) before planning serious travel.*
