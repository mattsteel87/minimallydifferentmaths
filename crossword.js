const crosswordApi = window.MDM_API;

if (!crosswordApi) {
  throw new Error("MDM_API is not available.");
}

const crosswordForm = document.getElementById("crossword-form");
const crosswordYearFilter = document.getElementById("crossword-year-filter");
const crosswordTopicSelect = document.getElementById("crossword-topic");
const crosswordResultsTitle = document.getElementById("crossword-results-title");
const crosswordSummary = document.getElementById("crossword-summary");
const crosswordGrid = document.getElementById("crossword-grid");
const crosswordAcrossClues = document.getElementById("crossword-across-clues");
const crosswordDownClues = document.getElementById("crossword-down-clues");
const crosswordSheetTitle = document.getElementById("crossword-sheet-title");
const crosswordSheetMeta = document.getElementById("crossword-sheet-meta");
const crosswordAnswerToggle = document.getElementById("toggle-crossword-answers");
const crosswordAnswerSection = document.getElementById("crossword-answer-section");
const crosswordAnswerList = document.getElementById("crossword-answer-list");
const crosswordRegenerateButton = document.getElementById("crossword-regenerate-button");
const crosswordPrintButton = document.getElementById("crossword-print-button");

const crosswordState = {
  generationCounter: 0,
  currentCrossword: null
};

const crosswordGlossary = {
  angle: "A measure of turn between two lines.",
  area: "The amount of space inside a shape.",
  axis: "A reference line used on a coordinate grid.",
  balance: "To keep both sides of an equation equal.",
  benchmark: "A known value used to help compare another value.",
  chart: "A visual way of showing information or data.",
  coefficient: "The number multiplying a variable.",
  compare: "To decide which value is greater, smaller, or equal.",
  composite: "A whole number with more than two factors.",
  coordinate: "A pair of numbers that shows a point's position.",
  cube: "A three-dimensional shape with six square faces.",
  decimal: "A number written using a decimal point.",
  denominator: "The bottom number in a fraction.",
  digit: "A single symbol used to make a number.",
  distributive: "A rule that multiplies a factor across a bracket.",
  edge: "A line where two faces of a 3D shape meet.",
  equation: "A statement showing that two expressions are equal.",
  equivalent: "Having the same value even if it looks different.",
  expression: "A mathematical phrase made from numbers, symbols, or variables.",
  factor: "A number that divides exactly into another number.",
  face: "A flat surface on a 3D shape.",
  fraction: "A number that shows equal parts of a whole.",
  frequency: "How often a value or result occurs.",
  function: "A rule that changes an input into an output.",
  input: "The value that goes into a function machine.",
  integer: "A whole number that can be positive, negative, or zero.",
  inverse: "An operation that undoes another operation.",
  likely: "Describing how probable an event is.",
  mean: "The average found by adding the values and dividing by how many there are.",
  median: "The middle value in an ordered list.",
  mode: "The value that appears most often.",
  multiple: "A number made by multiplying by a whole number.",
  negative: "A number less than zero.",
  net: "A flat pattern that folds into a 3D shape.",
  numerator: "The top number in a fraction.",
  operation: "A calculation such as add, subtract, multiply, or divide.",
  output: "The result that comes out of a function machine.",
  parallel: "Lines that stay the same distance apart and never meet.",
  parallelogram: "A four-sided shape with two pairs of parallel sides.",
  pattern: "Something that repeats in a predictable way.",
  percent: "A number out of one hundred.",
  perimeter: "The total distance around a shape.",
  perpendicular: "Lines that meet at a right angle.",
  polygon: "A 2D shape with straight sides.",
  positive: "A number greater than zero.",
  prime: "A whole number with exactly two factors.",
  prism: "A 3D shape with the same cross-section all the way through.",
  probability: "How likely an event is to happen.",
  proportion: "A relationship where quantities scale in the same way.",
  quadrant: "One of the four sections of a coordinate grid.",
  range: "The difference between the greatest and smallest values.",
  ratio: "A comparison of two quantities.",
  reflection: "A flip in a mirror line.",
  rotation: "A turn about a fixed point.",
  rounding: "Replacing a number with a nearby simpler number.",
  rule: "A description of how a pattern or function works.",
  scale: "To enlarge or reduce by multiplying by a factor.",
  square: "The result of multiplying a number by itself, or a shape with four equal sides and four right angles.",
  sequence: "A list of terms that follows a rule.",
  simplify: "To rewrite something in an easier but equivalent form.",
  solution: "A value that makes a statement or equation true.",
  solid: "A three-dimensional shape.",
  stem: "The first part of a number in a stem-and-leaf diagram.",
  substitute: "To replace a variable with a value.",
  symmetry: "When a shape matches itself after a flip or turn.",
  table: "An organised display of data in rows and columns.",
  term: "A single part of an expression or sequence.",
  transformation: "A change such as a translation, reflection, or rotation.",
  translation: "A slide with no turning or flipping.",
  triangle: "A polygon with three sides.",
  variable: "A letter used to stand for a number.",
  vector: "A movement described by direction and distance.",
  vertex: "A corner point where edges or sides meet."
};

const crosswordSubjectFallbacks = {
  Number: ["fraction", "decimal", "equivalent", "numerator", "denominator", "factor", "multiple", "prime", "rounding", "integer"],
  Algebra: ["variable", "expression", "term", "coefficient", "equation", "inverse", "sequence", "rule", "function", "substitute"],
  "Geometry and Measure": ["angle", "area", "perimeter", "parallel", "perpendicular", "symmetry", "reflection", "translation", "rotation", "coordinate"],
  "Ratio and Proportion": ["ratio", "proportion", "equivalent", "scale", "percent", "fraction", "decimal", "compare"],
  Statistics: ["table", "chart", "frequency", "mean", "median", "mode", "range", "compare"],
  Probability: ["probability", "likely", "frequency", "compare", "scale"]
};

const crosswordTriggerTerms = [
  { pattern: /fraction/, terms: ["fraction", "numerator", "denominator", "equivalent", "simplify", "benchmark"] },
  { pattern: /decimal/, terms: ["decimal", "digit", "rounding", "benchmark", "equivalent"] },
  { pattern: /percent/, terms: ["percent", "equivalent", "compare", "proportion"] },
  { pattern: /ratio/, terms: ["ratio", "equivalent", "simplify", "scale", "proportion"] },
  { pattern: /proportion|scale/, terms: ["proportion", "scale", "equivalent", "compare", "factor"] },
  { pattern: /equation/, terms: ["equation", "inverse", "balance", "solution", "variable"] },
  { pattern: /algebra|notation|term|expression/, terms: ["variable", "expression", "term", "coefficient", "simplify"] },
  { pattern: /substitut/, terms: ["substitute", "variable", "expression", "coefficient"] },
  { pattern: /sequence|nth/, terms: ["sequence", "term", "pattern", "rule", "variable"] },
  { pattern: /function/, terms: ["function", "input", "output", "rule", "inverse"] },
  { pattern: /bracket|expand/, terms: ["distributive", "expression", "coefficient", "term"] },
  { pattern: /negative|integer/, terms: ["negative", "positive", "integer", "operation", "inverse"] },
  { pattern: /angle/, terms: ["angle", "parallel", "perpendicular", "vertex"] },
  { pattern: /perimeter/, terms: ["perimeter", "polygon", "edge", "vertex"] },
  { pattern: /area/, terms: ["area", "triangle", "parallelogram", "perpendicular", "polygon"] },
  { pattern: /shape|polygon/, terms: ["polygon", "parallel", "perpendicular", "symmetry", "vertex"] },
  { pattern: /transform|reflect|rotate|translat/, terms: ["transformation", "reflection", "rotation", "translation", "vector", "coordinate", "axis"] },
  { pattern: /coordinate|quadrant/, terms: ["coordinate", "quadrant", "axis", "reflection", "translation"] },
  { pattern: /net|3d|solid|prism|cube/, terms: ["net", "face", "edge", "vertex", "prism", "cube"] },
  { pattern: /table|chart/, terms: ["table", "frequency", "compare"] },
  { pattern: /mean|median|mode|range/, terms: ["mean", "median", "mode", "range", "frequency"] },
  { pattern: /probability|relative frequency/, terms: ["probability", "likely", "frequency", "compare"] }
];

const crosswordTopicVocabulary = {
  "place-value-integers": ["digit", "integer", "negative", "positive", "rounding", "benchmark", "compare"],
  "factors-multiples-primes": ["factor", "multiple", "prime", "composite", "integer", "pattern", "square"],
  "compare-order-fractions": ["fraction", "numerator", "denominator", "equivalent", "benchmark", "simplify", "compare"],
  "algebraic-notation": ["variable", "expression", "term", "coefficient", "simplify", "operation", "equivalent"],
  perimeter: ["perimeter", "polygon", "edge", "vertex", "parallel", "triangle", "angle"],
  "angle-facts": ["angle", "parallel", "perpendicular", "vertex", "triangle", "polygon"],
  "add-subtract-fractions": ["fraction", "numerator", "denominator", "equivalent", "simplify", "benchmark", "operation"],
  "ratio-notation": ["ratio", "equivalent", "simplify", "scale", "proportion", "compare"],
  "collecting-like-terms": ["term", "expression", "coefficient", "variable", "simplify", "equivalent", "operation"],
  "coordinates-four-quadrants": ["coordinate", "quadrant", "axis", "reflection", "translation", "vector", "rotation"],
  "place-value-decimals": ["decimal", "digit", "rounding", "benchmark", "compare", "equivalent"],
  "fdp-links": ["fraction", "decimal", "percent", "equivalent", "benchmark", "compare"],
  "function-machines": ["function", "input", "output", "rule", "inverse", "operation", "solution"],
  sequences: ["sequence", "term", "pattern", "rule", "variable", "expression"],
  "decimal-operations": ["decimal", "rounding", "benchmark", "equivalent", "operation", "simplify"],
  "properties-2d-shapes": ["polygon", "parallel", "perpendicular", "symmetry", "angle", "vertex", "triangle"],
  "square-cube-numbers": ["square", "cube", "factor", "multiple", "pattern", "integer"],
  "four-operations-integers": ["integer", "negative", "positive", "inverse", "operation", "solution"],
  "compare-order-decimals": ["decimal", "digit", "benchmark", "rounding", "equivalent", "compare"],
  "multiply-fractions-integers": ["fraction", "integer", "numerator", "denominator", "simplify", "equivalent", "operation"],
  "fraction-of-an-amount": ["fraction", "numerator", "denominator", "equivalent", "integer", "operation"],
  "area-rectangles-compound": ["area", "polygon", "perpendicular", "parallel", "edge", "vertex", "perimeter", "triangle"],
  transformations: ["transformation", "translation", "reflection", "rotation", "vector", "coordinate", "axis", "symmetry"],
  "tables-and-charts": ["table", "chart", "frequency", "mode", "range", "mean", "median"],
  "mean-median-mode-range": ["mean", "median", "mode", "range", "frequency", "table", "chart"],
  "basic-probability-scale": ["probability", "likely", "scale", "frequency", "percent", "compare"],
  "compare-order-percentages": ["percent", "benchmark", "equivalent", "decimal", "fraction", "compare"],
  "metric-unit-conversions": ["scale", "equivalent", "decimal", "integer", "factor", "operation"],
  "area-triangles-parallelograms": ["area", "triangle", "parallelogram", "perpendicular", "parallel", "polygon", "angle"],
  "scaling-multiplicative-reasoning": ["scale", "proportion", "ratio", "factor", "equivalent", "compare"],
  "proportion-problems": ["proportion", "ratio", "scale", "equivalent", "factor", "percent"],
  "fraction-decimal-conversions": ["fraction", "decimal", "equivalent", "percent", "numerator", "denominator", "benchmark"],
  "nets-and-3d-shapes": ["net", "solid", "face", "edge", "vertex", "prism", "cube", "polygon"],
  "symmetry-reflection-properties": ["symmetry", "reflection", "translation", "rotation", "axis", "transformation"],
  "stem-leaf-frequency": ["stem", "frequency", "table", "mode", "range", "mean", "median"],
  "relative-frequency-intro": ["frequency", "probability", "table", "chart", "likely", "compare"],
  "equivalent-fractions": ["fraction", "equivalent", "numerator", "denominator", "simplify", "benchmark", "compare"],
  "order-of-operations": ["operation", "expression", "simplify", "inverse", "rule", "term"],
  "one-step-equations": ["equation", "balance", "inverse", "solution", "variable", "expression", "term"],
  "expanding-brackets": ["distributive", "expression", "coefficient", "term", "variable", "simplify", "equation"],
  "negative-numbers": ["negative", "positive", "integer", "inverse", "operation", "compare"],
  substitution: ["substitute", "variable", "expression", "coefficient", "term", "equation"]
};

buildCrosswordYearFilter();
buildCrosswordTopicSelect();

crosswordForm.addEventListener("submit", (event) => {
  event.preventDefault();
  crosswordState.generationCounter += 1;
  renderCrossword();
});

crosswordRegenerateButton.addEventListener("click", () => {
  crosswordState.generationCounter += 1;
  renderCrossword();
});

crosswordPrintButton.addEventListener("click", () => {
  window.print();
});

crosswordAnswerToggle.addEventListener("change", () => {
  updateCrosswordAnswerVisibility();
});

crosswordYearFilter.addEventListener("change", () => {
  buildCrosswordTopicSelect();
  crosswordState.generationCounter += 1;
  renderCrossword();
});

renderCrossword();

function buildCrosswordYearFilter() {
  const options = crosswordApi.getAvailableYearOptions();
  crosswordYearFilter.innerHTML = "";
  options.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    crosswordYearFilter.appendChild(option);
  });
  crosswordYearFilter.value = "All years";
}

function buildCrosswordTopicSelect() {
  crosswordTopicSelect.innerHTML = "";

  const filteredEntries = crosswordApi.getFilteredTopicEntries(crosswordYearFilter.value);
  const grouped = filteredEntries.reduce((groups, [topicKey, topic]) => {
    if (!groups[topic.subject]) {
      groups[topic.subject] = [];
    }
    groups[topic.subject].push([topicKey, topic]);
    return groups;
  }, {});

  if (!filteredEntries.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = `No topics available for ${crosswordYearFilter.value}`;
    crosswordTopicSelect.appendChild(option);
    crosswordTopicSelect.disabled = true;
    return;
  }

  crosswordTopicSelect.disabled = false;

  Object.entries(grouped).forEach(([subject, topics]) => {
    const optgroup = document.createElement("optgroup");
    optgroup.label = subject;

    topics.forEach(([topicKey, topic]) => {
      const option = document.createElement("option");
      option.value = topicKey;
      option.textContent = topic.label;
      optgroup.appendChild(option);
    });

    crosswordTopicSelect.appendChild(optgroup);
  });

  const availableTopicKeys = filteredEntries.map(([topicKey]) => topicKey);
  crosswordTopicSelect.value = availableTopicKeys.includes(crosswordApi.defaultTopic) ? crosswordApi.defaultTopic : availableTopicKeys[0];
}

function renderCrossword() {
  const topicKey = crosswordTopicSelect.value;
  const topic = crosswordApi.topicCatalog[topicKey];

  if (!topic) {
    crosswordResultsTitle.textContent = "Topic Crossword";
    crosswordSheetTitle.textContent = "Topic Crossword";
    crosswordSheetMeta.textContent = `${crosswordYearFilter.value} | No live topics yet`;
    crosswordSummary.innerHTML = `<p class="assessment-summary-empty">No topics are currently live for ${crosswordYearFilter.value}.</p>`;
    crosswordGrid.innerHTML = "";
    crosswordAcrossClues.innerHTML = "";
    crosswordDownClues.innerHTML = "";
    crosswordAnswerList.innerHTML = "";
    crosswordAnswerSection.hidden = !crosswordAnswerToggle.checked;
    return;
  }

  const entries = buildTopicVocabularyEntries(topicKey, topic);
  const crossword = buildCrossword(entries, crosswordState.generationCounter);
  crosswordState.currentCrossword = crossword;

  crosswordResultsTitle.textContent = `${topic.label} Crossword`;
  crosswordSheetTitle.textContent = `${topic.label} Crossword`;
  crosswordSheetMeta.textContent = `${topic.subject} | ${topic.yearBand} | Key vocabulary`;

  crosswordSummary.innerHTML = `
    <div class="assessment-summary-grid">
      <div class="assessment-summary-card">
        <span class="assessment-summary-label">Topic</span>
        <strong class="assessment-summary-value">${topic.label}</strong>
      </div>
      <div class="assessment-summary-card">
        <span class="assessment-summary-label">Words</span>
        <strong class="assessment-summary-value">${crossword.placed.length}</strong>
      </div>
      <div class="assessment-summary-card">
        <span class="assessment-summary-label">Across</span>
        <strong class="assessment-summary-value">${crossword.across.length}</strong>
      </div>
      <div class="assessment-summary-card">
        <span class="assessment-summary-label">Down</span>
        <strong class="assessment-summary-value">${crossword.down.length}</strong>
      </div>
    </div>
  `;

  renderCrosswordGrid(crossword);
  renderCrosswordClues(crossword);
  renderCrosswordAnswers(crossword);
  updateCrosswordAnswerVisibility();
}

function buildTopicVocabularyEntries(topicKey, topic) {
  const topicText = [
    topic.label,
    topic.objective,
    topic.principle,
    ...topic.variants.map((variant) => `${variant.label} ${variant.description}`)
  ].join(" ").toLowerCase();

  const scoredTerms = new Map();
  const curatedTerms = crosswordTopicVocabulary[topicKey] || null;

  function addTerm(term, score) {
    if (!crosswordGlossary[term]) {
      return;
    }

    const existing = scoredTerms.get(term) || 0;
    if (score > existing) {
      scoredTerms.set(term, score);
    }
  }

  if (curatedTerms) {
    curatedTerms.forEach((term) => {
      addTerm(term, 10);
    });
  } else {
    Object.keys(crosswordGlossary).forEach((term) => {
      if (topicText.includes(term)) {
        addTerm(term, 2);
      }
    });

    crosswordTriggerTerms.forEach((rule) => {
      if (rule.pattern.test(topicText)) {
        rule.terms.forEach((term) => addTerm(term, 4));
      }
    });

    (crosswordSubjectFallbacks[topic.subject] || []).forEach((term) => {
      addTerm(term, 1);
    });
  }

  const uniqueTerms = [];
  const seen = new Set();

  [...scoredTerms.entries()]
    .sort((left, right) => {
      if (right[1] !== left[1]) {
        return right[1] - left[1];
      }
      return left[0].localeCompare(right[0]);
    })
    .forEach(([term]) => {
    const key = normalizeCrosswordAnswer(term);
    if (!crosswordGlossary[term] || key.length < 4 || key.length > 13 || seen.has(key)) {
      return;
    }
    seen.add(key);
    uniqueTerms.push({
      term,
      answer: key,
      clue: crosswordGlossary[term]
    });
    });

  return uniqueTerms.slice(0, 12);
}

function buildCrossword(entries, seed) {
  const ordered = rotateCrosswordEntries(entries, seed)
    .slice()
    .sort((left, right) => right.answer.length - left.answer.length);

  for (let attempt = 0; attempt < 8; attempt += 1) {
    const attemptEntries = rotateCrosswordEntries(ordered, attempt);
    const built = tryBuildCrossword(attemptEntries);
    if (built.placed.length >= 5) {
      return finalizeCrossword(built);
    }
  }

  return finalizeCrossword(tryBuildCrossword(ordered));
}

function tryBuildCrossword(entries) {
  const size = 19;
  const grid = Array.from({ length: size }, () => Array(size).fill(null));
  const placed = [];

  if (!entries.length) {
    return { grid, placed, size };
  }

  const first = entries[0];
  const firstRow = Math.floor(size / 2);
  const firstCol = Math.floor((size - first.answer.length) / 2);
  placeCrosswordWord(grid, placed, first, firstRow, firstCol, "across");

  entries.slice(1).forEach((entry) => {
    const placement = findBestCrosswordPlacement(grid, placed, entry, size);
    if (placement) {
      placeCrosswordWord(grid, placed, entry, placement.row, placement.col, placement.direction);
    }
  });

  return { grid, placed, size };
}

function findBestCrosswordPlacement(grid, placed, entry, size) {
  const candidates = [];

  placed.forEach((placedWord) => {
    for (let index = 0; index < entry.answer.length; index += 1) {
      const letter = entry.answer[index];

      for (let placedIndex = 0; placedIndex < placedWord.answer.length; placedIndex += 1) {
        if (placedWord.answer[placedIndex] !== letter) {
          continue;
        }

        const matchRow = placedWord.direction === "across" ? placedWord.row : placedWord.row + placedIndex;
        const matchCol = placedWord.direction === "across" ? placedWord.col + placedIndex : placedWord.col;
        const direction = placedWord.direction === "across" ? "down" : "across";
        const row = direction === "down" ? matchRow - index : matchRow;
        const col = direction === "across" ? matchCol - index : matchCol;

        if (isValidCrosswordPlacement(grid, entry.answer, row, col, direction, size)) {
          const intersections = countCrosswordIntersections(grid, entry.answer, row, col, direction);
          const centerBias = Math.abs(row - Math.floor(size / 2)) + Math.abs(col - Math.floor(size / 2));
          candidates.push({ row, col, direction, intersections, centerBias });
        }
      }
    }
  });

  candidates.sort((left, right) => {
    if (right.intersections !== left.intersections) {
      return right.intersections - left.intersections;
    }
    return left.centerBias - right.centerBias;
  });

  return candidates[0] || null;
}

function isValidCrosswordPlacement(grid, word, row, col, direction, size) {
  const rowStep = direction === "down" ? 1 : 0;
  const colStep = direction === "across" ? 1 : 0;
  const beforeRow = row - rowStep;
  const beforeCol = col - colStep;
  const afterRow = row + rowStep * word.length;
  const afterCol = col + colStep * word.length;

  if (row < 0 || col < 0 || row + rowStep * (word.length - 1) >= size || col + colStep * (word.length - 1) >= size) {
    return false;
  }

  if (cellHasLetter(grid, beforeRow, beforeCol) || cellHasLetter(grid, afterRow, afterCol)) {
    return false;
  }

  for (let index = 0; index < word.length; index += 1) {
    const currentRow = row + rowStep * index;
    const currentCol = col + colStep * index;
    const existing = grid[currentRow][currentCol];

    if (existing && existing !== word[index]) {
      return false;
    }

    if (!existing) {
      const sideA = direction === "across" ? [currentRow - 1, currentCol] : [currentRow, currentCol - 1];
      const sideB = direction === "across" ? [currentRow + 1, currentCol] : [currentRow, currentCol + 1];
      if (cellHasLetter(grid, sideA[0], sideA[1]) || cellHasLetter(grid, sideB[0], sideB[1])) {
        return false;
      }
    }
  }

  return true;
}

function countCrosswordIntersections(grid, word, row, col, direction) {
  const rowStep = direction === "down" ? 1 : 0;
  const colStep = direction === "across" ? 1 : 0;
  let intersections = 0;

  for (let index = 0; index < word.length; index += 1) {
    const currentRow = row + rowStep * index;
    const currentCol = col + colStep * index;
    if (grid[currentRow][currentCol] === word[index]) {
      intersections += 1;
    }
  }

  return intersections;
}

function placeCrosswordWord(grid, placed, entry, row, col, direction) {
  const rowStep = direction === "down" ? 1 : 0;
  const colStep = direction === "across" ? 1 : 0;

  for (let index = 0; index < entry.answer.length; index += 1) {
    grid[row + rowStep * index][col + colStep * index] = entry.answer[index];
  }

  placed.push({
    ...entry,
    row,
    col,
    direction
  });
}

function finalizeCrossword(built) {
  const bounds = getCrosswordBounds(built.grid);
  const trimmedGrid = trimCrosswordGrid(built.grid, bounds);
  const placed = built.placed.map((item) => ({
    ...item,
    row: item.row - bounds.minRow,
    col: item.col - bounds.minCol
  }));
  const numbered = numberCrosswordEntries(placed);

  return {
    width: trimmedGrid[0] ? trimmedGrid[0].length : 0,
    height: trimmedGrid.length,
    grid: trimmedGrid,
    placed: numbered.placed,
    across: numbered.across,
    down: numbered.down
  };
}

function getCrosswordBounds(grid) {
  let minRow = grid.length;
  let maxRow = 0;
  let minCol = grid[0].length;
  let maxCol = 0;

  grid.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      if (!cell) {
        return;
      }
      minRow = Math.min(minRow, rowIndex);
      maxRow = Math.max(maxRow, rowIndex);
      minCol = Math.min(minCol, colIndex);
      maxCol = Math.max(maxCol, colIndex);
    });
  });

  if (minRow === grid.length) {
    return { minRow: 0, maxRow: 0, minCol: 0, maxCol: 0 };
  }

  return { minRow, maxRow, minCol, maxCol };
}

function trimCrosswordGrid(grid, bounds) {
  const trimmed = [];
  for (let row = bounds.minRow; row <= bounds.maxRow; row += 1) {
    trimmed.push(grid[row].slice(bounds.minCol, bounds.maxCol + 1));
  }
  return trimmed;
}

function numberCrosswordEntries(placed) {
  const sortedStarts = [...placed].sort((left, right) => {
    if (left.row !== right.row) {
      return left.row - right.row;
    }
    return left.col - right.col;
  });

  const numbering = new Map();
  let nextNumber = 1;

  sortedStarts.forEach((item) => {
    const key = `${item.row},${item.col}`;
    if (!numbering.has(key)) {
      numbering.set(key, nextNumber);
      nextNumber += 1;
    }
  });

  const numberedPlaced = placed.map((item) => ({
    ...item,
    number: numbering.get(`${item.row},${item.col}`)
  }));

  const across = numberedPlaced
    .filter((item) => item.direction === "across")
    .sort((left, right) => left.number - right.number);
  const down = numberedPlaced
    .filter((item) => item.direction === "down")
    .sort((left, right) => left.number - right.number);

  return { placed: numberedPlaced, across, down };
}

function renderCrosswordGrid(crossword) {
  crosswordGrid.innerHTML = "";
  crosswordGrid.style.gridTemplateColumns = `repeat(${crossword.width}, minmax(0, 2.4rem))`;

  const startNumbers = new Map();
  crossword.placed.forEach((item) => {
    startNumbers.set(`${item.row},${item.col}`, item.number);
  });

  crossword.grid.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      const tile = document.createElement("div");
      tile.className = cell ? "crossword-cell" : "crossword-cell is-block";

      if (cell) {
        const number = startNumbers.get(`${rowIndex},${colIndex}`);
        if (number) {
          const numberLabel = document.createElement("span");
          numberLabel.className = "crossword-cell-number";
          numberLabel.textContent = `${number}`;
          tile.appendChild(numberLabel);
        }

        const letter = document.createElement("span");
        letter.className = "crossword-cell-letter";
        letter.textContent = cell;
        tile.appendChild(letter);
      }

      crosswordGrid.appendChild(tile);
    });
  });
}

function renderCrosswordClues(crossword) {
  crosswordAcrossClues.innerHTML = "";
  crosswordDownClues.innerHTML = "";

  crossword.across.forEach((item) => {
    crosswordAcrossClues.appendChild(buildCrosswordClueItem(item));
  });

  crossword.down.forEach((item) => {
    crosswordDownClues.appendChild(buildCrosswordClueItem(item));
  });
}

function buildCrosswordClueItem(item) {
  const clue = document.createElement("li");
  clue.innerHTML = `<span class="crossword-clue-number">${item.number}</span> ${item.clue} <span class="crossword-enum">(${item.answer.length})</span>`;
  return clue;
}

function renderCrosswordAnswers(crossword) {
  crosswordAnswerList.innerHTML = "";

  [...crossword.placed]
    .sort((left, right) => left.number - right.number)
    .forEach((item) => {
      const answer = document.createElement("li");
      answer.textContent = `${item.number}. ${item.term}`;
      crosswordAnswerList.appendChild(answer);
    });
}

function updateCrosswordAnswerVisibility() {
  const showAnswers = crosswordAnswerToggle.checked;
  crosswordGrid.classList.toggle("show-answers", showAnswers);
  crosswordAnswerSection.hidden = !showAnswers;
}

function rotateCrosswordEntries(entries, offset) {
  if (!entries.length) {
    return [];
  }

  const start = offset % entries.length;
  return [...entries.slice(start), ...entries.slice(0, start)];
}

function normalizeCrosswordAnswer(value) {
  return String(value).toUpperCase().replace(/[^A-Z]/g, "");
}

function cellHasLetter(grid, row, col) {
  if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) {
    return false;
  }
  return Boolean(grid[row][col]);
}
