const { topics: topicCatalog, difficultySettings, defaultTopic } = window.APP_DATA;

const generators = {
  "place-value-integers": generatePlaceValueIntegers,
  "factors-multiples-primes": generateFactorsMultiplesPrimes,
  "compare-order-fractions": generateCompareOrderFractions,
  "square-cube-numbers": generateSquareCubeNumbers,
  "four-operations-integers": generateFourOperationsIntegers,
  "compare-order-decimals": generateCompareOrderDecimals,
  "multiply-fractions-integers": generateMultiplyFractionsIntegers,
  "fraction-of-an-amount": generateFractionOfAnAmount,
  "area-rectangles-compound": generateAreaRectanglesCompound,
  transformations: generateTransformations,
  "tables-and-charts": generateTablesAndCharts,
  "mean-median-mode-range": generateMeanMedianModeRange,
  "basic-probability-scale": generateBasicProbabilityScale,
  "compare-order-percentages": generateCompareOrderPercentages,
  "metric-unit-conversions": generateMetricUnitConversions,
  "area-triangles-parallelograms": generateAreaTrianglesParallelograms,
  "scaling-multiplicative-reasoning": generateScalingMultiplicativeReasoning,
  "proportion-problems": generateProportionProblems,
  "fraction-decimal-conversions": generateFractionDecimalConversions,
  "nets-and-3d-shapes": generateNetsAnd3DShapes,
  "symmetry-reflection-properties": generateSymmetryReflectionProperties,
  "stem-leaf-frequency": generateStemLeafFrequency,
  "relative-frequency-intro": generateRelativeFrequencyIntro,
  "percentages-of-amounts": generatePercentagesOfAmounts,
  "standard-form-intro": generateStandardFormIntro,
  "indices-laws-intro": generateIndicesLawsIntro,
  "two-step-equations": generateTwoStepEquations,
  "straight-line-graphs-intro": generateStraightLineGraphsIntro,
  pythagoras: generatePythagoras,
  "compound-measures": generateCompoundMeasures,
  "simultaneous-equations-intro": generateSimultaneousEquationsIntro,
  "percentage-change": generatePercentageChange,
  "rearranging-formulae": generateRearrangingFormulae,
  "algebraic-notation": generateAlgebraicNotation,
  perimeter: generatePerimeter,
  "angle-facts": generateAngleFacts,
  "add-subtract-fractions": generateAddSubtractFractions,
  "ratio-notation": generateRatioNotation,
  "collecting-like-terms": generateCollectingLikeTerms,
  "coordinates-four-quadrants": generateCoordinatesFourQuadrants,
  "place-value-decimals": generatePlaceValueDecimals,
  "fdp-links": generateFdpLinks,
  "function-machines": generateFunctionMachines,
  sequences: generateSequences,
  "decimal-operations": generateDecimalOperations,
  "properties-2d-shapes": generateProperties2DShapes,
  "equivalent-fractions": generateEquivalentFractions,
  "order-of-operations": generateOrderOfOperations,
  "one-step-equations": generateOneStepEquations,
  "expanding-brackets": generateExpandingBrackets,
  "negative-numbers": generateNegativeNumbers,
  "substitution": generateSubstitution
};

const teachingGenerators = {
  "place-value-integers": generatePlaceValueIntegersTeaching,
  "factors-multiples-primes": generateFactorsMultiplesPrimesTeaching,
  "compare-order-fractions": generateCompareOrderFractionsTeaching,
  "square-cube-numbers": generateSquareCubeNumbersTeaching,
  "four-operations-integers": generateFourOperationsIntegersTeaching,
  "compare-order-decimals": generateCompareOrderDecimalsTeaching,
  "multiply-fractions-integers": generateMultiplyFractionsIntegersTeaching,
  "fraction-of-an-amount": generateFractionOfAnAmountTeaching,
  "area-rectangles-compound": generateAreaRectanglesCompoundTeaching,
  transformations: generateTransformationsTeaching,
  "tables-and-charts": generateTablesAndChartsTeaching,
  "mean-median-mode-range": generateMeanMedianModeRangeTeaching,
  "basic-probability-scale": generateBasicProbabilityScaleTeaching,
  "compare-order-percentages": generateCompareOrderPercentagesTeaching,
  "metric-unit-conversions": generateMetricUnitConversionsTeaching,
  "area-triangles-parallelograms": generateAreaTrianglesParallelogramsTeaching,
  "scaling-multiplicative-reasoning": generateScalingMultiplicativeReasoningTeaching,
  "proportion-problems": generateProportionProblemsTeaching,
  "fraction-decimal-conversions": generateFractionDecimalConversionsTeaching,
  "nets-and-3d-shapes": generateNetsAnd3DShapesTeaching,
  "symmetry-reflection-properties": generateSymmetryReflectionPropertiesTeaching,
  "stem-leaf-frequency": generateStemLeafFrequencyTeaching,
  "relative-frequency-intro": generateRelativeFrequencyIntroTeaching,
  "percentages-of-amounts": generatePercentagesOfAmountsTeaching,
  "standard-form-intro": generateStandardFormIntroTeaching,
  "indices-laws-intro": generateIndicesLawsIntroTeaching,
  "two-step-equations": generateTwoStepEquationsTeaching,
  "straight-line-graphs-intro": generateStraightLineGraphsIntroTeaching,
  pythagoras: generatePythagorasTeaching,
  "compound-measures": generateCompoundMeasuresTeaching,
  "simultaneous-equations-intro": generateSimultaneousEquationsIntroTeaching,
  "percentage-change": generatePercentageChangeTeaching,
  "rearranging-formulae": generateRearrangingFormulaeTeaching,
  "algebraic-notation": generateAlgebraicNotationTeaching,
  perimeter: generatePerimeterTeaching,
  "angle-facts": generateAngleFactsTeaching,
  "add-subtract-fractions": generateAddSubtractFractionsTeaching,
  "ratio-notation": generateRatioNotationTeaching,
  "collecting-like-terms": generateCollectingLikeTermsTeaching,
  "coordinates-four-quadrants": generateCoordinatesFourQuadrantsTeaching,
  "place-value-decimals": generatePlaceValueDecimalsTeaching,
  "fdp-links": generateFdpLinksTeaching,
  "function-machines": generateFunctionMachinesTeaching,
  sequences: generateSequencesTeaching,
  "decimal-operations": generateDecimalOperationsTeaching,
  "properties-2d-shapes": generateProperties2DShapesTeaching,
  "equivalent-fractions": generateEquivalentFractionsTeaching,
  "order-of-operations": generateOrderOfOperationsTeaching,
  "one-step-equations": generateOneStepEquationsTeaching,
  "expanding-brackets": generateExpandingBracketsTeaching,
  "negative-numbers": generateNegativeNumbersTeaching,
  "substitution": generateSubstitutionTeaching
};

const form = document.getElementById("generator-form");
const yearFilterSelect = document.getElementById("year-filter");
const topicSelect = document.getElementById("topic");
const difficultySelect = document.getElementById("difficulty");
const variantSelect = document.getElementById("variant");
const bulkCountSelect = document.getElementById("bulk-count");
const generateButton = document.getElementById("generate-button");
const title = document.getElementById("results-title");
const principle = document.getElementById("topic-principle");
const teachingSequence = document.getElementById("teaching-sequence");
const questionList = document.getElementById("question-list");
const reasoningList = document.getElementById("reasoning-list");
const shuffleButton = document.getElementById("shuffle-button");
const printButton = document.getElementById("print-button");
const metaSubject = document.getElementById("meta-subject");
const metaYear = document.getElementById("meta-year");
const metaObjective = document.getElementById("meta-objective");
const metaDifficulty = document.getElementById("meta-difficulty");
const metaVariant = document.getElementById("meta-variant");
const worksheetTitle = document.getElementById("worksheet-title");
const worksheetMeta = document.getElementById("worksheet-meta");
const worksheetQuestions = document.getElementById("worksheet-questions");
const worksheetReasoningQuestions = document.getElementById("worksheet-reasoning-questions");
const answerKey = document.getElementById("answer-key");
const reasoningAnswerTitle = document.getElementById("reasoning-answer-title");
const reasoningAnswerKey = document.getElementById("reasoning-answer-key");
const answerToggle = document.getElementById("toggle-answers");
let generationCounter = 0;
const secondaryYearSequence = ["Year 7", "Year 8", "Year 9", "Year 10", "Year 11"];

function getTopicYearTags(topic) {
  if (!topic) {
    return [];
  }

  if (Array.isArray(topic.yearTags) && topic.yearTags.length) {
    return topic.yearTags;
  }

  const yearBand = String(topic.yearBand || "");
  const years = new Set();
  const rangeMatch = yearBand.match(/Year[s]?\s+(\d+)\s*-\s*(\d+)/i);

  if (rangeMatch) {
    const start = Number.parseInt(rangeMatch[1], 10);
    const end = Number.parseInt(rangeMatch[2], 10);
    for (let year = Math.min(start, end); year <= Math.max(start, end); year += 1) {
      if (year >= 7 && year <= 11) {
        years.add(`Year ${year}`);
      }
    }
  } else {
    const matches = yearBand.match(/\d+/g) || [];
    matches.forEach((value) => {
      const year = Number.parseInt(value, 10);
      if (year >= 7 && year <= 11) {
        years.add(`Year ${year}`);
      }
    });
  }

  topic.yearTags = secondaryYearSequence.filter((year) => years.has(year));
  return topic.yearTags;
}

function getAvailableYearOptions(topicEntries = Object.entries(topicCatalog)) {
  const available = new Set();
  topicEntries.forEach(([, topic]) => {
    getTopicYearTags(topic).forEach((year) => available.add(year));
  });
  return ["All years", ...secondaryYearSequence.filter((year) => available.has(year))];
}

function getFilteredTopicEntries(selectedYear = "All years") {
  return Object.entries(topicCatalog).filter(([, topic]) => {
    return selectedYear === "All years" || getTopicYearTags(topic).includes(selectedYear);
  });
}

function groupTopicEntriesBySubject(topicEntries) {
  return topicEntries.reduce((groups, [topicKey, topic]) => {
    if (!groups[topic.subject]) {
      groups[topic.subject] = [];
    }

    groups[topic.subject].push([topicKey, topic]);
    return groups;
  }, {});
}

function getSelectedYearFilterValue(select = yearFilterSelect) {
  return select?.value || "All years";
}

function populateYearFilterSelect(select = yearFilterSelect) {
  if (!select) {
    return;
  }

  const previousValue = select.value || "All years";
  const options = getAvailableYearOptions();
  select.innerHTML = "";

  options.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });

  select.value = options.includes(previousValue) ? previousValue : "All years";
}

function updateGeneratorAvailability() {
  const hasTopic = !!topicSelect?.value;
  if (topicSelect) {
    topicSelect.disabled = !hasTopic;
  }
  if (variantSelect) {
    variantSelect.disabled = !hasTopic;
  }
  if (generateButton) {
    generateButton.disabled = !hasTopic;
  }
}

function initializeWorksheetPage() {
  if (!form || !yearFilterSelect || !topicSelect || !difficultySelect || !variantSelect || !bulkCountSelect || !generateButton) {
    return;
  }

  populateYearFilterSelect();
  populateTopicSelect();
  populateVariantSelect();
  updateGenerateButtonLabel();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    generationCounter += 1;
    renderWorksheet({ forceFresh: true });
  });

  if (shuffleButton) {
    shuffleButton.addEventListener("click", () => {
      generationCounter += 1;
      renderWorksheet({ forceFresh: true });
    });
  }

  if (printButton) {
    printButton.addEventListener("click", () => {
      window.print();
    });
  }

  topicSelect.addEventListener("change", () => {
    populateVariantSelect();
    updateTopicDetails();
    generationCounter += 1;
    renderWorksheet({ forceFresh: true });
  });

  yearFilterSelect.addEventListener("change", () => {
    populateTopicSelect();
    populateVariantSelect();
    updateTopicDetails();
    generationCounter += 1;
    renderWorksheet({ forceFresh: true });
  });

  difficultySelect.addEventListener("change", () => {
    generationCounter += 1;
    renderWorksheet({ forceFresh: true });
  });

  variantSelect.addEventListener("change", () => {
    updateTopicDetails();
    generationCounter += 1;
    renderWorksheet({ forceFresh: true });
  });

  bulkCountSelect.addEventListener("change", () => {
    updateGenerateButtonLabel();
    generationCounter += 1;
    renderWorksheet({ forceFresh: true });
  });

  if (answerToggle) {
    answerToggle.addEventListener("change", () => {
      updateAnswerVisibility();
    });
  }

  updateTopicDetails();
  renderWorksheet();
}

function populateTopicSelect() {
  const selectedYear = getSelectedYearFilterValue();
  const previousValue = topicSelect.value;
  topicSelect.innerHTML = "";

  const filteredEntries = getFilteredTopicEntries(selectedYear);
  const groupedTopics = groupTopicEntriesBySubject(filteredEntries);

  if (!filteredEntries.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = `No topics available for ${selectedYear}`;
    topicSelect.appendChild(option);
    topicSelect.value = "";
    updateGeneratorAvailability();
    return;
  }

  Object.entries(groupedTopics).forEach(([subject, topics]) => {
    const group = document.createElement("optgroup");
    group.label = subject;

    topics.forEach(([topicKey, topic]) => {
      const option = document.createElement("option");
      option.value = topicKey;
      option.textContent = topic.label;
      group.appendChild(option);
    });

    topicSelect.appendChild(group);
  });

  const availableTopicKeys = filteredEntries.map(([topicKey]) => topicKey);
  topicSelect.value = availableTopicKeys.includes(previousValue)
    ? previousValue
    : (availableTopicKeys.includes(defaultTopic) ? defaultTopic : availableTopicKeys[0]);
  updateGeneratorAvailability();
}

function populateVariantSelect() {
  if (!topicSelect.value) {
    variantSelect.innerHTML = "";
    updateGeneratorAvailability();
    return;
  }

  const topic = topicCatalog[topicSelect.value];
  variantSelect.innerHTML = "";

  topic.variants.forEach((variant) => {
    const option = document.createElement("option");
    option.value = variant.id;
    option.textContent = variant.label;
    variantSelect.appendChild(option);
  });

  variantSelect.value = topic.variants[0].id;
}

function getSelectedVariant() {
  const topic = topicCatalog[topicSelect.value];
  return topic.variants.find((variant) => variant.id === variantSelect.value) || topic.variants[0];
}

function updateTopicDetails() {
  if (!topicSelect || !difficultySelect || !principle) {
    return;
  }
  if (!topicSelect.value || !topicCatalog[topicSelect.value]) {
    principle.textContent = "Choose a year and topic to see the lesson structure.";
    metaSubject.textContent = "—";
    metaYear.textContent = getSelectedYearFilterValue();
    metaObjective.textContent = "No topic selected.";
    metaDifficulty.textContent = "—";
    metaVariant.textContent = "—";
    return;
  }
  const topic = topicCatalog[topicSelect.value];
  const difficultyKey = difficultySelect.value;
  const variant = getSelectedVariant();

  principle.textContent = topic.principle;
  metaSubject.textContent = topic.subject;
  metaYear.textContent = topic.yearBand;
  metaObjective.textContent = topic.objective;
  metaDifficulty.textContent = topic.difficultyLabel[difficultyKey];
  metaVariant.textContent = variant.description;
}

function getBulkQuestionCount() {
  if (!bulkCountSelect) {
    return 10;
  }
  return Number.parseInt(bulkCountSelect.value, 10);
}

function updateGenerateButtonLabel() {
  if (!generateButton) {
    return;
  }
  const count = getBulkQuestionCount();
  generateButton.textContent = `Generate ${count} Questions`;
}

function renderWorksheet(options = {}) {
  if (!topicSelect || !difficultySelect || !variantSelect || !title || !questionList) {
    return;
  }
  if (!topicSelect.value || !topicCatalog[topicSelect.value]) {
    title.textContent = `No topics available for ${getSelectedYearFilterValue()}`;
    worksheetTitle.textContent = "Worksheet";
    worksheetMeta.textContent = "Select another topic to continue.";
    teachingSequence.innerHTML = "";
    questionList.innerHTML = "";
    reasoningList.innerHTML = "";
    worksheetQuestions.innerHTML = "";
    worksheetReasoningQuestions.innerHTML = "";
    answerKey.innerHTML = "";
    reasoningAnswerKey.innerHTML = "";
    updateAnswerVisibility();
    return;
  }
  const { forceFresh = false } = options;
  const topicKey = topicSelect.value;
  const difficultyKey = difficultySelect.value;
  const bulkQuestionCount = getBulkQuestionCount();
  const topic = topicCatalog[topicKey];
  const variant = getSelectedVariant();
  const settings = {
    ...difficultySettings[difficultyKey],
    generationCounter
  };
  const generator = generators[topic.generatorType];
  const mainWorksheet = generator(topic, variant, settings, difficultyKey);
  const initialBulkQuestions = buildBulkQuestionSet(topic, variant, settings, difficultyKey, generator, bulkQuestionCount, mainWorksheet.questions, forceFresh);
  const teachingSequenceItems = buildSeparateTeachingSequence(topic, variant, settings, difficultyKey, generator, mainWorksheet, initialBulkQuestions);
  const blockedTeachingPrompts = teachingSequenceItems.map((item) => item.prompt || item.question || "");
  const bulkQuestions = buildBulkQuestionSet(topic, variant, settings, difficultyKey, generator, bulkQuestionCount, mainWorksheet.questions, forceFresh, blockedTeachingPrompts);
  const worksheet = {
    ...mainWorksheet,
    questions: bulkQuestions,
    teaching: teachingSequenceItems
  };
  worksheet.reasoning = buildReasoningSet(topic, variant, settings, difficultyKey, worksheet);

  title.textContent = `${topic.label} - ${capitalize(difficultyKey)} - ${variant.label} - ${bulkQuestionCount} Questions`;
  updateTopicDetails();

  worksheetTitle.textContent = `${topic.label} Worksheet`;
  worksheetMeta.textContent = `${topic.subject} | ${topic.difficultyLabel[difficultyKey]} | ${variant.label} | ${bulkQuestionCount} questions`;

  teachingSequence.innerHTML = "";
  questionList.innerHTML = "";
  reasoningList.innerHTML = "";
  worksheetQuestions.innerHTML = "";
  worksheetReasoningQuestions.innerHTML = "";
  answerKey.innerHTML = "";
  reasoningAnswerKey.innerHTML = "";

  worksheet.teaching.forEach((item, index) => {
    teachingSequence.appendChild(buildTeachingCard(item, index));
  });

  worksheet.questions.forEach((item, index) => {
    questionList.appendChild(buildOutputCard(item, index));
    worksheetQuestions.appendChild(buildWorksheetQuestion(item, index));
    answerKey.appendChild(buildAnswerItem(item, index));
  });

  worksheet.reasoning.forEach((item, index) => {
    reasoningList.appendChild(buildReasoningCard(item, index));
    worksheetReasoningQuestions.appendChild(buildWorksheetQuestion(item, index, { workingLines: 5 }));
    reasoningAnswerKey.appendChild(buildAnswerItem(item, index, "R"));
  });

  updateAnswerVisibility();
}

function buildSeparateTeachingSequence(topic, variant, settings, difficultyKey, generator, worksheet, bulkQuestions = []) {
  const blockedKeys = new Set(bulkQuestions.map((item) => getQuestionKey(item)));
  const blockedPrompts = new Set(bulkQuestions.map((item) => getQuestionPromptText(item)));
  const teachingGenerator = teachingGenerators[topic.generatorType];

  function extractTeachingItems(candidateTeaching) {
    return (candidateTeaching || []).map((item) => ({
      question: item.prompt || item.question,
      answer: item.answer,
      change: item.focus || item.change,
      diagram: item.diagram || null
    }));
  }

  function getDistinctItems(items, existing = new Set()) {
    const distinct = [];
    items.forEach((item) => {
      const key = getQuestionKey(item);
      const promptText = getQuestionPromptText(item);
      if (!blockedKeys.has(key) && !blockedPrompts.has(promptText) && !existing.has(key) && !existing.has(promptText)) {
        existing.add(key);
        existing.add(promptText);
        distinct.push(item);
      }
    });
    return distinct;
  }

  if (worksheet.teaching && worksheet.teaching.length) {
    const filteredTeaching = getDistinctItems(extractTeachingItems(worksheet.teaching));
    if (filteredTeaching.length >= 3) {
      return createTeachingSequence(topic, variant, filteredTeaching.slice(0, 3));
    }
  }

  if (teachingGenerator) {
    const generatedTeaching = teachingGenerator(topic, variant, settings, difficultyKey);
    const filteredTeaching = getDistinctItems(extractTeachingItems(generatedTeaching));
    if (filteredTeaching.length >= 3) {
      return createTeachingSequence(topic, variant, filteredTeaching.slice(0, 3));
    }
  }

  const seenTeaching = new Set();
  const fallbackPool = [];

  for (let attempt = 0; attempt < 10 && fallbackPool.length < 3; attempt += 1) {
    const candidateWorksheet = generator(topic, variant, settings, difficultyKey);
    const distinctQuestions = getDistinctItems(candidateWorksheet.questions, seenTeaching);
    fallbackPool.push(...distinctQuestions);
  }

  if (fallbackPool.length >= 3) {
    return createTeachingSequence(topic, variant, fallbackPool.slice(0, 3));
  }

  const guaranteedDifferent = bulkQuestions.slice(0, 3).map((item, index) => ({
    ...item,
    question: item.question,
    change: item.change
  }));

  return createTeachingSequence(topic, variant, guaranteedDifferent);
}

function buildBulkQuestionSet(topic, variant, settings, difficultyKey, generator, count, seedQuestions, forceFresh = false, blockedPromptTexts = []) {
  const collected = [];
  const seenQuestions = new Set();
  const seenPrompts = new Set();
  const sequenceBatches = [];
  const seenBatchSignatures = new Set();
  const supplementalPool = [];
  const blockedPrompts = new Set(blockedPromptTexts.map((text) => (text || "").trim()).filter(Boolean));

  if (forceFresh && seedQuestions?.length) {
    seenBatchSignatures.add(getBatchSignature(seedQuestions));
  }

  function addToSupplementalPool(item) {
    if (!item) {
      return;
    }

    const key = getQuestionKey(item);
    const promptText = getQuestionPromptText(item);
    if (!supplementalPool.some((poolItem) => getQuestionKey(poolItem) === key || getQuestionPromptText(poolItem) === promptText)) {
      supplementalPool.push(item);
    }
  }

  function tryCollectQuestion(item) {
    if (!item || collected.length >= count) {
      return false;
    }

    const key = getQuestionKey(item);
    const promptText = getQuestionPromptText(item);

    if (blockedPrompts.has(promptText)) {
      return false;
    }

    if (seenQuestions.has(key) || seenPrompts.has(promptText)) {
      addToSupplementalPool(item);
      return false;
    }

    seenQuestions.add(key);
    seenPrompts.add(promptText);
    collected.push(item);
    return true;
  }

  function rememberBatch(items) {
    if (!Array.isArray(items) || !items.length) {
      return;
    }

    const batch = items.filter(Boolean);
    const signature = getBatchSignature(batch);
    if (seenBatchSignatures.has(signature)) {
      const diversifiedBatch = createRegeneratedBatch(batch, (settings?.generationCounter || 0) + sequenceBatches.length + 1, difficultyKey);
      const diversifiedSignature = getBatchSignature(diversifiedBatch);
      seenBatchSignatures.add(diversifiedSignature);
      sequenceBatches.push(diversifiedBatch);
      return;
    }

    seenBatchSignatures.add(signature);
    sequenceBatches.push(batch);
  }

  if (!forceFresh) {
    rememberBatch(seedQuestions);
    if (collected.length >= count) {
      return finalizeBulkSequence(collected.slice(0, count));
    }
    if (seedQuestions.length >= count) {
      return finalizeBulkSequence(seedQuestions.slice(0, count));
    }
  }

  for (let attempt = 0; attempt < 80 && collected.length < count; attempt += 1) {
    const nextWorksheet = generator(topic, variant, { ...settings, generationCounter: (settings.generationCounter || 0) + attempt + 1 }, difficultyKey);
    rememberBatch(nextWorksheet.questions);
  }

  if (!sequenceBatches.length && seedQuestions.length) {
    rememberBatch(seedQuestions);
  }

  if (sequenceBatches.length) {
    const maxBatchLength = Math.max(...sequenceBatches.map((batch) => batch.length));
    const primaryBatch = sequenceBatches[0] || [];
    const extraStages = Array.from({ length: maxBatchLength }, () => []);

    sequenceBatches.slice(1).forEach((batch) => {
      batch.forEach((item, stageIndex) => {
        if (item) {
          extraStages[stageIndex].push(item);
        }
      });
    });

    if (primaryBatch.length) {
      let remainingExtrasTarget = Math.max(count - Math.min(primaryBatch.length, count), 0);

      primaryBatch.forEach((item, stageIndex) => {
        if (collected.length >= count) {
          return;
        }

        tryCollectQuestion(item);

        const remainingStages = primaryBatch.length - stageIndex - 1;
        const extrasForStage = Math.min(
          extraStages[stageIndex].length,
          Math.ceil(remainingExtrasTarget / Math.max(remainingStages + 1, 1))
        );

        let inserted = 0;
        while (inserted < extrasForStage && collected.length < count && extraStages[stageIndex].length) {
          const candidate = extraStages[stageIndex].shift();
          if (tryCollectQuestion(candidate)) {
            inserted += 1;
            remainingExtrasTarget = Math.max(remainingExtrasTarget - 1, 0);
          }
        }
      });
    }

    for (let roundIndex = 0; collected.length < count; roundIndex += 1) {
      let addedInRound = false;

      for (let stageIndex = 0; stageIndex < extraStages.length && collected.length < count; stageIndex += 1) {
        const candidate = extraStages[stageIndex][roundIndex];
        if (candidate && tryCollectQuestion(candidate)) {
          addedInRound = true;
        }
      }

      if (!addedInRound) {
        break;
      }
    }
  }

  if (collected.length < count) {
    if (!supplementalPool.length) {
      sequenceBatches.flat().forEach((item) => addToSupplementalPool(item));
    }

    let fillerIndex = 0;

    while (collected.length < count && supplementalPool.length) {
      const baseItem = supplementalPool[fillerIndex % supplementalPool.length];
      const promptVariant = createPromptVariant(baseItem, fillerIndex);
      const promptText = getQuestionPromptText(promptVariant);
      if (!blockedPrompts.has(promptText) && !seenPrompts.has(promptText)) {
        seenQuestions.add(getQuestionKey(promptVariant));
        seenPrompts.add(promptText);
        collected.push(promptVariant);
      }
      fillerIndex += 1;
      if (fillerIndex > supplementalPool.length * 12) {
        break;
      }
    }
  }

  return finalizeBulkSequence(collected.slice(0, count));
}

function finalizeBulkSequence(items) {
  return items.map((item, index) => ({
    ...item,
    change: normalizeBulkChangeNote(item.change, index)
  }));
}

function getBatchSignature(items) {
  return items.map((item) => getQuestionKey(item)).join("||");
}

function createRegeneratedBatch(batch, variantSeed, difficultyKey) {
  const numericBatch = batch.map((item) => createNumericVariant(item, variantSeed, difficultyKey));
  const canUseNumericBatch = batch.every((item, index) => isValidNumericRegeneration(item, numericBatch[index], variantSeed, difficultyKey));

  if (canUseNumericBatch) {
    return numericBatch.map((item) => ({
      ...item,
      change: "Only the numbers change."
    }));
  }

  return batch.map((item) => createPromptVariant(item, variantSeed));
}

function normalizeBulkChangeNote(change, index) {
  if (change === "Reasoning") {
    return change;
  }

  if (index === 0) {
    return "Starting example.";
  }

  if (!change) {
    return "Only one feature changes from the previous question.";
  }

  if (change === "Only the wording changes; the maths stays the same.") {
    return change;
  }

  if (/^Starting example\.?$/i.test(change) || /^Model\b/i.test(change)) {
    return "Only one feature changes from the previous question.";
  }

  return change;
}

function createNumericVariant(item, variantIndex, difficultyKey) {
  const delta = getVariantDelta(variantIndex, difficultyKey);
  return {
    ...item,
    question: shiftNumbersInText(item.question, delta),
    answer: shiftNumbersInText(item.answer, delta),
    diagram: shiftDiagramNumbers(item.diagram, delta)
  };
}

function getVariantDelta(variantIndex, difficultyKey) {
  const deltaBank = difficultyKey === "easy" ? [1, 2] : difficultyKey === "hard" ? [2, 3, 4] : [1, 2, 3];
  return deltaBank[variantIndex % deltaBank.length];
}

function shiftNumbersInText(text, delta) {
  if (!text) return text;
  return String(text).replace(/-?\d+(\.\d+)?/g, (match) => {
    const value = Number(match);
    if (Number.isNaN(value)) return match;
    const shifted = value >= 0 ? value + delta : value - delta;
    return Number.isInteger(value) ? `${shifted}` : trimTrailingZero(shifted);
  });
}

function createRegeneratedVariant(item, variantIndex, difficultyKey) {
  const delta = getVariantDelta(variantIndex, difficultyKey);

  if (item?.diagram?.type === "coordinate-grid") {
    const points = item.diagram.points || [];
    const wouldOverflowGrid = points.some((point) => {
      const nextX = point.x + (point.x >= 0 ? delta : -delta);
      const nextY = point.y + (point.y >= 0 ? delta : -delta);
      return nextX < -6 || nextX > 6 || nextY < -6 || nextY > 6;
    });

    if (wouldOverflowGrid) {
      return createPromptVariant(item, variantIndex);
    }
  }

  const numericVariant = createNumericVariant(item, variantIndex, difficultyKey);
  const questionChanged = getQuestionPromptText(numericVariant) !== getQuestionPromptText(item);
  const answerChanged = String(numericVariant.answer || "") !== String(item.answer || "");
  const originalDiagram = JSON.stringify(item.diagram || null);
  const shiftedDiagram = JSON.stringify(numericVariant.diagram || null);
  const diagramChanged = originalDiagram !== shiftedDiagram;

  if ((questionChanged || answerChanged) && (!item.diagram || diagramChanged)) {
    return numericVariant;
  }

  return createPromptVariant(item, variantIndex);
}

function isValidNumericRegeneration(originalItem, numericVariant, variantIndex, difficultyKey) {
  if (!numericVariant) {
    return false;
  }

  if (originalItem?.diagram?.type === "coordinate-grid") {
    const delta = getVariantDelta(variantIndex, difficultyKey);
    const points = originalItem.diagram.points || [];
    const wouldOverflowGrid = points.some((point) => {
      const nextX = point.x + (point.x >= 0 ? delta : -delta);
      const nextY = point.y + (point.y >= 0 ? delta : -delta);
      return nextX < -6 || nextX > 6 || nextY < -6 || nextY > 6;
    });

    if (wouldOverflowGrid) {
      return false;
    }
  }

  const questionChanged = getQuestionPromptText(numericVariant) !== getQuestionPromptText(originalItem);
  const answerChanged = String(numericVariant.answer || "") !== String(originalItem.answer || "");
  const originalDiagram = JSON.stringify(originalItem.diagram || null);
  const shiftedDiagram = JSON.stringify(numericVariant.diagram || null);
  const diagramChanged = originalDiagram !== shiftedDiagram;

  return (questionChanged || answerChanged) && (!originalItem.diagram || diagramChanged);
}

function shiftDiagramNumbers(diagram, delta) {
  if (!diagram) return diagram;

  if (diagram.type === "rectangle") {
    return {
      ...diagram,
      topLabel: shiftNumbersInText(diagram.topLabel, delta),
      rightLabel: shiftNumbersInText(diagram.rightLabel, delta)
    };
  }

  if (diagram.type === "triangle" || diagram.type === "polygon") {
    return {
      ...diagram,
      labels: (diagram.labels || []).map((label) => shiftNumbersInText(label, delta))
    };
  }

  if (diagram.type === "pythagoras-triangle") {
    return {
      ...diagram,
      baseLabel: shiftNumbersInText(diagram.baseLabel, delta),
      heightLabel: shiftNumbersInText(diagram.heightLabel, delta),
      hypLabel: shiftNumbersInText(diagram.hypLabel, delta)
    };
  }

  if (diagram.type === "coordinate-grid") {
    return {
      ...diagram,
      points: (diagram.points || []).map((point) => ({
        ...point,
        x: clamp(point.x + (point.x >= 0 ? delta : -delta), -6, 6),
        y: clamp(point.y + (point.y >= 0 ? delta : -delta), -6, 6)
      }))
    };
  }

  if (diagram.type === "comparison") {
    return {
      ...diagram,
      left: shiftDiagramNumbers(diagram.left, delta),
      right: shiftDiagramNumbers(diagram.right, delta)
    };
  }

  if (diagram.type === "angle-line") {
    return {
      ...diagram,
      leftLabel: shiftNumbersInText(diagram.leftLabel, delta),
      rightLabel: shiftNumbersInText(diagram.rightLabel, delta)
    };
  }

  if (diagram.type === "angle-point") {
    return {
      ...diagram,
      labels: (diagram.labels || []).map((label) => shiftNumbersInText(label, delta))
    };
  }

  if (diagram.type === "angle-vertical") {
    return {
      ...diagram,
      topLabel: shiftNumbersInText(diagram.topLabel, delta),
      bottomLabel: shiftNumbersInText(diagram.bottomLabel, delta),
      rightLabel: shiftNumbersInText(diagram.rightLabel, delta),
      leftLabel: shiftNumbersInText(diagram.leftLabel, delta)
    };
  }

  if (diagram.type === "ratio-groups") {
    return {
      ...diagram,
      leftCount: diagram.leftCount + delta,
      rightCount: diagram.rightCount + delta
    };
  }

  if (diagram.type === "stem-leaf") {
    return {
      ...diagram,
      lines: (diagram.lines || []).map((line) => ({
        stem: line.stem,
        leaves: (line.leaves || []).map((leaf) => shiftLeafDigit(leaf, delta))
      }))
    };
  }

  if (diagram.type === "frequency-table" || diagram.type === "data-table" || diagram.type === "bar-chart") {
    return {
      ...diagram,
      rows: (diagram.rows || []).map((row) => ({
        ...row,
        value: row.value === "?" ? "?" : `${Number(row.value) + delta}`
      }))
    };
  }

  if (diagram.type === "compound-area") {
    return {
      ...diagram,
      parts: (diagram.parts || []).map((value) => value + delta)
    };
  }

  if (diagram.type === "tri-para-area") {
    return {
      ...diagram,
      baseLabel: shiftNumbersInText(diagram.baseLabel, delta),
      heightLabel: shiftNumbersInText(diagram.heightLabel, delta)
    };
  }

  if (diagram.type === "shape-set") {
    return diagram;
  }

  if (diagram.type === "reflection-demo") {
    return diagram;
  }

  if (diagram.type === "function-machine" || diagram.type === "probability-scale") {
    return diagram;
  }

  if (diagram.type === "fraction-strip" || diagram.type === "value-list") {
    return diagram;
  }

  return diagram;
}

function shiftLeafDigit(leaf, delta) {
  if (leaf === "?") return leaf;
  const value = Number(leaf);
  if (Number.isNaN(value)) return leaf;
  return `${clamp(value + delta, 0, 9)}`;
}

function createPromptVariant(item, variantIndex) {
  const wordingChangeNote = "Only the wording changes; the maths stays the same.";
  const prompt = getQuestionPromptText(item);
  const coordinateReadMatch = prompt.match(/^Read the coordinate of point (.+)\.$/);
  if (coordinateReadMatch) {
    const pointLabel = coordinateReadMatch[1];
    const variants = [
      `Read the coordinate of point ${pointLabel}.`,
      `State the coordinate of point ${pointLabel}.`,
      `What are the coordinates of point ${pointLabel}?`,
      `Identify the coordinate of point ${pointLabel}.`
    ];
    return {
      ...item,
      question: variants[variantIndex % variants.length],
      change: wordingChangeNote
    };
  }

  const coordinatePlotMatch = prompt.match(/^Plot the point (.+)\.$/);
  if (coordinatePlotMatch) {
    const pointLabel = coordinatePlotMatch[1];
    const variants = [
      `Plot the point ${pointLabel}.`,
      `Mark the point ${pointLabel} on the grid.`,
      `Show the point ${pointLabel} on the coordinate grid.`,
      `Place the point ${pointLabel} on the axes.`
    ];
    return {
      ...item,
      question: variants[variantIndex % variants.length],
      change: wordingChangeNote
    };
  }

  const lineRuleMatch = prompt.match(/^For (y = .+), what is y when x = (.+)\?$/);
  if (lineRuleMatch) {
    const rule = lineRuleMatch[1];
    const xValue = lineRuleMatch[2];
    const variants = [
      `For ${rule}, what is y when x = ${xValue}?`,
      `When x = ${xValue}, what is y on ${rule}?`,
      `Use ${rule} to find y when x = ${xValue}.`,
      `Substitute x = ${xValue} into ${rule}. What is y?`
    ];
    return {
      ...item,
      question: variants[variantIndex % variants.length],
      change: wordingChangeNote
    };
  }

  const tableMatch = prompt.match(/^Use the table to find the missing frequency for (.+)\.$/);
  if (tableMatch) {
    const target = tableMatch[1];
    const variants = [
      `Find the missing frequency for ${target} from the table.`,
      `What is the missing frequency for ${target}?`,
      `Complete the table by finding the frequency for ${target}.`,
      `Use the table to work out the frequency for ${target}.`,
      `Find the value missing from the ${target} row.`,
      `What number should go in the ${target} row?`
    ];
    return {
      ...item,
      question: variants[variantIndex % variants.length],
      change: wordingChangeNote
    };
  }

  const ratioMatch = prompt.match(/^Write the ratio of (.+) to (.+) shown\.$/);
  if (ratioMatch) {
    const left = ratioMatch[1];
    const right = ratioMatch[2];
    const variants = [
      `Write the ratio of ${left} to ${right} shown.`,
      `What is the ratio of ${left} to ${right}?`,
      `Use the picture to write the ratio of ${left} to ${right}.`,
      `Write ${left}:${right} using the items shown.`,
      `Find the ratio of ${left} to ${right} from the diagram.`,
      `Complete the ratio for ${left} to ${right}.`
    ];
    return {
      ...item,
      question: variants[variantIndex % variants.length],
      change: wordingChangeNote
    };
  }

  const fractionCompareMatch = prompt.match(/^Which is (greater|smaller): (.+) or (.+)\?$/);
  if (fractionCompareMatch) {
    const direction = fractionCompareMatch[1];
    const left = fractionCompareMatch[2];
    const right = fractionCompareMatch[3];
    const variants = [
      `Which is ${direction}: ${left} or ${right}?`,
      `Decide which is ${direction}: ${left} or ${right}.`,
      `Choose the ${direction} value: ${left} or ${right}.`,
      `Which one is ${direction}, ${left} or ${right}?`
    ];
    return {
      ...item,
      question: variants[variantIndex % variants.length],
      change: wordingChangeNote
    };
  }

  const genericVariants = buildGenericPromptVariants(prompt);
  return {
    ...item,
    question: genericVariants[variantIndex % genericVariants.length],
    change: wordingChangeNote
  };
}

function buildGenericPromptVariants(prompt) {
  const cleaned = (prompt || "").trim();
  const withoutQuestion = cleaned.replace(/\?$/, "");
  const withoutPeriod = cleaned.replace(/\.$/, "");

  if (/^How many /i.test(cleaned)) {
    const rest = cleaned.replace(/^How many /i, "");
    return [
      cleaned,
      `Find how many ${withoutQuestion.replace(/^How many /i, "")}?`,
      `Work out how many ${withoutQuestion.replace(/^How many /i, "")}?`,
      `Calculate how many ${withoutQuestion.replace(/^How many /i, "")}?`
    ];
  }

  if (/^What is /i.test(cleaned)) {
    const rest = cleaned.replace(/^What is /i, "");
    return [
      cleaned,
      `Find ${withoutQuestion.replace(/^What is /i, "")}?`,
      `Work out ${withoutQuestion.replace(/^What is /i, "")}?`,
      `Calculate ${withoutQuestion.replace(/^What is /i, "")}?`
    ];
  }

  if (/^Which /i.test(cleaned)) {
    const rest = cleaned.replace(/^Which /i, "");
    return [
      cleaned,
      `Decide which ${withoutQuestion.replace(/^Which /i, "")}?`,
      `Choose which ${withoutQuestion.replace(/^Which /i, "")}?`,
      `Identify which ${withoutQuestion.replace(/^Which /i, "")}?`
    ];
  }

  if (/^True or false:/i.test(cleaned)) {
    const rest = cleaned.replace(/^True or false:\s*/i, "");
    return [
      cleaned,
      `Decide whether this is true or false: ${rest}`,
      `Is this true or false: ${rest}`,
      `State whether this is true or false: ${rest}`
    ];
  }

  if (/^Complete:/i.test(cleaned)) {
    const rest = cleaned.replace(/^Complete:\s*/i, "");
    return [
      cleaned,
      `Fill in the missing value: ${rest}`,
      `Complete the missing part: ${rest}`,
      `Work out the missing value: ${rest}`
    ];
  }

  if (/^Simplify /i.test(cleaned)) {
    return [
      cleaned,
      cleaned.replace(/^Simplify /i, "Write in simplest form: "),
      cleaned.replace(/^Simplify /i, "Give the simplified form of "),
      cleaned.replace(/^Simplify /i, "Reduce ")
    ];
  }

  if (/^Write /i.test(cleaned)) {
    return [
      cleaned,
      cleaned.replace(/^Write /i, "Give "),
      cleaned.replace(/^Write /i, "State "),
      cleaned.replace(/^Write /i, "Record ")
    ];
  }

  return [
    cleaned,
    withoutPeriod.endsWith("?") ? withoutPeriod : `${withoutPeriod}?`,
    `Work out: ${withoutPeriod}`,
    `Find: ${withoutPeriod}`
  ];
}

function createTeachingSequence(topic, variant, questions) {
  const teachingFrames = [
    {
      label: "My Turn",
      instruction: "Model the method aloud and name what stays the same."
    },
    {
      label: "Our Turn",
      instruction: "Complete together and ask what changed from the previous example."
    },
    {
      label: "Your Turn",
      instruction: "Pupils try independently before you reveal the answer."
    }
  ];

  return teachingFrames.map((frame, index) => {
    const source = questions[index] || questions[questions.length - 1];

    return {
      label: frame.label,
      instruction: frame.instruction,
      focus: source.change || `Keep the ${topic.label.toLowerCase()} structure steady and vary one feature.`,
      prompt: source.question,
      answer: source.answer,
      variantLabel: variant.label,
      diagram: source.diagram || null
    };
  });
}

function generateEquivalentFractionsTeaching(topic, variant, settings, difficultyKey) {
  const base = getEquivalentFractionBase(settings, difficultyKey);
  let sequence;

  if (variant.id === "build-a-family") {
    sequence = [
      {
        question: `Start with ${base.n}/${base.d}. Multiply both parts by ${base.factors[0]}.`,
        answer: `${base.n * base.factors[0]}/${base.d * base.factors[0]}`,
        change: "Model building one equivalent fraction from a starting fraction."
      },
      {
        question: `Keep ${base.n}/${base.d}. Now write two equivalent fractions using factors ${base.factors[0]} and ${base.factors[1]}.`,
        answer: `${base.n * base.factors[0]}/${base.d * base.factors[0]} and ${base.n * base.factors[1]}/${base.d * base.factors[1]}`,
        change: "Only the number of family members changes."
      },
      {
        question: `Use ${base.n + 1}/${base.d + 1}. Write one equivalent fraction using factor ${base.factors[1]}.`,
        answer: `${(base.n + 1) * base.factors[1]}/${(base.d + 1) * base.factors[1]}`,
        change: "Only the starting fraction changes for independent practice."
      }
    ];
  } else if (variant.id === "compare-and-complete") {
    sequence = [
      {
        question: `Are these equivalent? ${base.n}/${base.d} and ${base.n * base.factors[0]}/${base.d * base.factors[0]}`,
        answer: "Yes",
        change: "Model checking that both parts were scaled equally."
      },
      {
        question: `Complete: ${base.n}/${base.d} = ${base.n * base.factors[1]}/?`,
        answer: `${base.d * base.factors[1]}`,
        change: "Only the task changes from checking to completing."
      },
      {
        question: `True or false: ${base.n + 1}/${base.d + 1} = ${(base.n + 1) * base.factors[1]}/${(base.d + 1) * base.factors[1]}`,
        answer: "True",
        change: "Only the base fraction changes."
      }
    ];
  } else if (variant.id === "error-spotting") {
    sequence = [
      {
        question: `A pupil writes ${base.n}/${base.d} = ${base.n + 1}/${base.d + 1}. Is the method correct?`,
        answer: "No",
        change: "Model spotting that adding to both parts does not preserve equivalence."
      },
      {
        question: `Fix the statement: ${base.n}/${base.d} = ${base.n + 1}/${base.d + 1}.`,
        answer: `${base.n}/${base.d} = ${base.n * 2}/${base.d * 2}`,
        change: "Only the task changes from spotting to correcting."
      },
      {
        question: `Is this correct? ${base.n + 1}/${base.d + 1} = ${(base.n + 1) * 2}/${(base.d + 1) * 2}`,
        answer: "Yes",
        change: "Only the method becomes valid."
      }
    ];
  } else {
    sequence = [
      buildEquivalentFractionQuestion({ n: base.n, d: base.d, f: base.factors[0], missing: "numerator", mode: "direct", change: "Model finding the missing numerator." }),
      buildEquivalentFractionQuestion({ n: base.n, d: base.d, f: base.factors[0], missing: "denominator", mode: "direct", change: "Only the missing part moves." }),
      buildEquivalentFractionQuestion({ n: base.n + 1, d: base.d + 1, f: base.factors[1], missing: "factor", mode: "factor", change: "Only the unknown changes to the scale factor." })
    ];
  }

  return createTeachingSequence(topic, variant, sequence);
}

function generateOrderOfOperationsTeaching(topic, variant, settings, difficultyKey) {
  const base = getOrderBase(settings, difficultyKey);
  let sequence;

  if (variant.id === "which-result") {
    sequence = [
      {
        question: `Which expression gives ${evaluateExpression(`${base.a} + ${base.b} * 2`)}? A) ${formatMath(`${base.a} + ${base.b} * 2`)} B) ${formatMath(`(${base.a} + ${base.b}) * 2`)}`,
        answer: "A",
        change: "Model reading the structure before calculating."
      },
      {
        question: `Which expression gives ${evaluateExpression(`(${base.a} + ${base.b}) * 2`)}? A) ${formatMath(`${base.a} + ${base.b} * 2`)} B) ${formatMath(`(${base.a} + ${base.b}) * 2`)}`,
        answer: "B",
        change: "Only the brackets change the correct option."
      },
      {
        question: `Which expression gives ${evaluateExpression(`${base.a} + ${base.b} * 3`)}? A) ${formatMath(`${base.a} + ${base.b} * 3`)} B) ${formatMath(`(${base.a} + ${base.b}) * 3`)}`,
        answer: "A",
        change: "Only the multiplier changes."
      }
    ];
  } else if (variant.id === "insert-brackets") {
    sequence = [
      {
        question: `Insert brackets into ${formatMath(`${base.a} + ${base.b} * 2`)} to make ${formatMath(`(${base.a} + ${base.b}) * 2`)}.`,
        answer: formatMath(`(${base.a} + ${base.b}) * 2`),
        change: "Model how brackets change what happens first."
      },
      {
        question: `Insert brackets into ${formatMath(`${base.a} - ${base.b} * ${base.c}`)} to make ${formatMath(`(${base.a} - ${base.b}) * ${base.c}`)}.`,
        answer: formatMath(`(${base.a} - ${base.b}) * ${base.c}`),
        change: "Only the first sign changes."
      },
      {
        question: `Insert brackets into ${formatMath(`${base.a} * ${base.b} + ${base.c}`)} to make ${formatMath(`${base.a} * (${base.b} + ${base.c})`)}.`,
        answer: formatMath(`${base.a} * (${base.b} + ${base.c})`),
        change: "Only the bracket placement changes around the addition."
      }
    ];
  } else if (variant.id === "error-spotting") {
    sequence = [
      {
        question: `A pupil evaluates ${formatMath(`${base.a} + ${base.b} * 2`)} as ${(base.a + base.b) * 2}. Is that correct?`,
        answer: "No",
        change: "Model spotting multiplication being done too late."
      },
      {
        question: `Correct the result of ${formatMath(`${base.a} + ${base.b} * 2`)}.`,
        answer: `${evaluateExpression(`${base.a} + ${base.b} * 2`)}`,
        change: "Only the task changes from spotting to correcting."
      },
      {
        question: `True or false: if there are no brackets, multiplication and division are done before addition and subtraction.`,
        answer: "True",
        change: "Only the prompt changes to the general rule."
      }
    ];
  } else {
    sequence = [
      { question: `Evaluate: ${formatMath(`${base.a} + ${base.b} * 2`)}`, answer: evaluateExpression(`${base.a} + ${base.b} * 2`), change: "Model multiplication before addition." },
      { question: `Evaluate: ${formatMath(`${base.a} + ${base.b} * 3`)}`, answer: evaluateExpression(`${base.a} + ${base.b} * 3`), change: "Only the multiplier changes." },
      { question: `Evaluate: ${formatMath(`(${base.a} + ${base.b}) * 3`)}`, answer: evaluateExpression(`(${base.a} + ${base.b}) * 3`), change: "Only brackets change the order." }
    ];
  }

  return createTeachingSequence(topic, variant, sequence);
}

function generateOneStepEquationsTeaching(topic, variant, settings, difficultyKey) {
  const base = getOneStepBase(settings, difficultyKey);
  const solution = base.multAnswer;
  let sequence;

  if (variant.id === "which-equation") {
    sequence = [
      {
        question: `Which equation has solution x = ${solution}? A) x + ${base.addConst} = ${solution + base.addConst} B) x + ${base.addConst} = ${solution + base.addConst + 1}`,
        answer: "A",
        change: "Model substituting the proposed solution to check."
      },
      {
        question: `Which equation has solution x = ${solution}? A) ${base.multCoeff}x = ${base.multCoeff * solution} B) ${base.multCoeff}x = ${base.multCoeff * solution + 1}`,
        answer: "A",
        change: "Only the form changes to multiplication."
      },
      {
        question: `Which equation has solution x = ${base.divAnswer * base.divisor}? A) x / ${base.divisor} = ${base.divAnswer} B) x / ${base.divisor} = ${base.divAnswer + 1}`,
        answer: "A",
        change: "Only the form changes to division."
      }
    ];
  } else if (variant.id === "write-the-equation") {
    sequence = [
      {
        question: `Write an equation with solution x = ${solution}: x + ${base.addConst} = ?`,
        answer: `x + ${base.addConst} = ${solution + base.addConst}`,
        change: "Model building an equation from a given solution."
      },
      {
        question: `Write an equation with solution x = ${solution}: ${base.multCoeff}x = ?`,
        answer: `${base.multCoeff}x = ${base.multCoeff * solution}`,
        change: "Only the form changes to multiplication."
      },
      {
        question: `Write an equation with solution x = ${base.divAnswer * base.divisor}: x / ${base.divisor} = ?`,
        answer: `x / ${base.divisor} = ${base.divAnswer}`,
        change: "Only the form changes to division."
      }
    ];
  } else if (variant.id === "error-spotting") {
    sequence = [
      {
        question: `A pupil solves x + ${base.addConst} = ${base.target} by doing ${base.target} + ${base.addConst}. Is the method correct?`,
        answer: "No",
        change: "Model spotting the wrong inverse operation."
      },
      {
        question: `Correct the mistake in x + ${base.addConst} = ${base.target}. What is x?`,
        answer: `x = ${base.target - base.addConst}`,
        change: "Only the task changes from spotting to correcting."
      },
      {
        question: `Which statement is correct? A) To undo ${base.multCoeff}x, divide by ${base.multCoeff}. B) To undo ${base.multCoeff}x, multiply by ${base.multCoeff}.`,
        answer: "A",
        change: "Only the focus shifts to the general method."
      }
    ];
  } else {
    sequence = [
      { question: `Solve: x + ${base.addConst} = ${base.target}`, answer: `x = ${base.target - base.addConst}`, change: "Model subtracting the constant." },
      { question: `Solve: x - ${base.addConst} = ${base.target}`, answer: `x = ${base.target + base.addConst}`, change: "Only the operation changes." },
      { question: `Solve: ${base.multCoeff}x = ${base.multCoeff * base.multAnswer}`, answer: `x = ${base.multAnswer}`, change: "Only the form changes to multiplication." }
    ];
  }

  return createTeachingSequence(topic, variant, sequence);
}

function generateExpandingBracketsTeaching(topic, variant, settings, difficultyKey) {
  const easy = difficultyKey === "easy";
  const hard = difficultyKey === "hard";
  const outside = easy ? randomInt(2, 4) : hard ? randomInt(4, Math.max(6, settings.coeffRange[1])) : randomInt(settings.coeffRange[0], settings.coeffRange[1]);
  const inner = easy ? randomInt(1, 3) : hard ? randomInt(2, Math.max(4, settings.range[0])) : randomInt(1, settings.range[0]);
  const variableCoeff = easy ? 2 : hard ? 4 : 3;
  let sequence;

  if (variant.id === "match-the-expansion") {
    const expressions = [
      `${outside}(x + ${inner})`,
      `${outside + 1}(x + ${inner})`,
      `${outside + 1}(${variableCoeff}x - ${inner})`
    ];

    sequence = expressions.map((expr, index) => ({
      question: `Match this bracket form to its expansion: ${formatMath(expr)}`,
      answer: expandBracketExpression(expr),
      change: index === 0 ? "Model multiplying each term inside the bracket." : index === 1 ? "Only the outside multiplier changes." : "Only the x-coefficient changes with subtraction."
    }));
  } else {
    const expressions = [
      `${outside}(x + ${inner})`,
      `${outside + 1}(x + ${inner})`,
      `${outside + 1}(${variableCoeff}x - ${inner})`
    ];

    sequence = expressions.map((expr, index) => ({
      question: `Expand: ${formatMath(expr)}`,
      answer: expandBracketExpression(expr),
      change: index === 0 ? "Model distributing to both terms." : index === 1 ? "Only the outside multiplier changes." : "Only the x-coefficient changes with subtraction."
    }));
  }

  return createTeachingSequence(topic, variant, sequence);
}

function generateNegativeNumbersTeaching(topic, variant, settings) {
  const first = negativeNonZero(settings.negativeRange);
  const second = negativeNonZero(settings.negativeRange);
  const factor = randomInt(2, Math.max(4, settings.coeffRange[1]));
  let sequence;

  if (variant.id === "compare-sign-effects") {
    sequence = [
      { question: `Which is greater: ${first} + 4 or ${first} + 5?`, answer: `${first} + 5`, change: "Model comparing two close sums." },
      { question: `Which is greater: ${first} + 5 or ${first} - 5?`, answer: `${first} + 5`, change: "Only the operation changes." },
      { question: `Which is greater: ${first} * ${factor} or ${first} * -${factor}?`, answer: `${first} * -${factor}`, change: "Only the second factor changes sign." }
    ];
  } else {
    sequence = [
      { question: `Calculate: ${formatMath(`${first} + 4`)}`, answer: evaluateExpression(`${first} + 4`), change: "Model adding to a negative number." },
      { question: `Calculate: ${formatMath(`${first} - 4`)}`, answer: evaluateExpression(`${first} - 4`), change: "Only the operation changes." },
      { question: `Calculate: ${formatMath(`${first} - (${second})`)}`, answer: evaluateExpression(`${first} - (${second})`), change: "Only the second number becomes negative." }
    ];
  }

  return createTeachingSequence(topic, variant, sequence);
}

function generateSubstitutionTeaching(topic, variant, settings, difficultyKey) {
  const easy = difficultyKey === "easy";
  const hard = difficultyKey === "hard";
  const x = easy ? randomInt(2, 8) : hard ? randomInt(6, settings.range[1]) : randomInt(settings.range[0], settings.range[1]);
  const y = easy ? randomInt(2, 8) : hard ? randomInt(6, settings.range[1]) : randomInt(settings.range[0], settings.range[1]);
  const coeff = easy ? 2 : hard ? 4 : randomInt(2, settings.coeffRange[1]);
  let sequence;

  if (variant.id === "missing-value-reasoning") {
    sequence = [
      { question: `If x = ${x}, complete: ${coeff}x + 4 = ?`, answer: `${coeff * x + 4}`, change: "Model substituting before calculating." },
      { question: `If x = ?, then ${coeff}x + 4 = ${coeff * (x + 1) + 4}. Find x.`, answer: `${x + 1}`, change: "Only the missing value moves from output to input." },
      { question: `If x = ${x + 1} and y = ?, and ${coeff}x + y = ${coeff * (x + 1) + y + 2}, find y.`, answer: `${y + 2}`, change: "Only y becomes the missing value." }
    ];
  } else {
    sequence = [
      { question: `If x = ${x}, find x + 3`, answer: `${x + 3}`, change: "Model a direct substitution." },
      { question: `If x = ${x}, find ${coeff}x + 3`, answer: `${coeff * x + 3}`, change: "Only the coefficient changes." },
      { question: `If x = ${x} and y = ${y}, find ${coeff}x + y`, answer: `${coeff * x + y}`, change: "Only a second variable is introduced." }
    ];
  }

  return createTeachingSequence(topic, variant, sequence);
}

function updateAnswerVisibility() {
  const showAnswers = answerToggle.checked;

  answerKey.hidden = !showAnswers;
  reasoningAnswerTitle.hidden = !showAnswers;
  reasoningAnswerKey.hidden = !showAnswers;
  document.body.classList.toggle("showing-answers", showAnswers);
}

function buildTeachingCard(item) {
  const entry = document.createElement("article");
  entry.className = "teaching-card";

  const step = document.createElement("span");
  step.className = "teaching-step";
  step.textContent = item.label;

  const prompt = document.createElement("div");
  prompt.className = "teaching-prompt";
  prompt.innerHTML = renderMathMarkup(item.prompt);

  const workspace = document.createElement("div");
  workspace.className = "teaching-workspace";

  entry.append(step);
  entry.append(prompt);
  if (item.diagram) {
    entry.appendChild(buildDiagramBlock(item.diagram, "teaching-diagram"));
  }
  entry.append(workspace);
  return entry;
}

function buildOutputCard(item, index) {
  const entry = document.createElement("li");
  const number = document.createElement("strong");
  number.textContent = `Question ${index + 1}`;

  const text = document.createElement("span");
  text.className = "question-text";
  text.innerHTML = renderMathMarkup(item.question);

  entry.append(number, text);
  if (item.diagram) {
    entry.appendChild(buildDiagramBlock(item.diagram, "question-diagram"));
  }
  return entry;
}

function buildReasoningCard(item, index) {
  const entry = document.createElement("li");
  const number = document.createElement("strong");
  number.textContent = `Reasoning ${index + 1}`;

  const text = document.createElement("span");
  text.className = "reasoning-text";
  text.innerHTML = renderMathMarkup(item.question);

  entry.append(number, text);
  if (item.diagram) {
    entry.appendChild(buildDiagramBlock(item.diagram, "question-diagram"));
  }
  return entry;
}

function buildWorksheetQuestion(item, index, options = {}) {
  const { workingLines = 4 } = options;
  const entry = document.createElement("li");
  entry.className = "worksheet-question-item";
  if (item.diagram) {
    entry.classList.add("worksheet-question-item-diagram");
  } else {
    entry.classList.add("worksheet-question-item-plain");
  }

  const prompt = document.createElement("span");
  prompt.className = "worksheet-question-text";
  prompt.innerHTML = renderMathMarkup(item.question);
  entry.appendChild(prompt);

  if (item.diagram) {
    entry.appendChild(buildDiagramBlock(item.diagram, "worksheet-diagram"));
  }

  const working = document.createElement("div");
  working.className = "worksheet-working";
  working.style.minHeight = `${workingLines * 1.15}rem`;
  working.setAttribute("aria-hidden", "true");
  entry.appendChild(working);

  return entry;
}

function buildDiagramBlock(diagram, className) {
  const wrapper = document.createElement("div");
  wrapper.className = className;
  if (diagram.type === "ratio-groups") {
    wrapper.classList.add("diagram-ratio-groups");
  }
  wrapper.innerHTML = renderDiagramMarkup(diagram);
  return wrapper;
}

function buildAnswerItem(item, index, prefix = "") {
  const entry = document.createElement("li");
  entry.innerHTML = `<span class="answer-text">${renderMathMarkup(item.answer)}</span>`;
  return entry;
}

function generatePercentagesOfAmountsTeaching(topic, variant, settings, difficultyKey) {
  const base = getPercentageAmountBase(settings, difficultyKey);
  let sequence;

  if (variant.id === "compare-methods") {
    sequence = [
      { question: `To find 25% of ${base.amounts[0]}, is it more efficient to divide by 4 or find 10% first?`, answer: "Divide by 4.", change: "Model choosing an efficient benchmark method." },
      { question: `To find 15% of ${base.amounts[1]}, is it useful to combine 10% and 5%?`, answer: "Yes.", change: "Only the percentage changes." },
      { question: `To find 40% of ${base.amounts[2]}, would 4 x 10% be a sensible route?`, answer: "Yes.", change: "Only the method emphasis changes." }
    ];
  } else if (variant.id === "missing-value") {
    sequence = [
      { question: `10% of a number is ${base.amounts[0] / 10}. What is the whole number?`, answer: `${base.amounts[0]}`, change: "Model rebuilding the whole from a benchmark percentage." },
      { question: `25% of a number is ${base.amounts[1] / 4}. What is the whole number?`, answer: `${base.amounts[1]}`, change: "Only the percentage changes." },
      { question: `${base.percents[2]}% of a number is ${trimTrailingZero(base.amounts[2] * base.percents[2] / 100)}. What is the number?`, answer: `${base.amounts[2]}`, change: "Only the benchmark becomes less direct." }
    ];
  } else if (variant.id === "error-spotting") {
    sequence = [
      { question: `A pupil says 10% of ${base.amounts[0]} is ${base.amounts[0]}. Is that correct?`, answer: "No.", change: "Model checking what 10% means." },
      { question: `Correct 25% of ${base.amounts[1]} = ${base.amounts[1] / 2}.`, answer: `${base.amounts[1] / 4}`, change: "Only the percentage changes." },
      { question: `True or false: 50% of an amount is the same as halving it.`, answer: "True.", change: "Only the task changes to the general rule." }
    ];
  } else {
    sequence = [
      { question: `Find 10% of ${base.amounts[0]}.`, answer: `${base.amounts[0] / 10}`, change: "Model finding 10% first." },
      { question: `Find 25% of ${base.amounts[1]}.`, answer: `${base.amounts[1] / 4}`, change: "Only the benchmark percentage changes." },
      { question: `Find ${base.percents[2]}% of ${base.amounts[2]}.`, answer: `${trimTrailingZero(base.amounts[2] * base.percents[2] / 100)}`, change: "Only the percentage becomes less direct." }
    ];
  }

  return createTeachingSequence(topic, variant, sequence);
}

function generatePercentagesOfAmounts(_topic, variant, settings, difficultyKey) {
  const base = getPercentageAmountBase(settings, difficultyKey);

  if (variant.id === "compare-methods") {
    return { questions: base.compareMethods.map((item, index) => ({ question: item.question, answer: item.answer, change: item.change || percentageAmountChange(index) })) };
  }
  if (variant.id === "missing-value") {
    return { questions: base.missingValues.map((item, index) => ({ question: item.question, answer: item.answer, change: item.change || percentageAmountChange(index) })) };
  }
  if (variant.id === "error-spotting") {
    return { questions: base.errors.map((item, index) => ({ question: item.question, answer: item.answer, change: item.change || percentageAmountChange(index) })) };
  }
  return { questions: base.directs.map((item, index) => ({ question: item.question, answer: item.answer, change: item.change || percentageAmountChange(index) })) };
}

function getPercentageAmountBase(_settings, difficultyKey) {
  const amountBank = difficultyKey === "easy"
    ? [40, 60, 80, 90, 120, 140, 160, 180, 200, 240]
    : difficultyKey === "hard"
      ? [75, 120, 180, 240, 320, 360, 420, 480, 540, 600]
      : [50, 80, 100, 120, 150, 180, 200, 240, 300, 360];
  const percentBank = difficultyKey === "easy"
    ? [10, 25, 50, 20, 5, 75, 40, 60, 30, 15]
    : difficultyKey === "hard"
      ? [15, 35, 45, 12, 18, 22, 65, 75, 30, 40]
      : [10, 20, 25, 15, 30, 40, 50, 60, 5, 75];

  const directs = amountBank.map((amount, index) => {
    const percent = percentBank[index];
    return {
      question: `Find ${percent}% of ${amount}.`,
      answer: `${trimTrailingZero(amount * percent / 100)}`,
      change: index === 0 ? "Starting example." : index % 2 === 1 ? "Only the percentage changes." : "Only the amount changes."
    };
  });

  const compareMethods = amountBank.map((amount, index) => {
    const percent = percentBank[index];
    const method = percent === 25 ? "divide by 4"
      : percent === 50 ? "halve it"
      : percent === 10 ? "divide by 10"
      : percent === 5 ? "find 10% then halve it"
      : percent % 10 === 0 ? `find 10% then multiply by ${percent / 10}`
      : "split it into easier benchmark percentages";
    return {
      question: `What is the most efficient method to find ${percent}% of ${amount}?`,
      answer: method,
      change: index === 0 ? "Starting example." : index % 2 === 1 ? "Only the percentage changes." : "Only the amount changes."
    };
  });

  const missingValues = amountBank.map((amount, index) => {
    const percent = percentBank[index];
    const part = trimTrailingZero(amount * percent / 100);
    return {
      question: `${percent}% of a number is ${part}. What is the whole number?`,
      answer: `${amount}`,
      change: index === 0 ? "Starting example." : index % 2 === 1 ? "Only the percentage changes." : "Only the part changes."
    };
  });

  const errors = amountBank.map((amount, index) => {
    const percent = percentBank[index];
    const wrong = trimTrailingZero(percent === 25 ? amount / 2 : amount * (percent / 10));
    const correct = trimTrailingZero(amount * percent / 100);
    return {
      question: `A pupil says ${percent}% of ${amount} is ${wrong}. Correct the answer.`,
      answer: `${correct}`,
      change: index === 0 ? "Starting example." : index % 2 === 1 ? "Only the percentage changes." : "Only the amount changes."
    };
  });

  return { amounts: amountBank, percents: percentBank, directs, compareMethods, missingValues, errors };
}

function generateStandardFormIntroTeaching(topic, variant, settings, difficultyKey) {
  const base = getStandardFormBase(settings, difficultyKey);
  let sequence;

  if (variant.id === "write-ordinary-number") {
    sequence = [
      { question: `Write ${base.standardPairs[0].standard} as an ordinary number.`, answer: base.standardPairs[0].ordinary, change: "Model moving the digits using the power of ten." },
      { question: `Write ${base.standardPairs[1].standard} as an ordinary number.`, answer: base.standardPairs[1].ordinary, change: "Only the exponent changes." },
      { question: `Write ${base.standardPairs[2].standard} as an ordinary number.`, answer: base.standardPairs[2].ordinary, change: "Only the coefficient changes." }
    ];
  } else if (variant.id === "compare-values") {
    sequence = [
      { question: `Which is greater: ${base.comparePairs[0].left} or ${base.comparePairs[0].right}?`, answer: base.comparePairs[0].answer, change: "Model comparing exponents first." },
      { question: `Which is greater: ${base.comparePairs[1].left} or ${base.comparePairs[1].right}?`, answer: base.comparePairs[1].answer, change: "Only one exponent changes." },
      { question: `Which is greater: ${base.comparePairs[2].left} or ${base.comparePairs[2].right}?`, answer: base.comparePairs[2].answer, change: "Only the coefficient changes." }
    ];
  } else if (variant.id === "error-spotting") {
    sequence = [
      { question: `A pupil writes 430000 as 43 x 10^4. Is that standard form?`, answer: "No.", change: "Model checking the coefficient is between 1 and 10." },
      { question: `Correct 430000 into standard form.`, answer: `4.3 x 10^5`, change: "Only the task changes from spotting to correcting." },
      { question: `True or false: in standard form, the coefficient must be at least 1 but less than 10.`, answer: "True.", change: "Only the focus shifts to the rule." }
    ];
  } else {
    sequence = [
      { question: `Write ${base.standardPairs[0].ordinary} in standard form.`, answer: base.standardPairs[0].standard, change: "Model choosing a coefficient between 1 and 10." },
      { question: `Write ${base.standardPairs[1].ordinary} in standard form.`, answer: base.standardPairs[1].standard, change: "Only the size changes." },
      { question: `Write ${base.standardPairs[2].ordinary} in standard form.`, answer: base.standardPairs[2].standard, change: "Only the coefficient changes." }
    ];
  }

  return createTeachingSequence(topic, variant, sequence);
}

function generateStandardFormIntro(_topic, variant, settings, difficultyKey) {
  const base = getStandardFormBase(settings, difficultyKey);
  if (variant.id === "write-ordinary-number") return { questions: base.writeOrdinary.map((item, index) => ({ question: item.question, answer: item.answer, change: item.change || standardFormChange(index) })) };
  if (variant.id === "compare-values") return { questions: base.compares.map((item, index) => ({ question: item.question, answer: item.answer, change: item.change || standardFormChange(index) })) };
  if (variant.id === "error-spotting") return { questions: base.errors.map((item, index) => ({ question: item.question, answer: item.answer, change: item.change || standardFormChange(index) })) };
  return { questions: base.writeStandard.map((item, index) => ({ question: item.question, answer: item.answer, change: item.change || standardFormChange(index) })) };
}

function getStandardFormBase(_settings, difficultyKey) {
  const ordinaryValues = difficultyKey === "easy"
    ? ["30000", "300000", "3000000", "4000000", "4500000", "450000", "45000", "65000", "650000", "6500000"]
    : difficultyKey === "hard"
      ? ["0.00045", "0.000045", "0.0000045", "0.0000054", "0.000054", "0.00054", "0.0054", "0.0094", "0.094", "0.94"]
      : ["45000", "450000", "4500000", "5400000", "54000000", "64000000", "6400000", "640000", "740000", "7400000"];

  const standardPairs = ordinaryValues.map((value) => ({ ordinary: value, standard: toStandardFormString(value) }));
  const writeStandard = standardPairs.map((item, index) => ({
    question: `Write ${item.ordinary} in standard form.`,
    answer: item.standard,
    change: [
      "Starting example.",
      "Only the exponent changes.",
      "Only the exponent changes again.",
      "Only the coefficient changes.",
      "Only the coefficient changes again.",
      "Only the exponent changes.",
      "Only the exponent changes again.",
      "Only the coefficient changes.",
      "Only the exponent changes.",
      "Only the exponent changes again."
    ][index]
  }));
  const writeOrdinary = standardPairs.map((item, index) => ({
    question: `Write ${item.standard} as an ordinary number.`,
    answer: item.ordinary,
    change: writeStandard[index].change
  }));

  const compareSpecs = difficultyKey === "easy"
    ? [
      ["3 x 10^4", "4 x 10^4", "4 x 10^4", "Starting example."],
      ["3 x 10^4", "4 x 10^5", "4 x 10^5", "Only the exponent of the second number changes."],
      ["3 x 10^4", "3 x 10^5", "3 x 10^5", "Only the coefficient of the second number changes."],
      ["3 x 10^4", "3 x 10^3", "3 x 10^4", "Only the exponent of the second number changes."],
      ["3 x 10^4", "2 x 10^4", "3 x 10^4", "Only the coefficient of the second number changes."],
      ["3 x 10^4", "2 x 10^5", "2 x 10^5", "Only the exponent of the second number changes."],
      ["3 x 10^4", "3 x 10^5", "3 x 10^5", "Only the coefficient of the second number changes."],
      ["3 x 10^4", "3 x 10^6", "3 x 10^6", "Only the exponent of the second number changes."],
      ["3 x 10^4", "3.5 x 10^6", "3.5 x 10^6", "Only the coefficient of the second number changes."],
      ["3 x 10^4", "3.5 x 10^3", "3 x 10^4", "Only the exponent of the second number changes."]
    ]
    : difficultyKey === "hard"
      ? [
        ["4.5 x 10^-4", "4.6 x 10^-4", "4.6 x 10^-4", "Starting example."],
        ["4.5 x 10^-4", "4.6 x 10^-5", "4.5 x 10^-4", "Only the exponent of the second number changes."],
        ["4.5 x 10^-4", "4.5 x 10^-5", "4.5 x 10^-4", "Only the coefficient of the second number changes."],
        ["4.5 x 10^-4", "4.5 x 10^-3", "4.5 x 10^-3", "Only the exponent of the second number changes."],
        ["4.5 x 10^-4", "4.4 x 10^-3", "4.4 x 10^-3", "Only the coefficient of the second number changes."],
        ["4.5 x 10^-4", "4.4 x 10^-4", "4.5 x 10^-4", "Only the exponent of the second number changes."],
        ["4.5 x 10^-4", "5.4 x 10^-4", "5.4 x 10^-4", "Only the coefficient of the second number changes."],
        ["4.5 x 10^-4", "5.4 x 10^-6", "4.5 x 10^-4", "Only the exponent of the second number changes."],
        ["4.5 x 10^-4", "4.9 x 10^-6", "4.5 x 10^-4", "Only the coefficient of the second number changes."],
        ["4.5 x 10^-4", "4.9 x 10^-2", "4.9 x 10^-2", "Only the exponent of the second number changes."]
      ]
      : [
        ["4.5 x 10^4", "4.6 x 10^4", "4.6 x 10^4", "Starting example."],
        ["4.5 x 10^4", "4.6 x 10^5", "4.6 x 10^5", "Only the exponent of the second number changes."],
        ["4.5 x 10^4", "4.5 x 10^5", "4.5 x 10^5", "Only the coefficient of the second number changes."],
        ["4.5 x 10^4", "4.5 x 10^3", "4.5 x 10^4", "Only the exponent of the second number changes."],
        ["4.5 x 10^4", "5.4 x 10^3", "4.5 x 10^4", "Only the coefficient of the second number changes."],
        ["4.5 x 10^4", "5.4 x 10^6", "5.4 x 10^6", "Only the exponent of the second number changes."],
        ["4.5 x 10^4", "5.5 x 10^6", "5.5 x 10^6", "Only the coefficient of the second number changes."],
        ["4.5 x 10^4", "5.5 x 10^4", "5.5 x 10^4", "Only the exponent of the second number changes."],
        ["4.5 x 10^4", "4.4 x 10^4", "4.5 x 10^4", "Only the coefficient of the second number changes."],
        ["4.5 x 10^4", "4.4 x 10^7", "4.4 x 10^7", "Only the exponent of the second number changes."]
      ];

  const compares = compareSpecs.map(([left, right, answer, change]) => ({
    question: `Which is greater: ${left} or ${right}?`,
    answer,
    left,
    right,
    change
  }));

  const errorSpecs = difficultyKey === "easy"
    ? [
      ["30 x 10^3", "3 x 10^4", "Starting example."],
      ["30 x 10^4", "3 x 10^5", "Only the exponent changes in the incorrect form."],
      ["300 x 10^4", "3 x 10^6", "Only the coefficient becomes larger again."],
      ["0.3 x 10^5", "3 x 10^4", "Only the coefficient becomes less than 1."],
      ["0.3 x 10^6", "3 x 10^5", "Only the exponent changes in the incorrect form."],
      ["3 x 10^6", "3 x 10^6", "Only the form becomes correct."],
      ["30 x 10^6", "3 x 10^7", "Only the coefficient becomes too large again."],
      ["0.3 x 10^7", "3 x 10^6", "Only the coefficient becomes too small again."],
      ["3 x 10^7", "3 x 10^7", "Only the form becomes correct again."],
      ["30 x 10^7", "3 x 10^8", "Only the exponent changes in the incorrect form."]
    ]
    : difficultyKey === "hard"
      ? [
        ["45 x 10^-5", "4.5 x 10^-4", "Starting example."],
        ["45 x 10^-6", "4.5 x 10^-5", "Only the exponent changes in the incorrect form."],
        ["54 x 10^-6", "5.4 x 10^-5", "Only the coefficient changes in the incorrect form."],
        ["0.54 x 10^-4", "5.4 x 10^-5", "Only the coefficient becomes less than 1."],
        ["0.54 x 10^-3", "5.4 x 10^-4", "Only the exponent changes in the incorrect form."],
        ["5.4 x 10^-4", "5.4 x 10^-4", "Only the form becomes correct."],
        ["54 x 10^-4", "5.4 x 10^-3", "Only the coefficient becomes too large again."],
        ["0.54 x 10^-2", "5.4 x 10^-3", "Only the coefficient becomes too small again."],
        ["5.4 x 10^-3", "5.4 x 10^-3", "Only the form becomes correct again."],
        ["54 x 10^-3", "5.4 x 10^-2", "Only the exponent changes in the incorrect form."]
      ]
      : [
        ["45 x 10^3", "4.5 x 10^4", "Starting example."],
        ["45 x 10^4", "4.5 x 10^5", "Only the exponent changes in the incorrect form."],
        ["54 x 10^4", "5.4 x 10^5", "Only the coefficient changes in the incorrect form."],
        ["0.54 x 10^6", "5.4 x 10^5", "Only the coefficient becomes less than 1."],
        ["0.54 x 10^7", "5.4 x 10^6", "Only the exponent changes in the incorrect form."],
        ["5.4 x 10^6", "5.4 x 10^6", "Only the form becomes correct."],
        ["54 x 10^6", "5.4 x 10^7", "Only the coefficient becomes too large again."],
        ["0.54 x 10^8", "5.4 x 10^7", "Only the coefficient becomes too small again."],
        ["5.4 x 10^7", "5.4 x 10^7", "Only the form becomes correct again."],
        ["54 x 10^7", "5.4 x 10^8", "Only the exponent changes in the incorrect form."]
      ];

  const errors = errorSpecs.map(([wrong, answer, change]) => ({
    question: `Correct this so it is in standard form: ${wrong}`,
    answer,
    change
  }));
  return {
    standardPairs,
    writeStandard,
    writeOrdinary,
    compares,
    errors,
    comparePairs: compares.slice(0, 3)
  };
}

function toStandardFormString(value) {
  const number = Number(value);
  if (number === 0) return "0";
  const exponent = Math.floor(Math.log10(Math.abs(number)));
  const coefficient = number / (10 ** exponent);
  return `${trimTrailingZero(coefficient)} x 10^${exponent}`;
}

function generateIndicesLawsIntroTeaching(topic, variant, settings, difficultyKey) {
  const base = getIndicesBase(settings, difficultyKey);
  let sequence;

  if (variant.id === "match-index-forms") {
    sequence = [
      { question: `Write ${base.repeatForms[0].expanded} using index notation.`, answer: base.repeatForms[0].index, change: "Model turning repeated multiplication into a power." },
      { question: `Write ${base.repeatForms[1].expanded} using index notation.`, answer: base.repeatForms[1].index, change: "Only the exponent changes." },
      { question: `Which repeated multiplication matches ${base.repeatForms[2].index}?`, answer: base.repeatForms[2].expanded, change: "Only the direction of matching changes." }
    ];
  } else if (variant.id === "apply-index-laws") {
    sequence = [
      { question: `Simplify ${base.lawItems[0].question}.`, answer: base.lawItems[0].answer, change: "Model adding powers when multiplying the same base." },
      { question: `Simplify ${base.lawItems[1].question}.`, answer: base.lawItems[1].answer, change: "Only the operation changes." },
      { question: `Simplify ${base.lawItems[2].question}.`, answer: base.lawItems[2].answer, change: "Only the exponent values change." }
    ];
  } else if (variant.id === "missing-value") {
    sequence = [
      { question: `${base.missingItems[0].question}`, answer: base.missingItems[0].answer, change: "Model one missing exponent." },
      { question: `${base.missingItems[1].question}`, answer: base.missingItems[1].answer, change: "Only the base changes." },
      { question: `${base.missingItems[2].question}`, answer: base.missingItems[2].answer, change: "Only the law changes." }
    ];
  } else {
    sequence = [
      { question: `Evaluate ${base.evalItems[0].question}.`, answer: base.evalItems[0].answer, change: "Model a square or cube as repeated multiplication." },
      { question: `Evaluate ${base.evalItems[1].question}.`, answer: base.evalItems[1].answer, change: "Only the base changes." },
      { question: `Evaluate ${base.evalItems[2].question}.`, answer: base.evalItems[2].answer, change: "Only the exponent changes." }
    ];
  }

  return createTeachingSequence(topic, variant, sequence);
}

function generateIndicesLawsIntro(_topic, variant, settings, difficultyKey) {
  const base = getIndicesBase(settings, difficultyKey);
  if (variant.id === "match-index-forms") return { questions: base.matchItems.map((item, index) => ({ question: item.question, answer: item.answer, change: item.change || indicesChange(index) })) };
  if (variant.id === "apply-index-laws") return { questions: base.lawItems.map((item, index) => ({ question: item.question, answer: item.answer, change: item.change || indicesChange(index) })) };
  if (variant.id === "missing-value") return { questions: base.missingItems.map((item, index) => ({ question: item.question, answer: item.answer, change: item.change || indicesChange(index) })) };
  return { questions: base.evalItems.map((item, index) => ({ question: item.question, answer: item.answer, change: item.change || indicesChange(index) })) };
}

function getIndicesBase(_settings, difficultyKey) {
  const bases = difficultyKey === "easy" ? [2, 3, 4, 5, 6] : difficultyKey === "hard" ? [2, 3, 5, 7, 10] : [2, 3, 4, 5, 8];
  const evalItems = Array.from({ length: 10 }, (_, index) => {
    const base = bases[index % bases.length];
    const exponent = difficultyKey === "easy" ? 2 + (index % 2) : 2 + (index % 3);
    return {
      question: `${base}^${exponent}`,
      answer: `${base ** exponent}`,
      change: index === 0 ? "Starting example." : index % 2 === 1 ? "Only the base changes." : "Only the exponent changes."
    };
  });
  const repeatForms = Array.from({ length: 10 }, (_, index) => {
    const base = bases[index % bases.length];
    const exponent = 2 + (index % 3);
    return {
      expanded: Array.from({ length: exponent }, () => base).join(" x "),
      index: `${base}^${exponent}`
    };
  });
  const matchItems = repeatForms.map((item, index) => ({
    question: index % 2 === 0 ? `Write ${item.expanded} using index notation.` : `Write ${item.index} as repeated multiplication.`,
    answer: index % 2 === 0 ? item.index : item.expanded,
    change: index === 0 ? "Starting example." : index % 2 === 1 ? "Only the direction changes." : "Only the exponent changes."
  }));
  const lawItems = Array.from({ length: 10 }, (_, index) => {
    const base = ["x", "a", "b"][index % 3];
    const m = 2 + (index % 3);
    const n = 1 + (index % 4);
    return index % 2 === 0
      ? { question: `${base}^${m} x ${base}^${n}`, answer: `${base}^${m + n}`, change: index === 0 ? "Starting example." : index % 2 === 0 ? "Only the exponent values change." : "Only the operation changes." }
      : { question: `${base}^${m + n} / ${base}^${n}`, answer: `${base}^${m}`, change: index === 0 ? "Starting example." : index % 2 === 1 ? "Only the operation changes." : "Only the exponent values change." };
  });
  const missingBases = ["x", "a", "b", "m", "p", "y", "k", "t", "n", "q"];
  const missingItems = Array.from({ length: 10 }, (_, index) => {
    const base = missingBases[index];
    const m = difficultyKey === "easy" ? 2 + (index % 4) : difficultyKey === "hard" ? 3 + (index % 5) : 2 + (index % 5);
    const n = difficultyKey === "easy" ? 1 + ((index * 2) % 4) : difficultyKey === "hard" ? 2 + ((index * 3) % 4) : 1 + ((index * 3) % 5);
    return index % 2 === 0
      ? { question: `${base}^${m} x ${base}^? = ${base}^${m + n}`, answer: `${n}`, change: index === 0 ? "Starting example." : index % 2 === 0 ? "Only the base changes." : "Only the operation changes." }
      : { question: `${base}^${m + n} / ${base}^? = ${base}^${m}`, answer: `${n}`, change: index === 0 ? "Starting example." : index % 2 === 1 ? "Only the operation changes." : "Only the base changes." };
  });
  return { evalItems, repeatForms, matchItems, lawItems, missingItems };
}

function generateTwoStepEquationsTeaching(topic, variant, settings, difficultyKey) {
  const base = getTwoStepEquationBase(settings, difficultyKey);
  let sequence;

  if (variant.id === "which-equation") {
    sequence = [
      { question: `Which equation has solution x = ${base.solutions[0]}? A) ${base.whichItems[0].correct} B) ${base.whichItems[0].wrong}`, answer: "A", change: "Model checking by substitution." },
      { question: `Which equation has solution x = ${base.solutions[1]}? A) ${base.whichItems[1].correct} B) ${base.whichItems[1].wrong}`, answer: "A", change: "Only the structure changes." },
      { question: `Which equation has solution x = ${base.solutions[2]}? A) ${base.whichItems[2].correct} B) ${base.whichItems[2].wrong}`, answer: "A", change: "Only the coefficient changes." }
    ];
  } else if (variant.id === "write-the-equation") {
    sequence = [
      { question: `Write a two-step equation with solution x = ${base.solutions[0]} using the form 2x + c = ?.`, answer: base.writeItems[0].answer, change: "Model building from a known solution." },
      { question: `Write a two-step equation with solution x = ${base.solutions[1]} using the form 3x - c = ?.`, answer: base.writeItems[1].answer, change: "Only the structure changes." },
      { question: `Write a two-step equation with solution x = ${base.solutions[2]} using the form (x + c)/2 = ?.`, answer: base.writeItems[2].answer, change: "Only the layout changes." }
    ];
  } else if (variant.id === "error-spotting") {
    sequence = [
      { question: `A pupil solves ${base.solveItems[0].question} by subtracting ${base.solveItems[0].constant} first. Is that correct?`, answer: "No.", change: "Model undoing operations in reverse order." },
      { question: `Correct ${base.errorItems[0].question}`, answer: base.errorItems[0].answer, change: "Only the task changes to correction." },
      { question: `Why must the final division happen after the additive step has been undone in ${base.solveItems[1].question}?`, answer: `Because the variable is still tied inside the two-step structure until the constant is removed first.`, change: "Only the focus shifts to method." }
    ];
  } else {
    sequence = [
      { question: `Solve ${base.solveItems[0].question}`, answer: base.solveItems[0].answer, change: "Model undoing the addition or subtraction first." },
      { question: `Solve ${base.solveItems[1].question}`, answer: base.solveItems[1].answer, change: "Only the coefficient changes." },
      { question: `Solve ${base.solveItems[2].question}`, answer: base.solveItems[2].answer, change: "Only the layout changes." }
    ];
  }

  return createTeachingSequence(topic, variant, sequence);
}

function generateTwoStepEquations(_topic, variant, settings, difficultyKey) {
  const base = getTwoStepEquationBase(settings, difficultyKey);
  if (variant.id === "which-equation") return { questions: base.whichQuestions.map((item, index) => ({ question: item.question, answer: item.answer, change: item.change || twoStepEquationChange(index) })) };
  if (variant.id === "write-the-equation") return { questions: base.writeItems.map((item, index) => ({ question: item.question, answer: item.answer, change: item.change || twoStepEquationChange(index) })) };
  if (variant.id === "error-spotting") return { questions: base.errorItems.map((item, index) => ({ question: item.question, answer: item.answer, change: item.change || twoStepEquationChange(index) })) };
  return { questions: base.solveItems.map((item, index) => ({ question: item.question, answer: item.answer, change: item.change || twoStepEquationChange(index) })) };
}

function getTwoStepEquationBase(_settings, difficultyKey) {
  const coeffs = difficultyKey === "easy" ? [2, 3] : difficultyKey === "hard" ? [3, 4, 5] : [2, 3, 4];
  const solutions = Array.from({ length: 10 }, (_, index) => 2 + index);
  const solveItems = solutions.map((solution, index) => {
    const coeff = coeffs[index % coeffs.length];
    const constant = 3 + (index % 5);
    if (index % 3 === 0) return { question: `${coeff}x + ${constant} = ${coeff * solution + constant}`, answer: `x = ${solution}`, constant, change: index === 0 ? "Starting example." : "Only the constant changes." };
    if (index % 3 === 1) return { question: `${coeff}x - ${constant} = ${coeff * solution - constant}`, answer: `x = ${solution}`, constant, change: "Only the sign changes." };
    return { question: `(x + ${constant}) / ${coeff} = ${(solution + constant) / coeff}`, answer: `x = ${solution}`, constant, change: "Only the layout changes." };
  });
  const whichItems = solutions.slice(0, 10).map((solution, index) => {
    const coeff = coeffs[index % coeffs.length];
    const constant = 2 + (index % 4);
    return {
      correct: `${coeff}x + ${constant} = ${coeff * solution + constant}`,
      wrong: `${coeff}x + ${constant} = ${coeff * solution + constant + 1}`,
      solution
    };
  });
  const whichQuestions = whichItems.map((item, index) => ({ question: `Which equation has solution x = ${item.solution}? A) ${item.correct} B) ${item.wrong}`, answer: "A", change: index === 0 ? "Starting example." : index % 2 === 1 ? "Only the constant changes." : "Only the coefficient changes." }));
  const writeItems = solutions.slice(0, 10).map((solution, index) => {
    const coeff = coeffs[index % coeffs.length];
    const constant = 2 + (index % 5);
    const templates = [
      { question: `Write a two-step equation with solution x = ${solution} using the form ${coeff}x + ${constant} = ?`, answer: `${coeff}x + ${constant} = ${coeff * solution + constant}` },
      { question: `Write a two-step equation with solution x = ${solution} using the form ${coeff}x - ${constant} = ?`, answer: `${coeff}x - ${constant} = ${coeff * solution - constant}` },
      { question: `Write a two-step equation with solution x = ${solution} using the form (x + ${constant}) / ${coeff} = ?`, answer: `(x + ${constant}) / ${coeff} = ${trimTrailingZero((solution + constant) / coeff)}` }
    ];
    return { ...templates[index % templates.length], change: index === 0 ? "Starting example." : index % 3 === 1 ? "Only the sign changes." : index % 3 === 2 ? "Only the layout changes." : "Only the coefficient changes." };
  });
  const errorItems = solveItems.map((item) => ({
    question: `A pupil says the solution to ${item.question} is x = ${extractNumericAnswer(item.answer) + 1}. Correct the answer.`,
    answer: item.answer,
    change: item.change
  }));
  return { solveItems, whichItems, whichQuestions, writeItems, errorItems, solutions };
}

function generateStraightLineGraphsIntroTeaching(topic, variant, settings, difficultyKey) {
  const base = getStraightLineGraphBase(settings, difficultyKey);
  let sequence;

  if (variant.id === "read-gradient") {
    sequence = [
      { question: `The line passes through ${coordinateLabel(base.lines[0].points[0])} and ${coordinateLabel(base.lines[0].points[1])}. What is the gradient?`, answer: `${base.lines[0].m}`, change: "Model rise over run from two points.", diagram: coordinateGridDiagram(base.lines[0].points.slice(0, 3)) },
      { question: `The line passes through ${coordinateLabel(base.lines[1].points[0])} and ${coordinateLabel(base.lines[1].points[1])}. What is the gradient?`, answer: `${base.lines[1].m}`, change: "Only the steepness changes.", diagram: coordinateGridDiagram(base.lines[1].points.slice(0, 3)) },
      { question: `Which line is steeper: y = ${base.lines[0].m}x + ${base.lines[0].c} or y = ${base.lines[2].m}x + ${base.lines[2].c}?`, answer: `y = ${base.lines[2].m}x + ${base.lines[2].c}`, change: "Only the comparison changes.", diagram: comparisonDiagram("A", coordinateGridDiagram(base.lines[0].points.slice(0, 3)), "B", coordinateGridDiagram(base.lines[2].points.slice(0, 3))) }
    ];
  } else if (variant.id === "match-equation") {
    sequence = [
      { question: `Which equation matches points ${coordinateLabel(base.lines[0].points[0])}, ${coordinateLabel(base.lines[0].points[1])}, ${coordinateLabel(base.lines[0].points[2])}?`, answer: base.lines[0].equation, change: "Model linking a point pattern to an equation.", diagram: coordinateGridDiagram(base.lines[0].points.slice(0, 3)) },
      { question: `Which equation matches points ${coordinateLabel(base.lines[1].points[0])}, ${coordinateLabel(base.lines[1].points[1])}, ${coordinateLabel(base.lines[1].points[2])}?`, answer: base.lines[1].equation, change: "Only the intercept changes.", diagram: coordinateGridDiagram(base.lines[1].points.slice(0, 3)) },
      { question: `Which equation matches points ${coordinateLabel(base.lines[2].points[0])}, ${coordinateLabel(base.lines[2].points[1])}, ${coordinateLabel(base.lines[2].points[2])}?`, answer: base.lines[2].equation, change: "Only the gradient changes.", diagram: coordinateGridDiagram(base.lines[2].points.slice(0, 3)) }
    ];
  } else if (variant.id === "missing-point") {
    sequence = [
      { question: `On the line y = ${base.lines[0].m}x + ${base.lines[0].c}, find y when x = ${base.lines[0].xValues[3]}.`, answer: `${base.lines[0].points[3].y}`, change: "Model substituting into the rule.", diagram: coordinateGridDiagram(base.lines[0].points.slice(0, 3)) },
      { question: `On the line y = ${base.lines[1].m}x + ${base.lines[1].c}, find y when x = ${base.lines[1].xValues[3]}.`, answer: `${base.lines[1].points[3].y}`, change: "Only the rule changes.", diagram: coordinateGridDiagram(base.lines[1].points.slice(0, 3)) },
      { question: `A point on y = ${base.lines[2].m}x + ${base.lines[2].c} has x = ${base.lines[2].xValues[3]}. Find y.`, answer: `${base.lines[2].points[3].y}`, change: "Only the wording changes.", diagram: coordinateGridDiagram(base.lines[2].points.slice(0, 3)) }
    ];
  } else {
    sequence = [
      { question: `For y = ${base.lines[0].m}x + ${base.lines[0].c}, find y when x = ${base.lines[0].xValues[0]}.`, answer: `${base.lines[0].points[0].y}`, change: "Model substituting into a linear rule.", diagram: coordinateGridDiagram(base.lines[0].points.slice(0, 3)) },
      { question: `For y = ${base.lines[0].m}x + ${base.lines[0].c}, find y when x = ${base.lines[0].xValues[1]}.`, answer: `${base.lines[0].points[1].y}`, change: "Only x changes.", diagram: coordinateGridDiagram(base.lines[0].points.slice(0, 3)) },
      { question: `For y = ${base.lines[1].m}x + ${base.lines[1].c}, find y when x = ${base.lines[1].xValues[1]}.`, answer: `${base.lines[1].points[1].y}`, change: "Only the equation changes.", diagram: coordinateGridDiagram(base.lines[1].points.slice(0, 3)) }
    ];
  }
  return createTeachingSequence(topic, variant, sequence);
}

function generateStraightLineGraphsIntro(_topic, variant, settings, difficultyKey) {
  const base = getStraightLineGraphBase(settings, difficultyKey);
  if (variant.id === "read-gradient") return { questions: base.gradientItems.map((item, index) => ({ question: item.question, answer: item.answer, change: item.change || straightLineGraphChange(index), diagram: item.diagram })) };
  if (variant.id === "match-equation") return { questions: base.matchItems.map((item, index) => ({ question: item.question, answer: item.answer, change: item.change || straightLineGraphChange(index), diagram: item.diagram })) };
  if (variant.id === "missing-point") return { questions: base.missingItems.map((item, index) => ({ question: item.question, answer: item.answer, change: item.change || straightLineGraphChange(index), diagram: item.diagram })) };
  return { questions: base.plotItems.map((item, index) => ({ question: item.question, answer: item.answer, change: item.change || straightLineGraphChange(index), diagram: item.diagram })) };
}

function getStraightLineGraphBase(_settings, difficultyKey) {
  const lineSpecs = difficultyKey === "easy"
    ? [[1, 0], [1, 1], [1, 2], [1, 3], [2, 0], [2, 1], [2, 2], [3, 0], [3, 1], [3, 2]]
    : difficultyKey === "hard"
      ? [[2, -3], [2, -1], [3, -2], [3, 1], [4, -1], [4, 2], [5, -2], [5, 1], [6, -3], [6, 2]]
      : [[1, -2], [1, 1], [2, -1], [2, 2], [3, -2], [3, 1], [4, -1], [4, 2], [5, 0], [5, 3]];
  const lines = Array.from({ length: 10 }, (_, index) => {
    const [m, c] = lineSpecs[index];
    const xValues = [0, 1, 2, 3];
    const points = xValues.map((x) => ({ x, y: m * x + c }));
    return { m, c, xValues, points, equation: `y = ${m}x ${c < 0 ? "-" : "+"} ${Math.abs(c)}` };
  });
  const plotItems = lines.map((line, index) => ({
    question: `For ${line.equation}, what is y when x = ${line.xValues[index % 4]}?`,
    answer: `${line.points[index % 4].y}`,
    diagram: coordinateGridDiagram(line.points.slice(0, 3)),
    change: index === 0 ? "Starting example." : index % 2 === 1 ? "Only x changes." : "Only the equation changes."
  }));
  const gradientItems = lines.map((line) => ({
    question: `The line passes through ${coordinateLabel(line.points[0])} and ${coordinateLabel(line.points[1])}. What is the gradient?`,
    answer: `${line.m}`,
    diagram: coordinateGridDiagram(line.points.slice(0, 3)),
    change: "Only the line changes."
  }));
  const matchItems = lines.map((line, index) => ({
    question: `Which equation matches the points ${coordinateLabel(line.points[0])}, ${coordinateLabel(line.points[1])}, ${coordinateLabel(line.points[2])}?`,
    answer: line.equation,
    diagram: coordinateGridDiagram(line.points.slice(0, 3).map((point) => ({ ...point, label: String.fromCharCode(65 + index % 3) }))),
    change: index === 0 ? "Starting example." : index % 2 === 1 ? "Only the intercept changes." : "Only the gradient changes."
  }));
  const missingItems = lines.map((line) => ({
    question: `A point on ${line.equation} has x = ${line.xValues[3]}. Find y.`,
    answer: `${line.points[3].y}`,
    diagram: coordinateGridDiagram(line.points.slice(0, 3)),
    change: "Only the equation changes."
  }));
  return { lines, plotItems, gradientItems, matchItems, missingItems };
}

function generatePythagorasTeaching(topic, variant, settings, difficultyKey) {
  const base = getPythagorasBase(settings, difficultyKey);
  let sequence;
  if (variant.id === "which-side") {
    sequence = [
      { question: `In a right-angled triangle with sides ${base.triples[0].a}, ${base.triples[0].b}, ${base.triples[0].c}, which side is the hypotenuse?`, answer: `${base.triples[0].c}`, change: "Model identifying the longest side opposite the right angle.", diagram: pythagorasTriangleDiagram(`${base.triples[0].a}`, `${base.triples[0].b}`, `${base.triples[0].c}`) },
      { question: `Could side lengths ${base.triples[1].a}, ${base.triples[1].b}, ${base.triples[1].c} form a right-angled triangle?`, answer: "Yes.", change: "Only the task changes to checking.", diagram: pythagorasTriangleDiagram(`${base.triples[1].a}`, `${base.triples[1].b}`, `${base.triples[1].c}`) },
      { question: `Which is longer in a right-angled triangle with shorter sides ${base.triples[2].a} and ${base.triples[2].b}: the hypotenuse or ${base.triples[2].b}?`, answer: "The hypotenuse.", change: "Only the reasoning focus changes.", diagram: pythagorasTriangleDiagram(`${base.triples[2].a}`, `${base.triples[2].b}`, `${base.triples[2].c}`) }
    ];
  } else if (variant.id === "compare-triangles") {
    sequence = [
      { question: `Compare the hypotenuse of triangles with shorter sides ${base.triples[0].a}, ${base.triples[0].b} and ${base.triples[1].a}, ${base.triples[1].b}. Which is larger?`, answer: `${base.triples[1].c}`, change: "Model comparing by the theorem.", diagram: comparisonDiagram("A", pythagorasTriangleDiagram(`${base.triples[0].a}`, `${base.triples[0].b}`, "?"), "B", pythagorasTriangleDiagram(`${base.triples[1].a}`, `${base.triples[1].b}`, "?")) },
      { question: `Which triangle has the greater hypotenuse: ${base.triples[2].a}, ${base.triples[2].b} or ${base.triples[3].a}, ${base.triples[3].b}?`, answer: `${Math.max(base.triples[2].c, base.triples[3].c)}`, change: "Only the side pair changes.", diagram: comparisonDiagram("A", pythagorasTriangleDiagram(`${base.triples[2].a}`, `${base.triples[2].b}`, "?"), "B", pythagorasTriangleDiagram(`${base.triples[3].a}`, `${base.triples[3].b}`, "?")) },
      { question: `Why does increasing one shorter side increase the hypotenuse?`, answer: `Because the square of the hypotenuse equals the sum of the squares of the shorter sides.`, change: "Only the task changes to verbal reasoning.", diagram: pythagorasTriangleDiagram(`${base.triples[3].a}`, `${base.triples[3].b}`, `${base.triples[3].c}`) }
    ];
  } else if (variant.id === "error-spotting") {
    sequence = [
      { question: `A pupil says the missing side in a right-angled triangle with shorter sides 3 and 4 is 7. Is that correct?`, answer: "No.", change: "Model rejecting simple addition.", diagram: pythagorasTriangleDiagram("3", "4", "?") },
      { question: `Correct the triangle with shorter sides 5 and 12 if the pupil says the hypotenuse is 16.`, answer: "13", change: "Only the triple changes.", diagram: pythagorasTriangleDiagram("5", "12", "?") },
      { question: `Why do you square the side lengths before adding or subtracting in Pythagoras?`, answer: `Because the theorem links the areas of the squares on the sides, not the side lengths directly.`, change: "Only the focus changes to the theorem meaning.", diagram: pythagorasTriangleDiagram(`${base.triples[2].a}`, `${base.triples[2].b}`, `${base.triples[2].c}`) }
    ];
  } else {
    sequence = [
      { question: `Find the hypotenuse of a right-angled triangle with shorter sides ${base.triples[0].a} and ${base.triples[0].b}.`, answer: `${base.triples[0].c}`, change: "Model substituting into a known triple.", diagram: pythagorasTriangleDiagram(`${base.triples[0].a}`, `${base.triples[0].b}`, "?") },
      { question: `Find the hypotenuse of a right-angled triangle with shorter sides ${base.triples[1].a} and ${base.triples[1].b}.`, answer: `${base.triples[1].c}`, change: "Only the triple changes.", diagram: pythagorasTriangleDiagram(`${base.triples[1].a}`, `${base.triples[1].b}`, "?") },
      { question: `Find the missing shorter side if the hypotenuse is ${base.triples[2].c} and the other shorter side is ${base.triples[2].b}.`, answer: `${base.triples[2].a}`, change: "Only the unknown side changes.", diagram: pythagorasTriangleDiagram("?", `${base.triples[2].b}`, `${base.triples[2].c}`) }
    ];
  }
  return createTeachingSequence(topic, variant, sequence);
}

function generatePythagoras(_topic, variant, settings, difficultyKey) {
  const base = getPythagorasBase(settings, difficultyKey);
  if (variant.id === "which-side") return { questions: base.whichItems.map((item, index) => ({ question: item.question, answer: item.answer, change: item.change || pythagorasChange(index), diagram: item.diagram })) };
  if (variant.id === "compare-triangles") return { questions: base.compareItems.map((item, index) => ({ question: item.question, answer: item.answer, change: item.change || pythagorasChange(index), diagram: item.diagram })) };
  if (variant.id === "error-spotting") return { questions: base.errorItems.map((item, index) => ({ question: item.question, answer: item.answer, change: item.change || pythagorasChange(index), diagram: item.diagram })) };
  return { questions: base.findItems.map((item, index) => ({ question: item.question, answer: item.answer, change: item.change || pythagorasChange(index), diagram: item.diagram })) };
}

function getPythagorasBase(_settings, difficultyKey) {
  const triples = difficultyKey === "hard"
    ? [
        { a: 8, b: 15, c: 17 }, { a: 7, b: 24, c: 25 }, { a: 20, b: 21, c: 29 }, { a: 12, b: 35, c: 37 }, { a: 9, b: 40, c: 41 },
        { a: 28, b: 45, c: 53 }, { a: 11, b: 60, c: 61 }, { a: 16, b: 63, c: 65 }, { a: 33, b: 56, c: 65 }, { a: 48, b: 55, c: 73 },
        { a: 13, b: 84, c: 85 }, { a: 36, b: 77, c: 85 }, { a: 39, b: 80, c: 89 }, { a: 65, b: 72, c: 97 }, { a: 20, b: 99, c: 101 },
        { a: 60, b: 91, c: 109 }, { a: 15, b: 112, c: 113 }, { a: 44, b: 117, c: 125 }, { a: 88, b: 105, c: 137 }, { a: 17, b: 144, c: 145 }
      ]
    : difficultyKey === "easy"
      ? [
          { a: 3, b: 4, c: 5 }, { a: 6, b: 8, c: 10 }, { a: 5, b: 12, c: 13 }, { a: 9, b: 12, c: 15 }, { a: 8, b: 15, c: 17 },
          { a: 12, b: 16, c: 20 }, { a: 7, b: 24, c: 25 }, { a: 10, b: 24, c: 26 }, { a: 15, b: 20, c: 25 }, { a: 18, b: 24, c: 30 },
          { a: 20, b: 21, c: 29 }, { a: 12, b: 35, c: 37 }, { a: 9, b: 40, c: 41 }, { a: 11, b: 60, c: 61 }, { a: 28, b: 45, c: 53 }
        ]
      : [
          { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 }, { a: 6, b: 8, c: 10 }, { a: 8, b: 15, c: 17 }, { a: 7, b: 24, c: 25 },
          { a: 9, b: 12, c: 15 }, { a: 10, b: 24, c: 26 }, { a: 12, b: 16, c: 20 }, { a: 15, b: 20, c: 25 }, { a: 18, b: 24, c: 30 },
          { a: 20, b: 21, c: 29 }, { a: 12, b: 35, c: 37 }, { a: 9, b: 40, c: 41 }, { a: 28, b: 45, c: 53 }, { a: 11, b: 60, c: 61 },
          { a: 16, b: 63, c: 65 }, { a: 33, b: 56, c: 65 }, { a: 48, b: 55, c: 73 }, { a: 13, b: 84, c: 85 }, { a: 36, b: 77, c: 85 }
        ];
  const findItems = triples.map((item, index) => index % 2 === 0
    ? { question: `Find the hypotenuse of a right-angled triangle with shorter sides ${item.a} and ${item.b}.`, answer: `${item.c}`, diagram: pythagorasTriangleDiagram(`${item.a}`, `${item.b}`, "?"), change: index === 0 ? "Starting example." : "Only the triangle changes." }
    : { question: `Find the missing shorter side if the hypotenuse is ${item.c} and the other shorter side is ${item.b}.`, answer: `${item.a}`, diagram: pythagorasTriangleDiagram("?", `${item.b}`, `${item.c}`), change: "Only the unknown side changes." });
  const whichItems = triples.map((item, index) => index % 2 === 0
    ? { question: `In a right-angled triangle with side lengths ${item.a}, ${item.b}, ${item.c}, which side is the hypotenuse?`, answer: `${item.c}`, diagram: pythagorasTriangleDiagram(`${item.a}`, `${item.b}`, `${item.c}`), change: index === 0 ? "Starting example." : "Only the triangle changes." }
    : { question: `Do ${item.a}, ${item.b}, ${item.c} satisfy Pythagoras' theorem?`, answer: "Yes", diagram: pythagorasTriangleDiagram(`${item.a}`, `${item.b}`, `${item.c}`), change: "Only the task changes to checking." });
  const compareItems = triples.map((item, index) => {
    const other = triples[(index + 1) % triples.length];
    return {
      question: `Which triangle has the greater hypotenuse: one with shorter sides ${item.a}, ${item.b} or one with shorter sides ${other.a}, ${other.b}?`,
      answer: item.c > other.c ? `${item.c}` : `${other.c}`,
      diagram: comparisonDiagram("A", pythagorasTriangleDiagram(`${item.a}`, `${item.b}`, "?"), "B", pythagorasTriangleDiagram(`${other.a}`, `${other.b}`, "?")),
      change: index === 0 ? "Starting example." : "Only the comparison pair changes."
    };
  });
  const errorItems = triples.map((item, index) => ({ question: `A pupil says the hypotenuse for shorter sides ${item.a} and ${item.b} is ${item.a + item.b}. Correct the answer.`, answer: `${item.c}`, diagram: pythagorasTriangleDiagram(`${item.a}`, `${item.b}`, "?"), change: index === 0 ? "Starting example." : "Only the triangle changes." }));
  return { triples, findItems, whichItems, compareItems, errorItems };
}

function generateCompoundMeasuresTeaching(topic, variant, settings, difficultyKey) {
  const base = getCompoundMeasuresBase(settings, difficultyKey);
  let sequence;
  if (variant.id === "rearrange-the-formula") {
    sequence = [
      { question: `If speed = distance / time, which operation finds distance from speed and time?`, answer: "Multiply.", change: "Model rearranging the relationship conceptually." },
      { question: `If density = mass / volume, which operation finds mass from density and volume?`, answer: "Multiply.", change: "Only the context changes." },
      { question: `If pressure = force / area, which operation finds area from force and pressure?`, answer: "Divide.", change: "Only the unknown changes." }
    ];
  } else if (variant.id === "missing-value") {
    sequence = [
      { question: `${base.missings[0].question}`, answer: base.missings[0].answer, change: "Model identifying the unknown measure." },
      { question: `${base.missings[1].question}`, answer: base.missings[1].answer, change: "Only the formula family changes." },
      { question: `${base.missings[2].question}`, answer: base.missings[2].answer, change: "Only the missing quantity changes." }
    ];
  } else if (variant.id === "compare-rates") {
    sequence = [
      { question: `${base.compares[0].question}`, answer: base.compares[0].answer, change: "Model comparing rates, not just raw values." },
      { question: `${base.compares[1].question}`, answer: base.compares[1].answer, change: "Only the context changes." },
      { question: `${base.compares[2].question}`, answer: base.compares[2].answer, change: "Only the numbers change." }
    ];
  } else {
    sequence = [
      { question: `${base.directs[0].question}`, answer: base.directs[0].answer, change: "Model one direct compound measure calculation." },
      { question: `${base.directs[1].question}`, answer: base.directs[1].answer, change: "Only the measure type changes." },
      { question: `${base.directs[2].question}`, answer: base.directs[2].answer, change: "Only the numbers change." }
    ];
  }
  return createTeachingSequence(topic, variant, sequence);
}

function generateCompoundMeasures(_topic, variant, settings, difficultyKey) {
  const base = getCompoundMeasuresBase(settings, difficultyKey);
  if (variant.id === "rearrange-the-formula") return { questions: base.rearranges.map((item, index) => ({ question: item.question, answer: item.answer, change: item.change || compoundMeasureChange(index) })) };
  if (variant.id === "missing-value") return { questions: base.missings.map((item, index) => ({ question: item.question, answer: item.answer, change: item.change || compoundMeasureChange(index) })) };
  if (variant.id === "compare-rates") return { questions: base.compares.map((item, index) => ({ question: item.question, answer: item.answer, change: item.change || compoundMeasureChange(index) })) };
  return { questions: base.directs.map((item, index) => ({ question: item.question, answer: item.answer, change: item.change || compoundMeasureChange(index) })) };
}

function getCompoundMeasuresBase(_settings, difficultyKey) {
  const speedData = [
    { distance: 120, time: 2 }, { distance: 180, time: 3 }, { distance: 250, time: 5 }, { distance: 360, time: 6 },
    { distance: 420, time: 7 }, { distance: 540, time: 9 }, { distance: 640, time: 8 }, { distance: 720, time: 12 },
    { distance: 810, time: 9 }, { distance: 960, time: 12 }
  ];
  const densityData = [
    { mass: 24, volume: 6 }, { mass: 30, volume: 5 }, { mass: 42, volume: 7 }, { mass: 54, volume: 9 },
    { mass: 48, volume: 6 }, { mass: 63, volume: 9 }, { mass: 80, volume: 10 }, { mass: 99, volume: 11 },
    { mass: 108, volume: 12 }, { mass: 70, volume: 7 }
  ];
  const pressureData = difficultyKey === "hard"
    ? [{ force: 240, area: 12 }, { force: 360, area: 15 }, { force: 540, area: 18 }, { force: 700, area: 20 }, { force: 840, area: 24 }, { force: 960, area: 30 }, { force: 1240, area: 31 }, { force: 1560, area: 39 }, { force: 1820, area: 35 }, { force: 2100, area: 42 }]
    : [{ force: 120, area: 6 }, { force: 180, area: 9 }, { force: 250, area: 10 }, { force: 320, area: 16 }, { force: 360, area: 12 }, { force: 420, area: 14 }, { force: 480, area: 16 }, { force: 560, area: 20 }, { force: 630, area: 21 }, { force: 720, area: 24 }];
  const directs = Array.from({ length: 10 }, (_, index) => {
    const type = index % 3;
    if (type === 0) {
      const item = speedData[index];
      return { question: `Find the speed for ${item.distance} km in ${item.time} hours.`, answer: `${trimTrailingZero(item.distance / item.time)} km/h`, change: index === 0 ? "Starting example." : "Only the numbers change." };
    }
    if (type === 1) {
      const item = densityData[index];
      return { question: `Find the density if mass = ${item.mass} g and volume = ${item.volume} cm³.`, answer: `${trimTrailingZero(item.mass / item.volume)} g/cm³`, change: "Only the measure type changes." };
    }
    const item = pressureData[index];
    return { question: `Find the pressure if force = ${item.force} N and area = ${item.area} cm².`, answer: `${trimTrailingZero(item.force / item.area)} N/cm²`, change: "Only the measure type changes." };
  });
  const rearranges = [
    { question: `If speed = distance / time, how do you find distance from speed and time?`, answer: "distance = speed x time", change: "Starting example." },
    { question: `If speed = distance / time, how do you find time from distance and speed?`, answer: "time = distance / speed", change: "Only the unknown changes." },
    { question: `If density = mass / volume, how do you find mass from density and volume?`, answer: "mass = density x volume", change: "Only the context changes." },
    { question: `If density = mass / volume, how do you find volume from mass and density?`, answer: "volume = mass / density", change: "Only the unknown changes." },
    { question: `If pressure = force / area, how do you find force from pressure and area?`, answer: "force = pressure x area", change: "Only the context changes." },
    { question: `If pressure = force / area, how do you find area from force and pressure?`, answer: "area = force / pressure", change: "Only the unknown changes." },
    { question: `Which operation undoes division by time when using speed = distance / time?`, answer: "Multiply by time.", change: "Only the wording changes to the operation." },
    { question: `Which operation undoes division by volume when using density = mass / volume?`, answer: "Multiply by volume.", change: "Only the context changes." },
    { question: `Which operation undoes division by area when using pressure = force / area to find force?`, answer: "Multiply by area.", change: "Only the context changes." },
    { question: `Which operation is needed to find area from force and pressure?`, answer: "Divide force by pressure.", change: "Only the unknown changes." }
  ];
  const missings = Array.from({ length: 10 }, (_, index) => {
    const item = speedData[index];
    return index % 2 === 0
      ? { question: `A car travels at ${trimTrailingZero(item.distance / item.time)} km/h for ${item.time} hours. How far does it travel?`, answer: `${item.distance} km`, change: index === 0 ? "Starting example." : "Only the missing quantity changes." }
      : { question: `${item.distance} km is travelled at ${trimTrailingZero(item.distance / item.time)} km/h. How long does the journey take?`, answer: `${item.time} hours`, change: "Only the missing quantity changes." };
  });
  const compares = Array.from({ length: 10 }, (_, index) => {
    const left = speedData[index];
    const right = speedData[(index + 1) % speedData.length];
    const leftRate = left.distance / left.time;
    const rightRate = right.distance / right.time;
    return {
      question: `Which journey is faster: ${left.distance} km in ${left.time} hours or ${right.distance} km in ${right.time} hours?`,
      answer: leftRate > rightRate ? `${left.distance} km in ${left.time} hours` : `${right.distance} km in ${right.time} hours`,
      change: index === 0 ? "Starting example." : "Only the journeys being compared change."
    };
  });
  return { directs, rearranges, missings, compares };
}

function generateSimultaneousEquationsIntroTeaching(topic, variant, settings, difficultyKey) {
  const base = getSimultaneousEquationBase(settings, difficultyKey);
  let sequence;
  if (variant.id === "which-pair") {
    sequence = [
      { question: `Which pair has solution x = ${base.pairs[0].x}, y = ${base.pairs[0].y}? A) ${base.whichItems[0].correctA} and ${base.whichItems[0].correctB} B) ${base.whichItems[0].wrongA} and ${base.whichItems[0].wrongB}`, answer: "A", change: "Model checking by substitution into both equations." },
      { question: `Which pair has solution x = ${base.pairs[1].x}, y = ${base.pairs[1].y}? A) ${base.whichItems[1].correctA} and ${base.whichItems[1].correctB} B) ${base.whichItems[1].wrongA} and ${base.whichItems[1].wrongB}`, answer: "A", change: "Only the pair changes." },
      { question: `Which pair has solution x = ${base.pairs[2].x}, y = ${base.pairs[2].y}? A) ${base.whichItems[2].correctA} and ${base.whichItems[2].correctB} B) ${base.whichItems[2].wrongA} and ${base.whichItems[2].wrongB}`, answer: "A", change: "Only the coefficients change." }
    ];
  } else if (variant.id === "write-the-pair") {
    sequence = [
      { question: `Write two equations with solution x = ${base.pairs[0].x}, y = ${base.pairs[0].y}.`, answer: `${base.writeItems[0].a}; ${base.writeItems[0].b}`, change: "Model building a consistent pair from a known solution." },
      { question: `Write two equations with solution x = ${base.pairs[1].x}, y = ${base.pairs[1].y}.`, answer: `${base.writeItems[1].a}; ${base.writeItems[1].b}`, change: "Only the solution pair changes." },
      { question: `Write two equations with solution x = ${base.pairs[2].x}, y = ${base.pairs[2].y}.`, answer: `${base.writeItems[2].a}; ${base.writeItems[2].b}`, change: "Only the coefficients change." }
    ];
  } else if (variant.id === "error-spotting") {
    sequence = [
      { question: `A pupil says the solution to ${base.solveItems[0].a} and ${base.solveItems[0].b} is x = ${base.pairs[0].x + 1}, y = ${base.pairs[0].y}. Is that correct?`, answer: "No.", change: "Model checking in both equations." },
      { question: `Correct the solution to ${base.solveItems[1].a} and ${base.solveItems[1].b}.`, answer: `x = ${base.pairs[1].x}, y = ${base.pairs[1].y}`, change: "Only the pair changes." },
      { question: `Why must a simultaneous-equation solution satisfy both equations, not just one?`, answer: `Because the pair represents one point or value pair that works in both relationships at the same time.`, change: "Only the focus changes to the meaning." }
    ];
  } else {
    sequence = [
      { question: `Solve ${base.solveItems[0].a} and ${base.solveItems[0].b}.`, answer: `x = ${base.pairs[0].x}, y = ${base.pairs[0].y}`, change: "Model a simple elimination or substitution pair." },
      { question: `Solve ${base.solveItems[1].a} and ${base.solveItems[1].b}.`, answer: `x = ${base.pairs[1].x}, y = ${base.pairs[1].y}`, change: "Only the coefficients change." },
      { question: `Solve ${base.solveItems[2].a} and ${base.solveItems[2].b}.`, answer: `x = ${base.pairs[2].x}, y = ${base.pairs[2].y}`, change: "Only the signs change." }
    ];
  }
  return createTeachingSequence(topic, variant, sequence);
}

function generateSimultaneousEquationsIntro(_topic, variant, settings, difficultyKey) {
  const base = getSimultaneousEquationBase(settings, difficultyKey);
  if (variant.id === "which-pair") return { questions: base.whichQuestions.map((item, index) => ({ question: item.question, answer: item.answer, change: item.change || simultaneousEquationChange(index) })) };
  if (variant.id === "write-the-pair") return { questions: base.writeQuestions.map((item, index) => ({ question: item.question, answer: item.answer, change: item.change || simultaneousEquationChange(index) })) };
  if (variant.id === "error-spotting") return { questions: base.errorQuestions.map((item, index) => ({ question: item.question, answer: item.answer, change: item.change || simultaneousEquationChange(index) })) };
  return { questions: base.solveQuestions.map((item, index) => ({ question: item.question, answer: item.answer, change: item.change || simultaneousEquationChange(index) })) };
}

function getSimultaneousEquationBase(_settings, difficultyKey) {
  const pairs = Array.from({ length: 10 }, (_, index) => {
    const x = 1 + (index % 5);
    const y = 2 + (index % 4);
    const a1 = 1 + (index % 3);
    const b1 = 1 + ((index + 1) % 3);
    const a2 = 1 + ((index + 2) % 3);
    const b2 = difficultyKey === "easy" ? 1 + (index % 2) : 1 + ((index + 1) % 3);
    return {
      x, y,
      eq1: `${a1}x + ${b1}y = ${a1 * x + b1 * y}`,
      eq2: `${a2}x ${index % 2 === 0 ? "-" : "+"} ${b2}y = ${a2 * x + (index % 2 === 0 ? -b2 * y : b2 * y)}`
    };
  });
  const solveItems = pairs.map((item) => ({ a: item.eq1, b: item.eq2 }));
  const solveQuestions = solveItems.map((item, index) => ({ question: `Solve ${item.a} and ${item.b}.`, answer: `x = ${pairs[index].x}, y = ${pairs[index].y}`, change: index === 0 ? "Starting example." : index % 2 === 1 ? "Only the coefficients change." : "Only the sign in the second equation changes." }));
  const whichItems = pairs.map((item) => ({
    correctA: item.eq1,
    correctB: item.eq2,
    wrongA: item.eq1,
    wrongB: `${item.eq2.split("=")[0]}= ${Number(item.eq2.split("=")[1]) + 1}`
  }));
  const whichQuestions = pairs.map((item, index) => ({ question: `Which pair has solution x = ${item.x}, y = ${item.y}? A) ${whichItems[index].correctA} and ${whichItems[index].correctB} B) ${whichItems[index].wrongA} and ${whichItems[index].wrongB}`, answer: "A", change: index === 0 ? "Starting example." : index % 2 === 1 ? "Only the solution pair changes." : "Only the incorrect constant changes." }));
  const writeItems = pairs.map((item) => ({ a: item.eq1, b: item.eq2 }));
  const writeQuestions = pairs.map((item, index) => ({ question: `Write a pair of simultaneous equations with solution x = ${item.x}, y = ${item.y}.`, answer: `${writeItems[index].a}; ${writeItems[index].b}`, change: index === 0 ? "Starting example." : "Only the solution pair changes." }));
  const errorQuestions = pairs.map((item, index) => ({ question: `A pupil says the solution to ${item.eq1} and ${item.eq2} is x = ${item.x + 1}, y = ${item.y}. Correct the solution.`, answer: `x = ${item.x}, y = ${item.y}`, change: index === 0 ? "Starting example." : "Only the proposed x-value changes." }));
  return { pairs, solveItems, solveQuestions, whichItems, whichQuestions, writeItems, writeQuestions, errorQuestions };
}

function generatePercentageChangeTeaching(topic, variant, settings, difficultyKey) {
  const base = getPercentageChangeBase(settings, difficultyKey);
  let sequence;

  if (variant.id === "find-the-percentage-change") {
    sequence = [
      { question: `A quantity changes from ${base.cases[0].original} to ${base.cases[0].finalValue}. What is the percentage ${base.cases[0].mode}?`, answer: `${base.cases[0].percent}% ${base.cases[0].mode}`, change: "Model comparing the change against the original amount." },
      { question: `A quantity changes from ${base.cases[1].original} to ${base.cases[1].finalValue}. What is the percentage ${base.cases[1].mode}?`, answer: `${base.cases[1].percent}% ${base.cases[1].mode}`, change: "Only the percentage changes." },
      { question: `A quantity changes from ${base.cases[2].original} to ${base.cases[2].finalValue}. What is the percentage ${base.cases[2].mode}?`, answer: `${base.cases[2].percent}% ${base.cases[2].mode}`, change: "Only the direction changes." }
    ];
  } else if (variant.id === "reverse-percentage") {
    sequence = [
      { question: `After a ${base.cases[0].percent}% ${base.cases[0].mode}, a quantity is ${base.cases[0].finalValue}. What was the original value?`, answer: `${base.cases[0].original}`, change: "Model working back using the percentage multiplier." },
      { question: `After a ${base.cases[1].percent}% ${base.cases[1].mode}, a quantity is ${base.cases[1].finalValue}. What was the original value?`, answer: `${base.cases[1].original}`, change: "Only the percentage changes." },
      { question: `After a ${base.cases[2].percent}% ${base.cases[2].mode}, a quantity is ${base.cases[2].finalValue}. What was the original value?`, answer: `${base.cases[2].original}`, change: "Only the direction changes." }
    ];
  } else if (variant.id === "error-spotting") {
    sequence = [
      { question: `A pupil says ${base.cases[0].original} with a ${base.cases[0].percent}% ${base.cases[0].mode} becomes ${base.errorItems[0].wrongAnswer}. Correct the answer.`, answer: `${base.cases[0].finalValue}`, change: "Model checking the percentage change against the original amount." },
      { question: `A pupil says ${base.cases[1].original} with a ${base.cases[1].percent}% ${base.cases[1].mode} becomes ${base.errorItems[1].wrongAnswer}. Correct the answer.`, answer: `${base.cases[1].finalValue}`, change: "Only the percentage changes." },
      { question: `A pupil says ${base.cases[2].original} with a ${base.cases[2].percent}% ${base.cases[2].mode} becomes ${base.errorItems[2].wrongAnswer}. Correct the answer.`, answer: `${base.cases[2].finalValue}`, change: "Only the direction changes." }
    ];
  } else {
    sequence = [
      { question: `Increase ${base.cases[0].original} by ${base.cases[0].percent}%.`, answer: `${base.cases[0].finalValue}`, change: "Model finding the percentage part and combining it correctly." },
      { question: `Increase ${base.cases[1].original} by ${base.cases[1].percent}%.`, answer: `${base.cases[1].finalValue}`, change: "Only the percentage changes." },
      { question: `Decrease ${base.cases[2].original} by ${base.cases[2].percent}%.`, answer: `${base.cases[2].finalValue}`, change: "Only the direction changes." }
    ];
  }

  return createTeachingSequence(topic, variant, sequence);
}

function generatePercentageChange(_topic, variant, settings, difficultyKey) {
  const base = getPercentageChangeBase(settings, difficultyKey);
  if (variant.id === "find-the-percentage-change") return { questions: base.changeItems.map((item, index) => ({ question: item.question, answer: item.answer, change: item.change || percentageChangeTopicChange(index) })) };
  if (variant.id === "reverse-percentage") return { questions: base.reverseItems.map((item, index) => ({ question: item.question, answer: item.answer, change: item.change || percentageChangeTopicChange(index) })) };
  if (variant.id === "error-spotting") return { questions: base.errorItems.map((item, index) => ({ question: item.question, answer: item.answer, change: item.change || percentageChangeTopicChange(index) })) };
  return { questions: base.newAmountItems.map((item, index) => ({ question: item.question, answer: item.answer, change: item.change || percentageChangeTopicChange(index) })) };
}

function getPercentageChangeBase(settings, difficultyKey) {
  const generationOffset = settings?.generationCounter || 0;
  const originals = difficultyKey === "easy"
    ? [40, 60, 80, 100, 120, 160, 180, 200, 240, 300]
    : difficultyKey === "hard"
      ? [120, 150, 180, 200, 240, 300, 360, 400, 480, 600]
      : [80, 100, 120, 160, 180, 200, 240, 300, 360, 400];
  const percents = difficultyKey === "easy"
    ? [10, 20, 25, 50]
    : difficultyKey === "hard"
      ? [5, 10, 15, 20, 25]
      : [10, 15, 20, 25, 30];
  const cases = [];
  const groupCount = 6;

  for (let groupIndex = 0; groupIndex < groupCount; groupIndex += 1) {
    const original = originals[(generationOffset + groupIndex) % originals.length];
    const firstPercent = percents[(generationOffset + groupIndex) % percents.length];
    const secondPercent = percents[(generationOffset + groupIndex + 1) % percents.length];

    cases.push(
      { original, percent: firstPercent, mode: "increase", change: cases.length === 0 ? "Starting example." : "Only the original amount changes." },
      { original, percent: secondPercent, mode: "increase", change: "Only the percentage changes." },
      { original, percent: secondPercent, mode: "decrease", change: "Only the direction changes." },
      { original, percent: firstPercent, mode: "decrease", change: "Only the percentage changes." }
    );
  }

  const resolvedCases = cases.map((item) => ({
    ...item,
    finalValue: percentageChangedValue(item.original, item.percent, item.mode)
  }));

  const newAmountItems = resolvedCases.map((item) => ({
    question: `${capitalize(item.mode)} ${item.original} by ${item.percent}%.`,
    answer: `${item.finalValue}`,
    change: item.change
  }));

  const changeItems = resolvedCases.map((item) => ({
    question: `A quantity changes from ${item.original} to ${item.finalValue}. What is the percentage ${item.mode}?`,
    answer: `${item.percent}% ${item.mode}`,
    change: item.change
  }));

  const reverseItems = resolvedCases.map((item) => ({
    question: `After a ${item.percent}% ${item.mode}, a quantity is ${item.finalValue}. What was the original value?`,
    answer: `${item.original}`,
    change: item.change
  }));

  const errorItems = resolvedCases.map((item, index) => {
    const wrongAnswer = item.mode === "increase"
      ? (index % 2 === 0 ? item.original + item.percent : trimTrailingZero(item.original * (1 + item.percent / 10)))
      : (index % 2 === 0 ? item.original - item.percent : trimTrailingZero(item.original * (1 - item.percent / 10)));
    return {
      question: `A pupil says ${item.original} with a ${item.percent}% ${item.mode} becomes ${wrongAnswer}. Correct the answer.`,
      answer: `${item.finalValue}`,
      wrongAnswer: `${wrongAnswer}`,
      change: item.change
    };
  });

  return { cases: resolvedCases, newAmountItems, changeItems, reverseItems, errorItems };
}

function percentageChangedValue(original, percent, mode) {
  const multiplier = mode === "increase" ? 1 + (percent / 100) : 1 - (percent / 100);
  return trimTrailingZero(original * multiplier);
}

function generateRearrangingFormulaeTeaching(topic, variant, settings, difficultyKey) {
  const base = getRearrangingFormulaBase(settings, difficultyKey);
  let sequence;

  if (variant.id === "which-rearrangement") {
    sequence = [
      { question: `Which rearrangement is correct for ${base.items[0].formula}? A) ${base.items[0].rearranged} B) ${base.items[0].wrong}`, answer: "A", change: "Model undoing the visible operation in reverse." },
      { question: `Which rearrangement is correct for ${base.items[1].formula}? A) ${base.items[1].rearranged} B) ${base.items[1].wrong}`, answer: "A", change: "Only the constant changes." },
      { question: `Which rearrangement is correct for ${base.items[2].formula}? A) ${base.items[2].rearranged} B) ${base.items[2].wrong}`, answer: "A", change: "Only the sign changes." }
    ];
  } else if (variant.id === "find-the-subject-value") {
    sequence = [
      { question: `Given ${base.items[0].formula} and ${base.items[0].output} = ${base.items[0].outputValue}, find ${base.items[0].subject}.`, answer: `${base.items[0].subject} = ${base.items[0].subjectValue}`, change: "Model rearranging first, then substituting the known values." },
      { question: `Given ${base.items[1].formula} and ${base.items[1].output} = ${base.items[1].outputValue}, find ${base.items[1].subject}.`, answer: `${base.items[1].subject} = ${base.items[1].subjectValue}`, change: "Only the constant changes." },
      { question: `Given ${base.items[2].formula} and ${base.items[2].output} = ${base.items[2].outputValue}, find ${base.items[2].subject}.`, answer: `${base.items[2].subject} = ${base.items[2].subjectValue}`, change: "Only the sign changes." }
    ];
  } else if (variant.id === "error-spotting") {
    sequence = [
      { question: `A pupil rearranges ${base.items[0].formula} to ${base.items[0].wrong}. Correct the rearrangement.`, answer: base.items[0].rearranged, change: "Model checking whether the inverse operation and sign are correct." },
      { question: `A pupil rearranges ${base.items[1].formula} to ${base.items[1].wrong}. Correct the rearrangement.`, answer: base.items[1].rearranged, change: "Only the constant changes." },
      { question: `A pupil rearranges ${base.items[2].formula} to ${base.items[2].wrong}. Correct the rearrangement.`, answer: base.items[2].rearranged, change: "Only the sign changes." }
    ];
  } else {
    sequence = [
      { question: `Make ${base.items[0].subject} the subject in ${base.items[0].formula}.`, answer: base.items[0].rearranged, change: "Model isolating the subject with inverse operations." },
      { question: `Make ${base.items[1].subject} the subject in ${base.items[1].formula}.`, answer: base.items[1].rearranged, change: "Only the constant changes." },
      { question: `Make ${base.items[2].subject} the subject in ${base.items[2].formula}.`, answer: base.items[2].rearranged, change: "Only the sign changes." }
    ];
  }

  return createTeachingSequence(topic, variant, sequence);
}

function generateRearrangingFormulae(_topic, variant, settings, difficultyKey) {
  const base = getRearrangingFormulaBase(settings, difficultyKey);
  if (variant.id === "which-rearrangement") return { questions: base.whichItems.map((item, index) => ({ question: item.question, answer: item.answer, change: item.change || rearrangingFormulaChange(index) })) };
  if (variant.id === "find-the-subject-value") return { questions: base.valueItems.map((item, index) => ({ question: item.question, answer: item.answer, change: item.change || rearrangingFormulaChange(index) })) };
  if (variant.id === "error-spotting") return { questions: base.errorItems.map((item, index) => ({ question: item.question, answer: item.answer, change: item.change || rearrangingFormulaChange(index) })) };
  return { questions: base.subjectItems.map((item, index) => ({ question: item.question, answer: item.answer, change: item.change || rearrangingFormulaChange(index) })) };
}

function getRearrangingFormulaBase(settings, difficultyKey) {
  const specs = getRearrangingFormulaSpecs(difficultyKey, settings?.generationCounter || 0);
  const items = specs.map((spec) => buildRearrangingFormulaItem(spec));
  const subjectItems = items.map((item) => ({
    question: `Make ${item.subject} the subject in ${item.formula}.`,
    answer: item.rearranged,
    change: item.change
  }));
  const whichItems = items.map((item) => ({
    question: `Which rearrangement is correct for ${item.formula}? A) ${item.rearranged} B) ${item.wrong}`,
    answer: "A",
    change: item.change
  }));
  const valueItems = items.map((item) => ({
    question: `Given ${item.formula} and ${item.output} = ${item.outputValue}, find ${item.subject}.`,
    answer: `${item.subject} = ${item.subjectValue}`,
    change: item.change
  }));
  const errorItems = items.map((item) => ({
    question: `A pupil rearranges ${item.formula} to ${item.wrong}. Correct the rearrangement.`,
    answer: item.rearranged,
    change: item.change
  }));
  return { items, subjectItems, whichItems, valueItems, errorItems };
}

function getRearrangingFormulaSpecs(difficultyKey, generationOffset = 0) {
  const constants = difficultyKey === "easy"
    ? [4, 5, 6, 7, 8, 9, 10, 12]
    : difficultyKey === "hard"
      ? [8, 10, 12, 14, 16, 18, 20, 24]
      : [6, 8, 10, 12, 14, 16, 18, 20];
  const divisors = difficultyKey === "easy" ? [2, 4, 5] : difficultyKey === "hard" ? [4, 5, 6] : [3, 4, 6];
  const coeffs = difficultyKey === "easy" ? [2, 3] : difficultyKey === "hard" ? [3, 4, 5] : [2, 3, 4];
  const subjectLetters = ["x", "m", "p", "a", "t", "n"];
  const outputLetters = ["y", "q", "r", "b", "s", "v"];
  const specs = [];

  for (let groupIndex = 0; groupIndex < 6; groupIndex += 1) {
    const subject = subjectLetters[(generationOffset + groupIndex) % subjectLetters.length];
    const output = outputLetters[(generationOffset + groupIndex) % outputLetters.length];
    const constantA = constants[(generationOffset + groupIndex) % constants.length];
    const constantB = constants[(generationOffset + groupIndex + 1) % constants.length];
    const coeffA = coeffs[(generationOffset + groupIndex) % coeffs.length];
    const coeffB = coeffs[(generationOffset + groupIndex + 1) % coeffs.length];
    const divisor = divisors[(generationOffset + groupIndex) % divisors.length];
    const subjectValue = difficultyKey === "easy" ? 6 + groupIndex : difficultyKey === "hard" ? 10 + groupIndex : 8 + groupIndex;

    specs.push(
      { output, subject, type: "add", constant: constantA, subjectValue, change: specs.length === 0 ? "Starting example." : "Only the subject letter changes." },
      { output, subject, type: "subtract", constant: constantA, subjectValue: subjectValue + constantA, change: "Only the sign changes." },
      { output, subject, type: "coeff-minus", coeff: coeffA, constant: constantB, subjectValue: subjectValue + coeffA, change: "Only the coefficient structure changes." },
      { output, subject, type: "coeff-plus", coeff: coeffB, constant: constantB, subjectValue: subjectValue + coeffB, change: "Only the coefficient changes." }
    );

    if (groupIndex < 3) {
      specs.push(
        { output, subject, type: "divide", divisor, subjectValue: divisor * (subjectValue + 1), change: "Only the operation changes." },
        { output, subject, type: "divide-plus", divisor, constant: difficultyKey === "easy" ? 2 : 3, subjectValue: divisor * (subjectValue + 2), change: "Only one extra additive term is introduced." }
      );
    }
  }

  return specs;
}

function buildRearrangingFormulaItem(spec) {
  const formula = formatFormulaFromSpec(spec);
  const rearranged = formatRearrangedFromSpec(spec);
  const wrong = formatWrongRearrangementFromSpec(spec);
  const outputValue = trimTrailingZero(evaluateFormulaOutput(spec, spec.subjectValue));
  return {
    ...spec,
    formula,
    rearranged,
    wrong,
    outputValue
  };
}

function formatFormulaFromSpec(spec) {
  if (spec.type === "add") return `${spec.output} = ${spec.subject} + ${spec.constant}`;
  if (spec.type === "subtract") return `${spec.output} = ${spec.subject} - ${spec.constant}`;
  if (spec.type === "coeff-minus") return `${spec.output} = ${spec.coeff}${spec.subject} - ${spec.constant}`;
  if (spec.type === "coeff-plus") return `${spec.output} = ${spec.coeff}${spec.subject} + ${spec.constant}`;
  if (spec.type === "divide") return `${spec.output} = ${spec.subject} / ${spec.divisor}`;
  return `${spec.output} = ${spec.subject} / ${spec.divisor} + ${spec.constant}`;
}

function formatRearrangedFromSpec(spec) {
  if (spec.type === "add") return `${spec.subject} = ${spec.output} - ${spec.constant}`;
  if (spec.type === "subtract") return `${spec.subject} = ${spec.output} + ${spec.constant}`;
  if (spec.type === "coeff-minus") return `${spec.subject} = (${spec.output} + ${spec.constant}) / ${spec.coeff}`;
  if (spec.type === "coeff-plus") return `${spec.subject} = (${spec.output} - ${spec.constant}) / ${spec.coeff}`;
  if (spec.type === "divide") return `${spec.subject} = ${spec.output} * ${spec.divisor}`;
  return `${spec.subject} = (${spec.output} - ${spec.constant}) * ${spec.divisor}`;
}

function formatWrongRearrangementFromSpec(spec) {
  if (spec.type === "add") return `${spec.subject} = ${spec.output} + ${spec.constant}`;
  if (spec.type === "subtract") return `${spec.subject} = ${spec.output} - ${spec.constant}`;
  if (spec.type === "coeff-minus") return `${spec.subject} = (${spec.output} - ${spec.constant}) / ${spec.coeff}`;
  if (spec.type === "coeff-plus") return `${spec.subject} = (${spec.output} + ${spec.constant}) / ${spec.coeff}`;
  if (spec.type === "divide") return `${spec.subject} = ${spec.output} / ${spec.divisor}`;
  return `${spec.subject} = ${spec.output} * ${spec.divisor} + ${spec.constant}`;
}

function evaluateFormulaOutput(spec, subjectValue) {
  if (spec.type === "add") return subjectValue + spec.constant;
  if (spec.type === "subtract") return subjectValue - spec.constant;
  if (spec.type === "coeff-minus") return (spec.coeff * subjectValue) - spec.constant;
  if (spec.type === "coeff-plus") return (spec.coeff * subjectValue) + spec.constant;
  if (spec.type === "divide") return subjectValue / spec.divisor;
  return (subjectValue / spec.divisor) + spec.constant;
}

function percentageChangeTopicChange(index) { return ["Only the percentage changes.", "Only the direction changes.", "Only the original amount changes.", "Only the method changes."][index % 4]; }
function rearrangingFormulaChange(index) { return ["Only the constant changes.", "Only the sign changes.", "Only the coefficient changes.", "Only the operation changes."][index % 4]; }
function percentageAmountChange(index) { return ["Only the percentage changes.", "Only the amount changes.", "Only the method changes.", "Only the missing part changes."][index % 4]; }
function standardFormChange(index) { return ["Only the coefficient changes.", "Only the exponent changes.", "Only the conversion direction changes.", "Only the comparison target changes."][index % 4]; }
function indicesChange(index) { return ["Only the base changes.", "Only the exponent changes.", "Only the operation changes.", "Only the missing part changes."][index % 4]; }
function twoStepEquationChange(index) { return ["Only the constant changes.", "Only the coefficient changes.", "Only the sign changes.", "Only the layout changes."][index % 4]; }
function straightLineGraphChange(index) { return ["Only the x-value changes.", "Only the gradient changes.", "Only the intercept changes.", "Only the representation changes."][index % 4]; }
function pythagorasChange(index) { return ["Only the side lengths change.", "Only the unknown side changes.", "Only the triangle comparison changes.", "Only the reasoning focus changes."][index % 4]; }
function compoundMeasureChange(index) { return ["Only the measure type changes.", "Only the missing quantity changes.", "Only the units change.", "Only the comparison changes."][index % 4]; }
function simultaneousEquationChange(index) { return ["Only the coefficients change.", "Only the sign changes.", "Only the solution pair changes.", "Only the checking focus changes."][index % 4]; }

function extractNumericAnswer(answerText) {
  const match = String(answerText).match(/-?\d+(\.\d+)?/);
  return match ? Number(match[0]) : 0;
}

function generatePercentageAmountReasoning(_topic, variant, _settings, _difficultyKey, _worksheet) {
  if (variant?.id === "compare-methods") {
    return [
      { question: `Why is 10% often a useful starting point when finding other percentages of an amount?`, answer: `Because many percentages can be built from 10%, such as 20%, 30%, 5%, or 15%.`, change: "Reasoning" },
      { question: `A pupil uses the same method for 25% and 20%. Explain why those percentages suggest different efficient routes.`, answer: `25% is naturally linked to quarters, while 20% is linked to fifths or 10% doubled.`, change: "Reasoning" },
      { question: `Explain how you would decide whether to use halving, quartering, or building from 10% in a percentage question.`, answer: `Choose the method that matches the percentage structure most directly.`, change: "Reasoning" }
    ];
  }
  if (variant?.id === "missing-value") {
    return [
      { question: `Why does knowing 10% or 25% of an amount help you work back to the whole?`, answer: `Because those percentages represent known fractions of the whole that can be scaled back up.`, change: "Reasoning" },
      { question: `A pupil says if 20% of a number is 14, the whole is 24. Explain the error.`, answer: `20% is one fifth, so the whole must be five times 14, not 10 more.`, change: "Reasoning" },
      { question: `Explain the difference between finding a percentage of an amount and rebuilding the whole from a known percentage part.`, answer: `One scales down from the whole; the other scales up from a known part to the whole.`, change: "Reasoning" }
    ];
  }
  if (variant?.id === "error-spotting") {
    return [
      { question: `What is the most common place-value mistake when finding 10% of an amount?`, answer: `Treating 10% as the whole amount instead of one tenth of it.`, change: "Reasoning" },
      { question: `Why can a wrong percentage answer still look plausible at first glance?`, answer: `Because it may still be a reasonable-looking number unless checked against the size of the whole and the percentage.`, change: "Reasoning" },
      { question: `How can benchmark percentages help you quickly reject an incorrect answer?`, answer: `They let you estimate whether the answer should be bigger or smaller than familiar fractions of the whole.`, change: "Reasoning" }
    ];
  }
  return [
    { question: `Why is finding 50% of an amount often easier than finding 35% directly?`, answer: `Because 50% is just half, while 35% usually needs to be built from easier benchmark percentages.`, change: "Reasoning" },
    { question: `A pupil says 75% of an amount must be larger than the whole. Explain why that is wrong.`, answer: `75% is less than 100%, so it must be less than the whole amount.`, change: "Reasoning" },
    { question: `Describe one efficient method for finding 15% of an amount.`, answer: `Find 10% and 5% and add them.`, change: "Reasoning" }
  ];
}

function generateStandardFormReasoning(_topic, variant, _settings, _difficultyKey, _worksheet) {
  if (variant?.id === "compare-values") {
    return [
      { question: `When comparing two numbers in standard form, why is the power of ten often the first thing to check?`, answer: `Because it shows the size of the number before you compare coefficients.`, change: "Reasoning" },
      { question: `If two numbers have the same power of ten, what decides which is greater?`, answer: `The coefficient.`, change: "Reasoning" },
      { question: `Why can a larger-looking coefficient still represent a smaller number in standard form?`, answer: `Because a smaller exponent can make the overall number smaller.`, change: "Reasoning" }
    ];
  }
  if (variant?.id === "error-spotting") {
    return [
      { question: `Why is 43 x 10^4 not written in standard form even if it has the correct value?`, answer: `Because the coefficient must be at least 1 but less than 10.`, change: "Reasoning" },
      { question: `What does the exponent tell you in a standard form number?`, answer: `How many places the decimal point has shifted, or the power of ten multiplying the coefficient.`, change: "Reasoning" },
      { question: `How can you check quickly whether a standard form answer is sensible?`, answer: `Estimate the size of the original number and check the coefficient and exponent match that size.`, change: "Reasoning" }
    ];
  }
  return [
    { question: `Why must the coefficient in standard form be between 1 and 10?`, answer: `So each number has one consistent standard form representation.`, change: "Reasoning" },
    { question: `What changes when you move from a large ordinary number to its standard form?`, answer: `The decimal point position and the power of ten used to compensate for that move.`, change: "Reasoning" },
    { question: `Why are very large and very small numbers often written in standard form?`, answer: `Because it makes them easier to read, compare, and calculate with.`, change: "Reasoning" }
  ];
}

function generateIndicesReasoning(_topic, variant, _settings, _difficultyKey, _worksheet) {
  if (variant?.id === "apply-index-laws") {
    return [
      { question: `Why do the powers add when multiplying the same base?`, answer: `Because you are combining repeated multiplication of the same base into one longer product.`, change: "Reasoning" },
      { question: `Why do the powers subtract when dividing the same base?`, answer: `Because matching factors cancel, leaving only the difference in repeated factors.`, change: "Reasoning" },
      { question: `Why is it important that the base is the same before using a simple index law?`, answer: `Because the laws describe repeated multiplication of the same number or variable.`, change: "Reasoning" }
    ];
  }
  if (variant?.id === "missing-value") {
    return [
      { question: `How can a missing exponent question show whether you really understand an index law?`, answer: `Because you must reason about the relationship between the powers, not just calculate a final value.`, change: "Reasoning" },
      { question: `Why is 2^3 not the same as 3^2 even though both use 2 and 3?`, answer: `The base and exponent have different roles, so swapping them changes the value.`, change: "Reasoning" },
      { question: `What is the difference between 3 x 3 x 3 and 3^3 in meaning?`, answer: `They mean the same value, but the index form is a shorter notation for repeated multiplication.`, change: "Reasoning" }
    ];
  }
  return [
    { question: `Why is index notation useful compared with writing out repeated multiplication each time?`, answer: `It is shorter, clearer, and makes patterns in powers easier to see.`, change: "Reasoning" },
    { question: `A pupil says 4^2 means 4 x 2. Explain why that is incorrect.`, answer: `It means 4 multiplied by itself twice, so 4 x 4.`, change: "Reasoning" },
    { question: `How can you tell from index notation whether the value is likely to be large or small?`, answer: `Look at the base and exponent together because repeated multiplication grows quickly as either increases.`, change: "Reasoning" }
  ];
}

function generateTwoStepEquationReasoning(_topic, variant, _settings, _difficultyKey, _worksheet) {
  if (variant?.id === "which-equation") {
    return [
      { question: `Why is substitution a useful check when deciding which equation has a given solution?`, answer: `Because you can test the proposed value directly in each equation.`, change: "Reasoning" },
      { question: `Why can two equations that look similar have different solutions?`, answer: `A small change to a coefficient, constant, or sign changes the balance of the equation.`, change: "Reasoning" },
      { question: `What should you check first when a value is claimed to solve a two-step equation?`, answer: `Check whether both sides are equal after substituting the value.`, change: "Reasoning" }
    ];
  }
  if (variant?.id === "write-the-equation") {
    return [
      { question: `Why does writing an equation from a known solution deepen understanding?`, answer: `Because you must work backwards from the solution and preserve the equation structure.`, change: "Reasoning" },
      { question: `How can two different two-step equations share the same solution?`, answer: `They can use different operations but still balance when the same value is substituted.`, change: "Reasoning" },
      { question: `What is the easiest way to check whether the equation you wrote is valid?`, answer: `Substitute the stated solution and see if both sides match.`, change: "Reasoning" }
    ];
  }
  if (variant?.id === "error-spotting") {
    return [
      { question: `Why must two-step equations be undone in reverse order?`, answer: `Because the last operation applied to the variable must be undone first.`, change: "Reasoning" },
      { question: `A pupil divides before removing the constant. Explain why that can fail.`, answer: `The expression is still grouped by the outer structure, so the constant must be removed before isolating x.`, change: "Reasoning" },
      { question: `How can balancing the equation help avoid common mistakes?`, answer: `It keeps both sides equal while you undo each step carefully.`, change: "Reasoning" }
    ];
  }
  return [
    { question: `What is the main difference between solving a one-step and a two-step equation?`, answer: `A two-step equation needs two inverse-operation steps rather than one.`, change: "Reasoning" },
    { question: `Why is it useful to identify the outermost operation first in a two-step equation?`, answer: `It tells you the first step to undo.`, change: "Reasoning" },
    { question: `How can you check a final solution quickly?`, answer: `Substitute it back into the original equation.`, change: "Reasoning" }
  ];
}

function generateStraightLineGraphReasoning(_topic, variant, _settings, _difficultyKey, _worksheet) {
  if (variant?.id === "read-gradient") {
    return [
      { question: `What does the gradient of a straight line tell you?`, answer: `How much y changes for each increase of 1 in x.`, change: "Reasoning" },
      { question: `Why do two points on the same straight line show the same gradient throughout the line?`, answer: `Because the line changes at a constant rate.`, change: "Reasoning" },
      { question: `How can you tell from plotted points whether a line is steeper?`, answer: `The rise per step in x is larger.`, change: "Reasoning" }
    ];
  }
  if (variant?.id === "match-equation") {
    return [
      { question: `Why is the intercept useful when matching a line to an equation?`, answer: `It shows the y-value when x = 0, which narrows the equation quickly.`, change: "Reasoning" },
      { question: `If two lines have the same gradient, what must you compare next to tell them apart?`, answer: `Their intercepts.`, change: "Reasoning" },
      { question: `How can a table of values help you identify a line equation?`, answer: `It shows the constant change and where the line starts.`, change: "Reasoning" }
    ];
  }
  if (variant?.id === "missing-point") {
    return [
      { question: `Why does a missing-point question still rely on the same linear rule?`, answer: `Because every point on the line must satisfy the same equation.`, change: "Reasoning" },
      { question: `How can one known point and a gradient help you predict another point?`, answer: `Move one step in x and adjust y by the gradient.`, change: "Reasoning" },
      { question: `Why is a straight-line graph easier to predict from than a non-linear graph?`, answer: `Because its change is constant.`, change: "Reasoning" }
    ];
  }
  return [
    { question: `Why is a table of values useful before plotting a straight-line graph?`, answer: `It organises x and y pairs so the linear pattern is easier to see.`, change: "Reasoning" },
    { question: `What stays the same in the y-values of a straight line with constant gradient?`, answer: `The change between consecutive y-values for equal x-steps.`, change: "Reasoning" },
    { question: `How can you tell from an equation whether a line rises or falls as x increases?`, answer: `A positive gradient rises; a negative gradient falls.`, change: "Reasoning" }
  ];
}

function generatePythagorasReasoning(_topic, variant, _settings, _difficultyKey, _worksheet) {
  if (variant?.id === "error-spotting") {
    return [
      { question: `Why is adding side lengths directly not enough in Pythagoras?`, answer: `Because the theorem relates the squares of the side lengths, not the lengths themselves.`, change: "Reasoning" },
      { question: `Why must you identify the hypotenuse correctly before using the theorem?`, answer: `Because it is the side whose square equals the sum of the squares of the other two.`, change: "Reasoning" },
      { question: `How can a known triple help you spot an incorrect Pythagoras answer quickly?`, answer: `It provides a familiar check against the expected result.`, change: "Reasoning" }
    ];
  }
  if (variant?.id === "compare-triangles") {
    return [
      { question: `Why does increasing one shorter side increase the hypotenuse?`, answer: `Because the sum of the squares on the shorter sides increases.`, change: "Reasoning" },
      { question: `Can two different right-angled triangles have the same hypotenuse? Explain.`, answer: `Yes, if different shorter side combinations produce the same sum of squares.`, change: "Reasoning" },
      { question: `What is more important for the hypotenuse: one side alone or the combined squares of both shorter sides?`, answer: `The combined squares of both shorter sides.`, change: "Reasoning" }
    ];
  }
  return [
    { question: `Why can Pythagoras only be used on right-angled triangles?`, answer: `Because the theorem depends on the right angle in that triangle.`, change: "Reasoning" },
    { question: `How can you tell whether the missing side should be longer or shorter before calculating?`, answer: `The hypotenuse is always the longest side; a shorter side must be less than the hypotenuse.`, change: "Reasoning" },
    { question: `Why does finding a shorter side involve subtraction instead of addition in Pythagoras?`, answer: `Because you are removing one square from the hypotenuse square total.`, change: "Reasoning" }
  ];
}

function generateCompoundMeasureReasoning(_topic, variant, _settings, _difficultyKey, _worksheet) {
  if (variant?.id === "rearrange-the-formula") {
    return [
      { question: `Why is rearranging a compound-measure formula really about identifying the unknown?`, answer: `Because the formula stays the same relationship; only the target quantity changes.`, change: "Reasoning" },
      { question: `Why can multiplying be the correct step for one missing quantity but dividing for another?`, answer: `It depends on which value is being isolated in the relationship.`, change: "Reasoning" },
      { question: `How can units help you decide whether a rearranged formula is sensible?`, answer: `The resulting unit should match the unknown quantity.`, change: "Reasoning" }
    ];
  }
  if (variant?.id === "compare-rates") {
    return [
      { question: `Why is it not enough to compare only distance or only time when comparing speeds?`, answer: `Speed depends on both quantities together as a rate.`, change: "Reasoning" },
      { question: `What makes a rate comparison harder than a direct size comparison?`, answer: `You must consider the relationship between two quantities, not just one value.`, change: "Reasoning" },
      { question: `How can converting to a unit rate help with rate comparisons?`, answer: `It puts both situations on the same basis.`, change: "Reasoning" }
    ];
  }
  return [
    { question: `Why are speed, density, and pressure called compound measures?`, answer: `Because each combines two different quantities into one rate or measure.`, change: "Reasoning" },
    { question: `What is the advantage of writing the formula before calculating a compound measure?`, answer: `It clarifies which quantities are needed and how they are connected.`, change: "Reasoning" },
    { question: `How can unit labels help you avoid mistakes in compound-measure questions?`, answer: `They show whether the operation and final measure make sense.`, change: "Reasoning" }
  ];
}

function generateSimultaneousEquationReasoning(_topic, variant, _settings, _difficultyKey, _worksheet) {
  if (variant?.id === "which-pair") {
    return [
      { question: `Why must a claimed simultaneous-equation solution be checked in both equations?`, answer: `Because it must satisfy both relationships at the same time.`, change: "Reasoning" },
      { question: `Why can one wrong sign in an equation pair change the solution completely?`, answer: `Because it changes the balance between x and y across the whole pair.`, change: "Reasoning" },
      { question: `What is the quickest way to test a proposed solution pair?`, answer: `Substitute x and y into both equations.`, change: "Reasoning" }
    ];
  }
  if (variant?.id === "write-the-pair") {
    return [
      { question: `Why is writing a pair from a known solution a strong check of understanding?`, answer: `Because you must create two valid relationships that meet at the same point.`, change: "Reasoning" },
      { question: `Can many different pairs of simultaneous equations share the same solution?`, answer: `Yes, provided both equations are true for the same x and y values.`, change: "Reasoning" },
      { question: `How can you verify a pair you have written yourself?`, answer: `Substitute the target solution into both equations.`, change: "Reasoning" }
    ];
  }
  if (variant?.id === "error-spotting") {
    return [
      { question: `Why can a solution that works in one equation still be wrong overall?`, answer: `Because simultaneous equations require one pair that works in both equations.`, change: "Reasoning" },
      { question: `What is the most common checking mistake after solving a simultaneous pair?`, answer: `Only checking one equation instead of both.`, change: "Reasoning" },
      { question: `Why is it useful to write the final answer as both x and y together?`, answer: `Because the solution is an ordered pair, not two unrelated answers.`, change: "Reasoning" }
    ];
  }
  return [
    { question: `What does the word "simultaneous" mean in simultaneous equations?`, answer: `The same x and y values work in both equations at the same time.`, change: "Reasoning" },
    { question: `Why do simultaneous equations often produce one pair of values rather than one value?`, answer: `Because there are two variables being solved together.`, change: "Reasoning" },
    { question: `How can elimination or substitution both lead to the same final answer?`, answer: `They are different methods for isolating the same solution pair.`, change: "Reasoning" }
  ];
}

function generatePercentageChangeReasoning(_topic, variant, _settings, _difficultyKey, _worksheet) {
  if (variant?.id === "find-the-percentage-change") {
    return [
      { question: `Why must the percentage change be compared with the original amount rather than the final amount?`, answer: `Because percentage change describes how much the original amount has changed by.`, change: "Reasoning" },
      { question: `A quantity goes from 80 to 100. Why is the percentage increase not 20%?`, answer: `The increase is 20, but 20 is a quarter of 80, so the increase is 25%.`, change: "Reasoning" },
      { question: `How can knowing common fraction-percentage links help you spot a percentage change quickly?`, answer: `They help you recognise when the change is a half, quarter, fifth, or tenth of the original amount.`, change: "Reasoning" }
    ];
  }
  if (variant?.id === "reverse-percentage") {
    return [
      { question: `Why is reverse percentage not the same as simply undoing by subtracting the percentage number?`, answer: `Because the percentage change acts multiplicatively through a multiplier, not by adding or subtracting the percent itself.`, change: "Reasoning" },
      { question: `If a price after a 20% increase is 96, why is dividing by 1.2 the correct reverse step?`, answer: `Because 96 represents 120% of the original value.`, change: "Reasoning" },
      { question: `How can you check a reverse-percentage answer quickly?`, answer: `Apply the stated percentage increase or decrease to your original answer and see whether it matches the final value.`, change: "Reasoning" }
    ];
  }
  if (variant?.id === "error-spotting") {
    return [
      { question: `What is the most common mistake when increasing or decreasing by a percentage?`, answer: `Treating the percentage as a fixed number to add or subtract instead of a proportion of the original amount.`, change: "Reasoning" },
      { question: `Why can an incorrect percentage-change answer still look plausible?`, answer: `Because it may be close in size even though the method is wrong, especially if the original number is not checked carefully.`, change: "Reasoning" },
      { question: `What is one reliable way to reject a wrong percentage-change answer?`, answer: `Estimate the change first and compare whether the answer is sensible for that percentage of the original amount.`, change: "Reasoning" }
    ];
  }
  return [
    { question: `Why is a percentage multiplier often an efficient method for percentage change?`, answer: `It combines the original amount and the change in one calculation.`, change: "Reasoning" },
    { question: `What is the difference between a 15% increase and a 15% decrease in method?`, answer: `The increase uses a multiplier above 1, while the decrease uses a multiplier below 1.`, change: "Reasoning" },
    { question: `How can benchmark percentages help you judge whether a final answer is sensible?`, answer: `They let you estimate whether the final amount should be a little bigger, much bigger, or smaller than the original.`, change: "Reasoning" }
  ];
}

function generateRearrangingFormulaReasoning(_topic, variant, _settings, _difficultyKey, _worksheet) {
  if (variant?.id === "which-rearrangement") {
    return [
      { question: `What is the first thing to check when deciding whether a rearrangement is correct?`, answer: `Check whether the target subject is isolated on one side of the equation.`, change: "Reasoning" },
      { question: `Why can one incorrect sign make a rearranged formula wrong even if the letters look right?`, answer: `Because rearranging depends on inverse operations, so the sign must reverse correctly when terms move.`, change: "Reasoning" },
      { question: `How can substitution help you test whether a rearranged formula is correct?`, answer: `Choose values, use one form to calculate, and then see if the rearranged form recovers the same subject value.`, change: "Reasoning" }
    ];
  }
  if (variant?.id === "find-the-subject-value") {
    return [
      { question: `Why is it often safer to rearrange fully before substituting numbers?`, answer: `Because it keeps the structure clear and reduces the chance of undoing steps in the wrong order.`, change: "Reasoning" },
      { question: `A formula has a coefficient and a constant. Why must the constant be undone before dividing by the coefficient?`, answer: `Because the constant is outside the multiplication with the subject, so it has to be removed first.`, change: "Reasoning" },
      { question: `How can you check a value found from a rearranged formula?`, answer: `Substitute it back into the original formula and verify that it produces the stated known value.`, change: "Reasoning" }
    ];
  }
  if (variant?.id === "error-spotting") {
    return [
      { question: `Why do brackets matter in rearranged formulas such as x = (y - 6) / 3?`, answer: `They show the entire term that must be undone before the final division or multiplication.`, change: "Reasoning" },
      { question: `What is the most common structural mistake when rearranging a linear formula?`, answer: `Undoing operations in the wrong order or reversing a sign incorrectly.`, change: "Reasoning" },
      { question: `How can reading the original formula from the subject outward help prevent mistakes?`, answer: `It reveals the order in which operations were applied, so you can reverse them accurately.`, change: "Reasoning" }
    ];
  }
  return [
    { question: `What does it mean to make a letter the subject of a formula?`, answer: `It means isolating that letter so it stands alone on one side of the equation.`, change: "Reasoning" },
    { question: `Why is rearranging a formula really an inverse-operation task?`, answer: `Because you undo the operations that are attached to the subject, in reverse order.`, change: "Reasoning" },
    { question: `Why do two formulas that look different sometimes represent the same relationship?`, answer: `Because one may be a rearranged version of the other with the same equality preserved.`, change: "Reasoning" }
  ];
}

function buildReasoningSet(topic, variant, settings, difficultyKey, worksheet) {
  const builder = reasoningGenerators[topic.generatorType] || generateGenericReasoning;
  const base = builder(topic, variant, settings, difficultyKey, worksheet).slice(0, 3);
  if (sharedReasoningTopics.has(topic.generatorType)) {
    return buildVariantAwareReasoningFallback(topic, variant, worksheet, base);
  }
  return base;
}

const reasoningGenerators = {
  "equivalent-fractions": generateEquivalentFractionsReasoning,
  "compare-order-fractions": generateFractionComparisonReasoning,
  "square-cube-numbers": generatePowerReasoning,
  "four-operations-integers": generateIntegerOperationReasoning,
  "compare-order-decimals": generateDecimalComparisonReasoning,
  "multiply-fractions-integers": generateFractionMultiplyReasoning,
  "fraction-of-an-amount": generateFractionOfAmountReasoning,
  "area-rectangles-compound": generateAreaReasoning,
  transformations: generateTransformationReasoning,
  "tables-and-charts": generateDataDisplayReasoning,
  "mean-median-mode-range": generateAveragesReasoning,
  "basic-probability-scale": generateProbabilityReasoning,
  "compare-order-percentages": generatePercentageReasoning,
  "metric-unit-conversions": generateMetricReasoning,
  "area-triangles-parallelograms": generateAreaReasoning,
  "scaling-multiplicative-reasoning": generateScalingReasoning,
  "proportion-problems": generateProportionReasoning,
  "fraction-decimal-conversions": generateFractionDecimalConversionReasoning,
  "nets-and-3d-shapes": generateNets3DReasoning,
  "symmetry-reflection-properties": generateSymmetryReflectionReasoning,
  "stem-leaf-frequency": generateStemLeafReasoning,
  "relative-frequency-intro": generateRelativeFrequencyReasoning,
  "percentages-of-amounts": generatePercentageAmountReasoning,
  "standard-form-intro": generateStandardFormReasoning,
  "indices-laws-intro": generateIndicesReasoning,
  "two-step-equations": generateTwoStepEquationReasoning,
  "straight-line-graphs-intro": generateStraightLineGraphReasoning,
  pythagoras: generatePythagorasReasoning,
  "compound-measures": generateCompoundMeasureReasoning,
  "simultaneous-equations-intro": generateSimultaneousEquationReasoning,
  "percentage-change": generatePercentageChangeReasoning,
  "rearranging-formulae": generateRearrangingFormulaReasoning,
  "add-subtract-fractions": generateFractionOperationReasoning,
  "ratio-notation": generateRatioReasoning,
  "order-of-operations": generateOrderReasoning,
  "one-step-equations": generateEquationReasoning,
  "expanding-brackets": generateExpandingReasoning,
  "negative-numbers": generateNegativeReasoning,
  perimeter: generatePerimeterReasoning,
  "angle-facts": generateAngleReasoning,
  "properties-2d-shapes": generateShapeReasoning,
  "coordinates-four-quadrants": generateCoordinateReasoning,
  "place-value-integers": generatePlaceValueReasoning,
  "place-value-decimals": generatePlaceValueReasoning,
  "factors-multiples-primes": generateNumberPropertyReasoning,
  "algebraic-notation": generateAlgebraicNotationReasoning,
  "collecting-like-terms": generateLikeTermsReasoning,
  sequences: generateSequenceReasoning,
  "function-machines": generateFunctionMachineReasoning,
  "fdp-links": generateFdpReasoning,
  substitution: generateSubstitutionReasoning,
  "decimal-operations": generateDecimalOperationReasoning
};

const sharedReasoningTopics = new Set([
  "compare-order-fractions",
  "add-subtract-fractions",
  "ratio-notation",
  "one-step-equations",
  "perimeter",
  "angle-facts",
  "properties-2d-shapes",
  "coordinates-four-quadrants",
  "place-value-integers",
  "place-value-decimals",
  "factors-multiples-primes",
  "algebraic-notation",
  "collecting-like-terms",
  "fdp-links",
  "square-cube-numbers",
  "transformations",
  "tables-and-charts",
  "compare-order-percentages",
  "metric-unit-conversions",
  "area-triangles-parallelograms",
  "scaling-multiplicative-reasoning",
  "proportion-problems",
  "nets-and-3d-shapes",
  "symmetry-reflection-properties",
  "stem-leaf-frequency",
  "relative-frequency-intro"
]);

function buildVariantAwareReasoningFallback(topic, variant, worksheet, defaults) {
  const variantId = variant?.id || "";
  const variantLabel = variant?.label || "this sequence";
  const topicLabel = topic?.label || "this topic";
  const exampleA = worksheet?.questions?.[0]?.question ? renderPlainMath(worksheet.questions[0].question) : null;
  const exampleB = worksheet?.questions?.[1]?.question ? renderPlainMath(worksheet.questions[1].question) : null;

  const useDefaults = () => defaults.slice(0, 3);

  if (variantId.includes("missing") || variantId === "find-the-input") {
    return [
      {
        question: `What do you need to know about the structure of a ${variantLabel.toLowerCase()} question before you can find the missing value correctly?`,
        answer: `You need to identify which relationship stays fixed and which quantity is unknown, so you can work backwards or use the correct rule consistently.`,
        change: "Reasoning"
      },
      {
        question: `A pupil finds the missing value by using only one visible number and ignoring the rest of the structure. Why can that lead to an error?`,
        answer: `Because missing-value questions depend on the full relationship, not just one number. The answer has to fit the whole structure, not a partial guess.`,
        change: "Reasoning"
      },
      {
        question: exampleA
          ? `Explain how you would check your answer in a question like "${exampleA}".`
          : `Explain how you would check that a missing-value answer is correct.`,
        answer: `Substitute the missing value back into the original structure and verify that all the given information is satisfied.`,
        change: "Reasoning"
      }
    ];
  }

  if (variantId.includes("error") || variantId.includes("true-false")) {
    return [
      {
        question: `Why is it useful to explain the misconception in a ${variantLabel.toLowerCase()} question rather than only giving the correct answer?`,
        answer: `Because identifying the misconception shows which idea was misunderstood, which helps prevent the same error happening again.`,
        change: "Reasoning"
      },
      {
        question: `What is the difference between showing that an answer is wrong and explaining why it is wrong?`,
        answer: `Showing it is wrong gives the correction, while explaining why it is wrong identifies the faulty reasoning or rule behind the mistake.`,
        change: "Reasoning"
      },
      {
        question: `In ${topicLabel.toLowerCase()}, what kind of misunderstanding would you expect to see most often in a ${variantLabel.toLowerCase()} question?`,
        answer: `Accept a valid misconception linked to the topic and sequence, with explanation of why it would lead to an incorrect answer.`,
        change: "Reasoning"
      }
    ];
  }

  if (variantId.includes("compare") || variantId.includes("which") || variantId.includes("choose") || variantId.includes("identify")) {
    return [
      {
        question: `Why is it important to compare structure as well as values in a ${variantLabel.toLowerCase()} question?`,
        answer: `Because two examples can look similar on the surface but behave differently mathematically when their structure changes.`,
        change: "Reasoning"
      },
      {
        question: `A pupil picks an answer just because one number looks larger or more familiar. Why can that be unreliable in ${topicLabel.toLowerCase()}?`,
        answer: `Because the correct choice depends on the mathematical relationship, not just on a single number standing out.`,
        change: "Reasoning"
      },
      {
        question: exampleA && exampleB
          ? `Compare "${exampleA}" and "${exampleB}". What should you focus on first to decide between them?`
          : `What should you focus on first when deciding between two options in a ${variantLabel.toLowerCase()} sequence?`,
        answer: `Focus first on the mathematical relationship or rule that the sequence is testing, then compare how each option fits that rule.`,
        change: "Reasoning"
      }
    ];
  }

  if (variantId.includes("write") || variantId.includes("build") || variantId.includes("create")) {
    return [
      {
        question: `Why is a ${variantLabel.toLowerCase()} question usually harder than just answering a fluency question?`,
        answer: `Because you have to generate an example that fits the rule yourself, not just recognise or calculate from a given example.`,
        change: "Reasoning"
      },
      {
        question: `How can you check whether your own example really belongs in the ${variantLabel.toLowerCase()} sequence?`,
        answer: `Test it against the same rule, pattern, or property that earlier examples in the sequence were using.`,
        change: "Reasoning"
      },
      {
        question: `Why can two different examples both be correct in a ${variantLabel.toLowerCase()} task?`,
        answer: `Because many different examples may satisfy the same mathematical condition, as long as the underlying rule is met.`,
        change: "Reasoning"
      }
    ];
  }

  if (variantId.includes("reverse") || variantId.includes("reflection")) {
    return [
      {
        question: `Why does a ${variantLabel.toLowerCase()} question often require you to think in the opposite direction from the original process?`,
        answer: `Because you need to undo or mirror the original structure rather than simply repeat the same steps forwards.`,
        change: "Reasoning"
      },
      {
        question: `A pupil repeats the original step instead of reversing it. Why does that usually fail?`,
        answer: `Because reverse questions require you to undo the original relationship, not apply it again in the same direction.`,
        change: "Reasoning"
      },
      {
        question: `What is a reliable way to check a reverse or reflection answer once you have one?`,
        answer: `Apply the original rule or transformation back and confirm that it returns to the given information correctly.`,
        change: "Reasoning"
      }
    ];
  }

  if (variantId.includes("formula") || variantId.includes("rule")) {
    return [
      {
        question: `Why is it important to understand what a rule or formula means, not just memorise its appearance?`,
        answer: `Because understanding lets you apply it correctly in unfamiliar examples and check whether it matches the situation.`,
        change: "Reasoning"
      },
      {
        question: `A pupil gives a rule that works for one example. Why might you still need another check?`,
        answer: `A rule that fits one example may fail on others, so you need to test whether it works generally.`,
        change: "Reasoning"
      },
      {
        question: `How can you tell whether a rule matches the sequence rather than just one isolated question?`,
        answer: `Check that it explains several examples consistently, not just a single case.`,
        change: "Reasoning"
      }
    ];
  }

  if (variantId.includes("direct") || variantId.includes("calculate") || variantId.includes("solve") || variantId.includes("continue")) {
    return [
      {
        question: `What mathematical idea stays fixed across a ${variantLabel.toLowerCase()} sequence even when the numbers change?`,
        answer: `The underlying method or relationship stays the same, while the values vary to make the examples minimally different.`,
        change: "Reasoning"
      },
      {
        question: `Why is it useful to estimate or sense-check an answer in ${topicLabel.toLowerCase()} before moving on?`,
        answer: `Because it helps you catch unreasonable answers and confirms that the method and scale of the result make sense.`,
        change: "Reasoning"
      },
      {
        question: exampleA
          ? `Choose a question like "${exampleA}" and explain why the method works, not just what the answer is.`
          : `Explain why the main method in this sequence works, not just what answer it gives.`,
        answer: `Accept a correct explanation of the method, linked to the structure of the sequence rather than only the final value.`,
        change: "Reasoning"
      }
    ];
  }

  return useDefaults();
}

function generateAddSubtractFractionsTeaching(topic, variant, settings, difficultyKey) {
  const base = getFractionOperationBase(settings, difficultyKey);
  let sequence;

  if (variant.id === "missing-value") {
    sequence = [
      { question: `${formatFraction(base.likeA.a, base.likeA.d)} + ? = ${formatFractionReduced(base.likeA.result.n, base.likeA.result.d)}`, answer: formatFraction(base.likeA.b, base.likeA.d), change: "Model finding a missing addend." },
      { question: `${formatFractionReduced(base.likeB.result.n, base.likeB.result.d)} - ${formatFraction(base.likeB.b, base.likeB.d)} = ?`, answer: formatFraction(base.likeB.a, base.likeB.d), change: "Only the missing part moves." },
      { question: `${formatFraction(base.likeC.a, base.likeC.d)} - ? = ${formatFractionReduced(base.likeC.result.n, base.likeC.result.d)}`, answer: formatFraction(base.likeC.b, base.likeC.d), change: "Only the operation structure changes." }
    ];
  } else if (variant.id === "error-spotting") {
    sequence = [
      { question: `A pupil says ${formatFraction(base.likeA.a, base.likeA.d)} + ${formatFraction(base.likeA.b, base.likeA.d)} = ${formatFraction(base.likeA.resultWrong.n, base.likeA.resultWrong.d)}. Are they correct?`, answer: "No", change: "Model spotting denominator errors." },
      { question: `Correct: ${formatFraction(base.likeA.a, base.likeA.d)} + ${formatFraction(base.likeA.b, base.likeA.d)}`, answer: formatFractionReduced(base.likeA.result.n, base.likeA.result.d), change: "Only the task changes from spotting to correcting." },
      { question: `A pupil says ${formatFraction(base.likeB.a, base.likeB.d)} - ${formatFraction(base.likeB.b, base.likeB.d)} = ${formatFraction(base.likeB.result.n, base.likeB.result.d)}. Are they correct?`, answer: "Yes", change: "Only the worked example becomes valid." }
    ];
  } else {
    sequence = [
      { question: `${formatFraction(base.likeA.a, base.likeA.d)} + ${formatFraction(base.likeA.b, base.likeA.d)}`, answer: formatFractionReduced(base.likeA.result.n, base.likeA.result.d), change: "Model adding numerators when denominators match." },
      { question: `${formatFraction(base.likeB.a, base.likeB.d)} - ${formatFraction(base.likeB.b, base.likeB.d)}`, answer: formatFractionReduced(base.likeB.result.n, base.likeB.result.d), change: "Only the operation changes." },
      { question: `${formatFraction(base.likeC.a, base.likeC.d)} + ${formatFraction(base.likeC.b, base.likeC.d)}`, answer: formatFractionReduced(base.likeC.result.n, base.likeC.result.d), change: "Only the numerators change." }
    ];
  }

  return createTeachingSequence(topic, variant, sequence);
}

function generateAddSubtractFractions(_topic, variant, settings, difficultyKey) {
  if (variant.id === "missing-value") return generateFractionOperationMissing(settings, difficultyKey);
  if (variant.id === "error-spotting") return generateFractionOperationErrors(settings, difficultyKey);
  if (variant.id === "find-the-sum") return generateFractionOperationDirect(settings, difficultyKey);
  return generateFractionOperationLike(settings, difficultyKey);
}

function generateFractionOperationLike(settings, difficultyKey) {
  const base = getFractionOperationBase(settings, difficultyKey);
  const items = [
    makeFractionOpQuestion(base.likeA, "+", "Starting example."),
    makeFractionOpQuestion(base.likeB, "-", "Only the operation changes."),
    makeFractionOpQuestion(base.likeC, "+", "Only the numerators change."),
    makeFractionOpQuestion(base.likeD, "-", "Only the denominator changes."),
    makeFractionOpQuestion(base.likeE, "+", "Only the denominator changes again."),
    makeFractionOpQuestion(base.likeF, "-", "Only the first numerator changes."),
    makeFractionOpQuestion(base.likeG, "+", "Only the second numerator changes."),
    makeFractionOpQuestion(base.likeH, "-", "Only the operation stays the same while numbers change."),
    makeFractionOpQuestion(base.likeI, "+", "Only the total grows."),
    makeFractionOpQuestion(base.likeJ, "-", "Final step keeps the same structure with larger values.")
  ];
  return { questions: items };
}

function generateFractionOperationDirect(settings, difficultyKey) {
  const base = getFractionOperationBase(settings, difficultyKey);
  const items = [
    makeFractionOpQuestion(base.likeA, "+", "Starting example."),
    makeFractionOpQuestion(base.likeC, "+", "Only the numerators change."),
    makeFractionOpQuestion(base.likeE, "+", "Only the denominator changes."),
    makeFractionOpQuestion(base.likeB, "-", "Only the operation changes."),
    makeFractionOpQuestion(base.likeD, "-", "Only the denominator changes."),
    makeFractionOpQuestion(base.likeF, "-", "Only the first numerator changes."),
    makeFractionOpQuestion(base.likeG, "+", "Only the second fraction changes."),
    makeFractionOpQuestion(base.likeH, "-", "Only the total changes."),
    makeFractionOpQuestion(base.likeI, "+", "Only the values increase."),
    makeFractionOpQuestion(base.likeJ, "-", "Final step keeps the same operation with larger values.")
  ];
  return { questions: items };
}

function generateFractionOperationMissing(settings, difficultyKey) {
  const base = getFractionOperationBase(settings, difficultyKey);
  const items = [
    { question: `${formatFraction(base.likeA.a, base.likeA.d)} + ? = ${formatFractionReduced(base.likeA.result.n, base.likeA.result.d)}`, answer: formatFraction(base.likeA.b, base.likeA.d), change: "Starting example." },
    { question: `${formatFractionReduced(base.likeB.result.n, base.likeB.result.d)} - ${formatFraction(base.likeB.b, base.likeB.d)} = ?`, answer: formatFraction(base.likeB.a, base.likeB.d), change: "Only the missing part moves." },
    { question: `${formatFraction(base.likeC.a, base.likeC.d)} - ? = ${formatFractionReduced(base.likeC.result.n, base.likeC.result.d)}`, answer: formatFraction(base.likeC.b, base.likeC.d), change: "Only the operation changes." },
    { question: `? + ${formatFraction(base.likeD.b, base.likeD.d)} = ${formatFractionReduced(base.likeD.result.n, base.likeD.result.d)}`, answer: formatFraction(base.likeD.a, base.likeD.d), change: "Only the missing term changes place." },
    { question: `${formatFraction(base.likeE.a, base.likeE.d)} + ${formatFraction(base.likeE.b, base.likeE.d)} = ?`, answer: formatFractionReduced(base.likeE.result.n, base.likeE.result.d), change: "Only the missing part becomes the answer." },
    { question: `${formatFraction(base.likeF.a, base.likeF.d)} - ${formatFraction(base.likeF.b, base.likeF.d)} = ?`, answer: formatFractionReduced(base.likeF.result.n, base.likeF.result.d), change: "Only the operation stays the same while values change." },
    { question: `${formatFractionReduced(base.likeG.result.n, base.likeG.result.d)} - ? = ${formatFraction(base.likeG.a, base.likeG.d)}`, answer: formatFraction(base.likeG.b, base.likeG.d), change: "Only the result becomes the starting value." },
    { question: `? - ${formatFraction(base.likeH.b, base.likeH.d)} = ${formatFractionReduced(base.likeH.result.n, base.likeH.result.d)}`, answer: formatFraction(base.likeH.a, base.likeH.d), change: "Only the unknown becomes the first fraction." },
    { question: `${formatFraction(base.likeI.a, base.likeI.d)} + ? = ${formatFractionReduced(base.likeI.result.n, base.likeI.result.d)}`, answer: formatFraction(base.likeI.b, base.likeI.d), change: "Only the denominator changes again." },
    { question: `${formatFractionReduced(base.likeJ.result.n, base.likeJ.result.d)} + ? = ${formatFractionReduced(base.likeJ.a + base.likeJ.result.n, base.likeJ.d)}`, answer: formatFraction(base.likeJ.a, base.likeJ.d), change: "Final step keeps the same denominator with a different target." }
  ];
  return { questions: items };
}

function generateFractionOperationErrors(settings, difficultyKey) {
  const base = getFractionOperationBase(settings, difficultyKey);
  const items = [
    { question: `A pupil says ${formatFraction(base.likeA.a, base.likeA.d)} + ${formatFraction(base.likeA.b, base.likeA.d)} = ${formatFraction(base.likeA.resultWrong.n, base.likeA.resultWrong.d)}. Are they correct?`, answer: "No", change: "Starting example." },
    { question: `Correct: ${formatFraction(base.likeA.a, base.likeA.d)} + ${formatFraction(base.likeA.b, base.likeA.d)}`, answer: formatFractionReduced(base.likeA.result.n, base.likeA.result.d), change: "Only the task changes from spotting to correcting." },
    { question: `A pupil says ${formatFraction(base.likeB.a, base.likeB.d)} - ${formatFraction(base.likeB.b, base.likeB.d)} = ${formatFraction(base.likeB.result.n, base.likeB.result.d)}. Are they correct?`, answer: "Yes", change: "Only the example becomes valid." },
    { question: `A pupil says you subtract the denominators in ${formatFraction(base.likeC.a, base.likeC.d)} - ${formatFraction(base.likeC.b, base.likeC.d)}. Are they correct?`, answer: "No", change: "Only the misconception changes." },
    { question: `Which is correct? A) ${formatFraction(base.likeD.result.n, base.likeD.result.d)} B) ${formatFraction(base.likeD.resultWrong.n, base.likeD.resultWrong.d)} for ${formatFraction(base.likeD.a, base.likeD.d)} + ${formatFraction(base.likeD.b, base.likeD.d)}`, answer: "A", change: "Only the prompt changes to selection." },
    { question: `True or false: ${formatFraction(base.likeE.a, base.likeE.d)} + ${formatFraction(base.likeE.b, base.likeE.d)} keeps the denominator ${base.likeE.d}.`, answer: "True", change: "Only the prompt changes to a rule check." },
    { question: `A pupil says ${formatFraction(base.likeF.a, base.likeF.d)} - ${formatFraction(base.likeF.b, base.likeF.d)} = ${formatFraction(base.likeF.resultWrong.n, base.likeF.resultWrong.d)}. Are they correct?`, answer: "No", change: "Only the numbers change." },
    { question: `Repair: ${formatFraction(base.likeF.a, base.likeF.d)} - ${formatFraction(base.likeF.b, base.likeF.d)}`, answer: formatFractionReduced(base.likeF.result.n, base.likeF.result.d), change: "Only the task changes back to correction." },
    { question: `A pupil says ${formatFraction(base.likeG.a, base.likeG.d)} + ${formatFraction(base.likeG.b, base.likeG.d)} can be simplified before adding because the denominators match. Are they correct?`, answer: "No", change: "Only the explanation demand changes." },
    { question: `Final check: explain what stays the same when adding or subtracting fractions with the same denominator.`, answer: "The denominator stays the same.", change: "Final step states the rule." }
  ];
  return { questions: items };
}

function generateRatioNotationTeaching(topic, variant, settings, difficultyKey) {
  const base = getRatioBase(settings, difficultyKey);
  let sequence;
  if (variant.id === "simplify-ratios") {
    sequence = [
      { question: `Simplify ${base.simplifyA.left}:${base.simplifyA.right}.`, answer: `${base.simplifyA.answer.left}:${base.simplifyA.answer.right}`, change: "Model dividing both parts by the same factor." },
      { question: `Simplify ${base.simplifyB.left}:${base.simplifyB.right}.`, answer: `${base.simplifyB.answer.left}:${base.simplifyB.answer.right}`, change: "Only the common factor changes." },
      { question: `Simplify ${base.simplifyC.left}:${base.simplifyC.right}.`, answer: `${base.simplifyC.answer.left}:${base.simplifyC.answer.right}`, change: "Only the ratio changes." }
    ];
  } else if (variant.id === "equivalent-ratios") {
    sequence = [
      { question: `Complete the equivalent ratio: ${base.equivA.left}:${base.equivA.right} = ${base.equivA.missing}:?`, answer: `${base.equivA.answer}`, change: "Model scaling both parts equally." },
      { question: `Which is equivalent to ${base.equivB.left}:${base.equivB.right}: ${base.equivB.optionA.left}:${base.equivB.optionA.right} or ${base.equivB.optionB.left}:${base.equivB.optionB.right}?`, answer: `${base.equivB.correct.left}:${base.equivB.correct.right}`, change: "Only the prompt changes to selection." },
      { question: `Complete: ${base.equivC.left}:${base.equivC.right} = ?:${base.equivC.missingRight}`, answer: `${base.equivC.answer}`, change: "Only the missing part moves." }
    ];
  } else if (variant.id === "missing-part") {
    sequence = [
      { question: `Complete the ratio statement: ${base.missingA.left}:? = ${base.missingA.targetLeft}:${base.missingA.targetRight}`, answer: `${base.missingA.answer}`, change: "Model finding one missing part." },
      { question: `Complete the ratio statement: ?:${base.missingB.right} = ${base.missingB.targetLeft}:${base.missingB.targetRight}`, answer: `${base.missingB.answer}`, change: "Only the missing part moves." },
      { question: `Complete the ratio statement: ${base.missingC.left}:${base.missingC.right} = ${base.missingC.targetLeft}:?`, answer: `${base.missingC.answer}`, change: "Only the scale factor changes." }
    ];
  } else {
    sequence = [
      { question: `Write the ratio of ${base.writeA.contextA} to ${base.writeA.contextB} shown.`, answer: `${base.writeA.left}:${base.writeA.right}`, change: "Model writing a ratio in order.", diagram: ratioGroupDiagram(base.writeA) },
      { question: `Write the ratio of ${base.writeB.contextA} to ${base.writeB.contextB} shown.`, answer: `${base.writeB.left}:${base.writeB.right}`, change: "Only the context changes.", diagram: ratioGroupDiagram(base.writeB) },
      { question: `Write the ratio of ${base.writeC.contextA} to ${base.writeC.contextB} shown.`, answer: `${base.writeC.left}:${base.writeC.right}`, change: "Only the numbers change.", diagram: ratioGroupDiagram(base.writeC) }
    ];
  }
  return createTeachingSequence(topic, variant, sequence);
}

function generateRatioNotation(_topic, variant, settings, difficultyKey) {
  if (variant.id === "simplify-ratios") return generateRatioSimplify(settings, difficultyKey);
  if (variant.id === "equivalent-ratios") return generateRatioEquivalent(settings, difficultyKey);
  if (variant.id === "missing-part") return generateRatioMissing(settings, difficultyKey);
  return generateRatioWrite(settings, difficultyKey);
}

function generateRatioWrite(settings, difficultyKey) {
  const base = getRatioBase(settings, difficultyKey);
  const writes = [base.writeA, base.writeB, base.writeC, base.writeD, base.writeE, base.writeF, base.writeG, base.writeH, base.writeI, base.writeJ];
  return {
    questions: writes.map((item, index) => ({
      question: `Write the ratio of ${item.contextA} to ${item.contextB} shown.`,
      answer: `${item.left}:${item.right}`,
      change: ratioWriteChange(index),
      diagram: ratioGroupDiagram(item)
    }))
  };
}

function generateRatioSimplify(settings, difficultyKey) {
  const base = getRatioBase(settings, difficultyKey);
  const items = [base.simplifyA, base.simplifyB, base.simplifyC, base.simplifyD, base.simplifyE, base.simplifyF, base.simplifyG, base.simplifyH, base.simplifyI, base.simplifyJ];
  return { questions: items.map((item, index) => ({ question: `Simplify ${item.left}:${item.right}.`, answer: `${item.answer.left}:${item.answer.right}`, change: ratioSimplifyChange(index) })) };
}

function generateRatioEquivalent(settings, difficultyKey) {
  const base = getRatioBase(settings, difficultyKey);
  const items = [
    { question: `Complete the equivalent ratio: ${base.equivA.left}:${base.equivA.right} = ${base.equivA.missing}:?`, answer: `${base.equivA.answer}`, change: "Starting example." },
    { question: `Which is equivalent to ${base.equivB.left}:${base.equivB.right}: ${base.equivB.optionA.left}:${base.equivB.optionA.right} or ${base.equivB.optionB.left}:${base.equivB.optionB.right}?`, answer: `${base.equivB.correct.left}:${base.equivB.correct.right}`, change: "Only the prompt changes to selection." },
    { question: `Complete: ${base.equivC.left}:${base.equivC.right} = ?:${base.equivC.missingRight}`, answer: `${base.equivC.answer}`, change: "Only the missing part moves." },
    { question: `Complete: ${base.equivD.left}:${base.equivD.right} = ${base.equivD.targetLeft}:${base.equivD.targetRight}`, answer: "Equivalent", change: "Only the task changes to checking equivalence." },
    { question: `Write an equivalent ratio to ${base.equivE.left}:${base.equivE.right} by multiplying by ${base.equivE.factor}.`, answer: `${base.equivE.answer.left}:${base.equivE.answer.right}`, change: "Only the scale factor is stated directly." },
    { question: `Which ratio is not equivalent to ${base.equivF.left}:${base.equivF.right}: ${base.equivF.optionA.left}:${base.equivF.optionA.right} or ${base.equivF.optionB.left}:${base.equivF.optionB.right}?`, answer: `${base.equivF.incorrect.left}:${base.equivF.incorrect.right}`, change: "Only the target changes to a non-example." },
    { question: `Complete: ${base.equivG.left}:${base.equivG.right} = ${base.equivG.answerLeft}:?`, answer: `${base.equivG.answerRight}`, change: "Only the ratio changes." },
    { question: `True or false: ${base.equivH.left}:${base.equivH.right} and ${base.equivH.targetLeft}:${base.equivH.targetRight} are equivalent.`, answer: `${base.equivH.truth}`, change: "Only the prompt changes to true or false." },
    { question: `Fill the gap: ?:${base.equivI.right} = ${base.equivI.targetLeft}:${base.equivI.targetRight}`, answer: `${base.equivI.answer}`, change: "Only the first part becomes missing." },
    { question: `Final check: write one equivalent ratio to ${base.equivJ.left}:${base.equivJ.right}.`, answer: `${base.equivJ.answer.left}:${base.equivJ.answer.right}`, change: "Final step asks for generation." }
  ];
  return { questions: items };
}

function generateRatioMissing(settings, difficultyKey) {
  const base = getRatioBase(settings, difficultyKey);
  const items = [
    { question: `Complete the ratio statement: ${base.missingA.left}:? = ${base.missingA.targetLeft}:${base.missingA.targetRight}`, answer: `${base.missingA.answer}`, change: "Starting example." },
    { question: `Complete the ratio statement: ?:${base.missingB.right} = ${base.missingB.targetLeft}:${base.missingB.targetRight}`, answer: `${base.missingB.answer}`, change: "Only the missing part moves." },
    { question: `Complete the ratio statement: ${base.missingC.left}:${base.missingC.right} = ${base.missingC.targetLeft}:?`, answer: `${base.missingC.answer}`, change: "Only the scale factor changes." },
    { question: `Complete the ratio statement: ${base.missingD.left}:? = ${base.missingD.targetLeft}:${base.missingD.targetRight}`, answer: `${base.missingD.answer}`, change: "Only the numbers change." },
    { question: `Complete the ratio statement: ?:${base.missingE.right} = ${base.missingE.targetLeft}:${base.missingE.targetRight}`, answer: `${base.missingE.answer}`, change: "Only the missing side changes again." },
    { question: `Complete the ratio statement: ${base.missingF.left}:${base.missingF.right} = ?:${base.missingF.targetRight}`, answer: `${base.missingF.answer}`, change: "Only the unknown changes place." },
    { question: `Complete the ratio statement: ${base.missingG.left}:? = ${base.missingG.targetLeft}:${base.missingG.targetRight}`, answer: `${base.missingG.answer}`, change: "Only the ratio structure stays the same while values change." },
    { question: `Complete the ratio statement: ?:${base.missingH.right} = ${base.missingH.targetLeft}:${base.missingH.targetRight}`, answer: `${base.missingH.answer}`, change: "Only the first part is missing again." },
    { question: `Complete the ratio statement: ${base.missingI.left}:${base.missingI.right} = ${base.missingI.targetLeft}:?`, answer: `${base.missingI.answer}`, change: "Only the target ratio changes." },
    { question: `Final check: complete ${base.missingJ.left}:? = ${base.missingJ.targetLeft}:${base.missingJ.targetRight}`, answer: `${base.missingJ.answer}`, change: "Final step keeps the same missing structure." }
  ];
  return { questions: items };
}

function ratioGroupDiagram(item) {
  const leftStyle = ratioVisualStyle(item.contextA, true);
  const rightStyle = ratioVisualStyle(item.contextB, false);
  return {
    type: "ratio-groups",
    leftCount: item.left,
    rightCount: item.right,
    leftLabel: item.contextA,
    rightLabel: item.contextB,
    leftStyle,
    rightStyle
  };
}

function ratioVisualStyle(context, isLeft) {
  const value = context.toLowerCase();

  if (value.includes("triangle")) {
    return { shape: "triangle", fill: isLeft ? "#d56a47" : "#7ba39a", stroke: "#1f2a2e" };
  }

  if (value.includes("square")) {
    return { shape: "square", fill: isLeft ? "#d56a47" : "#7ba39a", stroke: "#1f2a2e" };
  }

  if (value.includes("tile")) {
    return { shape: "square", fill: isLeft ? "#f4efe6" : "#343c43", stroke: "#1f2a2e" };
  }

  if (value.includes("chair")) {
    return { shape: "chair", fill: isLeft ? "#c6ad88" : "#9c7e58", stroke: "#1f2a2e" };
  }

  if (value.includes("table")) {
    return { shape: "table", fill: isLeft ? "#d9c2a0" : "#a88762", stroke: "#1f2a2e" };
  }

  if (value.includes("pencil")) {
    return { shape: "pencil", fill: isLeft ? "#f2c66d" : "#d9a94a", stroke: "#7f351a" };
  }

  if (value.includes("pencil")) {
    return { shape: "diamond", fill: isLeft ? "#f2c66d" : "#d9a94a", stroke: "#7f351a" };
  }

  if (value.includes("pen")) {
    return { shape: "pen", fill: isLeft ? "#7ba39a" : "#4f7f74", stroke: "#1f2a2e" };
  }

  if (value.includes("marker")) {
    return { shape: "marker", fill: isLeft ? "#d56a47" : "#b5512d", stroke: "#7f351a" };
  }

  if (value.includes("ruler")) {
    return { shape: "ruler", fill: isLeft ? "#f2c66d" : "#ddb15b", stroke: "#7f351a" };
  }

  if (value.includes("boy") || value.includes("girl")) {
    return { shape: "person", fill: isLeft ? "#d8a08b" : "#9bb7cf", stroke: "#1f2a2e" };
  }

  if (value.includes("apple") || value.includes("orange")) {
    return { shape: "circle", fill: isLeft ? "#d56a47" : "#e39b45", stroke: "#7f351a" };
  }

  if (value.includes("cat") || value.includes("dog")) {
    return { shape: value.includes("cat") ? "cat" : "dog", fill: isLeft ? "#c6ad88" : "#9c7e58", stroke: "#1f2a2e" };
  }

  if (value.includes("bead")) {
    return { shape: "ring", fill: isLeft ? "#c85b78" : "#5f915b", stroke: "#1f2a2e" };
  }

  return { shape: "circle", fill: isLeft ? "#d56a47" : "#7ba39a", stroke: "#1f2a2e" };
}

function generateCollectingLikeTermsTeaching(topic, variant, settings, difficultyKey) {
  const base = getLikeTermsBase(settings, difficultyKey);
  let sequence;
  if (variant.id === "match-equivalents") {
    sequence = [
      { question: `Which simplifies to ${base.matchA.answer}? A) ${base.matchA.correct} B) ${base.matchA.incorrect}`, answer: "A", change: "Model matching an expression to its simplified form." },
      { question: `Which simplifies to ${base.matchB.answer}? A) ${base.matchB.correct} B) ${base.matchB.incorrect}`, answer: "A", change: "Only the expression changes." },
      { question: `Which simplifies to ${base.matchC.answer}? A) ${base.matchC.correct} B) ${base.matchC.incorrect}`, answer: "A", change: "Only the sign pattern changes." }
    ];
  } else if (variant.id === "missing-coefficient") {
    sequence = [
      { question: `${base.missingA.expr} simplifies to ?x + ${base.missingA.constant}. What is the missing coefficient?`, answer: `${base.missingA.answer}`, change: "Model collecting the x terms." },
      { question: `${base.missingB.expr} simplifies to ?y + ${base.missingB.constant}. What is the missing coefficient?`, answer: `${base.missingB.answer}`, change: "Only the variable changes." },
      { question: `${base.missingC.expr} simplifies to ?x - ${base.missingC.constant}. What is the missing coefficient?`, answer: `${base.missingC.answer}`, change: "Only the sign changes." }
    ];
  } else if (variant.id === "error-spotting") {
    sequence = [
      { question: `A pupil says ${base.errorA.expr} simplifies to ${base.errorA.wrong}. Are they correct?`, answer: "No", change: "Model spotting unlike-term errors." },
      { question: `Correct: ${base.errorA.expr}`, answer: `${base.errorA.right}`, change: "Only the task changes from spotting to correcting." },
      { question: `A pupil says ${base.errorB.expr} simplifies to ${base.errorB.right}. Are they correct?`, answer: "Yes", change: "Only the worked example becomes valid." }
    ];
  } else {
    sequence = [
      { question: `Simplify: ${base.simpleA.expr}`, answer: `${base.simpleA.answer}`, change: "Model collecting like terms." },
      { question: `Simplify: ${base.simpleB.expr}`, answer: `${base.simpleB.answer}`, change: "Only the coefficients change." },
      { question: `Simplify: ${base.simpleC.expr}`, answer: `${base.simpleC.answer}`, change: "Only the sign pattern changes." }
    ];
  }
  return createTeachingSequence(topic, variant, sequence);
}

function generateCollectingLikeTerms(_topic, variant, settings, difficultyKey) {
  if (variant.id === "match-equivalents") return generateLikeTermsMatch(settings, difficultyKey);
  if (variant.id === "missing-coefficient") return generateLikeTermsMissing(settings, difficultyKey);
  if (variant.id === "error-spotting") return generateLikeTermsErrors(settings, difficultyKey);
  return generateLikeTermsSimplify(settings, difficultyKey);
}

function generateLikeTermsSimplify(settings, difficultyKey) {
  const base = getLikeTermsBase(settings, difficultyKey);
  const items = [base.simpleA, base.simpleB, base.simpleC, base.simpleD, base.simpleE, base.simpleF, base.simpleG, base.simpleH, base.simpleI, base.simpleJ]
    .map((item, index) => ({ question: `Simplify: ${item.expr}`, answer: item.answer, change: likeTermsChange(index) }));
  return { questions: items };
}

function generateLikeTermsMatch(settings, difficultyKey) {
  const base = getLikeTermsBase(settings, difficultyKey);
  const items = [base.matchA, base.matchB, base.matchC, base.matchD, base.matchE, base.matchF, base.matchG, base.matchH, base.matchI, base.matchJ]
    .map((item, index) => ({ question: `Which simplifies to ${item.answer}? A) ${item.correct} B) ${item.incorrect}`, answer: "A", change: likeTermsMatchChange(index) }));
  return { questions: items };
}

function generateLikeTermsMissing(settings, difficultyKey) {
  const base = getLikeTermsBase(settings, difficultyKey);
  const items = [base.missingA, base.missingB, base.missingC, base.missingD, base.missingE, base.missingF, base.missingG, base.missingH, base.missingI, base.missingJ]
    .map((item, index) => ({ question: `${item.expr} simplifies to ?${item.variable} ${item.constantSign} ${item.constant}. What is the missing coefficient?`, answer: `${item.answer}`, change: likeTermsMissingChange(index) }));
  return { questions: items };
}

function generateLikeTermsErrors(settings, difficultyKey) {
  const base = getLikeTermsBase(settings, difficultyKey);
  const items = [base.errorA, base.errorB, base.errorC, base.errorD, base.errorE, base.errorF, base.errorG, base.errorH, base.errorI, base.errorJ]
    .map((item, index) => ({
      question: index % 2 === 0 ? `A pupil says ${item.expr} simplifies to ${item.wrong}. Are they correct?` : `Correct: ${item.expr}`,
      answer: index % 2 === 0 ? "No" : item.right,
      change: likeTermsErrorChange(index)
    }));
  return { questions: items };
}

function generateCoordinatesFourQuadrantsTeaching(topic, variant, settings, difficultyKey) {
  const base = getCoordinateBase(settings, difficultyKey);
  let sequence;
  if (variant.id === "plot-points") {
    sequence = [
      { question: `Plot the point ${coordinateLabel(base.pointA)}.`, answer: coordinateLabel(base.pointA), change: "Model reading x then y.", diagram: coordinateGridDiagram([]) },
      { question: `Plot the point ${coordinateLabel(base.pointB)}.`, answer: coordinateLabel(base.pointB), change: "Only the quadrant changes.", diagram: coordinateGridDiagram([]) },
      { question: `Plot the point ${coordinateLabel(base.pointC)}.`, answer: coordinateLabel(base.pointC), change: "Only one coordinate changes.", diagram: coordinateGridDiagram([]) }
    ];
  } else if (variant.id === "missing-coordinate") {
    sequence = [
      { question: `A point is (${base.pointA.x}, ?). If the full coordinate is ${coordinateLabel(base.pointA)}, what is the missing value?`, answer: `${base.pointA.y}`, change: "Model completing one missing coordinate.", diagram: coordinateGridDiagram([{ ...base.pointA, label: "A" }]) },
      { question: `A point is (?, ${base.pointB.y}). If the full coordinate is ${coordinateLabel(base.pointB)}, what is the missing value?`, answer: `${base.pointB.x}`, change: "Only the missing part moves.", diagram: coordinateGridDiagram([{ ...base.pointB, label: "B" }]) },
      { question: `A point is (${base.pointC.x}, ?). If the full coordinate is ${coordinateLabel(base.pointC)}, what is the missing value?`, answer: `${base.pointC.y}`, change: "Only the point changes.", diagram: coordinateGridDiagram([{ ...base.pointC, label: "C" }]) }
    ];
  } else if (variant.id === "reflections") {
    sequence = [
      { question: `Reflect ${coordinateLabel(base.pointA)} in the y-axis. What is the image?`, answer: coordinateLabel(reflectY(base.pointA)), change: "Model changing the sign of x.", diagram: coordinateGridDiagram([{ ...base.pointA, label: "A" }]) },
      { question: `Reflect ${coordinateLabel(base.pointB)} in the x-axis. What is the image?`, answer: coordinateLabel(reflectX(base.pointB)), change: "Only the axis changes.", diagram: coordinateGridDiagram([{ ...base.pointB, label: "B" }]) },
      { question: `Reflect ${coordinateLabel(base.pointC)} in the y-axis. What is the image?`, answer: coordinateLabel(reflectY(base.pointC)), change: "Only the point changes.", diagram: coordinateGridDiagram([{ ...base.pointC, label: "C" }]) }
    ];
  } else {
    sequence = [
      { question: `Read the coordinate of point A.`, answer: coordinateLabel(base.pointA), change: "Model reading x then y.", diagram: coordinateGridDiagram([{ ...base.pointA, label: "A" }]) },
      { question: `Read the coordinate of point B.`, answer: coordinateLabel(base.pointB), change: "Only the quadrant changes.", diagram: coordinateGridDiagram([{ ...base.pointB, label: "B" }]) },
      { question: `Read the coordinate of point C.`, answer: coordinateLabel(base.pointC), change: "Only one coordinate changes.", diagram: coordinateGridDiagram([{ ...base.pointC, label: "C" }]) }
    ];
  }
  return createTeachingSequence(topic, variant, sequence);
}

function generateCoordinatesFourQuadrants(_topic, variant, settings, difficultyKey) {
  if (variant.id === "plot-points") return generateCoordinatePlot(settings, difficultyKey);
  if (variant.id === "missing-coordinate") return generateCoordinateMissing(settings, difficultyKey);
  if (variant.id === "reflections") return generateCoordinateReflections(settings, difficultyKey);
  return generateCoordinateRead(settings, difficultyKey);
}

function generateCoordinateRead(settings, difficultyKey) {
  const base = getCoordinateBase(settings, difficultyKey);
  const points = base.points;
  return { questions: points.map((point, index) => ({ question: `Read the coordinate of point ${String.fromCharCode(65 + index)}.`, answer: coordinateLabel(point), change: coordinateReadChange(index), diagram: coordinateGridDiagram([{ ...point, label: String.fromCharCode(65 + index) }]) })) };
}

function generateCoordinatePlot(settings, difficultyKey) {
  const base = getCoordinateBase(settings, difficultyKey);
  const points = base.points;
  return { questions: points.map((point, index) => ({ question: `Plot the point ${coordinateLabel(point)}.`, answer: coordinateLabel(point), change: coordinatePlotChange(index), diagram: coordinateGridDiagram([]) })) };
}

function generateCoordinateMissing(settings, difficultyKey) {
  const base = getCoordinateBase(settings, difficultyKey);
  const items = base.points.map((point, index) => ({
    question: index % 2 === 0
      ? `Point ${String.fromCharCode(65 + index)} is shown at (${point.x}, ?). What is the missing y-coordinate?`
      : `Point ${String.fromCharCode(65 + index)} is shown at (?, ${point.y}). What is the missing x-coordinate?`,
    answer: `${index % 2 === 0 ? point.y : point.x}`,
    change: coordinateMissingChange(index),
    diagram: coordinateGridDiagram([{ ...point, label: String.fromCharCode(65 + index) }])
  }));
  return { questions: items };
}

function generateCoordinateReflections(settings, difficultyKey) {
  const base = getCoordinateBase(settings, difficultyKey);
  return { questions: base.points.map((point, index) => ({
    question: index % 2 === 0 ? `Reflect ${coordinateLabel(point)} in the y-axis.` : `Reflect ${coordinateLabel(point)} in the x-axis.`,
    answer: index % 2 === 0 ? coordinateLabel(reflectY(point)) : coordinateLabel(reflectX(point)),
    change: coordinateReflectionChange(index),
    diagram: coordinateGridDiagram([{ ...point, label: String.fromCharCode(65 + index) }])
  })) };
}

function generatePlaceValueDecimalsTeaching(topic, variant, settings, difficultyKey) {
  const base = getDecimalPlaceValueBase(settings, difficultyKey);
  let sequence;
  if (variant.id === "digit-value") {
    sequence = [
      { question: `In ${base.decimalA}, what is the value of the digit ${base.decimalDigitA}?`, answer: `${base.decimalValueA}`, change: "Model reading a decimal digit value." },
      { question: `In ${base.decimalB}, what is the value of the digit ${base.decimalDigitB}?`, answer: `${base.decimalValueB}`, change: "Only the digit position changes." },
      { question: `In ${base.decimalC}, what is the value of the digit ${base.decimalDigitC}?`, answer: `${base.decimalValueC}`, change: "Only the decimal changes." }
    ];
  } else if (variant.id === "rounding") {
    sequence = [
      { question: `Round ${base.roundA} to the nearest whole number.`, answer: `${Math.round(base.roundA)}`, change: "Model rounding a decimal to the nearest whole." },
      { question: `Round ${base.roundB} to 1 decimal place.`, answer: `${base.roundB.toFixed(1)}`, change: "Only the rounding place changes." },
      { question: `Round ${base.roundC} to 1 decimal place.`, answer: `${base.roundC.toFixed(1)}`, change: "Only the decimal changes." }
    ];
  } else if (variant.id === "intervals-and-statements") {
    sequence = [
      { question: `Which interval contains ${base.decimalA}: ${base.intervalA.low} to ${base.intervalA.high} or ${base.intervalA.high} to ${base.intervalA.high + 0.1}?`, answer: `${base.intervalA.low} to ${base.intervalA.high}`, change: "Model locating a decimal in an interval." },
      { question: `True or false: ${base.decimalB} is closer to ${base.statementB.target} than to ${base.statementB.other}.`, answer: `${base.statementB.answer}`, change: "Only the prompt changes to a statement." },
      { question: `Which interval contains ${base.decimalC}: ${base.intervalC.low} to ${base.intervalC.high} or ${base.intervalC.high} to ${base.intervalC.high + 0.1}?`, answer: `${base.intervalC.low} to ${base.intervalC.high}`, change: "Only the decimal changes." }
    ];
  } else {
    sequence = [
      { question: `Which is greater: ${base.compareA} or ${base.compareB}?`, answer: `${Math.max(base.compareA, base.compareB)}`, change: "Model comparing decimals digit by digit." },
      { question: `Put these in ascending order: ${base.orderA.join(", ")}.`, answer: `${sortDecimals(base.orderA).join(", ")}`, change: "Only the number of values changes." },
      { question: `Which is greater: ${base.compareC} or ${base.compareD}?`, answer: `${Math.max(base.compareC, base.compareD)}`, change: "Only one decimal place changes." }
    ];
  }
  return createTeachingSequence(topic, variant, sequence);
}

function generatePlaceValueDecimals(_topic, variant, settings, difficultyKey) {
  if (variant.id === "digit-value") return generateDecimalDigitValue(settings, difficultyKey);
  if (variant.id === "rounding") return generateDecimalRounding(settings, difficultyKey);
  if (variant.id === "intervals-and-statements") return generateDecimalIntervals(settings, difficultyKey);
  return generateDecimalCompare(settings, difficultyKey);
}

function generateDecimalCompare(settings, difficultyKey) {
  const base = getDecimalPlaceValueBase(settings, difficultyKey);
  const items = [
    { question: `Which is greater: ${base.compareA} or ${base.compareB}?`, answer: `${Math.max(base.compareA, base.compareB)}`, change: "Starting example." },
    { question: `Which is smaller: ${base.compareC} or ${base.compareD}?`, answer: `${Math.min(base.compareC, base.compareD)}`, change: "Only the comparison direction changes." },
    { question: `Put these in ascending order: ${base.orderA.join(", ")}.`, answer: `${sortDecimals(base.orderA).join(", ")}`, change: "Only the number of values changes." },
    { question: `Put these in descending order: ${base.orderB.join(", ")}.`, answer: `${sortDecimals(base.orderB, true).join(", ")}`, change: "Only the order direction changes." },
    { question: `Which is greater: ${base.compareE} or ${base.compareF}?`, answer: `${Math.max(base.compareE, base.compareF)}`, change: "Only one digit changes." },
    { question: `Insert < or > : ${base.compareG} __ ${base.compareH}.`, answer: `${base.compareG > base.compareH ? ">" : "<"}`, change: "Only the representation changes." },
    { question: `Which number lies between ${base.intervalA.low} and ${base.intervalA.high}: ${base.intervalA.optionA} or ${base.intervalA.optionB}?`, answer: `${base.intervalA.answer}`, change: "Only the comparison changes to an interval." },
    { question: `Complete with a decimal greater than ${base.intervalC.low} but less than ${base.intervalC.high}.`, answer: `${base.intervalC.answer}`, change: "Only the task changes to generating." },
    { question: `True or false: ${base.statementB.value} is greater than ${base.statementB.target}.`, answer: `${base.statementB.value > base.statementB.target ? "True" : "False"}`, change: "Only the prompt changes to a statement." },
    { question: `Final check: which is greatest? ${base.orderC.join(", ")}.`, answer: `${sortDecimals(base.orderC, true)[0]}`, change: "Final step compares a set of decimals." }
  ];
  return { questions: items };
}

function generateDecimalDigitValue(settings, difficultyKey) {
  const base = getDecimalPlaceValueBase(settings, difficultyKey);
  const items = [
    { question: `In ${base.decimalA}, what is the value of the digit ${base.decimalDigitA}?`, answer: `${base.decimalValueA}`, change: "Starting example." },
    { question: `In ${base.decimalB}, what is the value of the digit ${base.decimalDigitB}?`, answer: `${base.decimalValueB}`, change: "Only the digit position changes." },
    { question: `In ${base.decimalC}, what is the value of the digit ${base.decimalDigitC}?`, answer: `${base.decimalValueC}`, change: "Only the decimal changes." },
    { question: `Which digit has the value ${base.decimalValueD} in ${base.decimalD}?`, answer: `${base.decimalDigitD}`, change: "Only the unknown changes from value to digit." },
    { question: `Which digit is worth ${base.decimalValueE} in ${base.decimalE}?`, answer: `${base.decimalDigitE}`, change: "Only the decimal changes again." },
    { question: `What is the value of the ${base.decimalPlaceF} digit in ${base.decimalF}?`, answer: `${base.decimalValueF}`, change: "Only the prompt wording changes." },
    { question: `Which has the greater value: the digit ${base.decimalDigitA} in ${base.decimalA} or the digit ${base.decimalDigitB} in ${base.decimalB}?`, answer: `${Math.max(base.decimalValueA, base.decimalValueB)}`, change: "Only the task changes to comparison." },
    { question: `True or false: in ${base.decimalG}, the digit ${base.decimalDigitG} is worth ${base.decimalValueG}.`, answer: "True", change: "Only the prompt changes to true or false." },
    { question: `In ${base.decimalH}, which digit is in the hundredths place?`, answer: `${base.decimalDigitH}`, change: "Only the place name changes." },
    { question: `Final check: in ${base.decimalI}, what is the value of the digit ${base.decimalDigitI}?`, answer: `${base.decimalValueI}`, change: "Final step keeps the same structure with a new decimal." }
  ];
  return { questions: items };
}

function generateDecimalRounding(settings, difficultyKey) {
  const base = getDecimalPlaceValueBase(settings, difficultyKey);
  const items = [
    { question: `Round ${base.roundA} to the nearest whole number.`, answer: `${Math.round(base.roundA)}`, change: "Starting example." },
    { question: `Round ${base.roundB} to 1 decimal place.`, answer: `${base.roundB.toFixed(1)}`, change: "Only the rounding place changes." },
    { question: `Round ${base.roundC} to 1 decimal place.`, answer: `${base.roundC.toFixed(1)}`, change: "Only the decimal changes." },
    { question: `Round ${base.roundD} to the nearest whole number.`, answer: `${Math.round(base.roundD)}`, change: "Only the number changes." },
    { question: `Which rounds to ${Math.round(base.roundE)} to the nearest whole number: ${base.roundE} or ${base.roundF}?`, answer: `${Math.round(base.roundE) === Math.round(base.roundE) ? base.roundE : base.roundF}`, change: "Only the prompt changes to selection." },
    { question: `Round ${base.roundG} to 1 decimal place.`, answer: `${base.roundG.toFixed(1)}`, change: "Only the decimal changes again." },
    { question: `True or false: ${base.roundH} rounds to ${base.roundH.toFixed(1)} to 1 decimal place.`, answer: "True", change: "Only the prompt changes to true or false." },
    { question: `A pupil says ${base.roundI} rounds to ${(base.roundI + 0.1).toFixed(1)} to 1 decimal place. Are they correct?`, answer: "No", change: "Only the misconception changes." },
    { question: `Round ${base.roundJ} to the nearest whole number.`, answer: `${Math.round(base.roundJ)}`, change: "Only the rounding place changes back." },
    { question: `Final check: round ${base.roundK} to 1 decimal place.`, answer: `${base.roundK.toFixed(1)}`, change: "Final step keeps the same structure with a new decimal." }
  ];
  return { questions: items };
}

function generateDecimalIntervals(settings, difficultyKey) {
  const base = getDecimalPlaceValueBase(settings, difficultyKey);
  const items = [
    { question: `Which interval contains ${base.decimalA}: ${base.intervalA.low} to ${base.intervalA.high} or ${base.intervalA.high} to ${(base.intervalA.high + 0.1).toFixed(1)}?`, answer: `${base.intervalA.low} to ${base.intervalA.high}`, change: "Starting example." },
    { question: `True or false: ${base.decimalB} is closer to ${base.statementB.target} than to ${base.statementB.other}.`, answer: `${base.statementB.answer}`, change: "Only the prompt changes to a statement." },
    { question: `Which interval contains ${base.decimalC}: ${base.intervalC.low} to ${base.intervalC.high} or ${base.intervalC.high} to ${(base.intervalC.high + 0.1).toFixed(1)}?`, answer: `${base.intervalC.low} to ${base.intervalC.high}`, change: "Only the decimal changes." },
    { question: `Complete: ${base.decimalD} is between ${base.intervalD.low} and ${base.intervalD.high}.`, answer: "True", change: "Only the format changes." },
    { question: `Which number lies between ${base.intervalE.low} and ${base.intervalE.high}: ${base.intervalE.optionA} or ${base.intervalE.optionB}?`, answer: `${base.intervalE.answer}`, change: "Only the task changes to selection." },
    { question: `Complete: ${base.decimalE} is greater than ${base.intervalF.low} but less than ____.`, answer: `${base.intervalF.high}`, change: "Only one boundary becomes missing." },
    { question: `True or false: ${base.decimalF} is between ${base.intervalG.low} and ${base.intervalG.high}.`, answer: "True", change: "Only the decimal changes again." },
    { question: `Which interval contains ${base.decimalG}: ${base.intervalH.low} to ${base.intervalH.high} or ${base.intervalH.high} to ${(base.intervalH.high + 0.1).toFixed(1)}?`, answer: `${base.intervalH.low} to ${base.intervalH.high}`, change: "Only the interval changes." },
    { question: `A pupil says ${base.decimalH} is between ${base.intervalI.high} and ${(base.intervalI.high + 0.1).toFixed(1)}. Are they correct?`, answer: "No", change: "Only a non-example is introduced." },
    { question: `Final check: which interval contains ${base.decimalI}: ${base.intervalJ.low} to ${base.intervalJ.high} or ${base.intervalJ.high} to ${(base.intervalJ.high + 0.1).toFixed(1)}?`, answer: `${base.intervalJ.low} to ${base.intervalJ.high}`, change: "Final step returns to interval identification." }
  ];
  return { questions: items };
}

function generateFdpLinksTeaching(topic, variant, settings, difficultyKey) {
  const base = getFdpBase(settings, difficultyKey);
  let sequence;
  if (variant.id === "match-equivalents") {
    sequence = [
      { question: `Which matches ${formatFraction(base.a.f.n, base.a.f.d)}: ${base.a.d} or ${base.b.d}?`, answer: `${base.a.d}`, change: "Model matching a fraction to a decimal." },
      { question: `Which matches ${base.b.p}%: ${formatFraction(base.b.f.n, base.b.f.d)} or ${formatFraction(base.c.f.n, base.c.f.d)}?`, answer: `${formatFraction(base.b.f.n, base.b.f.d)}`, change: "Only the representation target changes." },
      { question: `Which matches ${base.c.d}: ${base.c.p}% or ${base.d.p}%?`, answer: `${base.c.p}%`, change: "Only the value changes." }
    ];
  } else if (variant.id === "complete-the-table") {
    sequence = [
      { question: `Complete: ${formatFraction(base.a.f.n, base.a.f.d)} = ${base.a.d} = ?%`, answer: `${base.a.p}%`, change: "Model moving through an FDP table." },
      { question: `Complete: ? = ${base.b.d} = ${base.b.p}%`, answer: `${formatFraction(base.b.f.n, base.b.f.d)}`, change: "Only the missing representation changes." },
      { question: `Complete: ${formatFraction(base.c.f.n, base.c.f.d)} = ? = ${base.c.p}%`, answer: `${base.c.d}`, change: "Only the missing representation changes again." }
    ];
  } else if (variant.id === "compare-values") {
    sequence = [
      { question: `Which is greater: ${formatFraction(base.a.f.n, base.a.f.d)} or ${base.b.d}?`, answer: `${base.b.d}`, change: "Model comparing across representations." },
      { question: `Which is smaller: ${base.c.p}% or ${formatFraction(base.d.f.n, base.d.f.d)}?`, answer: `${formatFraction(base.c.f.n, base.c.f.d)}`, change: "Only the comparison direction changes." },
      { question: `Which is greater: ${base.e.d} or ${base.f.p}%?`, answer: `${base.e.d}`, change: "Only the values change." }
    ];
  } else {
    sequence = [
      { question: `Convert ${formatFraction(base.a.f.n, base.a.f.d)} to a decimal.`, answer: `${base.a.d}`, change: "Model fraction to decimal conversion." },
      { question: `Convert ${base.b.d} to a percentage.`, answer: `${base.b.p}%`, change: "Only the representation changes." },
      { question: `Convert ${base.c.p}% to a fraction.`, answer: `${formatFraction(base.c.f.n, base.c.f.d)}`, change: "Only the representation changes again." }
    ];
  }
  return createTeachingSequence(topic, variant, sequence);
}

function generateFdpLinks(_topic, variant, settings, difficultyKey) {
  if (variant.id === "match-equivalents") return generateFdpMatch(settings, difficultyKey);
  if (variant.id === "complete-the-table") return generateFdpTable(settings, difficultyKey);
  if (variant.id === "compare-values") return generateFdpCompare(settings, difficultyKey);
  return generateFdpConvert(settings, difficultyKey);
}

function generateFdpConvert(settings, difficultyKey) {
  const base = getFdpBase(settings, difficultyKey);
  const items = [
    { question: `Convert ${formatFraction(base.a.f.n, base.a.f.d)} to a decimal.`, answer: `${base.a.d}`, change: "Starting example." },
    { question: `Convert ${base.b.d} to a percentage.`, answer: `${base.b.p}%`, change: "Only the representation changes." },
    { question: `Convert ${base.c.p}% to a fraction.`, answer: `${formatFraction(base.c.f.n, base.c.f.d)}`, change: "Only the representation changes again." },
    { question: `Convert ${formatFraction(base.d.f.n, base.d.f.d)} to a percentage.`, answer: `${base.d.p}%`, change: "Only the target representation changes." },
    { question: `Convert ${base.e.d} to a fraction.`, answer: `${formatFraction(base.e.f.n, base.e.f.d)}`, change: "Only the decimal changes." },
    { question: `Convert ${base.f.p}% to a decimal.`, answer: `${base.f.d}`, change: "Only the percentage changes." },
    { question: `Convert ${formatFraction(base.g.f.n, base.g.f.d)} to a decimal.`, answer: `${base.g.d}`, change: "Only the fraction changes." },
    { question: `Convert ${base.h.d} to a percentage.`, answer: `${base.h.p}%`, change: "Only the decimal changes again." },
    { question: `Convert ${base.i.p}% to a fraction.`, answer: `${formatFraction(base.i.f.n, base.i.f.d)}`, change: "Only the percentage changes again." },
    { question: `Final check: convert ${formatFraction(base.j.f.n, base.j.f.d)} to a percentage.`, answer: `${base.j.p}%`, change: "Final step returns to fraction to percentage." }
  ];
  return { questions: items };
}

function generateFdpMatch(settings, difficultyKey) {
  const base = getFdpBase(settings, difficultyKey);
  const items = [
    { question: `Which matches ${formatFraction(base.a.f.n, base.a.f.d)}: ${base.a.d} or ${base.b.d}?`, answer: `${base.a.d}`, change: "Starting example." },
    { question: `Which matches ${base.b.p}%: ${formatFraction(base.b.f.n, base.b.f.d)} or ${formatFraction(base.c.f.n, base.c.f.d)}?`, answer: `${formatFraction(base.b.f.n, base.b.f.d)}`, change: "Only the target representation changes." },
    { question: `Which matches ${base.c.d}: ${base.c.p}% or ${base.d.p}%?`, answer: `${base.c.p}%`, change: "Only the value changes." },
    { question: `Which matches ${formatFraction(base.d.f.n, base.d.f.d)}: ${base.d.p}% or ${base.e.p}%?`, answer: `${base.d.p}%`, change: "Only the fraction changes." },
    { question: `Which matches ${base.e.d}: ${formatFraction(base.e.f.n, base.e.f.d)} or ${formatFraction(base.f.f.n, base.f.f.d)}?`, answer: `${formatFraction(base.e.f.n, base.e.f.d)}`, change: "Only the decimal changes." },
    { question: `Which matches ${base.f.p}%: ${base.f.d} or ${base.g.d}?`, answer: `${base.f.d}`, change: "Only the percentage changes." },
    { question: `Which matches ${formatFraction(base.g.f.n, base.g.f.d)}: ${base.g.p}% or ${base.h.p}%?`, answer: `${base.g.p}%`, change: "Only the values become closer." },
    { question: `Which matches ${base.h.d}: ${formatFraction(base.h.f.n, base.h.f.d)} or ${formatFraction(base.i.f.n, base.i.f.d)}?`, answer: `${formatFraction(base.h.f.n, base.h.f.d)}`, change: "Only the matching pair changes." },
    { question: `Which matches ${base.i.p}%: ${base.i.d} or ${base.j.d}?`, answer: `${base.i.d}`, change: "Only the representation order changes." },
    { question: `Final check: which matches ${formatFraction(base.j.f.n, base.j.f.d)}: ${base.j.d} or ${base.a.d}?`, answer: `${base.j.d}`, change: "Final step keeps the same matching structure." }
  ];
  return { questions: items };
}

function generateFdpTable(settings, difficultyKey) {
  const base = getFdpBase(settings, difficultyKey);
  const values = [base.a, base.b, base.c, base.d, base.e, base.f, base.g, base.h, base.i, base.j];
  return {
    questions: values.map((item, index) => ({
      question: index % 3 === 0
        ? `Complete: ${formatFraction(item.f.n, item.f.d)} = ${item.d} = ?%`
        : index % 3 === 1
          ? `Complete: ? = ${item.d} = ${item.p}%`
          : `Complete: ${formatFraction(item.f.n, item.f.d)} = ? = ${item.p}%`,
      answer: index % 3 === 0 ? `${item.p}%` : index % 3 === 1 ? `${formatFraction(item.f.n, item.f.d)}` : `${item.d}`,
      change: index === 0 ? "Starting example." : "Only the missing representation changes."
    }))
  };
}

function generateFdpCompare(settings, difficultyKey) {
  const base = getFdpBase(settings, difficultyKey);
  const items = [
    { question: `Which is greater: ${formatFraction(base.a.f.n, base.a.f.d)} or ${base.b.d}?`, answer: `${base.b.d}`, change: "Starting example." },
    { question: `Which is smaller: ${base.c.p}% or ${formatFraction(base.d.f.n, base.d.f.d)}?`, answer: `${formatFraction(base.c.f.n, base.c.f.d)}`, change: "Only the comparison direction changes." },
    { question: `Which is greater: ${base.e.d} or ${base.f.p}%?`, answer: `${base.e.d}`, change: "Only the values change." },
    { question: `Which is smaller: ${formatFraction(base.g.f.n, base.g.f.d)} or ${base.h.d}?`, answer: `${formatFraction(base.g.f.n, base.g.f.d)}`, change: "Only the representation pair changes." },
    { question: `True or false: ${base.i.p}% is equal to ${base.i.d}.`, answer: "True", change: "Only the prompt changes to true or false." },
    { question: `Which is greater: ${formatFraction(base.j.f.n, base.j.f.d)} or ${base.a.p}%?`, answer: `${base.a.p}%`, change: "Only the values become close." },
    { question: `Which is smaller: ${base.b.d} or ${base.c.p}%?`, answer: `${base.b.d}`, change: "Only the comparison pair changes." },
    { question: `Which is greater: ${formatFraction(base.d.f.n, base.d.f.d)} or ${base.e.d}?`, answer: `${formatFraction(base.d.f.n, base.d.f.d)}`, change: "Only the fraction becomes the larger value." },
    { question: `True or false: ${base.f.p}% is less than ${formatFraction(base.g.f.n, base.g.f.d)}.`, answer: "False", change: "Only the truth value changes." },
    { question: `Final check: which is greatest: ${base.h.d}, ${base.i.p}%, ${formatFraction(base.j.f.n, base.j.f.d)}?`, answer: `${base.i.p}%`, change: "Final step compares three forms." }
  ];
  return { questions: items };
}

function generateFunctionMachinesTeaching(topic, variant, settings, difficultyKey) {
  const base = getFunctionMachineBase(settings, difficultyKey);
  let sequence;
  if (variant.id === "find-the-input") {
    sequence = [
      { question: `What input gives the shown output?`, answer: `${base.inputA}`, change: "Model undoing the machine rule.", diagram: functionMachineDiagram("?", `+${base.addA}`, `${base.inputA + base.addA}`) },
      { question: `What input gives the shown output?`, answer: `${base.inputB}`, change: "Only the operation changes.", diagram: functionMachineDiagram("?", `x${base.multA}`, `${base.inputB * base.multA}`) },
      { question: `What input gives the shown output?`, answer: `${base.inputC}`, change: "Only the rule changes again.", diagram: functionMachineDiagram("?", `-${base.subA}`, `${base.inputC - base.subA}`) }
    ];
  } else if (variant.id === "identify-the-rule") {
    sequence = [
      { question: `What is the rule of the machine shown?`, answer: `+${base.addA}`, change: "Model identifying an add rule.", diagram: functionMachineDiagram("4", "?", `${4 + base.addA}`) },
      { question: `What is the rule of the machine shown?`, answer: `x${base.multA}`, change: "Only the operation changes.", diagram: functionMachineDiagram("3", "?", `${3 * base.multA}`) },
      { question: `What is the rule of the machine shown?`, answer: `-${base.subA}`, change: "Only the operation changes again.", diagram: functionMachineDiagram("9", "?", `${9 - base.subA}`) }
    ];
  } else if (variant.id === "reverse-machines") {
    sequence = [
      { question: `What is the reverse rule for the machine shown?`, answer: `-${base.addA}`, change: "Model the inverse rule.", diagram: functionMachineDiagram("input", `+${base.addA}`, "output") },
      { question: `What is the reverse rule for the machine shown?`, answer: `÷${base.multA}`, change: "Only the operation changes.", diagram: functionMachineDiagram("input", `x${base.multA}`, "output") },
      { question: `What is the reverse rule for the machine shown?`, answer: `+${base.subA}`, change: "Only the operation changes again.", diagram: functionMachineDiagram("input", `-${base.subA}`, "output") }
    ];
  } else {
    sequence = [
      { question: `What is the output of the machine shown?`, answer: `${base.inputA + base.addA}`, change: "Model applying the rule.", diagram: functionMachineDiagram(`${base.inputA}`, `+${base.addA}`, "?") },
      { question: `What is the output of the machine shown?`, answer: `${base.inputB * base.multA}`, change: "Only the operation changes.", diagram: functionMachineDiagram(`${base.inputB}`, `x${base.multA}`, "?") },
      { question: `What is the output of the machine shown?`, answer: `${base.inputC - base.subA}`, change: "Only the operation changes again.", diagram: functionMachineDiagram(`${base.inputC}`, `-${base.subA}`, "?") }
    ];
  }
  return createTeachingSequence(topic, variant, sequence);
}

function generateFunctionMachines(_topic, variant, settings, difficultyKey) {
  if (variant.id === "find-the-input") return generateFunctionFindInput(settings, difficultyKey);
  if (variant.id === "identify-the-rule") return generateFunctionRule(settings, difficultyKey);
  if (variant.id === "reverse-machines") return generateFunctionReverse(settings, difficultyKey);
  return generateFunctionOutput(settings, difficultyKey);
}

function generateFunctionOutput(settings, difficultyKey) {
  const base = getFunctionMachineBase(settings, difficultyKey);
  const items = [
    { question: `What is the output when the machine adds ${base.addA} to input ${base.inputA}?`, answer: `${base.inputA + base.addA}`, change: "Starting example.", diagram: functionMachineDiagram(`${base.inputA}`, `+${base.addA}`, "?") },
    { question: `What is the output when the machine adds ${base.addB} to input ${base.inputB}?`, answer: `${base.inputB + base.addB}`, change: "Only the constant changes.", diagram: functionMachineDiagram(`${base.inputB}`, `+${base.addB}`, "?") },
    { question: `What is the output when the machine subtracts ${base.subA} from input ${base.inputC}?`, answer: `${base.inputC - base.subA}`, change: "Only the operation changes.", diagram: functionMachineDiagram(`${base.inputC}`, `-${base.subA}`, "?") },
    { question: `What is the output when the machine multiplies input ${base.inputD} by ${base.multA}?`, answer: `${base.inputD * base.multA}`, change: "Only the operation changes again.", diagram: functionMachineDiagram(`${base.inputD}`, `x${base.multA}`, "?") },
    { question: `What is the output when the machine multiplies input ${base.inputE} by ${base.multB}?`, answer: `${base.inputE * base.multB}`, change: "Only the multiplier changes.", diagram: functionMachineDiagram(`${base.inputE}`, `x${base.multB}`, "?") },
    { question: `What is the output when the machine divides input ${base.inputF} by ${base.divA}?`, answer: `${base.inputF / base.divA}`, change: "Only the operation changes to division.", diagram: functionMachineDiagram(`${base.inputF}`, `÷${base.divA}`, "?") },
    { question: `What is the output when the machine adds ${base.addC} to input ${base.inputG}?`, answer: `${base.inputG + base.addC}`, change: "Only the values change.", diagram: functionMachineDiagram(`${base.inputG}`, `+${base.addC}`, "?") },
    { question: `What is the output when the machine subtracts ${base.subB} from input ${base.inputH}?`, answer: `${base.inputH - base.subB}`, change: "Only the subtraction constant changes.", diagram: functionMachineDiagram(`${base.inputH}`, `-${base.subB}`, "?") },
    { question: `What is the output when the machine multiplies input ${base.inputI} by ${base.multC}?`, answer: `${base.inputI * base.multC}`, change: "Only the input changes.", diagram: functionMachineDiagram(`${base.inputI}`, `x${base.multC}`, "?") },
    { question: `What is the output when the machine adds ${base.addD} to input ${base.inputJ}?`, answer: `${base.inputJ + base.addD}`, change: "Final step returns to addition with new values.", diagram: functionMachineDiagram(`${base.inputJ}`, `+${base.addD}`, "?") }
  ];
  return { questions: items };
}

function generateFunctionFindInput(settings, difficultyKey) {
  const base = getFunctionMachineBase(settings, difficultyKey);
  const items = [
    { question: `What input gives output ${base.inputA + base.addA} for a machine that adds ${base.addA}?`, answer: `${base.inputA}`, change: "Starting example.", diagram: functionMachineDiagram("?", `+${base.addA}`, `${base.inputA + base.addA}`) },
    { question: `What input gives output ${base.inputB + base.addB} for a machine that adds ${base.addB}?`, answer: `${base.inputB}`, change: "Only the constant changes.", diagram: functionMachineDiagram("?", `+${base.addB}`, `${base.inputB + base.addB}`) },
    { question: `What input gives output ${base.inputC - base.subA} for a machine that subtracts ${base.subA}?`, answer: `${base.inputC}`, change: "Only the operation changes.", diagram: functionMachineDiagram("?", `-${base.subA}`, `${base.inputC - base.subA}`) },
    { question: `What input gives output ${base.inputD * base.multA} for a machine that multiplies by ${base.multA}?`, answer: `${base.inputD}`, change: "Only the operation changes again.", diagram: functionMachineDiagram("?", `x${base.multA}`, `${base.inputD * base.multA}`) },
    { question: `What input gives output ${base.inputF / base.divA} for a machine that divides by ${base.divA}?`, answer: `${base.inputF}`, change: "Only the operation changes to division.", diagram: functionMachineDiagram("?", `÷${base.divA}`, `${base.inputF / base.divA}`) },
    { question: `What input gives output ${base.inputG + base.addC} for a machine that adds ${base.addC}?`, answer: `${base.inputG}`, change: "Only the values change.", diagram: functionMachineDiagram("?", `+${base.addC}`, `${base.inputG + base.addC}`) },
    { question: `What input gives output ${base.inputH - base.subB} for a machine that subtracts ${base.subB}?`, answer: `${base.inputH}`, change: "Only the subtraction constant changes.", diagram: functionMachineDiagram("?", `-${base.subB}`, `${base.inputH - base.subB}`) },
    { question: `What input gives output ${base.inputE * base.multB} for a machine that multiplies by ${base.multB}?`, answer: `${base.inputE}`, change: "Only the multiplier changes.", diagram: functionMachineDiagram("?", `x${base.multB}`, `${base.inputE * base.multB}`) },
    { question: `What input gives output ${base.inputJ + base.addD} for a machine that adds ${base.addD}?`, answer: `${base.inputJ}`, change: "Only the input changes.", diagram: functionMachineDiagram("?", `+${base.addD}`, `${base.inputJ + base.addD}`) },
    { question: `What input gives output ${base.inputI * base.multC} for a machine that multiplies by ${base.multC}?`, answer: `${base.inputI}`, change: "Final step returns to multiplication.", diagram: functionMachineDiagram("?", `x${base.multC}`, `${base.inputI * base.multC}`) }
  ];
  return { questions: items };
}

function generateFunctionRule(settings, difficultyKey) {
  const base = getFunctionMachineBase(settings, difficultyKey);
  const items = [
    { question: `What rule changes 4 to ${4 + base.addA}?`, answer: `+${base.addA}`, change: "Starting example.", diagram: functionMachineDiagram("4", "?", `${4 + base.addA}`) },
    { question: `What rule changes 7 to ${7 - base.subA}?`, answer: `-${base.subA}`, change: "Only the operation changes.", diagram: functionMachineDiagram("7", "?", `${7 - base.subA}`) },
    { question: `What rule changes 3 to ${3 * base.multA}?`, answer: `x${base.multA}`, change: "Only the operation changes again.", diagram: functionMachineDiagram("3", "?", `${3 * base.multA}`) },
    { question: `What rule changes ${base.inputF} to ${base.inputF / base.divA}?`, answer: `÷${base.divA}`, change: "Only the operation changes to division.", diagram: functionMachineDiagram(`${base.inputF}`, "?", `${base.inputF / base.divA}`) },
    { question: `What rule changes 5 to ${5 + base.addB}?`, answer: `+${base.addB}`, change: "Only the constant changes.", diagram: functionMachineDiagram("5", "?", `${5 + base.addB}`) },
    { question: `What rule changes 8 to ${8 - base.subB}?`, answer: `-${base.subB}`, change: "Only the subtraction constant changes.", diagram: functionMachineDiagram("8", "?", `${8 - base.subB}`) },
    { question: `What rule changes 6 to ${6 * base.multB}?`, answer: `x${base.multB}`, change: "Only the multiplier changes.", diagram: functionMachineDiagram("6", "?", `${6 * base.multB}`) },
    { question: `What rule changes 20 to ${20 / base.divB}?`, answer: `÷${base.divB}`, change: "Only the divisor changes.", diagram: functionMachineDiagram("20", "?", `${20 / base.divB}`) },
    { question: `What rule changes 9 to ${9 + base.addC}?`, answer: `+${base.addC}`, change: "Only the input changes.", diagram: functionMachineDiagram("9", "?", `${9 + base.addC}`) },
    { question: `What rule changes 10 to ${10 * base.multC}?`, answer: `x${base.multC}`, change: "Final step returns to multiplication.", diagram: functionMachineDiagram("10", "?", `${10 * base.multC}`) }
  ];
  return { questions: items };
}

function generateFunctionReverse(settings, difficultyKey) {
  const base = getFunctionMachineBase(settings, difficultyKey);
  const items = [
    { question: `What is the reverse of +${base.addA}?`, answer: `-${base.addA}`, change: "Starting example.", diagram: functionMachineDiagram("input", `+${base.addA}`, "output") },
    { question: `What is the reverse of -${base.subA}?`, answer: `+${base.subA}`, change: "Only the operation changes.", diagram: functionMachineDiagram("input", `-${base.subA}`, "output") },
    { question: `What is the reverse of x${base.multA}?`, answer: `÷${base.multA}`, change: "Only the operation changes again.", diagram: functionMachineDiagram("input", `x${base.multA}`, "output") },
    { question: `What is the reverse of ÷${base.divA}?`, answer: `x${base.divA}`, change: "Only the operation changes to division.", diagram: functionMachineDiagram("input", `÷${base.divA}`, "output") },
    { question: `What is the reverse of +${base.addB}?`, answer: `-${base.addB}`, change: "Only the constant changes.", diagram: functionMachineDiagram("input", `+${base.addB}`, "output") },
    { question: `What is the reverse of -${base.subB}?`, answer: `+${base.subB}`, change: "Only the subtraction constant changes.", diagram: functionMachineDiagram("input", `-${base.subB}`, "output") },
    { question: `What is the reverse of x${base.multB}?`, answer: `÷${base.multB}`, change: "Only the multiplier changes.", diagram: functionMachineDiagram("input", `x${base.multB}`, "output") },
    { question: `What is the reverse of ÷${base.divB}?`, answer: `x${base.divB}`, change: "Only the divisor changes.", diagram: functionMachineDiagram("input", `÷${base.divB}`, "output") },
    { question: `What is the reverse of +${base.addC}?`, answer: `-${base.addC}`, change: "Only the wording changes.", diagram: functionMachineDiagram("input", `+${base.addC}`, "output") },
    { question: `What is the reverse of x${base.multC}?`, answer: `÷${base.multC}`, change: "Final step returns to multiplication.", diagram: functionMachineDiagram("input", `x${base.multC}`, "output") }
  ];
  return { questions: items };
}

function generateSequencesTeaching(topic, variant, settings, difficultyKey) {
  const base = getSequenceBase(settings, difficultyKey);
  let sequence;

  if (variant.id === "find-the-rule") {
    sequence = [
      { question: `Find the rule for ${base.ruleA.terms.join(", ")}.`, answer: base.ruleA.rule, change: "Model describing the constant step." },
      { question: `Find the rule for ${base.ruleB.terms.join(", ")}.`, answer: base.ruleB.rule, change: "Only the step size changes." },
      { question: `Find the rule for ${base.ruleC.terms.join(", ")}.`, answer: base.ruleC.rule, change: "Only the start value changes." }
    ];
  } else if (variant.id === "missing-terms") {
    sequence = [
      { question: `${base.missingA.terms.join(", ")}, __, ${base.missingA.next}`, answer: `${base.missingA.answer}`, change: "Model filling one missing term." },
      { question: `${base.missingB.first}, __, ${base.missingB.third}, ${base.missingB.fourth}`, answer: `${base.missingB.answer}`, change: "Only the missing position changes." },
      { question: `${base.missingC.first}, ${base.missingC.second}, __, ${base.missingC.fourth}`, answer: `${base.missingC.answer}`, change: "Only the sequence changes." }
    ];
  } else if (variant.id === "nth-term-intro") {
    sequence = [
      { question: `For the sequence ${base.nthA.terms.join(", ")}, what is the nth term?`, answer: base.nthA.rule, change: "Model linking term position to a rule." },
      { question: `For the sequence ${base.nthB.terms.join(", ")}, what is the nth term?`, answer: base.nthB.rule, change: "Only the multiplier changes." },
      { question: `For the sequence ${base.nthC.terms.join(", ")}, what is the nth term?`, answer: base.nthC.rule, change: "Only the constant shift changes." }
    ];
  } else {
    sequence = [
      { question: `Continue the sequence: ${base.continueA.terms.join(", ")}, ...`, answer: base.continueA.next.join(", "), change: "Model adding the same amount each time." },
      { question: `Continue the sequence: ${base.continueB.terms.join(", ")}, ...`, answer: base.continueB.next.join(", "), change: "Only the step size changes." },
      { question: `Continue the sequence: ${base.continueC.terms.join(", ")}, ...`, answer: base.continueC.next.join(", "), change: "Only the starting value changes." }
    ];
  }

  return createTeachingSequence(topic, variant, sequence);
}

function generateSequences(_topic, variant, settings, difficultyKey) {
  if (variant.id === "find-the-rule") return generateSequenceRules(settings, difficultyKey);
  if (variant.id === "missing-terms") return generateSequenceMissing(settings, difficultyKey);
  if (variant.id === "nth-term-intro") return generateSequenceNthTerm(settings, difficultyKey);
  return generateSequenceContinue(settings, difficultyKey);
}

function generateSequenceContinue(settings, difficultyKey) {
  const base = getSequenceBase(settings, difficultyKey);
  const items = [
    { question: `Continue the sequence: ${base.continueA.terms.join(", ")}, ...`, answer: base.continueA.next.join(", "), change: "Starting example." },
    { question: `Continue the sequence: ${base.continueB.terms.join(", ")}, ...`, answer: base.continueB.next.join(", "), change: "Only the step size changes." },
    { question: `Continue the sequence: ${base.continueC.terms.join(", ")}, ...`, answer: base.continueC.next.join(", "), change: "Only the start value changes." },
    { question: `Continue the sequence: ${base.continueD.terms.join(", ")}, ...`, answer: base.continueD.next.join(", "), change: "Only the sequence direction changes." },
    { question: `Continue the sequence: ${base.continueE.terms.join(", ")}, ...`, answer: base.continueE.next.join(", "), change: "Only the gap becomes larger." },
    { question: `Continue the sequence: ${base.continueF.terms.join(", ")}, ...`, answer: base.continueF.next.join(", "), change: "Only the start value changes again." },
    { question: `Continue the sequence: ${base.continueG.terms.join(", ")}, ...`, answer: base.continueG.next.join(", "), change: "Only the sign pattern changes." },
    { question: `Continue the sequence: ${base.continueH.terms.join(", ")}, ...`, answer: base.continueH.next.join(", "), change: "Only the values become larger." },
    { question: `Continue the sequence: ${base.continueI.terms.join(", ")}, ...`, answer: base.continueI.next.join(", "), change: "Only the interval changes." },
    { question: `Final check: continue ${base.continueJ.terms.join(", ")}, ...`, answer: base.continueJ.next.join(", "), change: "Final step keeps the same linear structure." }
  ];
  return { questions: items };
}

function generateSequenceRules(settings, difficultyKey) {
  const base = getSequenceBase(settings, difficultyKey);
  const items = [base.ruleA, base.ruleB, base.ruleC, base.ruleD, base.ruleE, base.ruleF, base.ruleG, base.ruleH, base.ruleI, base.ruleJ]
    .map((item, index) => ({
      question: `Find the rule for ${item.terms.join(", ")}.`,
      answer: item.rule,
      change: index === 0 ? "Starting example." : "Only the step size, direction or start value changes."
    }));
  return { questions: items };
}

function generateSequenceMissing(settings, difficultyKey) {
  const base = getSequenceBase(settings, difficultyKey);
  const items = [base.missingA, base.missingB, base.missingC, base.missingD, base.missingE, base.missingF, base.missingG, base.missingH, base.missingI, base.missingJ]
    .map((item, index) => ({
      question: item.prompt,
      answer: `${item.answer}`,
      change: index === 0 ? "Starting example." : "Only the missing position or step size changes."
    }));
  return { questions: items };
}

function generateSequenceNthTerm(settings, difficultyKey) {
  const base = getSequenceBase(settings, difficultyKey);
  const items = [base.nthA, base.nthB, base.nthC, base.nthD, base.nthE, base.nthF, base.nthG, base.nthH, base.nthI, base.nthJ]
    .map((item, index) => ({
      question: index % 2 === 0 ? `For the sequence ${item.terms.join(", ")}, what is the nth term?` : `Which nth term matches ${item.terms.join(", ")}: ${item.rule} or ${item.distractor}?`,
      answer: item.rule,
      change: index === 0 ? "Starting example." : "Only the coefficient or constant shift changes."
    }));
  return { questions: items };
}

function generateDecimalOperationsTeaching(topic, variant, settings, difficultyKey) {
  const base = getDecimalOperationBase(settings, difficultyKey);
  let sequence;

  if (variant.id === "multiply-divide-10") {
    sequence = [
      { question: `Calculate ${base.shiftA.value} × 10.`, answer: `${base.shiftA.times10}`, change: "Model a one-place shift to the left." },
      { question: `Calculate ${base.shiftB.value} ÷ 10.`, answer: `${base.shiftB.divide10}`, change: "Only the operation changes." },
      { question: `Calculate ${base.shiftC.value} × 100.`, answer: `${base.shiftC.times100}`, change: "Only the scale factor changes." }
    ];
  } else if (variant.id === "missing-value") {
    sequence = [
      { question: `${base.missingA.left} + ? = ${base.missingA.total}`, answer: `${base.missingA.answer}`, change: "Model finding a missing decimal addend." },
      { question: `? - ${base.missingB.right} = ${base.missingB.result}`, answer: `${base.missingB.answer}`, change: "Only the missing part moves." },
      { question: `${base.missingC.left} + ? = ${base.missingC.total}`, answer: `${base.missingC.answer}`, change: "Only the decimals change." }
    ];
  } else if (variant.id === "error-spotting") {
    sequence = [
      { question: `A pupil says ${base.errorA.prompt} = ${base.errorA.wrong}. Are they correct?`, answer: "No", change: "Model spotting a decimal place value error." },
      { question: `Correct ${base.errorA.prompt}.`, answer: `${base.errorA.right}`, change: "Only the task changes from spotting to correcting." },
      { question: `A pupil says ${base.errorB.prompt} = ${base.errorB.right}. Are they correct?`, answer: "Yes", change: "Only the worked example becomes valid." }
    ];
  } else {
    sequence = [
      { question: `Calculate ${base.directA.left} + ${base.directA.right}.`, answer: `${base.directA.answer}`, change: "Model lining up decimal places." },
      { question: `Calculate ${base.directB.left} - ${base.directB.right}.`, answer: `${base.directB.answer}`, change: "Only the operation changes." },
      { question: `Calculate ${base.directC.left} + ${base.directC.right}.`, answer: `${base.directC.answer}`, change: "Only the digits change." }
    ];
  }

  return createTeachingSequence(topic, variant, sequence);
}

function generateDecimalOperations(_topic, variant, settings, difficultyKey) {
  if (variant.id === "multiply-divide-10") return generateDecimalShift(settings, difficultyKey);
  if (variant.id === "missing-value") return generateDecimalMissingValue(settings, difficultyKey);
  if (variant.id === "error-spotting") return generateDecimalOperationErrors(settings, difficultyKey);
  return generateDecimalAddSubtract(settings, difficultyKey);
}

function generateDecimalAddSubtract(settings, difficultyKey) {
  const base = getDecimalOperationBase(settings, difficultyKey);
  const items = [base.directA, base.directB, base.directC, base.directD, base.directE, base.directF, base.directG, base.directH, base.directI, base.directJ]
    .map((item, index) => ({
      question: `Calculate ${item.left} ${item.operation} ${item.right}.`,
      answer: `${item.answer}`,
      change: index === 0 ? "Starting example." : "Only one digit or the operation changes."
    }));
  return { questions: items };
}

function generateDecimalShift(settings, difficultyKey) {
  const base = getDecimalOperationBase(settings, difficultyKey);
  const items = [
    { question: `Calculate ${base.shiftA.value} × 10.`, answer: `${base.shiftA.times10}`, change: "Starting example." },
    { question: `Calculate ${base.shiftB.value} ÷ 10.`, answer: `${base.shiftB.divide10}`, change: "Only the operation changes." },
    { question: `Calculate ${base.shiftC.value} × 100.`, answer: `${base.shiftC.times100}`, change: "Only the scale factor changes." },
    { question: `Calculate ${base.shiftD.value} ÷ 100.`, answer: `${base.shiftD.divide100}`, change: "Only the direction changes again." },
    { question: `Calculate ${base.shiftE.value} × 1000.`, answer: `${base.shiftE.times1000}`, change: "Only the place value shift becomes larger." },
    { question: `Calculate ${base.shiftF.value} ÷ 1000.`, answer: `${base.shiftF.divide1000}`, change: "Only the operation changes again." },
    { question: `Which is correct for ${base.shiftG.value} × 10: ${base.shiftG.optionA} or ${base.shiftG.optionB}?`, answer: `${base.shiftG.answer}`, change: "Only the task changes to selection." },
    { question: `True or false: ${base.shiftH.value} ÷ 10 = ${base.shiftH.answer}.`, answer: "True", change: "Only the format changes to true or false." },
    { question: `A pupil says ${base.shiftI.value} × 100 = ${base.shiftI.wrong}. Are they correct?`, answer: "No", change: "Only a non-example is introduced." },
    { question: `Final check: calculate ${base.shiftJ.value} ÷ 10.`, answer: `${base.shiftJ.divide10}`, change: "Final step returns to a one-place shift." }
  ];
  return { questions: items };
}

function generateDecimalMissingValue(settings, difficultyKey) {
  const base = getDecimalOperationBase(settings, difficultyKey);
  const items = [base.missingA, base.missingB, base.missingC, base.missingD, base.missingE, base.missingF, base.missingG, base.missingH, base.missingI, base.missingJ]
    .map((item, index) => ({
      question: item.prompt,
      answer: `${item.answer}`,
      change: index === 0 ? "Starting example." : "Only the missing part or operation changes."
    }));
  return { questions: items };
}

function generateDecimalOperationErrors(settings, difficultyKey) {
  const base = getDecimalOperationBase(settings, difficultyKey);
  const items = [base.errorA, base.errorB, base.errorC, base.errorD, base.errorE, base.errorF, base.errorG, base.errorH, base.errorI, base.errorJ]
    .map((item, index) => ({
      question: index % 2 === 0 ? `A pupil says ${item.prompt} = ${item.wrong}. Are they correct?` : `Correct ${item.prompt}.`,
      answer: index % 2 === 0 ? "No" : `${item.right}`,
      change: index === 0 ? "Starting example." : "Only the misconception or task type changes."
    }));
  return { questions: items };
}

function generateProperties2DShapesTeaching(topic, variant, settings, difficultyKey) {
  const base = getShapePropertyBase(settings, difficultyKey);
  let sequence;

  if (variant.id === "classify-properties") {
    sequence = [
      { question: base.classifyA.prompt, answer: base.classifyA.answer, change: "Model matching a shape to a defining property.", diagram: createNamedShapeDiagram(base.classifyA.shape) },
      { question: base.classifyB.prompt, answer: base.classifyB.answer, change: "Only the shape changes.", diagram: createNamedShapeDiagram(base.classifyB.shape) },
      { question: base.classifyC.prompt, answer: base.classifyC.answer, change: "Only the family of shape changes.", diagram: createNamedShapeDiagram(base.classifyC.shape) }
    ];
  } else if (variant.id === "symmetry") {
    sequence = [
      { question: base.symmetryA.prompt, answer: base.symmetryA.answer, change: "Model identifying a line-of-symmetry fact.", diagram: createNamedShapeDiagram(base.symmetryA.shape, { showSymmetry: true }) },
      { question: base.symmetryB.prompt, answer: base.symmetryB.answer, change: "Only the shape changes.", diagram: createNamedShapeDiagram(base.symmetryB.shape, { showSymmetry: true }) },
      { question: base.symmetryC.prompt, answer: base.symmetryC.answer, change: "Only the symmetry demand changes.", diagram: createNamedShapeDiagram(base.symmetryC.shape, { showSymmetry: true }) }
    ];
  } else if (variant.id === "always-sometimes-never") {
    sequence = [
      { question: base.alwaysA.statement, answer: base.alwaysA.answer, change: "Model judging a shape property statement.", diagram: shapeStatementDiagram(base.alwaysA.statement) },
      { question: base.alwaysB.statement, answer: base.alwaysB.answer, change: "Only the property changes.", diagram: shapeStatementDiagram(base.alwaysB.statement) },
      { question: base.alwaysC.statement, answer: base.alwaysC.answer, change: "Only the shape class changes.", diagram: shapeStatementDiagram(base.alwaysC.statement) }
    ];
  } else if (variant.id === "odd-one-out") {
    sequence = [
      { question: base.oddA.prompt, answer: base.oddA.answer, change: "Model identifying the non-matching shape.", diagram: oddOneOutDiagram(base.oddA.prompt) },
      { question: base.oddB.prompt, answer: base.oddB.answer, change: "Only the property focus changes.", diagram: oddOneOutDiagram(base.oddB.prompt) },
      { question: base.oddC.prompt, answer: base.oddC.answer, change: "Only the set changes.", diagram: oddOneOutDiagram(base.oddC.prompt) }
    ];
  } else {
    sequence = [
      { question: `Name the shape shown.`, answer: base.identifyA.answer, change: "Model identifying a 2D shape from its outline.", diagram: createNamedShapeDiagram(base.identifyA.shape) },
      { question: `Name the shape shown.`, answer: base.identifyB.answer, change: "Only the number of sides changes.", diagram: createNamedShapeDiagram(base.identifyB.shape) },
      { question: `Name the shape shown.`, answer: base.identifyC.answer, change: "Only the regularity and shape family change.", diagram: createNamedShapeDiagram(base.identifyC.shape) }
    ];
  }

  return createTeachingSequence(topic, variant, sequence);
}

function generateProperties2DShapes(_topic, variant, settings, difficultyKey) {
  if (variant.id === "classify-properties") return generateShapeClassification(settings, difficultyKey);
  if (variant.id === "symmetry") return generateShapeSymmetry(settings, difficultyKey);
  if (variant.id === "always-sometimes-never") return generateShapeAlwaysSometimesNever(settings, difficultyKey);
  if (variant.id === "odd-one-out") return generateShapeOddOneOut(settings, difficultyKey);
  return generateShapeIdentify(settings, difficultyKey);
}

function generateShapeIdentify(settings, difficultyKey) {
  const base = getShapePropertyBase(settings, difficultyKey);
  const promptTemplates = [
    "Name the shape shown.",
    "What is the name of this shape?",
    "Which shape is shown here?",
    "Identify the shape shown.",
    "Name this 2D shape.",
    "What is this shape called?",
    "Which 2D shape is shown?",
    "Identify this shape.",
    "Name the polygon shown.",
    "What is the correct name for the shape shown?"
  ];
  const items = [base.identifyA, base.identifyB, base.identifyC, base.identifyD, base.identifyE, base.identifyF, base.identifyG, base.identifyH, base.identifyI, base.identifyJ]
    .map((item, index) => ({
      question: promptTemplates[index],
      answer: item.answer,
      change: index === 0 ? "Starting example." : "Only the number of sides or regularity changes.",
      diagram: createNamedShapeDiagram(item.shape)
    }));
  return { questions: items };
}

function generateShapeClassification(settings, difficultyKey) {
  const base = getShapePropertyBase(settings, difficultyKey);
  const items = [base.classifyA, base.classifyB, base.classifyC, base.classifyD, base.classifyE, base.classifyF, base.classifyG, base.classifyH, base.classifyI, base.classifyJ]
    .map((item, index) => ({
      question: item.prompt,
      answer: item.answer,
      change: index === 0 ? "Starting example." : "Only the shape or property focus changes.",
      diagram: createNamedShapeDiagram(item.shape)
    }));
  return { questions: items };
}

function generateShapeAlwaysSometimesNever(settings, difficultyKey) {
  const base = getShapePropertyBase(settings, difficultyKey);
  const items = [base.alwaysA, base.alwaysB, base.alwaysC, base.alwaysD, base.alwaysE, base.alwaysF, base.alwaysG, base.alwaysH, base.alwaysI, base.alwaysJ]
    .map((item, index) => ({
      question: item.statement,
      answer: item.answer,
      change: index === 0 ? "Starting example." : "Only the statement focus changes.",
      diagram: shapeStatementDiagram(item.statement)
    }));
  return { questions: items };
}

function generateShapeSymmetry(settings, difficultyKey) {
  const base = getShapePropertyBase(settings, difficultyKey);
  const items = [base.symmetryA, base.symmetryB, base.symmetryC, base.symmetryD, base.symmetryE, base.symmetryF, base.symmetryG, base.symmetryH, base.symmetryI, base.symmetryJ]
    .map((item, index) => ({
      question: injectShapeIntoSymmetryPrompt(item.prompt, item.shape),
      answer: item.answer,
      change: index === 0 ? "Starting example." : "Only the shape or symmetry focus changes.",
      diagram: createNamedShapeDiagram(item.shape, { showSymmetry: true })
    }));
  return { questions: items };
}

function generateShapeOddOneOut(settings, difficultyKey) {
  const base = getShapePropertyBase(settings, difficultyKey);
  const items = [base.oddA, base.oddB, base.oddC, base.oddD, base.oddE, base.oddF, base.oddG, base.oddH, base.oddI, base.oddJ]
    .map((item, index) => ({
      question: item.prompt,
      answer: item.answer,
      change: index === 0 ? "Starting example." : "Only the shared property changes.",
      diagram: oddOneOutDiagram(item.prompt)
    }));
  return { questions: items };
}

function generateFactorsMultiplesPrimesTeaching(topic, variant, settings, difficultyKey) {
  const base = getFactorBase(settings, difficultyKey);
  let sequence;

  if (variant.id === "prime-or-composite") {
    sequence = [
      { question: `Is ${base.primeA} prime or composite?`, answer: "Prime", change: "Model checking for exactly two factors." },
      { question: `Is ${base.compositeA} prime or composite?`, answer: "Composite", change: "Only the factor structure changes." },
      { question: `Is ${base.primeB} prime or composite?`, answer: "Prime", change: "Only the number changes for independent practice." }
    ];
  } else if (variant.id === "divisibility-checks") {
    sequence = [
      { question: `Is ${base.div2A} divisible by 2?`, answer: base.div2A % 2 === 0 ? "Yes" : "No", change: "Model using the final digit test." },
      { question: `Is ${base.div3A} divisible by 3?`, answer: digitSum(base.div3A) % 3 === 0 ? "Yes" : "No", change: "Only the divisibility rule changes." },
      { question: `Is ${base.div5A} divisible by 5?`, answer: base.div5A % 5 === 0 ? "Yes" : "No", change: "Only the divisibility rule changes again." }
    ];
  } else if (variant.id === "error-spotting") {
    sequence = [
      { question: `A pupil says ${base.errorPrime} is prime because it is odd. Are they correct?`, answer: "No", change: "Model spotting a false prime claim." },
      { question: `A pupil says ${base.factorTarget} is a factor of ${base.factorNumber}. Are they correct?`, answer: base.factorNumber % base.factorTarget === 0 ? "Yes" : "No", change: "Only the statement type changes." },
      { question: `A pupil says all multiples of ${base.multipleBase} end in ${String(base.multipleBase).slice(-1)}. Are they correct?`, answer: "No", change: "Only the misconception changes." }
    ];
  } else {
    sequence = [
      { question: `Is ${base.factorTarget} a factor of ${base.factorNumber}?`, answer: base.factorNumber % base.factorTarget === 0 ? "Yes" : "No", change: "Model checking whether one number divides exactly into another." },
      { question: `Is ${base.multipleNumber} a multiple of ${base.multipleBase}?`, answer: "Yes", change: "Only the language changes from factor to multiple." },
      { question: `Name one factor of ${base.factorNumberB}.`, answer: `${base.factorOfB}`, change: "Only the task changes from yes/no to generating a factor." }
    ];
  }

  return createTeachingSequence(topic, variant, sequence);
}

function generateFactorsMultiplesPrimes(_topic, variant, settings, difficultyKey) {
  if (variant.id === "prime-or-composite") {
    return generatePrimeComposite(settings, difficultyKey);
  }

  if (variant.id === "divisibility-checks") {
    return generateDivisibilityChecks(settings, difficultyKey);
  }

  if (variant.id === "error-spotting") {
    return generateFactorErrors(settings, difficultyKey);
  }

  return generateFactorsAndMultiples(settings, difficultyKey);
}

function generateFactorsAndMultiples(settings, difficultyKey) {
  const base = getFactorBase(settings, difficultyKey);
  const items = [
    { question: `Is ${base.factorTarget} a factor of ${base.factorNumber}?`, answer: base.factorNumber % base.factorTarget === 0 ? "Yes" : "No", change: "Starting example." },
    { question: `Is ${base.factorTarget + 1} a factor of ${base.factorNumber}?`, answer: base.factorNumber % (base.factorTarget + 1) === 0 ? "Yes" : "No", change: "Only the proposed factor changes." },
    { question: `Is ${base.multipleNumber} a multiple of ${base.multipleBase}?`, answer: "Yes", change: "Only the language changes from factor to multiple." },
    { question: `Is ${base.multipleNumber + base.multipleBase} a multiple of ${base.multipleBase}?`, answer: "Yes", change: "Only the multiple changes." },
    { question: `Name one factor of ${base.factorNumberB}.`, answer: `${base.factorOfB}`, change: "Only the task changes to generating a factor." },
    { question: `Name one multiple of ${base.multipleBaseB} greater than ${base.multipleFloor}.`, answer: `${base.multipleAnswer}`, change: "Only the task changes to generating a multiple." },
    { question: `Which is a factor of ${base.factorNumberC}: ${base.factorOptionA} or ${base.factorOptionB}?`, answer: `${base.correctFactorOption}`, change: "Only the format changes to selection." },
    { question: `Which is a multiple of ${base.multipleBaseC}: ${base.multipleOptionA} or ${base.multipleOptionB}?`, answer: `${base.correctMultipleOption}`, change: "Only the focus changes back to multiples." },
    { question: `Complete: ${base.factorNumberD} = ${base.factorPairA} x ____.`, answer: `${base.factorPairB}`, change: "Only the factor representation changes to a pair." },
    { question: `Final check: list all factors of ${base.finalFactorNumber}.`, answer: `${formatNumberList(listFactors(base.finalFactorNumber))}`, change: "Final step expands from one factor to the full set." }
  ];

  return { questions: items };
}

function generatePrimeComposite(settings, difficultyKey) {
  const base = getFactorBase(settings, difficultyKey);
  const items = [
    { question: `Is ${base.primeA} prime or composite?`, answer: "Prime", change: "Starting example." },
    { question: `Is ${base.compositeA} prime or composite?`, answer: "Composite", change: "Only the factor structure changes." },
    { question: `Is ${base.primeB} prime or composite?`, answer: "Prime", change: "Only the number changes." },
    { question: `Is ${base.compositeB} prime or composite?`, answer: "Composite", change: "Only the number changes again." },
    { question: `Which is prime: ${base.choicePrimeA} or ${base.choicePrimeB}?`, answer: `${base.correctPrimeChoice}`, change: "Only the prompt changes to comparison." },
    { question: `True or false: ${base.statementPrimeA} is prime because it is odd.`, answer: "False", change: "Only the prompt changes to a statement." },
    { question: `True or false: ${base.statementPrimeB} is composite because it has more than two factors.`, answer: "True", change: "Only the truth value changes." },
    { question: `Which is composite: ${base.choiceCompositeA} or ${base.choiceCompositeB}?`, answer: `${base.correctCompositeChoice}`, change: "Only the classification target changes." },
    { question: `Explain why ${base.explainComposite} is composite.`, answer: `It has factors other than 1 and ${base.explainComposite}.`, change: "Only the task changes from classifying to explaining." },
    { question: `Final check: sort these into prime and composite: ${base.sortNumbers.join(", ")}.`, answer: `Prime: ${base.sortPrime.join(", ")}; Composite: ${base.sortComposite.join(", ")}`, change: "Final step classifies a set." }
  ];

  return { questions: items };
}

function generateDivisibilityChecks(settings, difficultyKey) {
  const base = getFactorBase(settings, difficultyKey);
  const items = [
    { question: `Is ${base.div2A} divisible by 2?`, answer: base.div2A % 2 === 0 ? "Yes" : "No", change: "Starting example." },
    { question: `Is ${base.div2B} divisible by 2?`, answer: base.div2B % 2 === 0 ? "Yes" : "No", change: "Only the final digit changes." },
    { question: `Is ${base.div3A} divisible by 3?`, answer: digitSum(base.div3A) % 3 === 0 ? "Yes" : "No", change: "Only the divisibility rule changes." },
    { question: `Is ${base.div3B} divisible by 3?`, answer: digitSum(base.div3B) % 3 === 0 ? "Yes" : "No", change: "Only the number changes." },
    { question: `Is ${base.div5A} divisible by 5?`, answer: base.div5A % 5 === 0 ? "Yes" : "No", change: "Only the divisibility rule changes again." },
    { question: `Is ${base.div10A} divisible by 10?`, answer: base.div10A % 10 === 0 ? "Yes" : "No", change: "Only the divisibility rule changes again." },
    { question: `Which is divisible by 3: ${base.divChoiceA} or ${base.divChoiceB}?`, answer: `${base.correctDivChoice}`, change: "Only the format changes to comparison." },
    { question: `True or false: ${base.divStatement} is divisible by 5 because it ends in ${String(base.divStatement).slice(-1)}.`, answer: base.divStatement % 5 === 0 ? "True" : "False", change: "Only the prompt changes to a statement." },
    { question: `Which numbers are divisible by 2 and 5: ${base.divSet.join(", ")}?`, answer: `${base.divSet.filter((value) => value % 10 === 0).join(", ")}`, change: "Only the task changes to a set filter." },
    { question: `Final check: is ${base.divFinal} divisible by 2, 3, 5 or 10?`, answer: `${divisibilitySummary(base.divFinal)}`, change: "Final step combines the rules." }
  ];

  return { questions: items };
}

function generateFactorErrors(settings, difficultyKey) {
  const base = getFactorBase(settings, difficultyKey);
  const items = [
    { question: `A pupil says ${base.errorPrime} is prime because it is odd. Are they correct?`, answer: "No", change: "Starting example." },
    { question: `Correct the claim about ${base.errorPrime}.`, answer: `${base.errorPrime} is composite.`, change: "Only the task changes from spotting to correcting." },
    { question: `A pupil says ${base.factorTarget} is a factor of ${base.factorNumber}. Are they correct?`, answer: base.factorNumber % base.factorTarget === 0 ? "Yes" : "No", change: "Only the claim changes to factors." },
    { question: `A pupil says ${base.multipleNumber} is not a multiple of ${base.multipleBase}. Are they correct?`, answer: "No", change: "Only the claim changes to multiples." },
    { question: `A pupil says 1 is a prime number. Are they correct?`, answer: "No", change: "Only the misconception changes." },
    { question: `A pupil says every even number is prime. Are they correct?`, answer: "No", change: "Only the general statement changes." },
    { question: `Which statement is correct? A) A multiple is what you get when you multiply a number. B) A factor is what you get when you add a number.`, answer: "A", change: "Only the prompt changes to selecting the correct definition." },
    { question: `A pupil says ${base.compositeA} is prime because it only has factors 1 and ${base.compositeA}. Are they correct?`, answer: "No", change: "Only the named number changes." },
    { question: `Repair this: ${base.factorNumberD} has factors 1, ${base.factorPairA}, ${base.factorPairB}.`, answer: `${base.factorNumberD} has factors ${formatNumberList(listFactors(base.factorNumberD))}.`, change: "Only the task changes to repairing a factor list." },
    { question: `Final check: write one correct statement about a factor and one correct statement about a multiple of ${base.multipleBaseC}.`, answer: `Example factor statement: ${base.multipleBaseC} is a factor of ${base.correctMultipleOption}. Example multiple statement: ${base.correctMultipleOption} is a multiple of ${base.multipleBaseC}.`, change: "Final step asks for generated examples." }
  ];

  return { questions: items };
}

function generateCompareOrderFractionsTeaching(topic, variant, settings, difficultyKey) {
  const base = getFractionCompareBase(settings, difficultyKey);
  let sequence;

  if (variant.id === "order-sets") {
    sequence = [
      { question: `Put these in ascending order: ${formatFractionObject(base.orderA)}, ${formatFractionObject(base.orderB)}, ${formatFractionObject(base.orderC)}.`, answer: formatFractionsSorted([base.orderA, base.orderB, base.orderC]), change: "Model comparing a small set." },
      { question: `Put these in descending order: ${formatFractionObject(base.orderD)}, ${formatFractionObject(base.orderE)}, ${formatFractionObject(base.orderF)}.`, answer: formatFractionsSorted([base.orderD, base.orderE, base.orderF], true), change: "Only the order direction changes." },
      { question: `Put these in ascending order: ${formatFractionObject(base.orderG)}, ${formatFractionObject(base.orderH)}, ${formatFractionObject(base.orderI)}.`, answer: formatFractionsSorted([base.orderG, base.orderH, base.orderI]), change: "Only the fraction set changes." }
    ];
  } else if (variant.id === "benchmarking") {
    sequence = [
      { question: `Is ${formatFractionObject(base.benchA)} less than, equal to, or greater than 1/2?`, answer: fractionVsBenchmark(base.benchA, { n: 1, d: 2 }), change: "Model using one-half as a benchmark." },
      { question: `Is ${formatFractionObject(base.benchB)} less than, equal to, or greater than 1?`, answer: fractionVsBenchmark(base.benchB, { n: 1, d: 1 }), change: "Only the benchmark changes." },
      { question: `Is ${formatFractionObject(base.benchC)} less than, equal to, or greater than 1/2?`, answer: fractionVsBenchmark(base.benchC, { n: 1, d: 2 }), change: "Only the fraction changes." }
    ];
  } else if (variant.id === "true-false") {
    sequence = [
      { question: `True or false: ${formatFractionObject(base.trueA.left)} > ${formatFractionObject(base.trueA.right)}.`, answer: base.trueA.answer, change: "Model comparing a pair statement." },
      { question: `True or false: ${formatFractionObject(base.trueB.left)} = 1/2.`, answer: base.trueB.answer, change: "Only the statement target changes." },
      { question: `True or false: ${formatFractionObject(base.trueC.left)} < ${formatFractionObject(base.trueC.right)}.`, answer: base.trueC.answer, change: "Only the fraction pair changes." }
    ];
  } else {
    sequence = [
      { question: `Which is greater: ${formatFractionObject(base.pairA.left)} or ${formatFractionObject(base.pairA.right)}?`, answer: formatFractionObject(greaterFraction(base.pairA.left, base.pairA.right)), change: "Model comparing a pair of fractions." },
      { question: `Which is smaller: ${formatFractionObject(base.pairB.left)} or ${formatFractionObject(base.pairB.right)}?`, answer: formatFractionObject(smallerFraction(base.pairB.left, base.pairB.right)), change: "Only the comparison direction changes." },
      { question: `Which is greater: ${formatFractionObject(base.pairC.left)} or ${formatFractionObject(base.pairC.right)}?`, answer: formatFractionObject(greaterFraction(base.pairC.left, base.pairC.right)), change: "Only the pair changes." }
    ];
  }

  return createTeachingSequence(topic, variant, sequence);
}

function generateCompareOrderFractions(_topic, variant, settings, difficultyKey) {
  if (variant.id === "order-sets") {
    return generateFractionOrderSets(settings, difficultyKey);
  }

  if (variant.id === "benchmarking") {
    return generateFractionBenchmarks(settings, difficultyKey);
  }

  if (variant.id === "true-false") {
    return generateFractionTrueFalse(settings, difficultyKey);
  }

  return generateFractionComparePairs(settings, difficultyKey);
}

function generateFractionComparePairs(settings, difficultyKey) {
  const base = getFractionCompareBase(settings, difficultyKey);
  const pairs = [base.pairA, base.pairB, base.pairC, base.pairD, base.pairE, base.pairF, base.pairG, base.pairH, base.pairI, base.pairJ];
  return {
    questions: pairs.map((pair, index) => ({
      question: `${index % 2 === 1 ? "Which is smaller" : "Which is greater"}: ${formatFractionObject(pair.left)} or ${formatFractionObject(pair.right)}?`,
      answer: index % 2 === 1 ? formatFractionObject(smallerFraction(pair.left, pair.right)) : formatFractionObject(greaterFraction(pair.left, pair.right)),
      change: fractionCompareChange(index)
    }))
  };
}

function generateFractionOrderSets(settings, difficultyKey) {
  const base = getFractionCompareBase(settings, difficultyKey);
  const sets = [
    [base.orderA, base.orderB, base.orderC], [base.orderD, base.orderE, base.orderF], [base.orderG, base.orderH, base.orderI],
    [base.orderJ, base.orderK, base.orderL], [base.orderM, base.orderN, base.orderO], [base.orderP, base.orderQ, base.orderR],
    [base.orderS, base.orderT, base.orderU], [base.orderV, base.orderW, base.orderX], [base.orderY, base.orderZ, base.orderAA],
    [base.orderAB, base.orderAC, base.orderAD]
  ];

  return {
    questions: sets.map((set, index) => ({
      question: `Put these in ${index % 2 === 0 ? "ascending" : "descending"} order: ${set.map(formatFractionObject).join(", ")}.`,
      answer: formatFractionsSorted(set, index % 2 === 1),
      change: fractionOrderChange(index)
    }))
  };
}

function generateFractionBenchmarks(settings, difficultyKey) {
  const base = getFractionCompareBase(settings, difficultyKey);
  const items = [
    { fraction: base.benchA, benchmark: { n: 1, d: 2 }, label: "1/2", change: "Starting example." },
    { fraction: base.benchB, benchmark: { n: 1, d: 1 }, label: "1", change: "Only the benchmark changes." },
    { fraction: base.benchC, benchmark: { n: 1, d: 2 }, label: "1/2", change: "Only the fraction changes." },
    { fraction: base.benchD, benchmark: { n: 1, d: 1 }, label: "1", change: "Only the benchmark changes again." },
    { fraction: base.benchE, benchmark: { n: 1, d: 2 }, label: "1/2", change: "Only the numerator changes." },
    { fraction: base.benchF, benchmark: { n: 1, d: 1 }, label: "1", change: "Only the denominator changes." },
    { fraction: base.benchG, benchmark: { n: 1, d: 2 }, label: "1/2", change: "Only the fraction changes again." },
    { fraction: base.benchH, benchmark: { n: 1, d: 1 }, label: "1", change: "Only the benchmark changes again." },
    { fraction: base.benchI, benchmark: { n: 1, d: 2 }, label: "1/2", change: "Only the fraction structure changes." },
    { fraction: base.benchJ, benchmark: { n: 1, d: 1 }, label: "1", change: "Final step returns to the whole-number benchmark." }
  ];

  return {
    questions: items.map((item) => ({
      question: `Is ${formatFractionObject(item.fraction)} less than, equal to, or greater than ${item.label}?`,
      answer: fractionVsBenchmark(item.fraction, item.benchmark),
      change: item.change
    }))
  };
}

function generateFractionTrueFalse(settings, difficultyKey) {
  const base = getFractionCompareBase(settings, difficultyKey);
  const items = [base.trueA, base.trueB, base.trueC, base.trueD, base.trueE, base.trueF, base.trueG, base.trueH, base.trueI, base.trueJ];

  return {
    questions: items.map((item, index) => ({
      question: item.question,
      answer: item.answer,
      change: fractionTrueFalseChange(index)
    }))
  };
}

function generateAlgebraicNotationTeaching(topic, variant, settings, difficultyKey) {
  const base = getAlgebraNotationBase(settings, difficultyKey);
  let sequence;

  if (variant.id === "simplify-notation") {
    sequence = [
      { question: `Write ${base.coeffA} x x in simpler algebraic notation.`, answer: `${base.coeffA}x`, change: "Model removing the multiplication sign." },
      { question: `Write 1 x ${base.variableA} + ${base.constantA} in simpler algebraic notation.`, answer: `${base.variableA} + ${base.constantA}`, change: "Only the coefficient changes to 1." },
      { question: `Write ${base.coeffB} x ${base.variableB} - ${base.constantB} in simpler algebraic notation.`, answer: `${base.coeffB}${base.variableB} - ${base.constantB}`, change: "Only the variable and constant change." }
    ];
  } else if (variant.id === "match-words") {
    sequence = [
      { question: `Which expression means "${base.constantA} more than x"? A) x + ${base.constantA} B) ${base.constantA}x`, answer: "A", change: "Model matching words to algebra." },
      { question: `Which expression means "${base.coeffA} times y"? A) y + ${base.coeffA} B) ${base.coeffA}y`, answer: "B", change: "Only the operation word changes." },
      { question: `Which expression means "${base.constantB} less than n"? A) n - ${base.constantB} B) ${base.constantB} - n`, answer: "A", change: "Only the phrase structure changes." }
    ];
  } else if (variant.id === "error-spotting") {
    sequence = [
      { question: `A pupil writes "${base.constantA} more than x" as ${base.constantA}x. Are they correct?`, answer: "No", change: "Model spotting addition versus multiplication." },
      { question: `Correct the expression for "${base.constantA} more than x".`, answer: `x + ${base.constantA}`, change: "Only the task changes from spotting to correcting." },
      { question: `A pupil writes "${base.coeffA} times y" as y + ${base.coeffA}. Are they correct?`, answer: "No", change: "Only the phrase changes." }
    ];
  } else {
    sequence = [
      { question: `Write an expression for "${base.constantA} more than x".`, answer: `x + ${base.constantA}`, change: "Model turning words into algebra." },
      { question: `Write an expression for "${base.coeffA} times y".`, answer: `${base.coeffA}y`, change: "Only the operation word changes." },
      { question: `Write an expression for "${base.constantB} less than n".`, answer: `n - ${base.constantB}`, change: "Only the phrase structure changes." }
    ];
  }

  return createTeachingSequence(topic, variant, sequence);
}

function generateAlgebraicNotation(_topic, variant, settings, difficultyKey) {
  if (variant.id === "simplify-notation") {
    return generateAlgebraSimplifyNotation(settings, difficultyKey);
  }

  if (variant.id === "match-words") {
    return generateAlgebraMatchWords(settings, difficultyKey);
  }

  if (variant.id === "error-spotting") {
    return generateAlgebraNotationErrors(settings, difficultyKey);
  }

  return generateAlgebraWriteExpression(settings, difficultyKey);
}

function generateAlgebraWriteExpression(settings, difficultyKey) {
  const base = getAlgebraNotationBase(settings, difficultyKey);
  const items = [
    { question: `Write an expression for "${base.constantA} more than x".`, answer: `x + ${base.constantA}`, change: "Starting example." },
    { question: `Write an expression for "${base.constantA + 1} more than x".`, answer: `x + ${base.constantA + 1}`, change: "Only the constant changes." },
    { question: `Write an expression for "${base.coeffA} times y".`, answer: `${base.coeffA}y`, change: "Only the operation word changes." },
    { question: `Write an expression for "${base.coeffA + 1} times y".`, answer: `${base.coeffA + 1}y`, change: "Only the coefficient changes." },
    { question: `Write an expression for "${base.constantB} less than n".`, answer: `n - ${base.constantB}`, change: "Only the phrase structure changes." },
    { question: `Write an expression for "${base.variableA} divided by ${base.constantC}".`, answer: `${base.variableA}/${base.constantC}`, change: "Only the operation changes." },
    { question: `Write an expression for "${base.coeffB} more than p".`, answer: `p + ${base.coeffB}`, change: "Only the variable changes." },
    { question: `Write an expression for "${base.coeffC} times q plus ${base.constantD}".`, answer: `${base.coeffC}q + ${base.constantD}`, change: "Only a second operation is introduced." },
    { question: `Write an expression for "${base.constantE} less than ${base.coeffD}r".`, answer: `${base.coeffD}r - ${base.constantE}`, change: "Only the structure becomes slightly more complex." },
    { question: `Final check: write an expression for "${base.constantF} more than ${base.coeffE}s".`, answer: `${base.coeffE}s + ${base.constantF}`, change: "Final step keeps the same structure with a new coefficient." }
  ];

  return { questions: items };
}

function generateAlgebraSimplifyNotation(settings, difficultyKey) {
  const base = getAlgebraNotationBase(settings, difficultyKey);
  const items = [
    { question: `Write ${base.coeffA} x x in simpler algebraic notation.`, answer: `${base.coeffA}x`, change: "Starting example." },
    { question: `Write ${base.coeffB} x y in simpler algebraic notation.`, answer: `${base.coeffB}y`, change: "Only the variable changes." },
    { question: `Write 1 x ${base.variableA} + ${base.constantA} in simpler algebraic notation.`, answer: `${base.variableA} + ${base.constantA}`, change: "Only the coefficient changes to 1." },
    { question: `Write ${base.coeffC} x ${base.variableB} - ${base.constantB} in simpler algebraic notation.`, answer: `${base.coeffC}${base.variableB} - ${base.constantB}`, change: "Only the constant changes." },
    { question: `Write ${base.variableC} x ${base.constantC} in simpler algebraic notation.`, answer: `${base.constantC}${base.variableC}`, change: "Only the order of number and variable changes." },
    { question: `Write ${base.coeffD} x ${base.variableD} + 1 x ${base.variableE} in simpler algebraic notation.`, answer: `${base.coeffD}${base.variableD} + ${base.variableE}`, change: "Only a second term is introduced." },
    { question: `Write ${base.coeffE} x ${base.variableF} + ${base.constantD} in simpler algebraic notation.`, answer: `${base.coeffE}${base.variableF} + ${base.constantD}`, change: "Only the variable changes again." },
    { question: `Write ${base.constantE} + 1 x ${base.variableG} in simpler algebraic notation.`, answer: `${base.constantE} + ${base.variableG}`, change: "Only the one-times term changes position." },
    { question: `Write ${base.coeffF} x ${base.variableH} - 1 x ${base.variableI} in simpler algebraic notation.`, answer: `${base.coeffF}${base.variableH} - ${base.variableI}`, change: "Only subtraction is introduced." },
    { question: `Final check: write ${base.coeffG} x ${base.variableJ} + ${base.coeffH} in simpler algebraic notation.`, answer: `${base.coeffG}${base.variableJ} + ${base.coeffH}`, change: "Final step returns to standard compact notation." }
  ];

  return { questions: items };
}

function generateAlgebraMatchWords(settings, difficultyKey) {
  const base = getAlgebraNotationBase(settings, difficultyKey);
  const items = [
    { question: `Which expression means "${base.constantA} more than x"? A) x + ${base.constantA} B) ${base.constantA}x`, answer: "A", change: "Starting example." },
    { question: `Which expression means "${base.coeffA} times y"? A) y + ${base.coeffA} B) ${base.coeffA}y`, answer: "B", change: "Only the operation word changes." },
    { question: `Which expression means "${base.constantB} less than n"? A) n - ${base.constantB} B) ${base.constantB} - n`, answer: "A", change: "Only the phrase structure changes." },
    { question: `Which expression means "${base.variableA} divided by ${base.constantC}"? A) ${base.variableA}/${base.constantC} B) ${base.constantC}/${base.variableA}`, answer: "A", change: "Only the operation changes." },
    { question: `Which expression means "${base.coeffC} times p plus ${base.constantD}"? A) ${base.coeffC}p + ${base.constantD} B) p + ${base.coeffC}${base.constantD}`, answer: "A", change: "Only a second operation is introduced." },
    { question: `Which phrase matches ${base.coeffD}r - ${base.constantE}? A) "${base.constantE} less than ${base.coeffD}r" B) "${base.constantE} more than ${base.coeffD}r"`, answer: "A", change: "Only the direction changes from phrase-to-algebra to algebra-to-phrase." },
    { question: `Which phrase matches ${base.coeffE}s? A) "${base.coeffE} more than s" B) "${base.coeffE} times s"`, answer: "B", change: "Only multiplication versus addition changes." },
    { question: `Which expression means "${base.constantF} more than ${base.coeffF}t"? A) ${base.coeffF}t + ${base.constantF} B) ${base.constantF}t + ${base.coeffF}`, answer: "A", change: "Only the coefficient changes." },
    { question: `Which phrase matches u/${base.constantG}? A) "u divided by ${base.constantG}" B) "${base.constantG} divided by u"`, answer: "A", change: "Only the division phrase changes." },
    { question: `Final check: which expression means "${base.constantH} less than ${base.variableB}"? A) ${base.variableB} - ${base.constantH} B) ${base.constantH} - ${base.variableB}`, answer: "A", change: "Final step returns to a close phrase comparison." }
  ];

  return { questions: items };
}

function generateAlgebraNotationErrors(settings, difficultyKey) {
  const base = getAlgebraNotationBase(settings, difficultyKey);
  const items = [
    { question: `A pupil writes "${base.constantA} more than x" as ${base.constantA}x. Are they correct?`, answer: "No", change: "Starting example." },
    { question: `Correct the expression for "${base.constantA} more than x".`, answer: `x + ${base.constantA}`, change: "Only the task changes from spotting to correcting." },
    { question: `A pupil writes "${base.coeffA} times y" as y + ${base.coeffA}. Are they correct?`, answer: "No", change: "Only the phrase changes." },
    { question: `Correct the expression for "${base.coeffA} times y".`, answer: `${base.coeffA}y`, change: "Only the task changes from spotting to correcting again." },
    { question: `A pupil writes "${base.constantB} less than n" as ${base.constantB} - n. Are they correct?`, answer: "No", change: "Only the phrase structure changes." },
    { question: `Which is correct for "${base.constantB} less than n"? A) n - ${base.constantB} B) ${base.constantB} - n`, answer: "A", change: "Only the format changes to multiple choice." },
    { question: `A pupil writes 1${base.variableA} + ${base.constantC} as 1${base.variableA} + ${base.constantC} in final form. Is that the simplest notation?`, answer: "No", change: "Only the notation focus changes." },
    { question: `Write 1${base.variableA} + ${base.constantC} in its simplest algebraic notation.`, answer: `${base.variableA} + ${base.constantC}`, change: "Only the task changes from judgement to rewriting." },
    { question: `A pupil says a number next to a letter means add them. For example, ${base.coeffB}${base.variableB} means ${base.coeffB} + ${base.variableB}. Are they correct?`, answer: "No", change: "Only the misconception changes." },
    { question: `Final check: explain the difference between ${base.variableC} + ${base.constantD} and ${base.constantD}${base.variableC}.`, answer: `${base.variableC} + ${base.constantD} means add ${base.constantD}; ${base.constantD}${base.variableC} means multiply ${base.variableC} by ${base.constantD}.`, change: "Final step changes to explanation." }
  ];

  return { questions: items };
}

function generatePerimeterTeaching(topic, variant, settings, difficultyKey) {
  const base = getPerimeterBase(settings, difficultyKey);
  let sequence;

  if (variant.id === "missing-side") {
    sequence = [
      { question: `A rectangle has perimeter ${base.rectPerimeterA} cm and width ${base.rectWidthA} cm. What is the length?`, answer: `${base.rectLengthA} cm`, change: "Model using the known perimeter to find a missing side.", diagram: rectangleDiagram("?", `${base.rectWidthA} cm`) },
      { question: `A rectangle has perimeter ${base.rectPerimeterB} cm and length ${base.rectLengthB} cm. What is the width?`, answer: `${base.rectWidthB} cm`, change: "Only the missing side changes.", diagram: rectangleDiagram(`${base.rectLengthB} cm`, "?") },
      { question: `A rectangle has perimeter ${base.rectPerimeterC} cm and width ${base.rectWidthC} cm. What is the length?`, answer: `${base.rectLengthC} cm`, change: "Only the numbers change.", diagram: rectangleDiagram("?", `${base.rectWidthC} cm`) }
    ];
  } else if (variant.id === "compare-shapes") {
    sequence = [
      { question: `Which has the greater perimeter? Rectangle A: ${base.compALength} cm by ${base.compAWidth} cm, or Rectangle B: ${base.compBLength} cm by ${base.compBWidth} cm.`, answer: `${base.compGreater}`, change: "Model comparing two close perimeters.", diagram: comparisonDiagram("A", rectangleDiagram(`${base.compALength} cm`, `${base.compAWidth} cm`), "B", rectangleDiagram(`${base.compBLength} cm`, `${base.compBWidth} cm`)) },
      { question: `Which has the smaller perimeter? Shape A: ${base.polyA.join(", ")} cm, or Shape B: ${base.polyB.join(", ")} cm.`, answer: `${base.polySmaller}`, change: "Only the shape type changes.", diagram: comparisonDiagram("A", polygonDiagram(base.polyA), "B", polygonDiagram(base.polyB)) },
      { question: `Which has the greater perimeter? Rectangle C: ${base.compCLength} cm by ${base.compCWidth} cm, or Rectangle D: ${base.compDLength} cm by ${base.compDWidth} cm.`, answer: `${base.compGreaterCD}`, change: "Only the dimensions change.", diagram: comparisonDiagram("C", rectangleDiagram(`${base.compCLength} cm`, `${base.compCWidth} cm`), "D", rectangleDiagram(`${base.compDLength} cm`, `${base.compDWidth} cm`)) }
    ];
  } else if (variant.id === "expression-perimeter") {
    sequence = [
      { question: `A rectangle has length x + ${base.exprAddA} and width ${base.exprWidthA}. Write its perimeter expression.`, answer: `${base.exprPerimeterA}`, change: "Model writing perimeter as an algebraic expression.", diagram: rectangleDiagram(`x + ${base.exprAddA}`, `${base.exprWidthA}`) },
      { question: `A rectangle has length x + ${base.exprAddB} and width ${base.exprWidthB}. Write its perimeter expression.`, answer: `${base.exprPerimeterB}`, change: "Only the constants change.", diagram: rectangleDiagram(`x + ${base.exprAddB}`, `${base.exprWidthB}`) },
      { question: `A triangle has side lengths x, x and ${base.exprTriangleC}. Write its perimeter expression.`, answer: `${base.exprTrianglePerimeter}`, change: "Only the shape changes.", diagram: triangleDiagram(["x", "x", `${base.exprTriangleC}`]) }
    ];
  } else {
    sequence = [
      { question: `Find the perimeter of a rectangle with length ${base.rectLengthA} cm and width ${base.rectWidthA} cm.`, answer: `${base.rectPerimeterA} cm`, change: "Model adding all sides of a rectangle.", diagram: rectangleDiagram(`${base.rectLengthA} cm`, `${base.rectWidthA} cm`) },
      { question: `Find the perimeter of a rectangle with length ${base.rectLengthB} cm and width ${base.rectWidthB} cm.`, answer: `${base.rectPerimeterB} cm`, change: "Only one side length changes.", diagram: rectangleDiagram(`${base.rectLengthB} cm`, `${base.rectWidthB} cm`) },
      { question: `Find the perimeter of a triangle with sides ${base.triA.join(", ")} cm.`, answer: `${sum(base.triA)} cm`, change: "Only the shape changes.", diagram: triangleDiagram(base.triA.map((value) => `${value} cm`)) }
    ];
  }

  return createTeachingSequence(topic, variant, sequence);
}

function generatePerimeter(_topic, variant, settings, difficultyKey) {
  if (variant.id === "missing-side") return generatePerimeterMissingSide(settings, difficultyKey);
  if (variant.id === "compare-shapes") return generatePerimeterCompare(settings, difficultyKey);
  if (variant.id === "expression-perimeter") return generatePerimeterExpression(settings, difficultyKey);
  return generatePerimeterCalculate(settings, difficultyKey);
}

function generatePerimeterCalculate(settings, difficultyKey) {
  const base = getPerimeterBase(settings, difficultyKey);
  const items = [
    { question: `Find the perimeter of a rectangle with length ${base.rectLengthA} cm and width ${base.rectWidthA} cm.`, answer: `${base.rectPerimeterA} cm`, change: "Starting example.", diagram: rectangleDiagram(`${base.rectLengthA} cm`, `${base.rectWidthA} cm`) },
    { question: `Find the perimeter of a rectangle with length ${base.rectLengthB} cm and width ${base.rectWidthB} cm.`, answer: `${base.rectPerimeterB} cm`, change: "Only one side length changes.", diagram: rectangleDiagram(`${base.rectLengthB} cm`, `${base.rectWidthB} cm`) },
    { question: `Find the perimeter of a triangle with sides ${base.triA.join(", ")} cm.`, answer: `${sum(base.triA)} cm`, change: "Only the shape changes.", diagram: triangleDiagram(base.triA.map((value) => `${value} cm`)) },
    { question: `Find the perimeter of a triangle with sides ${base.triB.join(", ")} cm.`, answer: `${sum(base.triB)} cm`, change: "Only the side lengths change.", diagram: triangleDiagram(base.triB.map((value) => `${value} cm`)) },
    { question: `Find the perimeter of a pentagon with side lengths ${base.polyA.join(", ")} cm.`, answer: `${sum(base.polyA)} cm`, change: "Only the number of sides changes.", diagram: polygonDiagram(base.polyA.map((value) => `${value} cm`)) },
    { question: `Find the perimeter of a pentagon with side lengths ${base.polyB.join(", ")} cm.`, answer: `${sum(base.polyB)} cm`, change: "Only the side lengths change.", diagram: polygonDiagram(base.polyB.map((value) => `${value} cm`)) },
    { question: `Find the perimeter of a rectangle with length ${base.rectLengthC} cm and width ${base.rectWidthC} cm.`, answer: `${base.rectPerimeterC} cm`, change: "Only the rectangle dimensions change.", diagram: rectangleDiagram(`${base.rectLengthC} cm`, `${base.rectWidthC} cm`) },
    { question: `Find the perimeter of a hexagon with side lengths ${base.polyC.join(", ")} cm.`, answer: `${sum(base.polyC)} cm`, change: "Only the number of sides changes again.", diagram: polygonDiagram(base.polyC.map((value) => `${value} cm`)) },
    { question: `Find the perimeter of a rectangle with length ${base.rectLengthD} cm and width ${base.rectWidthD} cm.`, answer: `${base.rectPerimeterD} cm`, change: "Only the dimensions change again.", diagram: rectangleDiagram(`${base.rectLengthD} cm`, `${base.rectWidthD} cm`) },
    { question: `Final check: find the perimeter of a triangle with sides ${base.triC.join(", ")} cm.`, answer: `${sum(base.triC)} cm`, change: "Final step returns to a smaller shape with different values.", diagram: triangleDiagram(base.triC.map((value) => `${value} cm`)) }
  ];
  return { questions: items };
}

function generatePerimeterMissingSide(settings, difficultyKey) {
  const base = getPerimeterBase(settings, difficultyKey);
  const items = [
    { question: `A rectangle has perimeter ${base.rectPerimeterA} cm and width ${base.rectWidthA} cm. What is the length?`, answer: `${base.rectLengthA} cm`, change: "Starting example.", diagram: rectangleDiagram("?", `${base.rectWidthA} cm`) },
    { question: `A rectangle has perimeter ${base.rectPerimeterB} cm and length ${base.rectLengthB} cm. What is the width?`, answer: `${base.rectWidthB} cm`, change: "Only the missing side changes.", diagram: rectangleDiagram(`${base.rectLengthB} cm`, "?") },
    { question: `A rectangle has perimeter ${base.rectPerimeterC} cm and width ${base.rectWidthC} cm. What is the length?`, answer: `${base.rectLengthC} cm`, change: "Only the numbers change.", diagram: rectangleDiagram("?", `${base.rectWidthC} cm`) },
    { question: `A triangle has perimeter ${sum(base.triA)} cm. Two sides are ${base.triA[0]} cm and ${base.triA[1]} cm. What is the third side?`, answer: `${base.triA[2]} cm`, change: "Only the shape changes.", diagram: triangleDiagram([`${base.triA[0]} cm`, `${base.triA[1]} cm`, "?"]) },
    { question: `A triangle has perimeter ${sum(base.triB)} cm. Two sides are ${base.triB[0]} cm and ${base.triB[1]} cm. What is the third side?`, answer: `${base.triB[2]} cm`, change: "Only the side lengths change.", diagram: triangleDiagram([`${base.triB[0]} cm`, `${base.triB[1]} cm`, "?"]) },
    { question: `A rectangle has perimeter ${base.rectPerimeterD} cm and length ${base.rectLengthD} cm. What is the width?`, answer: `${base.rectWidthD} cm`, change: "Only the rectangle dimensions change.", diagram: rectangleDiagram(`${base.rectLengthD} cm`, "?") },
    { question: `A pentagon has perimeter ${sum(base.polyA)} cm. Four sides are ${base.polyA.slice(0, 4).join(", ")} cm. What is the missing side?`, answer: `${base.polyA[4]} cm`, change: "Only the number of sides changes.", diagram: polygonDiagram([...base.polyA.slice(0, 4).map((value) => `${value} cm`), "?"]) },
    { question: `A rectangle has perimeter ${base.rectPerimeterE} cm and width ${base.rectWidthE} cm. What is the length?`, answer: `${base.rectLengthE} cm`, change: "Only the dimensions change again.", diagram: rectangleDiagram("?", `${base.rectWidthE} cm`) },
    { question: `A triangle has perimeter ${sum(base.triC)} cm. Two sides are ${base.triC[0]} cm and ${base.triC[1]} cm. What is the third side?`, answer: `${base.triC[2]} cm`, change: "Only the triangle values change.", diagram: triangleDiagram([`${base.triC[0]} cm`, `${base.triC[1]} cm`, "?"]) },
    { question: `Final check: a rectangle has perimeter ${base.rectPerimeterF} cm and length ${base.rectLengthF} cm. What is the width?`, answer: `${base.rectWidthF} cm`, change: "Final step returns to a rectangle with new values.", diagram: rectangleDiagram(`${base.rectLengthF} cm`, "?") }
  ];
  return { questions: items };
}

function generatePerimeterCompare(settings, difficultyKey) {
  const base = getPerimeterBase(settings, difficultyKey);
  const items = [
    { question: `Which has the greater perimeter? Rectangle A or Rectangle B?`, answer: `${base.compGreater}`, change: "Starting example.", diagram: comparisonDiagram("A", rectangleDiagram(`${base.compALength} cm`, `${base.compAWidth} cm`), "B", rectangleDiagram(`${base.compBLength} cm`, `${base.compBWidth} cm`)) },
    { question: `Which has the smaller perimeter? Rectangle C or Rectangle D?`, answer: `${base.compSmallerCD}`, change: "Only the comparison direction changes.", diagram: comparisonDiagram("C", rectangleDiagram(`${base.compCLength} cm`, `${base.compCWidth} cm`), "D", rectangleDiagram(`${base.compDLength} cm`, `${base.compDWidth} cm`)) },
    { question: `Which has the greater perimeter? Shape A or Shape B?`, answer: `${base.polyGreater}`, change: "Only the shape type changes.", diagram: comparisonDiagram("A", polygonDiagram(base.polyA.map((value) => `${value} cm`)), "B", polygonDiagram(base.polyB.map((value) => `${value} cm`))) },
    { question: `True or false: Rectangle A has a greater perimeter than Rectangle B.`, answer: base.rectPerimeterA > base.rectPerimeterB ? "True" : "False", change: "Only the prompt changes to a statement.", diagram: comparisonDiagram("A", rectangleDiagram(`${base.rectLengthA} cm`, `${base.rectWidthA} cm`), "B", rectangleDiagram(`${base.rectLengthB} cm`, `${base.rectWidthB} cm`)) },
    { question: `Which has the greater perimeter: the rectangle shown or Triangle A?`, answer: `${base.rectPerimeterC > sum(base.triA) ? "Rectangle" : "Triangle A"}`, change: "Only the comparison target changes.", diagram: comparisonDiagram("Rectangle", rectangleDiagram(`${base.rectLengthC} cm`, `${base.rectWidthC} cm`), "Triangle A", triangleDiagram(base.triA.map((value) => `${value} cm`))) },
    { question: `Which has the greater perimeter: Rectangle D or the hexagon shown?`, answer: `${base.rectPerimeterD > sum(base.polyC) ? "Rectangle D" : "the hexagon"}`, change: "Only the compared shape changes.", diagram: comparisonDiagram("Rectangle D", rectangleDiagram(`${base.rectLengthD} cm`, `${base.rectWidthD} cm`), "Hexagon", polygonDiagram(base.polyC.map((value) => `${value} cm`))) },
    { question: `Which pair has the greater total perimeter: Pair A or Pair B?`, answer: `${pairWithGreaterTotalPerimeter(base)}`, change: "Only the task changes to comparing combined perimeters.", diagram: comparisonDiagram("Pair A", comparisonDiagram("Rectangle", rectangleDiagram(`${base.rectLengthE} cm`, `${base.rectWidthE} cm`), "Triangle", triangleDiagram(base.triC.map((value) => `${value} cm`))), "Pair B", comparisonDiagram("Rectangle", rectangleDiagram(`${base.rectLengthF} cm`, `${base.rectWidthF} cm`), "Polygon", polygonDiagram(base.polyD.map((value) => `${value} cm`)))) },
    { question: `Which has the smaller perimeter: Shape P or Shape Q?`, answer: `${sum(base.polyD) < sum(base.polyE) ? "Shape P" : "Shape Q"}`, change: "Only the polygon side lengths change.", diagram: comparisonDiagram("P", polygonDiagram(base.polyD.map((value) => `${value} cm`)), "Q", polygonDiagram(base.polyE.map((value) => `${value} cm`))) },
    { question: `A pupil says the shape with more sides must have the greater perimeter. Are they correct for Shape F and Shape G?`, answer: `${sum(base.polyF) > sum(base.polyG) ? "Yes" : "No"}`, change: "Only the reasoning demand increases.", diagram: comparisonDiagram("F", polygonDiagram(base.polyF.map((value) => `${value} cm`)), "G", polygonDiagram(base.polyG.map((value) => `${value} cm`))) },
    { question: `Final check: which has the greater perimeter? Rectangle G or Rectangle H?`, answer: `${2 * (base.rectLengthG + base.rectWidthG) > 2 * (base.rectLengthH + base.rectWidthH) ? "Rectangle G" : "Rectangle H"}`, change: "Final step returns to comparing two close rectangles.", diagram: comparisonDiagram("G", rectangleDiagram(`${base.rectLengthG} cm`, `${base.rectWidthG} cm`), "H", rectangleDiagram(`${base.rectLengthH} cm`, `${base.rectWidthH} cm`)) }
  ];
  return { questions: items };
}

function generatePerimeterExpression(settings, difficultyKey) {
  const base = getPerimeterBase(settings, difficultyKey);
  const items = [
    { question: `A rectangle has length x + ${base.exprAddA} and width ${base.exprWidthA}. Write its perimeter expression.`, answer: `${base.exprPerimeterA}`, change: "Starting example.", diagram: rectangleDiagram(`x + ${base.exprAddA}`, `${base.exprWidthA}`) },
    { question: `A rectangle has length x + ${base.exprAddB} and width ${base.exprWidthB}. Write its perimeter expression.`, answer: `${base.exprPerimeterB}`, change: "Only the constants change.", diagram: rectangleDiagram(`x + ${base.exprAddB}`, `${base.exprWidthB}`) },
    { question: `A triangle has side lengths x, x and ${base.exprTriangleC}. Write its perimeter expression.`, answer: `${base.exprTrianglePerimeter}`, change: "Only the shape changes.", diagram: triangleDiagram(["x", "x", `${base.exprTriangleC}`]) },
    { question: `A rectangle has length y + ${base.exprAddC} and width ${base.exprWidthC}. Write its perimeter expression.`, answer: `${base.exprPerimeterC}`, change: "Only the variable changes.", diagram: rectangleDiagram(`y + ${base.exprAddC}`, `${base.exprWidthC}`) },
    { question: `A square has side length z + ${base.exprAddD}. Write its perimeter expression.`, answer: `${base.exprSquarePerimeter}`, change: "Only the shape changes to a square.", diagram: namedShapeDiagram("square") },
    { question: `A triangle has side lengths p, p and p + ${base.exprTriangleD}. Write its perimeter expression.`, answer: `${base.exprTrianglePerimeterB}`, change: "Only the repeated side structure changes.", diagram: triangleDiagram(["p", "p", `p + ${base.exprTriangleD}`]) },
    { question: `A rectangle has length a + ${base.exprAddE} and width a + ${base.exprWidthD}. Write its perimeter expression.`, answer: `${base.exprPerimeterD}`, change: "Only both sides now contain the same variable.", diagram: rectangleDiagram(`a + ${base.exprAddE}`, `a + ${base.exprWidthD}`) },
    { question: `A pentagon has side lengths x, x, x, ${base.exprConstA} and ${base.exprConstB}. Write its perimeter expression.`, answer: `${base.exprPentagonPerimeter}`, change: "Only the number of sides changes.", diagram: polygonDiagram(["x", "x", "x", `${base.exprConstA}`, `${base.exprConstB}`]) },
    { question: `Which is the correct perimeter expression for a rectangle with length b + ${base.exprAddF} and width ${base.exprWidthE}? A) 2b + ${2 * base.exprAddF + 2 * base.exprWidthE} B) b + ${base.exprAddF + base.exprWidthE}`, answer: "A", change: "Only the format changes to selection." },
    { question: `Final check: write the perimeter expression for a triangle with sides x + ${base.exprAddG}, x + ${base.exprAddG}, and ${base.exprConstC}.`, answer: `${base.exprTrianglePerimeterC}`, change: "Final step returns to a simpler repeated-expression triangle.", diagram: triangleDiagram([`x + ${base.exprAddG}`, `x + ${base.exprAddG}`, `${base.exprConstC}`]) }
  ];
  return { questions: items };
}

function generateAngleFactsTeaching(topic, variant, settings, difficultyKey) {
  const base = getAngleBase(settings, difficultyKey);
  let sequence;
  if (variant.id === "around-a-point") {
    sequence = [
      { question: `Angles around a point total 360. Find the missing angle if the other angles are ${base.pointA.join(", ")} degrees.`, answer: `${base.pointMissingA} degrees`, change: "Model subtracting known angles from 360.", diagram: anglePointDiagram([`${base.pointA[0]}°`, `${base.pointA[1]}°`, `${base.pointA[2]}°`, "?°"]) },
      { question: `Find the missing angle around a point when the other angles are ${base.pointB.join(", ")} degrees.`, answer: `${base.pointMissingB} degrees`, change: "Only the angle values change.", diagram: anglePointDiagram([`${base.pointB[0]}°`, `${base.pointB[1]}°`, `${base.pointB[2]}°`, "?°"]) },
      { question: `Find the missing angle around a point when the other angles are ${base.pointC.join(", ")} degrees.`, answer: `${base.pointMissingC} degrees`, change: "Only the set changes again.", diagram: anglePointDiagram([`${base.pointC[0]}°`, `${base.pointC[1]}°`, `${base.pointC[2]}°`, "?°"]) }
    ];
  } else if (variant.id === "vertically-opposite") {
    sequence = [
      { question: `Two vertically opposite angles are equal. If one angle is ${base.vertA} degrees, what is the opposite angle?`, answer: `${base.vertA} degrees`, change: "Model using the equality rule.", diagram: angleVerticalDiagram(`${base.vertA}°`, "?°", "", "") },
      { question: `If one angle is ${base.vertB} degrees, what is the vertically opposite angle?`, answer: `${base.vertB} degrees`, change: "Only the angle changes.", diagram: angleVerticalDiagram(`${base.vertB}°`, "?°", "", "") },
      { question: `If one angle is ${base.vertC} degrees, what is the adjacent angle on the straight line?`, answer: `${180 - base.vertC} degrees`, change: "Only the target angle changes.", diagram: angleVerticalDiagram(`${base.vertC}°`, `${base.vertC}°`, "?°", "") }
    ];
  } else if (variant.id === "find-the-missing-angle") {
    sequence = [
      { question: `Find the missing angle on a straight line if the other angle is ${base.lineA} degrees.`, answer: `${180 - base.lineA} degrees`, change: "Model the straight-line rule.", diagram: angleLineDiagram(`${base.lineA}°`, "?°") },
      { question: `Find the missing angle around a point if the other angles are ${base.pointA.join(", ")} degrees.`, answer: `${base.pointMissingA} degrees`, change: "Only the angle fact changes.", diagram: anglePointDiagram([`${base.pointA[0]}°`, `${base.pointA[1]}°`, `${base.pointA[2]}°`, "?°"]) },
      { question: `One angle is ${base.vertA} degrees. What is the vertically opposite angle?`, answer: `${base.vertA} degrees`, change: "Only the angle fact changes again.", diagram: angleVerticalDiagram(`${base.vertA}°`, "?°", "", "") }
    ];
  } else {
    sequence = [
      { question: `Find the missing angle on a straight line if one angle is ${base.lineA} degrees.`, answer: `${180 - base.lineA} degrees`, change: "Model supplementary angles.", diagram: angleLineDiagram(`${base.lineA}°`, "?°") },
      { question: `Find the missing angle on a straight line if one angle is ${base.lineB} degrees.`, answer: `${180 - base.lineB} degrees`, change: "Only the given angle changes.", diagram: angleLineDiagram(`${base.lineB}°`, "?°") },
      { question: `Find the missing angle on a straight line if one angle is ${base.lineC} degrees.`, answer: `${180 - base.lineC} degrees`, change: "Only the given angle changes again.", diagram: angleLineDiagram(`${base.lineC}°`, "?°") }
    ];
  }
  return createTeachingSequence(topic, variant, sequence);
}

function generateAngleFacts(_topic, variant, settings, difficultyKey) {
  if (variant.id === "around-a-point") return generateAnglesAroundPoint(settings, difficultyKey);
  if (variant.id === "vertically-opposite") return generateVerticallyOpposite(settings, difficultyKey);
  if (variant.id === "find-the-missing-angle") return generateMissingAngles(settings, difficultyKey);
  return generateAnglesOnLine(settings, difficultyKey);
}

function generateAnglesOnLine(settings, difficultyKey) {
  const base = getAngleBase(settings, difficultyKey);
  const values = [base.lineA, base.lineB, base.lineC, base.lineD, base.lineE, base.lineF, base.lineG, base.lineH, base.lineI, base.lineJ];
  return { questions: values.map((value, index) => ({ question: `Find the missing angle on a straight line if one angle is ${value} degrees.`, answer: `${180 - value} degrees`, change: angleLineChange(index), diagram: angleLineDiagram(`${value}°`, "?°") })) };
}

function generateAnglesAroundPoint(settings, difficultyKey) {
  const base = getAngleBase(settings, difficultyKey);
  const sets = [base.pointA, base.pointB, base.pointC, base.pointD, base.pointE, base.pointF, base.pointG, base.pointH, base.pointI, base.pointJ];
  return { questions: sets.map((set, index) => ({ question: `Angles around a point total 360. Find the missing angle if the other angles are ${set.join(", ")} degrees.`, answer: `${360 - sum(set)} degrees`, change: anglePointChange(index), diagram: anglePointDiagram([`${set[0]}°`, `${set[1]}°`, `${set[2]}°`, "?°"]) })) };
}

function generateVerticallyOpposite(settings, difficultyKey) {
  const base = getAngleBase(settings, difficultyKey);
  const values = [base.vertA, base.vertB, base.vertC, base.vertD, base.vertE, base.vertF, base.vertG, base.vertH, base.vertI, base.vertJ];
  return { questions: values.map((value, index) => ({ question: index % 2 === 0 ? `Two vertically opposite angles are equal. If one angle is ${value} degrees, what is the opposite angle?` : `If one angle is ${value} degrees, what is the adjacent angle on the straight line?`, answer: index % 2 === 0 ? `${value} degrees` : `${180 - value} degrees`, change: angleVerticalChange(index), diagram: index % 2 === 0 ? angleVerticalDiagram(`${value}°`, "?°", "", "") : angleVerticalDiagram(`${value}°`, `${value}°`, "?°", "") })) };
}

function generateMissingAngles(settings, difficultyKey) {
  const base = getAngleBase(settings, difficultyKey);
  const items = [
    { question: `Find the missing angle on a straight line if the other angle is ${base.lineA} degrees.`, answer: `${180 - base.lineA} degrees`, change: "Starting example.", diagram: angleLineDiagram(`${base.lineA}°`, "?°") },
    { question: `Find the missing angle around a point if the other angles are ${base.pointA.join(", ")} degrees.`, answer: `${base.pointMissingA} degrees`, change: "Only the angle fact changes.", diagram: anglePointDiagram([`${base.pointA[0]}°`, `${base.pointA[1]}°`, `${base.pointA[2]}°`, "?°"]) },
    { question: `One angle is ${base.vertA} degrees. What is the vertically opposite angle?`, answer: `${base.vertA} degrees`, change: "Only the angle fact changes again.", diagram: angleVerticalDiagram(`${base.vertA}°`, "?°", "", "") },
    { question: `One angle on a straight line is ${base.lineB} degrees. Find the other angle.`, answer: `${180 - base.lineB} degrees`, change: "Only the line value changes.", diagram: angleLineDiagram(`${base.lineB}°`, "?°") },
    { question: `The known angles around a point are ${base.pointB.join(", ")} degrees. Find the missing angle.`, answer: `${base.pointMissingB} degrees`, change: "Only the point-angle set changes.", diagram: anglePointDiagram([`${base.pointB[0]}°`, `${base.pointB[1]}°`, `${base.pointB[2]}°`, "?°"]) },
    { question: `If one angle is ${base.vertB} degrees, find the adjacent angle on the straight line.`, answer: `${180 - base.vertB} degrees`, change: "Only the target angle changes.", diagram: angleVerticalDiagram(`${base.vertB}°`, `${base.vertB}°`, "?°", "") },
    { question: `Find the missing angle on a straight line if the other angle is ${base.lineC} degrees.`, answer: `${180 - base.lineC} degrees`, change: "Only the line value changes again.", diagram: angleLineDiagram(`${base.lineC}°`, "?°") },
    { question: `Find the missing angle around a point if the other angles are ${base.pointC.join(", ")} degrees.`, answer: `${base.pointMissingC} degrees`, change: "Only the point-angle set changes again.", diagram: anglePointDiagram([`${base.pointC[0]}°`, `${base.pointC[1]}°`, `${base.pointC[2]}°`, "?°"]) },
    { question: `One angle is ${base.vertC} degrees. What is the vertically opposite angle?`, answer: `${base.vertC} degrees`, change: "Only the opposite angle value changes.", diagram: angleVerticalDiagram(`${base.vertC}°`, "?°", "", "") },
    { question: `Final check: find the missing angle if the known angles are ${base.pointD.join(", ")} degrees around a point.`, answer: `${base.pointMissingD} degrees`, change: "Final step returns to the around-a-point rule.", diagram: anglePointDiagram([`${base.pointD[0]}°`, `${base.pointD[1]}°`, `${base.pointD[2]}°`, "?°"]) }
  ];
  return { questions: items };
}

function generatePlaceValueIntegersTeaching(topic, variant, settings, difficultyKey) {
  const base = getPlaceValueBase(settings, difficultyKey);
  let sequence;

  if (variant.id === "digit-value") {
    sequence = [
      {
        question: `In ${formatNumber(base.numberA)}, what is the value of the digit ${base.focusDigitA}?`,
        answer: `${formatNumber(base.focusValueA)}`,
        change: "Model finding the value of a digit from its position."
      },
      {
        question: `In ${formatNumber(base.numberB)}, what is the value of the digit ${base.focusDigitB}?`,
        answer: `${formatNumber(base.focusValueB)}`,
        change: "Only the digit position changes."
      },
      {
        question: `In ${formatNumber(base.numberC)}, what is the value of the digit ${base.focusDigitC}?`,
        answer: `${formatNumber(base.focusValueC)}`,
        change: "Only the number changes for independent practice."
      }
    ];
  } else if (variant.id === "rounding") {
    sequence = [
      {
        question: `Round ${formatNumber(base.roundA)} to the nearest 1,000.`,
        answer: `${formatNumber(roundToNearest(base.roundA, 1000))}`,
        change: "Model checking the hundreds before rounding to the nearest thousand."
      },
      {
        question: `Round ${formatNumber(base.roundB)} to the nearest 1,000.`,
        answer: `${formatNumber(roundToNearest(base.roundB, 1000))}`,
        change: "Only the boundary position changes."
      },
      {
        question: `Round ${formatNumber(base.roundC)} to the nearest 10,000.`,
        answer: `${formatNumber(roundToNearest(base.roundC, 10000))}`,
        change: "Only the rounding place changes."
      }
    ];
  } else if (variant.id === "intervals-and-statements") {
    sequence = [
      {
        question: `Which interval contains ${formatNumber(base.intervalA)}? A) ${formatNumber(base.intervalA - 1000)} to ${formatNumber(base.intervalA)} B) ${formatNumber(base.lowerA)} to ${formatNumber(base.upperA)}`,
        answer: "B",
        change: "Model locating a number between two multiples."
      },
      {
        question: `True or false: ${formatNumber(base.statementA)} is closer to ${formatNumber(base.statementATarget)} than to ${formatNumber(base.statementAOther)}.`,
        answer: `${base.statementAAnswer}`,
        change: "Only the prompt changes from interval choice to a place value statement."
      },
      {
        question: `Which interval contains ${formatNumber(base.intervalB)}? A) ${formatNumber(base.lowerB)} to ${formatNumber(base.upperB)} B) ${formatNumber(base.upperB)} to ${formatNumber(base.upperB + 1000)}`,
        answer: "A",
        change: "Only the interval changes for independent practice."
      }
    ];
  } else {
    sequence = [
      {
        question: `Which is greater: ${formatNumber(base.compareA)} or ${formatNumber(base.compareB)}?`,
        answer: `${formatNumber(Math.max(base.compareA, base.compareB))}`,
        change: "Model comparing digits from the left."
      },
      {
        question: `Put these in ascending order: ${formatNumber(base.orderA)}, ${formatNumber(base.orderB)}, ${formatNumber(base.orderC)}.`,
        answer: `${formatNumber(Math.min(base.orderA, base.orderB, base.orderC))}, ${formatNumber(middleOfThree(base.orderA, base.orderB, base.orderC))}, ${formatNumber(Math.max(base.orderA, base.orderB, base.orderC))}`,
        change: "Only the number of values changes."
      },
      {
        question: `Which is greater: ${formatNumber(base.compareC)} or ${formatNumber(base.compareD)}?`,
        answer: `${formatNumber(Math.max(base.compareC, base.compareD))}`,
        change: "Only one digit changes again."
      }
    ];
  }

  return createTeachingSequence(topic, variant, sequence);
}

function generatePlaceValueIntegers(_topic, variant, settings, difficultyKey) {
  if (variant.id === "digit-value") {
    return generatePlaceValueDigitValue(settings, difficultyKey);
  }

  if (variant.id === "rounding") {
    return generatePlaceValueRounding(settings, difficultyKey);
  }

  if (variant.id === "intervals-and-statements") {
    return generatePlaceValueIntervals(settings, difficultyKey);
  }

  return generatePlaceValueCompare(settings, difficultyKey);
}

function generatePlaceValueCompare(settings, difficultyKey) {
  const base = getPlaceValueBase(settings, difficultyKey);
  const items = [
    { question: `Which is greater: ${formatNumber(base.compareA)} or ${formatNumber(base.compareB)}?`, answer: `${formatNumber(Math.max(base.compareA, base.compareB))}`, change: "Starting example." },
    { question: `Which is smaller: ${formatNumber(base.compareA)} or ${formatNumber(base.compareNear)}?`, answer: `${formatNumber(Math.min(base.compareA, base.compareNear))}`, change: "Only one digit changes." },
    { question: `Put these in ascending order: ${formatNumber(base.orderA)}, ${formatNumber(base.orderB)}, ${formatNumber(base.orderC)}.`, answer: formatOrderedList([base.orderA, base.orderB, base.orderC]), change: "Only the number of values changes." },
    { question: `Put these in descending order: ${formatNumber(base.orderA)}, ${formatNumber(base.orderB)}, ${formatNumber(base.orderC)}.`, answer: formatOrderedList([base.orderA, base.orderB, base.orderC], true), change: "Only the order direction changes." },
    { question: `Which is greater: ${formatNumber(base.compareC)} or ${formatNumber(base.compareD)}?`, answer: `${formatNumber(Math.max(base.compareC, base.compareD))}`, change: "Only a different place value changes." },
    { question: `Insert < or > : ${formatNumber(base.compareE)} __ ${formatNumber(base.compareF)}.`, answer: `${base.compareE > base.compareF ? ">" : "<"}`, change: "Only the representation changes to an inequality sign." },
    { question: `A pupil says ${formatNumber(base.statementOrderA)} is greater than ${formatNumber(base.statementOrderB)} because ${base.statementReason}. Are they correct?`, answer: `${base.statementOrderAnswer}`, change: "Only the prompt changes to a reasoning statement." },
    { question: `Which number is between ${formatNumber(base.betweenLow)} and ${formatNumber(base.betweenHigh)}: ${formatNumber(base.betweenOptionA)} or ${formatNumber(base.betweenOptionB)}?`, answer: `${formatNumber(base.betweenAnswer)}`, change: "Only the comparison changes to an interval check." },
    { question: `Complete with a number greater than ${formatNumber(base.completeLow)} but less than ${formatNumber(base.completeHigh)}.`, answer: `${formatNumber(base.completeAnswer)}`, change: "Only the task changes from selecting to generating." },
    { question: `Final check: which is greatest? ${formatNumber(base.finalA)}, ${formatNumber(base.finalB)}, ${formatNumber(base.finalC)}.`, answer: `${formatNumber(Math.max(base.finalA, base.finalB, base.finalC))}`, change: "Final step compares three closely related numbers." }
  ];

  return { questions: items };
}

function generatePlaceValueDigitValue(settings, difficultyKey) {
  const base = getPlaceValueBase(settings, difficultyKey);
  const items = [
    { question: `In ${formatNumber(base.numberA)}, what is the value of the digit ${base.focusDigitA}?`, answer: `${formatNumber(base.focusValueA)}`, change: "Starting example." },
    { question: `In ${formatNumber(base.numberB)}, what is the value of the digit ${base.focusDigitB}?`, answer: `${formatNumber(base.focusValueB)}`, change: "Only the digit position changes." },
    { question: `In ${formatNumber(base.numberC)}, what is the value of the digit ${base.focusDigitC}?`, answer: `${formatNumber(base.focusValueC)}`, change: "Only the number changes." },
    { question: `Which digit has the value ${formatNumber(base.focusValueD)} in ${formatNumber(base.numberD)}?`, answer: `${base.focusDigitD}`, change: "Only the unknown changes from value to digit." },
    { question: `In ${formatNumber(base.numberE)}, which digit is worth ${formatNumber(base.focusValueE)}?`, answer: `${base.focusDigitE}`, change: "Only the number changes again." },
    { question: `What is the difference between the value of the digit ${base.sharedDigit} in ${formatNumber(base.sharedNumberA)} and in ${formatNumber(base.sharedNumberB)}?`, answer: `${formatNumber(Math.abs(base.sharedValueA - base.sharedValueB))}`, change: "Only the task changes to comparing digit values." },
    { question: `Write the value of the underlined place digit in ${formatNumber(base.numberF)} if the ${base.placeNameF} digit is ${base.focusDigitF}.`, answer: `${formatNumber(base.focusValueF)}`, change: "Only the prompt wording changes." },
    { question: `Which has the greater value: the digit ${base.compareDigitA} in ${formatNumber(base.compareDigitNumberA)} or the digit ${base.compareDigitB} in ${formatNumber(base.compareDigitNumberB)}?`, answer: `${formatNumber(Math.max(base.compareDigitValueA, base.compareDigitValueB))}`, change: "Only the task changes to comparing two digit values." },
    { question: `True or false: in ${formatNumber(base.statementDigitNumber)}, the digit ${base.statementDigit} is worth ${formatNumber(base.statementDigitValue)}.`, answer: `${base.statementDigitAnswer}`, change: "Only the prompt changes to true or false." },
    { question: `Final check: in ${formatNumber(base.numberG)}, what is the value of the digit ${base.focusDigitG}?`, answer: `${formatNumber(base.focusValueG)}`, change: "Final step keeps the same structure with a new number." }
  ];

  return { questions: items };
}

function generatePlaceValueRounding(settings, difficultyKey) {
  const base = getPlaceValueBase(settings, difficultyKey);
  const thousandUnit = difficultyKey === "easy" ? 100 : difficultyKey === "hard" ? 100000 : 1000;
  const tenThousandUnit = difficultyKey === "easy" ? 1000 : difficultyKey === "hard" ? 100000 : 10000;
  const hundredUnit = difficultyKey === "easy" ? 10 : difficultyKey === "hard" ? 1000 : 100;
  const items = [
    { question: `Round ${formatNumber(base.roundA)} to the nearest ${formatNumber(thousandUnit)}.`, answer: `${formatNumber(roundToNearest(base.roundA, thousandUnit))}`, change: "Starting example." },
    { question: `Round ${formatNumber(base.roundB)} to the nearest ${formatNumber(thousandUnit)}.`, answer: `${formatNumber(roundToNearest(base.roundB, thousandUnit))}`, change: "Only the boundary changes." },
    { question: `Round ${formatNumber(base.roundC)} to the nearest ${formatNumber(tenThousandUnit)}.`, answer: `${formatNumber(roundToNearest(base.roundC, tenThousandUnit))}`, change: "Only the rounding place changes." },
    { question: `Round ${formatNumber(base.roundD)} to the nearest ${formatNumber(tenThousandUnit)}.`, answer: `${formatNumber(roundToNearest(base.roundD, tenThousandUnit))}`, change: "Only the number changes." },
    { question: `Which rounds to ${formatNumber(roundToNearest(base.roundE, thousandUnit))} to the nearest ${formatNumber(thousandUnit)}: ${formatNumber(base.roundE)} or ${formatNumber(base.roundF)}?`, answer: `${formatNumber(chooseRoundedTarget(base.roundE, base.roundF, thousandUnit, roundToNearest(base.roundE, thousandUnit)))}`, change: "Only the prompt changes to a selection task." },
    { question: `Round ${formatNumber(base.roundG)} to the nearest ${formatNumber(hundredUnit)}.`, answer: `${formatNumber(roundToNearest(base.roundG, hundredUnit))}`, change: "Only the rounding place changes again." },
    { question: `True or false: ${formatNumber(base.roundH)} rounds to ${formatNumber(roundToNearest(base.roundH, thousandUnit))} to the nearest ${formatNumber(thousandUnit)}.`, answer: "True", change: "Only the prompt changes to true or false." },
    { question: `A pupil says ${formatNumber(base.roundI)} rounds to ${formatNumber(base.roundIMistake)} to the nearest ${formatNumber(thousandUnit)}. Are they correct?`, answer: "No", change: "Only a misconception is introduced." },
    { question: `What is the smallest multiple of ${formatNumber(thousandUnit)} that ${formatNumber(base.roundJ)} could round up to?`, answer: `${formatNumber(roundToNearest(base.roundJ, thousandUnit))}`, change: "Only the wording changes to a reasoning prompt." },
    { question: `Final check: round ${formatNumber(base.roundK)} to the nearest ${formatNumber(tenThousandUnit)}.`, answer: `${formatNumber(roundToNearest(base.roundK, tenThousandUnit))}`, change: "Final step returns to direct fluency with a larger number." }
  ];

  return { questions: items };
}

function generatePlaceValueIntervals(settings, difficultyKey) {
  const base = getPlaceValueBase(settings, difficultyKey);
  const intervalUnit = difficultyKey === "easy" ? 100 : difficultyKey === "hard" ? 10000 : 1000;
  const largerUnit = difficultyKey === "easy" ? 1000 : difficultyKey === "hard" ? 100000 : 10000;
  const items = [
    { question: `Which interval contains ${formatNumber(base.intervalA)}? A) ${formatNumber(base.intervalA - intervalUnit)} to ${formatNumber(base.intervalA)} B) ${formatNumber(base.lowerA)} to ${formatNumber(base.upperA)}`, answer: "B", change: "Starting example." },
    { question: `Which interval contains ${formatNumber(base.intervalB)}? A) ${formatNumber(base.lowerB)} to ${formatNumber(base.upperB)} B) ${formatNumber(base.upperB)} to ${formatNumber(base.upperB + intervalUnit)}`, answer: "A", change: "Only the interval changes." },
    { question: `Complete: ${formatNumber(base.intervalC)} is between ${formatNumber(base.lowerC)} and ${formatNumber(base.upperC)}.`, answer: "True", change: "Only the format changes from multiple choice to completion." },
    { question: `True or false: ${formatNumber(base.statementA)} is closer to ${formatNumber(base.statementATarget)} than to ${formatNumber(base.statementAOther)}.`, answer: `${base.statementAAnswer}`, change: "Only the prompt changes to a statement." },
    { question: `What is the next multiple of ${formatNumber(intervalUnit)} after ${formatNumber(base.intervalD)}?`, answer: `${formatNumber(base.nextThousandD)}`, change: "Only the task changes to finding the next boundary." },
    { question: `What is the previous multiple of ${formatNumber(largerUnit)} before ${formatNumber(base.intervalE)}?`, answer: `${formatNumber(base.previousTenThousandE)}`, change: "Only the place value boundary changes." },
    { question: `Which statement is correct? A) ${formatNumber(base.statementB)} is between ${formatNumber(base.lowerStatementB)} and ${formatNumber(base.upperStatementB)}. B) ${formatNumber(base.statementB)} is between ${formatNumber(base.upperStatementB)} and ${formatNumber(base.upperStatementB + intervalUnit)}.`, answer: "A", change: "Only the representation changes to statement selection." },
    { question: `Fill the gap: ${formatNumber(base.intervalF)} is greater than ${formatNumber(base.lowerF)} but less than ____.`, answer: `${formatNumber(base.upperF)}`, change: "Only one boundary becomes missing." },
    { question: `A pupil says ${formatNumber(base.intervalG)} is in the interval ${formatNumber(base.intervalGUpper)} to ${formatNumber(base.intervalGUpper + intervalUnit)}. Are they correct?`, answer: "No", change: "Only a non-example is introduced." },
    { question: `Final check: which interval contains ${formatNumber(base.intervalH)}? A) ${formatNumber(base.lowerH)} to ${formatNumber(base.upperH)} B) ${formatNumber(base.upperH)} to ${formatNumber(base.upperH + intervalUnit)}`, answer: "A", change: "Final step returns to interval identification." }
  ];

  return { questions: items };
}

function generateSquareCubeNumbersTeaching(topic, variant, settings, difficultyKey) {
  const base = getSquareCubeBase(difficultyKey);
  let sequence;

  if (variant.id === "complete-the-power") {
    sequence = [
      { question: `Complete: ${base.completeA.base}² = ?`, answer: `${base.completeA.value}`, change: "Model squaring a number." },
      { question: `Complete: ?³ = ${base.completeB.value}`, answer: `${base.completeB.base}`, change: "Only the missing part moves." },
      { question: `Complete: ${base.completeC.base}² = ?`, answer: `${base.completeC.value}`, change: "Only the base changes." }
    ];
  } else if (variant.id === "compare-powers") {
    sequence = [
      { question: `Which is greater: ${base.compareA.leftLabel} or ${base.compareA.rightLabel}?`, answer: `${base.compareA.answer}`, change: "Model comparing a square and a cube." },
      { question: `Which is greater: ${base.compareB.leftLabel} or ${base.compareB.rightLabel}?`, answer: `${base.compareB.answer}`, change: "Only the bases change." },
      { question: `Which is greater: ${base.compareC.leftLabel} or ${base.compareC.rightLabel}?`, answer: `${base.compareC.answer}`, change: "Only the powers change." }
    ];
  } else if (variant.id === "true-false") {
    sequence = [
      { question: `True or false: ${base.trueFalseA.statement}`, answer: `${base.trueFalseA.answer}`, change: "Model checking whether a statement is valid." },
      { question: `True or false: ${base.trueFalseB.statement}`, answer: `${base.trueFalseB.answer}`, change: "Only the statement changes." },
      { question: `True or false: ${base.trueFalseC.statement}`, answer: `${base.trueFalseC.answer}`, change: "Only the power type changes." }
    ];
  } else {
    sequence = [
      { question: `Is ${base.identifyA.value} a square number, cube number, both, or neither?`, answer: `${base.identifyA.answer}`, change: "Model classifying a power number." },
      { question: `Is ${base.identifyB.value} a square number, cube number, both, or neither?`, answer: `${base.identifyB.answer}`, change: "Only the number changes." },
      { question: `Is ${base.identifyC.value} a square number, cube number, both, or neither?`, answer: `${base.identifyC.answer}`, change: "Only the classification changes." }
    ];
  }

  return createTeachingSequence(topic, variant, sequence);
}

function generateSquareCubeNumbers(_topic, variant, settings, difficultyKey) {
  if (variant.id === "complete-the-power") return generateSquareCubeComplete(settings, difficultyKey);
  if (variant.id === "compare-powers") return generateSquareCubeCompare(settings, difficultyKey);
  if (variant.id === "true-false") return generateSquareCubeTrueFalse(settings, difficultyKey);
  return generateSquareCubeIdentify(settings, difficultyKey);
}

function generateSquareCubeIdentify(_settings, difficultyKey) {
  const base = getSquareCubeBase(difficultyKey);
  return {
    questions: [base.identifyA, base.identifyB, base.identifyC, base.identifyD, base.identifyE, base.identifyF, base.identifyG, base.identifyH, base.identifyI, base.identifyJ].map((item, index) => ({
      question: `Is ${item.value} a square number, cube number, both, or neither?`,
      answer: `${item.answer}`,
      change: squareCubeChange(index)
    }))
  };
}

function generateSquareCubeComplete(_settings, difficultyKey) {
  const base = getSquareCubeBase(difficultyKey);
  const items = [base.completeA, base.completeB, base.completeC, base.completeD, base.completeE, base.completeF, base.completeG, base.completeH, base.completeI, base.completeJ];
  return {
    questions: items.map((item, index) => ({
      question: item.mode === "square-value" ? `Complete: ${item.base}² = ?`
        : item.mode === "cube-value" ? `Complete: ${item.base}³ = ?`
        : item.mode === "square-base" ? `Complete: ?² = ${item.value}`
        : `Complete: ?³ = ${item.value}`,
      answer: `${item.answer}`,
      change: squareCubeChange(index)
    }))
  };
}

function generateSquareCubeCompare(_settings, difficultyKey) {
  const base = getSquareCubeBase(difficultyKey);
  const items = [base.compareA, base.compareB, base.compareC, base.compareD, base.compareE, base.compareF, base.compareG, base.compareH, base.compareI, base.compareJ];
  return {
    questions: items.map((item, index) => ({
      question: index < 8 ? `Which is greater: ${item.leftLabel} or ${item.rightLabel}?` : `Put these in ascending order: ${item.orderLabels.join(", ")}.`,
      answer: index < 8 ? `${item.answer}` : `${item.orderAnswer}`,
      change: squareCubeChange(index)
    }))
  };
}

function generateSquareCubeTrueFalse(_settings, difficultyKey) {
  const base = getSquareCubeBase(difficultyKey);
  return {
    questions: [base.trueFalseA, base.trueFalseB, base.trueFalseC, base.trueFalseD, base.trueFalseE, base.trueFalseF, base.trueFalseG, base.trueFalseH, base.trueFalseI, base.trueFalseJ].map((item, index) => ({
      question: `True or false: ${item.statement}`,
      answer: `${item.answer}`,
      change: squareCubeChange(index)
    }))
  };
}

function getSquareCubeBase(difficultyKey) {
  const squares = difficultyKey === "easy" ? [1, 4, 9, 16, 25, 36, 49, 64, 81, 100] : difficultyKey === "hard" ? [16, 25, 36, 49, 64, 81, 100, 121, 144, 169] : [4, 9, 16, 25, 36, 49, 64, 81, 100, 121];
  const cubes = difficultyKey === "easy" ? [1, 8, 27, 64, 125, 216, 343, 512] : difficultyKey === "hard" ? [27, 64, 125, 216, 343, 512, 729, 1000] : [8, 27, 64, 125, 216, 343, 512, 729];
  const neither = difficultyKey === "easy" ? [2, 6, 12, 18, 20, 24] : difficultyKey === "hard" ? [50, 72, 96, 150, 180, 250] : [3, 12, 18, 20, 45, 72];
  const both = [1, 64];
    const identifyValues = difficultyKey === "easy"
      ? [squares[2], cubes[1], neither[0], both[1], squares[5], cubes[4], neither[2], squares[8], cubes[5], neither[4]]
      : difficultyKey === "hard"
        ? [squares[2], cubes[2], neither[0], both[1], squares[5], cubes[4], neither[2], squares[8], cubes[5], neither[4]]
        : [squares[2], cubes[1], neither[0], both[1], squares[5], cubes[4], neither[2], squares[7], cubes[5], neither[4]];
  const classify = (value) => {
    const isSquareValue = Number.isInteger(Math.sqrt(value));
    const isCubeValue = Number.isInteger(Math.cbrt(value));
    if (isSquareValue && isCubeValue) return "both";
    if (isSquareValue) return "square number";
    if (isCubeValue) return "cube number";
    return "neither";
  };
  const makeIdentify = (value) => ({ value, answer: classify(value) });
  const makeSquare = (base) => ({ mode: "square-value", base, value: base ** 2, answer: `${base ** 2}` });
  const makeCube = (base) => ({ mode: "cube-value", base, value: base ** 3, answer: `${base ** 3}` });
  const makeSquareBase = (base) => ({ mode: "square-base", base, value: base ** 2, answer: `${base}` });
  const makeCubeBase = (base) => ({ mode: "cube-base", base, value: base ** 3, answer: `${base}` });
  const comparePair = (leftBase, leftPower, rightBase, rightPower) => {
    const leftValue = leftPower === 2 ? leftBase ** 2 : leftBase ** 3;
    const rightValue = rightPower === 2 ? rightBase ** 2 : rightBase ** 3;
    const leftLabel = `${leftBase}${leftPower === 2 ? "²" : "³"}`;
    const rightLabel = `${rightBase}${rightPower === 2 ? "²" : "³"}`;
    return { leftLabel, rightLabel, answer: leftValue > rightValue ? leftLabel : rightLabel };
  };
  const makeOrder = (items) => {
    const withValues = items.map(([base, power]) => ({ label: `${base}${power === 2 ? "²" : "³"}`, value: power === 2 ? base ** 2 : base ** 3 }));
    return { orderLabels: withValues.map((item) => item.label), orderAnswer: withValues.sort((a, b) => a.value - b.value).map((item) => item.label).join(", ") };
  };
  const makeTrueFalse = (statement, answer) => ({ statement, answer });
  return {
    identifyA: makeIdentify(identifyValues[0]), identifyB: makeIdentify(identifyValues[1]), identifyC: makeIdentify(identifyValues[2]), identifyD: makeIdentify(identifyValues[3]), identifyE: makeIdentify(identifyValues[4]),
    identifyF: makeIdentify(identifyValues[5]), identifyG: makeIdentify(identifyValues[6]), identifyH: makeIdentify(identifyValues[7]), identifyI: makeIdentify(identifyValues[8]), identifyJ: makeIdentify(identifyValues[9]),
    completeA: makeSquare(5), completeB: makeCubeBase(4), completeC: makeSquare(8), completeD: makeCube(3), completeE: makeSquareBase(9),
    completeF: makeCubeBase(5), completeG: makeSquare(12), completeH: makeCube(6), completeI: makeSquareBase(7), completeJ: makeCube(9),
    compareA: comparePair(5, 2, 3, 3), compareB: comparePair(6, 2, 4, 3), compareC: comparePair(8, 2, 4, 3), compareD: comparePair(9, 2, 5, 3),
    compareE: comparePair(10, 2, 6, 3), compareF: comparePair(7, 2, 4, 3), compareG: comparePair(11, 2, 5, 3), compareH: comparePair(12, 2, 7, 3),
    compareI: makeOrder([[4, 2], [2, 3], [5, 2]]), compareJ: makeOrder([[3, 3], [8, 2], [6, 2]]),
    trueFalseA: makeTrueFalse("49 is a square number.", "True"), trueFalseB: makeTrueFalse("27 is a cube number.", "True"), trueFalseC: makeTrueFalse("64 is both a square number and a cube number.", "True"),
    trueFalseD: makeTrueFalse("32 is a square number.", "False"), trueFalseE: makeTrueFalse("125 is a cube number.", "True"), trueFalseF: makeTrueFalse("81 is a cube number.", "False"),
    trueFalseG: makeTrueFalse("The square of 12 is 144.", "True"), trueFalseH: makeTrueFalse("The cube of 7 is 49.", "False"), trueFalseI: makeTrueFalse("Every cube number is also a square number.", "False"),
    trueFalseJ: makeTrueFalse("1 is both a square number and a cube number.", "True")
  };
}

function squareCubeChange(index) { return index === 0 ? "Starting example." : "Only the base, power, or statement changes."; }

function generateFourOperationsIntegersTeaching(topic, variant, settings, difficultyKey) {
  const base = getIntegerOperationsBase(difficultyKey);
  let sequence;

  if (variant.id === "choose-operation") {
    sequence = [
      { question: `Which operation makes this true: ${base.chooseA.left} ? ${base.chooseA.right} = ${base.chooseA.result}?`, answer: `${base.chooseA.answer}`, change: "Model selecting the operation." },
      { question: `Which operation makes this true: ${base.chooseB.left} ? ${base.chooseB.right} = ${base.chooseB.result}?`, answer: `${base.chooseB.answer}`, change: "Only the numbers change." },
      { question: `Which operation makes this true: ${base.chooseC.left} ? ${base.chooseC.right} = ${base.chooseC.result}?`, answer: `${base.chooseC.answer}`, change: "Only the operation family changes." }
    ];
  } else if (variant.id === "missing-value") {
    sequence = [
      { question: `Complete: ${base.missingA.prompt}`, answer: `${base.missingA.answer}`, change: "Model finding a missing value." },
      { question: `Complete: ${base.missingB.prompt}`, answer: `${base.missingB.answer}`, change: "Only the operation changes." },
      { question: `Complete: ${base.missingC.prompt}`, answer: `${base.missingC.answer}`, change: "Only the missing part changes position." }
    ];
  } else if (variant.id === "error-spotting") {
    sequence = [
      { question: `${base.errorA.prompt} Are they correct?`, answer: `${base.errorA.answer}`, change: "Model spotting an error." },
      { question: `${base.errorB.prompt}`, answer: `${base.errorB.answer}`, change: "Only the operation changes." },
      { question: `Correct: ${base.errorC.correctPrompt}`, answer: `${base.errorC.correctAnswer}`, change: "Only the task changes from spotting to correcting." }
    ];
  } else {
    sequence = [
      { question: `Calculate: ${base.calcA.expression}`, answer: `${base.calcA.answer}`, change: "Model a direct integer calculation." },
      { question: `Calculate: ${base.calcB.expression}`, answer: `${base.calcB.answer}`, change: "Only the numbers change." },
      { question: `Calculate: ${base.calcC.expression}`, answer: `${base.calcC.answer}`, change: "Only the operation changes." }
    ];
  }

  return createTeachingSequence(topic, variant, sequence);
}

function generateFourOperationsIntegers(_topic, variant, settings, difficultyKey) {
  if (variant.id === "choose-operation") return generateIntegerChooseOperation(settings, difficultyKey);
  if (variant.id === "missing-value") return generateIntegerMissingValue(settings, difficultyKey);
  if (variant.id === "error-spotting") return generateIntegerErrors(settings, difficultyKey);
  return generateIntegerCalculate(settings, difficultyKey);
}

function generateIntegerCalculate(_settings, difficultyKey) {
  const base = getIntegerOperationsBase(difficultyKey);
  return {
    questions: [base.calcA, base.calcB, base.calcC, base.calcD, base.calcE, base.calcF, base.calcG, base.calcH, base.calcI, base.calcJ].map((item, index) => ({
      question: `Calculate: ${item.expression}`,
      answer: `${item.answer}`,
      change: integerOperationChange(index)
    }))
  };
}

function generateIntegerChooseOperation(_settings, difficultyKey) {
  const base = getIntegerOperationsBase(difficultyKey);
  return {
    questions: [base.chooseA, base.chooseB, base.chooseC, base.chooseD, base.chooseE, base.chooseF, base.chooseG, base.chooseH, base.chooseI, base.chooseJ].map((item, index) => ({
      question: `Which operation makes this true: ${item.left} ? ${item.right} = ${item.result}?`,
      answer: `${item.answer}`,
      change: integerOperationChange(index)
    }))
  };
}

function generateIntegerMissingValue(_settings, difficultyKey) {
  const base = getIntegerOperationsBase(difficultyKey);
  return {
    questions: [base.missingA, base.missingB, base.missingC, base.missingD, base.missingE, base.missingF, base.missingG, base.missingH, base.missingI, base.missingJ].map((item, index) => ({
      question: `Complete: ${item.prompt}`,
      answer: `${item.answer}`,
      change: integerOperationChange(index)
    }))
  };
}

function generateIntegerErrors(_settings, difficultyKey) {
  const base = getIntegerOperationsBase(difficultyKey);
  const items = [base.errorA, base.errorB, base.errorC, base.errorD, base.errorE, base.errorF, base.errorG, base.errorH, base.errorI, base.errorJ];
  return {
    questions: items.map((item, index) => ({
      question: item.correctPrompt ? `Correct: ${item.correctPrompt}` : `${item.prompt}`,
      answer: item.correctPrompt ? `${item.correctAnswer}` : `${item.answer}`,
      change: integerOperationChange(index)
    }))
  };
}

function getIntegerOperationsBase(difficultyKey) {
  const easy = difficultyKey === "easy";
  const calc = easy
    ? ["18 + 7", "23 - 8", "6 × 4", "28 ÷ 7", "35 + 14", "42 - 19", "8 × 5", "54 ÷ 6", "17 + 26", "63 - 27"]
    : difficultyKey === "hard"
      ? ["208 + 47 - 19", "403 - 178 + 26", "14 × 16 - 20", "312 ÷ 24 + 9", "509 + 186 - 95", "700 - 285 + 48", "18 × 17 - 36", "432 ÷ 18 + 14", "605 + 289 - 117", "900 - 467 + 38"]
      : ["36 + 18 - 9", "67 - 29 + 14", "12 × 6 - 8", "81 ÷ 9 + 5", "54 + 27 - 16", "98 - 35 + 12", "14 × 5 - 7", "96 ÷ 8 + 6", "73 + 19 - 11", "108 - 46 + 17"];
  const makeCalc = (expression) => ({ expression, answer: evaluateExpression(expression.replace("×", "*").replace("÷", "/")) });
  const chooseItems = easy
    ? [[12, 5, 17, "+"], [18, 6, 12, "-"], [7, 4, 28, "×"], [24, 6, 4, "÷"], [15, 9, 24, "+"], [32, 7, 25, "-"], [8, 3, 24, "×"], [45, 9, 5, "÷"], [21, 14, 35, "+"], [56, 8, 7, "÷"]]
    : difficultyKey === "hard"
      ? [[125, 87, 212, "+"], [342, 168, 174, "-"], [24, 15, 360, "×"], [432, 18, 24, "÷"], [509, 186, 695, "+"], [700, 285, 415, "-"], [32, 14, 448, "×"], [624, 24, 26, "÷"], [605, 289, 894, "+"], [648, 27, 24, "÷"]]
      : [[28, 17, 45, "+"], [72, 36, 36, "-"], [14, 7, 98, "×"], [90, 10, 9, "÷"], [35, 24, 59, "+"], [104, 39, 65, "-"], [16, 6, 96, "×"], [144, 12, 12, "÷"], [63, 18, 81, "+"], [121, 44, 77, "-"]];
  const makeChoose = ([left, right, result, answer]) => ({ left, right, result, answer });
  const missingItems = easy
    ? [["12 + ? = 19", 7], ["25 - ? = 11", 14], ["? × 4 = 32", 8], ["36 ÷ ? = 6", 6], ["14 + ? = 23", 9], ["41 - ? = 15", 26], ["? × 5 = 45", 9], ["56 ÷ ? = 8", 7], ["? + 18 = 31", 13], ["63 - 27 = ?", 36]]
    : difficultyKey === "hard"
      ? [["208 + ? = 347", 139], ["503 - ? = 286", 217], ["? × 14 = 294", 21], ["432 ÷ ? = 18", 24], ["409 + ? = 615", 206], ["840 - ? = 365", 475], ["? × 18 = 306", 17], ["624 ÷ ? = 26", 24], ["? + 289 = 605", 316], ["900 - 467 = ?", 433]]
      : [["36 + ? = 58", 22], ["97 - ? = 43", 54], ["? × 7 = 84", 12], ["144 ÷ ? = 12", 12], ["48 + ? = 79", 31], ["186 - ? = 98", 88], ["? × 9 = 117", 13], ["198 ÷ ? = 18", 11], ["? + 34 = 83", 49], ["125 - 48 = ?", 77]];
  const makeMissing = ([prompt, answer]) => ({ prompt, answer });
  const makeError = (prompt, answer) => ({ prompt, answer });
  const makeCorrection = (correctPrompt, correctAnswer) => ({ correctPrompt, correctAnswer });
  return {
    calcA: makeCalc(calc[0]), calcB: makeCalc(calc[1]), calcC: makeCalc(calc[2]), calcD: makeCalc(calc[3]), calcE: makeCalc(calc[4]), calcF: makeCalc(calc[5]), calcG: makeCalc(calc[6]), calcH: makeCalc(calc[7]), calcI: makeCalc(calc[8]), calcJ: makeCalc(calc[9]),
    chooseA: makeChoose(chooseItems[0]), chooseB: makeChoose(chooseItems[1]), chooseC: makeChoose(chooseItems[2]), chooseD: makeChoose(chooseItems[3]), chooseE: makeChoose(chooseItems[4]), chooseF: makeChoose(chooseItems[5]), chooseG: makeChoose(chooseItems[6]), chooseH: makeChoose(chooseItems[7]), chooseI: makeChoose(chooseItems[8]), chooseJ: makeChoose(chooseItems[9]),
    missingA: makeMissing(missingItems[0]), missingB: makeMissing(missingItems[1]), missingC: makeMissing(missingItems[2]), missingD: makeMissing(missingItems[3]), missingE: makeMissing(missingItems[4]), missingF: makeMissing(missingItems[5]), missingG: makeMissing(missingItems[6]), missingH: makeMissing(missingItems[7]), missingI: makeMissing(missingItems[8]), missingJ: makeMissing(missingItems[9]),
    errorA: makeError("A pupil says 18 + 7 = 187. Are they correct?", "No"), errorB: makeError("A pupil says 54 - 27 = 33 because they subtracted the digits separately. Are they correct?", "No"),
    errorC: makeCorrection("8 × 6", 48), errorD: makeError("A pupil says 72 ÷ 8 = 9 because 8 + 1 = 9. Are they correct?", "No"), errorE: makeError("A pupil says 35 + 14 = 39 because they only added the ones. Are they correct?", "No"),
    errorF: makeCorrection("96 ÷ 12", 8), errorG: makeError("A pupil says 14 × 5 = 19 because they added instead of multiplied. Are they correct?", "No"), errorH: makeError("A pupil says 125 - 68 = 73. Are they correct?", "No"),
    errorI: makeCorrection("63 + 29", 92), errorJ: makeError("A pupil says division and subtraction are the same because both make numbers smaller. Are they correct?", "No")
  };
}

function integerOperationChange(index) { return index === 0 ? "Starting example." : "Only the operation, values, or missing part changes."; }

function generateCompareOrderDecimalsTeaching(topic, variant, settings, difficultyKey) {
  const base = getCompareOrderDecimalsBase(difficultyKey);
  let sequence;

  if (variant.id === "order-sets") {
    sequence = [
      { question: `Put these in ascending order: ${base.orderA.values.join(", ")}.`, answer: `${base.orderA.answer}`, change: "Model ordering a small set of decimals." },
      { question: `Put these in descending order: ${base.orderB.values.join(", ")}.`, answer: `${base.orderB.answer}`, change: "Only the direction changes." },
      { question: `Put these in ascending order: ${base.orderC.values.join(", ")}.`, answer: `${base.orderC.answer}`, change: "Only the decimal set changes." }
    ];
  } else if (variant.id === "benchmarking") {
    sequence = [
      { question: `${base.benchmarkA.value} is closer to ${base.benchmarkA.left} or ${base.benchmarkA.right}?`, answer: `${base.benchmarkA.answer}`, change: "Model using a benchmark." },
      { question: `${base.benchmarkB.value} is greater than or less than ${base.benchmarkB.right}?`, answer: `${base.benchmarkB.answer}`, change: "Only the comparison wording changes." },
      { question: `${base.benchmarkC.value} is closer to ${base.benchmarkC.left} or ${base.benchmarkC.right}?`, answer: `${base.benchmarkC.answer}`, change: "Only the decimal changes." }
    ];
  } else if (variant.id === "true-false") {
    sequence = [
      { question: `True or false: ${base.trueFalseA.statement}`, answer: `${base.trueFalseA.answer}`, change: "Model checking a decimal statement." },
      { question: `True or false: ${base.trueFalseB.statement}`, answer: `${base.trueFalseB.answer}`, change: "Only the decimal place value changes." },
      { question: `True or false: ${base.trueFalseC.statement}`, answer: `${base.trueFalseC.answer}`, change: "Only the comparison changes." }
    ];
  } else {
    sequence = [
      { question: `Which is greater: ${base.compareA.left} or ${base.compareA.right}?`, answer: `${base.compareA.answer}`, change: "Model comparing decimals digit by digit." },
      { question: `Which is smaller: ${base.compareB.left} or ${base.compareB.right}?`, answer: `${base.compareB.answer}`, change: "Only the direction changes." },
      { question: `Which is greater: ${base.compareC.left} or ${base.compareC.right}?`, answer: `${base.compareC.answer}`, change: "Only one place value changes." }
    ];
  }

  return createTeachingSequence(topic, variant, sequence);
}

function generateCompareOrderDecimals(_topic, variant, settings, difficultyKey) {
  if (variant.id === "order-sets") return generateDecimalOrderSets(settings, difficultyKey);
  if (variant.id === "benchmarking") return generateDecimalBenchmarking(settings, difficultyKey);
  if (variant.id === "true-false") return generateDecimalTrueFalse(settings, difficultyKey);
  return generateDecimalComparePairs(settings, difficultyKey);
}

function generateDecimalComparePairs(_settings, difficultyKey) {
  const base = getCompareOrderDecimalsBase(difficultyKey);
  return {
    questions: [base.compareA, base.compareB, base.compareC, base.compareD, base.compareE, base.compareF, base.compareG, base.compareH, base.compareI, base.compareJ].map((item, index) => ({
      question: index % 2 === 1 ? `Which is smaller: ${item.left} or ${item.right}?` : `Which is greater: ${item.left} or ${item.right}?`,
      answer: `${item.answer}`,
      change: decimalComparisonChange(index)
    }))
  };
}

function generateDecimalOrderSets(_settings, difficultyKey) {
  const base = getCompareOrderDecimalsBase(difficultyKey);
  return {
    questions: [base.orderA, base.orderB, base.orderC, base.orderD, base.orderE, base.orderF, base.orderG, base.orderH, base.orderI, base.orderJ].map((item, index) => ({
      question: `Put these in ${item.direction} order: ${item.values.join(", ")}.`,
      answer: `${item.answer}`,
      change: decimalComparisonChange(index)
    }))
  };
}

function generateDecimalBenchmarking(_settings, difficultyKey) {
  const base = getCompareOrderDecimalsBase(difficultyKey);
  return {
    questions: [base.benchmarkA, base.benchmarkB, base.benchmarkC, base.benchmarkD, base.benchmarkE, base.benchmarkF, base.benchmarkG, base.benchmarkH, base.benchmarkI, base.benchmarkJ].map((item, index) => ({
      question: item.mode === "closer" ? `${item.value} is closer to ${item.left} or ${item.right}?` : `Is ${item.value} greater than or less than ${item.right}?`,
      answer: `${item.answer}`,
      change: decimalComparisonChange(index)
    }))
  };
}

function generateDecimalTrueFalse(_settings, difficultyKey) {
  const base = getCompareOrderDecimalsBase(difficultyKey);
  return {
    questions: [base.trueFalseA, base.trueFalseB, base.trueFalseC, base.trueFalseD, base.trueFalseE, base.trueFalseF, base.trueFalseG, base.trueFalseH, base.trueFalseI, base.trueFalseJ].map((item, index) => ({
      question: `True or false: ${item.statement}`,
      answer: `${item.answer}`,
      change: decimalComparisonChange(index)
    }))
  };
}

function getCompareOrderDecimalsBase(difficultyKey) {
  const comparePairs = difficultyKey === "easy"
    ? [["0.4", "0.7"], ["0.63", "0.58"], ["1.2", "1.19"], ["0.85", "0.9"], ["2.04", "2.4"], ["0.33", "0.303"], ["1.07", "1.7"], ["0.56", "0.65"], ["3.2", "3.02"], ["0.91", "0.89"]]
    : difficultyKey === "hard"
      ? [["4.503", "4.530"], ["2.781", "2.708"], ["6.049", "6.094"], ["3.875", "3.857"], ["7.105", "7.150"], ["5.609", "5.690"], ["8.432", "8.423"], ["9.018", "9.180"], ["4.997", "5.001"], ["6.250", "6.205"]]
      : [["1.45", "1.405"], ["2.78", "2.708"], ["3.16", "3.061"], ["4.09", "4.9"], ["5.37", "5.307"], ["2.54", "2.45"], ["6.105", "6.15"], ["7.82", "7.802"], ["8.49", "8.409"], ["9.3", "9.03"]];
  const makeCompare = ([left, right]) => ({ left, right, answer: Number(left) > Number(right) ? left : right });
  const makeOrder = (values, direction) => ({ values, direction, answer: values.slice().sort((a, b) => direction === "ascending" ? Number(a) - Number(b) : Number(b) - Number(a)).join(", ") });
  const benchmarkItems = difficultyKey === "easy"
    ? [{ mode: "closer", value: "0.46", left: "0", right: "0.5", answer: "0.5" }, { mode: "greater-less", value: "0.72", right: "0.5", answer: "greater" }, { mode: "closer", value: "1.18", left: "1", right: "1.5", answer: "1" }, { mode: "greater-less", value: "0.39", right: "0.4", answer: "less" }, { mode: "closer", value: "2.48", left: "2", right: "2.5", answer: "2.5" }, { mode: "greater-less", value: "0.91", right: "1", answer: "less" }, { mode: "closer", value: "3.02", left: "3", right: "3.5", answer: "3" }, { mode: "greater-less", value: "1.27", right: "1.2", answer: "greater" }, { mode: "closer", value: "0.12", left: "0", right: "0.5", answer: "0" }, { mode: "greater-less", value: "2.05", right: "2", answer: "greater" }]
    : difficultyKey === "hard"
      ? [{ mode: "closer", value: "4.487", left: "4.48", right: "4.5", answer: "4.5" }, { mode: "greater-less", value: "6.208", right: "6.200", answer: "greater" }, { mode: "closer", value: "3.751", left: "3.75", right: "3.8", answer: "3.75" }, { mode: "greater-less", value: "7.099", right: "7.09", answer: "greater" }, { mode: "closer", value: "5.249", left: "5.24", right: "5.25", answer: "5.25" }, { mode: "greater-less", value: "8.501", right: "8.500", answer: "greater" }, { mode: "closer", value: "2.998", left: "2.99", right: "3", answer: "3" }, { mode: "greater-less", value: "9.019", right: "9.02", answer: "less" }, { mode: "closer", value: "1.744", left: "1.74", right: "1.75", answer: "1.74" }, { mode: "greater-less", value: "4.402", right: "4.420", answer: "less" }]
      : [{ mode: "closer", value: "1.47", left: "1", right: "1.5", answer: "1.5" }, { mode: "greater-less", value: "2.63", right: "2.6", answer: "greater" }, { mode: "closer", value: "3.18", left: "3", right: "3.5", answer: "3" }, { mode: "greater-less", value: "4.91", right: "5", answer: "less" }, { mode: "closer", value: "5.26", left: "5", right: "5.5", answer: "5.5" }, { mode: "greater-less", value: "6.04", right: "6", answer: "greater" }, { mode: "closer", value: "0.62", left: "0.5", right: "1", answer: "0.5" }, { mode: "greater-less", value: "7.18", right: "7.2", answer: "less" }, { mode: "closer", value: "8.45", left: "8", right: "8.5", answer: "8.5" }, { mode: "greater-less", value: "9.09", right: "9", answer: "greater" }];
  const trueFalseItems = difficultyKey === "easy"
    ? [["0.8 > 0.75", "True"], ["1.09 > 1.9", "False"], ["0.45 = 0.450", "True"], ["2.04 < 2.4", "True"], ["0.63 < 0.603", "False"], ["3.2 = 3.20", "True"], ["0.19 > 0.2", "False"], ["4.07 < 4.7", "True"], ["0.56 > 0.506", "True"], ["1.01 < 1.001", "False"]]
    : difficultyKey === "hard"
      ? [["4.503 < 4.530", "True"], ["6.109 > 6.190", "False"], ["2.405 = 2.450", "False"], ["7.008 < 7.080", "True"], ["5.609 > 5.690", "False"], ["8.321 < 8.312", "False"], ["9.020 = 9.2", "False"], ["3.875 > 3.857", "True"], ["1.040 > 1.004", "True"], ["6.250 < 6.205", "False"]]
      : [["1.45 > 1.405", "True"], ["2.78 < 2.708", "False"], ["3.090 = 3.09", "True"], ["4.16 < 4.61", "True"], ["5.307 > 5.37", "False"], ["6.05 > 6.005", "True"], ["7.82 = 7.820", "True"], ["8.49 < 8.409", "False"], ["9.03 > 9.3", "False"], ["0.67 > 0.607", "True"]];
  return {
    compareA: makeCompare(comparePairs[0]), compareB: makeCompare(comparePairs[1]), compareC: makeCompare(comparePairs[2]), compareD: makeCompare(comparePairs[3]), compareE: makeCompare(comparePairs[4]), compareF: makeCompare(comparePairs[5]), compareG: makeCompare(comparePairs[6]), compareH: makeCompare(comparePairs[7]), compareI: makeCompare(comparePairs[8]), compareJ: makeCompare(comparePairs[9]),
    orderA: makeOrder([comparePairs[0][0], comparePairs[1][0], comparePairs[2][0]], "ascending"), orderB: makeOrder([comparePairs[0][1], comparePairs[1][1], comparePairs[2][1]], "descending"), orderC: makeOrder([comparePairs[3][0], comparePairs[4][0], comparePairs[5][0]], "ascending"),
    orderD: makeOrder([comparePairs[3][1], comparePairs[4][1], comparePairs[5][1]], "descending"), orderE: makeOrder([comparePairs[6][0], comparePairs[7][0], comparePairs[8][0]], "ascending"), orderF: makeOrder([comparePairs[6][1], comparePairs[7][1], comparePairs[8][1]], "descending"),
    orderG: makeOrder([comparePairs[1][0], comparePairs[4][1], comparePairs[9][0]], "ascending"), orderH: makeOrder([comparePairs[2][1], comparePairs[5][1], comparePairs[8][1]], "descending"), orderI: makeOrder([comparePairs[0][0], comparePairs[6][1], comparePairs[9][1]], "ascending"), orderJ: makeOrder([comparePairs[3][0], comparePairs[7][1], comparePairs[8][0]], "descending"),
    benchmarkA: benchmarkItems[0], benchmarkB: benchmarkItems[1], benchmarkC: benchmarkItems[2], benchmarkD: benchmarkItems[3], benchmarkE: benchmarkItems[4], benchmarkF: benchmarkItems[5], benchmarkG: benchmarkItems[6], benchmarkH: benchmarkItems[7], benchmarkI: benchmarkItems[8], benchmarkJ: benchmarkItems[9],
    trueFalseA: { statement: trueFalseItems[0][0], answer: trueFalseItems[0][1] }, trueFalseB: { statement: trueFalseItems[1][0], answer: trueFalseItems[1][1] }, trueFalseC: { statement: trueFalseItems[2][0], answer: trueFalseItems[2][1] }, trueFalseD: { statement: trueFalseItems[3][0], answer: trueFalseItems[3][1] }, trueFalseE: { statement: trueFalseItems[4][0], answer: trueFalseItems[4][1] }, trueFalseF: { statement: trueFalseItems[5][0], answer: trueFalseItems[5][1] }, trueFalseG: { statement: trueFalseItems[6][0], answer: trueFalseItems[6][1] }, trueFalseH: { statement: trueFalseItems[7][0], answer: trueFalseItems[7][1] }, trueFalseI: { statement: trueFalseItems[8][0], answer: trueFalseItems[8][1] }, trueFalseJ: { statement: trueFalseItems[9][0], answer: trueFalseItems[9][1] }
  };
}

function decimalComparisonChange(index) { return index === 0 ? "Starting example." : "Only one decimal feature changes."; }

function generateMultiplyFractionsIntegersTeaching(topic, variant, settings, difficultyKey) {
  const base = getMultiplyFractionsBase(difficultyKey);
  let sequence;

  if (variant.id === "find-the-product") {
    sequence = [
      { question: `${formatFraction(base.productA.n, base.productA.d)} × ${base.productA.multiplier}`, answer: `${formatFractionReduced(base.productA.answer.n, base.productA.answer.d)}`, change: "Model multiplying a fraction by an integer." },
      { question: `${formatFraction(base.productB.n, base.productB.d)} × ${base.productB.multiplier}`, answer: `${formatFractionReduced(base.productB.answer.n, base.productB.answer.d)}`, change: "Only the multiplier changes." },
      { question: `${formatFraction(base.productC.n, base.productC.d)} × ${base.productC.multiplier}`, answer: `${formatFractionReduced(base.productC.answer.n, base.productC.answer.d)}`, change: "Only the fraction changes." }
    ];
  } else if (variant.id === "missing-value") {
    sequence = [
      { question: `${formatFraction(base.missingA.n, base.missingA.d)} × ? = ${formatFractionReduced(base.missingA.answer.n, base.missingA.answer.d)}`, answer: `${base.missingA.multiplier}`, change: "Model finding the missing multiplier." },
      { question: `? × ${base.missingB.multiplier} = ${formatFractionReduced(base.missingB.answer.n, base.missingB.answer.d)}`, answer: `${formatFraction(base.missingB.n, base.missingB.d)}`, change: "Only the missing part changes." },
      { question: `${formatFraction(base.missingC.n, base.missingC.d)} × ${base.missingC.multiplier} = ?`, answer: `${formatFractionReduced(base.missingC.answer.n, base.missingC.answer.d)}`, change: "Only the missing part moves to the product." }
    ];
  } else if (variant.id === "error-spotting") {
    sequence = [
      { question: `A pupil says ${formatFraction(base.errorA.n, base.errorA.d)} × ${base.errorA.multiplier} = ${formatFraction(base.errorA.wrong.n, base.errorA.wrong.d)}. Are they correct?`, answer: "No", change: "Model spotting a fraction multiplication error." },
      { question: `Correct: ${base.errorB.correctPrompt}`, answer: `${formatFractionReduced(base.errorB.answer.n, base.errorB.answer.d)}`, change: "Only the task changes to correction." },
      { question: `A pupil says multiplying by ${base.errorC.multiplier} changes both the numerator and denominator in ${formatFraction(base.errorC.n, base.errorC.d)}. Are they correct?`, answer: "No", change: "Only the misconception changes." }
    ];
  } else {
    sequence = [
      { question: `Scale ${formatFraction(base.scaleA.n, base.scaleA.d)} by ${base.scaleA.multiplier}.`, answer: `${formatFractionReduced(base.scaleA.answer.n, base.scaleA.answer.d)}`, change: "Model scaling a fraction." },
      { question: `Scale ${formatFraction(base.scaleB.n, base.scaleB.d)} by ${base.scaleB.multiplier}.`, answer: `${formatFractionReduced(base.scaleB.answer.n, base.scaleB.answer.d)}`, change: "Only the multiplier changes." },
      { question: `Scale ${formatFraction(base.scaleC.n, base.scaleC.d)} by ${base.scaleC.multiplier}.`, answer: `${formatFractionReduced(base.scaleC.answer.n, base.scaleC.answer.d)}`, change: "Only the fraction changes." }
    ];
  }

  return createTeachingSequence(topic, variant, sequence);
}

function generateMultiplyFractionsIntegers(_topic, variant, settings, difficultyKey) {
  if (variant.id === "find-the-product") return generateMultiplyFractionsProducts(settings, difficultyKey);
  if (variant.id === "missing-value") return generateMultiplyFractionsMissing(settings, difficultyKey);
  if (variant.id === "error-spotting") return generateMultiplyFractionsErrors(settings, difficultyKey);
  return generateMultiplyFractionsScale(settings, difficultyKey);
}

function generateMultiplyFractionsScale(_settings, difficultyKey) {
  const base = getMultiplyFractionsBase(difficultyKey);
  return {
    questions: [base.scaleA, base.scaleB, base.scaleC, base.scaleD, base.scaleE, base.scaleF, base.scaleG, base.scaleH, base.scaleI, base.scaleJ].map((item, index) => ({
      question: `Scale ${formatFraction(item.n, item.d)} by ${item.multiplier}.`,
      answer: `${formatFractionReduced(item.answer.n, item.answer.d)}`,
      change: fractionMultiplyChange(index)
    }))
  };
}

function generateMultiplyFractionsProducts(_settings, difficultyKey) {
  const base = getMultiplyFractionsBase(difficultyKey);
  return {
    questions: [base.productA, base.productB, base.productC, base.productD, base.productE, base.productF, base.productG, base.productH, base.productI, base.productJ].map((item, index) => ({
      question: `${formatFraction(item.n, item.d)} × ${item.multiplier}`,
      answer: `${formatFractionReduced(item.answer.n, item.answer.d)}`,
      change: fractionMultiplyChange(index)
    }))
  };
}

function generateMultiplyFractionsMissing(_settings, difficultyKey) {
  const base = getMultiplyFractionsBase(difficultyKey);
  const items = [base.missingA, base.missingB, base.missingC, base.missingD, base.missingE, base.missingF, base.missingG, base.missingH, base.missingI, base.missingJ];
  return {
    questions: items.map((item, index) => ({
      question: item.mode === "multiplier" ? `${formatFraction(item.n, item.d)} × ? = ${formatFractionReduced(item.answer.n, item.answer.d)}`
        : item.mode === "fraction" ? `? × ${item.multiplier} = ${formatFractionReduced(item.answer.n, item.answer.d)}`
        : `${formatFraction(item.n, item.d)} × ${item.multiplier} = ?`,
      answer: item.mode === "multiplier" ? `${item.multiplier}` : item.mode === "fraction" ? `${formatFraction(item.n, item.d)}` : `${formatFractionReduced(item.answer.n, item.answer.d)}`,
      change: fractionMultiplyChange(index)
    }))
  };
}

function generateMultiplyFractionsErrors(_settings, difficultyKey) {
  const base = getMultiplyFractionsBase(difficultyKey);
  return {
    questions: [base.errorA, base.errorB, base.errorC, base.errorD, base.errorE, base.errorF, base.errorG, base.errorH, base.errorI, base.errorJ].map((item, index) => ({
      question: item.correctPrompt ? `Correct: ${item.correctPrompt}` : `A pupil says ${formatFraction(item.n, item.d)} × ${item.multiplier} = ${formatFraction(item.wrong.n, item.wrong.d)}. Are they correct?`,
      answer: item.correctPrompt ? `${formatFractionReduced(item.answer.n, item.answer.d)}` : `${item.answer}`,
      change: fractionMultiplyChange(index)
    }))
  };
}

function getMultiplyFractionsBase(difficultyKey) {
  const raw = difficultyKey === "easy"
    ? [[1, 4, 2], [1, 3, 3], [2, 5, 2], [3, 8, 2], [1, 6, 4], [2, 7, 3], [3, 10, 2], [1, 5, 5], [2, 9, 4], [3, 4, 2]]
    : difficultyKey === "hard"
      ? [[2, 3, 6], [5, 8, 4], [7, 9, 3], [4, 7, 7], [5, 6, 6], [7, 10, 5], [11, 12, 3], [3, 4, 8], [5, 9, 9], [7, 8, 6]]
      : [[2, 3, 2], [3, 4, 3], [4, 5, 2], [5, 6, 3], [3, 7, 4], [5, 8, 2], [7, 10, 2], [4, 9, 3], [5, 12, 4], [2, 5, 5]];
  const makeItem = ([n, d, multiplier]) => ({ n, d, multiplier, answer: { n: n * multiplier, d } });
  const items = raw.map(makeItem);
  const errorFrom = (item) => ({ ...item, wrong: { n: item.n * item.multiplier, d: item.d * item.multiplier }, answer: "No" });
  return {
    scaleA: items[0], scaleB: items[1], scaleC: items[2], scaleD: items[3], scaleE: items[4], scaleF: items[5], scaleG: items[6], scaleH: items[7], scaleI: items[8], scaleJ: items[9],
    productA: items[0], productB: items[1], productC: items[2], productD: items[3], productE: items[4], productF: items[5], productG: items[6], productH: items[7], productI: items[8], productJ: items[9],
    missingA: { ...items[0], mode: "multiplier" }, missingB: { ...items[1], mode: "fraction" }, missingC: { ...items[2], mode: "product" }, missingD: { ...items[3], mode: "multiplier" }, missingE: { ...items[4], mode: "fraction" },
    missingF: { ...items[5], mode: "product" }, missingG: { ...items[6], mode: "multiplier" }, missingH: { ...items[7], mode: "fraction" }, missingI: { ...items[8], mode: "product" }, missingJ: { ...items[9], mode: "multiplier" },
    errorA: errorFrom(items[0]), errorB: { ...items[1], correctPrompt: `${formatFraction(items[1].n, items[1].d)} × ${items[1].multiplier}`, answer: items[1].answer }, errorC: errorFrom(items[2]), errorD: errorFrom(items[3]), errorE: { ...items[4], correctPrompt: `${formatFraction(items[4].n, items[4].d)} × ${items[4].multiplier}`, answer: items[4].answer },
    errorF: errorFrom(items[5]), errorG: errorFrom(items[6]), errorH: { ...items[7], correctPrompt: `${formatFraction(items[7].n, items[7].d)} × ${items[7].multiplier}`, answer: items[7].answer }, errorI: errorFrom(items[8]), errorJ: errorFrom(items[9])
  };
}

function fractionMultiplyChange(index) { return index === 0 ? "Starting example." : "Only the fraction, multiplier, or prompt type changes."; }

function generateFractionOfAnAmountTeaching(topic, variant, settings, difficultyKey) {
  const base = getFractionOfAmountBase(difficultyKey);
  let sequence;

  if (variant.id === "non-unit-fractions") {
    const a = offsetFractionAmount(base.nonUnitA, 1);
    const b = offsetFractionAmount(base.nonUnitB, 2);
    const c = offsetFractionAmount(base.nonUnitC, 3);
    sequence = [
      { question: `Find ${formatFraction(a.n, a.d)} of ${a.amount}.`, answer: `${a.answer}`, change: "Model finding a non-unit fraction of an amount.", diagram: buildFractionOfAmountDiagram(a, "part") },
      { question: `Find ${formatFraction(b.n, b.d)} of ${b.amount}.`, answer: `${b.answer}`, change: "Only the fraction changes.", diagram: buildFractionOfAmountDiagram(b, "part") },
      { question: `Find ${formatFraction(c.n, c.d)} of ${c.amount}.`, answer: `${c.answer}`, change: "Only the amount changes.", diagram: buildFractionOfAmountDiagram(c, "part") }
    ];
  } else if (variant.id === "reverse-problems") {
    const a = offsetReverseFractionAmount(base.reverseA, 1);
    const b = offsetReverseFractionAmount(base.reverseB, 2);
    const c = offsetReverseFractionAmount(base.reverseC, 3);
    sequence = [
      { question: `${formatFraction(a.n, a.d)} of an amount is ${a.part}. What is the whole amount?`, answer: `${a.whole}`, change: "Model a reverse fraction problem.", diagram: buildFractionOfAmountDiagram({ n: a.n, d: a.d, amount: a.whole, answer: a.part }, "reverse") },
      { question: `${formatFraction(b.n, b.d)} of an amount is ${b.part}. What is the whole amount?`, answer: `${b.whole}`, change: "Only the fraction changes.", diagram: buildFractionOfAmountDiagram({ n: b.n, d: b.d, amount: b.whole, answer: b.part }, "reverse") },
      { question: `${formatFraction(c.n, c.d)} of an amount is ${c.part}. What is the whole amount?`, answer: `${c.whole}`, change: "Only the amount changes.", diagram: buildFractionOfAmountDiagram({ n: c.n, d: c.d, amount: c.whole, answer: c.part }, "reverse") }
    ];
  } else if (variant.id === "compare-methods") {
    const a = offsetMethodFractionAmount(base.methodA, 1);
    const b = offsetMethodFractionAmount(base.methodB, 2);
    const c = offsetMethodFractionAmount(base.methodC, 3);
    sequence = [
      { question: `A pupil finds ${formatFraction(a.n, a.d)} of ${a.amount} by ${a.method}. Are they correct?`, answer: `${a.answer}`, change: "Model checking a method.", diagram: buildFractionOfAmountDiagram(a, "part") },
      { question: `A pupil finds ${formatFraction(b.n, b.d)} of ${b.amount} by ${b.method}. Are they correct?`, answer: `${b.answer}`, change: "Only the method changes.", diagram: buildFractionOfAmountDiagram(b, "part") },
      { question: `Explain why dividing by ${c.d} first is helpful when finding ${formatFraction(c.n, c.d)} of ${c.amount}.`, answer: "Because it finds one equal part first, then scales to the number of parts needed.", change: "Only the task changes to explanation.", diagram: buildFractionOfAmountDiagram(c, "part") }
    ];
  } else {
    const a = offsetFractionAmount(base.unitA, 1);
    const b = offsetFractionAmount(base.unitB, 2);
    const c = offsetFractionAmount(base.unitC, 3);
    sequence = [
      { question: `Find ${formatFraction(a.n, a.d)} of ${a.amount}.`, answer: `${a.answer}`, change: "Model a unit fraction of an amount.", diagram: buildFractionOfAmountDiagram(a, "part") },
      { question: `Find ${formatFraction(b.n, b.d)} of ${b.amount}.`, answer: `${b.answer}`, change: "Only the unit fraction changes.", diagram: buildFractionOfAmountDiagram(b, "part") },
      { question: `Find ${formatFraction(c.n, c.d)} of ${c.amount}.`, answer: `${c.answer}`, change: "Only the amount changes.", diagram: buildFractionOfAmountDiagram(c, "part") }
    ];
  }

  return createTeachingSequence(topic, variant, sequence);
}

function generateFractionOfAnAmount(_topic, variant, settings, difficultyKey) {
  if (variant.id === "non-unit-fractions") return generateFractionOfAmountNonUnit(settings, difficultyKey);
  if (variant.id === "reverse-problems") return generateFractionOfAmountReverse(settings, difficultyKey);
  if (variant.id === "compare-methods") return generateFractionOfAmountMethods(settings, difficultyKey);
  return generateFractionOfAmountUnit(settings, difficultyKey);
}

function generateFractionOfAmountUnit(_settings, difficultyKey) {
  const base = getFractionOfAmountBase(difficultyKey);
  return {
    questions: [base.unitA, base.unitB, base.unitC, base.unitD, base.unitE, base.unitF, base.unitG, base.unitH, base.unitI, base.unitJ].map((item, index) => ({
      question: `Find ${formatFraction(item.n, item.d)} of ${item.amount}.`,
      answer: `${item.answer}`,
      change: fractionOfAmountChange(index),
      diagram: buildFractionOfAmountDiagram(item, "part")
    }))
  };
}

function generateFractionOfAmountNonUnit(_settings, difficultyKey) {
  const base = getFractionOfAmountBase(difficultyKey);
  return {
    questions: [base.nonUnitA, base.nonUnitB, base.nonUnitC, base.nonUnitD, base.nonUnitE, base.nonUnitF, base.nonUnitG, base.nonUnitH, base.nonUnitI, base.nonUnitJ].map((item, index) => ({
      question: `Find ${formatFraction(item.n, item.d)} of ${item.amount}.`,
      answer: `${item.answer}`,
      change: fractionOfAmountChange(index),
      diagram: buildFractionOfAmountDiagram(item, "part")
    }))
  };
}

function generateFractionOfAmountReverse(_settings, difficultyKey) {
  const base = getFractionOfAmountBase(difficultyKey);
  return {
    questions: [base.reverseA, base.reverseB, base.reverseC, base.reverseD, base.reverseE, base.reverseF, base.reverseG, base.reverseH, base.reverseI, base.reverseJ].map((item, index) => ({
      question: `${formatFraction(item.n, item.d)} of an amount is ${item.part}. What is the whole amount?`,
      answer: `${item.whole}`,
      change: fractionOfAmountChange(index),
      diagram: buildFractionOfAmountDiagram({ n: item.n, d: item.d, amount: item.whole, answer: item.part }, "reverse")
    }))
  };
}

function generateFractionOfAmountMethods(_settings, difficultyKey) {
  const base = getFractionOfAmountBase(difficultyKey);
  return {
    questions: [base.methodA, base.methodB, base.methodC, base.methodD, base.methodE, base.methodF, base.methodG, base.methodH, base.methodI, base.methodJ].map((item, index) => ({
      question: item.mode === "explain" ? `Explain why dividing by ${item.d} first helps when finding ${formatFraction(item.n, item.d)} of ${item.amount}.` : `A pupil finds ${formatFraction(item.n, item.d)} of ${item.amount} by ${item.method}. Are they correct?`,
      answer: item.mode === "explain" ? "Because it finds one equal part first, then scales to the number of parts needed." : `${item.answer}`,
      change: fractionOfAmountChange(index),
      diagram: buildFractionOfAmountDiagram(item, "part")
    }))
  };
}

function getFractionOfAmountBase(difficultyKey) {
  const unit = difficultyKey === "easy"
    ? [[1, 2, 18], [1, 3, 24], [1, 4, 28], [1, 5, 35], [1, 6, 42], [1, 8, 48], [1, 10, 60], [1, 4, 36], [1, 3, 27], [1, 5, 45]]
    : difficultyKey === "hard"
      ? [[1, 3, 72], [1, 4, 92], [1, 5, 135], [1, 6, 150], [1, 8, 184], [1, 10, 260], [1, 12, 288], [1, 7, 168], [1, 9, 225], [1, 15, 300]]
      : [[1, 2, 34], [1, 3, 39], [1, 4, 44], [1, 5, 55], [1, 6, 66], [1, 8, 72], [1, 10, 90], [1, 4, 52], [1, 3, 48], [1, 5, 65]];
  const nonUnit = difficultyKey === "easy"
    ? [[2, 3, 24], [3, 4, 20], [2, 5, 35], [3, 5, 30], [5, 6, 24], [3, 8, 40], [4, 7, 28], [2, 9, 36], [3, 10, 50], [5, 8, 32]]
    : difficultyKey === "hard"
      ? [[2, 3, 72], [3, 4, 92], [4, 5, 135], [5, 6, 150], [7, 8, 184], [5, 9, 225], [7, 10, 260], [11, 12, 264], [4, 7, 168], [13, 15, 300]]
      : [[2, 3, 39], [3, 4, 52], [2, 5, 45], [3, 5, 55], [5, 6, 60], [3, 8, 64], [4, 7, 70], [2, 9, 81], [3, 10, 90], [5, 8, 80]];
  const makeAmount = ([n, d, amount]) => ({ n, d, amount, answer: (amount / d) * n });
  const unitItems = unit.map(makeAmount);
  const nonUnitItems = nonUnit.map(makeAmount);
  const reverseItems = nonUnitItems.map((item) => ({ n: item.n, d: item.d, whole: item.amount, part: item.answer }));
  const methods = nonUnitItems.map((item, index) => ({
    ...item,
    mode: index % 3 === 2 ? "explain" : "check",
    method: index % 2 === 0 ? `dividing by ${item.d} then multiplying by ${item.n}` : `multiplying by ${item.d} first`,
    answer: index % 2 === 0 ? "Yes" : "No"
  }));
  return {
    unitA: unitItems[0], unitB: unitItems[1], unitC: unitItems[2], unitD: unitItems[3], unitE: unitItems[4], unitF: unitItems[5], unitG: unitItems[6], unitH: unitItems[7], unitI: unitItems[8], unitJ: unitItems[9],
    nonUnitA: nonUnitItems[0], nonUnitB: nonUnitItems[1], nonUnitC: nonUnitItems[2], nonUnitD: nonUnitItems[3], nonUnitE: nonUnitItems[4], nonUnitF: nonUnitItems[5], nonUnitG: nonUnitItems[6], nonUnitH: nonUnitItems[7], nonUnitI: nonUnitItems[8], nonUnitJ: nonUnitItems[9],
    reverseA: reverseItems[0], reverseB: reverseItems[1], reverseC: reverseItems[2], reverseD: reverseItems[3], reverseE: reverseItems[4], reverseF: reverseItems[5], reverseG: reverseItems[6], reverseH: reverseItems[7], reverseI: reverseItems[8], reverseJ: reverseItems[9],
    methodA: methods[0], methodB: methods[1], methodC: methods[2], methodD: methods[3], methodE: methods[4], methodF: methods[5], methodG: methods[6], methodH: methods[7], methodI: methods[8], methodJ: methods[9]
  };
}

function fractionOfAmountChange(index) { return index === 0 ? "Starting example." : "Only the fraction, whole amount, or method focus changes."; }

function buildFractionOfAmountDiagram(item, mode = "part") {
  return fractionStripDiagram(item.n, item.d, item.amount, item.answer, mode);
}

function offsetFractionAmount(item, multiplier = 1) {
  const amount = item.amount + (item.d * multiplier);
  return {
    ...item,
    amount,
    answer: (amount / item.d) * item.n
  };
}

function offsetReverseFractionAmount(item, multiplier = 1) {
  const whole = item.whole + (item.d * multiplier);
  return {
    ...item,
    whole,
    part: (whole / item.d) * item.n
  };
}

function offsetMethodFractionAmount(item, multiplier = 1) {
  const amount = item.amount + (item.d * multiplier);
  return {
    ...item,
    amount
  };
}

function generateAreaRectanglesCompoundTeaching(topic, variant, settings, difficultyKey) {
  const base = getAreaBase(difficultyKey);
  let sequence;

  if (variant.id === "missing-dimension") {
    sequence = [
      { question: `A rectangle has area ${base.missingA.area} cm² and width ${base.missingA.width} cm. What is the length?`, answer: `${base.missingA.length} cm`, change: "Model finding a missing length from area.", diagram: rectangleDiagram("?", `${base.missingA.width} cm`) },
      { question: `A rectangle has area ${base.missingB.area} cm² and length ${base.missingB.length} cm. What is the width?`, answer: `${base.missingB.width} cm`, change: "Only the missing side changes.", diagram: rectangleDiagram(`${base.missingB.length} cm`, "?") },
      { question: `A rectangle has area ${base.missingC.area} cm² and width ${base.missingC.width} cm. What is the length?`, answer: `${base.missingC.length} cm`, change: "Only the numbers change.", diagram: rectangleDiagram("?", `${base.missingC.width} cm`) }
    ];
  } else if (variant.id === "compare-areas") {
    sequence = [
      { question: `Which has the greater area: Rectangle A or Rectangle B?`, answer: `${base.compareA.answer}`, change: "Model comparing two rectangle areas.", diagram: comparisonDiagram("A", rectangleDiagram(`${base.compareA.length} cm`, `${base.compareA.width} cm`), "B", rectangleDiagram(`${base.compareA.otherLength} cm`, `${base.compareA.otherWidth} cm`)) },
      { question: `Which has the smaller area: Rectangle C or Rectangle D?`, answer: `${base.compareB.answer}`, change: "Only the comparison direction changes.", diagram: comparisonDiagram("C", rectangleDiagram(`${base.compareB.length} cm`, `${base.compareB.width} cm`), "D", rectangleDiagram(`${base.compareB.otherLength} cm`, `${base.compareB.otherWidth} cm`)) },
      { question: `Which has the greater area: Rectangle E or Rectangle F?`, answer: `${base.compareC.answer}`, change: "Only the dimensions change.", diagram: comparisonDiagram("E", rectangleDiagram(`${base.compareC.length} cm`, `${base.compareC.width} cm`), "F", rectangleDiagram(`${base.compareC.otherLength} cm`, `${base.compareC.otherWidth} cm`)) }
    ];
  } else if (variant.id === "compound-shapes") {
    sequence = [
      { question: `Find the area of Compound Shape A.`, answer: `${base.compoundA.answer} cm²`, change: "Model splitting the shape into rectangles.", diagram: base.compoundA.diagram },
      { question: `Find the area of Compound Shape B.`, answer: `${base.compoundB.answer} cm²`, change: "Only one side length changes.", diagram: base.compoundB.diagram },
      { question: `Find the area of Compound Shape C. Work out any missing side first if needed.`, answer: `${base.compoundC.answer} cm²`, change: "Only one side now has to be worked out first.", diagram: base.compoundC.diagram }
    ];
  } else {
    sequence = [
      { question: `Find the area of a rectangle with length ${base.calcA.length} cm and width ${base.calcA.width} cm.`, answer: `${base.calcA.area} cm²`, change: "Model multiplying length by width.", diagram: rectangleDiagram(`${base.calcA.length} cm`, `${base.calcA.width} cm`) },
      { question: `Find the area of a rectangle with length ${base.calcB.length} cm and width ${base.calcB.width} cm.`, answer: `${base.calcB.area} cm²`, change: "Only one dimension changes.", diagram: rectangleDiagram(`${base.calcB.length} cm`, `${base.calcB.width} cm`) },
      { question: `Find the area of a rectangle with length ${base.calcC.length} cm and width ${base.calcC.width} cm.`, answer: `${base.calcC.area} cm²`, change: "Only the rectangle changes again.", diagram: rectangleDiagram(`${base.calcC.length} cm`, `${base.calcC.width} cm`) }
    ];
  }

  return createTeachingSequence(topic, variant, sequence);
}

function generateAreaRectanglesCompound(_topic, variant, settings, difficultyKey) {
  if (variant.id === "missing-dimension") return generateAreaMissingDimension(settings, difficultyKey);
  if (variant.id === "compare-areas") return generateAreaCompare(settings, difficultyKey);
  if (variant.id === "compound-shapes") return generateAreaCompound(settings, difficultyKey);
  return generateAreaCalculate(settings, difficultyKey);
}

function generateAreaCalculate(_settings, difficultyKey) {
  const base = getAreaBase(difficultyKey);
  return {
    questions: [base.calcA, base.calcB, base.calcC, base.calcD, base.calcE, base.calcF, base.calcG, base.calcH, base.calcI, base.calcJ].map((item, index) => ({
      question: `Find the area of a rectangle with length ${item.length} cm and width ${item.width} cm.`,
      answer: `${item.area} cm²`,
      change: areaChange(index),
      diagram: rectangleDiagram(`${item.length} cm`, `${item.width} cm`)
    }))
  };
}

function generateAreaMissingDimension(_settings, difficultyKey) {
  const base = getAreaBase(difficultyKey);
  return {
    questions: [base.missingA, base.missingB, base.missingC, base.missingD, base.missingE, base.missingF, base.missingG, base.missingH, base.missingI, base.missingJ].map((item, index) => ({
      question: item.ask === "length" ? `A rectangle has area ${item.area} cm² and width ${item.width} cm. What is the length?` : `A rectangle has area ${item.area} cm² and length ${item.length} cm. What is the width?`,
      answer: item.ask === "length" ? `${item.length} cm` : `${item.width} cm`,
      change: areaChange(index),
      diagram: item.ask === "length" ? rectangleDiagram("?", `${item.width} cm`) : rectangleDiagram(`${item.length} cm`, "?")
    }))
  };
}

function generateAreaCompare(_settings, difficultyKey) {
  const base = getAreaBase(difficultyKey);
  return {
    questions: [base.compareA, base.compareB, base.compareC, base.compareD, base.compareE, base.compareF, base.compareG, base.compareH, base.compareI, base.compareJ].map((item, index) => ({
      question: `Which has the ${item.direction} area: Rectangle ${item.leftName} or Rectangle ${item.rightName}?`,
      answer: `${item.answer}`,
      change: areaChange(index),
      diagram: comparisonDiagram(item.leftName, rectangleDiagram(`${item.length} cm`, `${item.width} cm`), item.rightName, rectangleDiagram(`${item.otherLength} cm`, `${item.otherWidth} cm`))
    }))
  };
}

function generateAreaCompound(_settings, difficultyKey) {
  const base = getAreaBase(difficultyKey);
  return {
    questions: [base.compoundA, base.compoundB, base.compoundC, base.compoundD, base.compoundE, base.compoundF, base.compoundG, base.compoundH, base.compoundI, base.compoundJ].map((item, index) => ({
      question: item.missingSide ? `Find the area of Compound Shape ${String.fromCharCode(65 + index)}. Work out any missing side first.` : `Find the area of Compound Shape ${String.fromCharCode(65 + index)}.`,
      answer: `${item.answer} cm²`,
      change: areaChange(index),
      diagram: item.diagram
    }))
  };
}

function generateTransformationsTeaching(topic, variant, settings, difficultyKey) {
  const base = getTransformationBase(difficultyKey);
  let sequence;

  if (variant.id === "reflections") {
    sequence = [
      { question: `Reflect point A in the y-axis. What is the image of A?`, answer: `${coordinateLabel(reflectY(base.pointA))}`, change: "Model reflecting in the y-axis.", diagram: coordinateGridDiagram([{ ...base.pointA, label: "A" }]) },
      { question: `Reflect point B in the x-axis. What is the image of B?`, answer: `${coordinateLabel(reflectX(base.pointB))}`, change: "Only the axis changes.", diagram: coordinateGridDiagram([{ ...base.pointB, label: "B" }]) },
      { question: `Reflect point C in the y-axis. What is the image of C?`, answer: `${coordinateLabel(reflectY(base.pointC))}`, change: "Only the point changes.", diagram: coordinateGridDiagram([{ ...base.pointC, label: "C" }]) }
    ];
  } else if (variant.id === "rotations") {
    sequence = [
      { question: `Rotate point A 90° anticlockwise about the origin. What is the image of A?`, answer: `${coordinateLabel(rotate90(base.pointA))}`, change: "Model a quarter turn about the origin.", diagram: coordinateGridDiagram([{ ...base.pointA, label: "A" }]) },
      { question: `Rotate point B 180° about the origin. What is the image of B?`, answer: `${coordinateLabel(rotate180(base.pointB))}`, change: "Only the turn changes.", diagram: coordinateGridDiagram([{ ...base.pointB, label: "B" }]) },
      { question: `Rotate point C 90° clockwise about the origin. What is the image of C?`, answer: `${coordinateLabel(rotate270(base.pointC))}`, change: "Only the direction changes.", diagram: coordinateGridDiagram([{ ...base.pointC, label: "C" }]) }
    ];
  } else if (variant.id === "describe-the-transformation") {
    sequence = [
      { question: `Point A moves to A'. Describe the transformation shown on the grid.`, answer: `translation by (${base.vectorA.x}, ${base.vectorA.y})`, change: "Model describing a translation from the image shown.", diagram: base.descriptionItems[0].diagram },
      { question: `Point B moves to B'. Describe the transformation shown on the grid.`, answer: "reflection in the y-axis", change: "Only the transformation type changes.", diagram: base.descriptionItems[1].diagram },
      { question: `Point C moves to C'. Describe the transformation shown on the grid.`, answer: "rotation 180° about the origin", change: "Only the movement changes again.", diagram: base.descriptionItems[2].diagram }
    ];
  } else {
    sequence = [
      { question: `Translate point A by vector (${base.vectorA.x}, ${base.vectorA.y}). What is the image of A?`, answer: `${coordinateLabel(translatePoint(base.pointA, base.vectorA.x, base.vectorA.y))}`, change: "Model a translation.", diagram: coordinateGridDiagram([{ ...base.pointA, label: "A" }]) },
      { question: `Translate point B by vector (${base.vectorB.x}, ${base.vectorB.y}). What is the image of B?`, answer: `${coordinateLabel(translatePoint(base.pointB, base.vectorB.x, base.vectorB.y))}`, change: "Only the vector changes.", diagram: coordinateGridDiagram([{ ...base.pointB, label: "B" }]) },
      { question: `Translate point C by vector (${base.vectorC.x}, ${base.vectorC.y}). What is the image of C?`, answer: `${coordinateLabel(translatePoint(base.pointC, base.vectorC.x, base.vectorC.y))}`, change: "Only the point changes.", diagram: coordinateGridDiagram([{ ...base.pointC, label: "C" }]) }
    ];
  }

  return createTeachingSequence(topic, variant, sequence);
}

function generateTransformations(_topic, variant, settings, difficultyKey) {
  if (variant.id === "reflections") return generateTransformationReflections(settings, difficultyKey);
  if (variant.id === "rotations") return generateTransformationRotations(settings, difficultyKey);
  if (variant.id === "describe-the-transformation") return generateTransformationDescriptions(settings, difficultyKey);
  return generateTransformationTranslations(settings, difficultyKey);
}

function generateTransformationTranslations(_settings, difficultyKey) {
  const base = getTransformationBase(difficultyKey);
  const items = base.translationItems;
  return { questions: items.map((item, index) => ({ question: `Translate point ${item.label} by vector (${item.vx}, ${item.vy}). What is the image of ${item.label}?`, answer: `${coordinateLabel(translatePoint(item.point, item.vx, item.vy))}`, change: transformationChange(index), diagram: coordinateGridDiagram([{ ...item.point, label: item.label }]) })) };
}

function generateTransformationReflections(_settings, difficultyKey) {
  const base = getTransformationBase(difficultyKey);
  const items = base.reflectionItems;
  return { questions: items.map((item, index) => ({ question: `Reflect point ${item.label} in the ${item.axis}-axis. What is the image of ${item.label}?`, answer: `${coordinateLabel(item.axis === "x" ? reflectX(item.point) : reflectY(item.point))}`, change: transformationChange(index), diagram: coordinateGridDiagram([{ ...item.point, label: item.label }]) })) };
}

function generateTransformationRotations(_settings, difficultyKey) {
  const base = getTransformationBase(difficultyKey);
  const items = base.rotationItems;
  return { questions: items.map((item, index) => ({ question: `Rotate point ${item.label} ${item.turn} about the origin. What is the image of ${item.label}?`, answer: `${coordinateLabel(item.turn === "90° anticlockwise" ? rotate90(item.point) : item.turn === "90° clockwise" ? rotate270(item.point) : rotate180(item.point))}`, change: transformationChange(index), diagram: coordinateGridDiagram([{ ...item.point, label: item.label }]) })) };
}

function generateTransformationDescriptions(_settings, difficultyKey) {
  const base = getTransformationBase(difficultyKey);
  const items = base.descriptionItems;
  return { questions: items.map((item, index) => ({ question: `Point ${item.label} moves to ${item.label}'. Describe the transformation shown on the grid.`, answer: `${item.answer}`, change: transformationChange(index), diagram: item.diagram })) };
}

function getAreaBase(difficultyKey) {
  const rects = difficultyKey === "easy"
    ? [[6, 4], [7, 3], [8, 5], [9, 4], [10, 3], [12, 4], [5, 5], [11, 2], [8, 6], [7, 7]]
    : difficultyKey === "hard"
      ? [[14, 8], [15, 7], [18, 6], [16, 9], [20, 5], [21, 8], [12, 12], [24, 4], [19, 7], [17, 11]]
      : [[8, 5], [9, 6], [12, 4], [11, 7], [14, 5], [15, 6], [10, 8], [16, 4], [13, 7], [18, 5]];
  const makeRect = ([length, width]) => ({ length, width, area: length * width });
  const rs = rects.map(makeRect);
  const makeMissing = (item, ask) => ({ ...item, ask });
  const compare = (a, b, leftName, rightName, direction) => ({ ...a, otherLength: b.length, otherWidth: b.width, leftName, rightName, direction, answer: direction === "greater" ? (a.area > b.area ? `Rectangle ${leftName}` : `Rectangle ${rightName}`) : (a.area < b.area ? `Rectangle ${leftName}` : `Rectangle ${rightName}`) });
  const compoundSource = difficultyKey === "easy"
    ? [
      [10, 8, 4, 3, null],
      [11, 7, 5, 2, null],
      [12, 8, 4, 3, "right-lower"],
      [9, 7, 3, 2, null],
      [13, 9, 5, 4, "top-short"],
      [14, 8, 6, 3, null],
      [10, 9, 3, 4, "right-lower"],
      [12, 7, 4, 2, null],
      [11, 8, 5, 3, "top-short"],
      [9, 8, 3, 3, null]
    ]
    : difficultyKey === "hard"
      ? [
        [18, 13, 7, 5, null],
        [20, 12, 8, 4, "right-lower"],
        [17, 14, 6, 5, "top-short"],
        [22, 11, 9, 4, null],
        [19, 15, 7, 6, "right-lower"],
        [21, 13, 8, 5, null],
        [24, 12, 10, 4, "top-short"],
        [18, 14, 6, 6, null],
        [20, 15, 7, 5, "right-lower"],
        [23, 13, 9, 4, null]
      ]
      : [
        [14, 10, 5, 4, null],
        [15, 9, 6, 3, null],
        [16, 10, 6, 4, "right-lower"],
        [13, 11, 4, 5, null],
        [17, 10, 7, 4, "top-short"],
        [18, 9, 8, 3, null],
        [14, 12, 5, 5, "right-lower"],
        [16, 11, 6, 4, null],
        [15, 10, 5, 3, "top-short"],
        [17, 9, 7, 3, null]
      ];
  const compound = ([outerWidth, outerHeight, cutoutWidth, cutoutHeight, missingSide]) => ({
    outerWidth,
    outerHeight,
    cutoutWidth,
    cutoutHeight,
    missingSide,
    answer: (outerWidth * outerHeight) - (cutoutWidth * cutoutHeight),
    diagram: compoundAreaDiagram({ outerWidth, outerHeight, cutoutWidth, cutoutHeight, missingSide })
  });
  const compounds = compoundSource.map(compound);
  return {
    calcA: rs[0], calcB: rs[1], calcC: rs[2], calcD: rs[3], calcE: rs[4], calcF: rs[5], calcG: rs[6], calcH: rs[7], calcI: rs[8], calcJ: rs[9],
    missingA: makeMissing(rs[0], "length"), missingB: makeMissing(rs[1], "width"), missingC: makeMissing(rs[2], "length"), missingD: makeMissing(rs[3], "width"), missingE: makeMissing(rs[4], "length"), missingF: makeMissing(rs[5], "width"), missingG: makeMissing(rs[6], "length"), missingH: makeMissing(rs[7], "width"), missingI: makeMissing(rs[8], "length"), missingJ: makeMissing(rs[9], "width"),
    compareA: compare(rs[0], rs[1], "A", "B", "greater"), compareB: compare(rs[2], rs[3], "C", "D", "smaller"), compareC: compare(rs[4], rs[5], "E", "F", "greater"), compareD: compare(rs[6], rs[7], "G", "H", "smaller"), compareE: compare(rs[8], rs[9], "I", "J", "greater"),
    compareF: compare(rs[1], rs[2], "K", "L", "greater"), compareG: compare(rs[3], rs[4], "M", "N", "smaller"), compareH: compare(rs[5], rs[6], "P", "Q", "greater"), compareI: compare(rs[7], rs[8], "R", "S", "smaller"), compareJ: compare(rs[0], rs[9], "T", "U", "greater"),
    compoundA: compounds[0], compoundB: compounds[1], compoundC: compounds[2], compoundD: compounds[3], compoundE: compounds[4], compoundF: compounds[5], compoundG: compounds[6], compoundH: compounds[7], compoundI: compounds[8], compoundJ: compounds[9]
  };
}

function getTransformationBase(difficultyKey) {
  const points = difficultyKey === "easy"
    ? [{ x: 2, y: 3 }, { x: -3, y: 2 }, { x: 4, y: -1 }, { x: -2, y: -4 }, { x: 1, y: -3 }]
    : difficultyKey === "hard"
      ? [{ x: 5, y: 4 }, { x: -5, y: 3 }, { x: 4, y: -5 }, { x: -4, y: -3 }, { x: 2, y: -6 }]
      : [{ x: 3, y: 4 }, { x: -4, y: 3 }, { x: 5, y: -2 }, { x: -3, y: -5 }, { x: 2, y: -4 }];
  return {
    pointA: points[0], pointB: points[1], pointC: points[2],
    vectorA: { x: 2, y: 1 }, vectorB: { x: -1, y: 3 }, vectorC: { x: 3, y: -2 },
    translationItems: [{ label: "A", point: points[0], vx: 2, vy: 1 }, { label: "B", point: points[1], vx: -1, vy: 3 }, { label: "C", point: points[2], vx: 3, vy: -2 }, { label: "D", point: points[3], vx: 2, vy: -1 }, { label: "E", point: points[4], vx: -2, vy: 2 }, { label: "F", point: points[0], vx: 1, vy: -3 }, { label: "G", point: points[1], vx: 4, vy: -2 }, { label: "H", point: points[2], vx: -3, vy: 1 }, { label: "I", point: points[3], vx: 1, vy: 2 }, { label: "J", point: points[4], vx: -1, vy: -2 }],
    reflectionItems: [{ label: "A", point: points[0], axis: "y" }, { label: "B", point: points[1], axis: "x" }, { label: "C", point: points[2], axis: "y" }, { label: "D", point: points[3], axis: "x" }, { label: "E", point: points[4], axis: "y" }, { label: "F", point: points[0], axis: "x" }, { label: "G", point: points[1], axis: "y" }, { label: "H", point: points[2], axis: "x" }, { label: "I", point: points[3], axis: "y" }, { label: "J", point: points[4], axis: "x" }],
    rotationItems: [{ label: "A", point: points[0], turn: "90° anticlockwise" }, { label: "B", point: points[1], turn: "180°" }, { label: "C", point: points[2], turn: "90° clockwise" }, { label: "D", point: points[3], turn: "180°" }, { label: "E", point: points[4], turn: "90° anticlockwise" }, { label: "F", point: points[0], turn: "90° clockwise" }, { label: "G", point: points[1], turn: "180°" }, { label: "H", point: points[2], turn: "90° anticlockwise" }, { label: "I", point: points[3], turn: "90° clockwise" }, { label: "J", point: points[4], turn: "180°" }],
    descriptionItems: [
      { label: "A", start: points[0], end: translatePoint(points[0], 2, 1), answer: "translation by (2, 1)", diagram: coordinateGridDiagram([{ ...points[0], label: "A" }, { ...translatePoint(points[0], 2, 1), label: "A'" }]) },
      { label: "B", start: points[1], end: reflectY(points[1]), answer: "reflection in the y-axis", diagram: coordinateGridDiagram([{ ...points[1], label: "B" }, { ...reflectY(points[1]), label: "B'" }]) },
      { label: "C", start: points[2], end: rotate180(points[2]), answer: "rotation 180° about the origin", diagram: coordinateGridDiagram([{ ...points[2], label: "C" }, { ...rotate180(points[2]), label: "C'" }]) },
      { label: "D", start: points[3], end: translatePoint(points[3], -1, 2), answer: "translation by (-1, 2)", diagram: coordinateGridDiagram([{ ...points[3], label: "D" }, { ...translatePoint(points[3], -1, 2), label: "D'" }]) },
      { label: "E", start: points[4], end: reflectX(points[4]), answer: "reflection in the x-axis", diagram: coordinateGridDiagram([{ ...points[4], label: "E" }, { ...reflectX(points[4]), label: "E'" }]) },
      { label: "F", start: points[0], end: rotate90(points[0]), answer: "rotation 90° anticlockwise about the origin", diagram: coordinateGridDiagram([{ ...points[0], label: "F" }, { ...rotate90(points[0]), label: "F'" }]) },
      { label: "G", start: points[1], end: translatePoint(points[1], 3, -2), answer: "translation by (3, -2)", diagram: coordinateGridDiagram([{ ...points[1], label: "G" }, { ...translatePoint(points[1], 3, -2), label: "G'" }]) },
      { label: "H", start: points[2], end: reflectY(points[2]), answer: "reflection in the y-axis", diagram: coordinateGridDiagram([{ ...points[2], label: "H" }, { ...reflectY(points[2]), label: "H'" }]) },
      { label: "I", start: points[3], end: rotate270(points[3]), answer: "rotation 90° clockwise about the origin", diagram: coordinateGridDiagram([{ ...points[3], label: "I" }, { ...rotate270(points[3]), label: "I'" }]) },
      { label: "J", start: points[4], end: translatePoint(points[4], -2, -1), answer: "translation by (-2, -1)", diagram: coordinateGridDiagram([{ ...points[4], label: "J" }, { ...translatePoint(points[4], -2, -1), label: "J'" }]) }
    ]
  };
}

function translatePoint(point, dx, dy) { return { x: point.x + dx, y: point.y + dy }; }
function rotate90(point) { return { x: -point.y, y: point.x }; }
function rotate180(point) { return { x: -point.x, y: -point.y }; }
function rotate270(point) { return { x: point.y, y: -point.x }; }
function areaChange(index) { return index === 0 ? "Starting example." : "Only one dimension, shape, or comparison feature changes."; }
function transformationChange(index) { return index === 0 ? "Starting example." : "Only the transformation feature or image changes."; }

function generateTablesAndChartsTeaching(topic, variant, settings, difficultyKey) {
  const base = getTablesChartsBase(difficultyKey);
  let sequence;
  if (variant.id === "complete-the-table") {
    sequence = [
      { question: `${base.completeA.prompt}`, answer: `${base.completeA.answer}`, change: "Model completing a table from a total.", diagram: base.completeA.diagram },
      { question: `${base.completeE.prompt}`, answer: `${base.completeE.answer}`, change: "Now the missing value is the total.", diagram: base.completeE.diagram },
      { question: `${base.completeH.prompt}`, answer: `${base.completeH.answer}`, change: "Now use the table to find a combined value.", diagram: base.completeH.diagram }
    ];
  } else if (variant.id === "interpret-the-chart") {
    sequence = [
      { question: `${base.interpretA.question}`, answer: `${base.interpretA.answer}`, change: "Model reading a comparison from a chart.", diagram: base.interpretA.diagram },
      { question: `${base.interpretD.question}`, answer: `${base.interpretD.answer}`, change: "Now compare a total with a single category.", diagram: base.interpretD.diagram },
      { question: `${base.interpretG.question}`, answer: `${base.interpretG.answer}`, change: "Now compare two grouped totals.", diagram: base.interpretG.diagram }
    ];
  } else if (variant.id === "compare-representations") {
    sequence = [
      { question: `${base.compareRepA.question}`, answer: `${base.compareRepA.answer}`, change: "Model comparing what a table and chart show.", diagram: base.compareRepA.diagram },
      { question: `${base.compareRepD.question}`, answer: `${base.compareRepD.answer}`, change: "Now focus on which representation is best for exact reading.", diagram: base.compareRepD.diagram },
      { question: `${base.compareRepG.question}`, answer: `${base.compareRepG.answer}`, change: "Now check whether the two representations agree.", diagram: base.compareRepG.diagram }
    ];
  } else {
    sequence = [
      { question: `${base.readA.question}`, answer: `${base.readA.answer}`, change: "Model reading a single value from a table.", diagram: base.readA.diagram },
      { question: `${base.readE.question}`, answer: `${base.readE.answer}`, change: "Now read a total from the same table.", diagram: base.readE.diagram },
      { question: `${base.readG.question}`, answer: `${base.readG.answer}`, change: "Now compare categories using the same table.", diagram: base.readG.diagram }
    ];
  }
  return createTeachingSequence(topic, variant, sequence);
}

function generateTablesAndCharts(_topic, variant, settings, difficultyKey) {
  if (variant.id === "complete-the-table") return generateTablesComplete(settings, difficultyKey);
  if (variant.id === "interpret-the-chart") return generateTablesInterpret(settings, difficultyKey);
  if (variant.id === "compare-representations") return generateTablesCompareRep(settings, difficultyKey);
  return generateTablesRead(settings, difficultyKey);
}

function generateTablesRead(_settings, difficultyKey) {
  const base = getTablesChartsBase(difficultyKey);
  return { questions: [base.readA, base.readB, base.readC, base.readD, base.readE, base.readF, base.readG, base.readH, base.readI, base.readJ].map((item, index) => ({ question: item.question, answer: `${item.answer}`, change: dataChange(index), diagram: item.diagram })) };
}

function generateTablesComplete(_settings, difficultyKey) {
  const base = getTablesChartsBase(difficultyKey);
  return { questions: [base.completeA, base.completeB, base.completeC, base.completeD, base.completeE, base.completeF, base.completeG, base.completeH, base.completeI, base.completeJ].map((item, index) => ({ question: item.prompt, answer: `${item.answer}`, change: dataChange(index), diagram: item.diagram })) };
}

function generateTablesInterpret(_settings, difficultyKey) {
  const base = getTablesChartsBase(difficultyKey);
  return { questions: [base.interpretA, base.interpretB, base.interpretC, base.interpretD, base.interpretE, base.interpretF, base.interpretG, base.interpretH, base.interpretI, base.interpretJ].map((item, index) => ({ question: item.question, answer: `${item.answer}`, change: dataChange(index), diagram: item.diagram })) };
}

function generateTablesCompareRep(_settings, difficultyKey) {
  const base = getTablesChartsBase(difficultyKey);
  return { questions: [base.compareRepA, base.compareRepB, base.compareRepC, base.compareRepD, base.compareRepE, base.compareRepF, base.compareRepG, base.compareRepH, base.compareRepI, base.compareRepJ].map((item, index) => ({ question: item.question, answer: `${item.answer}`, change: dataChange(index), diagram: item.diagram })) };
}

function generateMeanMedianModeRangeTeaching(topic, variant, settings, difficultyKey) {
  const base = getAveragesBase(difficultyKey);
  let sequence;
  if (variant.id === "which-measure") {
    sequence = [
      { question: `${base.whichA.question}`, answer: `${base.whichA.answer}`, change: "Model identifying a measure from a description.", diagram: buildAveragesDiagram(base.whichA) },
      { question: `${base.whichB.question}`, answer: `${base.whichB.answer}`, change: "Only the description changes.", diagram: buildAveragesDiagram(base.whichB) },
      { question: `${base.whichC.question}`, answer: `${base.whichC.answer}`, change: "Only the measure focus changes.", diagram: buildAveragesDiagram(base.whichC) }
    ];
  } else if (variant.id === "missing-value") {
    sequence = [
      { question: `${base.missingA.question}`, answer: `${base.missingA.answer}`, change: "Model finding a missing value.", diagram: buildAveragesDiagram(base.missingA) },
      { question: `${base.missingB.question}`, answer: `${base.missingB.answer}`, change: "Only the measure changes.", diagram: buildAveragesDiagram(base.missingB) },
      { question: `${base.missingC.question}`, answer: `${base.missingC.answer}`, change: "Only the data set changes.", diagram: buildAveragesDiagram(base.missingC) }
    ];
  } else if (variant.id === "error-spotting") {
    sequence = [
      { question: `${base.errorA.question}`, answer: `${base.errorA.answer}`, change: "Model spotting an averages error.", diagram: buildAveragesDiagram(base.errorA) },
      { question: `${base.errorB.question}`, answer: `${base.errorB.answer}`, change: "Only the measure changes.", diagram: buildAveragesDiagram(base.errorB) },
      { question: `${base.errorC.question}`, answer: `${base.errorC.answer}`, change: "Only the correction demand changes.", diagram: buildAveragesDiagram(base.errorC) }
    ];
  } else {
    sequence = [
      { question: `${base.calcA.question}`, answer: `${base.calcA.answer}`, change: "Model calculating a summary statistic.", diagram: buildAveragesDiagram(base.calcA) },
      { question: `${base.calcB.question}`, answer: `${base.calcB.answer}`, change: "Only the measure changes.", diagram: buildAveragesDiagram(base.calcB) },
      { question: `${base.calcC.question}`, answer: `${base.calcC.answer}`, change: "Only the data changes.", diagram: buildAveragesDiagram(base.calcC) }
    ];
  }
  return createTeachingSequence(topic, variant, sequence);
}

function generateMeanMedianModeRange(_topic, variant, settings, difficultyKey) {
  if (variant.id === "which-measure") return generateAveragesWhich(settings, difficultyKey);
  if (variant.id === "missing-value") return generateAveragesMissing(settings, difficultyKey);
  if (variant.id === "error-spotting") return generateAveragesErrors(settings, difficultyKey);
  return generateAveragesCalc(settings, difficultyKey);
}

function generateAveragesCalc(_settings, difficultyKey) {
  const base = getAveragesBase(difficultyKey);
  return { questions: [base.calcA, base.calcB, base.calcC, base.calcD, base.calcE, base.calcF, base.calcG, base.calcH, base.calcI, base.calcJ].map((item, index) => ({ question: item.question, answer: `${item.answer}`, change: dataChange(index), diagram: buildAveragesDiagram(item) })) };
}

function generateAveragesWhich(_settings, difficultyKey) {
  const base = getAveragesBase(difficultyKey);
  return { questions: [base.whichA, base.whichB, base.whichC, base.whichD, base.whichE, base.whichF, base.whichG, base.whichH, base.whichI, base.whichJ].map((item, index) => ({ question: item.question, answer: `${item.answer}`, change: dataChange(index), diagram: buildAveragesDiagram(item) })) };
}

function generateAveragesMissing(_settings, difficultyKey) {
  const base = getAveragesBase(difficultyKey);
  return { questions: [base.missingA, base.missingB, base.missingC, base.missingD, base.missingE, base.missingF, base.missingG, base.missingH, base.missingI, base.missingJ].map((item, index) => ({ question: item.question, answer: `${item.answer}`, change: dataChange(index), diagram: buildAveragesDiagram(item) })) };
}

function generateAveragesErrors(_settings, difficultyKey) {
  const base = getAveragesBase(difficultyKey);
  return { questions: [base.errorA, base.errorB, base.errorC, base.errorD, base.errorE, base.errorF, base.errorG, base.errorH, base.errorI, base.errorJ].map((item, index) => ({ question: item.question, answer: `${item.answer}`, change: dataChange(index), diagram: buildAveragesDiagram(item) })) };
}

function generateBasicProbabilityScaleTeaching(topic, variant, settings, difficultyKey) {
  const base = getProbabilityBase(difficultyKey);
  let sequence;
  if (variant.id === "compare-likelihood") {
    sequence = [
      { question: `${base.compareA.question}`, answer: `${base.compareA.answer}`, change: "Model comparing which event is more likely.", diagram: buildProbabilityDiagram(base.compareA) },
      { question: `${base.compareB.question}`, answer: `${base.compareB.answer}`, change: "Only the events change.", diagram: buildProbabilityDiagram(base.compareB) },
      { question: `${base.compareC.question}`, answer: `${base.compareC.answer}`, change: "Only the probability wording changes.", diagram: buildProbabilityDiagram(base.compareC) }
    ];
  } else if (variant.id === "missing-probability") {
    sequence = [
      { question: `${base.missingA.question}`, answer: `${base.missingA.answer}`, change: "Model finding a missing probability.", diagram: buildProbabilityDiagram(base.missingA) },
      { question: `${base.missingB.question}`, answer: `${base.missingB.answer}`, change: "Only the known value changes.", diagram: buildProbabilityDiagram(base.missingB) },
      { question: `${base.missingC.question}`, answer: `${base.missingC.answer}`, change: "Only the event wording changes.", diagram: buildProbabilityDiagram(base.missingC) }
    ];
  } else if (variant.id === "true-false") {
    sequence = [
      { question: `${base.trueFalseA.question}`, answer: `${base.trueFalseA.answer}`, change: "Model checking a probability statement.", diagram: buildProbabilityDiagram(base.trueFalseA) },
      { question: `${base.trueFalseB.question}`, answer: `${base.trueFalseB.answer}`, change: "Only the statement changes.", diagram: buildProbabilityDiagram(base.trueFalseB) },
      { question: `${base.trueFalseC.question}`, answer: `${base.trueFalseC.answer}`, change: "Only the probability value changes.", diagram: buildProbabilityDiagram(base.trueFalseC) }
    ];
  } else {
    sequence = [
      { question: `${base.wordsA.question}`, answer: `${base.wordsA.answer}`, change: "Model matching an event to a probability word.", diagram: buildProbabilityDiagram(base.wordsA) },
      { question: `${base.wordsB.question}`, answer: `${base.wordsB.answer}`, change: "Only the event changes.", diagram: buildProbabilityDiagram(base.wordsB) },
      { question: `${base.wordsC.question}`, answer: `${base.wordsC.answer}`, change: "Only the likelihood word changes.", diagram: buildProbabilityDiagram(base.wordsC) }
    ];
  }
  return createTeachingSequence(topic, variant, sequence);
}

function generateBasicProbabilityScale(_topic, variant, settings, difficultyKey) {
  if (variant.id === "compare-likelihood") return generateProbabilityCompare(settings, difficultyKey);
  if (variant.id === "missing-probability") return generateProbabilityMissing(settings, difficultyKey);
  if (variant.id === "true-false") return generateProbabilityTrueFalse(settings, difficultyKey);
  return generateProbabilityWords(settings, difficultyKey);
}

function generateProbabilityWords(_settings, difficultyKey) {
  const base = getProbabilityBase(difficultyKey);
  return { questions: [base.wordsA, base.wordsB, base.wordsC, base.wordsD, base.wordsE, base.wordsF, base.wordsG, base.wordsH, base.wordsI, base.wordsJ].map((item, index) => ({ question: item.question, answer: `${item.answer}`, change: probabilityChange(index), diagram: buildProbabilityDiagram(item) })) };
}

function generateProbabilityCompare(_settings, difficultyKey) {
  const base = getProbabilityBase(difficultyKey);
  return { questions: [base.compareA, base.compareB, base.compareC, base.compareD, base.compareE, base.compareF, base.compareG, base.compareH, base.compareI, base.compareJ].map((item, index) => ({ question: item.question, answer: `${item.answer}`, change: probabilityChange(index), diagram: buildProbabilityDiagram(item) })) };
}

function generateProbabilityMissing(_settings, difficultyKey) {
  const base = getProbabilityBase(difficultyKey);
  return { questions: [base.missingA, base.missingB, base.missingC, base.missingD, base.missingE, base.missingF, base.missingG, base.missingH, base.missingI, base.missingJ].map((item, index) => ({ question: item.question, answer: `${item.answer}`, change: probabilityChange(index), diagram: buildProbabilityDiagram(item) })) };
}

function generateProbabilityTrueFalse(_settings, difficultyKey) {
  const base = getProbabilityBase(difficultyKey);
  return { questions: [base.trueFalseA, base.trueFalseB, base.trueFalseC, base.trueFalseD, base.trueFalseE, base.trueFalseF, base.trueFalseG, base.trueFalseH, base.trueFalseI, base.trueFalseJ].map((item, index) => ({ question: item.question, answer: `${item.answer}`, change: probabilityChange(index), diagram: buildProbabilityDiagram(item) })) };
}

function getTablesChartsBase(difficultyKey) {
  const rows = difficultyKey === "easy"
    ? [["Apples", 8], ["Bananas", 5], ["Oranges", 7], ["Pears", 4]]
    : difficultyKey === "hard"
      ? [["Red", 14], ["Blue", 11], ["Green", 17], ["Yellow", 9]]
      : [["Cats", 12], ["Dogs", 9], ["Fish", 6], ["Rabbits", 8]];
  const total = rows.reduce((sum, [, value]) => sum + value, 0);
  const tableRows = rows.map(([label, value]) => ({ label, value }));
  const maxRow = rows.reduce((best, current) => current[1] > best[1] ? current : best);
  const minRow = rows.reduce((best, current) => current[1] < best[1] ? current : best);
  const sortedRows = rows.slice().sort((a, b) => b[1] - a[1]);
  const makeRead = (row) => ({ question: `How many ${row[0].toLowerCase()} are there?`, answer: `${row[1]}`, diagram: dataTableDiagram(tableRows, "Data Table") });
  const makeCompleteMissingCategory = (missingIndex, shownIndices) => {
    return {
      prompt: `Use the table to find the missing frequency for ${rows[missingIndex][0]}.`,
      answer: `${rows[missingIndex][1]}`,
      diagram: dataTableDiagram(
        [
          ...shownIndices.map((index) => ({ label: rows[index][0], value: rows[index][1] })),
          { label: rows[missingIndex][0], value: "?" },
          { label: "Total", value: total }
        ],
        "Complete the Table"
      )
    };
  };
  const makeCompleteMissingTotal = () => ({
    prompt: "Use the table to find the total frequency.",
    answer: `${total}`,
    diagram: dataTableDiagram([...tableRows, { label: "Total", value: "?" }], "Complete the Table")
  });
  const makeCompleteCombined = (firstIndex, secondIndex) => ({
    prompt: `Use the table to find the combined frequency of ${rows[firstIndex][0]} and ${rows[secondIndex][0]}.`,
    answer: `${rows[firstIndex][1] + rows[secondIndex][1]}`,
    diagram: dataTableDiagram([...tableRows, { label: `${rows[firstIndex][0]} + ${rows[secondIndex][0]}`, value: "?" }], "Complete the Table")
  });
  const makeCompleteDifference = (firstIndex, secondIndex) => ({
    prompt: `Use the table to find how many more ${rows[firstIndex][0].toLowerCase()} than ${rows[secondIndex][0].toLowerCase()} there are.`,
    answer: `${rows[firstIndex][1] - rows[secondIndex][1]}`,
    diagram: dataTableDiagram([...tableRows, { label: `${rows[firstIndex][0]} - ${rows[secondIndex][0]}`, value: "?" }], "Complete the Table")
  });
  const makeInterpret = (a, b) => ({ question: `How many more ${a[0].toLowerCase()} than ${b[0].toLowerCase()} are there?`, answer: `${a[1] - b[1]}`, diagram: barChartDiagram(tableRows, "Bar Chart") });
  const makeCompare = (a, b) => ({ question: `Which category has the greater frequency: ${a[0]} or ${b[0]}?`, answer: `${a[1] > b[1] ? a[0] : b[0]}`, diagram: comparisonDiagram("Table", dataTableDiagram(tableRows, "Table"), "Bar Chart", barChartDiagram(tableRows, "Bar Chart")) });
  const compareDiagram = comparisonDiagram("Table", dataTableDiagram(tableRows, "Table"), "Bar Chart", barChartDiagram(tableRows, "Bar Chart"));
  return {
    readA: makeRead(rows[0]),
    readB: makeRead(rows[1]),
    readC: makeRead(rows[2]),
    readD: makeRead(rows[3]),
    readE: { question: "How many items are there altogether?", answer: `${total}`, diagram: dataTableDiagram(tableRows, "Data Table") },
    readF: { question: "Which category has the greatest frequency?", answer: `${maxRow[0]}`, diagram: dataTableDiagram(tableRows, "Data Table") },
    readG: { question: "Which category has the smallest frequency?", answer: `${minRow[0]}`, diagram: dataTableDiagram(tableRows, "Data Table") },
    readH: { question: `How many more ${rows[0][0].toLowerCase()} than ${rows[1][0].toLowerCase()} are there?`, answer: `${rows[0][1] - rows[1][1]}`, diagram: dataTableDiagram(tableRows, "Data Table") },
    readI: { question: `What is the total of ${rows[0][0]} and ${rows[2][0]}?`, answer: `${rows[0][1] + rows[2][1]}`, diagram: dataTableDiagram(tableRows, "Data Table") },
    readJ: { question: "Which two categories together make the greatest total?", answer: `${sortedRows[0][0]} and ${sortedRows[1][0]}`, diagram: dataTableDiagram(tableRows, "Data Table") },
    completeA: makeCompleteMissingCategory(0, [1, 2, 3]),
    completeB: makeCompleteMissingCategory(1, [0, 2, 3]),
    completeC: makeCompleteMissingCategory(2, [0, 1, 3]),
    completeD: makeCompleteMissingCategory(3, [0, 1, 2]),
    completeE: makeCompleteMissingTotal(),
    completeF: makeCompleteCombined(0, 1),
    completeG: makeCompleteCombined(2, 3),
    completeH: makeCompleteDifference(0, 3),
    completeI: makeCompleteDifference(1, 2),
    completeJ: makeCompleteCombined(1, 3),
    interpretA: makeInterpret(rows[0], rows[1]),
    interpretB: makeInterpret(rows[2], rows[3]),
    interpretC: { question: "What is the total of the two greatest bars?", answer: `${sortedRows[0][1] + sortedRows[1][1]}`, diagram: barChartDiagram(tableRows, "Bar Chart") },
    interpretD: { question: `How many more items are in ${rows[0][0]} than in ${rows[2][0]} and ${rows[3][0]} together?`, answer: `${rows[0][1] - (rows[2][1] + rows[3][1])}`, diagram: barChartDiagram(tableRows, "Bar Chart") },
    interpretE: { question: `If 2 more were added to ${rows[1][0]}, what would its new frequency be?`, answer: `${rows[1][1] + 2}`, diagram: barChartDiagram(tableRows, "Bar Chart") },
    interpretF: { question: `How many items would remain if the ${rows[2][0].toLowerCase()} category was removed?`, answer: `${total - rows[2][1]}`, diagram: barChartDiagram(tableRows, "Bar Chart") },
    interpretG: { question: "What is the difference between the greatest and smallest bars?", answer: `${maxRow[1] - minRow[1]}`, diagram: barChartDiagram(tableRows, "Bar Chart") },
    interpretH: { question: `Which category would need 1 more to overtake ${maxRow[0]}?`, answer: `${sortedRows[1][0]}`, diagram: barChartDiagram(tableRows, "Bar Chart") },
    interpretI: { question: "How many items are in the two smallest categories combined?", answer: `${sortedRows[2][1] + sortedRows[3][1]}`, diagram: barChartDiagram(tableRows, "Bar Chart") },
    interpretJ: { question: `By how much does ${rows[0][0]} exceed the average frequency per category?`, answer: `${rows[0][1] - total / rows.length}`, diagram: barChartDiagram(tableRows, "Bar Chart") },
    compareRepA: makeCompare(rows[0], rows[1]),
    compareRepB: makeCompare(rows[2], rows[3]),
    compareRepC: { question: "Which representation makes it easiest to read an exact frequency: the table or the bar chart?", answer: "table", diagram: compareDiagram },
    compareRepD: { question: "Which representation makes it easiest to compare bar heights quickly: the table or the bar chart?", answer: "bar chart", diagram: compareDiagram },
    compareRepE: { question: "Do the table and the bar chart show the same total?", answer: "Yes", diagram: compareDiagram },
    compareRepF: { question: "Which category is greatest in both representations?", answer: `${maxRow[0]}`, diagram: compareDiagram },
    compareRepG: { question: "Which category is smallest in both representations?", answer: `${minRow[0]}`, diagram: compareDiagram },
    compareRepH: { question: `Which representation would you use to find ${rows[1][0].toLowerCase()} exactly?`, answer: "table", diagram: compareDiagram },
    compareRepI: { question: "Which representation would you use first to spot the highest category?", answer: "bar chart", diagram: compareDiagram },
    compareRepJ: { question: "True or false: both representations show the same category ordering from greatest to least.", answer: "True", diagram: compareDiagram }
  };
}

function getAveragesBase(difficultyKey) {
  const sets = difficultyKey === "easy"
    ? [[4, 6, 6, 8], [3, 5, 7, 9], [2, 2, 4, 6, 6], [5, 5, 7, 8], [1, 3, 5, 7], [6, 8, 8, 10], [2, 4, 4, 6], [3, 6, 9, 12], [7, 7, 8, 9], [4, 5, 6, 7]]
    : difficultyKey === "hard"
      ? [[12, 15, 18, 21], [10, 14, 18, 22, 26], [8, 8, 11, 14, 17], [20, 24, 24, 28], [9, 13, 17, 21], [16, 18, 20, 22], [11, 15, 15, 19], [14, 18, 22, 26], [25, 25, 28, 31], [12, 16, 20, 24]]
      : [[6, 8, 10, 12], [5, 7, 9, 11, 13], [4, 4, 7, 10, 10], [8, 9, 9, 12], [3, 6, 9, 12], [7, 11, 11, 15], [5, 8, 8, 11], [9, 12, 15, 18], [10, 10, 13, 16], [6, 9, 12, 15]];
  const mean = (values) => sum(values) / values.length;
  const median = (values) => { const sorted = values.slice().sort((a, b) => a - b); const mid = Math.floor(sorted.length / 2); return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2; };
  const mode = (values) => values.slice().sort((a, b) => values.filter((x) => x === a).length - values.filter((x) => x === b).length).pop();
  const range = (values) => Math.max(...values) - Math.min(...values);
  const makeCalc = (values, measure) => ({ question: `Find the ${measure} of ${values.join(", ")}.`, answer: `${measure === "mean" ? mean(values) : measure === "median" ? median(values) : measure === "mode" ? mode(values) : range(values)}` });
  return {
    calcA: makeCalc(sets[0], "mean"), calcB: makeCalc(sets[1], "median"), calcC: makeCalc(sets[2], "mode"), calcD: makeCalc(sets[3], "range"), calcE: makeCalc(sets[4], "mean"), calcF: makeCalc(sets[5], "median"), calcG: makeCalc(sets[6], "mode"), calcH: makeCalc(sets[7], "range"), calcI: makeCalc(sets[8], "mean"), calcJ: makeCalc(sets[9], "median"),
    whichA: { question: "Which measure describes the most common value in a set?", answer: "mode" }, whichB: { question: "Which measure uses the total divided by how many values there are?", answer: "mean" }, whichC: { question: "Which measure uses the middle value once the data is in order?", answer: "median" }, whichD: { question: "Which measure is found by subtracting the smallest value from the largest?", answer: "range" }, whichE: { question: "Which measure can be affected a lot by one very large value?", answer: "mean" }, whichF: { question: "Which measure tells you the spread between the greatest and least values?", answer: "range" }, whichG: { question: "Which measure is useful when a value repeats most often?", answer: "mode" }, whichH: { question: "Which measure needs the data to be ordered first?", answer: "median" }, whichI: { question: "Which measure uses all the values in the set directly?", answer: "mean" }, whichJ: { question: "Which measure could stay the same even if the largest value changed slightly?", answer: "median" },
    missingA: { question: "The mean of 4, 6, 8 and x is 7. Find x.", answer: "10" }, missingB: { question: "The range of 3, 7, 9 and x is 8, and x is the smallest value. Find x.", answer: "1" }, missingC: { question: "The median of 2, 4, x, 8 and 10 is 6. Find x.", answer: "6" }, missingD: { question: "The mean of 5, 7, 9 and x is 8. Find x.", answer: "11" }, missingE: { question: "The range of 6, 8, 12 and x is 10, and x is the largest value. Find x.", answer: "16" }, missingF: { question: "The median of 3, 5, x, 9 and 11 is 7. Find x.", answer: "7" }, missingG: { question: "The mean of 10, 12, x and 16 is 13. Find x.", answer: "14" }, missingH: { question: "The range of 4, 9, 13 and x is 11, and x is the smallest value. Find x.", answer: "2" }, missingI: { question: "The mean of 8, x, 12 and 16 is 11. Find x.", answer: "8" }, missingJ: { question: "The median of 1, 4, x, 8 and 9 is 6. Find x.", answer: "6" },
    errorA: { question: "A pupil says the mean of 4, 6, 8 is 18. Are they correct?", answer: "No" }, errorB: { question: "A pupil says the median of 3, 9, 5 is 9 because it is in the middle of the original list. Are they correct?", answer: "No" }, errorC: { question: "Correct the mode of 2, 2, 5, 7, 7, 7.", answer: "7" }, errorD: { question: "A pupil says the range of 6, 10, 14 is 24 because they added the numbers. Are they correct?", answer: "No" }, errorE: { question: "A pupil says the mean of 5, 5, 10 is 5 because that is the most common value. Are they correct?", answer: "No" }, errorF: { question: "Correct the median of 4, 7, 9, 10.", answer: "8" }, errorG: { question: "A pupil says the mode of 3, 4, 5, 6 is 6. Are they correct?", answer: "No" }, errorH: { question: "A pupil says the range of 8, 11, 15 is 7. Are they correct?", answer: "Yes" }, errorI: { question: "Correct the mean of 2, 4, 6, 8.", answer: "5" }, errorJ: { question: "A pupil says you do not need to order the data to find the median. Are they correct?", answer: "No" }
  };
}

function getProbabilityBase(difficultyKey) {
  return {
    wordsA: { question: "What probability word best describes choosing the only red counter from a bag of 10 counters?", answer: "unlikely" }, wordsB: { question: "What probability word best describes the sun rising tomorrow?", answer: "certain" }, wordsC: { question: "What probability word best describes rolling a 7 on a standard six-sided dice?", answer: "impossible" }, wordsD: { question: "What probability word best describes landing on heads on a fair coin?", answer: "even chance" }, wordsE: { question: "What probability word best describes picking a vowel from the word CAT?", answer: "unlikely" }, wordsF: { question: "What probability word best describes choosing a weekday from a list of seven days?", answer: "likely" }, wordsG: { question: "What probability word best describes picking a black card from a full deck?", answer: "even chance" }, wordsH: { question: "What probability word best describes picking a multiple of 2 from {2,4,6,8}?", answer: "certain" }, wordsI: { question: "What probability word best describes picking a triangle from a box with only circles?", answer: "impossible" }, wordsJ: { question: "What probability word best describes rain on one chosen day next month?", answer: "uncertain" },
    compareA: { question: "Which is more likely: rolling a 2 on a dice or rolling an even number?", answer: "rolling an even number" }, compareB: { question: "Which is more likely: picking a red card from a full deck or picking the ace of spades?", answer: "picking a red card" }, compareC: { question: "Which is more likely: flipping heads on a fair coin or rolling a 6 on a dice?", answer: "flipping heads on a fair coin" }, compareD: { question: "Which is less likely: picking a vowel from AEIOU or picking a consonant from AEIOU?", answer: "picking a consonant from AEIOU" }, compareE: { question: "Which is more likely: choosing a square number from {1,2,3,4,5} or choosing an even number?", answer: "choosing an even number" }, compareF: { question: "Which is more likely: rolling a number greater than 4 or less than 4 on a dice?", answer: "less than 4" }, compareG: { question: "Which is less likely: picking blue from a bag with 7 blue and 3 green, or green?", answer: "green" }, compareH: { question: "Which is more likely: getting a multiple of 3 on a dice or a factor of 6 on a dice?", answer: "a factor of 6 on a dice" }, compareI: { question: "Which is more likely: choosing a weekend day or a weekday?", answer: "a weekday" }, compareJ: { question: "Which is more likely: picking a prime number from {2,3,4,5} or picking an odd number?", answer: "picking an odd number" },
    missingA: { question: "The probability of success is 0.3. What is the probability of failure?", answer: "0.7" }, missingB: { question: "The probability of not raining is 0.8. What is the probability of rain?", answer: "0.2" }, missingC: { question: "An event has probability 0.45. What is the probability that it does not happen?", answer: "0.55" }, missingD: { question: "The probability of drawing a red counter is 0.6. What is the probability of not drawing red?", answer: "0.4" }, missingE: { question: "If P(A) = 0.12, what is P(not A)?", answer: "0.88" }, missingF: { question: "If the probability of a correct answer is 0.75, what is the probability of an incorrect answer?", answer: "0.25" }, missingG: { question: "The probability of a bus being late is 0.18. What is the probability it is not late?", answer: "0.82" }, missingH: { question: "If P(B) = 0.5, what is P(not B)?", answer: "0.5" }, missingI: { question: "The probability of landing on blue is 0.27. What is the probability of not landing on blue?", answer: "0.73" }, missingJ: { question: "If the probability of winning is 0.04, what is the probability of not winning?", answer: "0.96" },
    trueFalseA: { question: "True or false: A probability can be greater than 1.", answer: "False" }, trueFalseB: { question: "True or false: An impossible event has probability 0.", answer: "True" }, trueFalseC: { question: "True or false: A certain event has probability 1.", answer: "True" }, trueFalseD: { question: "True or false: 0.8 is more likely than 0.3.", answer: "True" }, trueFalseE: { question: "True or false: A probability of 0.5 means the event is impossible.", answer: "False" }, trueFalseF: { question: "True or false: If one event has probability 0.2, the probability of it not happening is 0.8.", answer: "True" }, trueFalseG: { question: "True or false: Events with probability 0.9 are less likely than events with probability 0.4.", answer: "False" }, trueFalseH: { question: "True or false: Probability values can be negative.", answer: "False" }, trueFalseI: { question: "True or false: An event with probability 0 is guaranteed to happen.", answer: "False" }, trueFalseJ: { question: "True or false: The probabilities of an event and its complement add to 1.", answer: "True" }
  };
}

function dataChange(index) { return index === 0 ? "Starting example." : "Only the data reading or reasoning focus changes."; }
function probabilityChange(index) { return index === 0 ? "Starting example." : "Only the event, value, or probability language changes."; }

function buildAveragesDiagram(item) {
  const question = item.question || "";
  const listMatch = question.match(/(?:of|mean of|median of|mode of|range of)\s+([0-9x,\s]+)/i);
  if (listMatch) {
    const values = listMatch[1].split(",").map((value) => value.trim()).filter(Boolean);
    return valueListDiagram(values, "Data Set");
  }

  if (question.includes("most common value")) return valueListDiagram([2, 2, 5, 7], "Most Common Value");
  if (question.includes("total divided by")) return valueListDiagram([4, 6, 8], "Mean Example");
  if (question.includes("middle value")) return valueListDiagram([3, 5, 7], "Median Example");
  if (question.includes("smallest value from the largest")) return valueListDiagram([3, 7, 11], "Range Example");
  if (question.includes("affected a lot by one very large value")) return valueListDiagram([4, 5, 6, 20], "Outlier Example");
  if (question.includes("needs the data to be ordered")) return valueListDiagram([9, 3, 5], "Order the Data");

  return null;
}

function buildProbabilityDiagram(item) {
  const valueMap = { impossible: 0, unlikely: 0.25, uncertain: 0.4, "even chance": 0.5, likely: 0.75, certain: 1 };
  const question = item.question || "";

  if (valueMap[item.answer] !== undefined) {
    return probabilityScaleDiagram([{ value: valueMap[item.answer], label: item.answer }], "Probability Scale");
  }

  if (question.startsWith("Which is more likely") || question.startsWith("Which is less likely")) {
    const match = question.match(/: (.+?) or (.+?)\?/);
    if (match) {
      return probabilityScaleDiagram([
        { value: estimateEventProbability(match[1]), label: "A" },
        { value: estimateEventProbability(match[2]), label: "B" }
      ], "Compare Likelihood");
    }
  }

  const numericMatch = question.match(/\b(0(?:\.\d+)?|1(?:\.0+)?)\b/);
  if (numericMatch) {
    return probabilityScaleDiagram([{ value: Number.parseFloat(numericMatch[1]), label: numericMatch[1] }], "Probability Scale");
  }

  return probabilityScaleDiagram([], "Probability Scale");
}

function estimateEventProbability(label) {
  const lower = label.toLowerCase();
  const patterns = [
    ["rolling a 2 on a dice", 1 / 6],
    ["rolling an even number", 3 / 6],
    ["picking a red card", 26 / 52],
    ["ace of spades", 1 / 52],
    ["flipping heads on a fair coin", 1 / 2],
    ["rolling a 6 on a dice", 1 / 6],
    ["picking a vowel from aeiou", 1],
    ["picking a consonant from aeiou", 0],
    ["choosing a square number from {1,2,3,4,5}", 2 / 5],
    ["choosing an even number", 2 / 5],
    ["rolling a number greater than 4", 2 / 6],
    ["less than 4 on a dice", 3 / 6],
    ["picking blue from a bag with 7 blue and 3 green", 7 / 10],
    ["green", 3 / 10],
    ["getting a multiple of 3 on a dice", 2 / 6],
    ["a factor of 6 on a dice", 4 / 6],
    ["choosing a weekend day", 2 / 7],
    ["a weekday", 5 / 7],
    ["picking a prime number from {2,3,4,5}", 3 / 4],
    ["picking an odd number", 2 / 4]
  ];
  const match = patterns.find(([pattern]) => lower.includes(pattern));
  return match ? match[1] : 0.5;
}

function generateCompareOrderPercentagesTeaching(topic, variant, settings, difficultyKey) {
  const base = getPercentageCompareBase(difficultyKey);
  const sequence = variant.id === "order-sets"
    ? [
      { question: `Put these in ascending order: ${base.orderA.values.join(", ")}.`, answer: base.orderA.answer, change: "Model ordering a percentage set." },
      { question: `Put these in descending order: ${base.orderB.values.join(", ")}.`, answer: base.orderB.answer, change: "Only the direction changes." },
      { question: `Put these in ascending order: ${base.orderC.values.join(", ")}.`, answer: base.orderC.answer, change: "Only the set changes." }
    ]
    : variant.id === "benchmarking"
      ? [
        { question: `${base.benchmarkA.value} is greater than or less than ${base.benchmarkA.target}?`, answer: base.benchmarkA.answer, change: "Model using a benchmark." },
        { question: `${base.benchmarkB.value} is closer to ${base.benchmarkB.left} or ${base.benchmarkB.right}?`, answer: base.benchmarkB.answer, change: "Only the prompt changes." },
        { question: `${base.benchmarkC.value} is greater than or less than ${base.benchmarkC.target}?`, answer: base.benchmarkC.answer, change: "Only the value changes." }
      ]
      : variant.id === "true-false"
        ? [
          { question: `True or false: ${base.trueFalseA.statement}`, answer: base.trueFalseA.answer, change: "Model checking a percentage statement." },
          { question: `True or false: ${base.trueFalseB.statement}`, answer: base.trueFalseB.answer, change: "Only the values change." },
          { question: `True or false: ${base.trueFalseC.statement}`, answer: base.trueFalseC.answer, change: "Only the comparison changes." }
        ]
        : [
          { question: `Which is greater: ${base.compareA.left} or ${base.compareA.right}?`, answer: base.compareA.answer, change: "Model comparing percentages." },
          { question: `Which is smaller: ${base.compareB.left} or ${base.compareB.right}?`, answer: base.compareB.answer, change: "Only the direction changes." },
          { question: `Which is greater: ${base.compareC.left} or ${base.compareC.right}?`, answer: base.compareC.answer, change: "Only the numbers change." }
        ];
  return createTeachingSequence(topic, variant, sequence);
}

function generateCompareOrderPercentages(_topic, variant, settings, difficultyKey) {
  const base = getPercentageCompareBase(difficultyKey);
  if (variant.id === "order-sets") return { questions: base.orders.map((item, index) => ({ question: `Put these in ${item.direction} order: ${item.values.join(", ")}.`, answer: item.answer, change: percentageChange(index) })) };
  if (variant.id === "benchmarking") return { questions: base.benchmarks.map((item, index) => ({ question: item.mode === "compare" ? `${item.value} is greater than or less than ${item.target}?` : `${item.value} is closer to ${item.left} or ${item.right}?`, answer: item.answer, change: percentageChange(index) })) };
  if (variant.id === "true-false") return { questions: base.truths.map((item, index) => ({ question: `True or false: ${item.statement}`, answer: item.answer, change: percentageChange(index) })) };
  return { questions: base.compares.map((item, index) => ({ question: index % 2 ? `Which is smaller: ${item.left} or ${item.right}?` : `Which is greater: ${item.left} or ${item.right}?`, answer: index % 2 ? item.smaller : item.answer, change: percentageChange(index) })) };
}

function generateMetricUnitConversionsTeaching(topic, variant, settings, difficultyKey) {
  const base = getMetricBase(difficultyKey);
  const sequence = variant.id === "choose-the-unit"
    ? [
      { question: base.chooseA.question, answer: base.chooseA.answer, change: "Model choosing a sensible unit." },
      { question: base.chooseB.question, answer: base.chooseB.answer, change: "Only the context changes." },
      { question: base.chooseC.question, answer: base.chooseC.answer, change: "Only the measure type changes." }
    ]
    : variant.id === "missing-value"
      ? [
        { question: base.missingA.question, answer: base.missingA.answer, change: "Model a missing conversion value." },
        { question: base.missingB.question, answer: base.missingB.answer, change: "Only the units change." },
        { question: base.missingC.question, answer: base.missingC.answer, change: "Only the missing part changes place." }
      ]
      : variant.id === "error-spotting"
        ? [
          { question: base.errorA.question, answer: base.errorA.answer, change: "Model spotting a conversion error." },
          { question: base.errorB.question, answer: base.errorB.answer, change: "Only the conversion changes." },
          { question: base.errorC.question, answer: base.errorC.answer, change: "Only the correction demand changes." }
        ]
        : [
          { question: base.directA.question, answer: base.directA.answer, change: "Model a direct metric conversion." },
          { question: base.directB.question, answer: base.directB.answer, change: "Only the value changes." },
          { question: base.directC.question, answer: base.directC.answer, change: "Only the units change." }
        ];
  return createTeachingSequence(topic, variant, sequence);
}

function generateMetricUnitConversions(_topic, variant, settings, difficultyKey) {
  const base = getMetricBase(difficultyKey);
  if (variant.id === "choose-the-unit") return { questions: base.choices.map((item, index) => ({ question: item.question, answer: item.answer, change: metricChange(index) })) };
  if (variant.id === "missing-value") return { questions: base.missings.map((item, index) => ({ question: item.question, answer: item.answer, change: metricChange(index) })) };
  if (variant.id === "error-spotting") return { questions: base.errors.map((item, index) => ({ question: item.question, answer: item.answer, change: metricChange(index) })) };
  return { questions: base.directs.map((item, index) => ({ question: item.question, answer: item.answer, change: metricChange(index) })) };
}

function getPercentageCompareBase(difficultyKey) {
  const values = difficultyKey === "easy" ? [15, 20, 25, 30, 35, 40, 45, 50, 60, 75] : difficultyKey === "hard" ? [12, 18, 27, 33, 47, 52, 68, 74, 85, 92] : [16, 22, 28, 34, 41, 49, 53, 67, 72, 88];
  const compares = values.map((value, index) => ({ left: `${value}%`, right: `${values[(index + 1) % values.length]}%`, answer: `${Math.max(value, values[(index + 1) % values.length])}%`, smaller: `${Math.min(value, values[(index + 1) % values.length])}%` }));
  const makeOrder = (vals, direction) => ({ values: vals.map((v) => `${v}%`), direction, answer: vals.slice().sort((a, b) => direction === "ascending" ? a - b : b - a).map((v) => `${v}%`).join(", ") });
  const orders = [makeOrder(values.slice(0, 3), "ascending"), makeOrder(values.slice(1, 4), "descending"), makeOrder(values.slice(2, 5), "ascending"), makeOrder(values.slice(3, 6), "descending"), makeOrder(values.slice(4, 7), "ascending"), makeOrder(values.slice(5, 8), "descending"), makeOrder(values.slice(6, 9), "ascending"), makeOrder([values[0], values[7], values[9]], "descending"), makeOrder([values[1], values[4], values[8]], "ascending"), makeOrder([values[2], values[5], values[9]], "descending")];
  const benchmarks = [{ mode: "compare", value: `${values[0]}%`, target: "50%", answer: values[0] > 50 ? "greater" : "less" }, { mode: "closer", value: `${values[4]}%`, left: "0%", right: "50%", answer: values[4] < 25 ? "0%" : "50%" }, { mode: "compare", value: `${values[7]}%`, target: "100%", answer: values[7] > 100 ? "greater" : "less" }, { mode: "closer", value: `${values[8]}%`, left: "50%", right: "100%", answer: Math.abs(values[8] - 50) < Math.abs(values[8] - 100) ? "50%" : "100%" }, { mode: "compare", value: `${values[2]}%`, target: "25%", answer: values[2] > 25 ? "greater" : "less" }, { mode: "closer", value: `${values[5]}%`, left: "25%", right: "50%", answer: Math.abs(values[5] - 25) < Math.abs(values[5] - 50) ? "25%" : "50%" }, { mode: "compare", value: `${values[9]}%`, target: "75%", answer: values[9] > 75 ? "greater" : "less" }, { mode: "closer", value: `${values[3]}%`, left: "0%", right: "50%", answer: Math.abs(values[3]) < Math.abs(values[3] - 50) ? "0%" : "50%" }, { mode: "compare", value: `${values[6]}%`, target: "50%", answer: values[6] > 50 ? "greater" : "less" }, { mode: "closer", value: `${values[1]}%`, left: "0%", right: "25%", answer: Math.abs(values[1]) < Math.abs(values[1] - 25) ? "0%" : "25%" }];
  const truths = compares.map((item, index) => ({ statement: `${item.left} ${index % 2 === 0 ? ">" : "<"} ${item.right}`, answer: index % 2 === 0 ? (Number(item.left.replace("%", "")) > Number(item.right.replace("%", "")) ? "True" : "False") : (Number(item.left.replace("%", "")) < Number(item.right.replace("%", "")) ? "True" : "False") }));
  return { compares, orders, benchmarks, truths, compareA: compares[0], compareB: compares[1], compareC: compares[2], orderA: orders[0], orderB: orders[1], orderC: orders[2], benchmarkA: benchmarks[0], benchmarkB: benchmarks[1], benchmarkC: benchmarks[2], trueFalseA: truths[0], trueFalseB: truths[1], trueFalseC: truths[2] };
}

function getMetricBase(difficultyKey) {
  const directs = [{ question: "Convert 230 cm to m.", answer: "2.3 m" }, { question: "Convert 4.5 m to cm.", answer: "450 cm" }, { question: "Convert 1800 g to kg.", answer: "1.8 kg" }, { question: "Convert 2.4 kg to g.", answer: "2400 g" }, { question: "Convert 35 mm to cm.", answer: "3.5 cm" }, { question: "Convert 0.8 m to cm.", answer: "80 cm" }, { question: "Convert 7 cm to mm.", answer: "70 mm" }, { question: "Convert 3.2 km to m.", answer: "3200 m" }, { question: "Convert 950 ml to l.", answer: "0.95 l" }, { question: "Convert 1.6 l to ml.", answer: "1600 ml" }];
  const choices = [{ question: "Which unit is most sensible for the mass of an apple: g or kg?", answer: "g" }, { question: "Which unit is most sensible for the length of a classroom: cm or m?", answer: "m" }, { question: "Which unit is most sensible for the capacity of a water bottle: ml or l?", answer: "ml" }, { question: "Which unit is most sensible for the distance between towns: m or km?", answer: "km" }, { question: "Which unit is most sensible for the width of a fingernail: mm or m?", answer: "mm" }, { question: "Which unit is most sensible for the mass of a car: g or kg?", answer: "kg" }, { question: "Which unit is most sensible for the height of a person: cm or km?", answer: "cm" }, { question: "Which unit is most sensible for the amount of juice in a carton: ml or l?", answer: "l" }, { question: "Which unit is most sensible for the thickness of a coin: mm or cm?", answer: "mm" }, { question: "Which unit is most sensible for the length of a road trip: m or km?", answer: "km" }];
  const missings = [{ question: "Complete: 2.5 m = ? cm", answer: "250" }, { question: "Complete: ? kg = 3400 g", answer: "3.4" }, { question: "Complete: 7 cm = ? mm", answer: "70" }, { question: "Complete: ? l = 850 ml", answer: "0.85" }, { question: "Complete: 4 km = ? m", answer: "4000" }, { question: "Complete: ? cm = 1.8 m", answer: "180" }, { question: "Complete: 5600 g = ? kg", answer: "5.6" }, { question: "Complete: ? ml = 1.2 l", answer: "1200" }, { question: "Complete: 95 mm = ? cm", answer: "9.5" }, { question: "Complete: ? m = 320 cm", answer: "3.2" }];
  const errors = [{ question: "A pupil says 2.3 m = 23 cm. Are they correct?", answer: "No" }, { question: "A pupil says 4500 g = 4.5 kg. Are they correct?", answer: "Yes" }, { question: "Correct this: 3.2 km = 320 m.", answer: "3200 m" }, { question: "A pupil says 85 mm = 8.5 m. Are they correct?", answer: "No" }, { question: "Correct this: 0.7 l = 70 ml.", answer: "700 ml" }, { question: "A pupil says 160 cm = 1.6 m. Are they correct?", answer: "Yes" }, { question: "Correct this: 2.4 kg = 240 g.", answer: "2400 g" }, { question: "A pupil says 900 ml = 9 l. Are they correct?", answer: "No" }, { question: "Correct this: 6 cm = 600 mm.", answer: "60 mm" }, { question: "A pupil says 1.5 m = 150 cm. Are they correct?", answer: "Yes" }];
  return { directs, choices, missings, errors, directA: directs[0], directB: directs[1], directC: directs[2], chooseA: choices[0], chooseB: choices[1], chooseC: choices[2], missingA: missings[0], missingB: missings[1], missingC: missings[2], errorA: errors[0], errorB: errors[1], errorC: errors[2] };
}

function percentageChange(index) { return index === 0 ? "Starting example." : "Only the percentage comparison feature changes."; }
function metricChange(index) { return index === 0 ? "Starting example." : "Only the unit pair, value, or conversion structure changes."; }

function generateAreaTrianglesParallelogramsTeaching(topic, variant, settings, difficultyKey) {
  const base = getTriParaAreaBase(difficultyKey);
  const sequence = variant.id === "missing-dimension"
    ? [{ question: base.missingA.question, answer: base.missingA.answer, change: "Model finding a missing dimension.", diagram: base.missingA.diagram }, { question: base.missingB.question, answer: base.missingB.answer, change: "Only the shape changes.", diagram: base.missingB.diagram }, { question: base.missingC.question, answer: base.missingC.answer, change: "Only the numbers change.", diagram: base.missingC.diagram }]
    : variant.id === "compare-areas"
      ? [{ question: base.compareA.question, answer: base.compareA.answer, change: "Model comparing two areas.", diagram: base.compareA.diagram }, { question: base.compareB.question, answer: base.compareB.answer, change: "Only the shapes change.", diagram: base.compareB.diagram }, { question: base.compareC.question, answer: base.compareC.answer, change: "Only the dimensions change.", diagram: base.compareC.diagram }]
      : variant.id === "choose-the-formula"
        ? [{ question: base.formulaA.question, answer: base.formulaA.answer, change: "Model choosing the correct formula idea.", diagram: base.formulaA.diagram }, { question: base.formulaB.question, answer: base.formulaB.answer, change: "Only the shape changes.", diagram: base.formulaB.diagram }, { question: base.formulaC.question, answer: base.formulaC.answer, change: "Only the wording changes.", diagram: base.formulaC.diagram }]
        : [{ question: base.calcA.question, answer: base.calcA.answer, change: "Model a direct area calculation.", diagram: base.calcA.diagram }, { question: base.calcB.question, answer: base.calcB.answer, change: "Only the shape changes.", diagram: base.calcB.diagram }, { question: base.calcC.question, answer: base.calcC.answer, change: "Only the dimensions change.", diagram: base.calcC.diagram }];
  return createTeachingSequence(topic, variant, sequence);
}

function generateAreaTrianglesParallelograms(_topic, variant, settings, difficultyKey) {
  const base = getTriParaAreaBase(difficultyKey);
  if (variant.id === "missing-dimension") return { questions: base.missings.map((item, index) => ({ question: item.question, answer: item.answer, change: triParaAreaChange(index), diagram: item.diagram })) };
  if (variant.id === "compare-areas") return { questions: base.compares.map((item, index) => ({ question: item.question, answer: item.answer, change: triParaAreaChange(index), diagram: item.diagram })) };
  if (variant.id === "choose-the-formula") return { questions: base.formulas.map((item, index) => ({ question: item.question, answer: item.answer, change: triParaAreaChange(index), diagram: item.diagram })) };
  return { questions: base.calcs.map((item, index) => ({ question: item.question, answer: item.answer, change: triParaAreaChange(index), diagram: item.diagram })) };
}

function generateScalingMultiplicativeReasoningTeaching(topic, variant, settings, difficultyKey) {
  const base = getScalingBase(difficultyKey);
  const sequence = variant.id === "compare-scale-factors"
    ? [{ question: base.compareA.question, answer: base.compareA.answer, change: "Model comparing scale factors." }, { question: base.compareB.question, answer: base.compareB.answer, change: "Only the values change." }, { question: base.compareC.question, answer: base.compareC.answer, change: "Only the direction changes." }]
    : variant.id === "missing-part"
      ? [{ question: base.missingA.question, answer: base.missingA.answer, change: "Model a missing value in a scale relationship." }, { question: base.missingB.question, answer: base.missingB.answer, change: "Only the missing part changes place." }, { question: base.missingC.question, answer: base.missingC.answer, change: "Only the scale factor changes." }]
      : variant.id === "error-spotting"
        ? [{ question: base.errorA.question, answer: base.errorA.answer, change: "Model spotting additive thinking." }, { question: base.errorB.question, answer: base.errorB.answer, change: "Only the numbers change." }, { question: base.errorC.question, answer: base.errorC.answer, change: "Only the explanation demand changes." }]
        : [{ question: base.scaleA.question, answer: base.scaleA.answer, change: "Model scaling up." }, { question: base.scaleB.question, answer: base.scaleB.answer, change: "Only the direction changes." }, { question: base.scaleC.question, answer: base.scaleC.answer, change: "Only the context changes." }];
  return createTeachingSequence(topic, variant, sequence);
}

function generateScalingMultiplicativeReasoning(_topic, variant, settings, difficultyKey) {
  const base = getScalingBase(difficultyKey);
  if (variant.id === "compare-scale-factors") return { questions: base.compares.map((item, index) => ({ question: item.question, answer: item.answer, change: scalingChange(index) })) };
  if (variant.id === "missing-part") return { questions: base.missings.map((item, index) => ({ question: item.question, answer: item.answer, change: scalingChange(index) })) };
  if (variant.id === "error-spotting") return { questions: base.errors.map((item, index) => ({ question: item.question, answer: item.answer, change: scalingChange(index) })) };
  return { questions: base.scales.map((item, index) => ({ question: item.question, answer: item.answer, change: scalingChange(index) })) };
}

function generateProportionProblemsTeaching(topic, variant, settings, difficultyKey) {
  const base = getProportionBase(difficultyKey);
  const sequence = variant.id === "unit-rate"
    ? [{ question: base.unitA.question, answer: base.unitA.answer, change: "Model finding a unit rate first." }, { question: base.unitB.question, answer: base.unitB.answer, change: "Only the scale changes." }, { question: base.unitC.question, answer: base.unitC.answer, change: "Only the context changes." }]
    : variant.id === "missing-value"
      ? [{ question: base.missingA.question, answer: base.missingA.answer, change: "Model finding a missing proportional value." }, { question: base.missingB.question, answer: base.missingB.answer, change: "Only the missing part changes." }, { question: base.missingC.question, answer: base.missingC.answer, change: "Only the numbers change." }]
      : variant.id === "compare-methods"
        ? [{ question: base.methodA.question, answer: base.methodA.answer, change: "Model comparing methods." }, { question: base.methodB.question, answer: base.methodB.answer, change: "Only the method changes." }, { question: base.methodC.question, answer: base.methodC.answer, change: "Only the explanation changes." }]
        : [{ question: base.directA.question, answer: base.directA.answer, change: "Model a direct proportion problem." }, { question: base.directB.question, answer: base.directB.answer, change: "Only the quantities change." }, { question: base.directC.question, answer: base.directC.answer, change: "Only the context changes." }];
  return createTeachingSequence(topic, variant, sequence);
}

function generateProportionProblems(_topic, variant, settings, difficultyKey) {
  const base = getProportionBase(difficultyKey);
  if (variant.id === "unit-rate") return { questions: base.units.map((item, index) => ({ question: item.question, answer: item.answer, change: proportionChange(index) })) };
  if (variant.id === "missing-value") return { questions: base.missings.map((item, index) => ({ question: item.question, answer: item.answer, change: proportionChange(index) })) };
  if (variant.id === "compare-methods") return { questions: base.methods.map((item, index) => ({ question: item.question, answer: item.answer, change: proportionChange(index) })) };
  return { questions: base.directs.map((item, index) => ({ question: item.question, answer: item.answer, change: proportionChange(index) })) };
}

function getTriParaAreaBase(_difficultyKey) {
  const calcItem = (shape, base, height) => ({
    question: `Find the area of a ${shape} with base ${base} cm and ${shape === "triangle" ? "height" : "perpendicular height"} ${height} cm.`,
    answer: shape === "triangle" ? `${(base * height) / 2} cm²` : `${base * height} cm²`,
    diagram: triParaAreaDiagram(shape, `${base} cm`, `${height} cm`)
  });
  const missingItem = (shape, area, givenLabel, givenValue, missingLabel, answer) => ({
    question: `A ${shape} has area ${area} cm² and ${givenLabel} ${givenValue} cm. What is the ${missingLabel}?`,
    answer: `${answer} cm`,
    diagram: triParaAreaDiagram(shape, givenLabel === "base" ? `${givenValue} cm` : "?", givenLabel.includes("height") ? `${givenValue} cm` : "?")
  });
  const compareItem = (leftShape, leftBase, leftHeight, rightShape, rightBase, rightHeight, direction) => ({
    question: `Which has the ${direction} area: the ${leftShape} with base ${leftBase} cm and height ${leftHeight} cm, or the ${rightShape} with base ${rightBase} cm and height ${rightHeight} cm?`,
    answer: direction === "greater"
      ? (((leftShape === "triangle" ? leftBase * leftHeight / 2 : leftBase * leftHeight) > (rightShape === "triangle" ? rightBase * rightHeight / 2 : rightBase * rightHeight)) ? `the ${leftShape}` : `the ${rightShape}`)
      : (((leftShape === "triangle" ? leftBase * leftHeight / 2 : leftBase * leftHeight) < (rightShape === "triangle" ? rightBase * rightHeight / 2 : rightBase * rightHeight)) ? `the ${leftShape}` : `the ${rightShape}`),
    diagram: comparisonDiagram("Left", triParaAreaDiagram(leftShape, `${leftBase} cm`, `${leftHeight} cm`), "Right", triParaAreaDiagram(rightShape, `${rightBase} cm`, `${rightHeight} cm`))
  });
  const formulaItem = (shape, promptType = "formula") => ({
    question: promptType === "formula"
      ? `Which formula idea fits the ${shape} shown: base × height or 1/2 × base × height?`
      : shape === "triangle"
        ? "A pupil does not halve base × height for the shown shape. Are they correct?"
        : "A pupil halves base × height for the shown shape. Are they correct?",
    answer: promptType === "formula"
      ? (shape === "triangle" ? "1/2 × base × height" : "base × height")
      : "No",
    diagram: triParaAreaDiagram(shape, shape === "triangle" ? "b" : "b", "h")
  });
  const calcs = [calcItem("triangle", 8, 5), calcItem("parallelogram", 7, 4), calcItem("triangle", 10, 6), calcItem("parallelogram", 9, 5), calcItem("triangle", 12, 7), calcItem("parallelogram", 11, 6), calcItem("triangle", 14, 4), calcItem("parallelogram", 13, 7), calcItem("triangle", 16, 5), calcItem("parallelogram", 15, 8)];
  const missings = [missingItem("triangle", 24, "height", 6, "base", 8), missingItem("parallelogram", 45, "base", 9, "height", 5), missingItem("triangle", 30, "height", 5, "base", 12), missingItem("parallelogram", 56, "base", 8, "height", 7), missingItem("triangle", 42, "height", 6, "base", 14), missingItem("parallelogram", 72, "base", 12, "height", 6), missingItem("triangle", 18, "height", 4, "base", 9), missingItem("parallelogram", 84, "base", 14, "height", 6), missingItem("triangle", 50, "height", 5, "base", 20), missingItem("parallelogram", 63, "base", 9, "height", 7)];
  const compares = [compareItem("triangle", 10, 6, "parallelogram", 6, 5, "greater"), compareItem("triangle", 12, 5, "parallelogram", 8, 4, "smaller"), compareItem("triangle", 14, 4, "parallelogram", 7, 7, "greater"), compareItem("triangle", 8, 5, "parallelogram", 5, 6, "greater"), compareItem("triangle", 20, 3, "parallelogram", 7, 5, "smaller"), compareItem("triangle", 18, 4, "parallelogram", 8, 8, "greater"), compareItem("triangle", 16, 5, "parallelogram", 9, 6, "smaller"), compareItem("triangle", 15, 6, "parallelogram", 10, 4, "greater"), compareItem("triangle", 12, 8, "parallelogram", 11, 4, "smaller"), compareItem("triangle", 22, 5, "parallelogram", 10, 5, "greater")];
  const formulas = [formulaItem("triangle"), formulaItem("parallelogram"), { question: "A shape shown needs its area halved after multiplying base by height. Which shape is it?", answer: "triangle", diagram: triParaAreaDiagram("triangle", "b", "h") }, { question: "A shape shown uses base × perpendicular height with no halving. Which shape is it?", answer: "parallelogram", diagram: triParaAreaDiagram("parallelogram", "b", "h") }, { question: "Which shown shape has area 1/2 × b × h?", answer: "triangle", diagram: triParaAreaDiagram("triangle", "b", "h") }, { question: "Which shown shape has area b × h?", answer: "parallelogram", diagram: triParaAreaDiagram("parallelogram", "b", "h") }, formulaItem("parallelogram", "error"), formulaItem("triangle", "error"), { question: "Which formula would you choose first for the shown triangle?", answer: "1/2 × base × height", diagram: triParaAreaDiagram("triangle", "b", "h") }, { question: "Which formula would you choose first for the shown parallelogram?", answer: "base × height", diagram: triParaAreaDiagram("parallelogram", "b", "h") }];
  return { calcs, missings, compares, formulas, calcA: calcs[0], calcB: calcs[1], calcC: calcs[2], missingA: missings[0], missingB: missings[1], missingC: missings[2], compareA: compares[0], compareB: compares[1], compareC: compares[2], formulaA: formulas[0], formulaB: formulas[1], formulaC: formulas[2] };
}

function getScalingBase(difficultyKey) {
  const scales = difficultyKey === "hard"
    ? [{ question: "A map uses 2.5 cm for 8 km. How many km for 6.25 cm?", answer: "20 km" }, { question: "A recipe uses 3/4 of a litre of milk for 1 batch. How much milk for 6 batches?", answer: "4.5 litres" }, { question: "A scale model uses factor 1/4. A side is 36 cm on the original. What is the model length?", answer: "9 cm" }, { question: "A photo is enlarged by scale factor 1.5. A width of 12 cm becomes what width?", answer: "18 cm" }, { question: "A bag contains 2.4 kg of rice for 3 equal portions. How much for 7 portions at the same rate?", answer: "5.6 kg" }, { question: "48 cm is scaled down by factor 6. What is the new length?", answer: "8 cm" }, { question: "7.5 is scaled up by factor 4. What is the new value?", answer: "30" }, { question: "A machine makes 18 parts in 1.5 minutes. How many parts in 4.5 minutes at the same rate?", answer: "54" }, { question: "A drawing is reduced to 3/5 of its original size. The original is 25 cm long. What is the new length?", answer: "15 cm" }, { question: "A tile pattern grows by a scale factor of 2.5 from 8 tiles. How many tiles now?", answer: "20" }]
    : [{ question: "A recipe uses 4 apples for 1 batch. How many apples for 3 batches?", answer: "12" }, { question: "A map uses 2 cm for 5 km. How many km for 8 cm?", answer: "20" }, { question: "A pattern uses 3 blue tiles for 1 strip. How many blue tiles for 5 strips?", answer: "15" }, { question: "A machine makes 6 parts in 1 minute. How many in 4 minutes?", answer: "24" }, { question: "A bag has 5 sweets in 1 packet. How many in 7 packets?", answer: "35" }, { question: "12 cm is scaled down by factor 3. What is the new length?", answer: "4 cm" }, { question: "45 is scaled down by factor 5. What is the new value?", answer: "9" }, { question: "7 is scaled up by factor 4. What is the new value?", answer: "28" }, { question: "18 is scaled down by factor 2. What is the new value?", answer: "9" }, { question: "9 is scaled up by factor 6. What is the new value?", answer: "54" }];
  const compares = difficultyKey === "hard"
    ? [{ question: "Which uses the greater scale factor: 12 to 18 or 8 to 14?", answer: "12 to 18" }, { question: "Which uses the smaller scale factor: 15 to 24 or 10 to 17.5?", answer: "10 to 17.5" }, { question: "Which uses the greater scale factor: 2.4 to 6 or 3.5 to 8.75?", answer: "They are equal" }, { question: "Which uses the greater scale factor: 18 to 27 or 14 to 20?", answer: "14 to 20" }, { question: "Which uses the smaller scale factor: 9 to 13.5 or 12 to 15?", answer: "12 to 15" }, { question: "Which uses the greater scale factor: 5 to 11.25 or 8 to 18?", answer: "5 to 11.25" }, { question: "Which uses the smaller scale factor: 16 to 28 or 10 to 17.5?", answer: "10 to 17.5" }, { question: "Which uses the greater scale factor: 7 to 12.6 or 9 to 16.2?", answer: "They are equal" }, { question: "Which uses the smaller scale factor: 20 to 24 or 15 to 19.5?", answer: "20 to 24" }, { question: "Which uses the greater scale factor: 6 to 15 or 14 to 31.5?", answer: "14 to 31.5" }]
    : [{ question: "Which uses the greater scale factor: 3 to 12 or 5 to 20?", answer: "They are equal" }, { question: "Which uses the greater scale factor: 4 to 16 or 6 to 18?", answer: "4 to 16" }, { question: "Which uses the smaller scale factor: 7 to 21 or 8 to 40?", answer: "7 to 21" }, { question: "Which uses the greater scale factor: 9 to 27 or 10 to 50?", answer: "10 to 50" }, { question: "Which uses the smaller scale factor: 12 to 24 or 15 to 75?", answer: "12 to 24" }, { question: "Which uses the greater scale factor: 2 to 14 or 3 to 18?", answer: "2 to 14" }, { question: "Which uses the smaller scale factor: 5 to 15 or 4 to 28?", answer: "5 to 15" }, { question: "Which uses the greater scale factor: 6 to 42 or 7 to 35?", answer: "6 to 42" }, { question: "Which uses the smaller scale factor: 8 to 16 or 9 to 54?", answer: "8 to 16" }, { question: "Which uses the greater scale factor: 11 to 44 or 12 to 36?", answer: "11 to 44" }];
  const missings = difficultyKey === "hard"
    ? [{ question: "2.5 metres of ribbon cost £7.50. How much do 6 metres cost at the same rate?", answer: "£18" }, { question: "3 litres of paint cover 24 m². How many m² do 5.5 litres cover?", answer: "44 m²" }, { question: "4 muffins need 1.5 cups of flour. How much flour for 10 muffins?", answer: "3.75 cups" }, { question: "8 tickets cost £22.40. How much do 5 tickets cost at the same rate?", answer: "£14" }, { question: "6 books weigh 4.8 kg. How much do 9 books weigh?", answer: "7.2 kg" }, { question: "12 pens cost £7.20. How much for 17 pens?", answer: "£10.20" }, { question: "5 bottles hold 3.5 litres. How many litres in 9 bottles?", answer: "6.3 litres" }, { question: "7 metres of wire cost £12.60. How much do 11 metres cost?", answer: "£19.80" }, { question: "4 jars hold 2.4 litres. How much in 15 jars?", answer: "9 litres" }, { question: "3.2 kg of rice fills 8 bags. How much rice fills 13 bags?", answer: "5.2 kg" }]
    : [{ question: "3 pencils cost 12p. How much do 5 pencils cost at the same rate?", answer: "20p" }, { question: "4 metres of fabric cost £20. How much do 7 metres cost at the same rate?", answer: "£35" }, { question: "2 cakes need 6 eggs. How many eggs for 5 cakes?", answer: "15" }, { question: "8 tickets cost £24. How much do 3 tickets cost at the same rate?", answer: "£9" }, { question: "5 books weigh 10 kg. How much do 8 books weigh?", answer: "16 kg" }, { question: "6 pens cost £18. How much for 10 pens?", answer: "£30" }, { question: "9 muffins need 27 cherries. How many cherries for 4 muffins?", answer: "12" }, { question: "7 bottles hold 14 litres. How many litres in 12 bottles?", answer: "24 litres" }, { question: "10 stickers cost 50p. How much for 6 stickers?", answer: "30p" }, { question: "4 jars hold 12 litres. How much in 9 jars?", answer: "27 litres" }];
  const errors = difficultyKey === "hard"
    ? [{ question: "A pupil says 12 to 18 is a scale factor of 6 because 18 - 12 = 6. Are they correct?", answer: "No" }, { question: "A pupil scales 2.5 to 6.25 by adding 3.75, so the scale factor is 3.75. Are they correct?", answer: "No" }, { question: "Why is multiplying more useful than adding in a scaling problem?", answer: "Because the relationship is multiplicative, not additive." }, { question: "A pupil says 4 to 6 and 10 to 15 use different scale factors because the increases are different. Are they correct?", answer: "No" }, { question: "A pupil finds 18 to 27 by adding 9 instead of scaling. Are they correct?", answer: "No" }, { question: "Why can 2 to 5 and 6 to 15 represent the same scale factor even though the difference changes?", answer: "Because the multiplier is the same in both cases." }, { question: "A pupil says scaling down always means subtracting. Are they correct?", answer: "No" }, { question: "A pupil says 24 to 6 is scale factor 6. Are they correct?", answer: "No" }, { question: "Why do 5 to 12.5 and 8 to 20 have the same scale factor?", answer: "Because both are multiplied by 2.5." }, { question: "A pupil uses addition to scale 7 to 12.6. Are they correct?", answer: "No" }]
    : [{ question: "A pupil says 3 to 12 is a scale factor of 9 because 12 - 3 = 9. Are they correct?", answer: "No" }, { question: "A pupil scales 5 to 20 by adding 15 each time. Are they correct?", answer: "No" }, { question: "Why is multiplying more useful than adding in a scaling problem?", answer: "Because the relationship is multiplicative, not additive." }, { question: "A pupil says 4 to 16 and 8 to 20 use the same scale factor because both increase. Are they correct?", answer: "No" }, { question: "A pupil finds 6 to 24 by doubling instead of multiplying by 4. Are they correct?", answer: "No" }, { question: "Why is 2 to 10 a different scale factor from 3 to 10?", answer: "Because the multiplier from the start value to the end value is different." }, { question: "A pupil says scaling down always means subtracting. Are they correct?", answer: "No" }, { question: "A pupil says 12 to 6 is scale factor 6. Are they correct?", answer: "No" }, { question: "Why does 5 to 25 have the same scale factor as 2 to 10?", answer: "Because both are multiplied by 5." }, { question: "A pupil uses addition to scale 7 to 28. Are they correct?", answer: "No" }];
  return { scales, compares, missings, errors, scaleA: scales[0], scaleB: scales[1], scaleC: scales[2], compareA: compares[0], compareB: compares[1], compareC: compares[2], missingA: missings[0], missingB: missings[1], missingC: missings[2], errorA: errors[0], errorB: errors[1], errorC: errors[2] };
}

function getProportionBase(difficultyKey) {
  const directs = difficultyKey === "hard"
    ? [{ question: "If 2.5 notebooks cost £6.25, how much do 7 notebooks cost at the same rate?", answer: "£17.50" }, { question: "If 3.2 bags hold 20.8 apples, how many apples in 7 bags?", answer: "45.5" }, { question: "If 6 pens cost £9.90, how much do 10 pens cost?", answer: "£16.50" }, { question: "If 5 bottles hold 13.5 litres, how many litres in 8 bottles?", answer: "21.6 litres" }, { question: "If 2 pizzas feed 5 people, how many people do 5 pizzas feed?", answer: "12.5" }, { question: "If 7 cards cost 24.5p, how much do 9 cards cost?", answer: "31.5p" }, { question: "If 8 tickets cost £26.40, how much do 12 tickets cost?", answer: "£39.60" }, { question: "If 3 boxes hold 16.5 cups, how many cups in 5 boxes?", answer: "27.5" }, { question: "If 9 cookies need 22.5 chips, how many chips for 4 cookies?", answer: "10" }, { question: "If 4 metres cost £11.20, how much do 11 metres cost?", answer: "£30.80" }]
    : [{ question: "If 3 notebooks cost £6, how much do 5 notebooks cost at the same rate?", answer: "£10" }, { question: "If 4 bags hold 20 apples, how many apples in 7 bags?", answer: "35" }, { question: "If 6 pens cost £9, how much do 10 pens cost?", answer: "£15" }, { question: "If 5 bottles hold 15 litres, how many litres in 8 bottles?", answer: "24 litres" }, { question: "If 2 pizzas feed 6 people, how many people do 5 pizzas feed?", answer: "15" }, { question: "If 7 cards cost 14p, how much do 9 cards cost?", answer: "18p" }, { question: "If 8 tickets cost £24, how much do 12 tickets cost?", answer: "£36" }, { question: "If 3 boxes hold 18 cups, how many cups in 5 boxes?", answer: "30" }, { question: "If 9 cookies need 27 chips, how many chips for 4 cookies?", answer: "12" }, { question: "If 4 metres cost £10, how much do 11 metres cost?", answer: "£27.50" }];
  const units = difficultyKey === "hard"
    ? [{ question: "If 5 oranges cost £2.75, what is the cost of 1 orange?", answer: "£0.55" }, { question: "If 8 pencils cost £4.40, what is the cost of 1 pencil?", answer: "£0.55" }, { question: "If 6 bottles hold 16.8 litres, how much does 1 bottle hold?", answer: "2.8 litres" }, { question: "If 9 muffins need 31.5 cherries, how many cherries for 1 muffin?", answer: "3.5" }, { question: "If 12 stickers cost 66p, what is the cost of 1 sticker?", answer: "5.5p" }, { question: "If 4 books weigh 9.2 kg, what is the weight of 1 book?", answer: "2.3 kg" }, { question: "If 7 pens cost £4.90, what is the cost of 1 pen?", answer: "£0.70" }, { question: "If 10 sweets cost £2.30, what is the cost of 1 sweet?", answer: "£0.23" }, { question: "If 15 km takes 2.5 hours, how far in 1 hour at the same rate?", answer: "6 km" }, { question: "If 24 cups are packed into 7.5 boxes, how many cups in 1 box?", answer: "3.2" }]
    : [{ question: "If 5 oranges cost £2.50, what is the cost of 1 orange?", answer: "£0.50" }, { question: "If 8 pencils cost £4, what is the cost of 1 pencil?", answer: "£0.50" }, { question: "If 6 bottles hold 18 litres, how much does 1 bottle hold?", answer: "3 litres" }, { question: "If 9 muffins need 27 cherries, how many cherries for 1 muffin?", answer: "3" }, { question: "If 12 stickers cost 60p, what is the cost of 1 sticker?", answer: "5p" }, { question: "If 4 books weigh 8 kg, what is the weight of 1 book?", answer: "2 kg" }, { question: "If 7 pens cost £3.50, what is the cost of 1 pen?", answer: "£0.50" }, { question: "If 10 sweets cost £2, what is the cost of 1 sweet?", answer: "£0.20" }, { question: "If 15 km takes 3 hours, how far in 1 hour at the same rate?", answer: "5 km" }, { question: "If 24 cups are packed into 6 boxes, how many cups in 1 box?", answer: "4" }];
  const missings = difficultyKey === "hard"
    ? [{ question: "If 4 pens cost £6.80, how many pens can you buy for £15.30?", answer: "9" }, { question: "If 5 litres fill 8 bottles, how many bottles can 9.375 litres fill?", answer: "15" }, { question: "If 3 shirts cost £22.50, how many shirts can you buy for £52.50?", answer: "7" }, { question: "If 8 cakes use 22 eggs, how many cakes can 16.5 eggs make?", answer: "6" }, { question: "If 6 tickets cost £16.20, how many tickets can you buy for £29.70?", answer: "11" }, { question: "If 7 pencils weigh 15.4 g, how many pencils weigh 24.2 g?", answer: "11" }, { question: "If 9 cards cost 31.5p, how many cards can you buy for 45.5p?", answer: "13" }, { question: "If 2 packs hold 13 crayons, how many packs hold 45.5 crayons?", answer: "7" }, { question: "If 4 jars hold 10 litres, how many jars hold 22.5 litres?", answer: "9" }, { question: "If 5 books cost £23.75, how many books cost £42.75?", answer: "9" }]
    : [{ question: "If 4 pens cost £6, how many pens can you buy for £12?", answer: "8" }, { question: "If 5 litres fill 10 bottles, how many bottles can 9 litres fill?", answer: "18" }, { question: "If 3 shirts cost £18, how many shirts can you buy for £42?", answer: "7" }, { question: "If 8 cakes use 24 eggs, how many cakes can 15 eggs make?", answer: "5" }, { question: "If 6 tickets cost £15, how many tickets can you buy for £25?", answer: "10" }, { question: "If 7 pencils weigh 14 g, how many pencils weigh 22 g?", answer: "11" }, { question: "If 9 cards cost 27p, how many cards can you buy for 45p?", answer: "15" }, { question: "If 2 packs hold 14 crayons, how many packs hold 35 crayons?", answer: "5" }, { question: "If 4 jars hold 12 litres, how many jars hold 21 litres?", answer: "7" }, { question: "If 5 books cost £20, how many books cost £36?", answer: "9" }];
  const methods = difficultyKey === "hard"
    ? [{ question: "A pupil solves 2.5 pens cost £6.25, so 7 pens cost £17.50 by finding the cost of 1 pen first. Is that a good method?", answer: "Yes" }, { question: "A pupil solves 4 bags hold 20.8 apples, so 7 bags hold 27.8 apples by adding 7. Are they correct?", answer: "No" }, { question: "Why is finding the unit rate useful in a proportion problem?", answer: "Because once you know the value for 1 unit, you can scale to any number of units." }, { question: "A pupil doubles 5 to 10 and doubles £8.40 to £16.80 to solve a proportion. Is that valid?", answer: "Yes" }, { question: "A pupil adds the same number instead of using a multiplicative relationship. Are they correct?", answer: "No" }, { question: "Why can two different methods both solve the same proportion problem?", answer: "Because they preserve the same multiplicative relationship in different ways." }, { question: "A pupil finds 1 unit first, then multiplies. Is that a sensible proportional method?", answer: "Yes" }, { question: "A pupil compares the difference instead of the scale factor in a proportion problem. Are they correct?", answer: "No" }, { question: "Why is additive thinking often wrong in proportion problems?", answer: "Because proportional situations depend on multiplication or division, not repeated addition." }, { question: "A pupil uses equivalent ratios to solve a proportion problem. Is that sensible?", answer: "Yes" }]
    : [{ question: "A pupil solves 3 pens cost £6, so 5 pens cost £10 by finding the cost of 1 pen first. Is that a good method?", answer: "Yes" }, { question: "A pupil solves 4 bags hold 20 apples, so 7 bags hold 27 apples by adding 7. Are they correct?", answer: "No" }, { question: "Why is finding the unit rate useful in a proportion problem?", answer: "Because once you know the value for 1 unit, you can scale to any number of units." }, { question: "A pupil doubles 5 to 10 and doubles £8 to £16 to solve a proportion. Is that valid?", answer: "Yes" }, { question: "A pupil adds the same number instead of using a multiplicative relationship. Are they correct?", answer: "No" }, { question: "Why can two different methods both solve the same proportion problem?", answer: "Because they preserve the same multiplicative relationship in different ways." }, { question: "A pupil finds 1 unit first, then multiplies. Is that a sensible proportional method?", answer: "Yes" }, { question: "A pupil compares the difference instead of the scale factor in a proportion problem. Are they correct?", answer: "No" }, { question: "Why is additive thinking often wrong in proportion problems?", answer: "Because proportional situations depend on multiplication or division, not repeated addition." }, { question: "A pupil uses equivalent ratios to solve a proportion problem. Is that sensible?", answer: "Yes" }];
  return { directs, units, missings, methods, directA: directs[0], directB: directs[1], directC: directs[2], unitA: units[0], unitB: units[1], unitC: units[2], missingA: missings[0], missingB: missings[1], missingC: missings[2], methodA: methods[0], methodB: methods[1], methodC: methods[2] };
}

function triParaAreaChange(index) { return index === 0 ? "Starting example." : "Only the shape, dimension, or formula focus changes."; }
function scalingChange(index) { return index === 0 ? "Starting example." : "Only the scale factor, direction, or missing part changes."; }
function proportionChange(index) { return index === 0 ? "Starting example." : "Only the proportional relationship or method focus changes."; }

function generateFractionDecimalConversionsTeaching(topic, variant, settings, difficultyKey) {
  const base = getFractionDecimalConversionBase(difficultyKey);
  const key = variant.id === "match-equivalents" ? "matches" : variant.id === "missing-value" ? "missings" : variant.id === "compare-values" ? "compares" : "conversions";
  const prompts = {
    conversions: [
      { question: base.conversions[0].question, answer: base.conversions[0].answer, change: "Model a direct conversion." },
      { question: base.conversions[1].question, answer: base.conversions[1].answer, change: "Only the direction changes." },
      { question: base.conversions[2].question, answer: base.conversions[2].answer, change: "Only the value changes." }
    ],
    matches: [
      { question: base.matches[0].question, answer: base.matches[0].answer, change: "Model matching equivalent forms." },
      { question: base.matches[1].question, answer: base.matches[1].answer, change: "Only one representation changes." },
      { question: base.matches[2].question, answer: base.matches[2].answer, change: "Only the matching pair changes." }
    ],
    missings: [
      { question: base.missings[0].question, answer: base.missings[0].answer, change: "Model filling a missing value." },
      { question: base.missings[1].question, answer: base.missings[1].answer, change: "Only the missing part moves." },
      { question: base.missings[2].question, answer: base.missings[2].answer, change: "Only the equivalent pair changes." }
    ],
    compares: [
      { question: base.compares[0].question, answer: base.compares[0].answer, change: "Model comparing a fraction and a decimal." },
      { question: base.compares[1].question, answer: base.compares[1].answer, change: "Only the comparison direction changes." },
      { question: base.compares[2].question, answer: base.compares[2].answer, change: "Only the value pair changes." }
    ]
  };
  return createTeachingSequence(topic, variant, prompts[key]);
}

function generateFractionDecimalConversions(_topic, variant, settings, difficultyKey) {
  const base = getFractionDecimalConversionBase(difficultyKey);
  if (variant.id === "match-equivalents") return { questions: base.matches.map((item, index) => ({ question: item.question, answer: item.answer, change: conversionChange(index) })) };
  if (variant.id === "missing-value") return { questions: base.missings.map((item, index) => ({ question: item.question, answer: item.answer, change: conversionChange(index) })) };
  if (variant.id === "compare-values") return { questions: base.compares.map((item, index) => ({ question: item.question, answer: item.answer, change: conversionChange(index) })) };
  return { questions: base.conversions.map((item, index) => ({ question: item.question, answer: item.answer, change: conversionChange(index) })) };
}

function getFractionDecimalConversionBase(difficultyKey) {
  const pairs = difficultyKey === "easy"
    ? [[1, 2, "0.5"], [1, 4, "0.25"], [3, 4, "0.75"], [1, 5, "0.2"], [2, 5, "0.4"], [3, 5, "0.6"], [4, 5, "0.8"], [1, 10, "0.1"], [7, 10, "0.7"], [9, 10, "0.9"]]
    : difficultyKey === "hard"
      ? [[1, 8, "0.125"], [3, 8, "0.375"], [5, 8, "0.625"], [7, 8, "0.875"], [1, 20, "0.05"], [3, 20, "0.15"], [7, 20, "0.35"], [9, 20, "0.45"], [13, 20, "0.65"], [17, 20, "0.85"]]
      : [[1, 2, "0.5"], [1, 4, "0.25"], [3, 4, "0.75"], [1, 5, "0.2"], [2, 5, "0.4"], [3, 5, "0.6"], [4, 5, "0.8"], [1, 8, "0.125"], [3, 8, "0.375"], [7, 10, "0.7"]];
  const conversions = pairs.map(([n, d, decimal], index) => ({
    question: index % 2 === 0 ? `Write ${formatFraction(n, d)} as a decimal.` : `Write ${decimal} as a fraction.`,
    answer: index % 2 === 0 ? decimal : formatFractionReduced(n, d)
  }));
  const matches = pairs.map(([n, d, decimal], index) => {
    const other = pairs[(index + 1) % pairs.length][2];
    return { question: `Which decimal matches ${formatFraction(n, d)}: ${decimal} or ${other}?`, answer: decimal };
  });
  const missings = pairs.map(([n, d, decimal], index) => ({
    question: index % 2 === 0 ? `Complete: ${formatFraction(n, d)} = ?` : `Complete: ? = ${decimal}`,
    answer: index % 2 === 0 ? decimal : formatFractionReduced(n, d)
  }));
  const compares = pairs.map(([n, d, decimal], index) => {
    const other = pairs[(index + 2) % pairs.length];
    const current = n / d;
    const nextValue = other[0] / other[1];
    const left = index % 2 === 0 ? formatFraction(n, d) : decimal;
    const right = index % 2 === 0 ? other[2] : formatFraction(other[0], other[1]);
    const answer = index % 2 === 0 ? (current > nextValue ? left : right) : (current < nextValue ? left : right);
    return { question: index % 2 === 0 ? `Which is greater: ${left} or ${right}?` : `Which is smaller: ${left} or ${right}?`, answer };
  });
  return { conversions, matches, missings, compares };
}

function conversionChange(index) { return index === 0 ? "Starting example." : "Only the representation or comparison changes."; }

function generateNetsAnd3DShapesTeaching(topic, variant, settings, difficultyKey) {
  const base = getNets3DBase(difficultyKey);
  const key = variant.id === "match-the-net" ? "nets" : variant.id === "faces-edges-vertices" ? "counts" : variant.id === "true-false" ? "truths" : "identifies";
  const prompts = {
    identifies: [
      { question: base.identifies[0].question, answer: base.identifies[0].answer, change: "Model identifying a solid from clues.", diagram: base.identifies[0].diagram },
      { question: base.identifies[4].question, answer: base.identifies[4].answer, change: "Now identify it from a face property.", diagram: base.identifies[4].diagram },
      { question: base.identifies[7].question, answer: base.identifies[7].answer, change: "Now identify it from what it can do.", diagram: base.identifies[7].diagram }
    ],
    nets: [
      { question: base.nets[0].question, answer: base.nets[0].answer, change: "Model matching a net to a solid.", diagram: base.nets[0].diagram },
      { question: base.nets[5].question, answer: base.nets[5].answer, change: "Now decide from the face pattern in the net.", diagram: base.nets[5].diagram },
      { question: base.nets[8].question, answer: base.nets[8].answer, change: "Now decide if a statement about the net is true.", diagram: base.nets[8].diagram }
    ],
    counts: [
      { question: base.counts[0].question, answer: base.counts[0].answer, change: "Model reading faces, edges and vertices.", diagram: base.counts[0].diagram },
      { question: base.counts[3].question, answer: base.counts[3].answer, change: "Now compare one property across solids.", diagram: base.counts[3].diagram },
      { question: base.counts[6].question, answer: base.counts[6].answer, change: "Now complete a faces-edges-vertices fact.", diagram: base.counts[6].diagram }
    ],
    truths: [
      { question: base.truths[0].question, answer: base.truths[0].answer, change: "Model checking a 3D shape statement.", diagram: base.truths[0].diagram },
      { question: base.truths[1].question, answer: base.truths[1].answer, change: "Only the property changes.", diagram: base.truths[1].diagram },
      { question: base.truths[2].question, answer: base.truths[2].answer, change: "Only the statement becomes a net fact.", diagram: base.truths[2].diagram }
    ]
  };
  return createTeachingSequence(topic, variant, prompts[key]);
}

function generateNetsAnd3DShapes(_topic, variant, settings, difficultyKey) {
  const base = getNets3DBase(difficultyKey);
  if (variant.id === "match-the-net") return { questions: base.nets.map((item, index) => ({ question: item.question, answer: item.answer, change: nets3DChange(index), diagram: item.diagram })) };
  if (variant.id === "faces-edges-vertices") return { questions: base.counts.map((item, index) => ({ question: item.question, answer: item.answer, change: nets3DChange(index), diagram: item.diagram })) };
  if (variant.id === "true-false") return { questions: base.truths.map((item, index) => ({ question: item.question, answer: item.answer, change: nets3DChange(index), diagram: item.diagram })) };
  return { questions: base.identifies.map((item, index) => ({ question: item.question, answer: item.answer, change: nets3DChange(index), diagram: item.diagram })) };
}

function getNets3DBase(difficultyKey) {
  const shapes = difficultyKey === "easy"
    ? [
      { name: "cube", faces: 6, edges: 12, vertices: 8, clue: "It has 6 square faces.", net: "a net of 6 equal squares" },
      { name: "cuboid", faces: 6, edges: 12, vertices: 8, clue: "It has 6 rectangular faces.", net: "a net made from rectangles" },
      { name: "triangular prism", faces: 5, edges: 9, vertices: 6, clue: "It has 2 triangular faces and 3 rectangular faces.", net: "a net with 2 triangles and 3 rectangles" },
      { name: "square-based pyramid", faces: 5, edges: 8, vertices: 5, clue: "It has 1 square base and 4 triangular faces.", net: "a net with 1 square and 4 triangles" },
      { name: "cylinder", faces: 3, edges: 2, vertices: 0, clue: "It has 2 circular faces and 1 curved surface.", net: "a net with 1 rectangle and 2 circles" }
    ]
    : difficultyKey === "hard"
      ? [
        { name: "cube", faces: 6, edges: 12, vertices: 8, clue: "All its faces are congruent squares.", net: "a net of 6 equal squares" },
        { name: "hexagonal prism", faces: 8, edges: 18, vertices: 12, clue: "It has 2 hexagonal faces and 6 rectangular faces.", net: "a net with 2 hexagons and 6 rectangles" },
        { name: "triangular prism", faces: 5, edges: 9, vertices: 6, clue: "It has 2 triangular faces joined by 3 rectangles.", net: "a net with 2 triangles and 3 rectangles" },
        { name: "square-based pyramid", faces: 5, edges: 8, vertices: 5, clue: "It has 1 square base and triangular faces meeting at a point.", net: "a net with 1 square and 4 triangles" },
        { name: "cylinder", faces: 3, edges: 2, vertices: 0, clue: "It has no vertices and one curved surface.", net: "a net with 1 rectangle and 2 circles" }
      ]
      : [
        { name: "cube", faces: 6, edges: 12, vertices: 8, clue: "It has 6 square faces.", net: "a net of 6 equal squares" },
        { name: "cuboid", faces: 6, edges: 12, vertices: 8, clue: "It has rectangular faces that are not all squares.", net: "a net made from rectangles" },
        { name: "triangular prism", faces: 5, edges: 9, vertices: 6, clue: "It has 2 triangular ends.", net: "a net with 2 triangles and 3 rectangles" },
        { name: "square-based pyramid", faces: 5, edges: 8, vertices: 5, clue: "It has a square base and 4 triangular faces.", net: "a net with 1 square and 4 triangles" },
        { name: "cylinder", faces: 3, edges: 2, vertices: 0, clue: "It has 2 circular faces.", net: "a net with 1 rectangle and 2 circles" }
      ];
  const identifies = [
    { question: "Name the solid shown.", answer: shapes[0].name, diagram: solidDiagram(shapes[0].name) },
    { question: "Which solid is shown?", answer: shapes[1].name, diagram: solidDiagram(shapes[1].name) },
    { question: "Which solid shown has 2 triangular faces?", answer: "triangular prism", diagram: solidDiagram("triangular prism") },
    { question: "Which solid shown has 1 curved surface?", answer: "cylinder", diagram: solidDiagram("cylinder") },
    { question: "Which solid shown has all faces square?", answer: "cube", diagram: solidDiagram("cube") },
    { question: "Which solid shown has a square base and triangular faces?", answer: "square-based pyramid", diagram: solidDiagram("square-based pyramid") },
    { question: "Which solid shown has rectangular faces but not all equal squares?", answer: "cuboid", diagram: solidDiagram("cuboid") },
    { question: "Which shown solid could roll?", answer: "cylinder", diagram: solidDiagram("cylinder") },
    { question: "Which shown solid has only flat faces and 5 faces altogether?", answer: "square-based pyramid", diagram: solidDiagram("square-based pyramid") },
    { question: "Which shown solid has more vertices than a cylinder but fewer than a cube?", answer: "square-based pyramid", diagram: solidDiagram("square-based pyramid") }
  ];
  const nets = [
    { question: "Which solid does this net make?", answer: shapes[0].name, diagram: netDiagram(shapes[0].name) },
    { question: "Name the solid made by this net.", answer: shapes[1].name, diagram: netDiagram(shapes[1].name) },
    { question: "Which 3D shape could this net fold into?", answer: shapes[2].name, diagram: netDiagram(shapes[2].name) },
    { question: "What is the name of the solid formed by this net?", answer: shapes[3].name, diagram: netDiagram(shapes[3].name) },
    { question: "Which solid is represented by this net?", answer: shapes[4].name, diagram: netDiagram(shapes[4].name) },
    { question: "Which solid could this net fold into if it has two circular faces?", answer: "cylinder", diagram: netDiagram("cylinder") },
    { question: "Which solid could this net fold into if all the side faces are rectangles and the ends are triangles?", answer: "triangular prism", diagram: netDiagram("triangular prism") },
    { question: "Which solid could this net fold into if every face is a square?", answer: "cube", diagram: netDiagram("cube") },
    { question: "True or false: this net could make a cuboid.", answer: "True", diagram: netDiagram("cuboid") },
    { question: "How many triangular faces would the solid made by this net have?", answer: "2", diagram: netDiagram("triangular prism") }
  ];
  const counts = [
    { question: "How many faces does the solid shown have?", answer: `${shapes[0].faces}`, diagram: solidDiagram(shapes[0].name) },
    { question: "How many edges does the solid shown have?", answer: `${shapes[1].edges}`, diagram: solidDiagram(shapes[1].name) },
    { question: "How many vertices does the solid shown have?", answer: `${shapes[2].vertices}`, diagram: solidDiagram(shapes[2].name) },
    { question: "Which solid shown has more edges: the cube or the square-based pyramid?", answer: "cube", diagram: comparisonDiagram("Cube", solidDiagram("cube"), "Square-based pyramid", solidDiagram("square-based pyramid")) },
    { question: "Which solid shown has fewer vertices: the cylinder or the triangular prism?", answer: "cylinder", diagram: comparisonDiagram("Cylinder", solidDiagram("cylinder"), "Triangular prism", solidDiagram("triangular prism")) },
    { question: "How many faces and vertices does the solid shown have altogether?", answer: `${shapes[3].faces + shapes[3].vertices}`, diagram: solidDiagram(shapes[3].name) },
    { question: "Complete the fact for the solid shown: it has 6 faces, 12 edges and ? vertices.", answer: "8", diagram: solidDiagram("cube") },
    { question: "Complete the fact for the solid shown: it has 5 faces, ? edges and 5 vertices.", answer: "8", diagram: solidDiagram("square-based pyramid") },
    { question: "Which property of the shown solid is 0: faces, edges or vertices?", answer: "vertices", diagram: solidDiagram("cylinder") },
    { question: "How many more edges than faces does the solid shown have?", answer: `${shapes[2].edges - shapes[2].faces}`, diagram: solidDiagram(shapes[2].name) }
  ];
  const truths = [
    { question: "True or false: the solid shown has 12 edges.", answer: "True", diagram: solidDiagram("cube") },
    { question: "True or false: the solid shown has vertices.", answer: "False", diagram: solidDiagram("cylinder") },
    { question: "True or false: the solid shown has 5 faces.", answer: "True", diagram: solidDiagram("square-based pyramid") },
    { question: "True or false: the solid shown has 2 triangular faces.", answer: "True", diagram: solidDiagram("triangular prism") },
    { question: "True or false: a cube and a cuboid always have different numbers of edges.", answer: "False" },
    { question: "True or false: the net shown can make a cylinder.", answer: "True", diagram: netDiagram("cylinder") },
    { question: "True or false: a cube has more vertices than a square-based pyramid.", answer: "True" },
    { question: "True or false: every prism has 1 circular face.", answer: "False" },
    { question: "True or false: the net shown can make a cuboid.", answer: "True", diagram: netDiagram("cuboid") },
    { question: "True or false: a triangular prism has 6 faces.", answer: "False" }
  ];
  return { identifies, nets, counts, truths };
}

function nets3DChange(index) { return index === 0 ? "Starting example." : "Only one solid property or net feature changes."; }

function generateSymmetryReflectionPropertiesTeaching(topic, variant, settings, difficultyKey) {
  const base = getSymmetryReflectionBase(difficultyKey);
  const key = variant.id === "reflection-properties" ? "reflections" : variant.id === "complete-the-shape" ? "completes" : variant.id === "true-false" ? "truths" : "lines";
  const prompts = {
    lines: [
      { question: base.lines[0].question, answer: base.lines[0].answer, change: "Model counting lines of symmetry.", diagram: base.lines[0].diagram },
      { question: base.lines[4].question, answer: base.lines[4].answer, change: "Now decide whether a shown shape has any symmetry.", diagram: base.lines[4].diagram },
      { question: base.lines[7].question, answer: base.lines[7].answer, change: "Now compare two shown shapes.", diagram: base.lines[7].diagram }
    ],
    reflections: [
      { question: base.reflections[0].question, answer: base.reflections[0].answer, change: "Model what stays the same in a reflection." },
      { question: base.reflections[1].question, answer: base.reflections[1].answer, change: "Only the property changes." },
      { question: base.reflections[2].question, answer: base.reflections[2].answer, change: "Only the shape changes." }
    ],
    completes: [
      { question: base.completes[0].question, answer: base.completes[0].answer, change: "Model how a reflected half completes a shape.", diagram: base.completes[0].diagram },
      { question: base.completes[1].question, answer: base.completes[1].answer, change: "Only the line of symmetry changes.", diagram: base.completes[1].diagram },
      { question: base.completes[2].question, answer: base.completes[2].answer, change: "Only the completed shape changes.", diagram: base.completes[2].diagram }
    ],
    truths: [
      { question: base.truths[0].question, answer: base.truths[0].answer, change: "Model checking a symmetry statement.", diagram: base.truths[0].diagram },
      { question: base.truths[1].question, answer: base.truths[1].answer, change: "Only the statement changes.", diagram: base.truths[1].diagram },
      { question: base.truths[2].question, answer: base.truths[2].answer, change: "Only the reflection property changes.", diagram: base.truths[2].diagram }
    ]
  };
  return createTeachingSequence(topic, variant, prompts[key]);
}

function generateSymmetryReflectionProperties(_topic, variant, settings, difficultyKey) {
  const base = getSymmetryReflectionBase(difficultyKey);
  if (variant.id === "reflection-properties") return { questions: base.reflections.map((item, index) => ({ question: item.question, answer: item.answer, change: symmetryReflectionChange(index), diagram: item.diagram })) };
  if (variant.id === "complete-the-shape") return { questions: base.completes.map((item, index) => ({ question: item.question, answer: item.answer, change: symmetryReflectionChange(index), diagram: item.diagram })) };
  if (variant.id === "true-false") return { questions: base.truths.map((item, index) => ({ question: item.question, answer: item.answer, change: symmetryReflectionChange(index), diagram: item.diagram })) };
  return { questions: base.lines.map((item, index) => ({ question: item.question, answer: item.answer, change: symmetryReflectionChange(index), diagram: item.diagram })) };
}

function getSymmetryReflectionBase(difficultyKey) {
  const shapes = difficultyKey === "easy"
    ? [["square", "4 lines of symmetry"], ["rectangle", "2 lines of symmetry"], ["triangle", "0 lines of symmetry"], ["pentagon", "0 lines of symmetry"], ["hexagon", "6 lines of symmetry"]]
    : difficultyKey === "hard"
      ? [["square", "4 lines of symmetry"], ["rectangle", "2 lines of symmetry"], ["kite", "1 line of symmetry"], ["parallelogram", "0 lines of symmetry"], ["octagon", "8 lines of symmetry"]]
      : [["square", "4 lines of symmetry"], ["rectangle", "2 lines of symmetry"], ["kite", "1 line of symmetry"], ["rhombus", "2 lines of symmetry"], ["hexagon", "6 lines of symmetry"]];
  const lines = [
    { question: "How many lines of symmetry does the shape shown have?", answer: shapes[0][1], diagram: createNamedShapeDiagram(shapes[0][0], { showSymmetry: true }) },
    { question: "How many symmetry lines does the shape shown have?", answer: shapes[1][1], diagram: createNamedShapeDiagram(shapes[1][0], { showSymmetry: true }) },
    { question: "State the number of lines of symmetry for the shape shown.", answer: shapes[2][1], diagram: createNamedShapeDiagram(shapes[2][0], { showSymmetry: true }) },
    { question: "Does the shape shown have at least one line of symmetry?", answer: shapes[3][1] === "0 lines of symmetry" ? "No" : "Yes", diagram: createNamedShapeDiagram(shapes[3][0], { showSymmetry: true }) },
    { question: "Does the shape shown have any lines of symmetry?", answer: shapes[2][1] === "0 lines of symmetry" ? "No" : "Yes", diagram: createNamedShapeDiagram(shapes[2][0], { showSymmetry: true }) },
    { question: "True or false: the shape shown has exactly 2 lines of symmetry.", answer: shapes[1][1] === "2 lines of symmetry" ? "True" : "False", diagram: createNamedShapeDiagram(shapes[1][0], { showSymmetry: true }) },
    { question: "True or false: the shape shown has more than 4 lines of symmetry.", answer: shapes[4][1] === "6 lines of symmetry" || shapes[4][1] === "8 lines of symmetry" ? "True" : "False", diagram: createNamedShapeDiagram(shapes[4][0], { showSymmetry: true }) },
    { question: "Which shown shape has more lines of symmetry: the square or the rectangle?", answer: "square", diagram: comparisonDiagram("Square", createNamedShapeDiagram("square", { showSymmetry: true }), "Rectangle", createNamedShapeDiagram("rectangle", { showSymmetry: true })) },
    { question: "Which shown shape has fewer lines of symmetry: the kite or the square?", answer: "kite", diagram: comparisonDiagram("Kite", createNamedShapeDiagram("kite", { showSymmetry: true }), "Square", createNamedShapeDiagram("square", { showSymmetry: true })) },
    { question: "Which shown shape has no lines of symmetry?", answer: difficultyKey === "easy" ? "triangle" : "parallelogram", diagram: createNamedShapeDiagram(difficultyKey === "easy" ? "triangle" : "parallelogram", { showSymmetry: true }) }
  ];
  const reflections = [
    { question: "Under reflection, does the shape shown keep the same size or change size?", answer: "size stays the same", diagram: reflectionDemoDiagram("shape-pair", "rectangle") },
    { question: "Under reflection, does orientation reverse or stay the same way round?", answer: "orientation reverses", diagram: reflectionDemoDiagram("shape-pair", "triangle") },
    { question: "Do corresponding points stay the same distance from the mirror line after reflection?", answer: "Yes", diagram: reflectionDemoDiagram("point-distance") },
    { question: "Do lengths stay the same under reflection?", answer: "Yes", diagram: reflectionDemoDiagram("shape-pair", "rectangle") },
    { question: "Do angles stay the same under reflection?", answer: "Yes", diagram: reflectionDemoDiagram("shape-pair", "triangle") },
    { question: "Does a reflection slide a shape or flip it?", answer: "flip it", diagram: reflectionDemoDiagram("shape-pair", "kite") },
    { question: "If a point is 3 squares from the mirror line, how far is its image from the mirror line?", answer: "3 squares", diagram: reflectionDemoDiagram("point-distance") },
    { question: "A reflection changes which side of the mirror line the shape is on. True or false?", answer: "True", diagram: reflectionDemoDiagram("shape-pair", "rectangle") },
    { question: "A reflection changes the area of a shape. True or false?", answer: "False", diagram: reflectionDemoDiagram("shape-pair", "square") },
    { question: "A reflected image is congruent to the original. True or false?", answer: "True", diagram: reflectionDemoDiagram("shape-pair", "rectangle") }
  ];
  const completes = [
    { question: "The left half of a square is shown. What full shape should be completed by reflection in the vertical mirror line?", answer: "square", diagram: symmetryCompleteDiagram("square", "vertical", "left") },
    { question: "The top half of a rectangle is shown. What full shape should be completed by reflection in the horizontal mirror line?", answer: "rectangle", diagram: symmetryCompleteDiagram("rectangle", "horizontal", "top") },
    { question: "The left half of a kite is shown. What full shape should appear after reflection in the vertical mirror line?", answer: "kite", diagram: symmetryCompleteDiagram("kite", "vertical", "left") },
    { question: "A half-shape is shown with a vertical mirror line. Which line should matching points line up across?", answer: "the mirror line", diagram: symmetryCompleteDiagram("square", "vertical", "left") },
    { question: "The top half of a rhombus is shown. What full shape should be formed after reflection in the horizontal mirror line?", answer: "rhombus", diagram: symmetryCompleteDiagram("rhombus", "horizontal", "top") },
    { question: "To complete the shown shape, should new points be placed the same distance from the mirror line? ", answer: "Yes", diagram: symmetryCompleteDiagram("rectangle", "vertical", "left") },
    { question: "The left half of a hexagon is shown. What full shape should appear after reflection?", answer: "hexagon", diagram: symmetryCompleteDiagram("hexagon", "vertical", "left") },
    { question: "If the missing half is not congruent to the shown half, is the completion correct?", answer: "No", diagram: symmetryCompleteDiagram("kite", "vertical", "left") },
    { question: "The bottom half of a rectangle is shown. What full shape should be completed by reflection in the horizontal mirror line?", answer: "rectangle", diagram: symmetryCompleteDiagram("rectangle", "horizontal", "bottom") },
    { question: "True or false: the completed shape should match the shown half exactly across the mirror line.", answer: "True", diagram: symmetryCompleteDiagram("square", "vertical", "left") }
  ];
  const truths = [
    { question: "True or false: the shape shown has 4 lines of symmetry.", answer: "False", diagram: createNamedShapeDiagram("rectangle", { showSymmetry: true }) },
    { question: "True or false: the first shown shape has more lines of symmetry than the second.", answer: "True", diagram: comparisonDiagram("Square", createNamedShapeDiagram("square", { showSymmetry: true }), "Rectangle", createNamedShapeDiagram("rectangle", { showSymmetry: true })) },
    { question: "True or false: reflection keeps lengths the same.", answer: "True" },
    { question: "True or false: reflected points can be different distances from the mirror line.", answer: "False" },
    { question: "True or false: the shape shown has a line of symmetry.", answer: "False", diagram: createNamedShapeDiagram("parallelogram", { showSymmetry: true }) },
    { question: "True or false: a reflected image is congruent to the original.", answer: "True" },
    { question: "True or false: the shape shown has 6 lines of symmetry.", answer: "True", diagram: createNamedShapeDiagram("hexagon", { showSymmetry: true }) },
    { question: "True or false: a point on the mirror line stays fixed under reflection.", answer: "True" },
    { question: "True or false: the shape shown can have exactly 1 line of symmetry.", answer: "True", diagram: createNamedShapeDiagram("kite", { showSymmetry: true }) },
    { question: "True or false: reflection changes the angle sizes in a shape.", answer: "False" }
  ];
  return { lines, reflections, completes, truths };
}

function symmetryReflectionChange(index) { return index === 0 ? "Starting example." : "Only one symmetry or reflection feature changes."; }

function generateStemLeafFrequencyTeaching(topic, variant, settings, difficultyKey) {
  const base = getStemLeafFrequencyBase(difficultyKey);
  const key = variant.id === "complete-the-diagram" ? "completes" : variant.id === "interpret-the-data" ? "interprets" : variant.id === "compare-distributions" ? "compares" : "reads";
  const prompts = {
    reads: [
      { question: base.reads[0].question, answer: base.reads[0].answer, change: "Model reading a value from the display.", diagram: base.reads[0].diagram },
      { question: base.reads[1].question, answer: base.reads[1].answer, change: "Only the reading focus changes.", diagram: base.reads[1].diagram },
      { question: base.reads[2].question, answer: base.reads[2].answer, change: "Only the diagram type changes.", diagram: base.reads[2].diagram }
    ],
    completes: [
      { question: base.completes[0].question, answer: base.completes[0].answer, change: "Model completing one missing part.", diagram: base.completes[0].diagram },
      { question: base.completes[1].question, answer: base.completes[1].answer, change: "Only the missing entry changes.", diagram: base.completes[1].diagram },
      { question: base.completes[2].question, answer: base.completes[2].answer, change: "Only the display changes.", diagram: base.completes[2].diagram }
    ],
    interprets: [
      { question: base.interprets[0].question, answer: base.interprets[0].answer, change: "Model interpreting what the data shows.", diagram: base.interprets[0].diagram },
      { question: base.interprets[1].question, answer: base.interprets[1].answer, change: "Only the interpretation focus changes.", diagram: base.interprets[1].diagram },
      { question: base.interprets[2].question, answer: base.interprets[2].answer, change: "Only the dataset changes.", diagram: base.interprets[2].diagram }
    ],
    compares: [
      { question: base.compares[0].question, answer: base.compares[0].answer, change: "Model comparing two simple distributions.", diagram: base.compares[0].diagram },
      { question: base.compares[1].question, answer: base.compares[1].answer, change: "Only the comparison feature changes.", diagram: base.compares[1].diagram },
      { question: base.compares[2].question, answer: base.compares[2].answer, change: "Only the distributions change.", diagram: base.compares[2].diagram }
    ]
  };
  return createTeachingSequence(topic, variant, prompts[key]);
}

function generateStemLeafFrequency(_topic, variant, settings, difficultyKey) {
  const base = getStemLeafFrequencyBase(difficultyKey);
  if (variant.id === "complete-the-diagram") return { questions: base.completes.map((item, index) => ({ question: item.question, answer: item.answer, change: stemLeafChange(index), diagram: item.diagram })) };
  if (variant.id === "interpret-the-data") return { questions: base.interprets.map((item, index) => ({ question: item.question, answer: item.answer, change: stemLeafChange(index), diagram: item.diagram })) };
  if (variant.id === "compare-distributions") return { questions: base.compares.map((item, index) => ({ question: item.question, answer: item.answer, change: stemLeafChange(index), diagram: item.diagram })) };
  return { questions: base.reads.map((item, index) => ({ question: item.question, answer: item.answer, change: stemLeafChange(index), diagram: item.diagram })) };
}

function getStemLeafFrequencyBase(difficultyKey) {
  const values = difficultyKey === "easy"
    ? [12, 14, 14, 15, 18, 21, 22, 24, 24, 27]
    : difficultyKey === "hard"
      ? [31, 33, 35, 35, 36, 41, 42, 44, 47, 49]
      : [18, 19, 21, 21, 24, 27, 28, 31, 33, 35];
  const secondValues = difficultyKey === "easy"
    ? [11, 13, 13, 16, 16, 19, 20, 20, 23, 25]
    : difficultyKey === "hard"
      ? [30, 32, 34, 36, 38, 40, 43, 45, 45, 48]
      : [17, 18, 20, 22, 25, 26, 29, 30, 32, 34];
  const freqData = difficultyKey === "easy"
    ? [["0-4", 3], ["5-9", 5], ["10-14", 4], ["15-19", 2]]
    : difficultyKey === "hard"
      ? [["20-29", 4], ["30-39", 7], ["40-49", 5], ["50-59", 3]]
      : [["10-19", 4], ["20-29", 6], ["30-39", 5], ["40-49", 2]];
  const stemLeaf = stemLeafText(values);
  const stemLeafSecond = stemLeafText(secondValues);
  const stemLeafRows = stemLeafRowsFromValues(values);
  const stemLeafSecondRows = stemLeafRowsFromValues(secondValues);
  const totalFreq = sum(freqData.map(([, value]) => value));
  const reads = [
    { question: "What is the smallest value shown?", answer: `${Math.min(...values)}`, diagram: stemLeafDiagram(stemLeafRows, "Key: 2 | 4 means 24") },
    { question: "What is the largest value shown?", answer: `${Math.max(...values)}`, diagram: stemLeafDiagram(stemLeafRows, "Key: 2 | 4 means 24") },
    { question: "How many values are there altogether?", answer: `${totalFreq}`, diagram: frequencyTableDiagram(freqData.map(([label, value]) => ({ label, value }))) },
    { question: `What is the frequency for ${freqData[1][0]}?`, answer: `${freqData[1][1]}`, diagram: frequencyTableDiagram(freqData.map(([label, value]) => ({ label, value }))) },
    { question: "How many values are in the 20s or 30s?", answer: `${values.filter((value) => value >= 20 && value < 40).length}`, diagram: stemLeafDiagram(stemLeafRows, "Key: 2 | 4 means 24") },
    { question: "Which group has the greatest frequency?", answer: `${freqData.slice().sort((a, b) => b[1] - a[1])[0][0]}`, diagram: frequencyTableDiagram(freqData.map(([label, value]) => ({ label, value }))) },
    { question: "How many values are repeated?", answer: `${countRepeatedValues(values)}`, diagram: stemLeafDiagram(stemLeafRows, "Key: 2 | 4 means 24") },
    { question: "Which group has the smallest frequency?", answer: `${freqData.slice().sort((a, b) => a[1] - b[1])[0][0]}`, diagram: frequencyTableDiagram(freqData.map(([label, value]) => ({ label, value }))) },
    { question: `How many values are greater than ${values[4]}?`, answer: `${values.filter((value) => value > values[4]).length}`, diagram: stemLeafDiagram(stemLeafRows, "Key: 2 | 4 means 24") },
    { question: "What is the combined frequency of the first two groups?", answer: `${freqData[0][1] + freqData[1][1]}`, diagram: frequencyTableDiagram(freqData.map(([label, value]) => ({ label, value }))) }
  ];
  const completes = [
    { question: "Complete the missing leaf shown as ?", answer: `${values[2] % 10}`, diagram: stemLeafDiagram(stemLeafRowsWithMissingValue(values, values[2], "?"), "Key: 2 | 4 means 24") },
    { question: `Complete the missing frequency so the total is ${totalFreq}.`, answer: `${freqData[1][1]}`, diagram: frequencyTableDiagram(freqData.map(([label, value], index) => ({ label, value: index === 1 ? "?" : value }))) },
    { question: "Complete the missing stem shown as ?.", answer: `${Math.floor(values[0] / 10)}`, diagram: stemLeafDiagram(stemLeafRowsWithMissingStem(values, Math.floor(values[0] / 10)), "Key: 2 | 4 means 24") },
    { question: `A frequency table has total ${totalFreq}. What is the fourth frequency?`, answer: `${freqData[3][1]}`, diagram: frequencyTableDiagram([{ label: freqData[0][0], value: freqData[0][1] }, { label: freqData[1][0], value: freqData[1][1] }, { label: freqData[2][0], value: freqData[2][1] }, { label: freqData[3][0], value: "?" }]) },
    { question: `Complete the leaf so the value becomes ${values[5]}.`, answer: `${values[5] % 10}`, diagram: stemLeafDiagram([{ stem: Math.floor(values[5] / 10), leaves: ["?"] }], "Key: 2 | 4 means 24") },
    { question: `Complete the missing frequency for ${freqData[2][0]}.`, answer: `${freqData[2][1]}`, diagram: frequencyTableDiagram([{ label: freqData[0][0], value: freqData[0][1] }, { label: freqData[1][0], value: freqData[1][1] }, { label: freqData[2][0], value: "?" }, { label: freqData[3][0], value: freqData[3][1] }]) },
    { question: `Complete the final leaf so the largest value is ${Math.max(...values)}.`, answer: `${Math.max(...values) % 10}`, diagram: stemLeafDiagram([{ stem: Math.floor(Math.max(...values) / 10), leaves: ["?"] }], "Key: 2 | 4 means 24") },
    { question: "What is the last frequency?", answer: `${freqData[3][1]}`, diagram: frequencyTableDiagram([{ label: freqData[0][0], value: freqData[0][1] }, { label: freqData[1][0], value: freqData[1][1] }, { label: freqData[2][0], value: freqData[2][1] }, { label: freqData[3][0], value: "?" }]) },
    { question: `Complete the missing frequency for ${freqData[1][0]}.`, answer: `${freqData[1][1]}`, diagram: frequencyTableDiagram([{ label: freqData[0][0], value: freqData[0][1] }, { label: freqData[1][0], value: "?" }, { label: freqData[2][0], value: freqData[2][1] }, { label: freqData[3][0], value: freqData[3][1] }]) },
    { question: `Complete the repeated leaf for the duplicated value ${values[1]}.`, answer: `${values[1] % 10}`, diagram: stemLeafDiagram([{ stem: Math.floor(values[1] / 10), leaves: ["?", "?"] }], "Key: 2 | 4 means 24") }
  ];
  const interprets = [
    { question: "What is the range of the data shown?", answer: `${Math.max(...values) - Math.min(...values)}`, diagram: stemLeafDiagram(stemLeafRows, "Key: 2 | 4 means 24") },
    { question: "Which interval is the modal class?", answer: `${freqData.slice().sort((a, b) => b[1] - a[1])[0][0]}`, diagram: frequencyTableDiagram(freqData.map(([label, value]) => ({ label, value }))) },
    { question: "What is the median value?", answer: `${medianFromSorted(values)}`, diagram: stemLeafDiagram(stemLeafRows, "Key: 2 | 4 means 24") },
    { question: "Which group contains the most values?", answer: `${freqData.slice().sort((a, b) => b[1] - a[1])[0][0]}`, diagram: frequencyTableDiagram(freqData.map(([label, value]) => ({ label, value }))) },
    { question: "What does the repeated leaf tell you?", answer: "that at least one value appears more than once", diagram: stemLeafDiagram(stemLeafRows, "Key: 2 | 4 means 24") },
    { question: `Are there more values below ${freqData[2][0].split("-")[0]} or in ${freqData[2][0]}?`, answer: `${freqData[0][1] + freqData[1][1] > freqData[2][1] ? `below ${freqData[2][0].split("-")[0]}` : freqData[2][0]}`, diagram: frequencyTableDiagram(freqData.map(([label, value]) => ({ label, value }))) },
    { question: "How many values are above the median?", answer: `${values.filter((value) => value > medianFromSorted(values)).length}`, diagram: stemLeafDiagram(stemLeafRows, "Key: 2 | 4 means 24") },
    { question: "Which is greater: the first two groups together or the last two groups together?", answer: `${freqData[0][1] + freqData[1][1] > freqData[2][1] + freqData[3][1] ? "the first two groups together" : "the last two groups together"}`, diagram: frequencyTableDiagram(freqData.map(([label, value]) => ({ label, value }))) },
    { question: "How many values are in the highest stem?", answer: `${values.filter((value) => Math.floor(value / 10) === Math.floor(Math.max(...values) / 10)).length}`, diagram: stemLeafDiagram(stemLeafRows, "Key: 2 | 4 means 24") },
    { question: "What does the table show clearly?", answer: "how many values fall in each interval", diagram: frequencyTableDiagram(freqData.map(([label, value]) => ({ label, value }))) }
  ];
  const compares = [
    { question: "Which group has the greater maximum value?", answer: `${Math.max(...values) > Math.max(...secondValues) ? "Group A" : "Group B"}`, diagram: comparisonDiagram("Group A", stemLeafDiagram(stemLeafRows, "Key: 2 | 4 means 24"), "Group B", stemLeafDiagram(stemLeafSecondRows, "Key: 2 | 4 means 24")) },
    { question: "Which group has the smaller minimum value?", answer: `${Math.min(...values) < Math.min(...secondValues) ? "Group A" : "Group B"}`, diagram: comparisonDiagram("Group A", stemLeafDiagram(stemLeafRows, "Key: 2 | 4 means 24"), "Group B", stemLeafDiagram(stemLeafSecondRows, "Key: 2 | 4 means 24")) },
    { question: "Which group has the greater range?", answer: `${Math.max(...values) - Math.min(...values) > Math.max(...secondValues) - Math.min(...secondValues) ? "Group A" : "Group B"}`, diagram: comparisonDiagram("Group A", stemLeafDiagram(stemLeafRows, "Key: 2 | 4 means 24"), "Group B", stemLeafDiagram(stemLeafSecondRows, "Key: 2 | 4 means 24")) },
    { question: "Which group has the greater median?", answer: `${medianFromSorted(values) > medianFromSorted(secondValues) ? "Group A" : "Group B"}`, diagram: comparisonDiagram("Group A", stemLeafDiagram(stemLeafRows, "Key: 2 | 4 means 24"), "Group B", stemLeafDiagram(stemLeafSecondRows, "Key: 2 | 4 means 24")) },
    { question: "Which group looks more spread out?", answer: `${Math.max(...values) - Math.min(...values) > Math.max(...secondValues) - Math.min(...secondValues) ? "Group A" : "Group B"}`, diagram: comparisonDiagram("Group A", stemLeafDiagram(stemLeafRows, "Key: 2 | 4 means 24"), "Group B", stemLeafDiagram(stemLeafSecondRows, "Key: 2 | 4 means 24")) },
    { question: "Which group has more repeated values?", answer: `${countRepeatedValues(values) > countRepeatedValues(secondValues) ? "Group A" : "Group B"}`, diagram: comparisonDiagram("Group A", stemLeafDiagram(stemLeafRows, "Key: 2 | 4 means 24"), "Group B", stemLeafDiagram(stemLeafSecondRows, "Key: 2 | 4 means 24")) },
    { question: "Which group has more values in its most common stem?", answer: `${mostCommonStemCount(values) >= mostCommonStemCount(secondValues) ? "Group A" : "Group B"}`, diagram: comparisonDiagram("Group A", stemLeafDiagram(stemLeafRows, "Key: 2 | 4 means 24"), "Group B", stemLeafDiagram(stemLeafSecondRows, "Key: 2 | 4 means 24")) },
    { question: "Which group has the higher typical value?", answer: `${medianFromSorted(values) > medianFromSorted(secondValues) ? "Group A" : "Group B"}`, diagram: comparisonDiagram("Group A", stemLeafDiagram(stemLeafRows, "Key: 2 | 4 means 24"), "Group B", stemLeafDiagram(stemLeafSecondRows, "Key: 2 | 4 means 24")) },
    { question: "Which group has more values above 30?", answer: `${values.filter((value) => value > 30).length > secondValues.filter((value) => value > 30).length ? "Group A" : "Group B"}`, diagram: comparisonDiagram("Group A", stemLeafDiagram(stemLeafRows, "Key: 2 | 4 means 24"), "Group B", stemLeafDiagram(stemLeafSecondRows, "Key: 2 | 4 means 24")) },
    { question: "Which group is more concentrated in one part of the display?", answer: `${mostCommonStemCount(values) >= mostCommonStemCount(secondValues) ? "Group A" : "Group B"}`, diagram: comparisonDiagram("Group A", stemLeafDiagram(stemLeafRows, "Key: 2 | 4 means 24"), "Group B", stemLeafDiagram(stemLeafSecondRows, "Key: 2 | 4 means 24")) }
  ];
  return { reads, completes, interprets, compares };
}

function stemLeafText(values) {
  const stems = values.reduce((groups, value) => {
    const stem = Math.floor(value / 10);
    const leaf = value % 10;
    if (!groups[stem]) groups[stem] = [];
    groups[stem].push(leaf);
    return groups;
  }, {});
  return Object.entries(stems).sort((a, b) => Number.parseInt(a[0], 10) - Number.parseInt(b[0], 10)).map(([stem, leaves]) => `${stem} | ${leaves.sort((a, b) => a - b).join(" ")}`).join("\n");
}

function stemLeafRowsFromValues(values) {
  const stems = values.reduce((groups, value) => {
    const stem = Math.floor(value / 10);
    const leaf = value % 10;
    if (!groups[stem]) groups[stem] = [];
    groups[stem].push(leaf);
    return groups;
  }, {});
  return Object.entries(stems).sort((a, b) => Number.parseInt(a[0], 10) - Number.parseInt(b[0], 10)).map(([stem, leaves]) => ({ stem, leaves: leaves.sort((a, b) => a - b).map(String) }));
}

function stemLeafRowsWithMissingValue(values, targetValue, marker) {
  return stemLeafRowsFromValues(values).map((row) => ({
    stem: row.stem,
    leaves: row.leaves.map((leaf) => Number.parseInt(row.stem, 10) === Math.floor(targetValue / 10) && Number.parseInt(leaf, 10) === targetValue % 10 ? marker : leaf)
  }));
}

function stemLeafRowsWithMissingStem(values, targetStem) {
  return stemLeafRowsFromValues(values).map((row) => ({
    stem: Number.parseInt(row.stem, 10) === targetStem ? "?" : row.stem,
    leaves: row.leaves
  }));
}

function countRepeatedValues(values) {
  const counts = values.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
  return Object.values(counts).filter((count) => count > 1).length;
}

function medianFromSorted(values) {
  const sorted = values.slice().sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
}

function mostCommonStemCount(values) {
  const counts = values.reduce((acc, value) => {
    const stem = Math.floor(value / 10);
    acc[stem] = (acc[stem] || 0) + 1;
    return acc;
  }, {});
  return Math.max(...Object.values(counts));
}

function stemLeafChange(index) { return index === 0 ? "Starting example." : "Only one data-reading or interpretation feature changes."; }

function generateRelativeFrequencyIntroTeaching(topic, variant, settings, difficultyKey) {
  const base = getRelativeFrequencyBase(difficultyKey);
  const key = variant.id === "compare-experiments" ? "compares" : variant.id === "missing-value" ? "missings" : variant.id === "predict-and-justify" ? "predicts" : "calculates";
  const prompts = {
    calculates: [
      { question: base.calculates[0].question, answer: base.calculates[0].answer, change: "Model calculating relative frequency.", diagram: buildRelativeFrequencyDiagram(base.calculates[0]) },
      { question: base.calculates[1].question, answer: base.calculates[1].answer, change: "Only the totals change.", diagram: buildRelativeFrequencyDiagram(base.calculates[1]) },
      { question: base.calculates[2].question, answer: base.calculates[2].answer, change: "Only the representation changes.", diagram: buildRelativeFrequencyDiagram(base.calculates[2]) }
    ],
    compares: [
      { question: base.compares[0].question, answer: base.compares[0].answer, change: "Model comparing two experiments.", diagram: buildRelativeFrequencyDiagram(base.compares[0]) },
      { question: base.compares[1].question, answer: base.compares[1].answer, change: "Only the event changes.", diagram: buildRelativeFrequencyDiagram(base.compares[1]) },
      { question: base.compares[2].question, answer: base.compares[2].answer, change: "Only the better estimate changes.", diagram: buildRelativeFrequencyDiagram(base.compares[2]) }
    ],
    missings: [
      { question: base.missings[0].question, answer: base.missings[0].answer, change: "Model finding a missing value from a relative frequency.", diagram: buildRelativeFrequencyDiagram(base.missings[0]) },
      { question: base.missings[1].question, answer: base.missings[1].answer, change: "Only the missing quantity changes.", diagram: buildRelativeFrequencyDiagram(base.missings[1]) },
      { question: base.missings[2].question, answer: base.missings[2].answer, change: "Only the numbers change.", diagram: buildRelativeFrequencyDiagram(base.missings[2]) }
    ],
    predicts: [
      { question: base.predicts[0].question, answer: base.predicts[0].answer, change: "Model predicting from experimental results.", diagram: buildRelativeFrequencyDiagram(base.predicts[0]) },
      { question: base.predicts[1].question, answer: base.predicts[1].answer, change: "Only the scale of prediction changes.", diagram: buildRelativeFrequencyDiagram(base.predicts[1]) },
      { question: base.predicts[2].question, answer: base.predicts[2].answer, change: "Only the justification focus changes.", diagram: buildRelativeFrequencyDiagram(base.predicts[2]) }
    ]
  };
  return createTeachingSequence(topic, variant, prompts[key]);
}

function generateRelativeFrequencyIntro(_topic, variant, settings, difficultyKey) {
  const base = getRelativeFrequencyBase(difficultyKey);
  if (variant.id === "compare-experiments") return { questions: base.compares.map((item, index) => ({ question: item.question, answer: item.answer, change: relativeFrequencyChange(index), diagram: buildRelativeFrequencyDiagram(item) })) };
  if (variant.id === "missing-value") return { questions: base.missings.map((item, index) => ({ question: item.question, answer: item.answer, change: relativeFrequencyChange(index), diagram: buildRelativeFrequencyDiagram(item) })) };
  if (variant.id === "predict-and-justify") return { questions: base.predicts.map((item, index) => ({ question: item.question, answer: item.answer, change: relativeFrequencyChange(index), diagram: buildRelativeFrequencyDiagram(item) })) };
  return { questions: base.calculates.map((item, index) => ({ question: item.question, answer: item.answer, change: relativeFrequencyChange(index), diagram: buildRelativeFrequencyDiagram(item) })) };
}

function getRelativeFrequencyBase(difficultyKey) {
  const exps = difficultyKey === "easy"
    ? [[8, 20], [12, 30], [15, 40], [9, 25], [18, 40], [7, 20], [16, 40], [5, 10], [14, 35], [6, 15]]
    : difficultyKey === "hard"
      ? [[23, 50], [31, 60], [18, 40], [27, 45], [42, 70], [16, 32], [29, 55], [37, 80], [21, 48], [33, 75]]
      : [[11, 25], [18, 40], [14, 30], [21, 50], [16, 35], [19, 40], [9, 20], [24, 60], [27, 45], [22, 55]];
  const rfText = (successes, trials) => `${successes}/${trials}`;
  const calculates = exps.map(([successes, trials], index) => ({
    question: index % 2 === 0 ? `A spinner lands on blue ${successes} times in ${trials} trials. What is the relative frequency of blue?` : `In ${trials} trials, an event happens ${successes} times. Write the relative frequency.`,
    answer: rfText(successes, trials),
    successes,
    trials
  }));
  const compares = exps.map(([successes, trials], index) => {
    const [otherSuccesses, otherTrials] = exps[(index + 1) % exps.length];
    return {
      question: `Which experiment has the greater relative frequency: A = ${successes}/${trials} or B = ${otherSuccesses}/${otherTrials}?`,
      answer: successes / trials >= otherSuccesses / otherTrials ? "A" : "B",
      first: { successes, trials },
      second: { successes: otherSuccesses, trials: otherTrials }
    };
  });
  const missings = exps.map(([successes, trials], index) => ({
    question: index % 2 === 0 ? `An event has relative frequency ${rfText(successes, trials)} after ${trials} trials. How many successes were there?` : `An event happens ${successes} times and has relative frequency ${rfText(successes, trials)}. How many trials were there?`,
    answer: index % 2 === 0 ? `${successes}` : `${trials}`,
    successes,
    trials,
    missingType: index % 2 === 0 ? "successes" : "trials"
  }));
  const predicts = exps.map(([successes, trials], index) => {
    const nextTrials = difficultyKey === "easy" ? 10 : difficultyKey === "hard" ? 100 : 50;
    const estimate = Math.round((successes / trials) * nextTrials);
    return {
      question: index % 2 === 0 ? `A spinner lands on red ${successes} times in ${trials} trials. About how many reds would you expect in the next ${nextTrials} trials?` : `A coin lands on heads ${successes} times in ${trials} trials. Use the relative frequency to make a prediction for the next ${nextTrials} trials.`,
      answer: `about ${estimate}`,
      successes,
      trials,
      nextTrials
    };
  });
  return { calculates, compares, missings, predicts };
}

function relativeFrequencyChange(index) { return index === 0 ? "Starting example." : "Only the trials, successes, or reasoning demand changes."; }

function buildRelativeFrequencyDiagram(item) {
  if (item.first && item.second) {
    return comparisonDiagram(
      "Experiment A",
      frequencyTableDiagram([
        { label: "Successes", value: item.first.successes },
        { label: "Trials", value: item.first.trials }
      ], "Experiment A"),
      "Experiment B",
      frequencyTableDiagram([
        { label: "Successes", value: item.second.successes },
        { label: "Trials", value: item.second.trials }
      ], "Experiment B")
    );
  }

  if (typeof item.successes === "number" && typeof item.trials === "number") {
    const failures = item.trials - item.successes;
    const rows = [
      { label: "Successes", value: item.missingType === "successes" ? "?" : item.successes },
      { label: "Failures", value: failures },
      { label: "Trials", value: item.missingType === "trials" ? "?" : item.trials }
    ];
    if (typeof item.nextTrials === "number") {
      rows.push({ label: "Next trials", value: item.nextTrials });
    }
    return frequencyTableDiagram(rows, "Experimental Results");
  }

  return null;
}

function generateEquivalentFractions(_topic, variant, settings, difficultyKey) {
  if (variant.id === "build-a-family") {
    return generateEquivalentFractionsFamily(settings, difficultyKey);
  }

  if (variant.id === "compare-and-complete") {
    return generateEquivalentFractionsCompare(settings, difficultyKey);
  }

  if (variant.id === "error-spotting") {
    return generateEquivalentFractionsErrors(settings, difficultyKey);
  }

  return generateEquivalentFractionsMissing(settings, difficultyKey);
}

function generateEquivalentFractionsMissing(settings, difficultyKey) {
  const base = getEquivalentFractionBase(settings, difficultyKey);
  const steps = [
    { n: base.n, d: base.d, f: base.factors[0], missing: "numerator", mode: "direct", change: "Starting example." },
    { n: base.n, d: base.d, f: base.factors[1], missing: "numerator", mode: "direct", change: "Only the scale factor changes." },
    { n: base.n, d: base.d, f: base.factors[1], missing: "denominator", mode: "direct", change: "Only the missing part moves." },
    { n: base.n + 1, d: base.d + 1, f: base.factors[1], missing: "factor", mode: "factor", change: "Only the unknown changes from a number in the fraction to the scale factor." },
    { n: base.n + 1, d: base.d + 1, f: base.factors[2], missing: "numerator", mode: "sentence", change: "Only the scale factor changes again." },
    { n: base.n + 1, d: base.d + 1, f: base.factors[2], missing: "denominator", mode: "sentence", change: "Only the missing part moves again." },
    { n: base.n + 2, d: base.d + 2, f: base.factors[2], missing: "factor", mode: "factor", change: "Only the original fraction changes." },
    { n: base.n + 2, d: base.d + 2, f: base.factors[3], missing: "numerator", mode: "box", change: "Only the representation changes to a box." },
    { n: base.n + 2, d: base.d + 2, f: base.factors[4], missing: "denominator", mode: "box", change: "Only the scale factor changes with the same representation." },
    { n: base.n + 3, d: base.d + 3, f: base.factors[5], missing: "factor", mode: "factor", change: "Final step keeps the same idea but increases the numbers and asks for the factor again." }
  ];

  return {
    questions: steps.map((step) => buildEquivalentFractionQuestion(step))
  };
}

function generateEquivalentFractionsFamily(settings, difficultyKey) {
  const base = getEquivalentFractionBase(settings, difficultyKey);
  const sequence = [
    {
      question: `Start with ${base.n}/${base.d}. Write the equivalent fraction when both parts are multiplied by ${base.factors[0]}.`,
      answer: `${base.n * base.factors[0]}/${base.d * base.factors[0]}`,
      change: "Starting example."
    },
    {
      question: `Use the same starting fraction ${base.n}/${base.d}. Now multiply both parts by ${base.factors[1]}.`,
      answer: `${base.n * base.factors[1]}/${base.d * base.factors[1]}`,
      change: "Only the scale factor changes."
    },
    {
      question: `Keep the same starting fraction ${base.n}/${base.d}. Write two equivalent fractions using factors ${base.factors[0]} and ${base.factors[1]}.`,
      answer: `${base.n * base.factors[0]}/${base.d * base.factors[0]} and ${base.n * base.factors[1]}/${base.d * base.factors[1]}`,
      change: "Only the number of outputs changes."
    },
    {
      question: `Start with ${base.n + 1}/${base.d + 1}. Write the equivalent fraction when both parts are multiplied by ${base.factors[1]}.`,
      answer: `${(base.n + 1) * base.factors[1]}/${(base.d + 1) * base.factors[1]}`,
      change: "Only the starting fraction changes."
    },
    {
      question: `Start with ${base.n + 1}/${base.d + 1}. Write a family of 3 equivalent fractions using factors 2, 3 and 4.`,
      answer: `${(base.n + 1) * 2}/${(base.d + 1) * 2}, ${(base.n + 1) * 3}/${(base.d + 1) * 3}, ${(base.n + 1) * 4}/${(base.d + 1) * 4}`,
      change: "Only the number of generated family members changes."
    },
    {
      question: `Complete the family for ${base.n + 2}/${base.d + 2}: ${base.n + 2}/${base.d + 2}, ${(base.n + 2) * 2}/${(base.d + 2) * 2}, ?/${(base.d + 2) * 3}`,
      answer: `${(base.n + 2) * 3}`,
      change: "Only one member of the family becomes incomplete."
    },
    {
      question: `Which does not belong in the family of ${base.n + 2}/${base.d + 2}: ${(base.n + 2) * 2}/${(base.d + 2) * 2}, ${(base.n + 2) * 3}/${(base.d + 2) * 3}, ${(base.n + 2) * 3 + 1}/${(base.d + 2) * 3}?`,
      answer: `${(base.n + 2) * 3 + 1}/${(base.d + 2) * 3}`,
      change: "Only a non-example is introduced."
    },
    {
      question: `Write the next equivalent fraction in the family: ${base.n + 3}/${base.d + 3}, ${(base.n + 3) * 2}/${(base.d + 3) * 2}, ${(base.n + 3) * 3}/${(base.d + 3) * 3}, ...`,
      answer: `${(base.n + 3) * 4}/${(base.d + 3) * 4}`,
      change: "Only the prompt changes to sequence continuation."
    },
    {
      question: `Fill in the missing family member: ${base.n + 3}/${base.d + 3}, ?/${(base.d + 3) * 4}, ${(base.n + 3) * 5}/${(base.d + 3) * 5}`,
      answer: `${(base.n + 3) * 4}`,
      change: "Only one internal member becomes missing."
    },
    {
      question: `Explain the rule for building any equivalent fraction family from ${base.n + 3}/${base.d + 3}.`,
      answer: "Multiply the numerator and denominator by the same factor.",
      change: "Final step changes from generating examples to stating the general rule."
    }
  ];

  return { questions: sequence };
}

function generateEquivalentFractionsCompare(settings, difficultyKey) {
  const base = getEquivalentFractionBase(settings, difficultyKey);
  const items = [
    { question: `Are these equivalent? ${base.n}/${base.d} and ${base.n * base.factors[0]}/${base.d * base.factors[0]}`, answer: "Yes", change: "Starting example." },
    { question: `Are these equivalent? ${base.n}/${base.d} and ${base.n * base.factors[1]}/${base.d * base.factors[1]}`, answer: "Yes", change: "Only the scale factor changes." },
    { question: `Complete: ${base.n}/${base.d} = ${base.n * base.factors[1]}/?`, answer: `${base.d * base.factors[1]}`, change: "Only the question changes from comparison to completion." },
    { question: `True or false: ${base.n + 1}/${base.d + 1} = ${(base.n + 1) * base.factors[1]}/${(base.d + 1) * base.factors[1]}`, answer: "True", change: "Only the base fraction changes." },
    { question: `True or false: ${base.n + 1}/${base.d + 1} = ${(base.n + 1) * base.factors[1] + 1}/${(base.d + 1) * base.factors[1]}`, answer: "False", change: "Only one numerator is altered." },
    { question: `Which is equivalent to ${base.n + 2}/${base.d + 2}: ${(base.n + 2) * base.factors[2]}/${(base.d + 2) * base.factors[2]} or ${(base.n + 2) * base.factors[2]}/${(base.d + 2) * base.factors[2] + 1}?`, answer: `${(base.n + 2) * base.factors[2]}/${(base.d + 2) * base.factors[2]}` , change: "Only a distractor is introduced." },
    { question: `Fill the box so the fractions are equivalent: [ ]/${(base.d + 2) * base.factors[3]} = ${base.n + 2}/${base.d + 2}`, answer: `${(base.n + 2) * base.factors[3]}`, change: "Only the representation changes to a box." },
    { question: `Which statement is correct? A) Equivalent fractions always have the same numerator. B) Equivalent fractions keep the same value because both parts are scaled equally.`, answer: "B", change: "Only the prompt changes to conceptual comparison." },
    { question: `A pupil says ${base.n + 3}/${base.d + 3} and ${(base.n + 3) * base.factors[4]}/${(base.d + 3) * base.factors[4]} are not equivalent because the numbers are different. Are they correct?`, answer: "No", change: "Only the reasoning demand increases." },
    { question: `Complete and justify: ${base.n + 3}/${base.d + 3} = ${(base.n + 3) * base.factors[5]}/? because both parts were multiplied by ?`, answer: `${(base.d + 3) * base.factors[5]}, then ${base.factors[5]}`, change: "Final step combines completion and explanation." }
  ];

  return { questions: items };
}

function generateEquivalentFractionsErrors(settings, difficultyKey) {
  const base = getEquivalentFractionBase(settings, difficultyKey);
  const items = [
    { question: `A pupil writes ${base.n}/${base.d} = ${base.n + 1}/${base.d + 1}. Is the method correct?`, answer: "No", change: "Starting example." },
    { question: `Fix the mistake: ${base.n}/${base.d} = ${base.n + 1}/${base.d + 1}. Write a correct equivalent fraction.`, answer: `${base.n * 2}/${base.d * 2}`, change: "Only the task changes from spotting to repairing." },
    { question: `A pupil writes ${base.n + 1}/${base.d + 1} = ${(base.n + 1) * 2}/${(base.d + 1) * 2}. Is the method correct?`, answer: "Yes", change: "Only the method becomes valid." },
    { question: `A pupil says "I can make an equivalent fraction by multiplying the numerator by ${base.factors[1]} and adding ${base.factors[1]} to the denominator." Is that correct?`, answer: "No", change: "Only the kind of error changes." },
    { question: `Repair this: ${base.n + 1}/${base.d + 1} = ${(base.n + 1) * base.factors[1]}/${base.d + 1 + base.factors[1]}.`, answer: `${(base.n + 1) * base.factors[1]}/${(base.d + 1) * base.factors[1]}`, change: "Only the denominator error is repaired." },
    { question: `A pupil writes ${base.n + 2}/${base.d + 2} = ${(base.n + 2) * base.factors[2]}/${(base.d + 2) * base.factors[2]}. Explain why this works.`, answer: "Because the numerator and denominator were multiplied by the same factor.", change: "Only the task shifts from repair to explanation." },
    { question: `Which pupil is correct? A) "Equivalent fractions always look similar." B) "Equivalent fractions can look different but represent the same value."`, answer: "B", change: "Only the format changes to pupil comparison." },
    { question: `A pupil writes ${base.n + 2}/${base.d + 2} = ${(base.n + 2) * base.factors[3] + 1}/${(base.d + 2) * base.factors[3]}. What is the smallest change needed to make it correct?`, answer: `Change the numerator to ${(base.n + 2) * base.factors[3]}.`, change: "Only one part of the incorrect answer changes." },
    { question: `True or false: If only one part of a fraction is scaled, the fractions are still equivalent.`, answer: "False", change: "Only the prompt changes to a general rule check." },
    { question: `Final check: write one incorrect and one correct equivalent fraction statement for ${base.n + 3}/${base.d + 3}.`, answer: `Incorrect example: ${base.n + 3}/${base.d + 3} = ${base.n + 4}/${base.d + 4}. Correct example: ${base.n + 3}/${base.d + 3} = ${(base.n + 3) * 2}/${(base.d + 3) * 2}.`, change: "Final step asks pupils to generate both an error and a correction." }
  ];

  return { questions: items };
}

function buildEquivalentFractionQuestion(step) {
  const targetNumerator = step.n * step.f;
  const targetDenominator = step.d * step.f;

  if (step.mode === "factor") {
    return {
      question: `Complete: ${step.n}/${step.d} = ${targetNumerator}/${targetDenominator}. The scale factor is ?`,
      answer: `${step.f}`,
      change: step.change
    };
  }

  if (step.mode === "sentence" && step.missing === "numerator") {
    return {
      question: `Complete the equivalent fraction: ${step.n}/${step.d} = ?/${targetDenominator}`,
      answer: `${step.n}/${step.d} = ${targetNumerator}/${targetDenominator}`,
      change: step.change
    };
  }

  if (step.mode === "sentence" && step.missing === "denominator") {
    return {
      question: `Complete the equivalent fraction: ${step.n}/${step.d} = ${targetNumerator}/?`,
      answer: `${step.n}/${step.d} = ${targetNumerator}/${targetDenominator}`,
      change: step.change
    };
  }

  if (step.mode === "box" && step.missing === "numerator") {
    return {
      question: `Fill the box: [ ]/${targetDenominator} = ${step.n}/${step.d}`,
      answer: `${targetNumerator}/${targetDenominator} = ${step.n}/${step.d}`,
      change: step.change
    };
  }

  if (step.mode === "box" && step.missing === "denominator") {
    return {
      question: `Fill the box: ${targetNumerator}/[ ] = ${step.n}/${step.d}`,
      answer: `${targetNumerator}/${targetDenominator} = ${step.n}/${step.d}`,
      change: step.change
    };
  }

  if (step.missing === "numerator") {
    return {
      question: `${step.n}/${step.d} = ?/${targetDenominator}`,
      answer: `${step.n}/${step.d} = ${targetNumerator}/${targetDenominator}`,
      change: step.change
    };
  }

  return {
    question: `${step.n}/${step.d} = ${targetNumerator}/?`,
    answer: `${step.n}/${step.d} = ${targetNumerator}/${targetDenominator}`,
    change: step.change
  };
}

function getEquivalentFractionBase(settings, difficultyKey) {
  const minDenominatorGap = difficultyKey === "easy" ? 1 : 2;
  const n = randomInt(settings.range[0], settings.range[1] - 4);
  const d = randomInt(n + minDenominatorGap, settings.range[1] + 3);

  return {
    n,
    d,
    factors: settings.factors
  };
}

function generateOrderOfOperations(_topic, variant, settings, difficultyKey) {
  if (variant.id === "which-result") {
    return generateOrderWhichResult(settings, difficultyKey);
  }

  if (variant.id === "insert-brackets") {
    return generateOrderInsertBrackets(settings, difficultyKey);
  }

  if (variant.id === "error-spotting") {
    return generateOrderErrors(settings, difficultyKey);
  }

  return generateOrderEvaluate(settings, difficultyKey);
}

function generateOrderEvaluate(settings, difficultyKey) {
  const base = getOrderBase(settings, difficultyKey);
  const sequence = [
    { expr: `${base.a} + ${base.b} * 2`, change: "Starting example." },
    { expr: `${base.a} + ${base.b} * 3`, change: "Only the multiplier changes." },
    { expr: `(${base.a} + ${base.b}) * 3`, change: "Only brackets are introduced." },
    { expr: `(${base.a} + ${base.b}) * ${base.c}`, change: "Only the final factor changes." },
    { expr: `${base.a} + ${base.b} * ${base.c} - 1`, change: "Only one subtraction term is added." },
    { expr: `${base.a} + ${base.b} * ${base.c} - ${base.d}`, change: "Only the subtraction value changes." },
    { expr: `(${base.a} + ${base.b}) * ${base.c} - ${base.d}`, change: "Only the brackets return." },
    { expr: `${base.a} + ${base.b} * ${base.c}^2 - ${base.d}`, change: "Only a power is introduced." },
    { expr: `${base.a} - ${base.b} * ${base.c}^2 - ${base.d}`, change: "Only the first sign changes." },
    { expr: `(${base.a} - ${base.b}) * ${base.c}^2 - ${base.d}`, change: "Only the brackets change the order again." }
  ];

  return {
    questions: sequence.map((item) => ({
      question: `Evaluate: ${formatMath(item.expr)}`,
      answer: evaluateExpression(item.expr),
      change: item.change
    }))
  };
}

function generateOrderWhichResult(settings, difficultyKey) {
  const base = getOrderBase(settings, difficultyKey);
  const items = [
    {
      question: `Which expression gives ${evaluateExpression(`${base.a} + ${base.b} * 2`)}? A) ${formatMath(`${base.a} + ${base.b} * 2`)} B) ${formatMath(`(${base.a} + ${base.b}) * 2`)}`,
      answer: "A",
      change: "Starting example."
    },
    {
      question: `Which expression gives ${evaluateExpression(`${base.a} + ${base.b} * 3`)}? A) ${formatMath(`${base.a} + ${base.b} * 3`)} B) ${formatMath(`(${base.a} + ${base.b}) * 3`)}`,
      answer: "A",
      change: "Only the multiplier changes."
    },
    {
      question: `Which expression gives ${evaluateExpression(`(${base.a} + ${base.b}) * 3`)}? A) ${formatMath(`${base.a} + ${base.b} * 3`)} B) ${formatMath(`(${base.a} + ${base.b}) * 3`)}`,
      answer: "B",
      change: "Only the brackets change the result."
    },
    {
      question: `Which expression gives ${evaluateExpression(`(${base.a} + ${base.b}) * ${base.c}`)}? A) ${formatMath(`(${base.a} + ${base.b}) * ${base.c}`)} B) ${formatMath(`${base.a} + ${base.b} * ${base.c}`)}`,
      answer: "A",
      change: "Only the final factor changes."
    },
    {
      question: `Which expression gives ${evaluateExpression(`${base.a} + ${base.b} * ${base.c} - 1`)}? A) ${formatMath(`${base.a} + ${base.b} * ${base.c} - 1`)} B) ${formatMath(`(${base.a} + ${base.b}) * ${base.c} - 1`)}`,
      answer: "A",
      change: "Only one subtraction term is added."
    },
    {
      question: `Which expression gives ${evaluateExpression(`(${base.a} + ${base.b}) * ${base.c} - ${base.d}`)}? A) ${formatMath(`${base.a} + ${base.b} * ${base.c} - ${base.d}`)} B) ${formatMath(`(${base.a} + ${base.b}) * ${base.c} - ${base.d}`)}`,
      answer: "B",
      change: "Only the brackets return."
    },
    {
      question: `Which expression gives the larger result? A) ${formatMath(`${base.a} + ${base.b} * ${base.c}^2 - ${base.d}`)} B) ${formatMath(`${base.a} - ${base.b} * ${base.c}^2 - ${base.d}`)}`,
      answer: "A",
      change: "Only the first sign changes."
    },
    {
      question: `Which expression gives ${evaluateExpression(`(${base.a} - ${base.b}) * ${base.c}^2 - ${base.d}`)}? A) ${formatMath(`${base.a} - ${base.b} * ${base.c}^2 - ${base.d}`)} B) ${formatMath(`(${base.a} - ${base.b}) * ${base.c}^2 - ${base.d}`)}`,
      answer: "B",
      change: "Only the brackets change the order again."
    },
    {
      question: `Which statement is correct? A) Brackets always make answers smaller. B) Brackets can change which operation happens first.`,
      answer: "B",
      change: "Only the prompt changes to a rule statement."
    },
    {
      question: `Final check: which expression gives ${evaluateExpression(`${base.a} + ${base.b} * ${base.c}`)}? A) ${formatMath(`${base.a} + ${base.b} * ${base.c}`)} B) ${formatMath(`${base.a} * (${base.b} + ${base.c})`)}`,
      answer: "A",
      change: "Final step compares two superficially similar but structurally different expressions."
    }
  ];

  return { questions: items };
}

function generateOrderInsertBrackets(settings, difficultyKey) {
  const base = getOrderBase(settings, difficultyKey);
  const steps = [
    { raw: `${base.a} + ${base.b} * 2`, bracketed: `${base.a} + (${base.b} * 2)`, change: "Starting example." },
    { raw: `${base.a} + ${base.b} * 3`, bracketed: `(${base.a} + ${base.b}) * 3`, change: "Only the bracket placement changes." },
    { raw: `${base.a} + ${base.b} * ${base.c}`, bracketed: `${base.a} + (${base.b} * ${base.c})`, change: "Only the multiplier changes." },
    { raw: `${base.a} + ${base.b} * ${base.c}`, bracketed: `(${base.a} + ${base.b}) * ${base.c}`, change: "Only the bracket placement changes again." },
    { raw: `${base.a} - ${base.b} * ${base.c}`, bracketed: `${base.a} - (${base.b} * ${base.c})`, change: "Only the first sign changes." },
    { raw: `${base.a} - ${base.b} * ${base.c}`, bracketed: `(${base.a} - ${base.b}) * ${base.c}`, change: "Only the bracket placement changes." },
    { raw: `${base.a} + ${base.b} - ${base.c}`, bracketed: `(${base.a} + ${base.b}) - ${base.c}`, change: "Only the operation pair changes." },
    { raw: `${base.a} + ${base.b} - ${base.c}`, bracketed: `${base.a} + (${base.b} - ${base.c})`, change: "Only the bracket placement changes." },
    { raw: `${base.a} * ${base.b} + ${base.c}`, bracketed: `${base.a} * (${base.b} + ${base.c})`, change: "Only the bracket placement changes with multiplication first." },
    { raw: `${base.a} * ${base.b} - ${base.c}`, bracketed: `${base.a} * (${base.b} - ${base.c})`, change: "Final step changes only the sign inside the bracket." }
  ];

  return {
    questions: steps.map((item) => ({
      question: `Insert brackets into ${formatMath(item.raw)} to make ${formatMath(item.bracketed)}.`,
      answer: formatMath(item.bracketed),
      change: item.change
    }))
  };
}

function generateOrderErrors(settings, difficultyKey) {
  const base = getOrderBase(settings, difficultyKey);
  const items = [
    { question: `A pupil evaluates ${formatMath(`${base.a} + ${base.b} * 2`)} as ${(base.a + base.b) * 2}. Is that correct?`, answer: "No", change: "Starting example." },
    { question: `Correct the result of ${formatMath(`${base.a} + ${base.b} * 2`)}.`, answer: `${evaluateExpression(`${base.a} + ${base.b} * 2`)}`, change: "Only the task changes from spotting to correcting." },
    { question: `A pupil evaluates ${formatMath(`(${base.a} + ${base.b}) * 2`)} as ${base.a + base.b * 2}. Is that correct?`, answer: "No", change: "Only the brackets are introduced." },
    { question: `Explain why ${formatMath(`(${base.a} + ${base.b}) * 2`)} and ${formatMath(`${base.a} + ${base.b} * 2`)} do not give the same result.`, answer: "Because the brackets change which operation happens first.", change: "Only the prompt changes to explanation." },
    { question: `A pupil says the square in ${formatMath(`${base.a} + ${base.b} * ${base.c}^2 - ${base.d}`)} can be ignored until the end. Is that correct?`, answer: "No", change: "Only a power is introduced." },
    { question: `Correct the evaluation of ${formatMath(`${base.a} + ${base.b} * ${base.c}^2 - ${base.d}`)}.`, answer: `${evaluateExpression(`${base.a} + ${base.b} * ${base.c}^2 - ${base.d}`)}`, change: "Only the task changes from spotting to correcting." },
    { question: `Which mistake is being made here: ${formatMath(`${base.a} - ${base.b} * ${base.c}`)} -> ${formatMath(`(${base.a} - ${base.b}) * ${base.c}`)}?`, answer: "The subtraction is being done before the multiplication.", change: "Only the first sign changes." },
    { question: `True or false: if there are no brackets, multiplication and division are done before addition and subtraction.`, answer: "True", change: "Only the prompt changes to a rule check." },
    { question: `A pupil claims brackets always make the result larger. Is that correct?`, answer: "No", change: "Only the misconception changes." },
    { question: `Final check: write the correct result for ${formatMath(`(${base.a} - ${base.b}) * ${base.c} - ${base.d}`)} and name the first operation to do.`, answer: `${evaluateExpression(`(${base.a} - ${base.b}) * ${base.c} - ${base.d}`)}; first do the subtraction inside the brackets.`, change: "Final step combines calculation with method explanation." }
  ];

  return { questions: items };
}

function getOrderBase(settings, difficultyKey) {
  const easy = difficultyKey === "easy";
  const hard = difficultyKey === "hard";
  const cap = easy ? Math.min(10, settings.range[1] - 2) : hard ? settings.range[1] + 2 : settings.range[1];
  const easyC = randomInt(4, 5);
  const mediumC = randomInt(4, Math.max(4, Math.min(6, settings.coeffRange[1])));
  const hardC = randomInt(4, Math.max(6, settings.coeffRange[1]));
  const dMin = Math.max(2, settings.range[0]);
  return {
    a: randomInt(settings.range[0], cap),
    b: randomInt(settings.range[0], cap),
    c: easy ? easyC : hard ? hardC : mediumC,
    d: randomInt(Math.min(dMin, cap), cap)
  };
}

function generateOneStepEquations(_topic, variant, settings, difficultyKey) {
  if (variant.id === "which-equation") {
    return generateOneStepWhichEquation(settings, difficultyKey);
  }

  if (variant.id === "write-the-equation") {
    return generateOneStepWrite(settings, difficultyKey);
  }

  if (variant.id === "error-spotting") {
    return generateOneStepErrors(settings, difficultyKey);
  }

  return generateOneStepSolve(settings, difficultyKey);
}

function generateOneStepSolve(settings, difficultyKey) {
  const base = getOneStepBase(settings, difficultyKey);
  const sequence = [
    { left: `x + ${base.addConst}`, right: `${base.target}`, answer: base.target - base.addConst, change: "Starting example." },
    { left: `x + ${base.addConst + 1}`, right: `${base.target}`, answer: base.target - (base.addConst + 1), change: "Only the constant changes." },
    { left: `x - ${base.addConst + 1}`, right: `${base.target}`, answer: base.target + base.addConst + 1, change: "Only the operation changes from add to subtract." },
    { left: `x - ${base.addConst + 1}`, right: `${base.target + 2}`, answer: base.target + 2 + base.addConst + 1, change: "Only the right-hand side changes." },
    { left: `${base.multCoeff}x`, right: `${base.multCoeff * base.multAnswer}`, answer: base.multAnswer, change: "Only the equation form changes to multiplication." },
    { left: `${base.multCoeff + 1}x`, right: `${(base.multCoeff + 1) * base.multAnswer}`, answer: base.multAnswer, change: "Only the coefficient changes." },
    { left: `${base.multCoeff + 1}x`, right: `${(base.multCoeff + 1) * (base.multAnswer + 1)}`, answer: base.multAnswer + 1, change: "Only the right-hand side changes." },
    { left: `x / ${base.divisor}`, right: `${base.divAnswer}`, answer: base.divAnswer * base.divisor, change: "Only the form changes to division." },
    { left: `x / ${base.divisor + 1}`, right: `${base.divAnswer}`, answer: base.divAnswer * (base.divisor + 1), change: "Only the divisor changes." },
    { left: `${base.divAnswer * (base.divisor + 1)}`, right: `x / ${base.divisor + 1}`, answer: base.divAnswer * (base.divisor + 1), change: "Only the sides are reversed." }
  ];

  return {
    questions: sequence.map((item) => ({
      question: `Solve: ${formatMath(item.left)} = ${formatMath(item.right)}`,
      answer: `x = ${item.answer}`,
      change: item.change
    }))
  };
}

function generateOneStepWhichEquation(settings, difficultyKey) {
  const base = getOneStepBase(settings, difficultyKey);
  const solution = base.multAnswer;
  const items = [
    { question: `Which equation has solution x = ${solution}? A) x + ${base.addConst} = ${solution + base.addConst} B) x + ${base.addConst} = ${solution + base.addConst + 1}`, answer: "A", change: "Starting example." },
    { question: `Which equation has solution x = ${solution}? A) x + ${base.addConst + 1} = ${solution + base.addConst + 1} B) x + ${base.addConst + 1} = ${solution + base.addConst + 2}`, answer: "A", change: "Only the constant changes." },
    { question: `Which equation has solution x = ${solution}? A) x - ${base.addConst} = ${solution - base.addConst} B) x - ${base.addConst} = ${solution + base.addConst}`, answer: "A", change: "Only the operation changes from add to subtract." },
    { question: `Which equation has solution x = ${solution + 1}? A) x - ${base.addConst} = ${solution + 1 - base.addConst} B) x - ${base.addConst} = ${solution + 1 + base.addConst}`, answer: "A", change: "Only the target solution changes." },
    { question: `Which equation has solution x = ${solution}? A) ${base.multCoeff}x = ${base.multCoeff * solution} B) ${base.multCoeff}x = ${base.multCoeff * solution + 1}`, answer: "A", change: "Only the form changes to multiplication." },
    { question: `Which equation has solution x = ${solution}? A) ${base.multCoeff + 1}x = ${(base.multCoeff + 1) * solution} B) ${base.multCoeff + 1}x = ${(base.multCoeff + 1) * solution + 1}`, answer: "A", change: "Only the coefficient changes." },
    { question: `Which equation has solution x = ${base.divAnswer * base.divisor}? A) x / ${base.divisor} = ${base.divAnswer} B) x / ${base.divisor} = ${base.divAnswer + 1}`, answer: "A", change: "Only the form changes to division." },
    { question: `Which equation has solution x = ${base.divAnswer * (base.divisor + 1)}? A) x / ${base.divisor + 1} = ${base.divAnswer} B) x / ${base.divisor} = ${base.divAnswer}`, answer: "A", change: "Only the divisor changes." },
    { question: `Which equation has solution x = ${base.divAnswer * (base.divisor + 1)}? A) ${base.divAnswer} = x / ${base.divisor + 1} B) ${base.divAnswer + 1} = x / ${base.divisor + 1}`, answer: "A", change: "Only the sides are reversed." },
    { question: `Final check: which equation has solution x = ${solution}? A) x + ${base.addConst} = ${solution + base.addConst} B) ${base.multCoeff}x = ${base.multCoeff * (solution + 1)}`, answer: "A", change: "Final step compares two different equation forms." }
  ];

  return { questions: items };
}

function generateOneStepWrite(settings, difficultyKey) {
  const base = getOneStepBase(settings, difficultyKey);
  const solution = base.multAnswer;
  const items = [
    { question: `Write an equation with solution x = ${solution}: x + ${base.addConst} = ?`, answer: `x + ${base.addConst} = ${solution + base.addConst}`, change: "Starting example." },
    { question: `Write an equation with solution x = ${solution}: x + ${base.addConst + 1} = ?`, answer: `x + ${base.addConst + 1} = ${solution + base.addConst + 1}`, change: "Only the constant changes." },
    { question: `Write an equation with solution x = ${solution}: x - ${base.addConst + 1} = ?`, answer: `x - ${base.addConst + 1} = ${solution - (base.addConst + 1)}`, change: "Only the operation changes." },
    { question: `Write an equation with solution x = ${solution + 1}: x - ${base.addConst + 1} = ?`, answer: `x - ${base.addConst + 1} = ${solution + 1 - (base.addConst + 1)}`, change: "Only the solution changes." },
    { question: `Write an equation with solution x = ${solution}: ${base.multCoeff}x = ?`, answer: `${base.multCoeff}x = ${base.multCoeff * solution}`, change: "Only the equation form changes to multiplication." },
    { question: `Write an equation with solution x = ${solution}: ${base.multCoeff + 1}x = ?`, answer: `${base.multCoeff + 1}x = ${(base.multCoeff + 1) * solution}`, change: "Only the coefficient changes." },
    { question: `Write an equation with solution x = ${solution + 2}: ${base.multCoeff + 1}x = ?`, answer: `${base.multCoeff + 1}x = ${(base.multCoeff + 1) * (solution + 2)}`, change: "Only the solution changes." },
    { question: `Write an equation with solution x = ${base.divAnswer * base.divisor}: x / ${base.divisor} = ?`, answer: `x / ${base.divisor} = ${base.divAnswer}`, change: "Only the form changes to division." },
    { question: `Write an equation with solution x = ${base.divAnswer * (base.divisor + 1)}: x / ${base.divisor + 1} = ?`, answer: `x / ${base.divisor + 1} = ${base.divAnswer}`, change: "Only the divisor changes." },
    { question: `Write an equation with solution x = ${base.divAnswer * (base.divisor + 1)}: ? = x / ${base.divisor + 1}`, answer: `${base.divAnswer} = x / ${base.divisor + 1}`, change: "Final step reverses the layout only." }
  ];

  return { questions: items };
}

function generateOneStepErrors(settings, difficultyKey) {
  const base = getOneStepBase(settings, difficultyKey);
  const items = [
    { question: `A pupil solves x + ${base.addConst} = ${base.target} by doing ${base.target} + ${base.addConst}. Is the method correct?`, answer: "No", change: "Starting example." },
    { question: `Correct the mistake in x + ${base.addConst} = ${base.target}. What is x?`, answer: `x = ${base.target - base.addConst}`, change: "Only the task changes from spotting to correcting." },
    { question: `A pupil solves x - ${base.addConst} = ${base.target} by doing ${base.target} + ${base.addConst}. Is the method correct?`, answer: "Yes", change: "Only the operation changes from add to subtract." },
    { question: `A pupil solves ${base.multCoeff}x = ${base.multCoeff * base.multAnswer} by doing ${base.multCoeff * base.multAnswer} + ${base.multCoeff}. Is the method correct?`, answer: "No", change: "Only the equation form changes to multiplication." },
    { question: `Correct the mistake in ${base.multCoeff}x = ${base.multCoeff * base.multAnswer}. What is x?`, answer: `x = ${base.multAnswer}`, change: "Only the task changes from spotting to correcting." },
    { question: `A pupil solves x / ${base.divisor} = ${base.divAnswer} by doing ${base.divAnswer} * ${base.divisor}. Is the method correct?`, answer: "Yes", change: "Only the form changes to division." },
    { question: `Which statement is correct? A) To undo +${base.addConst}, subtract ${base.addConst}. B) To undo +${base.addConst}, add ${base.addConst}.`, answer: "A", change: "Only the prompt changes to method selection." },
    { question: `Which statement is correct? A) To undo ${base.multCoeff}x, divide by ${base.multCoeff}. B) To undo ${base.multCoeff}x, multiply by ${base.multCoeff}.`, answer: "A", change: "Only the operation focus changes." },
    { question: `A pupil says "If the unknown is on the right, the method changes completely." For example: ${base.divAnswer} = x / ${base.divisor + 1}. Are they correct?`, answer: "No", change: "Only the layout changes to test the misconception." },
    { question: `Final check: write the correct solution and name the inverse operation for ${base.multCoeff + 1}x = ${(base.multCoeff + 1) * (base.multAnswer + 1)}.`, answer: `x = ${base.multAnswer + 1}; divide by ${base.multCoeff + 1}.`, change: "Final step combines solving and explaining the method." }
  ];

  return { questions: items };
}

function getOneStepBase(settings, difficultyKey) {
  const easy = difficultyKey === "easy";
  const hard = difficultyKey === "hard";
  const target = easy ? randomInt(8, 24) : hard ? randomInt(30, settings.largeRange[1]) : randomInt(settings.largeRange[0], settings.largeRange[1]);
  const addConst = easy ? randomInt(2, 5) : hard ? randomInt(6, Math.max(8, settings.coeffRange[1])) : randomInt(settings.coeffRange[0], settings.coeffRange[1]);
  const multCoeff = easy ? randomInt(2, 5) : hard ? randomInt(5, Math.max(7, settings.coeffRange[1])) : randomInt(settings.coeffRange[0], settings.coeffRange[1]);
  const multAnswer = easy ? randomInt(2, 10) : hard ? randomInt(6, settings.range[1]) : randomInt(settings.range[0], settings.range[1]);
  const divisor = easy ? randomInt(2, 4) : hard ? randomInt(4, Math.max(6, settings.coeffRange[1])) : randomInt(2, Math.max(4, settings.coeffRange[1]));
  const divAnswer = easy ? randomInt(2, 10) : hard ? randomInt(4, settings.range[1]) : randomInt(settings.range[0], settings.range[1]);

  return {
    target,
    addConst,
    multCoeff,
    multAnswer,
    divisor,
    divAnswer
  };
}

function generateExpandingBrackets(_topic, variant, settings, difficultyKey) {
  if (variant.id === "match-the-expansion") {
    return generateExpandMatch(settings, difficultyKey);
  }

  return generateExpandSimplify(settings, difficultyKey);
}

function generateExpandSimplify(settings, difficultyKey) {
  const easy = difficultyKey === "easy";
  const hard = difficultyKey === "hard";
  const outside = easy ? randomInt(2, 4) : hard ? randomInt(3, Math.max(5, settings.coeffRange[1])) : randomInt(settings.coeffRange[0], settings.coeffRange[1]);
  const inner = easy ? randomInt(1, 3) : hard ? randomInt(2, Math.max(5, settings.range[0])) : randomInt(1, settings.range[0]);
  const secondInner = inner + 1;
  const variableCoeff = easy ? 2 : hard ? randomInt(2, 4) : 2;
  const nextVariableCoeff = hard ? Math.max(variableCoeff + 1, 4) : variableCoeff + 1;
  const constant = easy ? randomInt(2, 5) : hard ? randomInt(5, settings.range[0] + 6) : randomInt(2, settings.range[0] + 4);
  const largeConstant = hard ? randomInt(settings.range[0] + 4, settings.range[1] + 2) : randomInt(settings.range[0] + 2, settings.range[1]);
  const sequence = [
    { expr: `${outside}(x + ${inner})`, change: "Starting example." },
    { expr: `${outside + 1}(x + ${inner})`, change: "Only the outside multiplier changes." },
    { expr: `${outside + 1}(x + ${secondInner})`, change: "Only the inner constant changes." },
    { expr: `${outside + 1}(x - ${secondInner})`, change: "Only the sign inside the bracket changes." },
    { expr: `${outside + 1}(${variableCoeff}x - ${secondInner})`, change: "Only the variable coefficient changes." },
    { expr: `${hard ? "-" : ""}${outside + 1}(${variableCoeff}x + ${constant})`, change: hard ? "Only the outside multiplier becomes negative." : "Only the constant term changes sign." },
    { expr: `${outside + 2}(${variableCoeff}x + ${constant})`, change: "Only the outside multiplier changes." },
    { expr: `${outside + 2}(${nextVariableCoeff}x + ${constant + 1})`, change: "Only the variable coefficient changes again." },
    { expr: `${outside + 2}(${hard ? 4 : 3}x - ${largeConstant})`, change: "Only the constant becomes negative." },
    { expr: `${hard ? "-" : ""}${outside + 3}(${hard ? 4 : 3}x - ${largeConstant})`, change: hard ? "Only both negative signs must now be distributed correctly." : "Only the whole expression becomes negative." }
  ];

  return {
    questions: sequence.map((item) => ({
      question: `Expand: ${formatMath(item.expr)}`,
      answer: expandBracketExpression(item.expr),
      change: item.change
    }))
  };
}

function generateExpandMatch(settings, difficultyKey) {
  const easy = difficultyKey === "easy";
  const hard = difficultyKey === "hard";
  const outside = easy ? randomInt(2, 4) : hard ? randomInt(4, Math.max(6, settings.coeffRange[1])) : randomInt(settings.coeffRange[0], settings.coeffRange[1]);
  const inner = easy ? randomInt(1, 3) : hard ? randomInt(2, Math.max(4, settings.range[0])) : randomInt(1, settings.range[0]);
  const expressions = [
    `${outside}(x + ${inner})`,
    `${outside + 1}(x + ${inner})`,
    `${outside + 1}(x - ${inner})`,
    `${outside + 1}(${easy ? 2 : hard ? 3 : 2}x - ${inner})`,
    `${outside + 2}(${easy ? 2 : hard ? 3 : 2}x - ${inner})`,
    `${outside + 2}(${easy ? 2 : 2}x + ${inner + 1})`,
    `${outside + 2}(${hard ? 4 : 3}x + ${inner + 1})`,
    `${outside + 2}(${hard ? 4 : 3}x - ${inner + 2})`,
    `-${outside + 2}(${hard ? 4 : 3}x - ${inner + 2})`,
    `-${outside + 3}(${hard ? 4 : 3}x - ${inner + 2})`
  ];

  return {
    questions: expressions.map((expr, index) => ({
      question: `Match this bracket form to its expansion: ${formatMath(expr)}`,
      answer: expandBracketExpression(expr),
      change: matchChange(index)
    }))
  };
}

function generateNegativeNumbers(_topic, variant, settings, difficultyKey) {
  if (variant.id === "compare-sign-effects") {
    return generateNegativeCompare(settings, difficultyKey);
  }

  return generateNegativeCalculate(settings, difficultyKey);
}

function generateNegativeCalculate(settings, difficultyKey) {
  const easy = difficultyKey === "easy";
  const hard = difficultyKey === "hard";
  const first = negativeNonZero(easy ? [-10, -2] : hard ? [-18, -4] : settings.negativeRange);
  const second = negativeNonZero(easy ? [-8, -2] : hard ? [-18, -5] : settings.negativeRange);
  const factor = easy ? randomInt(2, 4) : hard ? randomInt(4, Math.max(6, settings.coeffRange[1])) : randomInt(2, Math.max(4, settings.coeffRange[1]));
  const divisor = easy ? randomInt(2, 4) : hard ? randomInt(3, Math.max(6, settings.coeffRange[1])) : randomInt(2, Math.max(4, settings.coeffRange[1]));
  const addA = easy ? 4 : hard ? 8 : 4;
  const addB = easy ? 6 : hard ? 11 : 6;
  const subtractA = easy ? 5 : hard ? 9 : 5;
  const subtractB = Math.abs(second) === subtractA ? Math.abs(second) + 1 : Math.abs(second);
  const sequence = [
    { expr: `${first} + ${addA}`, change: "Starting example." },
    { expr: `${first} + ${addB}`, change: "Only the positive addend changes." },
    { expr: `${first} - ${subtractA}`, change: "Only the operation changes." },
    { expr: `${first} - ${subtractB}`, change: "Only the second number changes." },
    { expr: `${first} + (-${subtractB})`, change: "Only the second number becomes negative." },
    { expr: `${first} - (-${subtractB})`, change: "Only the operation changes again." },
    { expr: `${first} * ${factor}`, change: "Only the operation changes to multiplication." },
    { expr: `${first} * -${factor}`, change: "Only the second factor changes sign." },
    { expr: `${first} / -${divisor}`, change: "Only the operation changes to division." },
    { expr: `${first} - (-${subtractB}) * ${hard ? 3 : 2}`, change: "Only one extra operation is added." },
    ...(hard ? [{ expr: `(${first}) + (-${subtractB}) - (-${factor})`, change: "Final step combines several signed terms." }] : [])
  ];

  return {
    questions: sequence.map((item) => ({
      question: `Calculate: ${formatMath(item.expr)}`,
      answer: evaluateExpression(item.expr),
      change: item.change
    }))
  };
}

function generateNegativeCompare(settings, difficultyKey) {
  const easy = difficultyKey === "easy";
  const hard = difficultyKey === "hard";
  const n = negativeNonZero(easy ? [-10, -2] : hard ? [-18, -4] : settings.negativeRange);
  const m = easy ? randomInt(2, 4) : hard ? randomInt(4, Math.max(6, settings.coeffRange[1])) : randomInt(2, Math.max(4, settings.coeffRange[1]));
  const items = [
    { question: `Which is greater: ${n} + ${easy ? 4 : hard ? 8 : 4} or ${n} + ${easy ? 5 : hard ? 9 : 5}?`, answer: `${n} + ${easy ? 5 : hard ? 9 : 5}`, change: "Starting example." },
    { question: `Which is greater: ${n} + ${easy ? 5 : hard ? 9 : 5} or ${n} - ${easy ? 5 : hard ? 9 : 5}?`, answer: `${n} + ${easy ? 5 : hard ? 9 : 5}`, change: "Only the operation changes." },
    { question: `What changed the answer more: changing +${easy ? 5 : hard ? 9 : 5} to -${easy ? 5 : hard ? 9 : 5}, or changing ${n} to ${n - 1}?`, answer: `Changing +${easy ? 5 : hard ? 9 : 5} to -${easy ? 5 : hard ? 9 : 5}`, change: "Only one comparison layer is added." },
    { question: `Which is greater: ${n} * ${m} or ${n} * -${m}?`, answer: `${n} * -${m}`, change: "Only multiplication is introduced." },
    { question: `Which is greater: ${n} / ${m} or ${n} / -${m}?`, answer: `${n} / -${m}`, change: "Only the operation changes to division." },
    { question: `True or false: subtracting a negative always increases the answer. Example: ${n} - (-${m})`, answer: "True", change: "Only the prompt changes to reasoning." },
    { question: `Which is greater: ${n} - (-${m}) or ${n} + ${m}?`, answer: "They are equal", change: "Only the equivalent form changes." },
    { question: `Which is greater: ${n} + (-${m}) or ${n} - ${m}?`, answer: "They are equal", change: "Only the operation wording changes." },
    { question: hard ? `Which is greater: (${n}) - (-${m}) or (${n}) + (-${m})?` : `If you change one sign in ${n} * -${m}, what new result sign do you get?`, answer: hard ? `(${n}) - (-${m})` : "Negative", change: "Only the question focus changes to sign reasoning." },
    { question: `Final check: which changes the sign of the result here, changing the operation or changing one factor sign in ${n} * ${m}?`, answer: "Changing one factor sign", change: "Final step compares two sign changes." }
  ];

  return { questions: items.map((item) => ({ ...item })) };
}

function generateSubstitution(_topic, variant, settings, difficultyKey) {
  if (variant.id === "missing-value-reasoning") {
    return generateSubstitutionMissing(settings, difficultyKey);
  }

  return generateSubstitutionEvaluate(settings, difficultyKey);
}

function generateSubstitutionEvaluate(settings, difficultyKey) {
  const easy = difficultyKey === "easy";
  const hard = difficultyKey === "hard";
  const x = easy ? randomInt(2, 8) : hard ? randomInt(6, settings.range[1]) : randomInt(settings.range[0], settings.range[1]);
  const y = easy ? randomInt(2, 8) : hard ? randomInt(6, settings.range[1]) : randomInt(settings.range[0], settings.range[1]);
  const coeffX = easy ? randomInt(2, 4) : hard ? randomInt(4, settings.coeffRange[1]) : randomInt(2, settings.coeffRange[1]);
  const coeffY = easy ? randomInt(2, 4) : hard ? randomInt(4, settings.coeffRange[1] + 1) : randomInt(2, settings.coeffRange[1] + 1);
  const sequence = [
    { question: `If x = ${x}, find x + 3`, answer: x + 3, change: "Starting example." },
    { question: `If x = ${x}, find x + 4`, answer: x + 4, change: "Only the constant changes." },
    { question: `If x = ${x}, find ${easy ? 2 : coeffX}x + 4`, answer: (easy ? 2 : coeffX) * x + 4, change: "Only the expression structure changes." },
    { question: `If x = ${x + 1}, find ${easy ? 2 : coeffX}x + 4`, answer: (easy ? 2 : coeffX) * (x + 1) + 4, change: "Only the substituted value changes." },
    { question: `If x = ${x + 1}, find ${easy ? 2 : coeffX}x - 4`, answer: (easy ? 2 : coeffX) * (x + 1) - 4, change: "Only the operation changes from add to subtract." },
    { question: `If x = ${x + 1} and y = ${y}, find x + y`, answer: x + 1 + y, change: "Only a second variable is introduced." },
    { question: `If x = ${x + 1} and y = ${y + 1}, find x + y`, answer: x + 1 + y + 1, change: "Only the value of y changes." },
    { question: `If x = ${x + 1} and y = ${y + 1}, find ${coeffX}x + y`, answer: coeffX * (x + 1) + (y + 1), change: "Only the coefficient of x changes." },
    { question: hard
        ? `If x = -${x + 1} and y = ${y + 1}, find ${coeffX}x + ${coeffY}y`
        : `If x = ${x + 1} and y = ${y + 1}, find ${coeffX}x - ${coeffY}y`,
      answer: hard ? coeffX * (-(x + 1)) + coeffY * (y + 1) : coeffX * (x + 1) - coeffY * (y + 1),
      change: hard ? "Only a negative substituted value is introduced." : "Only the operation and y coefficient change." },
    { question: hard
        ? `If x = -${x + 1} and y = -${y + 1}, find ${coeffX}x - ${coeffY}y`
        : `If x = -${x} and y = ${y + 1}, find ${coeffX}x - ${coeffY}y`,
      answer: hard ? coeffX * (-(x + 1)) - coeffY * (-(y + 1)) : coeffX * (-x) - (coeffY * (y + 1)),
      change: hard ? "Only both substituted signs change, so the structure must be tracked carefully." : "Only the sign of x changes." },
    { question: hard
        ? `If x = -${x + 2} and y = ${y}, find ${coeffX}x + ${coeffY}y - 3`
        : `If x = -${hard ? x + 1 : x} and y = ${y + 1}, find ${coeffX}x - ${coeffY}y`,
      answer: hard ? coeffX * (-(x + 2)) + coeffY * y - 3 : coeffX * (-(x + 1)) - coeffY * (y + 1),
      change: hard ? "Final step combines two variables, a negative value, and a final constant." : "Only the sign of x changes." }
  ];

  return {
    questions: sequence.map((item) => ({
      question: item.question,
      answer: `${item.answer}`,
      change: item.change
    }))
  };
}

function generateSubstitutionMissing(settings, difficultyKey) {
  const easy = difficultyKey === "easy";
  const hard = difficultyKey === "hard";
  const x = easy ? randomInt(2, 8) : hard ? randomInt(6, settings.range[1]) : randomInt(settings.range[0], settings.range[1]);
  const y = easy ? randomInt(2, 8) : hard ? randomInt(6, settings.range[1]) : randomInt(settings.range[0], settings.range[1]);
  const coeff = easy ? randomInt(2, 4) : hard ? randomInt(4, settings.coeffRange[1]) : randomInt(2, settings.coeffRange[1]);
  const items = [
    { question: `If x = ${x}, complete: x + 3 = ?`, answer: `${x + 3}`, change: "Starting example." },
    { question: `If x = ${x}, complete: x + 4 = ?`, answer: `${x + 4}`, change: "Only the constant changes." },
    { question: `If x = ${x}, complete: ${coeff}x + 4 = ?`, answer: `${coeff * x + 4}`, change: "Only the expression structure changes." },
    { question: `If x = ?, then ${coeff}x + 4 = ${coeff * (x + 1) + 4}. Find x.`, answer: `${x + 1}`, change: "Only the missing value moves from output to input." },
    { question: `If x = ${x + 1} and y = ${y}, complete: x + y = ?`, answer: `${x + 1 + y}`, change: "Only a second variable is introduced." },
    { question: `If x = ${x + 1} and y = ?, and x + y = ${x + y + 3}, find y.`, answer: `${y + 2}`, change: "Only y becomes the missing value." },
    { question: `If x = ${x + 1} and y = ${y + 1}, complete: ${coeff}x + y = ?`, answer: `${coeff * (x + 1) + (y + 1)}`, change: "Only the coefficient of x changes." },
    { question: `If x = ? and y = ${y + 1}, and ${coeff}x + y = ${coeff * (x + 2) + (y + 1)}, find x.`, answer: `${x + 2}`, change: "Only x becomes the missing value again." },
    { question: hard ? `If x = -${x} and y = ${y + 1}, complete: ${coeff}x + y = ?` : `If x = -${x} and y = ${y + 1}, complete: ${coeff}x - y = ?`, answer: `${hard ? coeff * (-x) + (y + 1) : coeff * (-x) - (y + 1)}`, change: "Only the sign of x changes." },
    { question: hard ? `If x = -${x} and y = ?, and ${coeff}x + y = ${coeff * (-x) + (y + 2)}, find y.` : `If x = -${x} and y = ?, and ${coeff}x - y = ${coeff * (-x) - (y + 2)}, find y.`, answer: `${y + 2}`, change: "Final step changes only the missing value target." }
  ];

  return { questions: items.map((item) => ({ ...item })) };
}

function getPlaceValueBase(settings, difficultyKey) {
  const easy = difficultyKey === "easy";
  const hard = difficultyKey === "hard";
  const maxValue = difficultyKey === "easy" ? 9999 : difficultyKey === "medium" ? 99999 : 999999;
  const minValue = difficultyKey === "easy" ? 1200 : difficultyKey === "medium" ? 12000 : 120000;
  const compareA = randomInt(minValue, maxValue - 500);
  const compareB = compareA + getPlaceValueStep(difficultyKey, 1000, 100);
  const compareNear = compareA - getPlaceValueStep(difficultyKey, 100, 10);
  const compareC = randomInt(minValue, maxValue - 900);
  const compareD = compareC + getPlaceValueStep(difficultyKey, 100, 10);
  const compareE = randomInt(minValue, maxValue - 90);
  const compareF = compareE + getPlaceValueStep(difficultyKey, 10, 1);
  const orderBase = randomInt(minValue, maxValue - 2000);
  const orderA = orderBase;
  const orderB = orderBase + getPlaceValueStep(difficultyKey, 1000, 100);
  const orderC = orderBase + getPlaceValueStep(difficultyKey, 2000, 200);
  const finalA = randomInt(minValue, maxValue - 3000);
  const finalB = finalA + getPlaceValueStep(difficultyKey, 100, 10);
  const finalC = finalA + getPlaceValueStep(difficultyKey, 1000, 100);
  const betweenLow = floorTo(compareA, 1000);
  const betweenHigh = betweenLow + 1000;
  const betweenAnswer = betweenLow + randomInt(100, 850);
  const betweenOptionA = betweenAnswer;
  const betweenOptionB = betweenHigh + randomInt(50, 400);
  const completeLow = floorTo(compareC, 1000);
  const completeHigh = completeLow + 1000;
  const completeAnswer = completeLow + randomInt(150, 850);
  const numberA = buildDigitValueNumber(difficultyKey, 4);
  const numberB = buildDigitValueNumber(difficultyKey, 5);
  const numberC = buildDigitValueNumber(difficultyKey, 5);
  const numberD = buildDigitValueNumber(difficultyKey, 5);
  const numberE = buildDigitValueNumber(difficultyKey, 5);
  const numberF = buildDigitValueNumber(difficultyKey, 5);
  const numberG = buildDigitValueNumber(difficultyKey, difficultyKey === "hard" ? 6 : 5);
  const sharedDigit = getSharedNonZeroDigit(numberA, numberB);
  const sharedNumberA = replaceDigitWithShared(numberA, sharedDigit, 2);
  const sharedNumberB = replaceDigitWithShared(numberB, sharedDigit, 3);
  const statementDigitNumber = buildDigitValueNumber(difficultyKey, 5);
  const statementDigitIndex = chooseNonZeroDigitIndex(statementDigitNumber);
  const statementDigit = getDigitAt(statementDigitNumber, statementDigitIndex);
  const statementDigitValue = statementDigit * 10 ** statementDigitIndex;
  const roundA = easy ? randomInt(1200, 9400) : hard ? randomInt(120000, 940000) : randomInt(12000, 94000);
  const roundB = roundA + 499;
  const roundC = easy ? randomInt(12000, 94000) : hard ? randomInt(120000, 940000) : randomInt(12000, 94000);
  const roundD = roundC + (easy ? 3200 : hard ? 32000 : 3200);
  const roundE = easy ? randomInt(2000, 9400) : hard ? randomInt(200000, 940000) : randomInt(20000, 94000);
  const roundF = roundE + (easy ? 600 : hard ? 60000 : 6000);
  const roundG = easy ? randomInt(1200, 9800) : hard ? randomInt(120000, 980000) : randomInt(12000, 98000);
  const roundH = easy ? randomInt(1500, 9500) : hard ? randomInt(150000, 950000) : randomInt(15000, 95000);
  const roundI = easy ? randomInt(1500, 9500) : hard ? randomInt(150000, 950000) : randomInt(15000, 95000);
  const roundIMistake = floorTo(roundI, easy ? 1000 : hard ? 100000 : 10000);
  const roundJ = easy ? randomInt(2200, 9800) : hard ? randomInt(220000, 980000) : randomInt(22000, 98000);
  const roundK = easy ? randomInt(14000, 97000) : hard ? randomInt(140000, 970000) : randomInt(14000, 97000);
  const intervalA = easy ? randomInt(1200, 9800) : hard ? randomInt(120000, 980000) : randomInt(12000, 98000);
  const lowerA = floorTo(intervalA, easy ? 100 : hard ? 10000 : 1000);
  const upperA = lowerA + (easy ? 100 : hard ? 10000 : 1000);
  const intervalB = easy ? randomInt(1200, 9800) : hard ? randomInt(120000, 980000) : randomInt(12000, 98000);
  const lowerB = floorTo(intervalB, easy ? 100 : hard ? 10000 : 1000);
  const upperB = lowerB + (easy ? 100 : hard ? 10000 : 1000);
  const intervalC = easy ? randomInt(1200, 9800) : hard ? randomInt(120000, 980000) : randomInt(12000, 98000);
  const lowerC = floorTo(intervalC, easy ? 100 : hard ? 10000 : 1000);
  const upperC = lowerC + (easy ? 100 : hard ? 10000 : 1000);
  const statementA = easy ? randomInt(1200, 9800) : hard ? randomInt(120000, 980000) : randomInt(12000, 98000);
  const statementATarget = roundToNearest(statementA, easy ? 100 : hard ? 10000 : 1000);
  const statementAOther = statementATarget + (easy ? 100 : hard ? 10000 : 1000);
  const statementAAnswer = Math.abs(statementA - statementATarget) < Math.abs(statementA - statementAOther) ? "True" : "False";
  const intervalD = easy ? randomInt(1200, 9800) : hard ? randomInt(120000, 980000) : randomInt(12000, 98000);
  const nextThousandD = floorTo(intervalD, easy ? 100 : hard ? 10000 : 1000) + (easy ? 100 : hard ? 10000 : 1000);
  const intervalE = easy ? randomInt(1200, 9800) : hard ? randomInt(120000, 980000) : randomInt(12000, 98000);
  const previousTenThousandE = floorTo(intervalE, easy ? 1000 : hard ? 100000 : 10000);
  const statementB = easy ? randomInt(1200, 9800) : hard ? randomInt(120000, 980000) : randomInt(12000, 98000);
  const lowerStatementB = floorTo(statementB, easy ? 100 : hard ? 10000 : 1000);
  const upperStatementB = lowerStatementB + (easy ? 100 : hard ? 10000 : 1000);
  const intervalF = easy ? randomInt(1200, 9800) : hard ? randomInt(120000, 980000) : randomInt(12000, 98000);
  const lowerF = floorTo(intervalF, easy ? 100 : hard ? 10000 : 1000);
  const upperF = lowerF + (easy ? 100 : hard ? 10000 : 1000);
  const intervalG = easy ? randomInt(1200, 9800) : hard ? randomInt(120000, 980000) : randomInt(12000, 98000);
  const intervalGUpper = floorTo(intervalG, easy ? 100 : hard ? 10000 : 1000) + (easy ? 100 : hard ? 10000 : 1000);
  const intervalH = easy ? randomInt(1200, 9800) : hard ? randomInt(120000, 980000) : randomInt(12000, 98000);
  const lowerH = floorTo(intervalH, easy ? 100 : hard ? 10000 : 1000);
  const upperH = lowerH + (easy ? 100 : hard ? 10000 : 1000);

  return {
    compareA,
    compareB,
    compareNear,
    compareC,
    compareD,
    compareE,
    compareF,
    orderA,
    orderB,
    orderC,
    finalA,
    finalB,
    finalC,
    betweenLow,
    betweenHigh,
    betweenOptionA,
    betweenOptionB,
    betweenAnswer,
    completeLow,
    completeHigh,
    completeAnswer,
    statementOrderA: compareA,
    statementOrderB: compareB,
    statementReason: compareA > compareB ? "its thousands digit is larger" : "its hundreds digit is larger",
    statementOrderAnswer: compareA > compareB ? "No" : "Yes",
    numberA,
    numberB,
    numberC,
    numberD,
    numberE,
    numberF,
    numberG,
    focusDigitA: getDigitAt(numberA, 2),
    focusValueA: getDigitValue(numberA, 2),
    focusDigitB: getDigitAt(numberB, 3),
    focusValueB: getDigitValue(numberB, 3),
    focusDigitC: getDigitAt(numberC, 1),
    focusValueC: getDigitValue(numberC, 1),
    focusDigitD: getDigitAt(numberD, 2),
    focusValueD: getDigitValue(numberD, 2),
    focusDigitE: getDigitAt(numberE, 4),
    focusValueE: getDigitValue(numberE, 4),
    sharedDigit,
    sharedNumberA,
    sharedNumberB,
    sharedValueA: findDigitValue(sharedNumberA, sharedDigit),
    sharedValueB: findDigitValue(sharedNumberB, sharedDigit),
    focusDigitF: getDigitAt(numberF, 3),
    focusValueF: getDigitValue(numberF, 3),
    placeNameF: placeName(3),
    compareDigitA: getDigitAt(numberA, 2),
    compareDigitNumberA: numberA,
    compareDigitValueA: getDigitValue(numberA, 2),
    compareDigitB: getDigitAt(numberB, 1),
    compareDigitNumberB: numberB,
    compareDigitValueB: getDigitValue(numberB, 1),
    statementDigitNumber,
    statementDigit,
    statementDigitValue,
    statementDigitAnswer: "True",
    focusDigitG: getDigitAt(numberG, 2),
    focusValueG: getDigitValue(numberG, 2),
    roundA,
    roundB,
    roundC,
    roundD,
    roundE,
    roundF,
    roundG,
    roundH,
    roundI,
    roundIMistake,
    roundJ,
    roundK,
    intervalA,
    lowerA,
    upperA,
    intervalB,
    lowerB,
    upperB,
    intervalC,
    lowerC,
    upperC,
    statementA,
    statementATarget,
    statementAOther,
    statementAAnswer,
    intervalD,
    nextThousandD,
    intervalE,
    previousTenThousandE,
    statementB,
    lowerStatementB,
    upperStatementB,
    intervalF,
    lowerF,
    upperF,
    intervalG,
    intervalGUpper,
    intervalH,
    lowerH,
    upperH
  };
}

function buildDigitValueNumber(difficultyKey, digits) {
  const min = 10 ** (digits - 1);
  const max = (10 ** digits) - 1;
  const digitsArray = String(randomInt(min, max)).split("");

  if (difficultyKey === "easy") {
    return Number(digitsArray.map((digit, index) => {
      if (index === 0) return digit === "0" ? "4" : digit;
      return digit === "0" ? String(randomInt(1, 9)) : digit;
    }).join(""));
  }

  if (difficultyKey === "hard") {
    const zeroIndex = randomInt(1, Math.max(1, digitsArray.length - 2));
    digitsArray[zeroIndex] = "0";
  }

  return Number(digitsArray.join(""));
}

function getPlaceValueStep(difficultyKey, largeStep, smallStep) {
  if (difficultyKey === "easy") return smallStep;
  if (difficultyKey === "hard") return largeStep;
  return Math.max(smallStep * 2, Math.floor((largeStep + smallStep) / 4));
}

function getDigitAt(number, placeIndex) {
  return Math.floor(number / (10 ** placeIndex)) % 10;
}

function getDigitValue(number, placeIndex) {
  return getDigitAt(number, placeIndex) * (10 ** placeIndex);
}

function chooseNonZeroDigitIndex(number) {
  const digits = String(number).split("").reverse().map(Number);
  const options = digits.map((digit, index) => ({ digit, index })).filter((item) => item.digit !== 0);
  return options[randomInt(0, options.length - 1)].index;
}

function placeName(placeIndex) {
  const names = ["ones", "tens", "hundreds", "thousands", "ten-thousands", "hundred-thousands"];
  return names[placeIndex] || "place";
}

function floorTo(value, factor) {
  return Math.floor(value / factor) * factor;
}

function roundToNearest(value, factor) {
  return Math.round(value / factor) * factor;
}

function formatNumber(value) {
  return Number(value).toLocaleString("en-GB");
}

function formatOrderedList(values, descending = false) {
  const sorted = [...values].sort((a, b) => descending ? b - a : a - b);
  return sorted.map((value) => formatNumber(value)).join(", ");
}

function middleOfThree(a, b, c) {
  return [a, b, c].sort((x, y) => x - y)[1];
}

function chooseRoundedTarget(a, b, factor, target) {
  return roundToNearest(a, factor) === target ? a : b;
}

function findDigitValue(number, digit) {
  const digits = String(number).split("").reverse().map(Number);
  const index = digits.findIndex((item) => item === digit);
  return digit * (10 ** index);
}

function getSharedNonZeroDigit(numberA, numberB) {
  const digitsA = [...new Set(String(numberA).split("").map(Number).filter((digit) => digit !== 0))];
  const match = digitsA.find((digit) => String(numberB).includes(String(digit)));
  return match || digitsA[0] || 1;
}

function replaceDigitWithShared(number, sharedDigit, placeIndex) {
  const digits = String(number).split("");
  const targetIndex = digits.length - 1 - placeIndex;
  if (targetIndex >= 0 && targetIndex < digits.length) {
    digits[targetIndex] = String(sharedDigit);
  }
  return Number(digits.join(""));
}

function getFactorBase(settings, difficultyKey) {
  const primePool = difficultyKey === "easy" ? [5, 7, 11, 13, 17, 19] : difficultyKey === "hard" ? [19, 23, 29, 31, 37, 41, 43, 47] : [11, 13, 17, 19, 23, 29, 31, 37];
  const compositePool = difficultyKey === "easy" ? [12, 15, 18, 21, 24, 27] : difficultyKey === "hard" ? [33, 35, 39, 45, 49, 51, 55, 57] : [12, 15, 18, 21, 24, 27, 33, 35, 39, 45];
  const factorNumber = randomChoice(difficultyKey === "easy" ? [18, 24, 30, 36] : difficultyKey === "hard" ? [48, 54, 60, 72, 84, 90] : [24, 30, 36, 42, 48, 54, 60]);
  const factorTarget = randomChoice(listFactors(factorNumber).filter((value) => value > 1 && value < factorNumber));
  const factorNumberB = randomChoice(difficultyKey === "easy" ? [16, 18, 20, 24, 28, 30] : difficultyKey === "hard" ? [32, 40, 45, 50, 56, 63, 72] : [18, 20, 28, 32, 40, 45, 50]);
  const factorOfB = randomChoice(listFactors(factorNumberB).filter((value) => value > 1));
  const multipleBase = randomChoice(difficultyKey === "easy" ? [2, 3, 4, 5, 6] : difficultyKey === "hard" ? [6, 7, 8, 9, 11, 12] : [4, 5, 6, 7, 8, 9]);
  const multipleNumber = multipleBase * randomInt(3, 8);
  const multipleBaseB = randomChoice(difficultyKey === "easy" ? [2, 3, 4, 5, 6] : difficultyKey === "hard" ? [6, 7, 8, 9, 10] : [3, 4, 6, 7, 8]);
  const multipleFloor = multipleBaseB * randomInt(3, 7);
  const multipleAnswer = multipleBaseB * (Math.floor(multipleFloor / multipleBaseB) + 1);
  const factorNumberC = randomChoice(difficultyKey === "easy" ? [18, 20, 24, 30, 36] : difficultyKey === "hard" ? [42, 48, 54, 60, 72] : [18, 24, 30, 36, 40, 42]);
  const factorListC = listFactors(factorNumberC).filter((value) => value > 1 && value < factorNumberC);
  const correctFactorOption = randomChoice(factorListC);
  const factorOptionA = correctFactorOption;
  const factorOptionB = correctFactorOption + 1;
  const multipleBaseC = randomChoice(difficultyKey === "easy" ? [2, 3, 4, 5, 6] : difficultyKey === "hard" ? [6, 8, 9, 10, 12] : [4, 5, 6, 8]);
  const correctMultipleOption = multipleBaseC * randomInt(4, 8);
  const multipleOptionA = correctMultipleOption;
  const multipleOptionB = correctMultipleOption + 1;
  const factorNumberD = randomChoice(difficultyKey === "easy" ? [18, 24, 30, 36] : difficultyKey === "hard" ? [40, 42, 48, 54, 60] : [24, 30, 36, 40, 42, 48]);
  const pair = getFactorPair(factorNumberD);
  const primeA = randomChoice(primePool);
  const primeB = randomChoice(primePool.filter((value) => value !== primeA));
  const compositeA = randomChoice(compositePool);
  const compositeB = randomChoice(compositePool.filter((value) => value !== compositeA));
  const choicePrimeA = primeA;
  const choicePrimeB = compositeA;
  const correctPrimeChoice = `${primeA}`;
  const choiceCompositeA = compositeB;
  const choiceCompositeB = primeB;
  const correctCompositeChoice = `${compositeB}`;
  const explainComposite = compositeA;
  const sortNumbers = [primeA, compositeA, primeB, compositeB].sort((a, b) => a - b);
  const sortPrime = sortNumbers.filter(isPrime);
  const sortComposite = sortNumbers.filter((value) => !isPrime(value));
  const div2A = randomChoice(difficultyKey === "easy" ? [14, 16, 18, 21, 23] : difficultyKey === "hard" ? [42, 46, 58, 61, 73] : [24, 26, 28, 31, 33]);
  const div2B = div2A + 1;
  const div3A = randomChoice(difficultyKey === "easy" ? [12, 15, 18, 20, 22] : difficultyKey === "hard" ? [42, 45, 57, 59, 62] : [21, 24, 27, 29, 32]);
  const div3B = div3A + 1;
  const div5A = randomChoice(difficultyKey === "easy" ? [15, 20, 22, 27, 35] : difficultyKey === "hard" ? [55, 60, 62, 67, 75] : [35, 40, 42, 47, 55]);
  const div10A = randomChoice(difficultyKey === "easy" ? [20, 30, 35, 42, 50] : difficultyKey === "hard" ? [60, 70, 75, 82, 90] : [30, 40, 45, 52, 70]);
  const divChoiceA = difficultyKey === "easy" ? 18 : difficultyKey === "hard" ? 54 : 24;
  const divChoiceB = divChoiceA + 1;
  const correctDivChoice = `${divChoiceA}`;
  const divStatement = randomChoice(difficultyKey === "easy" ? [25, 26, 30, 32] : difficultyKey === "hard" ? [65, 66, 80, 82] : [45, 46, 50, 52]);
  const divSet = difficultyKey === "easy" ? [10, 12, 20, 24] : difficultyKey === "hard" ? [30, 42, 50, 64] : [20, 22, 30, 34];
  const divFinal = randomChoice(difficultyKey === "easy" ? [12, 15, 20, 24, 30] : difficultyKey === "hard" ? [60, 72, 75, 84, 90] : [30, 36, 45, 52, 60]);

  return {
    factorNumber, factorTarget, factorNumberB, factorOfB, multipleBase, multipleNumber, multipleBaseB, multipleFloor, multipleAnswer,
    factorNumberC, factorOptionA, factorOptionB, correctFactorOption,
    multipleBaseC, multipleOptionA, multipleOptionB, correctMultipleOption,
    factorNumberD, factorPairA: pair[0], factorPairB: pair[1],
    finalFactorNumber: randomChoice(difficultyKey === "easy" ? [12, 18, 24, 30] : difficultyKey === "hard" ? [36, 42, 48, 60] : [18, 24, 30, 36]),
    primeA, primeB, compositeA, compositeB, choicePrimeA, choicePrimeB, correctPrimeChoice, choiceCompositeA, choiceCompositeB, correctCompositeChoice,
    statementPrimeA: compositeA, statementPrimeB: compositeB, explainComposite,
    sortNumbers, sortPrime, sortComposite,
    div2A, div2B, div3A, div3B, div5A, div10A, divChoiceA, divChoiceB, correctDivChoice, divStatement, divSet, divFinal,
    errorPrime: randomChoice(difficultyKey === "easy" ? [9, 15, 21] : difficultyKey === "hard" ? [25, 27, 35, 49] : [9, 15, 21, 25])
  };
}

function getFractionCompareBase(settings, difficultyKey) {
  const dens = difficultyKey === "easy" ? [2, 3, 4, 5, 6, 8] : difficultyKey === "hard" ? [5, 6, 7, 8, 9, 10, 12, 14, 15] : [3, 4, 5, 6, 7, 8, 9, 10, 12];
  const make = (n, d) => ({ n, d });
  const pairA = difficultyKey === "hard" ? { left: make(7, 12), right: make(3, 5) } : { left: make(3, 5), right: make(4, 5) };
  const pairB = difficultyKey === "hard" ? { left: make(5, 9), right: make(11, 20) } : { left: make(2, 7), right: make(3, 7) };
  const pairC = difficultyKey === "hard" ? { left: make(9, 14), right: make(13, 20) } : { left: make(3, 8), right: make(2, 5) };
  const pairD = difficultyKey === "hard" ? { left: make(11, 15), right: make(3, 4) } : { left: make(5, 6), right: make(4, 6) };
  const pairE = difficultyKey === "hard" ? { left: make(7, 15), right: make(7, 16) } : { left: make(4, 9), right: make(1, 2) };
  const pairF = difficultyKey === "hard" ? { left: make(8, 11), right: make(11, 15) } : { left: make(5, 8), right: make(2, 3) };
  const pairG = difficultyKey === "hard" ? { left: make(11, 14), right: make(4, 5) } : { left: make(7, 10), right: make(3, 4) };
  const pairH = difficultyKey === "hard" ? { left: make(7, 15), right: make(13, 30) } : { left: make(5, 12), right: make(1, 3) };
  const pairI = difficultyKey === "hard" ? { left: make(13, 15), right: make(17, 20) } : { left: make(7, 8), right: make(5, 6) };
  const pairJ = difficultyKey === "hard" ? { left: make(5, 6), right: make(17, 20) } : { left: make(3, 4), right: make(8, 10) };
  const orderA = difficultyKey === "hard" ? make(5, 12) : make(1, 4), orderB = difficultyKey === "hard" ? make(1, 2) : make(2, 4), orderC = difficultyKey === "hard" ? make(7, 12) : make(3, 4), orderD = difficultyKey === "hard" ? make(4, 9) : make(2, 5), orderE = difficultyKey === "hard" ? make(5, 9) : make(3, 5), orderF = difficultyKey === "hard" ? make(2, 3) : make(4, 5);
  const orderG = difficultyKey === "hard" ? make(3, 7) : make(1, 3), orderH = difficultyKey === "hard" ? make(4, 7) : make(1, 2), orderI = difficultyKey === "hard" ? make(5, 7) : make(2, 3), orderJ = difficultyKey === "hard" ? make(5, 14) : make(2, 7), orderK = difficultyKey === "hard" ? make(3, 5) : make(3, 7), orderL = difficultyKey === "hard" ? make(4, 6) : make(5, 7);
  const orderM = difficultyKey === "hard" ? make(7, 15) : make(3, 8), orderN = difficultyKey === "hard" ? make(1, 2) : make(1, 2), orderO = difficultyKey === "hard" ? make(11, 15) : make(5, 8), orderP = difficultyKey === "hard" ? make(6, 11) : make(4, 9), orderQ = difficultyKey === "hard" ? make(7, 11) : make(5, 9), orderR = difficultyKey === "hard" ? make(8, 11) : make(7, 9);
  const orderS = difficultyKey === "hard" ? make(4, 10) : make(2, 6), orderT = difficultyKey === "hard" ? make(5, 10) : make(3, 6), orderU = difficultyKey === "hard" ? make(7, 10) : make(5, 6), orderV = difficultyKey === "hard" ? make(2, 9) : make(1, 5), orderW = difficultyKey === "hard" ? make(5, 9) : make(2, 5), orderX = difficultyKey === "hard" ? make(8, 9) : make(4, 5);
  const orderY = difficultyKey === "hard" ? make(7, 15) : make(5, 12), orderZ = difficultyKey === "hard" ? make(5, 8) : make(2, 3), orderAA = difficultyKey === "hard" ? make(11, 14) : make(3, 4), orderAB = difficultyKey === "hard" ? make(7, 20) : make(3, 10), orderAC = difficultyKey === "hard" ? make(1, 2) : make(1, 2), orderAD = difficultyKey === "hard" ? make(4, 5) : make(7, 10);
  const benchA = difficultyKey === "hard" ? make(7, 15) : make(3, 8), benchB = difficultyKey === "hard" ? make(11, 8) : make(5, 4), benchC = difficultyKey === "hard" ? make(5, 11) : make(4, 9), benchD = difficultyKey === "hard" ? make(13, 10) : make(7, 6), benchE = difficultyKey === "hard" ? make(9, 20) : make(5, 10), benchF = difficultyKey === "hard" ? make(13, 15) : make(8, 9), benchG = difficultyKey === "hard" ? make(8, 15) : make(7, 12), benchH = difficultyKey === "hard" ? make(9, 7) : make(6, 5), benchI = difficultyKey === "hard" ? make(5, 10) : make(2, 4), benchJ = difficultyKey === "hard" ? make(11, 10) : make(9, 8);
  const trueA = difficultyKey === "hard" ? { left: make(5, 9), right: make(7, 12), answer: compareFractions(make(5, 9), make(7, 12)) > 0 ? "True" : "False", question: `True or false: ${formatFraction(5, 9)} > ${formatFraction(7, 12)}.` } : { left: make(4, 7), right: make(3, 7), answer: "True", question: `True or false: ${formatFraction(4, 7)} > ${formatFraction(3, 7)}.` };
  const trueB = difficultyKey === "hard" ? { left: make(6, 12), answer: "True", question: `True or false: ${formatFraction(6, 12)} = 1/2.` } : { left: make(3, 6), answer: "True", question: `True or false: ${formatFraction(3, 6)} = 1/2.` };
  const trueC = difficultyKey === "hard" ? { left: make(7, 10), right: make(5, 7), answer: compareFractions(make(7, 10), make(5, 7)) < 0 ? "True" : "False", question: `True or false: ${formatFraction(7, 10)} < ${formatFraction(5, 7)}.` } : { left: make(5, 8), right: make(2, 3), answer: compareFractions(make(5, 8), make(2, 3)) < 0 ? "True" : "False", question: `True or false: ${formatFraction(5, 8)} < ${formatFraction(2, 3)}.` };
  const trueD = difficultyKey === "hard" ? { question: `True or false: ${formatFraction(9, 14)} > 1/2.`, answer: "True" } : { question: `True or false: ${formatFraction(7, 10)} > 1/2.`, answer: "True" };
  const trueE = difficultyKey === "hard" ? { question: `True or false: ${formatFraction(7, 15)} > ${formatFraction(1, 2)}.`, answer: "False" } : { question: `True or false: ${formatFraction(4, 9)} > ${formatFraction(1, 2)}.`, answer: "False" };
  const trueF = difficultyKey === "hard" ? { question: `True or false: ${formatFraction(12, 12)} = 1.`, answer: "True" } : { question: `True or false: ${formatFraction(5, 5)} = 1.`, answer: "True" };
  const trueG = difficultyKey === "hard" ? { question: `True or false: ${formatFraction(4, 15)} < ${formatFraction(1, 3)}.`, answer: "True" } : { question: `True or false: ${formatFraction(2, 8)} < ${formatFraction(1, 3)}.`, answer: "True" };
  const trueH = difficultyKey === "hard" ? { question: `True or false: ${formatFraction(13, 14)} < 1.`, answer: "True" } : { question: `True or false: ${formatFraction(6, 7)} < 1.`, answer: "True" };
  const trueI = difficultyKey === "hard" ? { question: `True or false: ${formatFraction(11, 12)} < ${formatFraction(5, 6)}.`, answer: "False" } : { question: `True or false: ${formatFraction(5, 6)} < ${formatFraction(3, 4)}.`, answer: "False" };
  const trueJ = difficultyKey === "hard" ? { question: `True or false: ${formatFraction(5, 10)} = ${formatFraction(1, 2)}.`, answer: "True" } : { question: `True or false: ${formatFraction(2, 4)} = ${formatFraction(1, 2)}.`, answer: "True" };
  return { dens, pairA, pairB, pairC, pairD, pairE, pairF, pairG, pairH, pairI, pairJ, orderA, orderB, orderC, orderD, orderE, orderF, orderG, orderH, orderI, orderJ, orderK, orderL, orderM, orderN, orderO, orderP, orderQ, orderR, orderS, orderT, orderU, orderV, orderW, orderX, orderY, orderZ, orderAA, orderAB, orderAC, orderAD, benchA, benchB, benchC, benchD, benchE, benchF, benchG, benchH, benchI, benchJ, trueA, trueB, trueC, trueD, trueE, trueF, trueG, trueH, trueI, trueJ };
}

function getAlgebraNotationBase(settings, difficultyKey) {
  const variables = ["x", "y", "n", "p", "q", "r", "s", "t", "u", "a", "b", "z"];
  const coeffs = difficultyKey === "easy" ? [2, 3, 4, 2, 3, 4, 5, 6] : difficultyKey === "hard" ? [4, 5, 6, 3, 7, 8, 9, 10] : [3, 4, 5, 2, 6, 7, 8, 9];
  const constants = difficultyKey === "easy" ? [2, 3, 4, 5, 6, 3, 4, 5] : difficultyKey === "hard" ? [5, 6, 7, 8, 9, 10, 11, 12] : [5, 4, 3, 6, 7, 8, 5, 6];
  return {
    coeffA: coeffs[0], coeffB: coeffs[1], coeffC: coeffs[2], coeffD: coeffs[3], coeffE: coeffs[4], coeffF: coeffs[5], coeffG: coeffs[6], coeffH: coeffs[7],
    constantA: constants[0], constantB: constants[1], constantC: constants[2], constantD: constants[3], constantE: constants[4], constantF: constants[5], constantG: constants[6], constantH: constants[7],
    variableA: variables[0], variableB: variables[1], variableC: variables[2], variableD: variables[3], variableE: variables[4],
    variableF: variables[5], variableG: variables[6], variableH: variables[7], variableI: variables[8], variableJ: variables[9]
  };
}

function getPerimeterBase(settings, difficultyKey) {
  const easy = difficultyKey === "easy";
  const hard = difficultyKey === "hard";
  const rectLengthA = easy ? 6 : hard ? 12 : 8, rectWidthA = easy ? 4 : hard ? 7 : 5, rectLengthB = easy ? 7 : hard ? 13 : 9, rectWidthB = easy ? 4 : hard ? 7 : 5, rectLengthC = easy ? 8 : hard ? 15 : 11, rectWidthC = easy ? 3 : hard ? 6 : 4, rectLengthD = easy ? 9 : hard ? 16 : 12, rectWidthD = easy ? 5 : hard ? 8 : 6;
  const rectLengthE = easy ? 8 : hard ? 11 : 7, rectWidthE = easy ? 4 : hard ? 7 : 5, rectLengthF = easy ? 7 : hard ? 12 : 8, rectWidthF = easy ? 5 : hard ? 8 : 6, rectLengthG = easy ? 8 : hard ? 14 : 10, rectWidthG = easy ? 3 : hard ? 6 : 4, rectLengthH = easy ? 7 : hard ? 13 : 9, rectWidthH = easy ? 4 : hard ? 7 : 5;
  const triA = easy ? [4, 5, 6] : hard ? [7, 9, 11] : [5, 6, 7], triB = easy ? [5, 6, 7] : hard ? [8, 10, 12] : [6, 7, 8], triC = easy ? [5, 5, 6] : hard ? [6, 9, 10] : [4, 6, 7];
  const polyA = easy ? [3, 4, 5, 4, 3] : hard ? [6, 7, 8, 7, 6] : [4, 5, 6, 5, 4], polyB = easy ? [4, 4, 5, 5, 4] : hard ? [7, 7, 8, 8, 7] : [5, 5, 6, 6, 5], polyC = easy ? [3, 3, 4, 4, 3, 4] : hard ? [5, 6, 7, 6, 5, 7] : [3, 4, 5, 4, 3, 5], polyD = easy ? [4, 4, 4, 5, 5] : hard ? [6, 6, 7, 7, 8] : [4, 4, 5, 5, 6], polyE = easy ? [4, 4, 4, 4, 5] : hard ? [7, 7, 7, 7, 8] : [5, 5, 5, 5, 6], polyF = easy ? [3, 3, 3, 3, 3, 3] : hard ? [5, 5, 5, 5, 5, 5] : [4, 4, 4, 4, 4, 4], polyG = easy ? [6, 6, 4, 4] : hard ? [9, 9, 7, 7] : [7, 7, 5, 5];
  return {
    rectLengthA, rectWidthA, rectPerimeterA: 2 * (rectLengthA + rectWidthA),
    rectLengthB, rectWidthB, rectPerimeterB: 2 * (rectLengthB + rectWidthB),
    rectLengthC, rectWidthC, rectPerimeterC: 2 * (rectLengthC + rectWidthC),
    rectLengthD, rectWidthD, rectPerimeterD: 2 * (rectLengthD + rectWidthD),
    rectLengthE, rectWidthE, rectPerimeterE: 2 * (rectLengthE + rectWidthE),
    rectLengthF, rectWidthF, rectPerimeterF: 2 * (rectLengthF + rectWidthF),
    rectLengthG, rectWidthG, rectLengthH, rectWidthH,
    triA, triB, triC, polyA, polyB, polyC, polyD, polyE, polyF, polyG,
    compALength: rectLengthA, compAWidth: rectWidthA, compBLength: rectLengthB, compBWidth: rectWidthB, compGreater: 2 * (rectLengthA + rectWidthA) > 2 * (rectLengthB + rectWidthB) ? "Rectangle A" : "Rectangle B",
    compCLength: rectLengthC, compCWidth: rectWidthC, compDLength: rectLengthD, compDWidth: rectWidthD, compGreaterCD: 2 * (rectLengthC + rectWidthC) > 2 * (rectLengthD + rectWidthD) ? "Rectangle C" : "Rectangle D", compSmallerCD: 2 * (rectLengthC + rectWidthC) < 2 * (rectLengthD + rectWidthD) ? "Rectangle C" : "Rectangle D",
    polyGreater: sum(polyA) > sum(polyB) ? "Shape A" : "Shape B", polySmaller: sum(polyA) < sum(polyB) ? "Shape A" : "Shape B", polyNameF: "F",
    exprAddA: easy ? 2 : hard ? 5 : 3, exprWidthA: easy ? 3 : hard ? 6 : 4, exprPerimeterA: easy ? "2x + 10" : hard ? "2x + 22" : "2x + 14",
    exprAddB: easy ? 3 : hard ? 6 : 4, exprWidthB: easy ? 4 : hard ? 7 : 5, exprPerimeterB: easy ? "2x + 14" : hard ? "2x + 26" : "2x + 18",
    exprTriangleC: easy ? 5 : hard ? 9 : 7, exprTrianglePerimeter: easy ? "2x + 5" : hard ? "2x + 9" : "2x + 7",
    exprAddC: easy ? 2 : hard ? 4 : 2, exprWidthC: easy ? 4 : hard ? 8 : 6, exprPerimeterC: easy ? "2y + 12" : hard ? "2y + 24" : "2y + 16",
    exprAddD: easy ? 2 : hard ? 4 : 3, exprSquarePerimeter: easy ? "4z + 8" : hard ? "4z + 16" : "4z + 12",
    exprTriangleD: easy ? 3 : hard ? 5 : 4, exprTrianglePerimeterB: easy ? "3p + 3" : hard ? "3p + 5" : "3p + 4",
    exprAddE: easy ? 1 : hard ? 3 : 2, exprWidthD: easy ? 4 : hard ? 7 : 5, exprPerimeterD: easy ? "4a + 10" : hard ? "4a + 20" : "4a + 14",
    exprConstA: easy ? 3 : hard ? 5 : 4, exprConstB: easy ? 5 : hard ? 9 : 6, exprPentagonPerimeter: easy ? "3x + 8" : hard ? "3x + 14" : "3x + 10",
    exprAddF: easy ? 2 : hard ? 4 : 3, exprWidthE: easy ? 3 : hard ? 6 : 4, exprAddG: easy ? 1 : hard ? 3 : 2, exprConstC: easy ? 4 : hard ? 7 : 5, exprTrianglePerimeterC: easy ? "2x + 6" : hard ? "2x + 13" : "2x + 9"
  };
}

function getAngleBase(settings, difficultyKey) {
  const easy = difficultyKey === "easy";
  const hard = difficultyKey === "hard";
  const lineA = easy ? 40 : hard ? 132 : 70, lineB = easy ? 55 : hard ? 118 : 95, lineC = easy ? 75 : hard ? 146 : 120, lineD = easy ? 35 : hard ? 109 : 55, lineE = easy ? 60 : hard ? 124 : 80, lineF = easy ? 45 : hard ? 137 : 65, lineG = easy ? 85 : hard ? 154 : 110, lineH = easy ? 30 : hard ? 102 : 40, lineI = easy ? 95 : hard ? 161 : 135, lineJ = easy ? 50 : hard ? 128 : 75;
  const pointA = easy ? [90, 90, 90] : hard ? [135, 95, 52] : [80, 95, 70], pointB = easy ? [100, 80, 90] : hard ? [140, 110, 45] : [90, 110, 75], pointC = easy ? [110, 70, 90] : hard ? [125, 115, 58] : [120, 85, 60], pointD = easy ? [120, 60, 90] : hard ? [148, 84, 63] : [100, 90, 80], pointE = easy ? [80, 100, 90] : hard ? [155, 92, 48] : [110, 70, 95], pointF = easy ? [95, 85, 90] : hard ? [150, 99, 44] : [150, 95, 40], pointG = easy ? [70, 110, 90] : hard ? [128, 107, 56] : [120, 110, 50], pointH = easy ? [120, 120, 60] : hard ? [138, 96, 67] : [80, 80, 120], pointI = easy ? [90, 90, 120] : hard ? [145, 103, 51] : [60, 140, 90], pointJ = easy ? [100, 110, 80] : hard ? [132, 118, 49] : [100, 100, 70];
  const vertA = easy ? 50 : hard ? 123 : 65, vertB = easy ? 70 : hard ? 114 : 108, vertC = easy ? 80 : hard ? 126 : 72, vertD = easy ? 40 : hard ? 132 : 44, vertE = easy ? 90 : hard ? 138 : 135, vertF = easy ? 60 : hard ? 117 : 58, vertG = easy ? 100 : hard ? 129 : 96, vertH = easy ? 75 : hard ? 121 : 83, vertI = easy ? 110 : hard ? 136 : 120, vertJ = easy ? 65 : hard ? 125 : 67;
  return {
    lineA, lineB, lineC, lineD, lineE, lineF, lineG, lineH, lineI, lineJ,
    pointA, pointB, pointC, pointD, pointE, pointF, pointG, pointH, pointI, pointJ,
    pointMissingA: 360 - sum(pointA), pointMissingB: 360 - sum(pointB), pointMissingC: 360 - sum(pointC), pointMissingD: 360 - sum(pointD),
    vertA, vertB, vertC, vertD, vertE, vertF, vertG, vertH, vertI, vertJ
  };
}

function getFractionOperationBase(settings, difficultyKey) {
  const make = (a, b, d) => ({
    a,
    b,
    d,
    result: { n: a + b, d },
    resultWrong: { n: a + b, d: d + d }
  });
  const makeSub = (a, b, d) => ({
    a,
    b,
    d,
    result: { n: a - b, d },
    resultWrong: { n: a - b, d: d - d || d + 1 }
  });
  return difficultyKey === "easy" ? {
    likeA: make(1, 2, 5),
    likeB: makeSub(5, 2, 6),
    likeC: make(2, 3, 7),
    likeD: make(3, 4, 8),
    likeE: make(2, 4, 9),
    likeF: makeSub(6, 3, 10),
    likeG: make(3, 5, 11),
    likeH: makeSub(7, 4, 12),
    likeI: make(4, 3, 13),
    likeJ: makeSub(8, 5, 14)
  } : difficultyKey === "hard" ? {
    likeA: make(5, 7, 12),
    likeB: makeSub(11, 4, 13),
    likeC: make(6, 8, 14),
    likeD: make(8, 7, 15),
    likeE: make(9, 7, 16),
    likeF: makeSub(13, 5, 17),
    likeG: make(9, 6, 18),
    likeH: makeSub(14, 7, 19),
    likeI: make(10, 8, 20),
    likeJ: makeSub(15, 8, 21)
  } : {
    likeA: make(2, 3, 7),
    likeB: makeSub(6, 2, 9),
    likeC: make(4, 3, 8),
    likeD: make(5, 4, 11),
    likeE: make(3, 5, 12),
    likeF: makeSub(7, 3, 10),
    likeG: make(6, 2, 13),
    likeH: makeSub(8, 5, 14),
    likeI: make(7, 4, 15),
    likeJ: makeSub(11, 6, 16)
  };
}

function makeFractionOpQuestion(item, operator, change) {
  const answer = operator === "+" ? item.result : item.result;
  return {
    question: `${formatFraction(item.a, item.d)} ${operator} ${formatFraction(item.b, item.d)}`,
    answer: formatFractionReduced(answer.n, answer.d),
    change
  };
}

function getRatioBase(settings, difficultyKey) {
  if (difficultyKey === "easy") {
    return {
      writeA: { left: 2, right: 3, contextA: "red counters", contextB: "blue counters" },
      writeB: { left: 3, right: 4, contextA: "boys", contextB: "girls" },
      writeC: { left: 4, right: 2, contextA: "pencils", contextB: "pens" },
      writeD: { left: 5, right: 1, contextA: "apples", contextB: "oranges" },
      writeE: { left: 6, right: 3, contextA: "cats", contextB: "dogs" },
      writeF: { left: 2, right: 5, contextA: "red beads", contextB: "green beads" },
      writeG: { left: 4, right: 3, contextA: "chairs", contextB: "tables" },
      writeH: { left: 6, right: 2, contextA: "white tiles", contextB: "black tiles" },
      writeI: { left: 3, right: 1, contextA: "triangles", contextB: "squares" },
      writeJ: { left: 8, right: 4, contextA: "markers", contextB: "rulers" },
      simplifyA: { left: 4, right: 6, answer: { left: 2, right: 3 } },
      simplifyB: { left: 6, right: 8, answer: { left: 3, right: 4 } },
      simplifyC: { left: 8, right: 12, answer: { left: 2, right: 3 } },
      simplifyD: { left: 10, right: 15, answer: { left: 2, right: 3 } },
      simplifyE: { left: 6, right: 9, answer: { left: 2, right: 3 } },
      simplifyF: { left: 9, right: 18, answer: { left: 1, right: 2 } },
      simplifyG: { left: 10, right: 20, answer: { left: 1, right: 2 } },
      simplifyH: { left: 12, right: 18, answer: { left: 2, right: 3 } },
      simplifyI: { left: 15, right: 20, answer: { left: 3, right: 4 } },
      simplifyJ: { left: 18, right: 24, answer: { left: 3, right: 4 } },
      equivA: { left: 1, right: 2, missing: 2, answer: 4 }, equivB: { left: 2, right: 3, optionA: { left: 4, right: 6 }, optionB: { left: 4, right: 5 }, correct: { left: 4, right: 6 } },
      equivC: { left: 3, right: 4, missingRight: 8, answer: 6 }, equivD: { left: 2, right: 5, targetLeft: 4, targetRight: 10 }, equivE: { left: 1, right: 3, factor: 3, answer: { left: 3, right: 9 } },
      equivF: { left: 3, right: 4, optionA: { left: 6, right: 8 }, optionB: { left: 6, right: 9 }, incorrect: { left: 6, right: 9 } }, equivG: { left: 2, right: 5, answerLeft: 4, answerRight: 10 },
      equivH: { left: 3, right: 6, targetLeft: 6, targetRight: 12, truth: "True" }, equivI: { right: 8, targetLeft: 4, targetRight: 16, answer: 2 }, equivJ: { left: 3, right: 5, answer: { left: 6, right: 10 } },
      missingA: { left: 2, targetLeft: 4, targetRight: 6, answer: 3 }, missingB: { right: 3, targetLeft: 6, targetRight: 9, answer: 2 }, missingC: { left: 1, right: 2, targetLeft: 3, answer: 6 }, missingD: { left: 3, targetLeft: 6, targetRight: 8, answer: 4 },
      missingE: { right: 4, targetLeft: 8, targetRight: 12, answer: 2 }, missingF: { left: 2, right: 3, targetRight: 9, answer: 6 }, missingG: { left: 4, targetLeft: 8, targetRight: 10, answer: 5 }, missingH: { right: 5, targetLeft: 6, targetRight: 15, answer: 2 },
      missingI: { left: 2, right: 3, targetLeft: 4, answer: 6 }, missingJ: { left: 5, targetLeft: 10, targetRight: 14, answer: 7 }
    };
  }
  if (difficultyKey === "hard") {
    return {
      writeA: { left: 5, right: 8, contextA: "red counters", contextB: "blue counters" },
      writeB: { left: 7, right: 11, contextA: "boys", contextB: "girls" },
      writeC: { left: 9, right: 4, contextA: "pencils", contextB: "pens" },
      writeD: { left: 8, right: 5, contextA: "apples", contextB: "oranges" },
      writeE: { left: 11, right: 7, contextA: "cats", contextB: "dogs" },
      writeF: { left: 3, right: 11, contextA: "red beads", contextB: "green beads" },
      writeG: { left: 12, right: 8, contextA: "chairs", contextB: "tables" },
      writeH: { left: 15, right: 6, contextA: "white tiles", contextB: "black tiles" },
      writeI: { left: 7, right: 2, contextA: "triangles", contextB: "squares" },
      writeJ: { left: 14, right: 9, contextA: "markers", contextB: "rulers" },
      simplifyA: { left: 18, right: 24, answer: { left: 3, right: 4 } },
      simplifyB: { left: 21, right: 35, answer: { left: 3, right: 5 } },
      simplifyC: { left: 24, right: 36, answer: { left: 2, right: 3 } },
      simplifyD: { left: 28, right: 42, answer: { left: 2, right: 3 } },
      simplifyE: { left: 32, right: 48, answer: { left: 2, right: 3 } },
      simplifyF: { left: 27, right: 45, answer: { left: 3, right: 5 } },
      simplifyG: { left: 30, right: 54, answer: { left: 5, right: 9 } },
      simplifyH: { left: 35, right: 49, answer: { left: 5, right: 7 } },
      simplifyI: { left: 36, right: 60, answer: { left: 3, right: 5 } },
      simplifyJ: { left: 45, right: 63, answer: { left: 5, right: 7 } },
      equivA: { left: 4, right: 7, missing: 12, answer: 21 },
      equivB: { left: 5, right: 8, optionA: { left: 15, right: 24 }, optionB: { left: 15, right: 25 }, correct: { left: 15, right: 24 } },
      equivC: { left: 7, right: 9, missingRight: 27, answer: 21 },
      equivD: { left: 6, right: 11, targetLeft: 12, targetRight: 22 },
      equivE: { left: 5, right: 6, factor: 4, answer: { left: 20, right: 24 } },
      equivF: { left: 4, right: 9, optionA: { left: 8, right: 18 }, optionB: { left: 8, right: 17 }, incorrect: { left: 8, right: 17 } },
      equivG: { left: 7, right: 12, answerLeft: 21, answerRight: 36 },
      equivH: { left: 6, right: 10, targetLeft: 18, targetRight: 30, truth: "True" },
      equivI: { right: 14, targetLeft: 10, targetRight: 35, answer: 4 },
      equivJ: { left: 8, right: 11, answer: { left: 24, right: 33 } },
      missingA: { left: 4, targetLeft: 16, targetRight: 28, answer: 7 },
      missingB: { right: 5, targetLeft: 20, targetRight: 25, answer: 4 },
      missingC: { left: 3, right: 8, targetLeft: 12, answer: 32 },
      missingD: { left: 5, targetLeft: 20, targetRight: 36, answer: 9 },
      missingE: { right: 9, targetLeft: 14, targetRight: 45, answer: 2.8 },
      missingF: { left: 7, right: 12, targetRight: 60, answer: 35 },
      missingG: { left: 8, targetLeft: 24, targetRight: 33, answer: 11 },
      missingH: { right: 7, targetLeft: 18, targetRight: 21, answer: 6 },
      missingI: { left: 5, right: 9, targetLeft: 20, answer: 36 },
      missingJ: { left: 9, targetLeft: 27, targetRight: 39, answer: 13 }
    };
  }
  return {
    writeA: { left: 3, right: 5, contextA: "red counters", contextB: "blue counters" },
    writeB: { left: 4, right: 7, contextA: "boys", contextB: "girls" },
    writeC: { left: 6, right: 2, contextA: "pencils", contextB: "pens" },
    writeD: { left: 5, right: 3, contextA: "apples", contextB: "oranges" },
    writeE: { left: 7, right: 4, contextA: "cats", contextB: "dogs" },
    writeF: { left: 2, right: 9, contextA: "red beads", contextB: "green beads" },
    writeG: { left: 8, right: 6, contextA: "chairs", contextB: "tables" },
    writeH: { left: 9, right: 3, contextA: "white tiles", contextB: "black tiles" },
    writeI: { left: 4, right: 1, contextA: "triangles", contextB: "squares" },
    writeJ: { left: 10, right: 5, contextA: "markers", contextB: "rulers" },
    simplifyA: { left: 8, right: 12, answer: { left: 2, right: 3 } },
    simplifyB: { left: 15, right: 20, answer: { left: 3, right: 4 } },
    simplifyC: { left: 18, right: 24, answer: { left: 3, right: 4 } },
    simplifyD: { left: 14, right: 21, answer: { left: 2, right: 3 } },
    simplifyE: { left: 16, right: 24, answer: { left: 2, right: 3 } },
    simplifyF: { left: 9, right: 27, answer: { left: 1, right: 3 } },
    simplifyG: { left: 12, right: 30, answer: { left: 2, right: 5 } },
    simplifyH: { left: 20, right: 28, answer: { left: 5, right: 7 } },
    simplifyI: { left: 24, right: 36, answer: { left: 2, right: 3 } },
    simplifyJ: { left: 18, right: 42, answer: { left: 3, right: 7 } },
    equivA: { left: 2, right: 3, missing: 4, answer: 6 },
    equivB: { left: 3, right: 5, optionA: { left: 6, right: 10 }, optionB: { left: 6, right: 9 }, correct: { left: 6, right: 10 } },
    equivC: { left: 4, right: 7, missingRight: 21, answer: 12 },
    equivD: { left: 5, right: 8, targetLeft: 10, targetRight: 16 },
    equivE: { left: 3, right: 4, factor: 3, answer: { left: 9, right: 12 } },
    equivF: { left: 2, right: 5, optionA: { left: 4, right: 10 }, optionB: { left: 4, right: 11 }, incorrect: { left: 4, right: 11 } },
    equivG: { left: 3, right: 7, answerLeft: 9, answerRight: 21 },
    equivH: { left: 4, right: 6, targetLeft: 8, targetRight: 12, truth: "True" },
    equivI: { right: 9, targetLeft: 6, targetRight: 18, answer: 3 },
    equivJ: { left: 5, right: 7, answer: { left: 10, right: 14 } },
    missingA: { left: 3, targetLeft: 9, targetRight: 15, answer: 5 },
    missingB: { right: 4, targetLeft: 12, targetRight: 16, answer: 3 },
    missingC: { left: 2, right: 5, targetLeft: 6, answer: 15 },
    missingD: { left: 4, targetLeft: 12, targetRight: 18, answer: 6 },
    missingE: { right: 7, targetLeft: 12, targetRight: 28, answer: 3 },
    missingF: { left: 3, right: 8, targetRight: 24, answer: 9 },
    missingG: { left: 5, targetLeft: 15, targetRight: 24, answer: 8 },
    missingH: { right: 6, targetLeft: 14, targetRight: 21, answer: 4 },
    missingI: { left: 3, right: 4, targetLeft: 9, answer: 12 },
    missingJ: { left: 7, targetLeft: 21, targetRight: 30, answer: 10 }
  };
}

function getLikeTermsBase(settings, difficultyKey) {
  const simple = (expr, answer) => ({ expr, answer });
  const match = (correct, incorrect, answer) => ({ correct, incorrect, answer });
  const missing = (expr, variable, constantSign, constant, answer) => ({ expr, variable, constantSign, constant, answer });
  const error = (expr, wrong, right) => ({ expr, wrong, right });
  if (difficultyKey === "easy") {
    return {
      simpleA: simple("x + 2x", "3x"),
      simpleB: simple("3x + x", "4x"),
      simpleC: simple("5x - x", "4x"),
      simpleD: simple("2y + 3y", "5y"),
      simpleE: simple("4x + 2", "4x + 2"),
      simpleF: simple("6a - 2a", "4a"),
      simpleG: simple("2p + 3p", "5p"),
      simpleH: simple("7m - 3m", "4m"),
      simpleI: simple("4q + q", "5q"),
      simpleJ: simple("8r - 2r", "6r"),
      matchA: match("x + 2x", "x + 2", "3x"), matchB: match("3y + y", "3y + 1", "4y"), matchC: match("4x + 2x", "4x + 2", "6x"), matchD: match("5a - a", "5a - 1", "4a"), matchE: match("6p + 2p", "6p + 2", "8p"), matchF: match("7m - 3m", "7m - 3", "4m"), matchG: match("2q + q", "2q + 1", "3q"), matchH: match("9r - 4r", "9r - 4", "5r"), matchI: match("3s + 2s", "3s + 2", "5s"), matchJ: match("6t - 2t", "6t - 2", "4t"),
      missingA: missing("x + 2x + 4", "x", "+", 4, 3), missingB: missing("2y + 3y + 1", "y", "+", 1, 5), missingC: missing("5x - x - 2", "x", "-", 2, 4), missingD: missing("3a + 2a + 6", "a", "+", 6, 5), missingE: missing("4m + 2m + 3", "m", "+", 3, 6), missingF: missing("7p - 2p - 5", "p", "-", 5, 5), missingG: missing("2q + 4q + 2", "q", "+", 2, 6), missingH: missing("8r - 3r + 1", "r", "+", 1, 5), missingI: missing("4s + 3s - 3", "s", "-", 3, 7), missingJ: missing("5t + 2t + 7", "t", "+", 7, 7),
      errorA: error("x + 3", "4x", "x + 3"), errorB: error("2x + 3x", "5x", "5x"), errorC: error("4y - y", "3", "3y"), errorD: error("6a + 2", "8a", "6a + 2"), errorE: error("5m + 2m", "7m", "7m"), errorF: error("7p - 3", "4p", "7p - 3"), errorG: error("8q - 2q", "6q", "6q"), errorH: error("9r + 4", "13r", "9r + 4"), errorI: error("3s + 3s", "6", "6s"), errorJ: error("4t - t", "3", "3t")
    };
  }
  if (difficultyKey === "hard") {
    return {
      simpleA: simple("3x + 5 - 2x + 4x - 1", "5x + 4"),
      simpleB: simple("7x - 3 + 2x - 4x + 6", "5x + 3"),
      simpleC: simple("6x - 2x + 3 - x", "3x + 3"),
      simpleD: simple("5y + 2 - 3y + 4y - 6", "6y - 4"),
      simpleE: simple("8x - 5 + 2x - 3 + x", "11x - 8"),
      simpleF: simple("9a - 4a + 7 - 2", "5a + 5"),
      simpleG: simple("4p + 6 - p + 3p - 1", "6p + 5"),
      simpleH: simple("10m - 2 + 3m - 5m + 4", "8m + 2"),
      simpleI: simple("7q + 8 - 2q - 3 + q", "6q + 5"),
      simpleJ: simple("11r - 6 + 2r - 5r + 1", "8r - 5"),
      matchA: match("3x + 5 - 2x + 4x", "3x + 5 - 2 + 4x", "5x + 5"),
      matchB: match("7y - 3 + 2y", "7y - 3y + 2", "9y - 3"),
      matchC: match("4x + 1 + 3x - 2", "4x + 1 + 3 - 2x", "7x - 1"),
      matchD: match("5a - a + 2 + 3a", "5a - 1a + 2a + 3", "7a + 2"),
      matchE: match("7p + 2 - 3p + 5", "7p + 2 - 3 + 5p", "4p + 7"),
      matchF: match("8m - 5m + 1 - 4", "8m - 5 + 1 - 4m", "3m - 3"),
      matchG: match("2q + q + 4 - 2", "2q + 4q - 2", "3q + 2"),
      matchH: match("9r - 4r - 3 + 2", "9r - 4 - 3r + 2r", "5r - 1"),
      matchI: match("3s + 2 + 2s - 6", "3s + 2s + 2s - 6", "5s - 4"),
      matchJ: match("6t - 2 + t + 5", "6t - 2t + 1 + 5", "7t + 3"),
      missingA: missing("3x + 5 - 2x + 4x", "x", "+", 5, 5),
      missingB: missing("4y - 1 + 3y + 2", "y", "+", 1, 7),
      missingC: missing("7x - 3x - 2 + x", "x", "-", 2, 5),
      missingD: missing("5a + a + 6 + 2a", "a", "+", 6, 8),
      missingE: missing("8m - 2m + 3 + m", "m", "+", 3, 7),
      missingF: missing("9p - 4p - 5 + 2p", "p", "-", 5, 7),
      missingG: missing("3q + 6q + 2 - q", "q", "+", 2, 8),
      missingH: missing("10r - 6r + 1 + 2r", "r", "+", 1, 6),
      missingI: missing("4s + 4s - 3 + s", "s", "-", 3, 9),
      missingJ: missing("7t + 2t + 7 - 3t", "t", "+", 7, 6),
      errorA: error("2x + 3 - x", "4x", "x + 3"),
      errorB: error("2x + 3x - 1", "5x", "5x - 1"),
      errorC: error("4y - y + 2", "3 + 2", "3y + 2"),
      errorD: error("6a + 2 - a", "7a + 2", "5a + 2"),
      errorE: error("5m + 2m - 1 + 3", "7m + 2", "7m + 2"),
      errorF: error("7p - 3 + 2p", "6p", "9p - 3"),
      errorG: error("8q - 2q + 1", "6q + 1", "6q + 1"),
      errorH: error("9r + 4 - 2r", "11r + 4", "7r + 4"),
      errorI: error("3s + 3s - 5", "6 - 5", "6s - 5"),
      errorJ: error("4t - t + 2 + 3t", "6t + 2", "6t + 2")
    };
  }
  return {
    simpleA: simple("2x + 3x", "5x"),
    simpleB: simple("4x + 2x", "6x"),
    simpleC: simple("5x - 2x", "3x"),
    simpleD: simple("3y + y", "4y"),
    simpleE: simple("6x + 4 - 2x", "4x + 4"),
    simpleF: simple("7a - 3a + 2", "4a + 2"),
    simpleG: simple("2p + 5 + 3p", "5p + 5"),
    simpleH: simple("8m - 2m - 1", "6m - 1"),
    simpleI: simple("4q + 3 - q", "3q + 3"),
    simpleJ: simple("9r - 4 + 2r", "11r - 4"),
    matchA: match("2x + 3x", "2x + 3", "5x"),
    matchB: match("6y - 2y", "6y - 2", "4y"),
    matchC: match("4x + 1 + 3x", "4x + 1 + 3", "7x + 1"),
    matchD: match("5a - a + 2", "5a - 1a + 2a", "4a + 2"),
    matchE: match("7p + 2 - 3p", "7p + 2 - 3", "4p + 2"),
    matchF: match("8m - 5m + 1", "8m - 5 + 1", "3m + 1"),
    matchG: match("2q + q + 4", "2q + 4q", "3q + 4"),
    matchH: match("9r - 4r - 3", "9r - 4 - 3r", "5r - 3"),
    matchI: match("3s + 2 + 2s", "3s + 2s + 2s", "5s + 2"),
    matchJ: match("6t - 2 + t", "6t - 2t + 1", "7t - 2"),
    missingA: missing("2x + 3x + 4", "x", "+", 4, 5),
    missingB: missing("4y + 2y + 1", "y", "+", 1, 6),
    missingC: missing("7x - 3x - 2", "x", "-", 2, 4),
    missingD: missing("5a + a + 6", "a", "+", 6, 6),
    missingE: missing("8m - 2m + 3", "m", "+", 3, 6),
    missingF: missing("9p - 4p - 5", "p", "-", 5, 5),
    missingG: missing("3q + 6q + 2", "q", "+", 2, 9),
    missingH: missing("10r - 6r + 1", "r", "+", 1, 4),
    missingI: missing("4s + 4s - 3", "s", "-", 3, 8),
    missingJ: missing("7t + 2t + 7", "t", "+", 7, 9),
    errorA: error("2x + 3", "5x", "2x + 3"),
    errorB: error("2x + 3x", "5x", "5x"),
    errorC: error("4y - y", "3", "3y"),
    errorD: error("6a + 2", "8a", "6a + 2"),
    errorE: error("5m + 2m - 1", "7m - 1", "7m - 1"),
    errorF: error("7p - 3", "4p", "7p - 3"),
    errorG: error("8q - 2q + 1", "6q + 1", "6q + 1"),
    errorH: error("9r + 4", "13r", "9r + 4"),
    errorI: error("3s + 3s", "6", "6s"),
    errorJ: error("4t - t + 2", "3t + 2", "3t + 2")
  };
}

function getCoordinateBase(settings, difficultyKey) {
  const points = difficultyKey === "easy"
    ? [
      { x: 2, y: 3 }, { x: 4, y: 1 }, { x: -2, y: 4 }, { x: 3, y: -2 }, { x: 1, y: 5 },
      { x: -3, y: 2 }, { x: 5, y: -1 }, { x: -1, y: -3 }, { x: 2, y: -4 }, { x: -4, y: 1 }
    ]
    : difficultyKey === "hard"
      ? [
        { x: 6, y: -5 }, { x: -5, y: 6 }, { x: -6, y: -4 }, { x: 5, y: -6 }, { x: 4, y: 6 },
        { x: -6, y: 3 }, { x: 6, y: 2 }, { x: -4, y: -6 }, { x: 3, y: -5 }, { x: -5, y: 4 }
      ]
      : [
        { x: 3, y: 4 }, { x: -2, y: 5 }, { x: -4, y: -3 }, { x: 5, y: -2 }, { x: 1, y: -5 },
        { x: -5, y: 2 }, { x: 4, y: 1 }, { x: -3, y: -4 }, { x: 2, y: -1 }, { x: -1, y: 3 }
      ];
  return { pointA: points[0], pointB: points[1], pointC: points[2], points };
}

function getDecimalPlaceValueBase(settings, difficultyKey) {
  if (difficultyKey === "easy") {
    return {
      compareA: 3.4, compareB: 3.5, compareC: 5.2, compareD: 5.8, compareE: 2.7, compareF: 2.3, compareG: 6.4, compareH: 6.1,
      orderA: [1.4, 1.3, 1.5], orderB: [2.1, 2.7, 2.4], orderC: [3.2, 3.9, 3.5],
      decimalA: 4.3, decimalB: 7.2, decimalC: 5.4, decimalD: 8.1, decimalE: 6.4, decimalF: 2.5, decimalG: 9.1, decimalH: 3.2, decimalI: 1.4,
      decimalDigitA: 3, decimalValueA: 0.3, decimalDigitB: 2, decimalValueB: 0.2, decimalDigitC: 4, decimalValueC: 0.4,
      decimalDigitD: 1, decimalValueD: 0.1, decimalDigitE: 6, decimalValueE: 0.6, decimalPlaceF: "tenths", decimalValueF: 0.5,
      decimalDigitG: 2, decimalValueG: 0.2, decimalDigitH: 3, decimalDigitI: 4, decimalValueI: 0.4,
      roundA: 4.6, roundB: 7.2, roundC: 3.8, roundD: 5.4, roundE: 6.3, roundF: 6.7, roundG: 8.9, roundH: 2.1, roundI: 4.2, roundJ: 9.5, roundK: 1.8,
      intervalA: { low: 4.3, high: 4.4, optionA: 4.36, optionB: 4.46, answer: 4.36 },
      intervalC: { low: 5.4, high: 5.5, answer: 5.48 },
      intervalD: { low: 8.1, high: 8.2 },
      intervalE: { low: 6.4, high: 6.5, optionA: 6.47, optionB: 6.57, answer: 6.47 },
      intervalF: { low: 3.2, high: 3.3 },
      intervalG: { low: 2.5, high: 2.6 },
      intervalH: { low: 1.4, high: 1.5 },
      intervalI: { low: 7.2, high: 7.3 },
      intervalJ: { low: 1.4, high: 1.5 },
      statementB: { value: 7.2, target: 7.2, other: 7.3, answer: "True" }
    };
  }
  if (difficultyKey === "hard") {
    return {
      compareA: 3.405, compareB: 3.45, compareC: 5.089, compareD: 5.098, compareE: 2.703, compareF: 2.7305, compareG: 6.404, compareH: 6.44,
      orderA: [1.405, 1.35, 1.503], orderB: [2.07, 2.007, 2.17], orderC: [3.909, 3.99, 3.919],
      decimalA: 4.306, decimalB: 7.205, decimalC: 5.408, decimalD: 8.031, decimalE: 6.407, decimalF: 2.056, decimalG: 9.104, decimalH: 3.287, decimalI: 1.405,
      decimalDigitA: 3, decimalValueA: 0.3, decimalDigitB: 2, decimalValueB: 0.2, decimalDigitC: 8, decimalValueC: 0.008,
      decimalDigitD: 3, decimalValueD: 0.03, decimalDigitE: 4, decimalValueE: 0.4, decimalPlaceF: "hundredths", decimalValueF: 0.05,
      decimalDigitG: 1, decimalValueG: 0.1, decimalDigitH: 8, decimalDigitI: 4, decimalValueI: 0.004,
      roundA: 4.64, roundB: 7.245, roundC: 3.864, roundD: 5.495, roundE: 6.304, roundF: 6.749, roundG: 8.951, roundH: 2.149, roundI: 4.264, roundJ: 9.514, roundK: 1.845,
      intervalA: { low: 4.36, high: 4.37, optionA: 4.365, optionB: 4.375, answer: 4.365 },
      intervalC: { low: 5.48, high: 5.49, answer: 5.487 },
      intervalD: { low: 8.31, high: 8.32 },
      intervalE: { low: 6.40, high: 6.41, optionA: 6.407, optionB: 6.417, answer: 6.407 },
      intervalF: { low: 3.28, high: 3.29 },
      intervalG: { low: 2.56, high: 2.57 },
      intervalH: { low: 1.40, high: 1.41 },
      intervalI: { low: 7.20, high: 7.21 },
      intervalJ: { low: 1.84, high: 1.85 },
      statementB: { value: 7.205, target: 7.21, other: 7.20, answer: "False" }
    };
  }
  return {
    compareA: 3.45, compareB: 3.54, compareC: 5.08, compareD: 5.8, compareE: 2.73, compareF: 2.703, compareG: 6.4, compareH: 6.04,
    orderA: [1.4, 1.35, 1.53], orderB: [2.07, 2.7, 2.17], orderC: [3.09, 3.9, 3.19],
    decimalA: 4.36, decimalB: 7.205, decimalC: 5.48, decimalD: 8.31, decimalE: 6.407, decimalF: 2.56, decimalG: 9.14, decimalH: 3.287, decimalI: 1.405,
    decimalDigitA: 3, decimalValueA: 0.3, decimalDigitB: 2, decimalValueB: 0.2, decimalDigitC: 8, decimalValueC: 0.08,
    decimalDigitD: 3, decimalValueD: 0.3, decimalDigitE: 4, decimalValueE: 0.4, decimalPlaceF: "tenths", decimalValueF: 0.5,
    decimalDigitG: 1, decimalValueG: 0.1, decimalDigitH: 8, decimalDigitI: 4, decimalValueI: 0.4,
    roundA: 4.6, roundB: 7.24, roundC: 3.86, roundD: 5.49, roundE: 6.3, roundF: 6.7, roundG: 8.95, roundH: 2.14, roundI: 4.26, roundJ: 9.51, roundK: 1.84,
    intervalA: { low: 4.3, high: 4.4, optionA: 4.36, optionB: 4.46, answer: 4.36 },
    intervalC: { low: 5.4, high: 5.5, answer: 5.48 },
    intervalD: { low: 8.3, high: 8.4 },
    intervalE: { low: 6.4, high: 6.5, optionA: 6.47, optionB: 6.57, answer: 6.47 },
    intervalF: { low: 3.2, high: 3.3 },
    intervalG: { low: 2.5, high: 2.6 },
    intervalH: { low: 1.4, high: 1.5 },
    intervalI: { low: 7.2, high: 7.3 },
    intervalJ: { low: 1.4, high: 1.5 },
    statementB: { value: 7.205, target: 7.2, other: 7.3, answer: "True" }
  };
}

function getFdpBase(settings, difficultyKey) {
  const values = difficultyKey === "easy"
    ? [
      { f: { n: 1, d: 2 }, d: 0.5, p: 50 },
      { f: { n: 1, d: 4 }, d: 0.25, p: 25 },
      { f: { n: 3, d: 4 }, d: 0.75, p: 75 },
      { f: { n: 1, d: 5 }, d: 0.2, p: 20 },
      { f: { n: 2, d: 5 }, d: 0.4, p: 40 },
      { f: { n: 3, d: 5 }, d: 0.6, p: 60 },
      { f: { n: 4, d: 5 }, d: 0.8, p: 80 },
      { f: { n: 1, d: 10 }, d: 0.1, p: 10 },
      { f: { n: 9, d: 10 }, d: 0.9, p: 90 },
      { f: { n: 3, d: 10 }, d: 0.3, p: 30 }
    ]
    : difficultyKey === "hard"
      ? [
        { f: { n: 1, d: 8 }, d: 0.125, p: 12.5 },
        { f: { n: 3, d: 8 }, d: 0.375, p: 37.5 },
        { f: { n: 5, d: 8 }, d: 0.625, p: 62.5 },
        { f: { n: 7, d: 8 }, d: 0.875, p: 87.5 },
        { f: { n: 1, d: 20 }, d: 0.05, p: 5 },
        { f: { n: 3, d: 20 }, d: 0.15, p: 15 },
        { f: { n: 7, d: 20 }, d: 0.35, p: 35 },
        { f: { n: 9, d: 20 }, d: 0.45, p: 45 },
        { f: { n: 11, d: 20 }, d: 0.55, p: 55 },
        { f: { n: 17, d: 20 }, d: 0.85, p: 85 }
      ]
      : [
        { f: { n: 1, d: 2 }, d: 0.5, p: 50 },
        { f: { n: 1, d: 4 }, d: 0.25, p: 25 },
        { f: { n: 3, d: 4 }, d: 0.75, p: 75 },
        { f: { n: 1, d: 5 }, d: 0.2, p: 20 },
        { f: { n: 2, d: 5 }, d: 0.4, p: 40 },
        { f: { n: 3, d: 5 }, d: 0.6, p: 60 },
        { f: { n: 4, d: 5 }, d: 0.8, p: 80 },
        { f: { n: 1, d: 10 }, d: 0.1, p: 10 },
        { f: { n: 9, d: 10 }, d: 0.9, p: 90 },
        { f: { n: 3, d: 10 }, d: 0.3, p: 30 }
      ];

  return {
    a: values[0],
    b: values[1],
    c: values[2],
    d: values[3],
    e: values[4],
    f: values[5],
    g: values[6],
    h: values[7],
    i: values[8],
    j: values[9]
  };
}

function getFunctionMachineBase(settings, difficultyKey) {
  if (difficultyKey === "easy") {
    return {
      addA: 2, addB: 3, addC: 4, addD: 5,
      subA: 2, subB: 3,
      multA: 2, multB: 3, multC: 4,
      divA: 2, divB: 4,
      inputA: 5, inputB: 6, inputC: 8, inputD: 4, inputE: 7,
      inputF: 16, inputG: 9, inputH: 11, inputI: 6, inputJ: 10
    };
  }

  if (difficultyKey === "hard") {
    return {
      addA: 7, addB: 9, addC: 11, addD: 13,
      subA: 8, subB: 12,
      multA: 4, multB: 6, multC: 7,
      divA: 6, divB: 9,
      inputA: 14, inputB: 18, inputC: 11, inputD: 12, inputE: 16,
      inputF: 54, inputG: 19, inputH: 15, inputI: 15, inputJ: 24
    };
  }

  return {
    addA: 3, addB: 5, addC: 4, addD: 7,
    subA: 2, subB: 6,
    multA: 2, multB: 3, multC: 4,
    divA: 2, divB: 5,
    inputA: 7, inputB: 9, inputC: 11, inputD: 6, inputE: 8,
    inputF: 18, inputG: 12, inputH: 14, inputI: 5, inputJ: 13
  };
}

function getSequenceBase(settings, difficultyKey) {
  const makeContinue = (terms, next) => ({ terms, next });
  const makeRule = (terms, rule) => ({ terms, rule });
  const makeNth = (terms, rule, distractor) => ({ terms, rule, distractor });
  const makeMissing = (prompt, answer) => ({ prompt, answer });

  if (difficultyKey === "easy") {
    return {
      continueA: makeContinue([2, 4, 6], [8, 10]),
      continueB: makeContinue([5, 8, 11], [14, 17]),
      continueC: makeContinue([1, 3, 5], [7, 9]),
      continueD: makeContinue([12, 10, 8], [6, 4]),
      continueE: makeContinue([4, 7, 10], [13, 16]),
      continueF: makeContinue([3, 6, 9], [12, 15]),
      continueG: makeContinue([6, 9, 12], [15, 18]),
      continueH: makeContinue([10, 12, 14], [16, 18]),
      continueI: makeContinue([7, 9, 11], [13, 15]),
      continueJ: makeContinue([8, 11, 14], [17, 20]),
      ruleA: makeRule([2, 4, 6], "add 2"),
      ruleB: makeRule([5, 8, 11], "add 3"),
      ruleC: makeRule([1, 5, 9], "add 4"),
      ruleD: makeRule([12, 10, 8], "subtract 2"),
      ruleE: makeRule([15, 12, 9], "subtract 3"),
      ruleF: makeRule([4, 8, 12], "add 4"),
      ruleG: makeRule([3, 6, 9], "add 3"),
      ruleH: makeRule([20, 18, 16], "subtract 2"),
      ruleI: makeRule([7, 10, 13], "add 3"),
      ruleJ: makeRule([9, 13, 17], "add 4"),
      missingA: { terms: [2, 4, 6], next: 10, answer: 8, prompt: "2, 4, 6, __, 10" },
      missingB: { first: 5, third: 11, fourth: 14, answer: 8, prompt: "5, __, 11, 14" },
      missingC: { first: 1, second: 4, fourth: 10, answer: 7, prompt: "1, 4, __, 10" },
      missingD: makeMissing("12, __, 8, 6", 10),
      missingE: makeMissing("__ , 7, 10, 13", 4),
      missingF: makeMissing("3, 6, __, 12", 9),
      missingG: makeMissing("20, 18, __, 14", 16),
      missingH: makeMissing("4, __, 10, 13", 7),
      missingI: makeMissing("6, 9, __, 15", 12),
      missingJ: makeMissing("8, __, 14, 17", 11),
      nthA: makeNth([2, 4, 6], "2n", "n + 2"),
      nthB: makeNth([3, 6, 9], "3n", "3n + 3"),
      nthC: makeNth([4, 7, 10], "3n + 1", "3n"),
      nthD: makeNth([5, 9, 13], "4n + 1", "4n"),
      nthE: makeNth([1, 4, 7], "3n - 2", "3n + 2"),
      nthF: makeNth([6, 10, 14], "4n + 2", "4n"),
      nthG: makeNth([7, 12, 17], "5n + 2", "5n"),
      nthH: makeNth([8, 11, 14], "3n + 5", "3n + 3"),
      nthI: makeNth([9, 13, 17], "4n + 5", "4n + 1"),
      nthJ: makeNth([10, 15, 20], "5n + 5", "5n")
    };
  }

  if (difficultyKey === "hard") {
    return {
      continueA: makeContinue([-6, -1, 4], [9, 14]),
      continueB: makeContinue([12, 19, 26], [33, 40]),
      continueC: makeContinue([5, 11, 17], [23, 29]),
      continueD: makeContinue([40, 34, 28], [22, 16]),
      continueE: makeContinue([-10, -3, 4], [11, 18]),
      continueF: makeContinue([9, 15, 21], [27, 33]),
      continueG: makeContinue([3, 10, 17], [24, 31]),
      continueH: makeContinue([25, 20, 15], [10, 5]),
      continueI: makeContinue([14, 22, 30], [38, 46]),
      continueJ: makeContinue([-8, -2, 4], [10, 16]),
      ruleA: makeRule([-6, -1, 4], "add 5"),
      ruleB: makeRule([12, 19, 26], "add 7"),
      ruleC: makeRule([5, 11, 17], "add 6"),
      ruleD: makeRule([40, 34, 28], "subtract 6"),
      ruleE: makeRule([-10, -3, 4], "add 7"),
      ruleF: makeRule([9, 15, 21], "add 6"),
      ruleG: makeRule([3, 10, 17], "add 7"),
      ruleH: makeRule([25, 20, 15], "subtract 5"),
      ruleI: makeRule([14, 22, 30], "add 8"),
      ruleJ: makeRule([-8, -2, 4], "add 6"),
      missingA: { terms: [-6, -1, 4], next: 14, answer: 9, prompt: "-6, -1, 4, __, 14" },
      missingB: { first: 12, third: 26, fourth: 33, answer: 19, prompt: "12, __, 26, 33" },
      missingC: { first: 5, second: 11, fourth: 23, answer: 17, prompt: "5, 11, __, 23" },
      missingD: makeMissing("40, __, 28, 22", 34),
      missingE: makeMissing("__ , -3, 4, 11", -10),
      missingF: makeMissing("9, 15, __, 27", 21),
      missingG: makeMissing("3, 10, __, 24", 17),
      missingH: makeMissing("25, __, 15, 10", 20),
      missingI: makeMissing("14, 22, __, 38", 30),
      missingJ: makeMissing("-8, __, 4, 10", -2),
      nthA: makeNth([-6, -1, 4], "5n - 11", "5n - 6"),
      nthB: makeNth([12, 19, 26], "7n + 5", "7n - 2"),
      nthC: makeNth([5, 11, 17], "6n - 1", "6n + 1"),
      nthD: makeNth([40, 34, 28], "-6n + 46", "-6n + 40"),
      nthE: makeNth([-10, -3, 4], "7n - 17", "7n - 10"),
      nthF: makeNth([9, 15, 21], "6n + 3", "6n - 3"),
      nthG: makeNth([3, 10, 17], "7n - 4", "7n + 4"),
      nthH: makeNth([25, 20, 15], "-5n + 30", "-5n + 25"),
      nthI: makeNth([14, 22, 30], "8n + 6", "8n - 2"),
      nthJ: makeNth([-8, -2, 4], "6n - 14", "6n - 8")
    };
  }

  return {
    continueA: makeContinue([4, 7, 10], [13, 16]),
    continueB: makeContinue([6, 11, 16], [21, 26]),
    continueC: makeContinue([2, 6, 10], [14, 18]),
    continueD: makeContinue([20, 17, 14], [11, 8]),
    continueE: makeContinue([5, 11, 17], [23, 29]),
    continueF: makeContinue([1, 4, 7], [10, 13]),
    continueG: makeContinue([-3, 1, 5], [9, 13]),
    continueH: makeContinue([10, 15, 20], [25, 30]),
    continueI: makeContinue([8, 12, 16], [20, 24]),
    continueJ: makeContinue([7, 10, 13], [16, 19]),
    ruleA: makeRule([3, 6, 9], "add 3"),
    ruleB: makeRule([5, 9, 13], "add 4"),
    ruleC: makeRule([2, 7, 12], "add 5"),
    ruleD: makeRule([18, 15, 12], "subtract 3"),
    ruleE: makeRule([30, 25, 20], "subtract 5"),
    ruleF: makeRule([4, 10, 16], "add 6"),
    ruleG: makeRule([1, 8, 15], "add 7"),
    ruleH: makeRule([12, 10, 8], "subtract 2"),
    ruleI: makeRule([9, 13, 17], "add 4"),
    ruleJ: makeRule([14, 18, 22], "add 4"),
    missingA: { terms: [5, 8, 11], next: 17, answer: 14, prompt: "5, 8, 11, __, 17" },
    missingB: { first: 4, third: 12, fourth: 16, answer: 8, prompt: "4, __, 12, 16" },
    missingC: { first: 7, second: 10, fourth: 16, answer: 13, prompt: "7, 10, __, 16" },
    missingD: makeMissing("20, __, 14, 11", 17),
    missingE: makeMissing("__ , 9, 13, 17", 5),
    missingF: makeMissing("2, 7, __, 17", 12),
    missingG: makeMissing("30, 25, __, 15", 20),
    missingH: makeMissing("1, __, 9, 13", 5),
    missingI: makeMissing("6, 12, __, 24", 18),
    missingJ: makeMissing("11, __, 19, 23", 15),
    nthA: makeNth([3, 6, 9], "3n", "n + 3"),
    nthB: makeNth([5, 10, 15], "5n", "5n + 5"),
    nthC: makeNth([4, 7, 10], "3n + 1", "3n"),
    nthD: makeNth([6, 10, 14], "4n + 2", "4n"),
    nthE: makeNth([2, 5, 8], "3n - 1", "3n + 1"),
    nthF: makeNth([7, 12, 17], "5n + 2", "5n - 2"),
    nthG: makeNth([1, 4, 7], "3n - 2", "3n + 2"),
    nthH: makeNth([8, 12, 16], "4n + 4", "4n"),
    nthI: makeNth([9, 15, 21], "6n + 3", "6n - 3"),
    nthJ: makeNth([10, 14, 18], "4n + 6", "4n + 4")
  };
}

function getDecimalOperationBase(settings, difficultyKey) {
  const makeDirect = (left, operation, right) => ({
    left,
    operation,
    right,
    answer: operation === "+" ? trimTrailingZero(left + right) : trimTrailingZero(left - right)
  });
  const makeShift = (value) => ({
    value,
    times10: trimTrailingZero(value * 10),
    divide10: trimTrailingZero(value / 10),
    times100: trimTrailingZero(value * 100),
    divide100: trimTrailingZero(value / 100),
    times1000: trimTrailingZero(value * 1000),
    divide1000: trimTrailingZero(value / 1000)
  });
  const makeError = (prompt, wrong, right) => ({ prompt, wrong, right });

  if (difficultyKey === "easy") {
    return {
      directA: makeDirect(3.4, "+", 1.2),
      directB: makeDirect(5.7, "-", 2.3),
      directC: makeDirect(4.8, "+", 0.7),
      directD: makeDirect(7.2, "-", 1.4),
      directE: makeDirect(2.6, "+", 0.3),
      directF: makeDirect(9.1, "-", 4.8),
      directG: makeDirect(6.5, "+", 1.2),
      directH: makeDirect(8.4, "-", 0.9),
      directI: makeDirect(1.7, "+", 2.0),
      directJ: makeDirect(10.2, "-", 3.6),
      shiftA: makeShift(3.4),
      shiftB: makeShift(5.6),
      shiftC: makeShift(0.47),
      shiftD: makeShift(8.6),
      shiftE: makeShift(0.9),
      shiftF: makeShift(42),
      shiftG: { value: 2.3, optionA: trimTrailingZero(2.3 * 10), optionB: 2.03, answer: trimTrailingZero(2.3 * 10) },
      shiftH: { value: 7.2, answer: trimTrailingZero(7.2 / 10) },
      shiftI: { value: 4.5, wrong: 4.50 },
      shiftJ: makeShift(9.8),
      missingA: { left: 2.4, total: 5.9, answer: 3.5, prompt: "2.4 + ? = 5.9" },
      missingB: { right: 1.7, result: 4.8, answer: 6.5, prompt: "? - 1.7 = 4.8" },
      missingC: { left: 3.0, total: 4.2, answer: 1.2, prompt: "3.0 + ? = 4.2" },
      missingD: { answer: 2.8, prompt: "7.4 - ? = 4.6" },
      missingE: { answer: 0.9, prompt: "? + 1.6 = 2.5" },
      missingF: { answer: 4.2, prompt: "6.8 - ? = 2.6" },
      missingG: { answer: 2.7, prompt: "? + 0.8 = 3.5" },
      missingH: { answer: 1.3, prompt: "5.1 - ? = 3.8" },
      missingI: { answer: 0.6, prompt: "2.1 + ? = 2.7" },
      missingJ: { answer: 3.4, prompt: "? - 1.2 = 2.2" },
      errorA: makeError("3.4 + 1.2", 4.52, 4.6),
      errorB: makeError("5.7 - 2.3", 3.4, 3.4),
      errorC: makeError("4.8 + 0.7", 4.15, 5.5),
      errorD: makeError("7.2 - 1.4", 6.8, 5.8),
      errorE: makeError("2.6 × 10", 2.60, 26),
      errorF: makeError("8.4 ÷ 10", 0.84, 0.84),
      errorG: makeError("6.5 + 1.2", 7.7, 7.7),
      errorH: makeError("9.1 - 4.8", 4.3, 4.3),
      errorI: makeError("0.47 × 10", 0.47, 4.7),
      errorJ: makeError("42 ÷ 100", 4.2, 0.42)
    };
  }

  if (difficultyKey === "hard") {
    return {
      directA: makeDirect(3.47, "+", 1.208),
      directB: makeDirect(15.72, "-", 2.39),
      directC: makeDirect(4.083, "+", 0.709),
      directD: makeDirect(17.25, "-", 1.406),
      directE: makeDirect(2.604, "+", 0.357),
      directF: makeDirect(19.1, "-", 4.86),
      directG: makeDirect(6.053, "+", 1.207),
      directH: makeDirect(8.44, "-", 0.98),
      directI: makeDirect(11.75, "+", 2.055),
      directJ: makeDirect(20.2, "-", 3.67),
      shiftA: makeShift(3.47),
      shiftB: makeShift(5.68),
      shiftC: makeShift(0.472),
      shiftD: makeShift(86.4),
      shiftE: makeShift(0.907),
      shiftF: makeShift(420.5),
      shiftG: { value: 2.34, optionA: trimTrailingZero(2.34 * 100), optionB: 23.4, answer: trimTrailingZero(2.34 * 100) },
      shiftH: { value: 7.24, answer: trimTrailingZero(7.24 / 100) },
      shiftI: { value: 4.509, wrong: 45.09 },
      shiftJ: makeShift(9.84),
      missingA: { left: 2.45, total: 5.98, answer: 3.53, prompt: "2.45 + ? = 5.98" },
      missingB: { right: 1.78, result: 4.86, answer: 6.64, prompt: "? - 1.78 = 4.86" },
      missingC: { left: 3.057, total: 4.208, answer: 1.151, prompt: "3.057 + ? = 4.208" },
      missingD: { answer: 2.84, prompt: "7.43 - ? = 4.59" },
      missingE: { answer: 0.94, prompt: "? + 1.63 = 2.57" },
      missingF: { answer: 4.257, prompt: "6.812 - ? = 2.555" },
      missingG: { answer: 2.708, prompt: "? + 0.807 = 3.515" },
      missingH: { answer: 1.352, prompt: "5.108 - ? = 3.756" },
      missingI: { answer: 0.652, prompt: "2.154 + ? = 2.806" },
      missingJ: { answer: 3.406, prompt: "? - 1.204 = 2.202" },
      errorA: makeError("3.47 + 1.208", 4.6780, 4.678),
      errorB: makeError("15.72 - 2.39", 13.43, 13.33),
      errorC: makeError("4.083 + 0.709", 4.792, 4.792),
      errorD: makeError("17.25 - 1.406", 16.844, 15.844),
      errorE: makeError("2.34 × 100", 23.4, 234),
      errorF: makeError("8.4 ÷ 100", 0.84, 0.084),
      errorG: makeError("6.053 + 1.207", 7.26, 7.26),
      errorH: makeError("19.1 - 4.86", 15.24, 14.24),
      errorI: makeError("0.472 × 1000", 47.2, 472),
      errorJ: makeError("420.5 ÷ 1000", 4.205, 0.4205)
    };
  }

  return {
    directA: makeDirect(3.4, "+", 1.2),
    directB: makeDirect(5.7, "-", 2.3),
    directC: makeDirect(4.08, "+", 0.7),
    directD: makeDirect(7.25, "-", 1.4),
    directE: makeDirect(2.6, "+", 0.35),
    directF: makeDirect(9.1, "-", 4.8),
    directG: makeDirect(6.05, "+", 1.2),
    directH: makeDirect(8.4, "-", 0.9),
    directI: makeDirect(1.75, "+", 2.05),
    directJ: makeDirect(10.2, "-", 3.6),
    shiftA: makeShift(3.4),
    shiftB: makeShift(5.6),
    shiftC: makeShift(0.47),
    shiftD: makeShift(86),
    shiftE: makeShift(0.9),
    shiftF: makeShift(420),
    shiftG: { value: 2.3, optionA: trimTrailingZero(2.3 * 10), optionB: 2.03, answer: trimTrailingZero(2.3 * 10) },
    shiftH: { value: 7.2, answer: trimTrailingZero(7.2 / 10) },
    shiftI: { value: 4.5, wrong: 45.0 },
    shiftJ: makeShift(9.8),
    missingA: { left: 2.4, total: 5.9, answer: 3.5, prompt: "2.4 + ? = 5.9" },
    missingB: { right: 1.7, result: 4.8, answer: 6.5, prompt: "? - 1.7 = 4.8" },
    missingC: { left: 3.05, total: 4.2, answer: 1.15, prompt: "3.05 + ? = 4.2" },
    missingD: { answer: 2.8, prompt: "7.4 - ? = 4.6" },
    missingE: { answer: 0.9, prompt: "? + 1.6 = 2.5" },
    missingF: { answer: 4.25, prompt: "6.8 - ? = 2.55" },
    missingG: { answer: 2.7, prompt: "? + 0.8 = 3.5" },
    missingH: { answer: 1.35, prompt: "5.1 - ? = 3.75" },
    missingI: { answer: 0.65, prompt: "2.15 + ? = 2.8" },
    missingJ: { answer: 3.4, prompt: "? - 1.2 = 2.2" },
    errorA: makeError("3.4 + 1.2", 4.52, 4.6),
    errorB: makeError("5.7 - 2.3", 3.4, 3.4),
    errorC: makeError("4.08 + 0.7", 4.15, 4.78),
    errorD: makeError("7.25 - 1.4", 6.85, 5.85),
    errorE: makeError("2.6 × 10", 2.60, 26),
    errorF: makeError("8.4 ÷ 10", 0.84, 0.84),
    errorG: makeError("6.05 + 1.2", 7.25, 7.25),
    errorH: makeError("9.1 - 4.8", 4.3, 4.3),
    errorI: makeError("0.47 × 100", 4.7, 47),
    errorJ: makeError("420 ÷ 1000", 0.42, 0.42)
  };
}

function getShapePropertyBase(settings, difficultyKey) {
  const identify = (shape, answer) => ({ shape, answer });
  const classify = (shape, prompt, answer) => ({ shape, prompt, answer });
  const always = (statement, answer) => ({ statement, answer });
  const odd = (prompt, answer) => ({ prompt, answer });
  const symmetry = (shape, prompt, answer) => ({ shape, prompt, answer });

  const easy = {
    identify: [
      identify("triangle", "Triangle"),
      identify("square", "Square"),
      identify("rectangle", "Rectangle"),
      identify("pentagon", "Pentagon"),
      identify("hexagon", "Hexagon"),
      identify("octagon", "Octagon"),
      identify("triangle", "Triangle"),
      identify("square", "Square"),
      identify("rectangle", "Rectangle"),
      identify("hexagon", "Hexagon")
    ],
    classify: [
      classify("square", "Which property best matches the shape shown? A) 4 equal sides and 4 right angles B) 3 sides", "A) 4 equal sides and 4 right angles"),
      classify("rectangle", "Which property best matches the shape shown? A) opposite sides equal and 4 right angles B) 5 sides", "A) opposite sides equal and 4 right angles"),
      classify("triangle", "Which property best matches the shape shown? A) 3 sides B) 4 equal sides", "A) 3 sides"),
      classify("pentagon", "Which property best matches the shape shown? A) 5 sides B) 6 sides", "A) 5 sides"),
      classify("hexagon", "Which property best matches the shape shown? A) 6 sides B) 8 sides", "A) 6 sides"),
      classify("octagon", "Which property best matches the shape shown? A) 8 sides B) 4 right angles", "A) 8 sides"),
      classify("square", "Which property best matches the shape shown? A) 4 equal sides B) 5 sides", "A) 4 equal sides"),
      classify("rectangle", "Which property best matches the shape shown? A) 4 right angles B) 3 sides", "A) 4 right angles"),
      classify("triangle", "Which property best matches the shape shown? A) fewer than 4 sides B) 2 pairs of parallel sides", "A) fewer than 4 sides"),
      classify("hexagon", "Which property best matches the shape shown? A) more than 5 sides B) exactly 4 sides", "A) more than 5 sides")
    ],
    always: [
      always("A triangle has 3 sides.", "Always"),
      always("A square has 4 sides.", "Always"),
      always("A rectangle has 4 equal sides.", "Sometimes"),
      always("A pentagon has 5 sides.", "Always"),
      always("A hexagon has 6 sides.", "Always"),
      always("A square has 4 right angles.", "Always"),
      always("A triangle has 4 sides.", "Never"),
      always("A rectangle has 4 right angles.", "Always"),
      always("An octagon has 8 sides.", "Always"),
      always("A square is a quadrilateral.", "Always")
    ],
    symmetry: [
      symmetry("square", "How many lines of symmetry does the shape shown have?", "4 lines of symmetry"),
      symmetry("rectangle", "How many lines of symmetry does the shape shown have?", "2 lines of symmetry"),
      symmetry("triangle", "How many lines of symmetry does the shape shown have?", "0 lines of symmetry"),
      symmetry("pentagon", "How many lines of symmetry does the shape shown have?", "5 lines of symmetry"),
      symmetry("hexagon", "How many lines of symmetry does the shape shown have?", "6 lines of symmetry"),
      symmetry("octagon", "How many lines of symmetry does the shape shown have?", "8 lines of symmetry"),
      symmetry("square", "True or false: the shape shown has more than 2 lines of symmetry.", "True - it has 4 lines of symmetry"),
      symmetry("rectangle", "True or false: the shape shown has 4 lines of symmetry.", "False - it has 2 lines of symmetry"),
      symmetry("triangle", "True or false: the shape shown has a line of symmetry.", "False - it has 0 lines of symmetry"),
      symmetry("hexagon", "Which has more lines of symmetry: the shape shown or a square?", "The shape shown - 6 lines of symmetry, compared with 4 for a square")
    ],
    odd: [
      odd("Odd one out: square, rectangle, triangle. Give a reason.", "Triangle, because it is the only non-quadrilateral."),
      odd("Odd one out: pentagon, hexagon, octagon. Give a reason.", "Pentagon, because it has the fewest sides."),
      odd("Odd one out: square, rectangle, octagon. Give a reason.", "Octagon, because it is the only non-quadrilateral."),
      odd("Odd one out: triangle, pentagon, hexagon. Give a reason.", "Triangle, because it is the only shape with fewer than 5 sides."),
      odd("Odd one out: square, square, rectangle. Give a reason.", "Rectangle, because it does not have 4 equal sides."),
      odd("Odd one out: rectangle, pentagon, hexagon. Give a reason.", "Rectangle, because it is the only quadrilateral."),
      odd("Odd one out: triangle, square, pentagon. Give a reason.", "Triangle, because it has the fewest sides."),
      odd("Odd one out: octagon, pentagon, hexagon. Give a reason.", "Octagon, because it has the most sides."),
      odd("Odd one out: square, rectangle, pentagon. Give a reason.", "Pentagon, because it is the only non-quadrilateral."),
      odd("Odd one out: triangle, square, rectangle. Give a reason.", "Triangle, because it is the only shape with 3 sides.")
    ]
  };

  const medium = {
    identify: [
      identify("triangle", "Triangle"),
      identify("square", "Square"),
      identify("rectangle", "Rectangle"),
      identify("trapezium", "Trapezium"),
      identify("parallelogram", "Parallelogram"),
      identify("rhombus", "Rhombus"),
      identify("kite", "Kite"),
      identify("pentagon", "Pentagon"),
      identify("hexagon", "Hexagon"),
      identify("octagon", "Octagon")
    ],
    classify: [
      classify("square", "Which property best matches the shape shown? A) 4 equal sides and 4 right angles B) exactly 1 pair of parallel sides", "A) 4 equal sides and 4 right angles"),
      classify("rectangle", "Which property best matches the shape shown? A) 4 equal sides B) opposite sides equal and 4 right angles", "B) opposite sides equal and 4 right angles"),
      classify("trapezium", "Which property best matches the shape shown? A) exactly 1 pair of parallel sides B) 2 pairs of parallel sides", "A) exactly 1 pair of parallel sides"),
      classify("parallelogram", "Which property best matches the shape shown? A) 2 pairs of parallel sides B) 4 right angles", "A) 2 pairs of parallel sides"),
      classify("rhombus", "Which property best matches the shape shown? A) 4 equal sides B) exactly 1 pair of parallel sides", "A) 4 equal sides"),
      classify("kite", "Which property best matches the shape shown? A) 2 pairs of equal adjacent sides B) all sides equal", "A) 2 pairs of equal adjacent sides"),
      classify("triangle", "Which property best matches the shape shown? A) 3 sides B) 2 pairs of parallel sides", "A) 3 sides"),
      classify("pentagon", "Which property best matches the shape shown? A) 5 sides B) 4 right angles", "A) 5 sides"),
      classify("hexagon", "Which property best matches the shape shown? A) 6 sides B) 8 sides", "A) 6 sides"),
      classify("octagon", "Which property best matches the shape shown? A) 8 sides B) 6 sides", "A) 8 sides")
    ],
    always: [
      always("A square has 4 equal sides.", "Always"),
      always("A rectangle has 4 equal sides.", "Sometimes"),
      always("A parallelogram has 2 pairs of parallel sides.", "Always"),
      always("A rhombus is a square.", "Sometimes"),
      always("A trapezium has at least one pair of parallel sides.", "Always"),
      always("A kite has 2 pairs of equal adjacent sides.", "Always"),
      always("A quadrilateral has 4 right angles.", "Sometimes"),
      always("A regular polygon has all sides equal.", "Always"),
      always("A triangle has exactly 1 pair of parallel sides.", "Never"),
      always("A hexagon has 6 sides.", "Always")
    ],
    symmetry: [
      symmetry("square", "How many lines of symmetry does the shape shown have?", "4 lines of symmetry"),
      symmetry("rectangle", "How many lines of symmetry does the shape shown have?", "2 lines of symmetry"),
      symmetry("triangle", "How many lines of symmetry does the shape shown have?", "0 lines of symmetry"),
      symmetry("rhombus", "How many lines of symmetry does the shape shown have?", "2 lines of symmetry"),
      symmetry("kite", "How many lines of symmetry does the shape shown have?", "1 line of symmetry"),
      symmetry("parallelogram", "How many lines of symmetry does the shape shown have?", "0 lines of symmetry"),
      symmetry("trapezium", "True or false: the shape shown has a line of symmetry.", "False - 0 lines of symmetry"),
      symmetry("pentagon", "How many lines of symmetry does the shape shown have?", "5 lines of symmetry"),
      symmetry("hexagon", "How many lines of symmetry does the shape shown have?", "6 lines of symmetry"),
      symmetry("octagon", "Which has more lines of symmetry: the shape shown or a rectangle?", "The shape shown - 8 lines of symmetry, compared with 2 for a rectangle")
    ],
    odd: [
      odd("Odd one out: square, rectangle, triangle. Give a reason.", "Triangle, because it is the only non-quadrilateral."),
      odd("Odd one out: rhombus, kite, triangle. Give a reason.", "Triangle, because it is the only shape with 3 sides."),
      odd("Odd one out: square, rectangle, octagon. Give a reason.", "Octagon, because it is the only shape that is not a quadrilateral."),
      odd("Odd one out: parallelogram, trapezium, kite. Give a reason.", "Kite, because it does not have parallel sides in this drawing."),
      odd("Odd one out: square, rhombus, rectangle. Give a reason.", "Rectangle, because it is the only one that does not always have 4 equal sides."),
      odd("Odd one out: kite, rhombus, parallelogram. Give a reason.", "Kite, because it does not have 2 pairs of parallel sides."),
      odd("Odd one out: rectangle, trapezium, parallelogram. Give a reason.", "Trapezium, because it has only 1 pair of parallel sides."),
      odd("Odd one out: hexagon, octagon, triangle. Give a reason.", "Triangle, because it is the only shape with 3 sides."),
      odd("Odd one out: square, trapezium, parallelogram. Give a reason.", "Square, because it is the only one with 4 right angles."),
      odd("Odd one out: kite, rectangle, parallelogram. Give a reason.", "Kite, because it does not have 2 pairs of parallel sides.")
    ]
  };

  const hard = {
    identify: [
      identify("trapezium", "Trapezium"),
      identify("parallelogram", "Parallelogram"),
      identify("rhombus", "Rhombus"),
      identify("kite", "Kite"),
      identify("square", "Square"),
      identify("rectangle", "Rectangle"),
      identify("hexagon", "Hexagon"),
      identify("octagon", "Octagon"),
      identify("triangle", "Triangle"),
      identify("pentagon", "Pentagon")
    ],
    classify: [
      classify("square", "Which statement is the best definition of the shape shown? A) a quadrilateral with 4 equal sides and 4 right angles B) a quadrilateral with only 1 pair of parallel sides", "A) a quadrilateral with 4 equal sides and 4 right angles"),
      classify("rectangle", "Which statement is the best definition of the shape shown? A) opposite sides equal and 4 right angles B) 4 equal sides and no right angles", "A) opposite sides equal and 4 right angles"),
      classify("trapezium", "Which statement is the best definition of the shape shown? A) exactly 1 pair of parallel sides B) 2 pairs of equal adjacent sides", "A) exactly 1 pair of parallel sides"),
      classify("parallelogram", "Which statement is the best definition of the shape shown? A) 2 pairs of parallel sides B) exactly 1 pair of parallel sides", "A) 2 pairs of parallel sides"),
      classify("rhombus", "Which statement is the best definition of the shape shown? A) 4 equal sides B) opposite sides equal and 4 right angles", "A) 4 equal sides"),
      classify("kite", "Which statement is the best definition of the shape shown? A) 2 pairs of equal adjacent sides B) 2 pairs of parallel sides", "A) 2 pairs of equal adjacent sides"),
      classify("hexagon", "Which statement is the best definition of the shape shown? A) polygon with 6 sides B) polygon with 8 sides", "A) polygon with 6 sides"),
      classify("octagon", "Which statement is the best definition of the shape shown? A) polygon with 8 sides B) polygon with 6 sides", "A) polygon with 8 sides"),
      classify("triangle", "Which statement is the best definition of the shape shown? A) polygon with 3 sides B) quadrilateral with 4 sides", "A) polygon with 3 sides"),
      classify("pentagon", "Which statement is the best definition of the shape shown? A) polygon with 5 sides B) polygon with 6 sides", "A) polygon with 5 sides")
    ],
    always: [
      always("A rectangle is a square.", "Sometimes"),
      always("A square is a rectangle.", "Always"),
      always("A rhombus has 4 equal sides.", "Always"),
      always("A parallelogram has 4 right angles.", "Sometimes"),
      always("A trapezium has exactly 1 pair of parallel sides.", "Always"),
      always("A kite has 2 pairs of equal adjacent sides.", "Always"),
      always("A regular polygon has all angles equal.", "Always"),
      always("A quadrilateral can have exactly 1 pair of parallel sides.", "Sometimes"),
      always("A shape with 4 equal sides is a square.", "Sometimes"),
      always("A polygon with 8 sides is an octagon.", "Always")
    ],
    symmetry: [
      symmetry("square", "How many lines of symmetry does the shape shown have, and what does that tell you about the shape?", "4 lines of symmetry - it is highly symmetrical."),
      symmetry("rectangle", "How many lines of symmetry does the shape shown have?", "2 lines of symmetry"),
      symmetry("rhombus", "How many lines of symmetry does the shape shown have?", "2 lines of symmetry"),
      symmetry("kite", "How many lines of symmetry does the shape shown have?", "1 line of symmetry"),
      symmetry("parallelogram", "True or false: the shape shown has a line of symmetry.", "False - 0 lines of symmetry"),
      symmetry("trapezium", "True or false: the shape shown has a line of symmetry.", "False - 0 lines of symmetry"),
      symmetry("pentagon", "How many lines of symmetry does the shape shown have?", "5 lines of symmetry"),
      symmetry("hexagon", "How many lines of symmetry does the shape shown have?", "6 lines of symmetry"),
      symmetry("octagon", "How many lines of symmetry does the shape shown have?", "8 lines of symmetry"),
      symmetry("triangle", "Compare the lines of symmetry of the shape shown with a square.", "The shape shown has 0 lines of symmetry, compared with 4 for a square")
    ],
    odd: [
      odd("Odd one out: square, rectangle, rhombus. Give a reason.", "Rectangle, because it is the only one that does not always have 4 equal sides."),
      odd("Odd one out: parallelogram, trapezium, rectangle. Give a reason.", "Trapezium, because it is the only one without 2 pairs of parallel sides."),
      odd("Odd one out: kite, rhombus, square. Give a reason.", "Kite, because it is the only one without 2 pairs of parallel sides."),
      odd("Odd one out: square, rectangle, parallelogram. Give a reason.", "Square, because it is the only one with 4 equal sides and 4 right angles."),
      odd("Odd one out: pentagon, hexagon, octagon. Give a reason.", "Pentagon, because it is the only one with fewer than 6 sides."),
      odd("Odd one out: rhombus, square, trapezium. Give a reason.", "Trapezium, because it is the only one that does not have 4 equal sides."),
      odd("Odd one out: kite, rectangle, square. Give a reason.", "Kite, because it is the only one without 4 right angles."),
      odd("Odd one out: triangle, trapezium, parallelogram. Give a reason.", "Triangle, because it is the only non-quadrilateral."),
      odd("Odd one out: octagon, hexagon, square. Give a reason.", "Square, because it is the only quadrilateral."),
      odd("Odd one out: square, rhombus, kite. Give a reason.", "Kite, because it is the only one that does not have 4 equal sides.")
    ]
  };

  const bank = difficultyKey === "easy" ? easy : difficultyKey === "hard" ? hard : medium;
  const keys = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const result = {};

  keys.forEach((key, index) => {
    result[`identify${key}`] = bank.identify[index];
    result[`classify${key}`] = bank.classify[index];
    result[`always${key}`] = bank.always[index];
    result[`symmetry${key}`] = bank.symmetry[index];
    result[`odd${key}`] = bank.odd[index];
  });

  return result;
}

function createNamedShapeDiagram(shape, options = {}) {
  return namedShapeDiagram(shape, options);
}

function injectShapeIntoSymmetryPrompt(prompt, shape) {
  const shapeLabel = shape.replace(/-/g, " ");

  if (/shape shown/i.test(prompt)) {
    return prompt.replace(/shape shown/gi, `${shapeLabel} shown`);
  }

  if (/the shape/i.test(prompt)) {
    return prompt.replace(/the shape/gi, `the ${shapeLabel}`);
  }

  return `${prompt} (${capitalize(shapeLabel)})`;
}

function shapeStatementDiagram(statement) {
  const shape = representativeShapeFromStatement(statement);
  return shape ? createNamedShapeDiagram(shape, { showSymmetry: statement.toLowerCase().includes("symmetry") }) : null;
}

function oddOneOutDiagram(prompt) {
  const shapes = extractShapesFromPrompt(prompt);
  return shapes.length ? shapeSetDiagram(shapes) : null;
}

function representativeShapeFromStatement(statement) {
  const lower = (statement || "").toLowerCase();
  const orderedMatches = [
    ["square", "square"],
    ["rectangle", "rectangle"],
    ["parallelogram", "parallelogram"],
    ["rhombus", "rhombus"],
    ["trapezium", "trapezium"],
    ["kite", "kite"],
    ["octagon", "octagon"],
    ["hexagon", "hexagon"],
    ["pentagon", "pentagon"],
    ["triangle", "triangle"],
    ["quadrilateral", "rectangle"],
    ["regular polygon", "hexagon"],
    ["polygon with 8 sides", "octagon"],
    ["polygon with 6 sides", "hexagon"],
    ["polygon with 5 sides", "pentagon"],
    ["polygon with 3 sides", "triangle"],
    ["polygon", "hexagon"]
  ];
  const match = orderedMatches.find(([needle]) => lower.includes(needle));
  return match ? match[1] : null;
}

function extractShapesFromPrompt(prompt) {
  const match = (prompt || "").match(/Odd one out:\s*([^.]+?)\.\s*Give a reason/i);
  if (!match) return [];
  return match[1]
    .split(",")
    .map((item) => item.trim().toLowerCase())
    .map((item) => representativeShapeFromStatement(item))
    .filter(Boolean);
}

function trimTrailingZero(value) {
  return Number(value.toFixed(3)).toString();
}

function coordinateLabel(point) { return `(${point.x}, ${point.y})`; }
function reflectX(point) { return { x: point.x, y: -point.y }; }
function reflectY(point) { return { x: -point.x, y: point.y }; }
function sortDecimals(values, descending = false) { return [...values].sort((a, b) => descending ? b - a : a - b); }
function ratioWriteChange(index) { return index === 0 ? "Starting example." : "Only the context or values change."; }
function ratioSimplifyChange(index) { return index === 0 ? "Starting example." : "Only the common factor or values change."; }
function likeTermsChange(index) { return index === 0 ? "Starting example." : "Only one term feature changes."; }
function likeTermsMatchChange(index) { return index === 0 ? "Starting example." : "Only the expression pattern changes."; }
function likeTermsMissingChange(index) { return index === 0 ? "Starting example." : "Only the variable, sign or constant changes."; }
function likeTermsErrorChange(index) { return index === 0 ? "Starting example." : "Only the misconception or task type changes."; }
function coordinateReadChange(index) { return index === 0 ? "Starting example." : "Only one coordinate or quadrant changes."; }
function coordinatePlotChange(index) { return index === 0 ? "Starting example." : "Only the point changes quadrant or sign."; }
function coordinateMissingChange(index) { return index === 0 ? "Starting example." : "Only the missing part moves."; }
function coordinateReflectionChange(index) { return index === 0 ? "Starting example." : "Only the axis or point changes."; }

function sum(values) { return values.reduce((total, value) => total + value, 0); }
function getQuestionPromptText(item) {
  return (item?.prompt || item?.question || "").trim();
}
function getQuestionKey(item) {
  return JSON.stringify({
    question: item.question,
    answer: item.answer,
    diagram: item.diagram || null
  });
}
function digitSum(value) { return String(value).split("").reduce((total, digit) => total + Number(digit), 0); }
function isPrime(value) { if (value < 2) return false; for (let i = 2; i <= Math.sqrt(value); i += 1) if (value % i === 0) return false; return true; }
function gcd(a, b) { return b === 0 ? Math.abs(a) : gcd(b, a % b); }
function listFactors(value) { const factors = []; for (let i = 1; i <= value; i += 1) if (value % i === 0) factors.push(i); return factors; }
function getFactorPair(value) { const factors = listFactors(value).filter((item) => item > 1 && item < value); const first = randomChoice(factors); return [first, value / first]; }
function randomChoice(items) { return items[randomInt(0, items.length - 1)]; }
function shuffleArray(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = randomInt(0, index);
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}
function formatNumberList(values) { return values.join(", "); }
function divisibilitySummary(value) { return [2, 3, 5, 10].filter((divisor) => value % divisor === 0).join(", ") || "none of them"; }
function formatFraction(numerator, denominator) { return `${numerator}/${denominator}`; }
function formatFractionReduced(numerator, denominator) {
  const factor = gcd(numerator, denominator) || 1;
  return formatFraction(numerator / factor, denominator / factor);
}
function formatFractionObject(fraction) { return formatFraction(fraction.n, fraction.d); }
function compareFractions(left, right) { return (left.n * right.d) - (right.n * left.d); }
function greaterFraction(left, right) { return compareFractions(left, right) >= 0 ? left : right; }
function smallerFraction(left, right) { return compareFractions(left, right) <= 0 ? left : right; }
function formatFractionsSorted(fractions, descending = false) { const sorted = [...fractions].sort((a, b) => compareFractions(a, b) * (descending ? -1 : 1)); return sorted.map(formatFractionObject).join(", "); }
function fractionVsBenchmark(fraction, benchmark) { const comparison = compareFractions(fraction, benchmark); return comparison < 0 ? "less than" : comparison > 0 ? "greater than" : "equal to"; }
function pairWithGreaterTotalPerimeter(base) {
  const pairATotal = (2 * (base.rectLengthE + base.rectWidthE)) + sum(base.triC);
  const pairBTotal = (2 * (base.rectLengthF + base.rectWidthF)) + sum(base.polyD);
  return pairATotal > pairBTotal ? "A" : "B";
}
function middleOfThree(a, b, c) { return [a, b, c].sort((x, y) => x - y)[1]; }
function fractionCompareChange(index) { return ["Starting example.", "Only the comparison direction changes.", "Only the denominator pattern changes.", "Only the numerator pattern changes.", "Only one fraction changes.", "Only one denominator changes.", "Only the pair becomes closer.", "Only the fraction size changes.", "Only the benchmark effect changes.", "Final step keeps the same comparison structure."][index]; }
function fractionOrderChange(index) { return index % 2 === 0 ? "Only the set changes." : "Only the order direction changes."; }
function fractionTrueFalseChange(index) { return index === 0 ? "Starting example." : "Only one comparison feature changes."; }
function angleLineChange(index) { return index === 0 ? "Starting example." : "Only the given angle changes."; }
function anglePointChange(index) { return index === 0 ? "Starting example." : "Only the angle set changes."; }
function angleVerticalChange(index) { return index % 2 === 0 ? "Only the given angle changes." : "Only the target angle changes."; }
function rectangleDiagram(topLabel, rightLabel) { return { type: "rectangle", topLabel, rightLabel }; }
function triangleDiagram(labels) { return { type: "triangle", labels }; }
function pythagorasTriangleDiagram(baseLabel, heightLabel, hypLabel) { return { type: "pythagoras-triangle", baseLabel, heightLabel, hypLabel }; }
function polygonDiagram(labels) { return { type: "polygon", labels }; }
function namedShapeDiagram(shape, options = {}) { return { type: "named-shape", shape, ...options }; }
function coordinateGridDiagram(points) { return { type: "coordinate-grid", points }; }
function comparisonDiagram(leftTitle, left, rightTitle, right) { return { type: "comparison", leftTitle, left, rightTitle, right }; }
function angleLineDiagram(leftLabel, rightLabel) { return { type: "angle-line", leftLabel, rightLabel }; }
function anglePointDiagram(labels) { return { type: "angle-point", labels }; }
function angleVerticalDiagram(topLabel, bottomLabel, rightLabel, leftLabel = "") { return { type: "angle-vertical", topLabel, bottomLabel, rightLabel, leftLabel }; }
function stemLeafDiagram(lines, keyLabel = "") { return { type: "stem-leaf", lines, keyLabel }; }
function frequencyTableDiagram(rows, heading = "Frequency Table") { return { type: "frequency-table", rows, heading }; }
function dataTableDiagram(rows, heading = "Table") { return { type: "data-table", rows, heading }; }
function barChartDiagram(rows, heading = "Bar Chart") { return { type: "bar-chart", rows, heading }; }
function fractionStripDiagram(numerator, denominator, amount, answer, mode = "part") { return { type: "fraction-strip", numerator, denominator, amount, answer, mode }; }
function valueListDiagram(values, heading = "Data Set") { return { type: "value-list", values, heading }; }
function solidDiagram(shape) { return { type: "solid-shape", shape }; }
function netDiagram(shape) { return { type: "net-shape", shape }; }
function compoundAreaDiagram(config) { return Array.isArray(config) ? { type: "compound-area", parts: config } : { type: "compound-area", ...config }; }
function triParaAreaDiagram(shape, baseLabel, heightLabel) { return { type: "tri-para-area", shape, baseLabel, heightLabel }; }
function symmetryCompleteDiagram(shape, axis = "vertical", shownSide = axis === "vertical" ? "left" : "top") { return { type: "symmetry-complete", shape, axis, shownSide }; }
function shapeSetDiagram(shapes) { return { type: "shape-set", shapes }; }
function reflectionDemoDiagram(mode, shape = "rectangle", axis = "vertical") { return { type: "reflection-demo", mode, shape, axis }; }
function functionMachineDiagram(inputLabel, ruleLabel, outputLabel = "?") { return { type: "function-machine", inputLabel, ruleLabel, outputLabel }; }
function probabilityScaleDiagram(markers, caption = "Probability Scale") { return { type: "probability-scale", markers, caption }; }
function regularPolygonPoints(sides, centerX, centerY, radius, startAngle) {
  return Array.from({ length: sides }, (_value, index) => {
    const angle = ((startAngle + ((360 / sides) * index)) * Math.PI) / 180;
    return {
      x: trimNumber(centerX + (radius * Math.cos(angle))),
      y: trimNumber(centerY + (radius * Math.sin(angle)))
    };
  });
}
function edgeLabelPoints(points, offset, centerX = 120, centerY = 84) {
  return points.map((point, index) => {
    const next = points[(index + 1) % points.length];
    const mid = midpoint(point, next);
    const outward = normalize({ x: mid.x - centerX, y: mid.y - centerY });
    return {
      x: trimNumber(mid.x + (outward.x * offset)),
      y: trimNumber(mid.y + (outward.y * offset))
    };
  });
}
function extractLeadingNumber(label) {
  const match = String(label).match(/-?\d+(\.\d+)?/);
  return match ? Number(match[0]) : null;
}
function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
function trianglePointsFromSides(topLength, leftLength, rightLength) {
  const maxSide = Math.max(topLength, leftLength, rightLength);
  const scale = 120 / maxSide;
  const scaledTop = topLength * scale;
  const scaledLeft = leftLength * scale;
  const scaledRight = rightLength * scale;
  const a = { x: 70, y: 150 };
  const b = { x: trimNumber(70 + scaledTop), y: 150 };
  const cX = ((scaledLeft ** 2) - (scaledRight ** 2) + (scaledTop ** 2)) / (2 * scaledTop);
  const cY = Math.max(Math.sqrt(Math.max((scaledLeft ** 2) - (cX ** 2), 0)), 42);
  return {
    a,
    b,
    c: {
      x: trimNumber(a.x + cX),
      y: trimNumber(a.y - cY)
    }
  };
}
function midpoint(a, b) {
  return { x: trimNumber((a.x + b.x) / 2), y: trimNumber((a.y + b.y) / 2) };
}
function movePoint(point, dx, dy) {
  return { x: trimNumber(point.x + dx), y: trimNumber(point.y + dy) };
}
function normalize(vector) {
  const length = Math.hypot(vector.x, vector.y) || 1;
  return { x: vector.x / length, y: vector.y / length };
}
function pointFromAngle(center, radius, angleDegrees) {
  const radians = (angleDegrees * Math.PI) / 180;
  return {
    x: trimNumber(center.x + (radius * Math.cos(radians))),
    y: trimNumber(center.y + (radius * Math.sin(radians)))
  };
}
function polarToCartesian(center, radius, angleDegrees) {
  return pointFromAngle(center, radius, angleDegrees);
}
function describeArc(center, radius, startAngle, endAngle) {
  const normalizedStart = ((startAngle % 360) + 360) % 360;
  let normalizedEnd = ((endAngle % 360) + 360) % 360;
  if (normalizedEnd <= normalizedStart) {
    normalizedEnd += 360;
  }
  const start = polarToCartesian(center, radius, normalizedStart);
  const end = polarToCartesian(center, radius, normalizedEnd);
  const largeArcFlag = normalizedEnd - normalizedStart > 180 ? 1 : 0;
  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`;
}
function describeTopArc(center, radius, startAngle, endAngle) {
  const start = polarToCartesian(center, radius, startAngle);
  const end = polarToCartesian(center, radius, endAngle);
  const midAngle = (startAngle + endAngle) / 2;
  const control = polarToCartesian(center, radius + 10, midAngle);
  return `M ${start.x} ${start.y} Q ${control.x} ${control.y} ${end.x} ${end.y}`;
}
function deriveLineLeftAngle(leftLabel, rightLabel) {
  const left = extractLeadingNumber(leftLabel);
  const right = extractLeadingNumber(rightLabel);
  if (left !== null && String(leftLabel).includes("?")) return 180 - right;
  if (right !== null && String(rightLabel).includes("?")) return left;
  return left ?? (180 - (right ?? 100));
}
function derivePointAngles(labels) {
  const values = labels.map(extractLeadingNumber);
  const knownTotal = values.filter((value) => value !== null).reduce((total, value) => total + value, 0);
  const missingValue = 360 - knownTotal;
  return labels.map((label, index) => values[index] ?? missingValue);
}
function deriveVerticalTopAngle(topLabel, rightLabel) {
  const top = extractLeadingNumber(topLabel);
  const right = extractLeadingNumber(rightLabel);
  if (top !== null && !String(topLabel).includes("?")) return top;
  if (right !== null && !String(rightLabel).includes("?")) return 180 - right;
  return 90;
}

function matchChange(index) {
  const notes = [
    "Starting example.",
    "Only the outside multiplier changes.",
    "Only the sign inside the bracket changes.",
    "Only the variable coefficient changes.",
    "Only the outside multiplier changes again.",
    "Only the constant term changes sign.",
    "Only the variable coefficient changes again.",
    "Only the constant becomes negative.",
    "Only the whole expression becomes negative.",
    "Final step changes only the outside multiplier."
  ];

  return notes[index];
}

function evaluateExpression(expression) {
  const jsExpression = expression.replace(/\^/g, "**");
  const value = Function(`"use strict"; return (${jsExpression});`)();
  return `${trimNumber(value)}`;
}

function expandBracketExpression(expression) {
  const match = expression.match(/^(-?\d+)\(([-]?\d*)x ([+-]) (\d+)\)$/);
  if (!match) {
    return "Expansion unavailable";
  }

  const outside = Number(match[1]);
  const variableRaw = match[2] === "" || match[2] === "-" ? `${match[2]}1` : match[2];
  const variableCoeff = Number(variableRaw);
  const sign = match[3] === "+" ? 1 : -1;
  const constant = Number(match[4]) * sign;
  const expandedX = outside * variableCoeff;
  const expandedConstant = outside * constant;
  const firstTerm = formatLinearTerm(expandedX);
  const secondTerm = expandedConstant >= 0 ? ` + ${expandedConstant}` : ` - ${Math.abs(expandedConstant)}`;
  return `${firstTerm}${secondTerm}`;
}

function formatLinearTerm(value) {
  if (value === 1) {
    return "x";
  }

  if (value === -1) {
    return "-x";
  }

  return `${value}x`;
}

function formatMath(text) {
  return text
    .replace(/\*/g, " × ")
    .replace(/\//g, " ÷ ")
    .replace(/\^2/g, "²")
    .replace(/\^3/g, "³")
    .replace(/\s+/g, " ")
    .trim();
}

function renderMathMarkup(text) {
  const fractionPattern = /(\[\s*\]|\?|\d+)\/(\[\s*\]|\?|\d+)/g;
  const indexPattern = /([A-Za-z0-9)\]])\^([\-−]?\d+|\?)/g;

  return escapeHtml(text)
    .replace(/([A-Za-z]+)\^2\b/g, "$1²")
    .replace(/([A-Za-z]+)\^3\b/g, "$1³")
    .replace(indexPattern, (_match, base, exponent) => `${base}<sup>${escapeHtml(exponent)}</sup>`)
    .replace(fractionPattern, (_match, numerator, denominator) => {
    return `<span class="math-fraction"><span class="fraction-top">${escapeHtml(numerator)}</span><span class="fraction-bottom">${escapeHtml(denominator)}</span></span>`;
  });
}

function generateEquivalentFractionsReasoning(topic, variant, _settings, _difficultyKey, worksheet) {
  const sample = worksheet.questions[0];
  return [
    {
      question: `A pupil says, "If you multiply the numerator by 2, you can multiply the denominator by 3 and the fraction will still be equivalent." Is the pupil correct? Explain why or why not.`,
      answer: `No. Equivalent fractions are made by multiplying or dividing the numerator and denominator by the same factor.`,
      change: "Reasoning"
    },
    {
      question: `Why does keeping the same scale factor matter when creating an equivalent fraction? Use one example to support your explanation.`,
      answer: `Because the size of the part must stay the same. For example, ${renderPlainMath(sample?.question || "2/3 = 4/6")} keeps the same overall value because both parts are scaled equally.`,
      change: "Reasoning"
    },
    {
      question: `Create two different fractions that are equivalent to the same fraction and explain what stays the same across all three.`,
      answer: `Accept valid examples with a clear explanation that the fractions represent the same value even though the numerators and denominators are different.`,
      change: "Reasoning"
    }
  ];
}

function generateFractionComparisonReasoning(_topic, _variant, _settings, _difficultyKey, _worksheet) {
  return [
    {
      question: `A pupil says, "The fraction with the larger denominator is always smaller." Is that always true, sometimes true, or never true? Explain.`,
      answer: `Sometimes true. It depends on both the numerator and the denominator, not the denominator alone.`,
      change: "Reasoning"
    },
    {
      question: `Two fractions are both close to one whole. Describe one strategy you could use to decide which is greater without turning them into decimals.`,
      answer: `Accept strategies such as comparing how far each fraction is from 1, using a common denominator, or comparing to a benchmark like 1/2 or 1.`,
      change: "Reasoning"
    },
    {
      question: `Write a pair of fractions where the one with the larger numerator is not the greater fraction. Explain why.`,
      answer: `Accept any valid pair such as 3/5 and 4/9 with an explanation that the denominator also affects the size of the fraction.`,
      change: "Reasoning"
    }
  ];
}

function generateFractionOperationReasoning(_topic, _variant, _settings, _difficultyKey, _worksheet) {
  return [
    {
      question: `When adding fractions with the same denominator, why does the denominator stay the same?`,
      answer: `Because the size of each part does not change, only how many of those equal parts are being combined.`,
      change: "Reasoning"
    },
    {
      question: `A pupil adds two fractions with the same denominator by adding both the numerators and the denominators. Explain the mistake.`,
      answer: `The denominator tells you the size of each part, so if the parts are the same size it should stay the same. Only the number of parts changes.`,
      change: "Reasoning"
    },
    {
      question: `Give an example where a fraction subtraction answer can be simplified, and explain why the simplified answer is equivalent.`,
      answer: `Accept a valid example such as 6/10 - 2/10 = 4/10 = 2/5, with explanation that both fractions represent the same value.`,
      change: "Reasoning"
    }
  ];
}

function generateRatioReasoning(_topic, _variant, _settings, _difficultyKey, _worksheet) {
  return [
    {
      question: `A ratio is 3:5. Explain why 6:10 is equivalent but 6:9 is not.`,
      answer: `6:10 is equivalent because both parts are multiplied by 2. 6:9 is not because the scale factor is not the same for both parts.`,
      change: "Reasoning"
    },
    {
      question: `A pupil writes the ratio of blue to red when the question asked for red to blue. Why can that change the meaning of the answer?`,
      answer: `Because order matters in ratios. 2:3 and 3:2 compare the same groups in different directions and are not the same statement.`,
      change: "Reasoning"
    },
    {
      question: `Create a real-life situation where two different ratios are equivalent, and explain what the equal scale factor represents.`,
      answer: `Accept any valid context with explanation that both quantities have been scaled by the same multiplier or divider.`,
      change: "Reasoning"
    }
  ];
}

function generateOrderReasoning(_topic, variant, _settings, _difficultyKey, _worksheet) {
  if (variant?.id === "which-result") {
    return [
      {
        question: `Why can two expressions with the same numbers give different results if the operations happen in a different order?`,
        answer: `Because changing the order of operations changes which parts are combined first, so the final value can change.`,
        change: "Reasoning"
      },
      {
        question: `A pupil chooses an expression because it has the same numbers as the target result. Explain why matching the numbers alone is not enough.`,
        answer: `The structure matters as well as the numbers. The correct order of operations must produce the target result.`,
        change: "Reasoning"
      },
      {
        question: `What is a quick way to test which of two expressions matches a target result without calculating both in full?`,
        answer: `Use the order of operations to estimate or evaluate the most important part first, such as brackets or multiplication, then compare the likely result.`,
        change: "Reasoning"
      }
    ];
  }

  if (variant?.id === "insert-brackets") {
    return [
      {
        question: `Why can adding brackets change the answer even when the numbers and operations stay the same?`,
        answer: `Because the brackets change which calculation is done first, which can change the value of the whole expression.`,
        change: "Reasoning"
      },
      {
        question: `Write two expressions using the same three numbers and the same operations that give different answers because of bracket placement.`,
        answer: `Accept any valid pair such as 2 + 3 × 4 and (2 + 3) × 4 with an explanation of why the answers differ.`,
        change: "Reasoning"
      },
      {
        question: `A pupil says, "Multiplication always comes before addition, so brackets do not matter." Explain the flaw in that thinking.`,
        answer: `Brackets override the usual order, so if addition is inside brackets it must be done before multiplication.`,
        change: "Reasoning"
      }
    ];
  }

  if (variant?.id === "error-spotting") {
    return [
      {
        question: `Why is it useful to identify the first operation a pupil should have done before deciding whether their answer is wrong?`,
        answer: `Because many order-of-operations mistakes happen at the first step, so checking that step reveals the misconception quickly.`,
        change: "Reasoning"
      },
      {
        question: `A pupil says, "I worked left to right, so my method is always valid." Explain why that is not always true.`,
        answer: `Left to right only applies after brackets, powers, multiplication, and division have been handled in the correct priority.`,
        change: "Reasoning"
      },
      {
        question: `What is the difference between correcting a wrong answer and explaining the misconception that caused it?`,
        answer: `Correcting gives the right result, while explaining the misconception identifies which rule was misunderstood and why.`,
        change: "Reasoning"
      }
    ];
  }

  return [
    {
      question: `Why is it useful to know the order of operations before starting a calculation?`,
      answer: `Because it tells you which steps to do first so the expression is evaluated consistently and correctly.`,
      change: "Reasoning"
    },
    {
      question: `A pupil says addition should always be done first because it is easier. Explain why that can lead to wrong answers.`,
      answer: `Ease does not determine the order. Multiplication, division, brackets, and powers may need to be done first.`,
      change: "Reasoning"
    },
    {
      question: `Explain how you would decide the first step in a calculation that contains brackets, multiplication, and subtraction.`,
      answer: `Start with the brackets, then multiplication, then subtraction.`,
      change: "Reasoning"
    }
  ];
}

function generateEquationReasoning(_topic, _variant, _settings, _difficultyKey, _worksheet) {
  return [
    {
      question: `Why is solving an equation often described as "undoing" operations?`,
      answer: `Because you use inverse operations to isolate the variable while keeping the equation balanced.`,
      change: "Reasoning"
    },
    {
      question: `A pupil solves x + 7 = 12 by adding 7 to both sides. Explain why that does not isolate x.`,
      answer: `Adding 7 keeps x with an extra operation attached. To isolate x + 7, you need to subtract 7 from both sides.`,
      change: "Reasoning"
    },
    {
      question: `Create two different one-step equations that both have the solution x = 6, and explain how you know.`,
      answer: `Accept any valid pair with explanation by substitution or inverse operations.`,
      change: "Reasoning"
    }
  ];
}

function generateExpandingReasoning(_topic, variant, _settings, _difficultyKey, _worksheet) {
  if (variant?.id === "match-the-expansion") {
    return [
      {
        question: `What should you check first when matching a bracket expression to an expansion?`,
        answer: `Check whether the outside factor has changed both the variable term and the constant term correctly.`,
        change: "Reasoning"
      },
      {
        question: `A pupil matches an expansion because the first term looks correct. Why is that not enough evidence?`,
        answer: `Both terms must come from the same distribution, so the constant term and any sign change must also be checked carefully.`,
        change: "Reasoning"
      },
      {
        question: `How can the sign of the constant term help you reject a wrong expansion quickly?`,
        answer: `It shows whether the constant inside the bracket was positive or negative and whether the outside multiplier changed that sign correctly.`,
        change: "Reasoning"
      }
    ];
  }

  return [
    {
      question: `What does the distributive property mean in words when expanding a bracket?`,
      answer: `It means the factor outside the bracket multiplies every term inside the bracket.`,
      change: "Reasoning"
    },
    {
      question: `A pupil expands 3(x + 4) as 3x + 4. Explain the mistake.`,
      answer: `The 3 must multiply both x and 4, so the correct expansion is 3x + 12.`,
      change: "Reasoning"
    },
    {
      question: `Write a bracket expression and an incorrect expansion that a pupil might make. Then explain how to correct it.`,
      answer: `Accept any valid example with a clear explanation that every term inside the bracket must be multiplied.`,
      change: "Reasoning"
    }
  ];
}

function generateNegativeReasoning(_topic, variant, _settings, _difficultyKey, _worksheet) {
  if (variant?.id === "compare-sign-effects") {
    return [
      {
        question: `Why is predicting the sign of the result useful before calculating exactly in a signed-number comparison?`,
        answer: `Because sign reasoning can show which expression is likely to be larger or smaller before you work out the exact values.`,
        change: "Reasoning"
      },
      {
        question: `A pupil says the expression with the larger-looking numbers must have the greater answer. Why can that fail with negative numbers?`,
        answer: `Negative signs change the direction of the value, so larger magnitudes can still lead to a smaller result.`,
        change: "Reasoning"
      },
      {
        question: `How can rewriting subtraction of a negative help in a compare-sign-effects question?`,
        answer: `It can be rewritten as addition, which makes the structure clearer and helps you compare the size of the results more reliably.`,
        change: "Reasoning"
      }
    ];
  }

  return [
    {
      question: `Why does subtracting a negative number increase the answer?`,
      answer: `Because subtracting a negative is equivalent to adding the positive opposite.`,
      change: "Reasoning"
    },
    {
      question: `A pupil says, "A negative times a negative is negative because there are two negative signs." Explain why this is incorrect.`,
      answer: `Two negatives make a positive in multiplication, so the product is positive, not negative.`,
      change: "Reasoning"
    },
    {
      question: `Write two different calculations involving negative numbers that have the same answer, and explain why.`,
      answer: `Accept valid examples such as -3 - (-4) and -3 + 4, with explanation that subtracting a negative is the same as adding.`,
      change: "Reasoning"
    }
  ];
}

function generatePerimeterReasoning(_topic, _variant, _settings, _difficultyKey, _worksheet) {
  return [
    {
      question: `Can two shapes have the same perimeter but different side lengths? Explain how.`,
      answer: `Yes. Perimeter is the total distance around the shape, so different combinations of side lengths can add to the same total.`,
      change: "Reasoning"
    },
    {
      question: `A pupil says a shape with more sides must always have a greater perimeter. Is that true? Explain.`,
      answer: `No. More sides does not guarantee a greater total length because each side could be shorter.`,
      change: "Reasoning"
    },
    {
      question: `Describe one way a rectangle’s side lengths could change while its perimeter stays the same.`,
      answer: `One side could increase while the other decreases by the same total amount when considering both pairs of sides.`,
      change: "Reasoning"
    }
  ];
}

function generateAngleReasoning(_topic, _variant, _settings, _difficultyKey, _worksheet) {
  return [
    {
      question: `Why can angle facts be solved without measuring the diagram?`,
      answer: `Because the solution comes from known angle relationships such as angles on a line, around a point, or vertically opposite angles.`,
      change: "Reasoning"
    },
    {
      question: `A pupil says vertically opposite angles are equal only if the crossing lines are perpendicular. Explain why that is wrong.`,
      answer: `Vertically opposite angles are always equal whenever two straight lines cross, not only when they meet at right angles.`,
      change: "Reasoning"
    },
    {
      question: `Explain how you would decide whether to use 180° or 360° in a missing-angle question.`,
      answer: `Use 180° for a straight line and 360° for angles around a point.`,
      change: "Reasoning"
    }
  ];
}

function generateShapeReasoning(_topic, _variant, _settings, _difficultyKey, _worksheet) {
  return [
    {
      question: `Why is it more accurate to classify a shape by its properties than by how it "looks" at first glance?`,
      answer: `Because the defining properties stay true even if the shape is rotated, stretched in a drawing, or presented in an unfamiliar orientation.`,
      change: "Reasoning"
    },
    {
      question: `Can a square also be called a rectangle? Explain using properties.`,
      answer: `Yes. A square has four right angles and two pairs of parallel sides, so it meets the properties of a rectangle.`,
      change: "Reasoning"
    },
    {
      question: `Choose one quadrilateral and explain which single property is most helpful for distinguishing it from a similar shape.`,
      answer: `Accept any valid example with a clear property-based explanation.`,
      change: "Reasoning"
    }
  ];
}

function generateCoordinateReasoning(_topic, _variant, _settings, _difficultyKey, _worksheet) {
  return [
    {
      question: `Why does the order of coordinates matter in a point such as (3, -2)?`,
      answer: `Because the first number gives the x-coordinate and the second gives the y-coordinate. Swapping them usually gives a different point.`,
      change: "Reasoning"
    },
    {
      question: `A pupil reflects a point in the y-axis and changes the sign of the y-coordinate. Explain the mistake.`,
      answer: `Reflecting in the y-axis changes the x-coordinate and keeps the y-coordinate the same.`,
      change: "Reasoning"
    },
    {
      question: `Describe how you can tell which quadrant a point is in from the signs of its coordinates.`,
      answer: `Accept a correct description of the sign patterns for the four quadrants.`,
      change: "Reasoning"
    }
  ];
}

function generatePlaceValueReasoning(topic, _variant, _settings, _difficultyKey, _worksheet) {
  const isDecimal = topic.generatorType === "place-value-decimals";
  return [
    {
      question: `Why can changing one digit ${isDecimal ? "or one decimal place" : ""} change the value of a number a lot, even if the rest of the number stays the same?`,
      answer: `Because each place has a different value, so moving or changing a digit changes how much it is worth.`,
      change: "Reasoning"
    },
    {
      question: `A pupil says, "The larger digit always makes the larger number." Explain why that is not always true.`,
      answer: `A digit’s position matters. A smaller digit in a higher-value place can make the whole number larger.`,
      change: "Reasoning"
    },
    {
      question: `Create two numbers with the same digits in a different order and explain why one is greater.`,
      answer: `Accept any valid example with a place-value explanation.`,
      change: "Reasoning"
    }
  ];
}

function generateNumberPropertyReasoning(_topic, _variant, _settings, _difficultyKey, _worksheet) {
  return [
    {
      question: `Why can a number be composite without being even?`,
      answer: `Because composite means it has more than two factors, and odd numbers can also have more than two factors.`,
      change: "Reasoning"
    },
    {
      question: `A pupil says every multiple of 3 is also a multiple of 6. Explain why this is not always true.`,
      answer: `A number must also be even to be a multiple of 6. Some multiples of 3 are odd, like 9 or 15.`,
      change: "Reasoning"
    },
    {
      question: `Give one number that is a multiple of one number but not a factor of it, and explain the difference between those ideas.`,
      answer: `Accept any valid example with explanation that factors divide a number exactly, while multiples are found by multiplying.`,
      change: "Reasoning"
    }
  ];
}

function generateAlgebraicNotationReasoning(_topic, _variant, _settings, _difficultyKey, _worksheet) {
  return [
    {
      question: `Why is 3x shorter to write than 3 × x, but still mathematically equivalent?`,
      answer: `Because algebra uses standard shorthand where a number written next to a variable means multiplication.`,
      change: "Reasoning"
    },
    {
      question: `A pupil thinks 2a and a2 mean the same thing. Explain why that is not a safe way to write algebra.`,
      answer: `2a is standard notation for two lots of a. Writing a2 is not standard and can be confusing or incorrect.`,
      change: "Reasoning"
    },
    {
      question: `Explain why algebra is useful for describing patterns rather than writing every example separately.`,
      answer: `Because algebra represents the structure of a rule in a general way, so it works for many cases at once.`,
      change: "Reasoning"
    }
  ];
}

function generateLikeTermsReasoning(_topic, _variant, _settings, _difficultyKey, _worksheet) {
  return [
    {
      question: `Why can 3x and 5x be combined, but 3x and 5y cannot?`,
      answer: `Because 3x and 5x are the same type of term, while x and y represent different variables.`,
      change: "Reasoning"
    },
    {
      question: `A pupil simplifies 4x + 3 as 7x. Explain the mistake.`,
      answer: `4x and 3 are not like terms, because one has a variable and the other is a constant.`,
      change: "Reasoning"
    },
    {
      question: `Write an expression that has three like terms and one unlike term, then explain which parts can be collected.`,
      answer: `Accept any valid example with a clear explanation of which terms are like terms.`,
      change: "Reasoning"
    }
  ];
}

function generateSequenceReasoning(_topic, variant, _settings, _difficultyKey, _worksheet) {
  if (variant?.id === "find-the-rule") {
    return [
      {
        question: `Why is checking the difference between terms a useful first step in finding the rule of a sequence?`,
        answer: `Because it helps you see the constant change or pattern connecting consecutive terms.`,
        change: "Reasoning"
      },
      {
        question: `A pupil says the rule for a sequence is just the first gap they notice. Explain why one gap alone may not be enough evidence.`,
        answer: `You need to check whether the same pattern continues across the whole sequence, not just between the first two terms.`,
        change: "Reasoning"
      },
      {
        question: `How could you justify a sequence rule to someone without just giving the next term?`,
        answer: `Explain the repeated change or operation and show that it works for several consecutive terms.`,
        change: "Reasoning"
      }
    ];
  }

  if (variant?.id === "missing-terms") {
    return [
      {
        question: `Why is it helpful to look at the known terms on both sides of a missing term?`,
        answer: `Because the surrounding terms help you identify the step size and check whether the missing value fits the pattern.`,
        change: "Reasoning"
      },
      {
        question: `A pupil fills a missing term using only the term before it. Explain why checking the term after it is also important.`,
        answer: `The value must fit the whole sequence, so it should maintain the pattern both forwards and backwards.`,
        change: "Reasoning"
      },
      {
        question: `Explain how a missing-term question can sometimes tell you more about the sequence rule than a continue-the-sequence question.`,
        answer: `It forces you to use the structure of the sequence more carefully, because the missing value must fit between known terms consistently.`,
        change: "Reasoning"
      }
    ];
  }

  if (variant?.id === "nth-term-intro") {
    return [
      {
        question: `Why is the nth term more powerful than just listing the next few terms of a sequence?`,
        answer: `Because it gives a rule for any term position, not only the next few terms.`,
        change: "Reasoning"
      },
      {
        question: `A pupil says the nth term is just the difference repeated. Explain why that is not always enough.`,
        answer: `You also need to account for where the sequence starts, not only how it changes.`,
        change: "Reasoning"
      },
      {
        question: `Describe how you would convince someone that two different-looking nth terms do not generate the same sequence.`,
        answer: `Accept methods such as substituting values of n and comparing outputs or comparing coefficients and constants.`,
        change: "Reasoning"
      }
    ];
  }

  return [
    {
      question: `Why is continuing a sequence more than just spotting one pair of numbers?`,
      answer: `Because you need to identify the rule that links all the terms, not just one local change.`,
      change: "Reasoning"
    },
    {
      question: `A pupil gets the next term right by guessing. Explain why that does not prove they understand the sequence.`,
      answer: `They need to explain the rule or pattern, otherwise the answer could be a coincidence.`,
      change: "Reasoning"
    },
    {
      question: `What is the best way to check whether the next terms you wrote really belong in the sequence?`,
      answer: `Apply the same rule repeatedly and verify that each new term keeps the pattern consistent.`,
      change: "Reasoning"
    }
  ];
}

function generateFunctionMachineReasoning(_topic, variant, _settings, _difficultyKey, _worksheet) {
  if (variant?.id === "find-the-input") {
    return [
      {
        question: `Why is it useful to check whether your input makes the shown output when you put it back through the machine?`,
        answer: `Because substituting the input back into the machine confirms whether it really produces the given output.`,
        change: "Reasoning"
      },
      {
        question: `A pupil says, "The machine gives 18 after adding 6, so the input must be 24." Explain the mistake.`,
        answer: `They added instead of undoing the operation. If the machine adds 6, you must subtract 6 to find the input.`,
        change: "Reasoning"
      },
      {
        question: `Explain how finding the input for a multiplication machine is similar to and different from finding the input for an addition machine.`,
        answer: `In both cases you work backwards from the output, but for multiplication you divide by the multiplier, while for addition you subtract the amount added.`,
        change: "Reasoning"
      }
    ];
  }

  if (variant?.id === "identify-the-rule") {
    return [
      {
        question: `How can one input-output pair help you identify the rule of a simple function machine?`,
        answer: `By checking what operation changes the input into the output, such as adding, subtracting, multiplying or dividing.`,
        change: "Reasoning"
      },
      {
        question: `A pupil says a machine changing 4 into 12 must be "add 8". Explain why another rule could also work for that one pair.`,
        answer: `A different rule such as multiply by 3 also changes 4 into 12, so one pair alone does not always prove the rule unless the type of machine is known.`,
        change: "Reasoning"
      },
      {
        question: `Why is it helpful to test a possible rule on a second input-output pair before deciding it is correct?`,
        answer: `Because a rule that works for one pair might fail for another, so a second check gives stronger evidence that the rule is correct.`,
        change: "Reasoning"
      }
    ];
  }

  if (variant?.id === "reverse-machines") {
    return [
      {
        question: `Why does working backwards through a function machine require inverse operations?`,
        answer: `Because inverse operations undo the operations that were applied to the input.`,
        change: "Reasoning"
      },
      {
        question: `A pupil says, "If the machine adds 4, I should add 4 again to work backwards." Explain the mistake.`,
        answer: `To work backwards you must undo the operation, so you should subtract 4, not add 4.`,
        change: "Reasoning"
      },
      {
        question: `Explain why the reverse of "multiply by 5 then add 2" must undo the operations in the opposite order.`,
        answer: `Because you undo the last step first. You would subtract 2 before dividing by 5, otherwise you would not return to the original input correctly.`,
        change: "Reasoning"
      }
    ];
  }

  return [
    {
      question: `How can you check whether an output from a function machine is reasonable before finishing?`,
      answer: `You can estimate the effect of the rule on the input and judge whether the output has the right size and direction of change.`,
      change: "Reasoning"
    },
    {
      question: `A pupil says, "If the machine says multiply by 4, the output must always be 4 bigger than the input." Explain the mistake.`,
      answer: `Multiplying by 4 scales the input, so the increase depends on the starting value. It is not a fixed amount bigger each time.`,
      change: "Reasoning"
    },
    {
      question: `Create two different function machines that give the same output for one chosen input. Explain why the rules are still different.`,
      answer: `Accept any valid example with explanation that matching one output does not make the rules equivalent in general.`,
      change: "Reasoning"
    }
  ];
}

function generateFdpReasoning(_topic, _variant, _settings, _difficultyKey, _worksheet) {
  return [
    {
      question: `Why is it useful to know links between fractions, decimals, and percentages rather than learning each form separately?`,
      answer: `Because they are different ways of representing the same amount, and switching form can make comparison or calculation easier.`,
      change: "Reasoning"
    },
    {
      question: `A pupil says 0.5, 5%, and 1/2 are all equivalent because they all contain a 5. Explain why that is incorrect.`,
      answer: `The digits alone do not determine equivalence. 0.5 and 1/2 are equivalent, but 5% is 0.05, which is much smaller.`,
      change: "Reasoning"
    },
    {
      question: `Give one example where converting to a different form helps you compare two values more easily.`,
      answer: `Accept any valid example with explanation, such as converting both values to percentages or decimals.`,
      change: "Reasoning"
    }
  ];
}

function generateFractionDecimalConversionReasoning(_topic, variant, _settings, _difficultyKey, _worksheet) {
  if (variant?.id === "match-equivalents") {
    return [
      {
        question: `Why is matching equivalent forms about value rather than about which digits look similar?`,
        answer: `Because equivalent fractions and decimals represent the same quantity even when the notation looks very different.`,
        change: "Reasoning"
      },
      {
        question: `A pupil matches 3/5 with 0.35 because both include a 3 and a 5. Explain the misconception.`,
        answer: `Matching by digits ignores the actual value. 3/5 is 0.6, so the correct match must represent the same amount, not the same symbols.`,
        change: "Reasoning"
      },
      {
        question: `What is a quick way to justify that two matched forms are equivalent?`,
        answer: `Convert one form into the other or compare both against a familiar benchmark such as one half or one whole.`,
        change: "Reasoning"
      }
    ];
  }

  if (variant?.id === "missing-value") {
    return [
      {
        question: `Why does a missing-value conversion question test understanding more deeply than a direct conversion question?`,
        answer: `Because you have to recognise the equivalent relationship and decide which representation is missing rather than simply apply a memorised fact.`,
        change: "Reasoning"
      },
      {
        question: `A pupil fills the missing value by copying part of the fraction into the decimal. Why does that not guarantee equivalence?`,
        answer: `Equivalent values come from the size of the numbers, not from copying symbols or digits across representations.`,
        change: "Reasoning"
      },
      {
        question: `How can you check a missing fraction-decimal value once you have one?`,
        answer: `Convert your answer to the other form and verify that it matches the value already given.`,
        change: "Reasoning"
      }
    ];
  }

  if (variant?.id === "compare-values") {
    return [
      {
        question: `Why is it often helpful to convert the numbers to the same form before comparing a fraction and a decimal?`,
        answer: `A common representation makes the size comparison clearer and reduces the chance of being distracted by different notation.`,
        change: "Reasoning"
      },
      {
        question: `A pupil says a decimal must be smaller because it starts with 0. Why can that be misleading in a compare-values question?`,
        answer: `Fractions less than one also represent numbers below one, so the form does not tell you which is greater on its own.`,
        change: "Reasoning"
      },
      {
        question: `When might benchmark thinking be quicker than full conversion in a compare-values task?`,
        answer: `It can be quicker when both values can be judged relative to a familiar amount such as 0.5 or 1 without finding exact equivalents.`,
        change: "Reasoning"
      }
    ];
  }

  return [
    {
      question: `Why is it useful to know a small set of common fraction-decimal pairs fluently?`,
      answer: `Because those known pairs make other conversions, comparisons, and estimates much quicker and more reliable.`,
      change: "Reasoning"
    },
    {
      question: `A pupil knows 1/2 = 0.5 but struggles with 3/4. How can known conversions help build less familiar ones?`,
      answer: `Known unit and benchmark fractions can be combined or scaled to reason about less familiar equivalents.`,
      change: "Reasoning"
    },
    {
      question: `Why is writing a fraction in simplest form useful before or after converting?`,
      answer: `A simplified fraction makes the relationship clearer and helps you spot familiar equivalents more easily.`,
      change: "Reasoning"
    }
  ];
}

function generateSubstitutionReasoning(_topic, variant, _settings, _difficultyKey, _worksheet) {
  if (variant?.id === "missing-value-reasoning") {
    return [
      {
        question: `Why is a missing-value substitution question harder than simply evaluating an expression?`,
        answer: `Because you have to reason backwards from the result to the unknown value rather than just replace the variable and calculate.`,
        change: "Reasoning"
      },
      {
        question: `A pupil finds the missing value by matching only one part of the expression. Why can that go wrong?`,
        answer: `The whole expression has to balance, so every part of the structure must be considered, not just one term.`,
        change: "Reasoning"
      },
      {
        question: `What is a reliable way to check a missing-value substitution answer once you have found it?`,
        answer: `Substitute the value back into the original expression and verify that it gives the stated total or result.`,
        change: "Reasoning"
      }
    ];
  }

  return [
    {
      question: `Why is it important to substitute the value before carrying out the calculation?`,
      answer: `Because the variable must first be replaced with its value so the expression becomes a numerical calculation.`,
      change: "Reasoning"
    },
    {
      question: `A pupil substitutes x = 3 into 2x + 4 and gets 24. Explain the mistake.`,
      answer: `They treated 2x as 23 instead of 2 × 3. The correct value is 10.`,
      change: "Reasoning"
    },
    {
      question: `Write an expression that gives the same value for x = 4 as a different expression. Explain how you know.`,
      answer: `Accept any valid pair and explanation by substitution.`,
      change: "Reasoning"
    }
  ];
}

function generateDecimalOperationReasoning(_topic, variant, _settings, _difficultyKey, _worksheet) {
  if (variant?.id === "multiply-divide-10") {
    return [
      {
        question: `Why is thinking about place value more reliable than "adding or removing zeros" when multiplying or dividing decimals by 10, 100, or 1000?`,
        answer: `Because the value of each digit changes by a factor of ten each time, while simply adding zeros can hide what is really happening to the digits.`,
        change: "Reasoning"
      },
      {
        question: `A pupil says 0.84 × 100 = 0.8400 because there are now two extra zeros. Explain the mistake.`,
        answer: `The digits should become one hundred times as large, so 0.84 × 100 = 84. Writing extra zeros without shifting place value does not change the size correctly.`,
        change: "Reasoning"
      },
      {
        question: `How can you estimate whether a decimal shift answer is sensible before finishing?`,
        answer: `Judge whether the number should become much larger or much smaller and whether the decimal point should move left or right for that operation.`,
        change: "Reasoning"
      }
    ];
  }

  if (variant?.id === "missing-value") {
    return [
      {
        question: `Why is it useful to ask which inverse operation will undo the visible part of the calculation in a decimal missing-value question?`,
        answer: `Because missing-value questions are usually solved by undoing the known operation while keeping the decimal place values aligned correctly.`,
        change: "Reasoning"
      },
      {
        question: `A pupil ignores the decimal points and solves the question using whole-number thinking. Why is that risky?`,
        answer: `The decimal places determine the size of each part, so ignoring them can give an answer with the wrong value even if the digit work looks sensible.`,
        change: "Reasoning"
      },
      {
        question: `How would you check a decimal missing-value answer once you have one?`,
        answer: `Substitute it back into the original calculation and check that the total or result matches exactly.`,
        change: "Reasoning"
      }
    ];
  }

  if (variant?.id === "error-spotting") {
    return [
      {
        question: `Why do decimal errors often come from place-value misunderstanding rather than from the arithmetic method itself?`,
        answer: `Because pupils may line up digits or move the decimal point incorrectly even when they know the operation they are trying to perform.`,
        change: "Reasoning"
      },
      {
        question: `When checking a worked decimal answer, what should you examine before the final digits?`,
        answer: `Check whether the decimal point is in a sensible place and whether the answer has the right size compared with the original numbers.`,
        change: "Reasoning"
      },
      {
        question: `Why is estimation a powerful tool in a decimal error-spotting question?`,
        answer: `A quick estimate often shows immediately when an answer is ten or one hundred times too large or too small.`,
        change: "Reasoning"
      }
    ];
  }

  return [
    {
      question: `Why does multiplying by 10 change each digit’s place value instead of simply "adding a zero"?`,
      answer: `Because each digit becomes worth ten times as much, so the digits shift one place to the left in place-value terms.`,
      change: "Reasoning"
    },
    {
      question: `A pupil says 3.6 × 10 = 3.60. Explain why that is incorrect.`,
      answer: `3.60 is the same value as 3.6. Multiplying by 10 gives 36 because each digit becomes ten times larger.`,
      change: "Reasoning"
    },
    {
      question: `Describe one way estimation can help you decide whether a decimal answer is reasonable.`,
      answer: `Accept a valid explanation using rounded numbers or place-value reasoning to judge the size of the answer.`,
      change: "Reasoning"
    }
  ];
}

function generatePowerReasoning(_topic, _variant, _settings, _difficultyKey, _worksheet) {
  return [
    {
      question: `Why is 4^2 not the same as 4 x 2 even though both use a 4 and a 2?`,
      answer: `Because 4 squared means 4 multiplied by itself, so it is 4 x 4, not 4 x 2.`,
      change: "Reasoning"
    },
    {
      question: `A pupil says a cube number must be bigger than the matching square number. Is that always true? Explain with an example.`,
      answer: `It is true for numbers greater than 1, but not for 0 or 1 because 0 squared and 0 cubed are both 0, and 1 squared and 1 cubed are both 1.`,
      change: "Reasoning"
    },
    {
      question: `Explain how you could recognise whether a number is a square number or a cube number without just guessing.`,
      answer: `Accept a valid explanation using equal factors, arrays, or known square and cube values.`,
      change: "Reasoning"
    }
  ];
}

function generateIntegerOperationReasoning(_topic, variant, _settings, _difficultyKey, _worksheet) {
  if (variant?.id === "choose-operation") {
    return [
      {
        question: `Why is operation choice about the relationship between the numbers, not just about spotting a familiar-looking answer?`,
        answer: `Because the correct operation depends on how the numbers are connected, such as combining, finding a difference, scaling, or sharing.`,
        change: "Reasoning"
      },
      {
        question: `A pupil chooses multiplication because it makes the largest result. Why is that not a reliable way to choose an operation?`,
        answer: `The aim is not to make the biggest answer but to use the operation that matches the structure of the question or equation.`,
        change: "Reasoning"
      },
      {
        question: `How can checking the inverse operation help confirm that you chose the right one?`,
        answer: `If the inverse recreates the original relationship correctly, it supports that the chosen operation fits the structure.`,
        change: "Reasoning"
      }
    ];
  }

  if (variant?.id === "missing-value") {
    return [
      {
        question: `Why are missing-value questions often solved by thinking about inverse operations?`,
        answer: `Because you usually need to undo the visible operation to recover the missing number.`,
        change: "Reasoning"
      },
      {
        question: `A pupil fills the gap in a calculation by using a method that worked in a different question. Why can that be risky?`,
        answer: `A method that works in one structure may fail in another, so you need to understand whether the unknown is a part, a result, or the starting number.`,
        change: "Reasoning"
      },
      {
        question: `What is the most reliable way to check a missing-value answer?`,
        answer: `Substitute the value back into the original calculation and see whether the equation becomes true.`,
        change: "Reasoning"
      }
    ];
  }

  if (variant?.id === "error-spotting") {
    return [
      {
        question: `Why is it useful to name the specific mistake in an integer-operation error rather than only correcting the answer?`,
        answer: `Because naming the error shows whether the misunderstanding was about operation choice, place value, or inverse thinking.`,
        change: "Reasoning"
      },
      {
        question: `A pupil gets a subtraction question wrong because they treat every operation like addition. Why is that a deeper issue than one wrong answer?`,
        answer: `It shows they are not yet distinguishing the meanings of the operations, so the same misconception could reappear in many problems.`,
        change: "Reasoning"
      },
      {
        question: `How can estimation help when checking whether an integer-operation answer is plausible?`,
        answer: `A quick estimate gives the expected size of the result and can show immediately when an answer is far too large or too small.`,
        change: "Reasoning"
      }
    ];
  }

  return [
    {
      question: `Why is it useful to estimate first when working with all four operations on integers?`,
      answer: `Because estimation helps you check whether the sign and size of the final answer are reasonable.`,
      change: "Reasoning"
    },
    {
      question: `A pupil says, "If the numbers are large, multiplication must give the greatest answer." Explain why that is not always true.`,
      answer: `It depends on the operation and the numbers involved. Division or subtraction can give smaller values, and multiplying by 0 or a negative number does not simply make the answer greater.`,
      change: "Reasoning"
    },
    {
      question: `Give two different integer calculations that have the same answer, but use different operations. Explain how you know they match.`,
      answer: `Accept any valid pair with a correct check or explanation.`,
      change: "Reasoning"
    }
  ];
}

function generateDecimalComparisonReasoning(_topic, variant, _settings, _difficultyKey, _worksheet) {
  if (variant?.id === "order-sets") {
    return [
      {
        question: `Why is putting zeros in empty decimal places sometimes helpful when ordering decimals?`,
        answer: `It lets you compare digits in the same place-value columns without changing the value of the numbers.`,
        change: "Reasoning"
      },
      {
        question: `A pupil orders decimals by the number of digits they can see. Why can that fail?`,
        answer: `More digits do not automatically mean a greater value; place value must be compared from left to right.`,
        change: "Reasoning"
      },
      {
        question: `What is a reliable first step when several decimals are very close together?`,
        answer: `Line them up by place value and compare the digits from the greatest place to the least until a difference appears.`,
        change: "Reasoning"
      }
    ];
  }

  if (variant?.id === "benchmarking") {
    return [
      {
        question: `Why are benchmark numbers such as 0, 0.5, 1, or 10 useful when comparing decimals?`,
        answer: `They give familiar reference points that help you judge the size of a decimal without complicated calculation.`,
        change: "Reasoning"
      },
      {
        question: `A pupil knows 0.48 is close to 0.5 but still says it is greater than 0.5. What did they overlook?`,
        answer: `They noticed closeness but not direction. A benchmark comparison must still decide whether the number lies above or below the benchmark.`,
        change: "Reasoning"
      },
      {
        question: `When is using a benchmark more efficient than comparing two decimals digit by digit?`,
        answer: `It is especially useful when the numbers are being judged against a familiar midpoint or whole number rather than against each other directly.`,
        change: "Reasoning"
      }
    ];
  }

  if (variant?.id === "true-false") {
    return [
      {
        question: `Why is a true-or-false decimal statement stronger when you justify it with place value rather than only saying yes or no?`,
        answer: `Because place-value explanation shows why the statement is true or false and makes the reasoning transferable to other examples.`,
        change: "Reasoning"
      },
      {
        question: `A pupil says 2.40 and 2.4 cannot be equal because one has more digits. Explain the misconception.`,
        answer: `Trailing zeros after the decimal point do not change the value, so the two decimals represent the same amount.`,
        change: "Reasoning"
      },
      {
        question: `What kind of decimal statement most often tricks pupils in a true-or-false task?`,
        answer: `Statements involving trailing zeros, different-length decimals, or comparisons across tenths and hundredths often cause confusion.`,
        change: "Reasoning"
      }
    ];
  }

  return [
    {
      question: `Why is 0.8 greater than 0.75 even though 75 is greater than 8?`,
      answer: `Because decimals must be compared by place value. 0.8 is 8 tenths, while 0.75 is 7 tenths and 5 hundredths.`,
      change: "Reasoning"
    },
    {
      question: `A pupil says the longer decimal is always larger. Explain why that is not always true.`,
      answer: `More digits do not always mean a greater value. For example, 0.9 is greater than 0.87.`,
      change: "Reasoning"
    },
    {
      question: `Describe one reliable method for ordering decimals that are very close together.`,
      answer: `Accept a valid method such as lining up decimal places, adding zeros where needed, or comparing digit by digit from left to right.`,
      change: "Reasoning"
    }
  ];
}

function generateFractionMultiplyReasoning(_topic, variant, _settings, _difficultyKey, _worksheet) {
  if (variant?.id === "missing-value") {
    return [
      {
        question: `Why is a missing-value fraction multiplication question really about understanding structure, not just carrying out a product?`,
        answer: `Because you must identify which part is unknown and how the whole-number multiplier and fraction are related before you can work backwards correctly.`,
        change: "Reasoning"
      },
      {
        question: `A pupil sees ? × 3 = 9/5 and decides the missing fraction must be 9/15. Explain the mistake.`,
        answer: `They multiplied the denominator instead of undoing the multiplication by 3. You need to divide the product by 3 to recover the original fraction.`,
        change: "Reasoning"
      },
      {
        question: `How can you check a missing multiplier or missing fraction answer once you have one?`,
        answer: `Multiply the parts back together and verify that you recover the given product exactly.`,
        change: "Reasoning"
      }
    ];
  }

  if (variant?.id === "error-spotting") {
    return [
      {
        question: `Why is the denominator often the first thing to check in a fraction-times-integer error?`,
        answer: `Because multiplying by a whole number does not automatically change the denominator, so that is a common place to spot a misconception.`,
        change: "Reasoning"
      },
      {
        question: `A pupil gives a correct numerator but an unsimplified final answer. Why is that only part of the job finished?`,
        answer: `The multiplication may be correct, but the answer should still be simplified or written as a mixed number when appropriate.`,
        change: "Reasoning"
      },
      {
        question: `What misconception is usually behind an answer where both numerator and denominator have been multiplied by the integer?`,
        answer: `The pupil is confusing multiplying a fraction by an integer with creating an equivalent fraction.`,
        change: "Reasoning"
      }
    ];
  }

  return [
    {
      question: `Why does multiplying a fraction by a whole number mean taking several equal groups of that fraction?`,
      answer: `Because multiplication represents repeated addition, so 3 x 1/4 means 1/4 + 1/4 + 1/4.`,
      change: "Reasoning"
    },
    {
      question: `A pupil says 3 x 2/5 = 6/15. Explain the mistake.`,
      answer: `They multiplied both the numerator and denominator. When multiplying a whole number by a fraction, only the numerator is scaled, so the correct answer is 6/5 or 1 1/5.`,
      change: "Reasoning"
    },
    {
      question: `Give one example where multiplying a fraction by an integer gives a whole number, and explain why.`,
      answer: `Accept a valid example such as 4 x 1/4 = 1, with explanation that four quarter-parts make one whole.`,
      change: "Reasoning"
    }
  ];
}

function generateFractionOfAmountReasoning(_topic, variant, _settings, _difficultyKey, _worksheet) {
  if (variant?.id === "non-unit-fractions") {
    return [
      {
        question: `Why is it often safer to find one part first even when the question asks for a non-unit fraction of an amount?`,
        answer: `Because the denominator tells you how many equal parts the whole is split into, so finding one part gives a clear route to building the required number of parts.`,
        change: "Reasoning"
      },
      {
        question: `A pupil tries to find 3/5 of 40 by multiplying 40 by 5 first. Explain why that does not follow the meaning of the fraction.`,
        answer: `The whole should be split into five equal parts first, so you divide by 5 and then take 3 of those equal parts.`,
        change: "Reasoning"
      },
      {
        question: `How can a bar or strip model help in a non-unit fraction of an amount question?`,
        answer: `It shows the whole split into equal parts and makes it easier to see how many parts need to be combined.`,
        change: "Reasoning"
      }
    ];
  }

  if (variant?.id === "reverse-problems") {
    return [
      {
        question: `Why is a reverse fraction problem harder than an ordinary fraction-of-an-amount problem?`,
        answer: `Because you are given the part and must rebuild the whole, so the direction of the method is reversed.`,
        change: "Reasoning"
      },
      {
        question: `A pupil knows that 3/5 of an amount is 24 and decides the whole must be 24 ÷ 5. Explain the mistake.`,
        answer: `24 represents three parts, not one part. You first need to find one part by dividing by 3, then multiply by 5 to get the whole.`,
        change: "Reasoning"
      },
      {
        question: `How can you check a reverse fraction answer once you have found the whole?`,
        answer: `Take the stated fraction of your whole and see whether it gives the original part from the question.`,
        change: "Reasoning"
      }
    ];
  }

  if (variant?.id === "compare-methods") {
    return [
      {
        question: `Why can two different methods both solve a fraction-of-an-amount problem successfully?`,
        answer: `Because they may both preserve the same fraction structure, for example by finding one part first or by using an equivalent multiplicative calculation.`,
        change: "Reasoning"
      },
      {
        question: `What should you focus on when deciding whether a pupil's method is valid, even if it looks different from yours?`,
        answer: `Check whether their steps respect the denominator as equal parts and produce the correct number of those parts in the end.`,
        change: "Reasoning"
      },
      {
        question: `When is "divide first, then multiply" especially helpful in a compare-methods question?`,
        answer: `It is especially helpful when the amount divides cleanly by the denominator, because it makes the equal-part structure obvious.`,
        change: "Reasoning"
      }
    ];
  }

  return [
    {
      question: `Why is finding 1/n of an amount often a useful first step when finding a fraction of an amount?`,
      answer: `Because once you know one equal part, you can build the required fraction by combining the right number of those parts.`,
      change: "Reasoning"
    },
    {
      question: `A pupil finds 3/5 of 20 by doing 20 x 5. Explain why that does not match the meaning of the fraction.`,
      answer: `The denominator tells you how many equal parts the whole is split into, so you should divide by 5 first, then take 3 of those parts.`,
      change: "Reasoning"
    },
    {
      question: `Explain the difference between a "fraction of an amount" problem and a "reverse fraction of an amount" problem.`,
      answer: `In a fraction-of-an-amount problem you know the whole and find the part. In a reverse problem you know the part and work back to the whole.`,
      change: "Reasoning"
    }
  ];
}

function generateAreaReasoning(_topic, variant, _settings, _difficultyKey, _worksheet) {
  if (variant?.id === "missing-dimension") {
    return [
      {
        question: `Why can division help you find a missing side when the area of a rectangle is known?`,
        answer: `Because area is length × width, so dividing the area by the known side gives the missing side.`,
        change: "Reasoning"
      },
      {
        question: `A pupil finds a missing side by adding the known side to the area. Explain the mistake.`,
        answer: `Area combines the two side lengths multiplicatively, not additively, so you need division rather than addition.`,
        change: "Reasoning"
      },
      {
        question: `How can you check whether a missing side you found is reasonable before finishing?`,
        answer: `Multiply it by the known side and check that the product matches the given area.`,
        change: "Reasoning"
      }
    ];
  }

  if (variant?.id === "compare-areas") {
    return [
      {
        question: `Why is it not enough to compare just one side when deciding which rectangle has the greater area?`,
        answer: `Because area depends on both dimensions, so a longer side alone does not guarantee a larger area.`,
        change: "Reasoning"
      },
      {
        question: `A pupil says the rectangle with the larger perimeter must have the larger area. Explain why that is not always true.`,
        answer: `Perimeter and area measure different things, so a shape can have a larger perimeter without having a larger area.`,
        change: "Reasoning"
      },
      {
        question: `What is a quick but reliable way to compare two rectangle areas when the dimensions are close?`,
        answer: `Calculate or estimate both products carefully and compare the resulting areas directly.`,
        change: "Reasoning"
      }
    ];
  }

  if (variant?.id === "compound-shapes") {
    return [
      {
        question: `Why can splitting a compound shape into rectangles make the area easier to find?`,
        answer: `Because rectangles have a simple area formula, so you can find each part and then combine them.`,
        change: "Reasoning"
      },
      {
        question: `A pupil adds all the labelled side lengths to find the area of a compound shape. Explain the confusion.`,
        answer: `That method finds perimeter information, not the area inside the shape. Area depends on splitting the shape into regions and calculating their sizes.`,
        change: "Reasoning"
      },
      {
        question: `Why might you need to work out a missing side before you can find the area of a compound shape?`,
        answer: `Because one of the rectangular parts may not have enough information until you infer the missing dimension from the full width or height.`,
        change: "Reasoning"
      }
    ];
  }

  return [
    {
      question: `Why is area measured in square units rather than just units?`,
      answer: `Because area measures how much surface is covered, and that is counted using squares that cover the shape without gaps or overlaps.`,
      change: "Reasoning"
    },
    {
      question: `A pupil adds the side lengths of a rectangle to find the area. Explain the confusion.`,
      answer: `That method finds perimeter, not area. Rectangle area is found by multiplying length by width.`,
      change: "Reasoning"
    },
    {
      question: `How can you tell whether a rectangle area answer is reasonable before finishing?`,
      answer: `Check whether the product is of the right size compared with the side lengths and whether the units are square units.`,
      change: "Reasoning"
    }
  ];
}

function generateTransformationReasoning(_topic, _variant, _settings, _difficultyKey, _worksheet) {
  return [
    {
      question: `What stays the same when a shape is translated, reflected, or rotated?`,
      answer: `Its size, side lengths, angles, and overall shape stay the same because the image is congruent to the original.`,
      change: "Reasoning"
    },
    {
      question: `Why is a reflection different from a translation even if the image ends up the same distance away?`,
      answer: `A reflection flips the shape across a mirror line, while a translation slides it without flipping.`,
      change: "Reasoning"
    },
    {
      question: `Explain how you can tell from a diagram whether a shape has been rotated or reflected.`,
      answer: `Accept a valid explanation using orientation, turning, mirror lines, or the relative positions of corresponding points.`,
      change: "Reasoning"
    }
  ];
}

function generateDataDisplayReasoning(_topic, _variant, _settings, _difficultyKey, _worksheet) {
  return [
    {
      question: `Why can the same data be shown in a table and a chart, but each representation be useful for different reasons?`,
      answer: `A table makes exact values easy to read, while a chart makes comparisons and patterns easier to see quickly.`,
      change: "Reasoning"
    },
    {
      question: `A pupil reads the tallest bar correctly but gives the wrong total. What does that tell you about their interpretation of the chart?`,
      answer: `It suggests they can identify one category visually but have not combined the frequencies accurately across the whole display.`,
      change: "Reasoning"
    },
    {
      question: `Explain one advantage and one limitation of using a bar chart instead of a table.`,
      answer: `Accept a valid comparison such as quicker visual comparison but less direct reading of exact values.`,
      change: "Reasoning"
    }
  ];
}

function generateAveragesReasoning(_topic, variant, _settings, _difficultyKey, _worksheet) {
  if (variant?.id === "which-measure") {
    return [
      {
        question: `Why might one measure be more useful than another for the same data set?`,
        answer: `Because different measures describe different features, such as centre, most common value, or spread.`,
        change: "Reasoning"
      },
      {
        question: `A pupil says the mode is always the most useful average because it is the most common value. Explain why that is not always true.`,
        answer: `Some data sets have no mode, more than one mode, or are better described by the mean or median depending on the question.`,
        change: "Reasoning"
      },
      {
        question: `How would you decide whether to use the mean, median, mode, or range for a particular question?`,
        answer: `Look at whether the question is asking about a typical value, a repeated value, or the spread of the data.`,
        change: "Reasoning"
      }
    ];
  }

  if (variant?.id === "missing-value") {
    return [
      {
        question: `Why does a missing-value average question often require you to think about the total before the missing number itself?`,
        answer: `Because the average is linked to the total of the data, so you often need to reconstruct the total first.`,
        change: "Reasoning"
      },
      {
        question: `A pupil finds the missing value in a mean question by dividing too early. Explain why that can cause an error.`,
        answer: `You must first work out the total that the data should add to, then compare that with the known values.`,
        change: "Reasoning"
      },
      {
        question: `How can you check whether a missing value answer is correct once you have found it?`,
        answer: `Substitute it back into the data and verify that the stated mean, median, or range is satisfied.`,
        change: "Reasoning"
      }
    ];
  }

  if (variant?.id === "error-spotting") {
    return [
      {
        question: `Why is it useful to identify which measure a pupil was trying to find before correcting their error?`,
        answer: `Because different measures require different methods, so identifying the target helps you spot where the reasoning went wrong.`,
        change: "Reasoning"
      },
      {
        question: `A pupil gives the right type of measure but uses the wrong method. Why is that different from choosing the wrong measure entirely?`,
        answer: `Choosing the wrong measure misunderstands the question, while using the wrong method misunderstands how to calculate the chosen measure.`,
        change: "Reasoning"
      },
      {
        question: `What is the difference between correcting an averages error and explaining the misconception behind it?`,
        answer: `Correcting gives the right answer, while explaining the misconception shows which step or idea the pupil misunderstood.`,
        change: "Reasoning"
      }
    ];
  }

  return [
    {
      question: `Why is the mean sometimes not the best measure to describe a data set?`,
      answer: `Because one unusually large or small value can pull the mean away from what is typical.`,
      change: "Reasoning"
    },
    {
      question: `Why must the data usually be ordered before finding the median?`,
      answer: `Because the median depends on the middle position, and you can only identify that correctly when the data is in order.`,
      change: "Reasoning"
    },
    {
      question: `Explain how the range and an average measure different things about the same data set.`,
      answer: `An average describes the centre or typical value, while the range describes the spread from smallest to largest.`,
      change: "Reasoning"
    }
  ];
}

function generateProbabilityReasoning(_topic, variant, _settings, _difficultyKey, _worksheet) {
  if (variant?.id === "compare-likelihood") {
    return [
      {
        question: `Why is it possible to compare two events without calculating an exact decimal probability every time?`,
        answer: `Because you can compare the relative chance of the events from their structure or number of favourable outcomes.`,
        change: "Reasoning"
      },
      {
        question: `A pupil says two events are equally likely because they both sound "possible". Explain the mistake.`,
        answer: `Possible events can still have very different probabilities, so you must compare how likely they really are, not just whether they can happen.`,
        change: "Reasoning"
      },
      {
        question: `What kind of information helps you justify that one event is more likely than another?`,
        answer: `The number of successful outcomes out of the total possible outcomes, or a clear comparison on the probability scale.`,
        change: "Reasoning"
      }
    ];
  }

  if (variant?.id === "missing-probability") {
    return [
      {
        question: `Why does finding a missing probability often depend on the fact that probabilities sum to 1?`,
        answer: `Because an event and its complement cover all possibilities together, so their probabilities must total 1.`,
        change: "Reasoning"
      },
      {
        question: `A pupil finds a missing probability by adding instead of subtracting from 1. Explain the mistake.`,
        answer: `If one part is already known, the missing part must be what is left to make the total 1.`,
        change: "Reasoning"
      },
      {
        question: `How can you check whether a missing probability you found is sensible?`,
        answer: `Add it to the known probability and check that the total is 1 and that the value lies between 0 and 1.`,
        change: "Reasoning"
      }
    ];
  }

  if (variant?.id === "true-false") {
    return [
      {
        question: `Why is it useful to know the meaning of 0, 0.5, and 1 when judging whether a probability statement is true?`,
        answer: `Because those benchmark values help you test whether a statement is describing impossible, even-chance, or certain events correctly.`,
        change: "Reasoning"
      },
      {
        question: `A pupil says an event with probability 0.7 is "guaranteed". Explain the mistake.`,
        answer: `0.7 means the event is likely, but it can still fail to happen. Only probability 1 means guaranteed.`,
        change: "Reasoning"
      },
      {
        question: `What is the difference between showing that a statement is false and explaining why it is false?`,
        answer: `Showing it is false gives the correction, while explaining why it is false identifies the probability rule or idea that was misused.`,
        change: "Reasoning"
      }
    ];
  }

  return [
    {
      question: `Why must a probability always be between 0 and 1?`,
      answer: `Because 0 represents impossible and 1 represents certain, so all probabilities must lie between those two limits.`,
      change: "Reasoning"
    },
    {
      question: `What is the difference between an unlikely event and an impossible event?`,
      answer: `An unlikely event can still happen, while an impossible event cannot happen at all.`,
      change: "Reasoning"
    },
    {
      question: `Why is a probability word like "likely" useful even when you do not have an exact numerical value?`,
      answer: `Because it still communicates where an event sits on the probability scale in a meaningful way.`,
      change: "Reasoning"
    }
  ];
}

function generatePercentageReasoning(_topic, _variant, _settings, _difficultyKey, _worksheet) {
  return [
    {
      question: `Why is 50% a useful benchmark when comparing percentages?`,
      answer: `Because 50% represents one half, so it helps you judge whether a percentage is less than, equal to, or greater than half of the whole.`,
      change: "Reasoning"
    },
    {
      question: `A pupil says 8% is greater than 75% because 8 is greater than 7. Explain the mistake.`,
      answer: `Percentages must be compared as whole values out of 100, so 75% is much greater than 8%.`,
      change: "Reasoning"
    },
    {
      question: `Explain one strategy for ordering several percentages that are close together.`,
      answer: `Accept a valid strategy such as comparing to 50% or 100%, converting to decimals, or aligning them as values out of 100.`,
      change: "Reasoning"
    }
  ];
}

function generateMetricReasoning(_topic, _variant, _settings, _difficultyKey, _worksheet) {
  return [
    {
      question: `Why is it important to think about whether you are converting to a larger unit or a smaller unit?`,
      answer: `Because the number changes in different directions: converting to a smaller unit gives more units, while converting to a larger unit gives fewer.`,
      change: "Reasoning"
    },
    {
      question: `A pupil converts 3.2 m to 3200 cm. Explain the mistake.`,
      answer: `There are 100 cm in 1 m, so 3.2 m is 320 cm, not 3200 cm.`,
      change: "Reasoning"
    },
    {
      question: `Explain how place value can help you check whether a metric conversion is sensible.`,
      answer: `Because metric conversions scale by powers of 10, so the decimal point shifts in a predictable way when units change.`,
      change: "Reasoning"
    }
  ];
}

function generateScalingReasoning(_topic, _variant, _settings, _difficultyKey, _worksheet) {
  return [
    {
      question: `Why is scaling a multiplicative idea rather than an additive one?`,
      answer: `Because scaling changes a quantity by a factor, not by adding or subtracting a fixed amount.`,
      change: "Reasoning"
    },
    {
      question: `A pupil doubles one quantity and adds 2 to the other when trying to keep a relationship in proportion. Explain why that breaks the scaling.`,
      answer: `Both linked quantities must be scaled by the same multiplier to stay proportional.`,
      change: "Reasoning"
    },
    {
      question: `Describe a situation where scaling down is more useful than scaling up.`,
      answer: `Accept any valid context such as reducing a recipe, map scale, or model size, with a multiplicative explanation.`,
      change: "Reasoning"
    }
  ];
}

function generateProportionReasoning(_topic, _variant, _settings, _difficultyKey, _worksheet) {
  return [
    {
      question: `Why can finding the value of one unit help solve a proportion problem?`,
      answer: `Because once you know one unit, you can scale up to any number of units consistently.`,
      change: "Reasoning"
    },
    {
      question: `A pupil uses addition instead of scaling in a proportion problem. How can you tell their method is not proportional?`,
      answer: `If the relationship is proportional, the multiplicative scale factor between linked values should stay the same, not the additive difference.`,
      change: "Reasoning"
    },
    {
      question: `Explain how you would check whether two ratios describe a proportional situation.`,
      answer: `Check whether both parts can be scaled by the same factor, or compare the unit rates.`,
      change: "Reasoning"
    }
  ];
}

function generateNets3DReasoning(_topic, _variant, _settings, _difficultyKey, _worksheet) {
  return [
    {
      question: `Why is it possible for two nets to look different but still make the same 3D solid?`,
      answer: `Because the faces can be arranged in different flat layouts and still fold to the same solid.`,
      change: "Reasoning"
    },
    {
      question: `A pupil says every net with six squares makes a cube. Explain why that is not always true.`,
      answer: `The faces must also be arranged so they can fold without overlapping. The number and shape of faces alone is not enough.`,
      change: "Reasoning"
    },
    {
      question: `Explain how faces, edges, and vertices help you distinguish between two similar solids.`,
      answer: `Because they give structural facts about the solid that do not change with orientation or drawing style.`,
      change: "Reasoning"
    }
  ];
}

function generateSymmetryReflectionReasoning(_topic, _variant, _settings, _difficultyKey, _worksheet) {
  return [
    {
      question: `Why can a shape have no lines of symmetry even if it looks balanced at first glance?`,
      answer: `Because symmetry requires the shape to match exactly on both sides of a mirror line, not just appear roughly balanced.`,
      change: "Reasoning"
    },
    {
      question: `A pupil says a reflection changes the size of the shape because the image appears on the other side of the mirror line. Explain why that is wrong.`,
      answer: `A reflection changes position and orientation, but it keeps the shape congruent, so the size stays the same.`,
      change: "Reasoning"
    },
    {
      question: `Explain why a point on the mirror line does not move under reflection.`,
      answer: `Because it is already zero distance from the mirror line, so its reflected image is in the same place.`,
      change: "Reasoning"
    }
  ];
}

function generateStemLeafReasoning(_topic, _variant, _settings, _difficultyKey, _worksheet) {
  return [
    {
      question: `Why is it important for the leaves in a stem-and-leaf diagram to be written in order?`,
      answer: `Because ordered leaves make it easier to read individual values, find the median, and spot the spread of the data accurately.`,
      change: "Reasoning"
    },
    {
      question: `A pupil reads the stem as a separate number and the leaf as another separate number. Explain the misunderstanding.`,
      answer: `The stem and leaf combine to make one data value, such as 4|7 meaning 47.`,
      change: "Reasoning"
    },
    {
      question: `Explain one advantage of a stem-and-leaf diagram compared with just listing the raw data.`,
      answer: `It keeps the exact values while also showing the shape and order of the distribution more clearly.`,
      change: "Reasoning"
    }
  ];
}

function generateRelativeFrequencyReasoning(_topic, _variant, _settings, _difficultyKey, _worksheet) {
  return [
    {
      question: `Why is relative frequency often more useful than just giving the number of successes?`,
      answer: `Because it takes account of the total number of trials, so results from different-sized experiments can be compared fairly.`,
      change: "Reasoning"
    },
    {
      question: `A pupil says 8 successes is always better evidence than 6 successes. Explain why that is not enough information.`,
      answer: `You also need to know the total number of trials, because 8 out of 10 is very different from 8 out of 100.`,
      change: "Reasoning"
    },
    {
      question: `Explain why relative frequency may become more stable as the number of trials increases.`,
      answer: `Because short-term variation tends to even out over more trials, so the results often settle towards a more consistent value.`,
      change: "Reasoning"
    }
  ];
}

function generateGenericReasoning(topic, variant, _settings, _difficultyKey, worksheet) {
  const exampleA = worksheet.questions[0];
  const exampleB = worksheet.questions[1];
  return [
    {
      question: `What mathematical idea stayed the same across this ${topic.label.toLowerCase()} sequence, even when the examples changed?`,
      answer: `Accept any explanation that identifies the core idea of ${variant.label.toLowerCase()} and what remained structurally the same.`,
      change: "Reasoning"
    },
    {
      question: `Choose one fluency question from above and explain not just the answer, but why the method works.`,
      answer: `Accept a correct method explanation linked to one of the earlier fluency questions.`,
      change: "Reasoning"
    },
    {
      question: `Write your own ${topic.label.toLowerCase()} example that would fit this sequence, and explain why it belongs here.`,
      answer: `Accept any valid example with explanation showing it matches the pattern or rule of the sequence.`,
      change: "Reasoning"
    }
  ].map((item, index) => {
    if (index === 1 && exampleA && exampleB) {
      return {
        ...item,
        question: `Compare these two fluency items: "${renderPlainMath(exampleA.question)}" and "${renderPlainMath(exampleB.question)}". What changed, and why did that change matter mathematically?`
      };
    }
    return item;
  });
}

function renderPlainMath(text) {
  return String(text)
    .replace(/\s+/g, " ")
    .replace(/×/g, "x")
    .trim();
}

function renderDiagramMarkup(diagram) {
  if (!diagram || !diagram.type) {
    return "";
  }

  if (diagram.type === "rectangle") {
    return renderRectangleDiagram(diagram);
  }

  if (diagram.type === "triangle") {
    return renderTriangleDiagram(diagram);
  }

  if (diagram.type === "pythagoras-triangle") {
    return renderPythagorasTriangleDiagram(diagram);
  }

  if (diagram.type === "polygon") {
    return renderPolygonDiagram(diagram);
  }

  if (diagram.type === "named-shape") {
    return renderNamedShapeDiagram(diagram);
  }

  if (diagram.type === "coordinate-grid") {
    return renderCoordinateGridDiagram(diagram);
  }

  if (diagram.type === "stem-leaf") {
    return renderStemLeafDiagram(diagram);
  }

  if (diagram.type === "frequency-table") {
    return renderFrequencyTableDiagram(diagram);
  }

  if (diagram.type === "data-table") {
    return renderDataTableDiagram(diagram);
  }

  if (diagram.type === "bar-chart") {
    return renderBarChartDiagram(diagram);
  }

  if (diagram.type === "compound-area") {
    return renderCompoundAreaDiagram(diagram);
  }

  if (diagram.type === "tri-para-area") {
    return renderTriParaAreaDiagram(diagram);
  }

  if (diagram.type === "symmetry-complete") {
    return renderSymmetryCompleteDiagram(diagram);
  }

  if (diagram.type === "shape-set") {
    return renderShapeSetDiagram(diagram);
  }

  if (diagram.type === "reflection-demo") {
    return renderReflectionDemoDiagram(diagram);
  }

  if (diagram.type === "function-machine") {
    return renderFunctionMachineDiagram(diagram);
  }

  if (diagram.type === "probability-scale") {
    return renderProbabilityScaleDiagram(diagram);
  }

  if (diagram.type === "fraction-strip") {
    return renderFractionStripDiagram(diagram);
  }

  if (diagram.type === "value-list") {
    return renderValueListDiagram(diagram);
  }

  if (diagram.type === "solid-shape") {
    return renderSolidShapeDiagram(diagram);
  }

  if (diagram.type === "net-shape") {
    return renderNetShapeDiagram(diagram);
  }

  if (diagram.type === "ratio-groups") {
    return renderRatioGroupsDiagram(diagram);
  }

  if (diagram.type === "comparison") {
    return renderComparisonDiagram(diagram);
  }

  if (diagram.type === "angle-line") {
    return renderAngleLineDiagram(diagram);
  }

  if (diagram.type === "angle-point") {
    return renderAnglePointDiagram(diagram);
  }

  if (diagram.type === "angle-vertical") {
    return renderAngleVerticalDiagram(diagram);
  }

  return "";
}

function renderRectangleDiagram(diagram) {
  const topScale = extractLeadingNumber(diagram.topLabel) || 10;
  const rightScale = extractLeadingNumber(diagram.rightLabel) || 6;
  const ratio = clamp(topScale / rightScale, 0.9, 2.4);
  const width = 92 + (ratio * 28);
  const height = width / ratio;
  const x = trimNumber((240 - width) / 2);
  const y = trimNumber((160 - height) / 2 + 6);
  const topGuideY = y - 14;
  const rightGuideX = x + width + 14;
  return `
    <svg viewBox="0 0 240 160" class="math-diagram-svg" role="img" aria-label="Rectangle diagram">
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="2" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="${x}" y1="${topGuideY}" x2="${x + width}" y2="${topGuideY}" stroke="currentColor" stroke-width="1.4"/>
      <line x1="${x + width}" y1="${y}" x2="${rightGuideX}" y2="${y}" stroke="currentColor" stroke-width="1.2"/>
      <line x1="${x + width}" y1="${y + height}" x2="${rightGuideX}" y2="${y + height}" stroke="currentColor" stroke-width="1.2"/>
      <line x1="${rightGuideX}" y1="${y}" x2="${rightGuideX}" y2="${y + height}" stroke="currentColor" stroke-width="1.4"/>
      <text x="${x + (width / 2)}" y="${topGuideY - 6}" text-anchor="middle" class="diagram-label">${escapeHtml(diagram.topLabel)}</text>
      <text x="${rightGuideX + 8}" y="${y + (height / 2) + 4}" text-anchor="start" class="diagram-label">${escapeHtml(diagram.rightLabel)}</text>
    </svg>
  `;
}

function renderTriangleDiagram(diagram) {
  const lengths = diagram.labels.map((label) => extractLeadingNumber(label) || 6);
  const points = trianglePointsFromSides(lengths[0], lengths[1], lengths[2]);
  const topMid = midpoint(points.a, points.b);
  const leftMid = midpoint(points.a, points.c);
  const rightMid = midpoint(points.b, points.c);
  const topLabel = movePoint(topMid, 0, -18);
  const leftLabel = movePoint(leftMid, -26, 4);
  const rightLabel = movePoint(rightMid, 26, 4);
  return `
    <svg viewBox="0 0 260 190" class="math-diagram-svg" role="img" aria-label="Triangle diagram">
      <polygon points="${points.a.x},${points.a.y} ${points.b.x},${points.b.y} ${points.c.x},${points.c.y}" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <text x="${topLabel.x}" y="${topLabel.y}" text-anchor="middle" class="diagram-label">${escapeHtml(diagram.labels[0])}</text>
      <text x="${leftLabel.x}" y="${leftLabel.y}" text-anchor="end" class="diagram-label">${escapeHtml(diagram.labels[1])}</text>
      <text x="${rightLabel.x}" y="${rightLabel.y}" text-anchor="start" class="diagram-label">${escapeHtml(diagram.labels[2])}</text>
    </svg>
  `;
}

function renderPythagorasTriangleDiagram(diagram) {
  const a = { x: 56, y: 148 };
  const b = { x: 204, y: 148 };
  const c = { x: 56, y: 44 };
  const hypMid = midpoint(b, c);
  return `
    <svg viewBox="0 0 260 190" class="math-diagram-svg" role="img" aria-label="Right-angled triangle diagram">
      <polygon points="${a.x},${a.y} ${b.x},${b.y} ${c.x},${c.y}" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <path d="M ${a.x + 16} ${a.y} L ${a.x + 16} ${a.y - 16} L ${a.x} ${a.y - 16}" fill="none" stroke="currentColor" stroke-width="1.8"/>
      <text x="130" y="168" text-anchor="middle" class="diagram-label">${escapeHtml(diagram.baseLabel)}</text>
      <text x="84" y="100" text-anchor="middle" class="diagram-label">${escapeHtml(diagram.heightLabel)}</text>
      <text x="${hypMid.x + 14}" y="${hypMid.y - 8}" text-anchor="middle" class="diagram-label">${escapeHtml(diagram.hypLabel)}</text>
    </svg>
  `;
}

function renderPolygonDiagram(diagram) {
  const points = regularPolygonPoints(diagram.labels.length, 130, 95, 60, -90);
  const labelPoints = edgeLabelPoints(points, 28, 130, 95);
  const pointString = points.map((point) => `${point.x},${point.y}`).join(" ");
  const labels = labelPoints.map((point, index) => {
    return `<text x="${point.x}" y="${point.y}" text-anchor="middle" class="diagram-label">${escapeHtml(diagram.labels[index])}</text>`;
  }).join("");

  return `
    <svg viewBox="0 0 260 190" class="math-diagram-svg" role="img" aria-label="Polygon diagram">
      <polygon points="${pointString}" fill="none" stroke="currentColor" stroke-width="2.5"/>
      ${labels}
    </svg>
  `;
}

function getNamedShapePointString(shape) {
  const pointMap = {
    triangle: "108,34 56,150 202,146",
    square: "72,42 188,42 188,158 72,158",
    rectangle: "58,56 202,56 202,144 58,144",
    pentagon: "130,28 196,74 171,152 89,152 64,74",
    hexagon: "88,40 172,40 214,95 172,150 88,150 46,95",
    octagon: "94,28 166,28 212,74 212,146 166,192 94,192 48,146 48,74",
    trapezium: "82,52 176,52 224,146 46,146",
    parallelogram: "84,50 200,50 166,146 50,146",
    rhombus: "130,30 212,98 130,166 48,98",
    kite: "130,28 186,88 130,166 88,88"
  };
  return pointMap[shape] || pointMap.rectangle;
}

function scalePointString(points, centerX, centerY, scale, offsetX, offsetY) {
  return points.split(" ").map((pair) => {
    const [xText, yText] = pair.split(",");
    const x = Number(xText);
    const y = Number(yText);
    return `${trimNumber(((x - centerX) * scale) + offsetX)},${trimNumber(((y - centerY) * scale) + offsetY)}`;
  }).join(" ");
}

function renderNamedShapeDiagram(diagram) {
  const symmetryLineMap = {
    square: [
      { x1: 130, y1: 42, x2: 130, y2: 158 },
      { x1: 72, y1: 100, x2: 188, y2: 100 },
      { x1: 72, y1: 42, x2: 188, y2: 158 },
      { x1: 188, y1: 42, x2: 72, y2: 158 }
    ],
    rectangle: [
      { x1: 130, y1: 56, x2: 130, y2: 144 },
      { x1: 58, y1: 100, x2: 202, y2: 100 }
    ],
    rhombus: [
      { x1: 130, y1: 30, x2: 130, y2: 166 },
      { x1: 48, y1: 98, x2: 212, y2: 98 }
    ],
    kite: [
      { x1: 130, y1: 28, x2: 130, y2: 166 }
    ],
    pentagon: [
      { x1: 130, y1: 28, x2: 130, y2: 152 },
      { x1: 95, y1: 37, x2: 169, y2: 152 },
      { x1: 165, y1: 37, x2: 91, y2: 152 },
      { x1: 64, y1: 74, x2: 154, y2: 140 },
      { x1: 196, y1: 74, x2: 106, y2: 140 }
    ],
    hexagon: [
      { x1: 130, y1: 40, x2: 130, y2: 150 },
      { x1: 70, y1: 50, x2: 190, y2: 140 },
      { x1: 70, y1: 140, x2: 190, y2: 50 },
      { x1: 88, y1: 40, x2: 172, y2: 150 },
      { x1: 46, y1: 95, x2: 214, y2: 95 },
      { x1: 88, y1: 150, x2: 172, y2: 40 }
    ],
    octagon: [
      { x1: 130, y1: 28, x2: 130, y2: 192 },
      { x1: 48, y1: 110, x2: 212, y2: 110 },
      { x1: 60, y1: 40, x2: 200, y2: 180 },
      { x1: 200, y1: 40, x2: 60, y2: 180 },
      { x1: 94, y1: 28, x2: 166, y2: 192 },
      { x1: 48, y1: 74, x2: 212, y2: 146 },
      { x1: 48, y1: 146, x2: 212, y2: 74 },
      { x1: 166, y1: 28, x2: 94, y2: 192 }
    ]
  };
  const viewBox = diagram.shape === "octagon" ? "0 0 260 220" : "0 0 260 190";
  const points = getNamedShapePointString(diagram.shape);
  const symmetryLines = diagram.showSymmetry && symmetryLineMap[diagram.shape]
    ? symmetryLineMap[diagram.shape].map((line) => `<line x1="${line.x1}" y1="${line.y1}" x2="${line.x2}" y2="${line.y2}" class="symmetry-line"/>`).join("")
    : "";
  return `
    <svg viewBox="${viewBox}" class="math-diagram-svg" role="img" aria-label="${escapeHtml(diagram.shape)} diagram">
      <polygon points="${points}" fill="none" stroke="currentColor" stroke-width="2.5"/>
      ${symmetryLines}
    </svg>
  `;
}

function renderShapeSetDiagram(diagram) {
  const shapes = (diagram.shapes || []).slice(0, 3);
  const centers = shapes.length === 2 ? [82, 178] : [52, 130, 208];
  const polygons = shapes.map((shape, index) => {
    const pointString = scalePointString(getNamedShapePointString(shape), 130, 95, 0.36, centers[index], 70);
    return `<polygon points="${pointString}" fill="none" stroke="currentColor" stroke-width="2"/>`;
  }).join("");
  return `
    <svg viewBox="0 0 260 140" class="math-diagram-svg" role="img" aria-label="Shape set diagram">
      ${polygons}
    </svg>
  `;
}

function renderReflectionDemoDiagram(diagram) {
  const axisLine = diagram.axis === "horizontal"
    ? `<line x1="36" y1="90" x2="224" y2="90" stroke="currentColor" stroke-width="2" stroke-dasharray="7 5"/>`
    : `<line x1="130" y1="24" x2="130" y2="156" stroke="currentColor" stroke-width="2" stroke-dasharray="7 5"/>`;

  if (diagram.mode === "point-distance") {
    return `
      <svg viewBox="0 0 260 180" class="math-diagram-svg" role="img" aria-label="Reflection point diagram">
        ${axisLine}
        <circle cx="94" cy="90" r="4.5" fill="currentColor"/>
        <circle cx="166" cy="90" r="4.5" fill="currentColor"/>
        <line x1="94" y1="90" x2="130" y2="90" stroke="currentColor" stroke-width="1.3" stroke-dasharray="4 4"/>
        <line x1="130" y1="90" x2="166" y2="90" stroke="currentColor" stroke-width="1.3" stroke-dasharray="4 4"/>
        <text x="90" y="78" class="diagram-label" text-anchor="end">P</text>
        <text x="170" y="78" class="diagram-label">P'</text>
      </svg>
    `;
  }

  const leftPoints = scalePointString(getNamedShapePointString(diagram.shape), 130, 95, 0.42, 92, 92);
  const rightPoints = scalePointString(getNamedShapePointString(diagram.shape), 130, 95, 0.42, 168, 92);
  return `
    <svg viewBox="0 0 260 180" class="math-diagram-svg" role="img" aria-label="Reflection diagram">
      ${axisLine}
      <polygon points="${leftPoints}" fill="rgba(213,106,71,0.16)" stroke="currentColor" stroke-width="2.2"/>
      <polygon points="${rightPoints}" fill="rgba(123,163,154,0.12)" stroke="currentColor" stroke-width="2.2"/>
    </svg>
  `;
}

function renderFunctionMachineDiagram(diagram) {
  return `
    <svg viewBox="0 0 260 140" class="math-diagram-svg" role="img" aria-label="Function machine diagram">
      <rect x="84" y="36" width="92" height="68" rx="14" fill="rgba(213,106,71,0.08)" stroke="currentColor" stroke-width="2.2"/>
      <line x1="28" y1="70" x2="84" y2="70" stroke="currentColor" stroke-width="2"/>
      <polygon points="74,64 84,70 74,76" fill="currentColor"/>
      <line x1="176" y1="70" x2="232" y2="70" stroke="currentColor" stroke-width="2"/>
      <polygon points="222,64 232,70 222,76" fill="currentColor"/>
      <text x="56" y="60" class="diagram-label" text-anchor="middle">${escapeHtml(String(diagram.inputLabel))}</text>
      <text x="130" y="76" class="diagram-label" text-anchor="middle">${escapeHtml(String(diagram.ruleLabel))}</text>
      <text x="204" y="60" class="diagram-label" text-anchor="middle">${escapeHtml(String(diagram.outputLabel))}</text>
      <text x="56" y="96" class="diagram-small-label" text-anchor="middle">input</text>
      <text x="204" y="96" class="diagram-small-label" text-anchor="middle">output</text>
    </svg>
  `;
}

function renderProbabilityScaleDiagram(diagram) {
  const markers = (diagram.markers || []).map((marker) => {
    const position = trimNumber(34 + (Math.max(0, Math.min(1, marker.value)) * 192));
    return `
      <circle cx="${position}" cy="72" r="4.5" fill="currentColor"/>
      <text x="${position}" y="58" text-anchor="middle" class="diagram-small-label">${escapeHtml(marker.label || "")}</text>
    `;
  }).join("");
  return `
    <svg viewBox="0 0 260 120" class="math-diagram-svg" role="img" aria-label="${escapeHtml(diagram.caption || "Probability scale")}">
      <line x1="34" y1="72" x2="226" y2="72" stroke="currentColor" stroke-width="2"/>
      <line x1="34" y1="66" x2="34" y2="78" stroke="currentColor" stroke-width="1.5"/>
      <line x1="130" y1="66" x2="130" y2="78" stroke="currentColor" stroke-width="1.5"/>
      <line x1="226" y1="66" x2="226" y2="78" stroke="currentColor" stroke-width="1.5"/>
      <text x="34" y="96" text-anchor="middle" class="diagram-small-label">0</text>
      <text x="130" y="96" text-anchor="middle" class="diagram-small-label">0.5</text>
      <text x="226" y="96" text-anchor="middle" class="diagram-small-label">1</text>
      ${markers}
    </svg>
  `;
}

function renderFractionStripDiagram(diagram) {
  const parts = Math.max(1, Number(diagram.denominator) || 1);
  const shaded = clamp(Number(diagram.numerator) || 0, 0, parts);
  const width = 196;
  const x = 32;
  const y = 44;
  const height = 36;
  const segment = width / parts;
  const boxes = Array.from({ length: parts }, (_value, index) => {
    const fill = index < shaded ? "rgba(213,106,71,0.22)" : "rgba(255,255,255,0)";
    return `<rect x="${trimNumber(x + (index * segment))}" y="${y}" width="${trimNumber(segment)}" height="${height}" fill="${fill}" stroke="currentColor" stroke-width="1.4"/>`;
  }).join("");
  const topLabel = `${diagram.numerator}/${diagram.denominator} of ${diagram.amount}`;
  const bottomLabel = diagram.mode === "reverse"
    ? `part = ${diagram.answer}`
    : `whole = ${diagram.amount}`;
  return `
    <svg viewBox="0 0 260 130" class="math-diagram-svg" role="img" aria-label="Fraction of an amount diagram">
      <text x="130" y="24" text-anchor="middle" class="diagram-label">${escapeHtml(topLabel)}</text>
      ${boxes}
      <text x="130" y="102" text-anchor="middle" class="diagram-small-label">${escapeHtml(bottomLabel)}</text>
    </svg>
  `;
}

function renderValueListDiagram(diagram) {
  const values = (diagram.values || []).slice(0, 6);
  const count = Math.max(values.length, 1);
  const gap = 10;
  const boxWidth = Math.min(42, (196 - ((count - 1) * gap)) / count);
  const totalWidth = (count * boxWidth) + ((count - 1) * gap);
  const startX = 130 - (totalWidth / 2);
  const boxes = values.map((value, index) => {
    const x = startX + (index * (boxWidth + gap));
    return `
      <rect x="${trimNumber(x)}" y="44" width="${trimNumber(boxWidth)}" height="40" rx="8" fill="rgba(213,106,71,0.08)" stroke="currentColor" stroke-width="1.4"/>
      <text x="${trimNumber(x + (boxWidth / 2))}" y="69" text-anchor="middle" class="diagram-label">${escapeHtml(String(value))}</text>
    `;
  }).join("");
  return `
    <svg viewBox="0 0 260 125" class="math-diagram-svg" role="img" aria-label="${escapeHtml(diagram.heading || "Data set")}">
      <text x="130" y="24" text-anchor="middle" class="diagram-label">${escapeHtml(diagram.heading || "Data Set")}</text>
      ${boxes}
    </svg>
  `;
}

function renderCoordinateGridDiagram(diagram) {
  const min = -6;
  const max = 6;
  const cell = 18;
  const originX = 130;
  const originY = 110;
  const left = originX + (min * cell);
  const top = originY - (max * cell);
  const right = originX + (max * cell);
  const bottom = originY - (min * cell);
  const points = (diagram.points || []).map((point) => {
    return {
      x: originX + (point.x * cell),
      y: originY - (point.y * cell),
      label: point.label || ""
    };
  });
  const verticalLines = [];
  const horizontalLines = [];
  const axisLabels = [];
  const tickMarks = [];

  for (let value = min; value <= max; value += 1) {
    const x = originX + (value * cell);
    const y = originY - (value * cell);
    verticalLines.push(`<line x1="${x}" y1="${top}" x2="${x}" y2="${bottom}" stroke="currentColor" stroke-width="${value === 0 ? 1.8 : 0.5}" opacity="${value === 0 ? 1 : 0.22}"/>`);
    horizontalLines.push(`<line x1="${left}" y1="${y}" x2="${right}" y2="${y}" stroke="currentColor" stroke-width="${value === 0 ? 1.8 : 0.5}" opacity="${value === 0 ? 1 : 0.22}"/>`);
    if (value !== 0) {
      tickMarks.push(`<line x1="${x}" y1="${originY - 4}" x2="${x}" y2="${originY + 4}" stroke="currentColor" stroke-width="1.1"/>`);
      tickMarks.push(`<line x1="${originX - 4}" y1="${y}" x2="${originX + 4}" y2="${y}" stroke="currentColor" stroke-width="1.1"/>`);
      axisLabels.push(`<text x="${x}" y="${originY + 16}" class="diagram-label" text-anchor="middle">${value}</text>`);
      axisLabels.push(`<text x="${originX - 10}" y="${y + 4}" class="diagram-label" text-anchor="end">${value}</text>`);
    }
  }

  return `
    <svg viewBox="0 0 260 220" class="math-diagram-svg" role="img" aria-label="Coordinate grid">
      <rect x="${left}" y="${top}" width="${right - left}" height="${bottom - top}" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.4"/>
      ${verticalLines.join("")}
      ${horizontalLines.join("")}
      ${tickMarks.join("")}
      ${axisLabels.join("")}
      <text x="${right - 8}" y="${originY - 6}" class="diagram-label" text-anchor="end">x</text>
      <text x="${originX + 8}" y="${top + 14}" class="diagram-label">y</text>
      <text x="${originX - 8}" y="${originY + 16}" class="diagram-label" text-anchor="end">0</text>
      ${points.map((point) => `
        <circle cx="${point.x}" cy="${point.y}" r="4.2" fill="currentColor"/>
        ${point.label ? `<text x="${point.x + 7}" y="${point.y - 7}" class="diagram-label">${escapeHtml(point.label)}</text>` : ""}
      `).join("")}
    </svg>
  `;
}

function renderStemLeafDiagram(diagram) {
  const lines = (diagram.lines || []).map((line) => `
    <div class="stem-leaf-row">
      <span class="stem-leaf-stem">${escapeHtml(String(line.stem))}</span>
      <span class="stem-leaf-divider">|</span>
      <span class="stem-leaf-leaves">${escapeHtml(line.leaves.join(" "))}</span>
    </div>
  `).join("");
  const key = diagram.keyLabel ? `<div class="stem-leaf-key">${escapeHtml(diagram.keyLabel)}</div>` : "";
  return `
    <div class="stem-leaf-diagram" role="img" aria-label="Stem and leaf diagram">
      ${lines}
      ${key}
    </div>
  `;
}

function renderFrequencyTableDiagram(diagram) {
  const rows = (diagram.rows || []).map((row) => `
    <tr>
      <td>${escapeHtml(String(row.label))}</td>
      <td>${escapeHtml(String(row.value))}</td>
    </tr>
  `).join("");
  return `
    <div class="data-table-diagram" role="img" aria-label="${escapeHtml(diagram.heading || "Frequency table")}">
      <div class="data-table-title">${escapeHtml(diagram.heading || "Frequency Table")}</div>
      <table class="diagram-table">
        <thead>
          <tr>
            <th>Group</th>
            <th>Frequency</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

function renderDataTableDiagram(diagram) {
  const rows = (diagram.rows || []).map((row) => `
    <tr>
      <td>${escapeHtml(String(row.label))}</td>
      <td>${escapeHtml(String(row.value))}</td>
    </tr>
  `).join("");
  return `
    <div class="data-table-diagram" role="img" aria-label="${escapeHtml(diagram.heading || "Table")}">
      <div class="data-table-title">${escapeHtml(diagram.heading || "Table")}</div>
      <table class="diagram-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

function renderBarChartDiagram(diagram) {
  const rows = diagram.rows || [];
  const maxValue = Math.max(...rows.map((row) => Number(row.value) || 0), 1);
  const chartHeight = 112;
  const baseY = 142;
  const barWidth = rows.length <= 4 ? 28 : 22;
  const gap = 14;
  const totalWidth = (rows.length * barWidth) + ((rows.length - 1) * gap);
  const startX = (260 - totalWidth) / 2;
  const bars = rows.map((row, index) => {
    const value = Number(row.value) || 0;
    const height = (value / maxValue) * chartHeight;
    const x = startX + index * (barWidth + gap);
    const y = baseY - height;
    return `
      <rect x="${trimNumber(x)}" y="${trimNumber(y)}" width="${barWidth}" height="${trimNumber(height)}" rx="4" fill="rgba(213,106,71,0.78)" stroke="currentColor" stroke-width="1.2"/>
      <text x="${trimNumber(x + barWidth / 2)}" y="${trimNumber(y - 6)}" text-anchor="middle" class="diagram-label">${escapeHtml(String(row.value))}</text>
      <text x="${trimNumber(x + barWidth / 2)}" y="160" text-anchor="middle" class="diagram-small-label">${escapeHtml(String(row.label))}</text>
    `;
  }).join("");
  return `
    <div class="bar-chart-diagram" role="img" aria-label="${escapeHtml(diagram.heading || "Bar chart")}">
      <div class="data-table-title">${escapeHtml(diagram.heading || "Bar Chart")}</div>
      <svg viewBox="0 0 260 176" class="math-diagram-svg">
        <line x1="32" y1="${baseY}" x2="236" y2="${baseY}" stroke="currentColor" stroke-width="1.8"/>
        <line x1="32" y1="20" x2="32" y2="${baseY}" stroke="currentColor" stroke-width="1.8"/>
        ${bars}
      </svg>
    </div>
  `;
}

function renderCompoundAreaDiagram(diagram) {
  if (diagram.outerWidth) {
    const outerWidth = diagram.outerWidth;
    const outerHeight = diagram.outerHeight;
    const cutoutWidth = diagram.cutoutWidth;
    const cutoutHeight = diagram.cutoutHeight;
    const topShort = outerWidth - cutoutWidth;
    const rightLower = outerHeight - cutoutHeight;
    const scale = Math.min(150 / outerWidth, 110 / outerHeight);
    const x = 52;
    const y = 28;
    const w = outerWidth * scale;
    const h = outerHeight * scale;
    const cutW = cutoutWidth * scale;
    const cutH = cutoutHeight * scale;
    const path = [
      `M ${x} ${y + h}`,
      `L ${x} ${y}`,
      `L ${x + (topShort * scale)} ${y}`,
      `L ${x + (topShort * scale)} ${y + cutH}`,
      `L ${x + w} ${y + cutH}`,
      `L ${x + w} ${y + h}`,
      "Z"
    ].join(" ");
    const topShortLabel = diagram.missingSide === "top-short" ? "?" : `${topShort} cm`;
    const innerHorizontalLabel = diagram.missingSide === "cutout-width" ? "?" : `${cutoutWidth} cm`;
    const innerVerticalLabel = diagram.missingSide === "cutout-height" ? "?" : `${cutoutHeight} cm`;
    const rightLowerLabel = diagram.missingSide === "right-lower" ? "?" : `${rightLower} cm`;
    return `
      <svg viewBox="0 0 260 190" class="math-diagram-svg" role="img" aria-label="Compound area diagram">
        <path d="${path}" fill="none" stroke="currentColor" stroke-width="2.5"/>
        <line x1="${x}" y1="${y + h + 12}" x2="${x + w}" y2="${y + h + 12}" stroke="currentColor" stroke-width="1.2"/>
        <line x1="${x + w + 12}" y1="${y + cutH}" x2="${x + w + 12}" y2="${y + h}" stroke="currentColor" stroke-width="1.2"/>
        <text x="${trimNumber(x + (w / 2))}" y="${trimNumber(y + h + 28)}" class="diagram-label" text-anchor="middle">${outerWidth} cm</text>
        <text x="${trimNumber(x - 10)}" y="${trimNumber(y + (h / 2) + 4)}" class="diagram-label" text-anchor="end">${outerHeight} cm</text>
        <text x="${trimNumber(x + ((topShort * scale) / 2))}" y="${trimNumber(y - 8)}" class="diagram-label" text-anchor="middle">${topShortLabel}</text>
        <text x="${trimNumber(x + (topShort * scale) + (cutW / 2))}" y="${trimNumber(y + cutH - 8)}" class="diagram-label" text-anchor="middle">${innerHorizontalLabel}</text>
        <text x="${trimNumber(x + (topShort * scale) - 8)}" y="${trimNumber(y + (cutH / 2) + 4)}" class="diagram-label" text-anchor="end">${innerVerticalLabel}</text>
        <text x="${trimNumber(x + w + 18)}" y="${trimNumber(y + cutH + (rightLower * scale / 2) + 4)}" class="diagram-label" text-anchor="start">${rightLowerLabel}</text>
      </svg>
    `;
  }

  const parts = (diagram.parts || []).map((value) => Number(value)).filter((value) => !Number.isNaN(value));
  const labels = parts.map((value) => `${value} cm²`);

  if (parts.length <= 2) {
    return `
      <svg viewBox="0 0 260 190" class="math-diagram-svg" role="img" aria-label="Compound area diagram">
        <path d="M44 150 L44 88 L122 88 L122 48 L216 48 L216 150 Z" fill="none" stroke="currentColor" stroke-width="2.5"/>
        <line x1="122" y1="88" x2="122" y2="150" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 4"/>
        <text x="84" y="124" class="diagram-label" text-anchor="middle">${escapeHtml(labels[0] || "")}</text>
        <text x="169" y="102" class="diagram-label" text-anchor="middle">${escapeHtml(labels[1] || "")}</text>
      </svg>
    `;
  }

  return `
    <svg viewBox="0 0 260 190" class="math-diagram-svg" role="img" aria-label="Compound area diagram">
      <path d="M40 150 L40 96 L104 96 L104 56 L166 56 L166 96 L220 96 L220 150 Z" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="104" y1="96" x2="104" y2="150" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 4"/>
      <line x1="166" y1="96" x2="166" y2="150" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 4"/>
      <text x="72" y="126" class="diagram-label" text-anchor="middle">${escapeHtml(labels[0] || "")}</text>
      <text x="135" y="85" class="diagram-label" text-anchor="middle">${escapeHtml(labels[1] || "")}</text>
      <text x="193" y="126" class="diagram-label" text-anchor="middle">${escapeHtml(labels[2] || "")}</text>
    </svg>
  `;
}

function renderTriParaAreaDiagram(diagram) {
  if (diagram.shape === "parallelogram") {
    return `
      <svg viewBox="0 0 260 190" class="math-diagram-svg" role="img" aria-label="Parallelogram area diagram">
        <polygon points="72,140 188,140 216,66 100,66" fill="none" stroke="currentColor" stroke-width="2.5"/>
        <line x1="100" y1="66" x2="100" y2="140" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
        <line x1="72" y1="154" x2="188" y2="154" stroke="currentColor" stroke-width="1.2"/>
        <text x="130" y="174" class="diagram-label" text-anchor="middle">${escapeHtml(diagram.baseLabel)}</text>
        <text x="68" y="108" class="diagram-label" text-anchor="end">${escapeHtml(diagram.heightLabel)}</text>
      </svg>
    `;
  }

  return `
    <svg viewBox="0 0 260 190" class="math-diagram-svg" role="img" aria-label="Triangle area diagram">
      <polygon points="56,146 206,146 156,52" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <line x1="156" y1="52" x2="156" y2="146" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
      <line x1="56" y1="160" x2="206" y2="160" stroke="currentColor" stroke-width="1.2"/>
      <text x="131" y="184" class="diagram-label" text-anchor="middle">${escapeHtml(diagram.baseLabel)}</text>
      <text x="164" y="104" class="diagram-label">${escapeHtml(diagram.heightLabel)}</text>
    </svg>
  `;
}

function renderSymmetryCompleteDiagram(diagram) {
  const pointMap = {
    square: "72,42 188,42 188,158 72,158",
    rectangle: "58,56 202,56 202,144 58,144",
    rhombus: "130,30 212,98 130,166 48,98",
    kite: "130,28 186,88 130,166 88,88",
    hexagon: "88,40 172,40 214,95 172,150 88,150 46,95"
  };
  const points = pointMap[diagram.shape] || pointMap.rectangle;
  const clipId = `symmetry-clip-${diagram.shape}-${diagram.axis}-${diagram.shownSide}-${Math.random().toString(36).slice(2, 8)}`;
  const clipRect = diagram.axis === "vertical"
    ? (diagram.shownSide === "left"
      ? `<rect x="0" y="0" width="130" height="190"/>`
      : `<rect x="130" y="0" width="130" height="190"/>`)
    : (diagram.shownSide === "top"
      ? `<rect x="0" y="0" width="260" height="100"/>`
      : `<rect x="0" y="100" width="260" height="90"/>`);
  const mirrorLine = diagram.axis === "vertical"
    ? `<line x1="130" y1="24" x2="130" y2="168" stroke="currentColor" stroke-width="2" stroke-dasharray="7 5"/>`
    : `<line x1="36" y1="100" x2="224" y2="100" stroke="currentColor" stroke-width="2" stroke-dasharray="7 5"/>`;
  return `
    <svg viewBox="0 0 260 190" class="math-diagram-svg" role="img" aria-label="Symmetry completion diagram">
      <defs>
        <clipPath id="${clipId}">
          ${clipRect}
        </clipPath>
      </defs>
      ${mirrorLine}
      <polygon points="${points}" clip-path="url(#${clipId})" fill="rgba(213,106,71,0.16)" stroke="currentColor" stroke-width="2.5"/>
    </svg>
  `;
}

function renderSolidShapeDiagram(diagram) {
  const shapes = {
    cube: `
      <polygon points="82,64 150,64 150,132 82,132" fill="none" stroke="currentColor" stroke-width="2.4"/>
      <polygon points="110,36 178,36 178,104 110,104" fill="none" stroke="currentColor" stroke-width="2.4"/>
      <line x1="82" y1="64" x2="110" y2="36" stroke="currentColor" stroke-width="2.4"/>
      <line x1="150" y1="64" x2="178" y2="36" stroke="currentColor" stroke-width="2.4"/>
      <line x1="150" y1="132" x2="178" y2="104" stroke="currentColor" stroke-width="2.4"/>
      <line x1="82" y1="132" x2="110" y2="104" stroke="currentColor" stroke-width="2.4"/>
    `,
    cuboid: `
      <polygon points="68,74 154,74 154,126 68,126" fill="none" stroke="currentColor" stroke-width="2.4"/>
      <polygon points="104,46 190,46 190,98 104,98" fill="none" stroke="currentColor" stroke-width="2.4"/>
      <line x1="68" y1="74" x2="104" y2="46" stroke="currentColor" stroke-width="2.4"/>
      <line x1="154" y1="74" x2="190" y2="46" stroke="currentColor" stroke-width="2.4"/>
      <line x1="154" y1="126" x2="190" y2="98" stroke="currentColor" stroke-width="2.4"/>
      <line x1="68" y1="126" x2="104" y2="98" stroke="currentColor" stroke-width="2.4"/>
    `,
    "triangular prism": `
      <polygon points="74,120 114,58 154,120" fill="none" stroke="currentColor" stroke-width="2.4"/>
      <polygon points="118,106 158,44 198,106" fill="none" stroke="currentColor" stroke-width="2.4"/>
      <line x1="74" y1="120" x2="118" y2="106" stroke="currentColor" stroke-width="2.4"/>
      <line x1="114" y1="58" x2="158" y2="44" stroke="currentColor" stroke-width="2.4"/>
      <line x1="154" y1="120" x2="198" y2="106" stroke="currentColor" stroke-width="2.4"/>
    `,
    "square-based pyramid": `
      <polygon points="86,116 170,116 194,138 110,138" fill="none" stroke="currentColor" stroke-width="2.4"/>
      <line x1="140" y1="44" x2="86" y2="116" stroke="currentColor" stroke-width="2.4"/>
      <line x1="140" y1="44" x2="170" y2="116" stroke="currentColor" stroke-width="2.4"/>
      <line x1="140" y1="44" x2="194" y2="138" stroke="currentColor" stroke-width="2.4"/>
      <line x1="140" y1="44" x2="110" y2="138" stroke="currentColor" stroke-width="2.4"/>
    `,
    cylinder: `
      <ellipse cx="130" cy="56" rx="44" ry="16" fill="none" stroke="currentColor" stroke-width="2.4"/>
      <line x1="86" y1="56" x2="86" y2="136" stroke="currentColor" stroke-width="2.4"/>
      <line x1="174" y1="56" x2="174" y2="136" stroke="currentColor" stroke-width="2.4"/>
      <ellipse cx="130" cy="136" rx="44" ry="16" fill="none" stroke="currentColor" stroke-width="2.4"/>
    `,
    "hexagonal prism": `
      <polygon points="84,76 104,50 140,50 160,76 140,102 104,102" fill="none" stroke="currentColor" stroke-width="2.4"/>
      <polygon points="120,58 140,32 176,32 196,58 176,84 140,84" fill="none" stroke="currentColor" stroke-width="2.4"/>
      <line x1="84" y1="76" x2="120" y2="58" stroke="currentColor" stroke-width="2.4"/>
      <line x1="104" y1="50" x2="140" y2="32" stroke="currentColor" stroke-width="2.4"/>
      <line x1="140" y1="50" x2="176" y2="32" stroke="currentColor" stroke-width="2.4"/>
      <line x1="160" y1="76" x2="196" y2="58" stroke="currentColor" stroke-width="2.4"/>
      <line x1="140" y1="102" x2="176" y2="84" stroke="currentColor" stroke-width="2.4"/>
      <line x1="104" y1="102" x2="140" y2="84" stroke="currentColor" stroke-width="2.4"/>
    `
  };
  return `
    <svg viewBox="0 0 260 180" class="math-diagram-svg" role="img" aria-label="${escapeHtml(diagram.shape)} solid">
      ${shapes[diagram.shape] || shapes.cube}
    </svg>
  `;
}

function renderNetShapeDiagram(diagram) {
  const nets = {
    cube: `
      <rect x="94" y="46" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2"/>
      <rect x="126" y="46" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2"/>
      <rect x="158" y="46" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2"/>
      <rect x="126" y="14" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2"/>
      <rect x="126" y="78" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2"/>
      <rect x="126" y="110" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2"/>
    `,
    cuboid: `
      <rect x="84" y="52" width="42" height="28" fill="none" stroke="currentColor" stroke-width="2"/>
      <rect x="126" y="52" width="56" height="28" fill="none" stroke="currentColor" stroke-width="2"/>
      <rect x="182" y="52" width="42" height="28" fill="none" stroke="currentColor" stroke-width="2"/>
      <rect x="126" y="24" width="56" height="28" fill="none" stroke="currentColor" stroke-width="2"/>
      <rect x="126" y="80" width="56" height="28" fill="none" stroke="currentColor" stroke-width="2"/>
      <rect x="126" y="108" width="56" height="28" fill="none" stroke="currentColor" stroke-width="2"/>
    `,
    "triangular prism": `
      <rect x="66" y="64" width="42" height="38" fill="none" stroke="currentColor" stroke-width="2"/>
      <rect x="108" y="64" width="42" height="38" fill="none" stroke="currentColor" stroke-width="2"/>
      <rect x="150" y="64" width="42" height="38" fill="none" stroke="currentColor" stroke-width="2"/>
      <polygon points="108,64 129,34 150,64" fill="none" stroke="currentColor" stroke-width="2"/>
      <polygon points="108,102 129,132 150,102" fill="none" stroke="currentColor" stroke-width="2"/>
    `,
    "square-based pyramid": `
      <rect x="114" y="66" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2"/>
      <polygon points="114,66 130,34 146,66" fill="none" stroke="currentColor" stroke-width="2"/>
      <polygon points="146,66 178,82 146,98" fill="none" stroke="currentColor" stroke-width="2"/>
      <polygon points="114,98 130,130 146,98" fill="none" stroke="currentColor" stroke-width="2"/>
      <polygon points="114,66 82,82 114,98" fill="none" stroke="currentColor" stroke-width="2"/>
    `,
    cylinder: `
      <rect x="92" y="64" width="76" height="42" rx="4" fill="none" stroke="currentColor" stroke-width="2"/>
      <circle cx="78" cy="85" r="14" fill="none" stroke="currentColor" stroke-width="2"/>
      <circle cx="182" cy="85" r="14" fill="none" stroke="currentColor" stroke-width="2"/>
    `,
    "hexagonal prism": `
      <polygon points="56,83 68,64 92,64 104,83 92,102 68,102" fill="none" stroke="currentColor" stroke-width="2"/>
      <rect x="104" y="64" width="20" height="38" fill="none" stroke="currentColor" stroke-width="2"/>
      <rect x="124" y="64" width="20" height="38" fill="none" stroke="currentColor" stroke-width="2"/>
      <rect x="144" y="64" width="20" height="38" fill="none" stroke="currentColor" stroke-width="2"/>
      <rect x="164" y="64" width="20" height="38" fill="none" stroke="currentColor" stroke-width="2"/>
      <rect x="184" y="64" width="20" height="38" fill="none" stroke="currentColor" stroke-width="2"/>
      <rect x="204" y="64" width="20" height="38" fill="none" stroke="currentColor" stroke-width="2"/>
      <polygon points="224,83 236,64 260,64 272,83 260,102 236,102" transform="translate(-20 0)" fill="none" stroke="currentColor" stroke-width="2"/>
    `
  };
  return `
    <svg viewBox="0 0 260 160" class="math-diagram-svg" role="img" aria-label="${escapeHtml(diagram.shape)} net">
      ${nets[diagram.shape] || nets.cube}
    </svg>
  `;
}

function renderRatioGroupsDiagram(diagram) {
  const leftItems = renderRatioItems(diagram.leftCount, diagram.leftStyle, 18, 122);
  const rightItems = renderRatioItems(diagram.rightCount, diagram.rightStyle, 138, 242);

  return `
    <svg viewBox="0 0 260 180" class="math-diagram-svg" role="img" aria-label="Ratio groups diagram">
      <rect x="18" y="18" width="104" height="144" rx="14" fill="rgba(255,255,255,0.75)" stroke="currentColor" stroke-width="1.2" opacity="0.45"/>
      <rect x="138" y="18" width="104" height="144" rx="14" fill="rgba(255,255,255,0.75)" stroke="currentColor" stroke-width="1.2" opacity="0.45"/>
      <text x="70" y="38" text-anchor="middle" class="diagram-label">${escapeHtml(capitalize(diagram.leftLabel))}</text>
      <text x="190" y="38" text-anchor="middle" class="diagram-label">${escapeHtml(capitalize(diagram.rightLabel))}</text>
      ${leftItems}
      ${rightItems}
    </svg>
  `;
}

function renderRatioItems(count, style, panelLeft, panelRight) {
  const columns = count <= 4 ? 2 : count <= 8 ? 3 : 4;
  const rows = Math.ceil(count / columns);
  const cellX = columns === 4 ? 18 : columns === 3 ? 21 : 24;
  const cellY = rows >= 4 ? 24 : 28;
  const margin = 14;
  const availableWidth = panelRight - panelLeft - (margin * 2);
  const clusterWidth = (columns - 1) * cellX;
  const startX = trimNumber(panelLeft + margin + Math.max(0, (availableWidth - clusterWidth) / 2));
  const startY = 64;
  const items = [];

  for (let index = 0; index < count; index += 1) {
    const column = index % columns;
    const row = Math.floor(index / columns);
    const cx = trimNumber(startX + (column * cellX));
    const cy = trimNumber(startY + (row * cellY));
    items.push(renderRatioShape(style, cx, cy));
  }

  return items.join("");
}

function renderRatioShape(style, cx, cy) {
  const fill = style.fill;
  const stroke = style.stroke;

  if (style.shape === "square") {
    return `<rect x="${cx - 7}" y="${cy - 7}" width="14" height="14" rx="2" fill="${fill}" stroke="${stroke}" stroke-width="1.8"/>`;
  }

  if (style.shape === "chair") {
    return `
      <path d="M ${cx - 6} ${cy - 2} L ${cx + 3} ${cy - 2} L ${cx + 3} ${cy + 3} L ${cx - 1} ${cy + 3} L ${cx - 1} ${cy + 9} M ${cx - 6} ${cy - 2} L ${cx - 6} ${cy + 9} M ${cx + 3} ${cy + 3} L ${cx + 8} ${cy + 3} L ${cx + 8} ${cy + 9}" fill="none" stroke="${stroke}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    `;
  }

  if (style.shape === "table") {
    return `
      <rect x="${cx - 8}" y="${cy - 5}" width="16" height="6" rx="1.5" fill="${fill}" stroke="${stroke}" stroke-width="1.6"/>
      <line x1="${cx - 5}" y1="${cy + 1}" x2="${cx - 5}" y2="${cy + 9}" stroke="${stroke}" stroke-width="1.6" stroke-linecap="round"/>
      <line x1="${cx + 5}" y1="${cy + 1}" x2="${cx + 5}" y2="${cy + 9}" stroke="${stroke}" stroke-width="1.6" stroke-linecap="round"/>
    `;
  }

  if (style.shape === "pencil") {
    return `
      <rect x="${cx - 8}" y="${cy - 3}" width="12" height="6" rx="1.5" fill="${fill}" stroke="${stroke}" stroke-width="1.6"/>
      <polygon points="${cx + 4},${cy - 3} ${cx + 10},${cy} ${cx + 4},${cy + 3}" fill="#f4d8b8" stroke="${stroke}" stroke-width="1.4"/>
      <polygon points="${cx + 8},${cy - 1.5} ${cx + 10},${cy} ${cx + 8},${cy + 1.5}" fill="${stroke}" stroke="${stroke}" stroke-width="1"/>
    `;
  }

  if (style.shape === "pen") {
    return `<rect x="${cx - 9}" y="${cy - 5}" width="18" height="10" rx="5" fill="${fill}" stroke="${stroke}" stroke-width="1.8"/>`;
  }

  if (style.shape === "marker") {
    return `
      <rect x="${cx - 8}" y="${cy - 4}" width="16" height="8" rx="2" fill="${fill}" stroke="${stroke}" stroke-width="1.6"/>
      <rect x="${cx + 4}" y="${cy - 4}" width="4" height="8" rx="1" fill="#f4efe6" stroke="${stroke}" stroke-width="1.2"/>
    `;
  }

  if (style.shape === "ruler") {
    return `
      <rect x="${cx - 10}" y="${cy - 4}" width="20" height="8" rx="1.5" fill="${fill}" stroke="${stroke}" stroke-width="1.4"/>
      <line x1="${cx - 6}" y1="${cy - 4}" x2="${cx - 6}" y2="${cy + 1}" stroke="${stroke}" stroke-width="1"/>
      <line x1="${cx - 2}" y1="${cy - 4}" x2="${cx - 2}" y2="${cy}" stroke="${stroke}" stroke-width="1"/>
      <line x1="${cx + 2}" y1="${cy - 4}" x2="${cx + 2}" y2="${cy + 1}" stroke="${stroke}" stroke-width="1"/>
      <line x1="${cx + 6}" y1="${cy - 4}" x2="${cx + 6}" y2="${cy}" stroke="${stroke}" stroke-width="1"/>
    `;
  }

  if (style.shape === "triangle") {
    return `<polygon points="${cx},${cy - 8} ${cx + 8},${cy + 7} ${cx - 8},${cy + 7}" fill="${fill}" stroke="${stroke}" stroke-width="1.8"/>`;
  }

  if (style.shape === "cat") {
    return `
      <circle cx="${cx}" cy="${cy + 1}" r="6.6" fill="${fill}" stroke="${stroke}" stroke-width="1.6"/>
      <polygon points="${cx - 5},${cy - 3} ${cx - 2},${cy - 9} ${cx + 1},${cy - 2}" fill="${fill}" stroke="${stroke}" stroke-width="1.4"/>
      <polygon points="${cx + 5},${cy - 3} ${cx + 2},${cy - 9} ${cx - 1},${cy - 2}" fill="${fill}" stroke="${stroke}" stroke-width="1.4"/>
    `;
  }

  if (style.shape === "dog") {
    return `
      <circle cx="${cx}" cy="${cy + 1}" r="6.6" fill="${fill}" stroke="${stroke}" stroke-width="1.6"/>
      <ellipse cx="${cx - 6}" cy="${cy - 1}" rx="2.8" ry="5" fill="${fill}" stroke="${stroke}" stroke-width="1.2"/>
      <ellipse cx="${cx + 6}" cy="${cy - 1}" rx="2.8" ry="5" fill="${fill}" stroke="${stroke}" stroke-width="1.2"/>
    `;
  }

  if (style.shape === "person") {
    return `
      <circle cx="${cx}" cy="${cy - 6}" r="4.2" fill="${fill}" stroke="${stroke}" stroke-width="1.6"/>
      <path d="M ${cx} ${cy - 1} L ${cx} ${cy + 9} M ${cx - 6} ${cy + 3} L ${cx + 6} ${cy + 3} M ${cx - 5} ${cy + 14} L ${cx} ${cy + 9} L ${cx + 5} ${cy + 14}" fill="none" stroke="${stroke}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    `;
  }

  if (style.shape === "ring") {
    return `<circle cx="${cx}" cy="${cy}" r="7" fill="${fill}" stroke="${stroke}" stroke-width="1.8"/><circle cx="${cx}" cy="${cy}" r="2.8" fill="white" opacity="0.95"/>`;
  }

  return `<circle cx="${cx}" cy="${cy}" r="7" fill="${fill}" stroke="${stroke}" stroke-width="1.8"/>`;
}

function renderComparisonDiagram(diagram) {
  return `
    <div class="comparison-diagram-grid">
      <div class="comparison-diagram-card">
        <span class="comparison-diagram-title">${escapeHtml(diagram.leftTitle)}</span>
        ${renderDiagramMarkup(diagram.left)}
      </div>
      <div class="comparison-diagram-card">
        <span class="comparison-diagram-title">${escapeHtml(diagram.rightTitle)}</span>
        ${renderDiagramMarkup(diagram.right)}
      </div>
    </div>
  `;
}

function renderAngleLineDiagram(diagram) {
  const leftAngle = diagram.leftAngle ?? deriveLineLeftAngle(diagram.leftLabel, diagram.rightLabel);
  const vertex = { x: 120, y: 110 };
  const leftRay = { x: 28, y: 110 };
  const rightRay = { x: 212, y: 110 };
  const slantedAngle = 180 + leftAngle;
  const slanted = pointFromAngle(vertex, 68, slantedAngle);
  const leftSectorMid = midpoint(leftRay, slanted);
  const rightSectorMid = midpoint(slanted, rightRay);
  const leftLabelPoint = { x: trimNumber(leftSectorMid.x + 8), y: trimNumber(leftSectorMid.y - 10) };
  const rightLabelPoint = { x: trimNumber(rightSectorMid.x - 8), y: trimNumber(rightSectorMid.y - 10) };
  const leftArc = describeTopArc(vertex, 30, 180, slantedAngle);
  const rightArc = describeTopArc(vertex, 30, slantedAngle, 360);
  return `
    <svg viewBox="0 0 240 150" class="math-diagram-svg" role="img" aria-label="Angles on a line diagram">
      <line x1="${leftRay.x}" y1="${leftRay.y}" x2="${rightRay.x}" y2="${rightRay.y}" stroke="currentColor" stroke-width="2.5"/>
      <line x1="${vertex.x}" y1="${vertex.y}" x2="${slanted.x}" y2="${slanted.y}" stroke="currentColor" stroke-width="2.5"/>
      <path d="${leftArc}" fill="none" stroke="currentColor" stroke-width="1.6"/>
      <path d="${rightArc}" fill="none" stroke="currentColor" stroke-width="1.6"/>
      <text x="${leftLabelPoint.x}" y="${leftLabelPoint.y}" text-anchor="middle" class="diagram-label">${escapeHtml(diagram.leftLabel)}</text>
      <text x="${rightLabelPoint.x}" y="${rightLabelPoint.y}" text-anchor="middle" class="diagram-label">${escapeHtml(diagram.rightLabel)}</text>
    </svg>
  `;
}

function renderAnglePointDiagram(diagram) {
  const values = derivePointAngles(diagram.labels);
  const vertex = { x: 120, y: 88 };
  const start = -90;
  const boundaries = [start];
  values.forEach((value) => boundaries.push(boundaries[boundaries.length - 1] + value));
  const rays = boundaries.map((angle) => pointFromAngle(vertex, 72, angle));
  const arcs = values.map((value, index) => describeArc(vertex, 28 + (index % 2) * 8, boundaries[index], boundaries[index + 1]));
  const labels = values.map((value, index) => {
    const mid = boundaries[index] + (value / 2);
    const point = pointFromAngle(vertex, 44 + ((index % 2) * 10), mid);
    return { x: point.x, y: point.y, value: diagram.labels[index] };
  });

  return `
    <svg viewBox="0 0 240 170" class="math-diagram-svg" role="img" aria-label="Angles around a point diagram">
      ${rays.map((ray) => `<line x1="${vertex.x}" y1="${vertex.y}" x2="${ray.x}" y2="${ray.y}" stroke="currentColor" stroke-width="2.5"/>`).join("")}
      ${arcs.map((arc) => `<path d="${arc}" fill="none" stroke="currentColor" stroke-width="1.4"/>`).join("")}
      <circle cx="${vertex.x}" cy="${vertex.y}" r="3.5" fill="currentColor"/>
      ${labels.map((label) => `<text x="${label.x}" y="${label.y}" text-anchor="middle" class="diagram-label">${escapeHtml(label.value)}</text>`).join("")}
    </svg>
  `;
}

function renderAngleVerticalDiagram(diagram) {
  const topAngle = diagram.topAngle ?? deriveVerticalTopAngle(diagram.topLabel, diagram.rightLabel);
  const vertex = { x: 120, y: 88 };
  const diagonalA = pointFromAngle(vertex, 88, 180 - (topAngle / 2));
  const diagonalB = pointFromAngle(vertex, 88, 360 - (topAngle / 2));
  const diagonalC = pointFromAngle(vertex, 88, 0 + (topAngle / 2));
  const diagonalD = pointFromAngle(vertex, 88, 180 + (topAngle / 2));
  const topArc = describeArc(vertex, 28, 180 - (topAngle / 2), 0 + (topAngle / 2));
  const rightArc = describeArc(vertex, 28, 0 + (topAngle / 2), 180 + (topAngle / 2));
  const topLabelPoint = pointFromAngle(vertex, 44, 270);
  const bottomLabelPoint = pointFromAngle(vertex, 44, 90);
  const rightLabelPoint = pointFromAngle(vertex, 44, 0);
  const leftLabelPoint = pointFromAngle(vertex, 44, 180);
  const bottomLabel = diagram.bottomLabel && diagram.bottomLabel !== "" ? diagram.bottomLabel : "";
  const rightLabel = diagram.rightLabel && diagram.rightLabel !== "" ? diagram.rightLabel : "";
  const leftLabel = diagram.leftLabel && diagram.leftLabel !== "" ? diagram.leftLabel : "";
  return `
    <svg viewBox="0 0 240 170" class="math-diagram-svg" role="img" aria-label="Vertically opposite angles diagram">
      <line x1="${diagonalA.x}" y1="${diagonalA.y}" x2="${diagonalB.x}" y2="${diagonalB.y}" stroke="currentColor" stroke-width="2.5"/>
      <line x1="${diagonalC.x}" y1="${diagonalC.y}" x2="${diagonalD.x}" y2="${diagonalD.y}" stroke="currentColor" stroke-width="2.5"/>
      <path d="${topArc}" fill="none" stroke="currentColor" stroke-width="1.6"/>
      <path d="${rightArc}" fill="none" stroke="currentColor" stroke-width="1.6"/>
      <circle cx="${vertex.x}" cy="${vertex.y}" r="3.5" fill="currentColor"/>
      <text x="${topLabelPoint.x}" y="${topLabelPoint.y}" text-anchor="middle" class="diagram-label">${escapeHtml(diagram.topLabel)}</text>
      ${bottomLabel ? `<text x="${bottomLabelPoint.x}" y="${bottomLabelPoint.y}" text-anchor="middle" class="diagram-label">${escapeHtml(bottomLabel)}</text>` : ""}
      ${rightLabel ? `<text x="${rightLabelPoint.x}" y="${rightLabelPoint.y}" text-anchor="middle" class="diagram-label">${escapeHtml(rightLabel)}</text>` : ""}
      ${leftLabel ? `<text x="${leftLabelPoint.x}" y="${leftLabelPoint.y}" text-anchor="middle" class="diagram-label">${escapeHtml(leftLabel)}</text>` : ""}
    </svg>
  `;
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function trimNumber(value) {
  return Number.isInteger(value) ? value : Number(value.toFixed(2));
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function negativeNonZero([min, max]) {
  let value = 0;

  while (value === 0 || value > -2) {
    value = randomInt(min, max);
  }

  return value;
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

window.MDM_API = {
  topicCatalog,
  difficultySettings,
  defaultTopic,
  getTopicYearTags,
  getAvailableYearOptions,
  getFilteredTopicEntries,
  groupTopicEntriesBySubject,
  generators,
  reasoningGenerators,
  buildBulkQuestionSet,
  buildReasoningSet,
  renderMathMarkup,
  renderDiagramMarkup,
  getQuestionKey,
  getQuestionPromptText,
  capitalize
};

initializeWorksheetPage();
