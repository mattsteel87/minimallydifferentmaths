# Minimally Different Maths Prototype

This is a lightweight browser prototype that generates 10 minimally different questions from a chosen topic and difficulty.

## Included topics

- Equivalent Fractions
- Order of Operations
- One-step Equations
- Expanding Brackets
- Negative Numbers
- Substitution

## Run locally

Open [index.html](/C:/Users/msteel/OneDrive%20-%20Holland%20&%20Barrett/Documents/TPT/minimally_different_app/index.html) in a browser.

## Google Analytics

GA4 is wired into all public pages through:

- `analytics-config.js`
- `analytics.js`

To enable tracking, set your Google Analytics measurement ID in `analytics-config.js`:

```js
window.GA_MEASUREMENT_ID = "G-XXXXXXXXXX";
```

Once deployed, verify tracking in the GA4 Realtime report.

## File structure

- `topics-data.js`: topic metadata, variants, and difficulty settings
- `script.js`: rendering logic and question generators
- `styles.css`: presentation and print styling

## Prototype behavior

- The generator produces 10 questions for the selected topic.
- Each question changes one main feature from the previous one.
- Difficulty changes the numeric ranges used in the templates.
- Each topic includes subject, year-band, objective, and difficulty metadata.
- Each topic now supports multiple sequence variants.
- `Equivalent Fractions` has been upgraded as the benchmark topic with stronger teaching sequences:
  `Missing Values`, `Build a Fraction Family`, `Compare and Complete`, and `Error Spotting`.
- `One-step Equations` has also been strengthened with broader teaching sequences:
  `Solve for x`, `Which Equation?`, `Write the Equation`, and `Error Spotting`.
- `Order of Operations` now has stronger teaching sequences as well:
  `Evaluate Expressions`, `Which Result?`, `Insert Brackets`, and `Error Spotting`.
- A printable worksheet view is generated alongside the preview cards.
- Answers can be revealed on screen and included in the printable worksheet.
- Adding or editing topics now starts in `topics-data.js` rather than in the UI logic.

## Current limitation

This is still a template-driven prototype, not a full curriculum engine. It demonstrates the interaction model, metadata model, sequence-variant model, and minimally-different sequencing pattern rather than full lesson-quality coverage for every maths topic.
