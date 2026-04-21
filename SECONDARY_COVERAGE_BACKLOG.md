# Secondary Coverage Backlog

Assumption: this backlog uses the England `KS3 + GCSE` pathway as the baseline, then maps content into a practical `Year 7` to `Year 11` build order for the app.

This is a product and content backlog for the app, not a claim that every school teaches topics in exactly this order.

## Purpose

The goal is to move the app from a strong `Year 7` generator into a full secondary library covering:

- `Year 7`
- `Year 8`
- `Year 9`
- `Year 10`
- `Year 11`

The app should eventually support:

- lesson generation
- starter generation
- assessment generation
- vocabulary/crossword generation
- topic-appropriate teaching, reasoning, and problem solving

## Curriculum Structure

Use the common secondary maths strands:

- Number
- Algebra
- Ratio, proportion and rates of change
- Geometry and measures
- Probability
- Statistics

For `Year 10` and `Year 11`, also tag topics by tier relevance:

- `Foundation`
- `Foundation / Higher`
- `Higher stretch`

## Definition Of Done

For a topic to count as fully covered in the app:

- topic metadata exists in `topics-data.js`
- topic is assigned to at least one year band
- `My Turn / Our Turn / Your Turn` exists
- at least `3` useful sequence variants exist
- fluency questions work
- reasoning questions work
- problem-solving questions work where appropriate
- starter compatibility is checked
- assessment compatibility is checked
- diagrams are accurate where needed
- difficulty reflects pedagogical difficulty, not just larger numbers

## Status Legend

- `Live`: already in the app
- `Upgrade`: in the app, but needs richer variants, clearer year placement, or GCSE-level polish
- `Missing`: not yet built

## Current Position

The app already has broad Year 7 coverage and a useful base for some Year 8/9 and GCSE-adjacent topics.

Current strengths:

- strong core around number, algebra, ratio, basic geometry, and statistics
- multiple delivery modes already exist
- reasoning and assessment layers already exist

Current gap:

- no full curriculum map across `Years 7-11`
- no systematic year placement
- no foundation/higher tagging yet

## Year 7

This should now be treated as `stabilise and polish`, not `start from scratch`.

| Strand | Topic | Status | Notes |
|---|---|---|---|
| Number | Place Value with Integers | Live | Strong Year 7 core |
| Number | Place Value with Decimals | Live | Strong Year 7 core |
| Number | Factors, Multiples and Primes | Live | Strong Year 7 core |
| Number | Square and Cube Numbers | Live | Good core topic |
| Number | Four Operations with Integers | Live | Needs ongoing difficulty polish |
| Number | Negative Numbers | Live | More useful as Year 7/8 bridge |
| Number | Compare and Order Fractions | Live | Strong Year 7 core |
| Number | Compare and Order Decimals | Live | Strong Year 7 core |
| Number | Equivalent Fractions | Live | Strong benchmark topic |
| Number | Add and Subtract Fractions | Live | Strong Year 7 core |
| Number | Multiply Fractions by Integers | Live | Good Year 7/8 bridge |
| Number | Fraction of an Amount | Live | Good Year 7/8 bridge |
| Ratio | Ratio Notation and Simplification | Live | Strong Year 7 core |
| Ratio | Fractions, Decimals and Percentages Links | Live | Strong Year 7/8 bridge |
| Algebra | Algebraic Notation | Live | Strong Year 7 core |
| Algebra | Collecting Like Terms | Live | Strong Year 7 core |
| Algebra | One-step Equations | Live | Strong benchmark topic |
| Algebra | Function Machines | Live | Strong Year 7/8 bridge |
| Algebra | Sequences | Live | Good Year 7 core |
| Geometry | Coordinates in Four Quadrants | Live | Strong Year 7 core |
| Geometry | Perimeter | Live | Strong benchmark topic |
| Geometry | Area of Rectangles and Compound Shapes | Live | Strong Year 7/8 bridge |
| Geometry | Angle Facts | Live | Strong benchmark topic |
| Geometry | Properties of 2D Shapes | Live | Strong Year 7 topic |
| Geometry | Transformations | Live | Good Year 7/8 bridge |
| Statistics | Tables and Charts | Live | Good Year 7 topic |
| Statistics | Mean, Median, Mode and Range | Live | Good Year 7 topic |
| Probability | Basic Probability Scale | Live | Good Year 7 topic |

## Year 8

This year should extend Year 7 foundations into richer algebra, geometry, multiplicative reasoning, and data.

| Strand | Topic | Status | Notes |
|---|---|---|---|
| Number | Decimal Operations | Live | Strong Year 8 fit |
| Number | Fraction-Decimal Conversions | Live | Strong Year 8 fit |
| Number | Order of Operations | Live | Year 7/8 fit |
| Number | Standard Form Intro | Missing | High priority |
| Number | Indices and Laws of Indices Intro | Missing | High priority |
| Number | Percentages of Amounts | Missing | High priority |
| Ratio | Scaling and Multiplicative Reasoning | Live | Strong Year 8 fit |
| Ratio | Proportion Problems | Live | Strong Year 8/9 fit |
| Ratio | Percentages: Increase and Decrease | Missing | High priority |
| Algebra | Substitution | Live | Year 8 fit, needs more variants |
| Algebra | Expanding Brackets | Live | Year 8 fit, needs more variants |
| Algebra | Forming and Rearranging Formulae Intro | Missing | High priority |
| Algebra | Two-step Equations | Missing | High priority |
| Algebra | Inequalities Intro | Missing | Medium priority |
| Algebra | Straight-line Graphs Intro | Missing | High priority |
| Geometry | Area of Triangles and Parallelograms | Live | Strong Year 8 topic |
| Geometry | Nets and 3D Shapes | Live | Useful Year 8 geometry topic |
| Geometry | Symmetry and Reflection Properties | Live | Useful Year 8 geometry topic |
| Geometry | Circles: Circumference and Area Intro | Missing | High priority |
| Geometry | Volume of Cubes and Cuboids | Missing | High priority |
| Geometry | Constructions Basics | Missing | Medium priority |
| Statistics | Stem-and-Leaf and Frequency Diagrams | Live | Good Year 8 fit |
| Probability | Relative Frequency Intro | Live | Good Year 8 fit |

## Year 9

Year 9 should start to look more clearly like `pre-GCSE`.

| Strand | Topic | Status | Notes |
|---|---|---|---|
| Number | Standard Form | Missing | High priority |
| Number | Bounds and Error Intervals Intro | Missing | Medium priority |
| Number | Recurring Decimals to Fractions | Missing | Medium priority |
| Ratio | Direct Proportion Graphs Intro | Missing | Medium priority |
| Ratio | Compound Measures | Missing | High priority |
| Algebra | Two-step and Multi-step Equations | Missing | High priority |
| Algebra | Simultaneous Equations Intro | Missing | High priority |
| Algebra | Rearranging Formulae | Missing | High priority |
| Algebra | Sequences with Nth Term | Upgrade | Existing topic should deepen here |
| Algebra | Graphs of Linear Functions | Missing | High priority |
| Algebra | Factorising Single Brackets / Simple Quadratics Intro | Missing | Medium priority |
| Geometry | Pythagoras | Missing | High priority |
| Geometry | Trigonometry Intro | Missing | High priority |
| Geometry | Similarity and Congruence Intro | Missing | Medium priority |
| Geometry | Surface Area and Volume | Missing | High priority |
| Geometry | Bearings | Missing | Medium priority |
| Statistics | Scatter Graphs and Correlation | Missing | High priority |
| Statistics | Frequency Trees | Missing | High priority |
| Statistics | Cumulative Frequency Intro | Missing | Medium priority |
| Probability | Combined Events Intro | Missing | Medium priority |

## Year 10

Year 10 should cover most of the GCSE `Foundation / Higher core`.

| Strand | Topic | Tier | Status | Notes |
|---|---|---|---|---|
| Number | Standard Form | Foundation / Higher | Missing | Core GCSE topic |
| Number | Indices Laws | Foundation / Higher | Missing | Core GCSE topic |
| Number | Surds Intro | Higher stretch | Missing | Later in build |
| Number | Bounds and Error Intervals | Foundation / Higher | Missing | GCSE core |
| Ratio | Direct and Inverse Proportion | Foundation / Higher | Missing | GCSE core |
| Ratio | Repeated Percentage Change | Foundation / Higher | Missing | GCSE core |
| Ratio | Compound Interest / Depreciation | Foundation / Higher | Missing | GCSE core |
| Ratio | Growth and Decay | Higher stretch | Missing | Later |
| Algebra | Quadratic Expansion and Factorising | Foundation / Higher | Missing | High priority |
| Algebra | Solve Quadratic Equations | Foundation / Higher | Missing | High priority |
| Algebra | Simultaneous Equations | Foundation / Higher | Missing | High priority |
| Algebra | Inequalities and Regions | Foundation / Higher | Missing | Medium priority |
| Algebra | Algebraic Fractions Intro | Higher stretch | Missing | Later |
| Algebra | Graphs: Quadratics | Foundation / Higher | Missing | High priority |
| Algebra | Graphs: Real-life / Distance-Time / Velocity-Time | Foundation / Higher | Missing | Medium priority |
| Geometry | Circles: Area and Circumference | Foundation / Higher | Missing | High priority |
| Geometry | Surface Area and Volume | Foundation / Higher | Missing | High priority |
| Geometry | Similarity and Congruence | Foundation / Higher | Missing | High priority |
| Geometry | Constructions and Loci | Foundation / Higher | Missing | Medium priority |
| Geometry | Trigonometry | Foundation / Higher | Missing | High priority |
| Geometry | Pythagoras | Foundation / Higher | Missing | High priority |
| Statistics | Cumulative Frequency | Foundation / Higher | Missing | High priority |
| Statistics | Box Plots and Histograms | Higher stretch | Missing | Medium priority |
| Probability | Combined Events | Foundation / Higher | Missing | High priority |
| Probability | Venn Diagrams and Set Notation | Higher stretch | Missing | Medium priority |

## Year 11

Year 11 should focus on exam-heavy, higher-demand, and top-end content.

| Strand | Topic | Tier | Status | Notes |
|---|---|---|---|---|
| Number | Surds | Higher stretch | Missing | High priority for higher |
| Number | Exact Trigonometric Values | Higher stretch | Missing | Later |
| Ratio | Iterative and compound growth modelling | Higher stretch | Missing | Later |
| Algebra | Algebraic Fractions | Higher stretch | Missing | High priority |
| Algebra | Completing the Square | Higher stretch | Missing | High priority |
| Algebra | Quadratic Formula Use | Higher stretch | Missing | High priority |
| Algebra | Functions and Function Notation | Higher stretch | Missing | Medium priority |
| Algebra | Iteration | Higher stretch | Missing | High priority |
| Algebra | Proof | Higher stretch | Missing | High priority |
| Algebra | Advanced Graph Interpretation | Higher stretch | Missing | Medium priority |
| Geometry | Circle Theorems | Higher stretch | Missing | High priority |
| Geometry | Vectors | Higher stretch | Missing | High priority |
| Geometry | Frustums / Advanced Volume | Higher stretch | Missing | Medium priority |
| Statistics | Histograms | Higher stretch | Missing | Medium priority |
| Probability | Conditional Probability | Higher stretch | Missing | High priority |

## Reusable Generator Families

To scale beyond Year 7, new topics should be mapped onto reusable families instead of being built as one-off generators.

| Family | Typical use |
|---|---|
| Compare / order | fractions, decimals, percentages, standard form |
| Direct calculation | arithmetic, area, perimeter, trigonometry, probability |
| Missing value | equations, ratio, area, averages, conversions |
| Reverse / inverse | function machines, equations, transformations, proportion |
| Match representation | graphs, algebraic forms, FDP, tables/charts |
| Error spotting | almost all GCSE topics |
| True / false with justification | properties, probability, geometry, number |
| Write / create | equations, expressions, nth term, formulae |
| Explain / prove | higher algebra, geometry, proof |
| Multi-step modelling | compound measures, GCSE problem solving, exam practice |

## Build Phases

### Phase 1: Stabilise Year 7 And Year 8

Goal:

- make `Year 7` fully reliable
- make `Year 8` clearly usable

Focus topics:

1. `Standard Form Intro`
2. `Indices and Laws of Indices Intro`
3. `Percentages of Amounts`
4. `Two-step Equations`
5. `Straight-line Graphs Intro`
6. `Volume of Cubes and Cuboids`
7. `Circles: Circumference and Area Intro`

### Phase 2: Build Year 9 Pre-GCSE Core

Goal:

- make the app genuinely useful as a `Year 9` planning tool

Focus topics:

1. `Pythagoras`
2. `Trigonometry Intro`
3. `Compound Measures`
4. `Simultaneous Equations Intro`
5. `Rearranging Formulae`
6. `Scatter Graphs and Correlation`
7. `Frequency Trees`
8. `Linear Graphs`

### Phase 3: Build GCSE Foundation / Higher Core

Goal:

- make the app usable in `Year 10`
- cover the highest-frequency GCSE material first

Focus topics:

1. `Standard Form`
2. `Direct and Inverse Proportion`
3. `Quadratic Expansion and Factorising`
4. `Solve Quadratic Equations`
5. `Simultaneous Equations`
6. `Surface Area and Volume`
7. `Cumulative Frequency`
8. `Combined Events`

### Phase 4: Build Year 11 / Higher Stretch

Goal:

- add higher-demand and top-grade content

Focus topics:

1. `Surds`
2. `Algebraic Fractions`
3. `Completing the Square`
4. `Iteration`
5. `Proof`
6. `Circle Theorems`
7. `Vectors`
8. `Conditional Probability`

## Suggested Product Changes

To support `Years 7-11`, the app should eventually add:

- `Year group` filter
- `Tier` filter
- `KS3 / KS4` tag
- stronger curriculum metadata per topic
- exam-style command language for GCSE topics:
  - `calculate`
  - `solve`
  - `show that`
  - `prove`
  - `estimate`
  - `state`
  - `explain`

## Recommended Next Sprint

The next build sprint should be:

1. create year-band metadata support in the app data model
2. tag all current live topics with `Year 7 / Year 8 / Year 9 / Year 10 / Year 11` relevance
3. build the first `Year 8` missing core batch:
   - `Percentages of Amounts`
   - `Standard Form Intro`
   - `Indices and Laws of Indices Intro`
   - `Two-step Equations`
   - `Straight-line Graphs Intro`
4. add the first `Year 9` pre-GCSE batch:
   - `Pythagoras`
   - `Compound Measures`
   - `Simultaneous Equations Intro`

That would move the app from a strong Year 7 product to a genuine secondary pathway.

## Sources

- AQA GCSE Mathematics subject content
  https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300/specification/subject-content
- AQA GCSE Mathematics scheme of assessment
  https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300/specification/scheme-of-assessment
- GOV.UK: National curriculum in England mathematics programmes of study
  https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study/national-curriculum-in-england-mathematics-programmes-of-study
