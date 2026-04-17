window.APP_DATA = {
  defaultTopic: "equivalent-fractions",
  difficultySettings: {
    easy: {
      range: [2, 10],
      largeRange: [12, 24],
      negativeRange: [-8, 8],
      coeffRange: [2, 5],
      factors: [2, 3, 4, 5, 6, 7]
    },
    medium: {
      range: [3, 16],
      largeRange: [18, 48],
      negativeRange: [-12, 12],
      coeffRange: [3, 8],
      factors: [2, 3, 4, 5, 6, 8]
    },
    hard: {
      range: [4, 24],
      largeRange: [24, 90],
      negativeRange: [-18, 18],
      coeffRange: [4, 12],
      factors: [3, 4, 5, 6, 8, 9]
    }
  },
  topics: {
    "place-value-integers": {
      label: "Place Value with Integers",
      subject: "Number",
      yearBand: "Year 7",
      generatorType: "place-value-integers",
      difficultyLabel: {
        easy: "Thousands and simple ordering",
        medium: "Larger integers, intervals and rounding",
        hard: "Bigger values and multi-step place value reasoning"
      },
      objective: "Read, compare, round, and reason about integers by tracking one place value change at a time.",
      principle: "Keep the number structure close and vary one feature only: one digit, one place, one comparison point, or one rounding boundary.",
      basedOn: "Year 7 place value lesson structure",
      variants: [
        { id: "compare-and-order", label: "Compare and Order", description: "Pupils compare near-identical integers and order them by attending to one place value change at a time." },
        { id: "digit-value", label: "Digit Value", description: "A place value sequence focused on the value of a named digit as its position changes." },
        { id: "rounding", label: "Rounding", description: "A direct rounding sequence where only one boundary or one digit changes between examples." },
        { id: "intervals-and-statements", label: "Intervals and Statements", description: "Pupils place integers in intervals and judge true-or-false place value statements." }
      ]
    },
    "factors-multiples-primes": {
      label: "Factors, Multiples and Primes",
      subject: "Number",
      yearBand: "Year 7",
      generatorType: "factors-multiples-primes",
      difficultyLabel: {
        easy: "Basic factors and multiples",
        medium: "Prime reasoning and divisibility checks",
        hard: "Larger numbers and more selective reasoning"
      },
      objective: "Recognise factors, multiples and prime numbers by varying one divisibility feature at a time.",
      principle: "Keep the number pair or list close and vary one divisibility idea only: factor, multiple, prime status, or statement accuracy.",
      basedOn: "Year 7 properties of number lesson structure",
      variants: [
        { id: "factors-and-multiples", label: "Factors and Multiples", description: "A direct sequence on identifying factors and multiples using minimally changed number pairs." },
        { id: "prime-or-composite", label: "Prime or Composite", description: "Pupils classify near-identical numbers as prime or composite and justify the difference." },
        { id: "divisibility-checks", label: "Divisibility Checks", description: "A reasoning sequence focused on whether numbers are divisible by 2, 3, 5 or 10." },
        { id: "error-spotting", label: "Error Spotting", description: "A misconception sequence about factors, multiples and prime numbers." }
      ]
    },
    "compare-order-fractions": {
      label: "Compare and Order Fractions",
      subject: "Number",
      yearBand: "Year 7",
      generatorType: "compare-order-fractions",
      difficultyLabel: {
        easy: "Simple denominators and unit fractions",
        medium: "Mixed denominators and benchmarking",
        hard: "Less direct comparisons and denser sets"
      },
      objective: "Compare, order and justify fractions by changing one feature at a time: numerator, denominator, benchmark or representation.",
      principle: "Keep the fractions visually close and vary one useful comparison feature only.",
      basedOn: "Year 7 fractions comparison lesson structure",
      variants: [
        { id: "compare-pairs", label: "Compare Pairs", description: "Pupils compare near-identical fraction pairs and decide which is greater." },
        { id: "order-sets", label: "Order Sets", description: "A sequence of small fraction sets to place in ascending or descending order." },
        { id: "benchmarking", label: "Benchmarking", description: "Fractions are compared to 0, 1/2 and 1 with one benchmark change at a time." },
        { id: "true-false", label: "True or False", description: "A reasoning sequence using fraction comparison statements and justifications." }
      ]
    },
    "algebraic-notation": {
      label: "Algebraic Notation",
      subject: "Algebra",
      yearBand: "Year 7",
      generatorType: "algebraic-notation",
      difficultyLabel: {
        easy: "Simple word-to-expression forms",
        medium: "Mixed operation phrases and simplified notation",
        hard: "More complex wording and expression matching"
      },
      objective: "Translate between words and algebraic expressions while changing one wording or notation feature at a time.",
      principle: "Keep the structure stable and vary one feature only: operation word, coefficient, variable count, or notation form.",
      basedOn: "Year 7 algebraic notation lesson structure",
      variants: [
        { id: "write-expression", label: "Write the Expression", description: "Pupils turn short word phrases into algebraic expressions with one wording change each time." },
        { id: "simplify-notation", label: "Simplify Notation", description: "A sequence focused on writing algebra in standard concise form." },
        { id: "match-words", label: "Match Words to Algebra", description: "Pupils choose which expression matches a phrase and track one language change at a time." },
        { id: "error-spotting", label: "Error Spotting", description: "A misconception sequence on common notation errors." }
      ]
    },
    "perimeter": {
      label: "Perimeter",
      subject: "Geometry and Measure",
      yearBand: "Year 7",
      generatorType: "perimeter",
      difficultyLabel: {
        easy: "Rectangles and simple polygons",
        medium: "Missing sides and compound outlines",
        hard: "Algebraic sides and more complex perimeters"
      },
      objective: "Calculate and reason about perimeter by changing one side length or one shape feature at a time.",
      principle: "Keep the shape idea stable and vary one perimeter feature only: one side, one missing side, one comparison, or one algebraic label.",
      basedOn: "Year 7 perimeter lesson structure",
      variants: [
        { id: "calculate-perimeter", label: "Calculate Perimeter", description: "A direct fluency sequence for rectangles and polygons with small side-length changes." },
        { id: "missing-side", label: "Missing Side", description: "Pupils find a missing side from a known perimeter." },
        { id: "compare-shapes", label: "Compare Shapes", description: "A sequence comparing two near-identical shapes by perimeter." },
        { id: "expression-perimeter", label: "Expression Perimeter", description: "Perimeter is written and simplified as an algebraic expression." }
      ]
    },
    "angle-facts": {
      label: "Angle Facts",
      subject: "Geometry and Measure",
      yearBand: "Year 7",
      generatorType: "angle-facts",
      difficultyLabel: {
        easy: "Angles on a line and around a point",
        medium: "Mixed angle rules and vertical opposites",
        hard: "Multi-step missing angle reasoning"
      },
      objective: "Find missing angles by changing one angle fact at a time: line, point, vertically opposite or full turn.",
      principle: "Keep the angle layout idea steady and vary one structural angle fact only.",
      basedOn: "Year 7 angle facts lesson structure",
      variants: [
        { id: "angles-on-a-line", label: "Angles on a Line", description: "A direct sequence of supplementary angle questions." },
        { id: "around-a-point", label: "Around a Point", description: "Pupils use the 360-degree total with one angle change at a time." },
        { id: "vertically-opposite", label: "Vertically Opposite Angles", description: "A sequence focused on equal opposite angles with small changes each time." },
        { id: "find-the-missing-angle", label: "Find the Missing Angle", description: "Mixed angle facts combined into one-step and two-step missing-angle questions." }
      ]
    },
    "add-subtract-fractions": {
      label: "Add and Subtract Fractions",
      subject: "Number",
      yearBand: "Year 7",
      generatorType: "add-subtract-fractions",
      difficultyLabel: {
        easy: "Simple like denominators",
        medium: "Mixed denominators and subtraction",
        hard: "Less direct prompts and larger denominators"
      },
      objective: "Add and subtract fractions by changing one feature at a time: denominator, operation, representation, or missing part.",
      principle: "Keep the fraction structure close and vary one calculation feature only.",
      basedOn: "Year 7 fraction operations lesson structure",
      variants: [
        { id: "like-denominators", label: "Like Denominators", description: "A direct sequence of addition and subtraction with matching denominators." },
        { id: "find-the-sum", label: "Find the Sum or Difference", description: "Pupils calculate fraction totals and differences with one structural change at a time." },
        { id: "missing-value", label: "Missing Value", description: "A reasoning sequence where one fraction or answer part is missing." },
        { id: "error-spotting", label: "Error Spotting", description: "A misconception sequence focused on common mistakes in fraction operations." }
      ]
    },
    "ratio-notation": {
      label: "Ratio Notation and Simplification",
      subject: "Ratio and Proportion",
      yearBand: "Year 7",
      generatorType: "ratio-notation",
      difficultyLabel: {
        easy: "Simple whole-number ratios",
        medium: "Equivalent and simplified ratios",
        hard: "Less direct ratio reasoning"
      },
      objective: "Read, write and simplify ratios by varying one multiplicative feature at a time.",
      principle: "Keep the ratio structure steady and vary one feature only: scale factor, order, missing part, or simplification step.",
      basedOn: "Year 7 ratio lesson structure",
      variants: [
        { id: "write-ratios", label: "Write Ratios", description: "Pupils convert descriptions into ratio notation with one wording change at a time." },
        { id: "simplify-ratios", label: "Simplify Ratios", description: "A direct simplification sequence using common factors and equivalent ratios." },
        { id: "equivalent-ratios", label: "Equivalent Ratios", description: "Pupils generate and compare equivalent ratios while one feature changes at a time." },
        { id: "missing-part", label: "Missing Part", description: "A reasoning sequence with one missing value in an equivalent ratio statement." }
      ]
    },
    "collecting-like-terms": {
      label: "Collecting Like Terms",
      subject: "Algebra",
      yearBand: "Year 7",
      generatorType: "collecting-like-terms",
      difficultyLabel: {
        easy: "Positive terms with one variable",
        medium: "Mixed signs and constants",
        hard: "Denser expressions and more than one term type"
      },
      objective: "Simplify algebraic expressions by collecting like terms while changing one term feature at a time.",
      principle: "Keep the expression structure close and vary one feature only: coefficient, sign, constant, or term type.",
      basedOn: "Year 7 collecting like terms lesson structure",
      variants: [
        { id: "simplify-expressions", label: "Simplify Expressions", description: "A direct fluency sequence simplifying expressions with one small change each time." },
        { id: "match-equivalents", label: "Match Equivalents", description: "Pupils decide which simplified expression matches a given unsimplified form." },
        { id: "missing-coefficient", label: "Missing Coefficient", description: "A reasoning sequence where one coefficient or constant is missing." },
        { id: "error-spotting", label: "Error Spotting", description: "A misconception sequence on combining unlike terms or mishandling signs." }
      ]
    },
    "coordinates-four-quadrants": {
      label: "Coordinates in Four Quadrants",
      subject: "Geometry and Measure",
      yearBand: "Year 7",
      generatorType: "coordinates-four-quadrants",
      difficultyLabel: {
        easy: "Reading and plotting points",
        medium: "Mixed quadrants and missing coordinates",
        hard: "Reflections and coordinate reasoning"
      },
      objective: "Read, plot and reason about coordinates across four quadrants by changing one coordinate feature at a time.",
      principle: "Keep the point structure steady and vary one feature only: x-value, y-value, quadrant, or reflection rule.",
      basedOn: "Year 7 coordinates lesson structure",
      variants: [
        { id: "read-coordinates", label: "Read Coordinates", description: "Pupils identify coordinates from plotted points with one value change at a time." },
        { id: "plot-points", label: "Plot Points", description: "A sequence of points to place in different quadrants." },
        { id: "missing-coordinate", label: "Missing Coordinate", description: "A reasoning sequence where one coordinate value is missing." },
        { id: "reflections", label: "Reflections", description: "Pupils reflect points in the axes and track one sign change at a time." }
      ]
    },
    "place-value-decimals": {
      label: "Place Value with Decimals",
      subject: "Number",
      yearBand: "Year 7",
      generatorType: "place-value-decimals",
      difficultyLabel: {
        easy: "Tenths and hundredths",
        medium: "Comparing and rounding decimals",
        hard: "Larger decimals and multi-step place value reasoning"
      },
      objective: "Read, compare, round and reason about decimals by changing one place value feature at a time.",
      principle: "Keep the decimal structure close and vary one feature only: one digit, one place, one comparison point, or one rounding boundary.",
      basedOn: "Year 7 decimal place value lesson structure",
      variants: [
        { id: "compare-and-order", label: "Compare and Order", description: "Pupils compare and order near-identical decimals by one place value change at a time." },
        { id: "digit-value", label: "Digit Value", description: "A place value sequence focused on the value of a named decimal digit." },
        { id: "rounding", label: "Rounding", description: "A direct rounding sequence using tenths, hundredths and whole numbers." },
        { id: "intervals-and-statements", label: "Intervals and Statements", description: "Pupils place decimals in intervals and judge true-or-false place value statements." }
      ]
    },
    "fdp-links": {
      label: "Fractions, Decimals and Percentages Links",
      subject: "Ratio and Proportion",
      yearBand: "Year 7",
      generatorType: "fdp-links",
      difficultyLabel: {
        easy: "Simple conversions with familiar values",
        medium: "Mixed conversions and ordering",
        hard: "Less direct equivalences and comparison reasoning"
      },
      objective: "Convert and compare fractions, decimals and percentages by changing one representation feature at a time.",
      principle: "Keep the numerical value stable and vary one representation only: fraction, decimal, percentage, table position, or comparison target.",
      basedOn: "Year 7 FDP links lesson structure",
      variants: [
        { id: "convert-values", label: "Convert Values", description: "A direct sequence converting one representation into another." },
        { id: "match-equivalents", label: "Match Equivalents", description: "Pupils identify which fraction, decimal and percentage forms are equivalent." },
        { id: "complete-the-table", label: "Complete the Table", description: "A table-style sequence with one missing representation at a time." },
        { id: "compare-values", label: "Compare Values", description: "Pupils compare equivalent and near-equivalent FDP values." }
      ]
    },
    "function-machines": {
      label: "Function Machines",
      subject: "Algebra",
      yearBand: "Year 7",
      generatorType: "function-machines",
      difficultyLabel: {
        easy: "Single-step add and subtract rules",
        medium: "Mixed operations and reverse rules",
        hard: "Larger values and less direct machine prompts"
      },
      objective: "Use function machines by changing one rule feature at a time: operation, constant, input, output, or reverse step.",
      principle: "Keep the machine structure stable and vary one rule feature only.",
      basedOn: "Year 7 function machines lesson structure",
      variants: [
        { id: "find-the-output", label: "Find the Output", description: "A direct input-to-output sequence through simple function rules." },
        { id: "find-the-input", label: "Find the Input", description: "Pupils work backwards from outputs to inputs." },
        { id: "identify-the-rule", label: "Identify the Rule", description: "A reasoning sequence where the machine rule must be inferred from examples." },
        { id: "reverse-machines", label: "Reverse Machines", description: "Pupils give the inverse machine or undo the function." }
      ]
    },
    "sequences": {
      label: "Sequences",
      subject: "Algebra",
      yearBand: "Year 7",
      generatorType: "sequences",
      difficultyLabel: {
        easy: "Continue and describe linear patterns",
        medium: "Missing terms and rule statements",
        hard: "Larger steps and simple nth-term introductions"
      },
      objective: "Continue, analyse and describe sequences by changing one feature at a time: step size, start value, missing term, or rule wording.",
      principle: "Keep the sequence pattern close and vary one structural feature only.",
      basedOn: "Year 7 sequences lesson structure",
      variants: [
        { id: "continue-the-sequence", label: "Continue the Sequence", description: "Pupils extend number sequences with one change to the pattern each time." },
        { id: "find-the-rule", label: "Find the Rule", description: "A reasoning sequence focused on describing the pattern rule." },
        { id: "missing-terms", label: "Missing Terms", description: "One or more sequence terms are missing and must be completed." },
        { id: "nth-term-intro", label: "Nth Term Intro", description: "An introductory sequence connecting term position to a simple linear rule." }
      ]
    },
    "decimal-operations": {
      label: "Decimal Operations",
      subject: "Number",
      yearBand: "Year 7",
      generatorType: "decimal-operations",
      difficultyLabel: {
        easy: "Add and subtract decimals",
        medium: "Mixed operations and place value alignment",
        hard: "Larger decimals and multiplication/division by powers of 10"
      },
      objective: "Calculate with decimals by changing one operation or place value feature at a time.",
      principle: "Keep the decimal layout close and vary one calculation feature only: one digit, one operation, one place value shift, or one missing part.",
      basedOn: "Year 7 decimal operations lesson structure",
      variants: [
        { id: "add-and-subtract", label: "Add and Subtract", description: "A direct sequence of decimal addition and subtraction questions." },
        { id: "multiply-divide-10", label: "Multiply or Divide by 10", description: "Pupils track place value shifts when decimals are scaled by 10, 100 or 1000." },
        { id: "missing-value", label: "Missing Value", description: "A reasoning sequence with one missing decimal in an operation." },
        { id: "error-spotting", label: "Error Spotting", description: "A misconception sequence on decimal alignment and place value shifts." }
      ]
    },
    "properties-2d-shapes": {
      label: "Properties of 2D Shapes",
      subject: "Geometry and Measure",
      yearBand: "Year 7",
      generatorType: "properties-2d-shapes",
      difficultyLabel: {
        easy: "Identify and classify common polygons",
        medium: "Always-sometimes-never and property comparison",
        hard: "Less direct reasoning about shape properties"
      },
      objective: "Classify, compare and justify properties of 2D shapes by changing one feature at a time: number of sides, equal sides, parallel sides, right angles, or symmetry.",
      principle: "Keep the shape family close and vary one identifying property only so pupils focus on what really defines the shape.",
      basedOn: "Year 7 2D shape properties lesson structure",
      variants: [
        { id: "identify-shapes", label: "Identify Shapes", description: "Pupils identify common 2D shapes from accurate outlines and near-miss comparisons." },
        { id: "classify-properties", label: "Classify Properties", description: "A sequence focused on matching a shown shape to defining properties such as equal sides, parallel sides, right angles and symmetry." },
        { id: "symmetry", label: "Symmetry", description: "Pupils identify lines of symmetry and compare shapes by their symmetry properties." },
        { id: "always-sometimes-never", label: "Always, Sometimes, Never", description: "Pupils judge geometric statements and separate always true properties from sometimes true ones." },
        { id: "odd-one-out", label: "Odd One Out", description: "A reasoning sequence where pupils identify the odd shape out and justify the property that makes it different." }
      ]
    },
    "square-cube-numbers": {
      label: "Square and Cube Numbers",
      subject: "Number",
      yearBand: "Year 7",
      generatorType: "square-cube-numbers",
      difficultyLabel: {
        easy: "Recognising small squares and cubes",
        medium: "Mixed square and cube reasoning",
        hard: "Larger powers and closer comparisons"
      },
      objective: "Recognise, generate and reason about square and cube numbers by changing one feature at a time.",
      principle: "Keep the power structure steady and vary one thing only: the base number, the power, the representation, or the truth of a statement.",
      basedOn: "Year 7 square and cube numbers lesson structure",
      variants: [
        { id: "identify-powers", label: "Identify Powers", description: "Pupils identify whether a number is square, cube, both or neither through minimally changed examples." },
        { id: "complete-the-power", label: "Complete the Power", description: "A sequence of missing base, missing value and next-power prompts." },
        { id: "compare-powers", label: "Compare Powers", description: "Pupils compare square and cube values and decide which is greater." },
        { id: "true-false", label: "True or False", description: "A reasoning sequence about square and cube number statements." }
      ]
    },
    "four-operations-integers": {
      label: "Four Operations with Integers",
      subject: "Number",
      yearBand: "Year 7",
      generatorType: "four-operations-integers",
      difficultyLabel: {
        easy: "Positive integer calculations",
        medium: "Mixed operations and operation choice",
        hard: "Larger values and reasoning with missing parts"
      },
      objective: "Calculate and reason with the four operations on integers by changing one operation or value feature at a time.",
      principle: "Keep the integer structure close and vary one feature only: operation, missing part, inverse link, or misconception.",
      basedOn: "Year 7 integer arithmetic lesson structure",
      variants: [
        { id: "calculate", label: "Calculate", description: "A direct fluency sequence using addition, subtraction, multiplication and division with integers." },
        { id: "choose-operation", label: "Choose the Operation", description: "Pupils decide which operation connects a pair of integers to a target value." },
        { id: "missing-value", label: "Missing Value", description: "A reasoning sequence where one number in an integer calculation is missing." },
        { id: "error-spotting", label: "Error Spotting", description: "A misconception sequence on common integer operation errors." }
      ]
    },
    "compare-order-decimals": {
      label: "Compare and Order Decimals",
      subject: "Number",
      yearBand: "Year 7",
      generatorType: "compare-order-decimals",
      difficultyLabel: {
        easy: "Tenths and simple hundredths",
        medium: "Mixed decimal places and ordering",
        hard: "Closer comparisons and benchmark reasoning"
      },
      objective: "Compare, order and justify decimals by changing one place value feature at a time.",
      principle: "Keep the decimal structure close and vary one useful comparison feature only: one digit, one place value, one benchmark, or one statement.",
      basedOn: "Year 7 decimal comparison lesson structure",
      variants: [
        { id: "compare-pairs", label: "Compare Pairs", description: "Pupils compare near-identical decimal pairs and decide which is greater." },
        { id: "order-sets", label: "Order Sets", description: "A sequence of small decimal sets to place in ascending or descending order." },
        { id: "benchmarking", label: "Benchmarking", description: "Decimals are compared to whole-number and half benchmarks with one change at a time." },
        { id: "true-false", label: "True or False", description: "A reasoning sequence using decimal comparison statements and justifications." }
      ]
    },
    "multiply-fractions-integers": {
      label: "Multiply Fractions by Integers",
      subject: "Number",
      yearBand: "Year 7",
      generatorType: "multiply-fractions-integers",
      difficultyLabel: {
        easy: "Unit fractions and small integers",
        medium: "Mixed fractions and non-unit fractions",
        hard: "Improper results and less direct prompts"
      },
      objective: "Multiply fractions by integers by changing one structural feature at a time: the fraction, the multiplier, the result type, or the missing part.",
      principle: "Keep the multiplicative structure steady and vary one useful feature only so pupils focus on scaling the fraction.",
      basedOn: "Year 7 fraction multiplication lesson structure",
      variants: [
        { id: "scale-the-fraction", label: "Scale the Fraction", description: "A direct sequence where pupils scale a fraction by an integer." },
        { id: "find-the-product", label: "Find the Product", description: "Pupils calculate fraction products with one change to the multiplier or fraction each time." },
        { id: "missing-value", label: "Missing Value", description: "A reasoning sequence where one multiplier, fraction part, or product is missing." },
        { id: "error-spotting", label: "Error Spotting", description: "A misconception sequence on how multiplying a fraction by an integer changes the numerator and denominator." }
      ]
    },
    "fraction-of-an-amount": {
      label: "Fraction of an Amount",
      subject: "Number",
      yearBand: "Year 7",
      generatorType: "fraction-of-an-amount",
      difficultyLabel: {
        easy: "Unit fractions of simple amounts",
        medium: "Non-unit fractions of multiples",
        hard: "Reverse problems and larger amounts"
      },
      objective: "Find and reason about fractions of amounts by changing one feature at a time: the fraction, the whole amount, the method, or the unknown.",
      principle: "Keep the part-whole structure steady and vary one useful feature only so pupils focus on dividing then scaling.",
      basedOn: "Year 7 fraction of an amount lesson structure",
      variants: [
        { id: "unit-fractions", label: "Unit Fractions", description: "A direct sequence finding unit fractions of amounts." },
        { id: "non-unit-fractions", label: "Non-unit Fractions", description: "Pupils find non-unit fractions of amounts by building from a unit fraction." },
        { id: "reverse-problems", label: "Reverse Problems", description: "A reasoning sequence where the fraction part is known and the whole must be found." },
        { id: "compare-methods", label: "Compare Methods", description: "Pupils compare, justify and repair methods for finding fractions of amounts." }
      ]
    },
    "area-rectangles-compound": {
      label: "Area of Rectangles and Compound Shapes",
      subject: "Geometry and Measure",
      yearBand: "Year 7",
      generatorType: "area-rectangles-compound",
      difficultyLabel: {
        easy: "Rectangles and simple dimensions",
        medium: "Missing dimensions and combined rectangles",
        hard: "Larger values and more involved compound area reasoning"
      },
      objective: "Calculate and reason about area by changing one dimension, shape feature or decomposition step at a time.",
      principle: "Keep the area structure steady and vary one useful feature only: one side length, one missing dimension, one comparison, or one rectangle in a compound shape.",
      basedOn: "Year 7 area lesson structure",
      variants: [
        { id: "calculate-area", label: "Area of Rectangles", description: "A direct fluency sequence finding the area of rectangles." },
        { id: "missing-dimension", label: "Missing Dimension", description: "Pupils find a missing side length from a known rectangular area." },
        { id: "compare-areas", label: "Compare Areas", description: "A sequence comparing two near-identical shapes by area." },
        { id: "compound-shapes", label: "Area of Compound Shapes", description: "Pupils find the area of compound shapes from given side lengths, sometimes working out a missing side first." }
      ]
    },
    "transformations": {
      label: "Transformations",
      subject: "Geometry and Measure",
      yearBand: "Year 7",
      generatorType: "transformations",
      difficultyLabel: {
        easy: "Translations and simple reflections",
        medium: "Mixed transformations on plotted shapes",
        hard: "Combined coordinate reasoning and less direct image questions"
      },
      objective: "Describe and carry out transformations by changing one transformation feature at a time.",
      principle: "Keep the plotted shape close and vary one transformation feature only: direction, axis, turn, or image point.",
      basedOn: "Year 7 transformations lesson structure",
      variants: [
        { id: "translations", label: "Translations", description: "Pupils translate plotted shapes or points by given vectors." },
        { id: "reflections", label: "Reflections", description: "A sequence reflecting shapes and points in coordinate axes." },
        { id: "rotations", label: "Rotations", description: "Pupils reason about quarter and half turns around the origin." },
        { id: "describe-the-transformation", label: "Describe the Transformation", description: "Pupils decide what transformation has taken place between an object and its image." }
      ]
    },
    "tables-and-charts": {
      label: "Tables and Charts",
      subject: "Statistics",
      yearBand: "Year 7",
      generatorType: "tables-and-charts",
      difficultyLabel: {
        easy: "Simple frequency reading",
        medium: "Interpreting totals and comparisons",
        hard: "Less direct statements and missing values"
      },
      objective: "Read and interpret tables and charts by changing one comparison or data-reading feature at a time.",
      principle: "Keep the data structure close and vary one question demand only: read, compare, total, or complete.",
      basedOn: "Year 7 statistics lesson structure",
      variants: [
        { id: "read-the-table", label: "Read the Table", description: "A direct sequence reading values from simple frequency tables." },
        { id: "complete-the-table", label: "Complete the Table", description: "Pupils fill missing values in a small table using the surrounding data." },
        { id: "interpret-the-chart", label: "Interpret the Chart", description: "A sequence of chart-style questions focusing on what the data shows." },
        { id: "compare-representations", label: "Compare Representations", description: "Pupils compare how the same data is shown in different ways." }
      ]
    },
    "mean-median-mode-range": {
      label: "Mean, Median, Mode and Range",
      subject: "Statistics",
      yearBand: "Year 7",
      generatorType: "mean-median-mode-range",
      difficultyLabel: {
        easy: "Single measures on short lists",
        medium: "Mixed measures and comparisons",
        hard: "Less direct reasoning and missing values"
      },
      objective: "Calculate and compare summary statistics by changing one measure or one data value at a time.",
      principle: "Keep the data set close and vary one feature only: one value, one measure, one missing value, or one comparison.",
      basedOn: "Year 7 averages lesson structure",
      variants: [
        { id: "calculate-measures", label: "Calculate Measures", description: "A direct sequence finding mean, median, mode and range." },
        { id: "which-measure", label: "Which Measure?", description: "Pupils identify which measure is being described or used." },
        { id: "missing-value", label: "Missing Value", description: "A reasoning sequence where one value must be found from a known average or range." },
        { id: "error-spotting", label: "Error Spotting", description: "A misconception sequence on common mistakes with averages." }
      ]
    },
    "basic-probability-scale": {
      label: "Basic Probability Scale",
      subject: "Probability",
      yearBand: "Year 7",
      generatorType: "basic-probability-scale",
      difficultyLabel: {
        easy: "Impossible, unlikely, likely, certain",
        medium: "Simple numerical probabilities",
        hard: "Comparisons and missing probabilities"
      },
      objective: "Reason about probability by changing one event feature or one point on the probability scale at a time.",
      principle: "Keep the event structure close and vary one probability feature only: likelihood word, numerical value, comparison, or missing complement.",
      basedOn: "Year 7 probability lesson structure",
      variants: [
        { id: "probability-words", label: "Probability Words", description: "Pupils place events on the probability scale using likelihood language." },
        { id: "compare-likelihood", label: "Compare Likelihood", description: "A sequence comparing which event is more or less likely." },
        { id: "missing-probability", label: "Missing Probability", description: "Pupils find a missing probability using the fact that totals equal 1." },
        { id: "true-false", label: "True or False", description: "A reasoning sequence using probability statements and justifications." }
      ]
    },
    "compare-order-percentages": {
      label: "Compare and Order Percentages",
      subject: "Ratio and Proportion",
      yearBand: "Year 7",
      generatorType: "compare-order-percentages",
      difficultyLabel: {
        easy: "Simple whole-number percentages",
        medium: "Closer percentage comparisons",
        hard: "Benchmarks and mixed comparison reasoning"
      },
      objective: "Compare, order and justify percentages by changing one feature at a time.",
      principle: "Keep the percentage structure close and vary one comparison feature only: value, benchmark, set size, or statement.",
      basedOn: "Year 7 percentage comparison lesson structure",
      variants: [
        { id: "compare-pairs", label: "Compare Pairs", description: "Pupils compare near-identical percentage pairs and decide which is greater." },
        { id: "order-sets", label: "Order Sets", description: "A sequence of small percentage sets to place in ascending or descending order." },
        { id: "benchmarking", label: "Benchmarking", description: "Percentages are compared to 50%, 100% and close benchmarks with one change at a time." },
        { id: "true-false", label: "True or False", description: "A reasoning sequence using percentage comparison statements and justifications." }
      ]
    },
    "metric-unit-conversions": {
      label: "Converting Metric Units",
      subject: "Geometry and Measure",
      yearBand: "Year 7",
      generatorType: "metric-unit-conversions",
      difficultyLabel: {
        easy: "mm-cm-m and g-kg basics",
        medium: "Mixed conversions and decimal forms",
        hard: "Multi-step and less direct unit reasoning"
      },
      objective: "Convert between metric units by changing one unit step or one value feature at a time.",
      principle: "Keep the conversion structure steady and vary one feature only: unit pair, scale factor, decimal form, or missing value.",
      basedOn: "Year 7 metric conversion lesson structure",
      variants: [
        { id: "direct-conversions", label: "Direct Conversions", description: "A direct sequence converting one metric unit into another." },
        { id: "choose-the-unit", label: "Choose the Unit", description: "Pupils decide which metric unit makes a statement sensible." },
        { id: "missing-value", label: "Missing Value", description: "A reasoning sequence where one value in a conversion is missing." },
        { id: "error-spotting", label: "Error Spotting", description: "A misconception sequence on decimal points and conversion factors." }
      ]
    },
    "area-triangles-parallelograms": {
      label: "Area of Triangles and Parallelograms",
      subject: "Geometry and Measure",
      yearBand: "Year 7",
      generatorType: "area-triangles-parallelograms",
      difficultyLabel: {
        easy: "Direct base-height calculations",
        medium: "Mixed triangle and parallelogram questions",
        hard: "Missing dimensions and comparison reasoning"
      },
      objective: "Calculate and reason about the area of triangles and parallelograms by changing one dimension or shape feature at a time.",
      principle: "Keep the area formula structure close and vary one feature only: base, height, shape type, or missing dimension.",
      basedOn: "Year 7 triangle and parallelogram area lesson structure",
      variants: [
        { id: "calculate-area", label: "Calculate Area", description: "A direct fluency sequence calculating the area of triangles and parallelograms." },
        { id: "missing-dimension", label: "Missing Dimension", description: "Pupils find a missing base or height from a known area." },
        { id: "compare-areas", label: "Compare Areas", description: "A sequence comparing near-identical shapes by area." },
        { id: "choose-the-formula", label: "Choose the Formula", description: "Pupils decide which area structure or formula fits the shown shape." }
      ]
    },
    "scaling-multiplicative-reasoning": {
      label: "Scaling and Multiplicative Reasoning",
      subject: "Ratio and Proportion",
      yearBand: "Year 7",
      generatorType: "scaling-multiplicative-reasoning",
      difficultyLabel: {
        easy: "Simple scale up and scale down",
        medium: "Mixed multiplicative changes",
        hard: "Larger scale factors and less direct reasoning"
      },
      objective: "Reason multiplicatively by scaling quantities up and down while changing one feature at a time.",
      principle: "Keep the multiplicative relationship stable and vary one feature only: scale factor, direction, context, or missing part.",
      basedOn: "Year 7 scaling lesson structure",
      variants: [
        { id: "scale-up-down", label: "Scale Up or Down", description: "A direct sequence of scaling quantities by integer factors." },
        { id: "compare-scale-factors", label: "Compare Scale Factors", description: "Pupils compare which situation uses the greater or smaller scale factor." },
        { id: "missing-part", label: "Missing Part", description: "A reasoning sequence where one value in a scaling relationship is missing." },
        { id: "error-spotting", label: "Error Spotting", description: "A misconception sequence on additive versus multiplicative thinking." }
      ]
    },
    "proportion-problems": {
      label: "Proportion Problems",
      subject: "Ratio and Proportion",
      yearBand: "Year 7",
      generatorType: "proportion-problems",
      difficultyLabel: {
        easy: "Direct proportion with clean multiples",
        medium: "Unit-rate style reasoning",
        hard: "Less direct missing values and comparisons"
      },
      objective: "Solve proportional situations by changing one relationship feature at a time.",
      principle: "Keep the proportional structure close and vary one feature only: the scale, the unknown, the context, or the method.",
      basedOn: "Year 7 proportion lesson structure",
      variants: [
        { id: "direct-proportion", label: "Direct Proportion", description: "A direct sequence of proportional scaling problems." },
        { id: "unit-rate", label: "Unit Rate", description: "Pupils find the value for one unit, then scale from there." },
        { id: "missing-value", label: "Missing Value", description: "A reasoning sequence where one value in a proportion problem is missing." },
        { id: "compare-methods", label: "Compare Methods", description: "Pupils compare proportional methods and justify which one works." }
      ]
    },
    "fraction-decimal-conversions": {
      label: "Fraction-Decimal Conversions",
      subject: "Number",
      yearBand: "Year 7",
      generatorType: "fraction-decimal-conversions",
      difficultyLabel: {
        easy: "Simple tenths, quarters and halves",
        medium: "Mixed familiar equivalents",
        hard: "Less direct equivalents and comparisons"
      },
      objective: "Convert between fractions and decimals by changing one representation feature at a time.",
      principle: "Keep the value stable and vary one representation only: fraction, decimal, missing part, or comparison.",
      basedOn: "Year 7 fraction-decimal conversion lesson structure",
      variants: [
        { id: "convert-values", label: "Convert Values", description: "A direct sequence converting fractions to decimals and decimals to fractions." },
        { id: "match-equivalents", label: "Match Equivalents", description: "Pupils match equivalent fraction and decimal forms." },
        { id: "missing-value", label: "Missing Value", description: "A reasoning sequence with one missing converted value." },
        { id: "compare-values", label: "Compare Values", description: "Pupils compare close fraction and decimal values." }
      ]
    },
    "nets-and-3d-shapes": {
      label: "Nets and 3D Shapes",
      subject: "Geometry and Measure",
      yearBand: "Year 7",
      generatorType: "nets-and-3d-shapes",
      difficultyLabel: {
        easy: "Faces, edges and vertices basics",
        medium: "Matching nets to solids",
        hard: "Property reasoning and near-miss nets"
      },
      objective: "Recognise and reason about 3D shapes and their nets by changing one structural feature at a time.",
      principle: "Keep the solid or net family close and vary one useful feature only: number of faces, net validity, or solid property.",
      basedOn: "Year 7 nets and 3D shapes lesson structure",
      variants: [
        { id: "identify-solids", label: "Identify Solids", description: "Pupils identify common 3D shapes from property clues." },
        { id: "match-the-net", label: "Match the Net", description: "A sequence matching a net description to a 3D solid." },
        { id: "faces-edges-vertices", label: "Faces, Edges, Vertices", description: "Pupils reason about the structure of 3D shapes." },
        { id: "true-false", label: "True or False", description: "A reasoning sequence about 3D shape properties and nets." }
      ]
    },
    "symmetry-reflection-properties": {
      label: "Symmetry and Reflection Properties",
      subject: "Geometry and Measure",
      yearBand: "Year 7",
      generatorType: "symmetry-reflection-properties",
      difficultyLabel: {
        easy: "Lines of symmetry",
        medium: "Reflection properties and shape comparisons",
        hard: "Less direct symmetry reasoning"
      },
      objective: "Identify and reason about symmetry and reflection properties by changing one visual feature at a time.",
      principle: "Keep the shape family close and vary one symmetry feature only: line count, reflection property, or statement truth.",
      basedOn: "Year 7 symmetry lesson structure",
      variants: [
        { id: "line-symmetry", label: "Line Symmetry", description: "Pupils identify how many lines of symmetry a shape has." },
        { id: "reflection-properties", label: "Reflection Properties", description: "A sequence focused on what stays the same under reflection." },
        { id: "complete-the-shape", label: "Complete the Shape", description: "Pupils reason about how a reflected half would complete a shape." },
        { id: "true-false", label: "True or False", description: "A reasoning sequence using symmetry statements and justifications." }
      ]
    },
    "stem-leaf-frequency": {
      label: "Stem-and-Leaf and Frequency Diagrams",
      subject: "Statistics",
      yearBand: "Year 7",
      generatorType: "stem-leaf-frequency",
      difficultyLabel: {
        easy: "Reading and completing simple diagrams",
        medium: "Comparisons and totals",
        hard: "Missing values and interpretation"
      },
      objective: "Read, complete and interpret stem-and-leaf and frequency diagrams by changing one feature at a time.",
      principle: "Keep the data structure close and vary one reading demand only: value, frequency, comparison, or missing entry.",
      basedOn: "Year 7 frequency diagram lesson structure",
      variants: [
        { id: "read-the-diagram", label: "Read the Diagram", description: "A direct sequence reading values and frequencies from diagrams." },
        { id: "complete-the-diagram", label: "Complete the Diagram", description: "Pupils fill missing values or frequencies." },
        { id: "interpret-the-data", label: "Interpret the Data", description: "A sequence interpreting what the diagram shows." },
        { id: "compare-distributions", label: "Compare Distributions", description: "Pupils compare two small data displays." }
      ]
    },
    "relative-frequency-intro": {
      label: "Relative Frequency Intro",
      subject: "Probability",
      yearBand: "Year 7",
      generatorType: "relative-frequency-intro",
      difficultyLabel: {
        easy: "Simple experimental outcomes",
        medium: "Relative frequency as a proportion",
        hard: "Comparisons and reasoning from larger trials"
      },
      objective: "Use experimental data to reason about relative frequency by changing one trial feature at a time.",
      principle: "Keep the experiment structure close and vary one useful feature only: total trials, successes, comparison, or prediction.",
      basedOn: "Year 7 relative frequency lesson structure",
      variants: [
        { id: "calculate-relative-frequency", label: "Calculate Relative Frequency", description: "A direct sequence finding relative frequency from simple results." },
        { id: "compare-experiments", label: "Compare Experiments", description: "Pupils compare which experiment gives the greater relative frequency." },
        { id: "missing-value", label: "Missing Value", description: "A reasoning sequence with one missing trial count or success count." },
        { id: "predict-and-justify", label: "Predict and Justify", description: "Pupils use relative frequency to make and justify simple predictions." }
      ]
    },
    "equivalent-fractions": {
      label: "Equivalent Fractions",
      subject: "Number",
      yearBand: "Years 5-7",
      generatorType: "equivalent-fractions",
      difficultyLabel: {
        easy: "Introductory scaling",
        medium: "Missing values and varied representations",
        hard: "Larger scale factors and less direct prompts"
      },
      objective: "Recognise, generate, compare, and justify equivalent fractions by scaling numerator and denominator by the same factor.",
      principle: "Keep the fraction idea stable and vary one teaching move at a time: scale factor, missing part, representation, comparison, or reasoning demand.",
      basedOn: "Equivalent Fractions lesson structure",
      variants: [
        { id: "missing-values", label: "Missing Values", description: "A direct teaching sequence focused on finding missing numerators, denominators, and scale factors." },
        { id: "build-a-family", label: "Build a Fraction Family", description: "Pupils generate multiple equivalent fractions from one starting fraction while only one feature changes each time." },
        { id: "compare-and-complete", label: "Compare and Complete", description: "Move from direct equivalence to comparison statements, multiple-choice checks, and true-or-false reasoning." },
        { id: "error-spotting", label: "Error Spotting", description: "A reasoning sequence where pupils decide whether a student method is valid and repair mistakes with minimally different examples." }
      ]
    },
    "order-of-operations": {
      label: "Order of Operations",
      subject: "Number",
      yearBand: "Years 6-8",
      generatorType: "order-of-operations",
      difficultyLabel: {
        easy: "Two-step expressions",
        medium: "Brackets and mixed operations",
        hard: "Brackets, powers and signed values"
      },
      objective: "Evaluate, compare, and reason about expressions by applying the order of operations and noticing how one structural change affects the result.",
      principle: "Keep the expression close to the previous one and vary one structural feature at a time: multiplier, brackets, subtraction, powers, target answer, or sign.",
      basedOn: "Order of Operations lesson structure",
      variants: [
        { id: "evaluate-expressions", label: "Evaluate Expressions", description: "A direct fluency sequence where pupils calculate increasingly complex expressions." },
        { id: "which-result", label: "Which Result?", description: "Pupils compare near-identical expressions and decide which one gives a stated result." },
        { id: "insert-brackets", label: "Insert Brackets", description: "A sequence where the expression stays close but the target answer shifts through bracket placement." },
        { id: "error-spotting", label: "Error Spotting", description: "A reasoning sequence focused on spotting and repairing mistakes in operation order." }
      ]
    },
    "one-step-equations": {
      label: "One-step Equations",
      subject: "Algebra",
      yearBand: "Years 7-8",
      generatorType: "one-step-equations",
      difficultyLabel: {
        easy: "Additive equations",
        medium: "Addition, subtraction and multiplication",
        hard: "Mixed one-step forms with reversed layouts"
      },
      objective: "Solve, compare, and create one-step equations by using inverse operations and tracking one structural change at a time.",
      principle: "Keep the solution process stable and vary one feature only: constant, operation, coefficient, unknown position, or representation.",
      basedOn: "One-step equations lesson structure",
      variants: [
        { id: "solve-for-x", label: "Solve for x", description: "A direct fluency sequence through addition, subtraction, multiplication, and division equations." },
        { id: "which-equation", label: "Which Equation?", description: "Pupils compare near-identical equations and decide which one matches a given solution." },
        { id: "write-the-equation", label: "Write the Equation", description: "Shift from solved examples to constructing equations that match a given solution." },
        { id: "error-spotting", label: "Error Spotting", description: "A reasoning sequence focused on spotting, explaining, and repairing common inverse-operation mistakes." }
      ]
    },
    "expanding-brackets": {
      label: "Expanding Brackets",
      subject: "Algebra",
      yearBand: "Years 7-9",
      generatorType: "expanding-brackets",
      difficultyLabel: {
        easy: "Single variable and positive terms",
        medium: "Sign changes and variable coefficients",
        hard: "Negative multipliers and denser expressions"
      },
      objective: "Use the distributive property confidently by tracking how each change affects the expanded form.",
      principle: "Keep the distributive pattern visible and vary one thing at a time: outside multiplier, inner term, sign, variable coefficient.",
      basedOn: "Expanding Brackets lesson structure",
      variants: [
        { id: "expand-and-simplify", label: "Expand and Simplify", description: "A direct sequence of increasingly varied bracket expansions." },
        { id: "match-the-expansion", label: "Match the Expansion", description: "Pupils connect bracket forms to their expanded forms and notice one change each time." }
      ]
    },
    "negative-numbers": {
      label: "Negative Numbers",
      subject: "Number",
      yearBand: "Years 6-8",
      generatorType: "negative-numbers",
      difficultyLabel: {
        easy: "Signed addition and subtraction",
        medium: "Mixed signed operations",
        hard: "Signed multiplication and division"
      },
      objective: "Reason with signed numbers by changing one feature at a time instead of confronting entirely new expressions.",
      principle: "Move gradually from one signed term to two, then change the operation while keeping the visual load controlled.",
      basedOn: "Negative numbers lesson structure",
      variants: [
        { id: "calculate-signed", label: "Calculate Signed Expressions", description: "A straight sequence of signed calculations with small structural shifts." },
        { id: "compare-sign-effects", label: "Compare Sign Effects", description: "A sequence that asks what changes when a sign or operation flips." }
      ]
    },
    "substitution": {
      label: "Substitution",
      subject: "Algebra",
      yearBand: "Years 7-9",
      generatorType: "substitution",
      difficultyLabel: {
        easy: "Single variable substitution",
        medium: "Two variables and simple coefficients",
        hard: "Signed values and multi-term expressions"
      },
      objective: "Substitute values into expressions accurately while tracking how each small change affects the calculation.",
      principle: "Lock the expression type and vary a single value, operation, or coefficient each step.",
      basedOn: "Substitution lesson structure",
      variants: [
        { id: "evaluate-expressions", label: "Evaluate Expressions", description: "Direct substitution into gradually changing expressions." },
        { id: "missing-value-reasoning", label: "Missing Value Reasoning", description: "A reasoning sequence that alternates between substitution and finding missing values." }
      ]
    }
  }
};
