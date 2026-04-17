const assessmentApi = window.MDM_API;

if (!assessmentApi) {
  throw new Error("MDM_API is not available.");
}

const assessmentForm = document.getElementById("assessment-form");
const assessmentTopicRows = document.getElementById("assessment-topic-rows");
const assessmentYearFilter = document.getElementById("assessment-year-filter");
const assessmentTitleInput = document.getElementById("assessment-title-input");
const assessmentYearInput = document.getElementById("assessment-year-input");
const assessmentTimeInput = document.getElementById("assessment-time-input");
const assessmentResultsTitle = document.getElementById("assessment-results-title");
const assessmentSummary = document.getElementById("assessment-summary");
const assessmentPaperTitle = document.getElementById("assessment-paper-title");
const assessmentPaperYear = document.getElementById("assessment-paper-year");
const assessmentPaperTime = document.getElementById("assessment-paper-time");
const assessmentPaperMarks = document.getElementById("assessment-paper-marks");
const assessmentPaperSections = document.getElementById("assessment-paper-sections");
const assessmentRegenerateButton = document.getElementById("assessment-regenerate-button");
const assessmentPrintButton = document.getElementById("assessment-print-button");
const markSchemeToggle = document.getElementById("toggle-mark-scheme");
const assessmentMarkScheme = document.getElementById("assessment-mark-scheme");
const assessmentMarkSchemeList = document.getElementById("assessment-mark-scheme-list");

const assessmentState = {
  generationCounter: 0
};

buildAssessmentYearFilter();
buildTopicRows();

assessmentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  assessmentState.generationCounter += 1;
  renderAssessment();
});

assessmentRegenerateButton.addEventListener("click", () => {
  assessmentState.generationCounter += 1;
  renderAssessment();
});

assessmentPrintButton.addEventListener("click", () => {
  window.print();
});

markSchemeToggle.addEventListener("change", () => {
  assessmentMarkScheme.hidden = !markSchemeToggle.checked;
});

renderAssessment();

assessmentYearFilter.addEventListener("change", () => {
  buildTopicRows();
  assessmentState.generationCounter += 1;
  renderAssessment();
});

function buildAssessmentYearFilter() {
  const options = assessmentApi.getAvailableYearOptions();
  assessmentYearFilter.innerHTML = "";
  options.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    assessmentYearFilter.appendChild(option);
  });
  assessmentYearFilter.value = "All years";
}

function getAssessmentTopicEntries() {
  return assessmentApi.getFilteredTopicEntries(assessmentYearFilter.value);
}

function buildTopicRows() {
  const countOptions = [3, 4, 5, 6, 8, 10];
  const topicEntries = getAssessmentTopicEntries();
  const topicGroups = assessmentApi.groupTopicEntriesBySubject(topicEntries);
  const orderedTopics = topicEntries.map(([id, topic]) => ({ id, label: topic.label, topic }));
  assessmentTopicRows.innerHTML = "";

  for (let index = 0; index < 5; index += 1) {
    const row = document.createElement("div");
    row.className = "assessment-topic-row";

    const toggleLabel = document.createElement("label");
    toggleLabel.className = "assessment-topic-toggle";
    toggleLabel.innerHTML = `<input type="checkbox" ${index < 2 ? "checked" : ""}> <span>Topic ${index + 1}</span>`;

    const topicSelect = document.createElement("select");
    topicSelect.className = "assessment-topic-select";
    populateTopicSelect(topicSelect, index);

    const countSelect = document.createElement("select");
    countSelect.className = "assessment-count-select";
    countOptions.forEach((value) => {
      const option = document.createElement("option");
      option.value = String(value);
      option.textContent = `${value} questions`;
      if ((index === 0 && value === 6) || (index === 1 && value === 4) || (index > 1 && value === 3)) {
        option.selected = true;
      }
      countSelect.appendChild(option);
    });

    toggleLabel.querySelector("input").addEventListener("change", () => {
      topicSelect.disabled = !toggleLabel.querySelector("input").checked;
      countSelect.disabled = !toggleLabel.querySelector("input").checked;
    });

    topicSelect.disabled = index >= 2;
    countSelect.disabled = index >= 2;

    const countLabel = document.createElement("label");
    countLabel.className = "field";
    countLabel.innerHTML = `<span>Question count</span>`;
    countLabel.appendChild(countSelect);

    const topicField = document.createElement("label");
    topicField.className = "field";
    topicField.innerHTML = `<span>Topic</span>`;
    topicField.appendChild(topicSelect);

    row.appendChild(toggleLabel);
    row.appendChild(topicField);
    row.appendChild(countLabel);
    assessmentTopicRows.appendChild(row);
  }
}

function populateTopicSelect(select, index) {
  const topicEntries = getAssessmentTopicEntries();
  const topicGroups = assessmentApi.groupTopicEntriesBySubject(topicEntries);
  const orderedTopics = topicEntries.map(([id, topic]) => ({ id, label: topic.label, topic }));

  if (!orderedTopics.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = `No topics available for ${assessmentYearFilter.value}`;
    select.appendChild(option);
    select.disabled = true;
    return;
  }

  select.disabled = false;

  Object.entries(topicGroups).forEach(([subject, topics]) => {
    const group = document.createElement("optgroup");
    group.label = subject;

    topics.forEach((topic) => {
      const option = document.createElement("option");
      option.value = topic.id;
      option.textContent = topic.label;
      group.appendChild(option);
    });

    select.appendChild(group);
  });

  select.value = orderedTopics[index]?.id || orderedTopics[0].id;
}

function renderAssessment() {
  const selections = getSelectedTopics();

  if (selections.length === 0) {
    renderEmptyAssessment();
    return;
  }

  const assessment = buildAssessment(selections);
  renderAssessmentSummary(assessment);
  renderAssessmentPaper(assessment);
}

function renderEmptyAssessment() {
  assessmentResultsTitle.textContent = "Assessment Preview";
  assessmentSummary.innerHTML = `<p class="assessment-summary-empty">Select at least one topic to generate an assessment.</p>`;
  assessmentPaperTitle.textContent = assessmentTitleInput.value.trim() || "Year 7 Maths Assessment";
  assessmentPaperYear.textContent = assessmentYearInput.value.trim() || "Year 7";
  assessmentPaperTime.textContent = assessmentTimeInput.value.trim() || "40 minutes";
  assessmentPaperMarks.textContent = "0 marks";
  assessmentPaperSections.innerHTML = "";
  assessmentMarkSchemeList.innerHTML = "";
  assessmentMarkScheme.hidden = !markSchemeToggle.checked;
}

function getSelectedTopics() {
  const rows = [...assessmentTopicRows.querySelectorAll(".assessment-topic-row")];
  const selections = [];
  const seen = new Set();

  rows.forEach((row) => {
    const isEnabled = row.querySelector("input[type='checkbox']").checked;
    const topicId = row.querySelector(".assessment-topic-select").value;
    const count = Number.parseInt(row.querySelector(".assessment-count-select").value, 10);

    if (!isEnabled || !topicId || seen.has(topicId)) {
      return;
    }

    seen.add(topicId);
    selections.push({
      topic: assessmentApi.topicCatalog[topicId],
      count
    });
  });

  return selections.slice(0, 5);
}

function buildAssessment(selections) {
  const parts = {
    fluency: [],
    reasoning: [],
    written: []
  };

  selections.forEach((selection, topicIndex) => {
    const topicBundle = buildTopicAssessmentBundle(selection.topic, selection.count, topicIndex);
    parts.fluency.push(...topicBundle.fluency);
    parts.reasoning.push(...topicBundle.reasoning);
    parts.written.push(...topicBundle.written);
  });

  let questionNumber = 1;
  let totalMarks = 0;

  ["fluency", "reasoning", "written"].forEach((partKey) => {
    parts[partKey].forEach((item) => {
      item.number = questionNumber;
      questionNumber += 1;
      totalMarks += item.marks;
    });
  });

  return {
    title: assessmentTitleInput.value.trim() || "Year 7 Maths Assessment",
    year: assessmentYearInput.value.trim() || "Year 7",
    timeAllowed: assessmentTimeInput.value.trim() || "40 minutes",
    totalMarks,
    parts
  };
}

function buildTopicAssessmentBundle(topic, count, topicIndex) {
  const distribution = getAssessmentDistribution(count);
  const fluencyVariants = getTopicVariantsByRole(topic, "fluency");
  const writtenVariants = getTopicVariantsByRole(topic, "written");
  const generator = assessmentApi.generators[topic.generatorType];
  const reasoningBuilder = assessmentApi.reasoningGenerators[topic.generatorType];
  const used = new Set();

  const fluency = [];
  const reasoning = [];
  const written = [];

  const fluencyPool = [
    ...collectVariantQuestions(topic, fluencyVariants[0], "easy", generator, 0),
    ...collectVariantQuestions(topic, fluencyVariants[0], "medium", generator, 1),
    ...collectVariantQuestions(topic, fluencyVariants[1] || fluencyVariants[0], "medium", generator, 2)
  ];

  addFromPool(fluency, fluencyPool, distribution.fluency, used, topic.label, 1, "fluency");

  const reasoningSeed = fluencyPool.slice(0, 4);
  const reasoningPool = reasoningBuilder
    ? reasoningBuilder(topic, fluencyVariants[0], assessmentApi.difficultySettings.hard, "hard", { questions: reasoningSeed })
    : [];
  addFromPool(reasoning, reasoningPool, distribution.reasoning, used, topic.label, 2, "reasoning");

  const writtenPool = buildProblemSolvingPool(topic, topicIndex, distribution.written);

  addFromPool(written, writtenPool, distribution.written, used, topic.label, 3, "written");

  if (written.length < distribution.written) {
    addFromPool(written, reasoningPool, distribution.written - written.length, used, topic.label, 3, "written");
  }

  if (reasoning.length < distribution.reasoning) {
    addFromPool(reasoning, writtenPool, distribution.reasoning - reasoning.length, used, topic.label, 2, "reasoning");
  }

  if (fluency.length < distribution.fluency) {
    addFromPool(fluency, fluencyPool.concat(writtenPool), distribution.fluency - fluency.length, used, topic.label, 1, "fluency");
  }

  return { fluency, reasoning, written };
}

function collectVariantQuestions(topic, variant, difficultyKey, generator, bump) {
  if (!variant || !generator) {
    return [];
  }

  const settings = {
    ...assessmentApi.difficultySettings[difficultyKey],
    generationCounter: assessmentState.generationCounter + bump
  };
  const worksheet = generator(topic, variant, settings, difficultyKey);
  return worksheet.questions || [];
}

function getTopicVariantsByRole(topic, role) {
  const variants = topic.variants || [];
  const fluency = variants.filter((variant) => {
    return !/(error|true-false|compare|missing|reflection|describe|which-measure|reasoning|complete-the-shape|compare-representations)/.test(variant.id);
  });
  const written = variants.filter((variant) => {
    return /(error|true-false|compare|missing|reflection|describe|complete|which|compare-representations|match)/.test(variant.id);
  });

  if (role === "written") {
    return written.length ? written : variants;
  }

  return fluency.length ? fluency : variants;
}

function getAssessmentDistribution(count) {
  if (count <= 4) {
    return { fluency: count - 1, reasoning: 1, written: 0 };
  }

  if (count <= 6) {
    return { fluency: count - 2, reasoning: 1, written: 1 };
  }

  return { fluency: count - 3, reasoning: 1, written: 2 };
}

function addFromPool(target, pool, count, used, topicLabel, marks, kind) {
  for (const item of pool) {
    if (target.length >= count) {
      break;
    }

    const key = assessmentApi.getQuestionKey(item);
    const prompt = assessmentApi.getQuestionPromptText(item);

    if (used.has(key) || used.has(prompt)) {
      continue;
    }

    used.add(key);
    used.add(prompt);
    target.push({
      topicLabel,
      question: item.question,
      answer: item.answer,
      diagram: item.diagram || null,
      marks: item.marks || marks,
      kind
    });
  }
}

function buildProblemSolvingPool(topic, topicIndex, count) {
  const pool = getProblemSolvingBank(topic.generatorType);
  return rotatePool(pool, assessmentState.generationCounter + topicIndex).slice(0, Math.max(count + 2, 3));
}

function rotatePool(pool, offset) {
  if (!pool.length) {
    return [];
  }

  const start = offset % pool.length;
  return [...pool.slice(start), ...pool.slice(0, start)];
}

function getProblemSolvingBank(generatorType) {
  switch (generatorType) {
    case "equivalent-fractions":
      return [
        { question: "A recipe card says 3/4 litre of juice is equivalent to 6/8 litre. A pupil writes 9/12 litre for the same amount. Is the pupil correct? Explain, then work out how much juice is needed for 2 jugs of the same size.", answer: "Yes, 9/12 is equivalent to 3/4. Two jugs need 1 1/2 litres.", marks: 3 },
        { question: "A wall display shows 2/5, 4/10, 6/15 and 8/25. Which three fractions are equivalent? Explain how you know, then state which fraction is not equivalent.", answer: "2/5, 4/10 and 6/15 are equivalent. 8/25 is not equivalent.", marks: 3 },
        { question: "Sam says 5/6 and 10/12 are equivalent because both numerator and denominator were doubled. Then he says 15/19 is also equivalent. Identify the incorrect fraction and explain why.", answer: "15/19 is incorrect because the same scale factor has not been used on numerator and denominator.", marks: 2 },
        { question: "A drink label shows 1/3 litre. Another bottle shows 4/12 litre. A shop stocks 6 of each bottle. Work out how many litres there are altogether if the bottles are equivalent sizes.", answer: "Each bottle is 1/3 litre, so 12 bottles total give 4 litres.", marks: 3 }
      ];
    case "compare-order-fractions":
      return [
        { question: "Three water tanks are filled to 3/4, 5/8 and 7/10 of their capacity. Order them from least full to most full and explain the comparison you used.", answer: "5/8, 7/10, 3/4.", marks: 3 },
        { question: "A pupil says 7/9 is greater than 4/5 because 7 is greater than 4. Explain the mistake, then decide which fraction is actually greater.", answer: "The denominators matter. 4/5 is greater than 7/9.", marks: 3 },
        { question: "Two classes completed 11/15 and 3/4 of a reading challenge. Which class completed more, and by how much? Give the difference as a fraction.", answer: "3/4 is greater by 1/60.", marks: 3 },
        { question: "Write a fraction that is between 2/3 and 3/4, then explain how you know it lies between them.", answer: "Accept a valid example such as 7/10 with a correct justification.", marks: 2 }
      ];
    case "add-subtract-fractions":
      return [
        { question: "A runner completes 3/8 km in the warm-up and 1/4 km in the cool-down. How far do they run altogether? Show the fraction addition clearly.", answer: "5/8 km.", marks: 2 },
        { question: "A ribbon is 7/10 m long. 3/10 m is cut off. How much ribbon is left? Then explain why the denominator does not change.", answer: "4/10 m or 2/5 m. The denominator stays the same because the size of each part is unchanged.", marks: 3 },
        { question: "A class needs 1 whole poster. They have already completed 2/5 of it in lesson 1 and 1/5 in lesson 2. What fraction is still unfinished?", answer: "2/5.", marks: 2 },
        { question: "A pupil claims 4/9 + 2/9 = 6/18. Correct the answer and explain the error.", answer: "6/9 or 2/3. The numerator adds, but the denominator stays 9.", marks: 3 }
      ];
    case "multiply-fractions-integers":
      return [
        { question: "Each bottle holds 3/4 litre of water. How much water is in 3 full bottles? Give your answer as a mixed number if needed.", answer: "2 1/4 litres.", marks: 2 },
        { question: "A teacher uses 2/5 of a packet of counters for each group. She has 4 groups. How many packets are needed altogether?", answer: "8/5 packets or 1 3/5 packets.", marks: 2 },
        { question: "A pupil says 5 x 2/3 = 10/15. Explain the mistake, then work out the correct answer.", answer: "The denominator should stay 3. The correct answer is 10/3 or 3 1/3.", marks: 3 },
        { question: "A machine uses 1/6 litre of oil each hour. How much oil does it use in 9 hours? Then state whether the answer is more or less than 1 litre.", answer: "9/6 litres or 1 1/2 litres, which is more than 1 litre.", marks: 3 }
      ];
    case "fraction-of-an-amount":
      return [
        { question: "Three fifths of 35 pupils walk to school. Work out how many pupils walk to school, and show the step where you find one fifth first.", answer: "21 pupils.", marks: 3 },
        { question: "A sports hall has 48 seats. Seven eighths of the seats are filled. How many seats are filled, and how many are empty?", answer: "42 filled, 6 empty.", marks: 3 },
        { question: "A pupil knows that 1/4 of a number is 9. Work out the whole number, then find 3/4 of the same number.", answer: "The whole is 36 and 3/4 is 27.", marks: 3 },
        { question: "Two thirds of a class of 30 finished their homework on time. One fifth of the whole class forgot. How many pupils did their homework but still handed it in late?", answer: "18 finished on time, 6 forgot, so 6 did it but handed it in late.", marks: 3 }
      ];
    case "fdp-links":
    case "fraction-decimal-conversions":
      return [
        { question: "A shop advert says a bag of flour is 0.75 kg, another label says 3/4 kg, and a third says 75%. Which two labels represent the same amount of 1 kg, and why?", answer: "All three represent the same amount: 0.75 = 3/4 = 75%.", marks: 3 },
        { question: "A pupil scores 18 out of 24 in a quiz. Write this result as a simplified fraction, decimal, and percentage.", answer: "3/4, 0.75, 75%.", marks: 3 },
        { question: "Two discounts are offered: 0.2 off the price and 18% off the price. Which discount is greater, and by how much?", answer: "0.2 means 20%, so it is greater by 2%.", marks: 3 },
        { question: "A tank is filled to 5/8 full. Write this as a decimal, then decide whether it is more or less than 60%.", answer: "0.625, which is 62.5%, so it is more than 60%.", marks: 3 }
      ];
    case "place-value-decimals":
      return [
        { question: "A measurement is rounded to 4.7 cm to 1 decimal place. Write the interval that the original measurement could lie in, then give one value that would round to 4.7 cm.", answer: "4.65 cm <= measurement < 4.75 cm, and any valid example in that interval.", marks: 3 },
        { question: "A tank holds 3.406 litres, 3.46 litres and 3.4 litres in three sections. Order the amounts from smallest to largest and explain which decimal place helped you decide.", answer: "3.4, 3.406, 3.46. The thousandths and hundredths places determine the order.", marks: 3 },
        { question: "A pupil says 5.07 is greater than 5.7 because 70 is greater than 7. Explain the mistake using place value.", answer: "5.7 is 5.70, which has 7 tenths. 5.07 has only 7 hundredths.", marks: 3 },
        { question: "Four jars contain 2.05 kg, 2.5 kg, 2.15 kg and 2.005 kg. Which is closest to 2.1 kg, and by how much?", answer: "2.05 kg is closest, by 0.05 kg.", marks: 3 }
      ];
    case "compare-order-decimals":
      return [
        { question: "Four runners finish in 2.48 s, 2.5 s, 2.405 s and 2.45 s. Order the times from quickest to slowest.", answer: "2.405, 2.45, 2.48, 2.5.", marks: 2 },
        { question: "A pupil says 3.09 is greater than 3.9 because 9 is greater than 0. Explain the mistake, then state which number is larger.", answer: "3.9 is larger because it has 9 tenths, while 3.09 has only 9 hundredths.", marks: 3 },
        { question: "A measurement is rounded to 4.7 cm to 1 decimal place. Write the interval that the original measurement could lie in.", answer: "4.65 cm ≤ measurement < 4.75 cm.", marks: 3 },
        { question: "Three bottles contain 0.6 L, 0.58 L and 0.605 L. Which bottle contains the most, and how much more does it contain than the smallest bottle?", answer: "0.605 L is the most, and it is 0.025 L more than 0.58 L.", marks: 3 }
      ];
    case "decimal-operations":
      return [
        { question: "A shopper buys fruit costing £2.35, juice costing £1.89 and bread costing £1.76. Work out the total cost.", answer: "£6.00.", marks: 2 },
        { question: "A length of ribbon is 5.2 m. 1.85 m is used on one display and 2.4 m on another. How much ribbon is left?", answer: "0.95 m.", marks: 3 },
        { question: "A pupil multiplies 0.48 by 10 and writes 0.480. Explain the mistake, then give the correct answer.", answer: "The digits need to become ten times as large. The correct answer is 4.8.", marks: 3 },
        { question: "A carton holds 1.5 litres of juice. Five cartons are poured equally into 6 jugs. How much juice is in each jug?", answer: "1.25 litres.", marks: 3 }
      ];
    case "compare-order-percentages":
      return [
        { question: "Three classes scored 68%, 72% and 69% in a quiz. Order the results from lowest to highest, then state how many percentage points separate the best and worst scores.", answer: "68%, 69%, 72%; the gap is 4 percentage points.", marks: 2 },
        { question: "A coat is reduced by 25% in one shop and by 0.2 in another. Which reduction is greater?", answer: "25% is greater because 0.2 means 20%.", marks: 2 },
        { question: "A pupil says 105% cannot be correct because percentages stop at 100. Explain why that is wrong in some contexts.", answer: "Percentages can be above 100 when a quantity is greater than the whole or original amount.", marks: 2 },
        { question: "Order 48%, 0.52 and 1/2 from least to greatest after converting them to a common form.", answer: "48%, 1/2, 0.52.", marks: 3 }
      ];
    case "metric-unit-conversions":
      return [
        { question: "A rope is 2.4 m long. It is cut into pieces of 60 cm each. How many full pieces can be made?", answer: "4 full pieces.", marks: 2 },
        { question: "A bag of rice weighs 3.5 kg. Another bag weighs 850 g. Work out the total mass in grams.", answer: "4350 g.", marks: 3 },
        { question: "A pupil converts 450 cm to 45 m. Explain the mistake, then give the correct answer.", answer: "There are 100 cm in 1 m, so 450 cm = 4.5 m.", marks: 3 },
        { question: "A race is 1500 m long. A runner has completed 0.85 km. How many metres are left?", answer: "650 m.", marks: 3 }
      ];
    case "place-value-integers":
      return [
        { question: "Five temperatures are recorded as -3°C, 4°C, -1°C, 6°C and -5°C. Order them from coldest to warmest.", answer: "-5, -3, -1, 4, 6.", marks: 2 },
        { question: "A number rounds to 48,000 to the nearest thousand. Give one possible value and explain why it works.", answer: "Accept any value from 47,500 to 48,499.", marks: 2 },
        { question: "A pupil says 39,999 rounds to 30,000 to the nearest ten thousand. Correct the answer and explain.", answer: "It rounds to 40,000 because it is closer to 40,000 than 30,000.", marks: 3 },
        { question: "A lift starts on floor -2, goes up 7 floors, then down 4 floors. What floor does it finish on?", answer: "Floor 1.", marks: 2 }
      ];
    case "factors-multiples-primes":
      return [
        { question: "A teacher wants to split 36 counters equally into groups with no remainder. Which group sizes are possible, and which of those sizes are prime?", answer: "Factors are 1, 2, 3, 4, 6, 9, 12, 18, 36. Prime group sizes are 2 and 3.", marks: 3 },
        { question: "A pupil says 21 is prime because it is odd. Explain why that is wrong, then list all of its factors.", answer: "21 is not prime because it has factors 1, 3, 7 and 21.", marks: 3 },
        { question: "Two numbers are both multiples of 6 and less than 25. One is prime and one is composite. Is that possible? Explain.", answer: "No. Any multiple of 6 greater than 6 is composite, and 6 itself is also composite.", marks: 2 },
        { question: "Find one number less than 40 that is a multiple of 5, a factor of 30, and not a prime number.", answer: "Accept 5, 10, 15 or 30 if the conditions are interpreted carefully; strongest exact fit is 5 is prime, so composite examples are 10, 15 or 30.", marks: 3 }
      ];
    case "square-cube-numbers":
      return [
        { question: "A display uses one square panel with 6 rows of 6 lights and one cube model with 4 rows of 4 rows of 4 lights. Work out the total number of lights used.", answer: "36 + 64 = 100 lights.", marks: 3 },
        { question: "A pupil says 49 is both a square number and a cube number. Explain why this is wrong, then give one number that is both.", answer: "49 is 7 squared but not a cube. One number that is both is 1 or 64.", marks: 3 },
        { question: "A garden has a square patio with side length 9 m and a cube water tank with side length 3 m. Compare the square number and cube number involved.", answer: "9 squared is 81 and 3 cubed is 27, so 81 is greater by 54.", marks: 3 },
        { question: "Write the next square number after 81 and the next cube number after 64. Explain how you found each one.", answer: "100 and 125.", marks: 2 }
      ];
    case "four-operations-integers":
      return [
        { question: "A cafe takes GBP248 in the morning and GBP376 in the afternoon, then spends GBP185 on supplies. What is the profit left from the day?", answer: "GBP439.", marks: 3 },
        { question: "A pupil evaluates 84 divided by 6 + 7 as 6. Explain the mistake, then find the correct answer.", answer: "Division should be done first: 84 divided by 6 is 14, then add 7 to get 21.", marks: 3 },
        { question: "A box holds 24 pencils. There are 18 boxes and 57 loose pencils. How many pencils are there altogether?", answer: "489 pencils.", marks: 2 },
        { question: "A runner completes 5 laps of 320 m and then an extra 175 m. What distance do they run in total?", answer: "1775 m.", marks: 2 }
      ];
    case "negative-numbers":
      return [
        { question: "At 6 am the temperature is -4 degrees C. It rises by 7 degrees, falls by 5 degrees, then rises by 3 degrees. What is the final temperature?", answer: "1 degree C.", marks: 2 },
        { question: "A diver is at -12 m. She rises 5 m, descends 8 m, then rises 11 m. Where is she now?", answer: "-4 m.", marks: 3 },
        { question: "A pupil says -3 multiplied by -5 must be negative because both numbers are negative. Explain the error, then give the correct answer.", answer: "A negative times a negative is positive, so the answer is 15.", marks: 3 },
        { question: "A game starts at -6 points. A player earns 14 points, loses 9 points, then earns double the points from a final round worth 5 points. Work out the final score.", answer: "9 points.", marks: 3 }
      ];
    case "order-of-operations":
      return [
        { question: "A pupil evaluates 18 - 3 x 4 + 2 as 60. Explain the error, then work out the correct answer.", answer: "Multiplication should be done first. The correct answer is 8.", marks: 3 },
        { question: "A shop offers 3 packs of pencils at GBP4 each and then adds a GBP2 delivery charge. Write and evaluate an expression for the total cost.", answer: "3 x 4 + 2 = GBP14.", marks: 2 },
        { question: "Use brackets to make 6 + 2 x 5 equal 40, then explain why the brackets change the result.", answer: "(6 + 2) x 5 = 40.", marks: 3 },
        { question: "A pupil says brackets do not matter in 12 - (3 + 4). Explain why that is incorrect and find the correct value.", answer: "The brackets force 3 + 4 first, so the value is 5.", marks: 2 }
      ];
    case "square-cube-numbers":
      return [
        { question: "A game starts at -6 points. A player earns 14 points, loses 9 points, then earns double the points from the final round, which is 5 points. Work out the final score.", answer: "9 points.", marks: 3 },
        { question: "A display uses 6 rows of 6 lights in one square panel and 4 rows of 4 rows of 4 lights in one cube model. Work out the total number of lights used.", answer: "36 + 64 = 100 lights.", marks: 3 },
        { question: "A pupil evaluates 18 - 3 x 4 + 2 as 60. Explain the error, then work out the correct answer.", answer: "Multiplication should be done first. The correct answer is 8.", marks: 3 },
        { question: "At 6 am the temperature is -4°C. It rises by 7°C, falls by 5°C, then rises by 3°C. What is the final temperature?", answer: "1°C.", marks: 2 }
      ];
    case "algebraic-notation":
      return [
        { question: "A taxi fare is GBP3 plus GBP2 for each mile travelled. Write an expression for the total fare for m miles, then work out the cost of a 5-mile trip.", answer: "3 + 2m, and for 5 miles the cost is GBP13.", marks: 3 },
        { question: "A cinema charges GBP6 per child ticket and GBP9 per adult ticket. Write an expression for the total cost of c child tickets and a adult tickets.", answer: "6c + 9a.", marks: 2 },
        { question: "A pupil writes 3 + n4 for 3 plus 4 times n. Rewrite the expression correctly and explain why the original notation is unclear.", answer: "3 + 4n.", marks: 3 },
        { question: "A garden bed has length x and width x + 4. Write an expression for its perimeter and simplify it.", answer: "2x + 2(x + 4) = 4x + 8.", marks: 3 }
      ];
    case "collecting-like-terms":
      return [
        { question: "A pupil simplifies 5a + 3 + 2a - 1 as 7a + 2a. Explain the mistake, then give the correct answer.", answer: "The constants should combine to 2. The correct answer is 7a + 2.", marks: 3 },
        { question: "A school buys y pens on Monday and 4y pens on Tuesday, then returns 2 pens. Write and simplify an expression for the total number of pens kept.", answer: "5y - 2.", marks: 2 },
        { question: "A pupil says 3x + 4y can be simplified to 7xy. Explain why that is not correct.", answer: "x and y are different variables, so the terms are not like terms.", marks: 3 },
        { question: "Create an expression with three like terms and one unlike term, then simplify it.", answer: "Accept any valid example with correct simplification.", marks: 2 }
      ];
    case "one-step-equations":
      return [
        { question: "A gym charges a joining fee of GBP7 and then the total bill is GBP19. Write and solve an equation for the missing monthly fee x.", answer: "x + 7 = 19, so x = 12.", marks: 3 },
        { question: "Four identical notebooks cost GBP28. Write and solve an equation to find the cost of one notebook.", answer: "4x = 28, so x = 7.", marks: 2 },
        { question: "A pupil solves x - 9 = 14 by subtracting 9 again. Explain the mistake and find the correct solution.", answer: "You should add 9 to both sides. x = 23.", marks: 3 },
        { question: "Write a different one-step equation with solution x = 6 and check it.", answer: "Accept any valid one-step equation with x = 6.", marks: 2 }
      ];
    case "expanding-brackets":
      return [
        { question: "A pack contains 4 identical notebooks and 4 pens. Write an expression for the total cost if one notebook costs x pounds and one pen costs 3 pounds, then simplify it.", answer: "4(x + 3) = 4x + 12.", marks: 3 },
        { question: "A pupil expands 5(y + 2) as 5y + 2. Explain the mistake, then write the correct expansion.", answer: "The 5 multiplies both terms, so the correct expansion is 5y + 10.", marks: 3 },
        { question: "A rectangle has width z + 1 and there are 3 identical rectangles in a row. Write and simplify an expression for the total width.", answer: "3(z + 1) = 3z + 3.", marks: 2 },
        { question: "Create a bracket expression that expands to 6a + 18.", answer: "Accept 6(a + 3) or equivalent.", marks: 2 }
      ];
    case "substitution":
      return [
        { question: "A formula for a ticket cost is 2a + 5, where a is the number of adult tickets. Work out the cost when a = 4.", answer: "13.", marks: 2 },
        { question: "A pupil substitutes x = 3 into 4x + 1 and gets 431. Explain the mistake, then find the correct value.", answer: "They treated 4x as 43. The correct value is 13.", marks: 3 },
        { question: "The expression 3p + q is used with p = 5 and q = 2. Work out the value and explain which value is substituted where.", answer: "17.", marks: 2 },
        { question: "Two expressions both equal 14 when x = 3. One is 2x + 8. Write another and check it.", answer: "Accept any valid example.", marks: 2 }
      ];
    case "function-machines":
      return [
        { question: "A function machine doubles a number and then adds 5 to get 19. Write an equation and solve it.", answer: "2x + 5 = 19, so x = 7.", marks: 3 },
        { question: "A machine subtracts 4 and then multiplies by 3. Work out the output when the input is 10.", answer: "18.", marks: 2 },
        { question: "A pupil works backwards through a machine that adds 6 by adding 6 again. Explain the mistake and find the correct input if the output was 14.", answer: "You must subtract 6, so the input was 8.", marks: 3 },
        { question: "Design a two-step function machine that sends 5 to 17, then test it.", answer: "Accept any valid machine such as multiply by 3 then add 2.", marks: 2 }
      ];
    case "sequences":
      return [
        { question: "A sequence starts 7, 11, 15, 19, ... A pupil says the nth term is 4n. Explain why that is not correct, then give the correct nth term.", answer: "4n gives 4, 8, 12, ... The correct nth term is 4n + 3.", marks: 3 },
        { question: "A pattern of tiles uses 5 tiles in shape 1, 8 in shape 2 and 11 in shape 3. Find the number of tiles in shape 10.", answer: "32 tiles.", marks: 3 },
        { question: "The rule for a sequence is 6n - 1. Work out the first three terms and explain how you know.", answer: "5, 11, 17.", marks: 2 },
        { question: "A pupil says the sequence 10, 8, 6, 4 is linear but has nth term 2n. Explain the mistake.", answer: "The sequence decreases by 2, so 2n does not fit. A valid nth term is 12 - 2n.", marks: 3 }
      ];
    case "algebraic-notation":
      return [
        { question: "A taxi fare is £3 plus £2 for each mile travelled. Write an expression for the total fare for m miles, then work out the cost of a 5-mile trip.", answer: "3 + 2m, and for 5 miles the cost is £13.", marks: 3 },
        { question: "A sequence starts 7, 11, 15, 19, ... A pupil says the nth term is 4n. Explain why that is not correct, then give the correct nth term.", answer: "4n gives 4, 8, 12, ... The correct nth term is 4n + 3.", marks: 3 },
        { question: "A rectangle has length x + 4 and width x + 1. Write an expression for its perimeter, then simplify it.", answer: "2(x + 4) + 2(x + 1) = 4x + 10.", marks: 3 },
        { question: "A function machine doubles a number and then adds 5 to get 19. Write an equation and solve it.", answer: "2x + 5 = 19, so x = 7.", marks: 3 }
      ];
    case "ratio-notation":
    case "scaling-multiplicative-reasoning":
    case "proportion-problems":
      return [
        { question: "A paint mix uses red:blue in the ratio 3:5. If 18 ml of red paint is used, how much blue paint is needed, and how much paint is there altogether?", answer: "30 ml of blue, 48 ml altogether.", marks: 3 },
        { question: "A recipe for 4 people uses 250 g of pasta. How much pasta is needed for 10 people if the recipe is scaled proportionally?", answer: "625 g.", marks: 3 },
        { question: "A map scale says 1 cm represents 5 km. Two towns are 7.5 cm apart on the map. Work out the real distance.", answer: "37.5 km.", marks: 2 },
        { question: "A pupil says doubling one part of a ratio means you can add the same amount to the other part to keep it equivalent. Explain why this is wrong.", answer: "Equivalent ratios require the same multiplier on both parts, not the same addition.", marks: 2 }
      ];
    case "perimeter":
      return [
        { question: "A rectangular playground is 18 m long and 11 m wide. A fence is placed all the way around it. Work out the perimeter, then work out the cost if fencing costs GBP4 per metre.", answer: "Perimeter 58 m, cost GBP232.", marks: 3 },
        { question: "A shape has side lengths 7 cm, 7 cm, 5 cm and 9 cm. Another shape has side lengths 8 cm, 6 cm, 4 cm and 10 cm. Which has the greater perimeter?", answer: "Both have perimeter 28 cm.", marks: 3 },
        { question: "A pupil adds only two side lengths of a rectangle to find the perimeter. Explain the mistake and find the perimeter of a 9 cm by 4 cm rectangle.", answer: "You need all four sides, or double the sum of length and width. Perimeter = 26 cm.", marks: 3 },
        { question: "A garden path is 25 m around. Two equal sides are 6 m each and one side is 8 m. Find the missing side.", answer: "5 m.", marks: 2 }
      ];
    case "area-rectangles-compound":
      return [
        { question: "A room is 6 m by 4 m. A smaller rectangular cupboard area of 2 m by 1 m is not carpeted. Work out the carpeted area.", answer: "22 square metres.", marks: 3 },
        { question: "A compound shape is made from two rectangles: one is 8 cm by 3 cm and the other is 5 cm by 2 cm. What is the total area?", answer: "34 square centimetres.", marks: 2 },
        { question: "A pupil adds all the side lengths of a rectangle to find its area. Explain the mistake and calculate the area of a 12 cm by 7 cm rectangle.", answer: "That finds perimeter, not area. The area is 84 square centimetres.", marks: 3 },
        { question: "A floor has area 48 square metres and width 6 m. Find its length.", answer: "8 m.", marks: 2 }
      ];
    case "area-triangles-parallelograms":
      return [
        { question: "A triangle has base 12 cm and height 9 cm. A parallelogram has the same base and height. Work out both areas and compare them.", answer: "Triangle area 54 square centimetres, parallelogram area 108 square centimetres, so the parallelogram is double.", marks: 3 },
        { question: "A banner is shaped like a triangle with area 36 square metres and base 9 m. Find the height.", answer: "8 m.", marks: 3 },
        { question: "A pupil uses the formula base x height for a triangle without dividing by 2. Explain the mistake.", answer: "A triangle is half of a matching parallelogram, so the area must be halved.", marks: 2 },
        { question: "Two parallelograms have the same area. One has base 10 cm and height 6 cm. The other has base 12 cm. Find the height of the second shape.", answer: "5 cm.", marks: 3 }
      ];
    case "angle-facts":
      return [
        { question: "At a crossing, one angle is 68 degrees. Work out the angle on a straight line beside it and the vertically opposite angle. Explain the angle facts used.", answer: "Straight-line partner is 112 degrees and vertically opposite angle is 68 degrees.", marks: 3 },
        { question: "Three angles around a point are 95 degrees, 110 degrees and x. Find x.", answer: "155 degrees.", marks: 2 },
        { question: "A pupil says angles on a straight line add to 360 degrees. Explain the mistake and give the correct total.", answer: "Angles on a straight line add to 180 degrees.", marks: 2 },
        { question: "One angle is 37 degrees and it forms a straight line with another angle, which is also split into two equal parts. Find the size of each equal part.", answer: "71.5 degrees each.", marks: 3 }
      ];
    case "coordinates-four-quadrants":
      return [
        { question: "Point A is at (3, -2). It is reflected in the y-axis and then translated 4 units up. Find the final coordinates.", answer: "(-3, 2).", marks: 3 },
        { question: "Point B is at (-5, 4). It is reflected in the x-axis. What are the new coordinates?", answer: "(-5, -4).", marks: 2 },
        { question: "A pupil says reflecting (2, -3) in the y-axis gives (2, 3). Explain the mistake.", answer: "Reflection in the y-axis changes the x-value, so the correct image is (-2, -3).", marks: 3 },
        { question: "A shape has one vertex at (-2, 5). After a translation by (4, -3), where is the new vertex?", answer: "(2, 2).", marks: 2 }
      ];
    case "transformations":
      return [
        { question: "A point at (1, 4) is translated by the vector (3, -2). Find the image.", answer: "(4, 2).", marks: 2 },
        { question: "A triangle is reflected in the x-axis. One vertex was at (-3, 2). Where is its image?", answer: "(-3, -2).", marks: 2 },
        { question: "A pupil says a reflection and a translation are the same because they both move a shape. Explain why this is not true.", answer: "A translation slides a shape without flipping it, but a reflection flips it in a mirror line.", marks: 3 },
        { question: "A point at (2, 1) is rotated 180 degrees about the origin. Find the image.", answer: "(-2, -1).", marks: 2 }
      ];
    case "properties-2d-shapes":
      return [
        { question: "A quadrilateral has four right angles and two pairs of equal opposite sides. Name the shape and explain why it could also be called a rectangle.", answer: "It is a rectangle; those are defining rectangle properties.", marks: 2 },
        { question: "A pupil says every shape with four equal sides is a square. Explain why that is not always true.", answer: "A rhombus also has four equal sides but does not need four right angles.", marks: 3 },
        { question: "Which is the better choice for a road sign that needs only one line of symmetry: a kite or a square? Explain.", answer: "A kite, because a square has four lines of symmetry.", marks: 2 },
        { question: "A shape has one pair of parallel sides and no line of symmetry. Name a possible shape and justify your answer.", answer: "A non-isosceles trapezium is a valid example.", marks: 3 }
      ];
    case "nets-and-3d-shapes":
      return [
        { question: "A net has two triangles and three rectangles. Name the solid it will make and state how many faces it has.", answer: "A triangular prism with 5 faces.", marks: 2 },
        { question: "A pupil says any net made of six squares will fold into a cube. Explain why that is not always true.", answer: "The arrangement matters; some six-square nets overlap and cannot fold into a cube.", marks: 3 },
        { question: "A solid has 5 faces, 8 edges and 5 vertices. Identify the solid.", answer: "A square-based pyramid.", marks: 2 },
        { question: "A package is shaped like a cuboid with 6 rectangular faces. Explain why a cylinder would not be a correct description.", answer: "A cylinder has two circular faces and a curved surface, not six rectangular faces.", marks: 2 }
      ];
    case "symmetry-reflection-properties":
      return [
        { question: "A logo has exactly one line of symmetry. Explain why a kite could work but a parallelogram would not.", answer: "A kite can have one line of symmetry, while a general parallelogram has none.", marks: 3 },
        { question: "A point lies 4 squares to the left of a mirror line. After reflection, where will the image be?", answer: "4 squares to the right of the mirror line.", marks: 2 },
        { question: "A pupil says a reflected shape becomes a different size because it moves across the mirror line. Explain the mistake.", answer: "Reflection keeps the shape congruent, so the size stays the same.", marks: 2 },
        { question: "A shape has more than one line of symmetry but fewer than four. Name a possible shape and justify your choice.", answer: "A rectangle or rhombus are valid examples with 2 lines of symmetry.", marks: 3 }
      ];
    case "perimeter":
      return [
        { question: "A rectangular playground is 18 m long and 11 m wide. A fence is placed all the way around it. Work out the perimeter, then work out the cost if fencing costs £4 per metre.", answer: "Perimeter 58 m, cost £232.", marks: 3 },
        { question: "A triangle has base 12 cm and height 9 cm. A parallelogram has the same base and height. Work out both areas and compare them.", answer: "Triangle area 54 cm^2, parallelogram area 108 cm^2, so the parallelogram is double.", marks: 3 },
        { question: "At a crossing, one angle is 68°. Work out the angle on a straight line beside it and the vertically opposite angle. Explain the angle facts used.", answer: "Straight-line partner is 112° and vertically opposite angle is 68°.", marks: 3 },
        { question: "Point A is at (3, -2). It is reflected in the y-axis and then translated 4 units up. Find the final coordinates.", answer: "(-3, 2).", marks: 3 }
      ];
    case "tables-and-charts":
      return [
        { question: "A survey table shows 14 students chose football, 9 chose netball, 11 chose swimming and 6 chose athletics. How many students were surveyed altogether, and how many more chose football than athletics?", answer: "40 students altogether, and 8 more chose football.", marks: 3 },
        { question: "A pupil reads the tallest bar correctly but gives the wrong total. Explain what they have not yet done with the data.", answer: "They have not added all the category frequencies together.", marks: 2 },
        { question: "The chart shows 18 red counters, 12 blue counters and 10 yellow counters. What fraction of the total are blue?", answer: "12/40 = 3/10.", marks: 3 },
        { question: "A missing table entry must make the total 55. The known entries are 18, 14 and 9. Find the missing value.", answer: "14.", marks: 2 }
      ];
    case "mean-median-mode-range":
      return [
        { question: "The scores 6, 8, 8, 10 and 13 are recorded for a game. Work out the mean and the range.", answer: "Mean 9, range 7.", marks: 2 },
        { question: "A pupil says the mode of 4, 5, 5, 6, 8, 8 is 8. Explain why the data set does not have just one mode.", answer: "Both 5 and 8 appear most often, so it is bimodal.", marks: 3 },
        { question: "The mean of four numbers is 12. Three of the numbers are 9, 11 and 15. Find the fourth number.", answer: "13.", marks: 3 },
        { question: "A set of scores has median 14 and range 9. Explain what each measure tells you about the data.", answer: "The median is the middle value when ordered, and the range is the difference between the largest and smallest values.", marks: 2 }
      ];
    case "basic-probability-scale":
      return [
        { question: "A bag contains only blue and green counters. The probability of blue is 0.7. If there are 20 counters altogether, how many are likely to be blue and how many green?", answer: "14 blue and 6 green.", marks: 3 },
        { question: "A pupil says an event with probability 0.7 is certain. Explain the mistake.", answer: "0.7 means likely, not certain. Only probability 1 is certain.", marks: 2 },
        { question: "A spinner has probability 0.35 of landing on red. What is the probability it does not land on red?", answer: "0.65.", marks: 2 },
        { question: "Which is more likely: picking a vowel from the word MATHS or rolling an even number on a fair die? Explain.", answer: "Rolling an even number is more likely: 3/6 compared with 1/5.", marks: 3 }
      ];
    case "stem-leaf-frequency":
      return [
        { question: "A stem-and-leaf diagram shows 1 | 4 7 9 and 2 | 1 3. Write the five data values, then find the median.", answer: "14, 17, 19, 21, 23; median 19.", marks: 3 },
        { question: "A pupil reads 3 | 7 as two separate numbers, 3 and 7. Explain the mistake.", answer: "The stem and leaf combine to make the value 37.", marks: 2 },
        { question: "A frequency table shows 4 students scored 5, 7 students scored 6 and 3 students scored 8. How many students scored at least 6?", answer: "10 students.", marks: 2 },
        { question: "Explain why the leaves in a stem-and-leaf diagram should be written in order.", answer: "It makes the data easier to read and helps identify median and spread accurately.", marks: 2 }
      ];
    case "relative-frequency-intro":
      return [
        { question: "In 50 spins of a spinner, red appears 18 times. Work out the relative frequency of red, then decide whether red is more or less likely than 1/2 based on the experiment.", answer: "18/50 or 0.36, which is less likely than 1/2.", marks: 3 },
        { question: "A pupil says 8 successes is always stronger evidence than 6 successes. Explain why you also need the total number of trials.", answer: "Because 8 out of 10 is very different from 8 out of 100.", marks: 2 },
        { question: "An experiment gives relative frequency 0.48 after 100 trials. About how many successes does that represent?", answer: "48 successes.", marks: 2 },
        { question: "A spinner lands on blue 12 times in 30 spins and 25 times in 50 spins. Which relative frequency is closer to 1/2?", answer: "25/50 = 0.5 is exactly 1/2, so it is closer.", marks: 3 }
      ];
    case "tables-and-charts":
      return [
        { question: "A survey table shows 14 students chose football, 9 chose netball, 11 chose swimming and 6 chose athletics. How many students were surveyed altogether, and how many more chose football than athletics?", answer: "40 students altogether, and 8 more chose football.", marks: 3 },
        { question: "The scores 6, 8, 8, 10 and 13 are recorded for a game. Work out the mean and the range.", answer: "Mean 9, range 7.", marks: 2 },
        { question: "In 50 spins of a spinner, red appears 18 times. Work out the relative frequency of red, then decide whether red is more or less likely than 1/2 based on the experiment.", answer: "18/50 or 0.36, which is less likely than 1/2.", marks: 3 },
        { question: "A bag contains only blue and green counters. The probability of blue is 0.7. If there are 20 counters altogether, how many are likely to be blue and how many green?", answer: "14 blue and 6 green.", marks: 3 }
      ];
    default:
      return [
        { question: `Solve a multi-step problem using ${generatorType.replace(/-/g, " ")}. Show each step clearly and give the final answer.`, answer: "Accept a valid method and correct final answer.", marks: 3 },
        { question: `Read the information carefully, choose the correct method, and solve the problem using ${generatorType.replace(/-/g, " ")}.`, answer: "Accept a valid method and correct final answer.", marks: 3 },
        { question: `A pupil has used ${generatorType.replace(/-/g, " ")} in a problem. Identify the useful information, solve it, and justify the final answer.`, answer: "Accept a valid method and correct final answer.", marks: 3 }
      ];
  }
}

function renderAssessmentSummary(assessment) {
  const sectionCounts = [
    ["Fluency", assessment.parts.fluency.length],
    ["Reasoning", assessment.parts.reasoning.length],
    ["Problem solving", assessment.parts.written.length]
  ];

  assessmentResultsTitle.textContent = `${assessment.title} - ${assessment.parts.fluency.length + assessment.parts.reasoning.length + assessment.parts.written.length} questions`;
  assessmentSummary.innerHTML = `
    <div class="assessment-summary-grid">
      ${sectionCounts.map(([label, value]) => `
        <div class="assessment-summary-card">
          <span class="assessment-summary-label">${label}</span>
          <strong class="assessment-summary-value">${value}</strong>
        </div>
      `).join("")}
      <div class="assessment-summary-card">
        <span class="assessment-summary-label">Total marks</span>
        <strong class="assessment-summary-value">${assessment.totalMarks}</strong>
      </div>
    </div>
  `;
}

function renderAssessmentPaper(assessment) {
  assessmentPaperTitle.textContent = assessment.title;
  assessmentPaperYear.textContent = assessment.year;
  assessmentPaperTime.textContent = assessment.timeAllowed;
  assessmentPaperMarks.textContent = `${assessment.totalMarks} marks`;

  assessmentPaperSections.innerHTML = "";
  assessmentMarkSchemeList.innerHTML = "";

  const sections = [
    { key: "fluency", title: "Section A: Fluency and Skills", note: "Shorter questions to secure core methods." },
    { key: "reasoning", title: "Section B: Reasoning", note: "Explain, justify, and compare methods." },
    { key: "written", title: "Section C: Problem Solving", note: "Read carefully, pick out the information you need, and show each step clearly." }
  ];

  sections.forEach((section) => {
    const items = assessment.parts[section.key];
    if (!items.length) {
      return;
    }

    const sectionEl = document.createElement("section");
    sectionEl.className = "assessment-section";
    sectionEl.innerHTML = `
      <div class="assessment-section-header">
        <h3>${section.title}</h3>
        <p>${section.note}</p>
      </div>
    `;

    const list = document.createElement("ol");
    list.className = "assessment-question-list";
    list.start = items[0].number;

    items.forEach((item) => {
      list.appendChild(buildAssessmentQuestion(item));
      assessmentMarkSchemeList.appendChild(buildAssessmentMarkSchemeItem(item));
    });

    sectionEl.appendChild(list);
    assessmentPaperSections.appendChild(sectionEl);
  });

  assessmentMarkScheme.hidden = !markSchemeToggle.checked;
}

function buildAssessmentQuestion(item) {
  const entry = document.createElement("li");
  entry.className = `assessment-question-item assessment-question-item-${item.kind}`;

  const header = document.createElement("div");
  header.className = "assessment-question-header";
  header.innerHTML = `
    <span class="assessment-question-topic">${item.topicLabel}</span>
    <span class="assessment-question-marks">[${item.marks}]</span>
  `;
  entry.appendChild(header);

  const prompt = document.createElement("div");
  prompt.className = "assessment-question-text";
  prompt.innerHTML = assessmentApi.renderMathMarkup(item.question);
  entry.appendChild(prompt);

  if (item.diagram) {
    const diagram = document.createElement("div");
    diagram.className = "worksheet-diagram assessment-diagram";
    diagram.innerHTML = assessmentApi.renderDiagramMarkup(item.diagram);
    entry.appendChild(diagram);
  }

  const working = document.createElement("div");
  working.className = "assessment-working";
  working.style.minHeight = item.kind === "written" ? "6.2rem" : item.kind === "reasoning" ? "4.8rem" : "2.8rem";
  entry.appendChild(working);

  return entry;
}

function buildAssessmentMarkSchemeItem(item) {
  const entry = document.createElement("li");
  entry.innerHTML = `${item.number}. <span class="answer-text">${assessmentApi.renderMathMarkup(item.answer)}</span> <span class="assessment-mark-scheme-marks">(${item.marks} mark${item.marks === 1 ? "" : "s"})</span>`;
  return entry;
}

function groupTopicsBySubject(topicCatalog) {
  return Object.entries(topicCatalog).reduce((groups, [id, topic]) => {
    if (!groups[topic.subject]) {
      groups[topic.subject] = [];
    }

    groups[topic.subject].push({ id, label: topic.label, topic });
    return groups;
  }, {});
}
