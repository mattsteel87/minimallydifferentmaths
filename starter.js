const starterApi = window.MDM_API;

if (!starterApi) {
  throw new Error("MDM_API is not available.");
}

const starterForm = document.getElementById("starter-form");
const starterTopicRows = document.getElementById("starter-topic-rows");
const starterYearFilter = document.getElementById("starter-year-filter");
const starterResultsTitle = document.getElementById("starter-results-title");
const starterSummary = document.getElementById("starter-summary");
const starterGrid = document.getElementById("starter-grid");
const starterSheetTitle = document.getElementById("starter-sheet-title");
const starterSheetMeta = document.getElementById("starter-sheet-meta");
const starterRegenerateButton = document.getElementById("starter-regenerate-button");
const starterPrintButton = document.getElementById("starter-print-button");
const starterAnswerToggle = document.getElementById("toggle-starter-answers");
const starterAnswerSection = document.getElementById("starter-answer-section");
const starterAnswerList = document.getElementById("starter-answer-list");

const starterState = {
  generationCounter: 0
};

const difficultyRows = ["easy", "medium", "hard"];

buildStarterYearFilter();
buildStarterTopicRows();

starterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  starterState.generationCounter += 1;
  renderStarterGrid();
});

starterRegenerateButton.addEventListener("click", () => {
  starterState.generationCounter += 1;
  renderStarterGrid();
});

starterPrintButton.addEventListener("click", () => {
  window.print();
});

starterAnswerToggle.addEventListener("change", () => {
  starterAnswerSection.hidden = !starterAnswerToggle.checked;
});

starterYearFilter.addEventListener("change", () => {
  buildStarterTopicRows();
  starterState.generationCounter += 1;
  renderStarterGrid();
});

renderStarterGrid();

function buildStarterYearFilter() {
  const options = starterApi.getAvailableYearOptions();
  starterYearFilter.innerHTML = "";
  options.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    starterYearFilter.appendChild(option);
  });
  starterYearFilter.value = "All years";
}

function getStarterTopicGroups() {
  return groupStarterTopicsBySubject(starterApi.getFilteredTopicEntries(starterYearFilter.value));
}

function getStarterOrderedTopics() {
  return Object.values(getStarterTopicGroups()).flat();
}

function buildStarterTopicRows() {
  const starterTopicGroups = getStarterTopicGroups();
  const starterOrderedTopics = getStarterOrderedTopics();
  starterTopicRows.innerHTML = "";

  if (!starterOrderedTopics.length) {
    starterTopicRows.innerHTML = `<p class="assessment-summary-empty">No topics available for ${starterYearFilter.value}.</p>`;
    return;
  }

  Object.entries(starterTopicGroups).forEach(([subject, topics]) => {
    const group = document.createElement("section");
    group.className = "starter-topic-group";

    const heading = document.createElement("h3");
    heading.className = "starter-topic-group-title";
    heading.textContent = subject;
    group.appendChild(heading);

    const options = document.createElement("div");
    options.className = "starter-topic-options";

    topics.forEach((topic, topicIndex) => {
      const option = document.createElement("label");
      option.className = "starter-topic-option";
      option.innerHTML = `
        <input type="checkbox" value="${topic.id}" ${starterOrderedTopics[topicIndex] && starterOrderedTopics[topicIndex].id === topic.id && starterOrderedTopics.indexOf(topic) < 3 ? "checked" : ""}>
        <span>${topic.label}</span>
      `;
      options.appendChild(option);
    });

    group.appendChild(options);
    starterTopicRows.appendChild(group);
  });

  const starterCheckboxes = [...starterTopicRows.querySelectorAll("input[type='checkbox']")];
  starterCheckboxes.forEach((checkbox, index) => {
    checkbox.checked = index < 3;
    checkbox.addEventListener("change", handleStarterTopicSelection);
  });

  updateStarterTopicAvailability();
}

function renderStarterGrid() {
  const selections = getSelectedStarterTopics();

  if (!selections.length) {
    starterResultsTitle.textContent = "9 Question Starter";
    starterSummary.innerHTML = `<p class="assessment-summary-empty">Select at least one topic to generate the starter grid.</p>`;
    starterGrid.innerHTML = "";
    starterAnswerList.innerHTML = "";
    starterSheetTitle.textContent = "Starter Questions";
    starterSheetMeta.textContent = "Easy to hard across 9 questions";
    starterAnswerSection.hidden = !starterAnswerToggle.checked;
    return;
  }

  const starter = buildStarter(selections);
  starterResultsTitle.textContent = `${starter.topicLabels.join(" + ")} - Starter`;
  starterSummary.innerHTML = `
    <div class="assessment-summary-grid">
      <div class="assessment-summary-card">
        <span class="assessment-summary-label">Topics</span>
        <strong class="assessment-summary-value">${starter.topicLabels.length}</strong>
      </div>
      <div class="assessment-summary-card">
        <span class="assessment-summary-label">Easy</span>
        <strong class="assessment-summary-value">3</strong>
      </div>
      <div class="assessment-summary-card">
        <span class="assessment-summary-label">Medium</span>
        <strong class="assessment-summary-value">3</strong>
      </div>
      <div class="assessment-summary-card">
        <span class="assessment-summary-label">Hard</span>
        <strong class="assessment-summary-value">3</strong>
      </div>
    </div>
  `;

  starterSheetTitle.textContent = "Starter Questions";
  starterSheetMeta.textContent = starter.topicLabels.join(" | ");

  starterGrid.innerHTML = "";
  starterAnswerList.innerHTML = "";

  starter.questions.forEach((item) => {
    starterGrid.appendChild(buildStarterCard(item));
    starterAnswerList.appendChild(buildStarterAnswerItem(item));
  });

  starterAnswerSection.hidden = !starterAnswerToggle.checked;
}

function getSelectedStarterTopics() {
  const selections = [];
  const checkedTopics = [...starterTopicRows.querySelectorAll("input[type='checkbox']:checked")];

  checkedTopics.forEach((checkbox) => {
    const topicId = checkbox.value;
    if (starterApi.topicCatalog[topicId]) {
      selections.push(starterApi.topicCatalog[topicId]);
    }
  });

  return selections.slice(0, 5);
}

function buildStarter(selections) {
  const topicLabels = selections.map((topic) => topic.label);
  const questions = [];
  const used = new Set();
  const topicPlan = buildStarterTopicPlan(selections, 9);

  topicPlan.forEach((topic, slotIndex) => {
    const difficultyKey = difficultyRows[Math.floor(slotIndex / 3)];
    const occurrenceIndex = topicPlan
      .slice(0, slotIndex)
      .filter((plannedTopic) => plannedTopic.id === topic.id).length;
    const fluencyVariants = getStarterVariants(topic);
    const variant = fluencyVariants[(occurrenceIndex + slotIndex) % fluencyVariants.length];
    const generator = starterApi.generators[topic.generatorType];
    const settings = {
      ...starterApi.difficultySettings[difficultyKey],
      generationCounter: starterState.generationCounter + slotIndex + occurrenceIndex
    };
    const worksheet = generator(topic, variant, settings, difficultyKey);
    const rotatedPool = rotateStarterPool(worksheet.questions, slotIndex + starterState.generationCounter);
    const selectedItem = rotatedPool.find((item) => {
      const key = starterApi.getQuestionKey(item);
      const prompt = starterApi.getQuestionPromptText(item);
      return !used.has(key) && !used.has(prompt);
    }) || rotatedPool[0];

    if (!selectedItem) {
      return;
    }

    used.add(starterApi.getQuestionKey(selectedItem));
    used.add(starterApi.getQuestionPromptText(selectedItem));
    questions.push({
      number: questions.length + 1,
      ...selectedItem,
      topicLabel: topic.label,
      difficultyKey,
      variantLabel: variant.label
    });
  });

  return { topicLabels, questions };
}

function getStarterVariants(topic) {
  const fluencyVariants = (topic.variants || []).filter((variant) => {
    return !/(error|true-false|compare|missing|reflection|describe|which-measure|reasoning|complete-the-shape|compare-representations|match)/.test(variant.id);
  });

  return fluencyVariants.length ? fluencyVariants : topic.variants;
}

function rotateStarterPool(pool, offset) {
  if (!pool.length) {
    return [];
  }

  const start = offset % pool.length;
  return [...pool.slice(start), ...pool.slice(0, start)];
}

function buildStarterCard(item) {
  const card = document.createElement("article");
  card.className = `starter-card starter-card-${item.difficultyKey}`;

  const header = document.createElement("div");
  header.className = "starter-card-header";
  header.innerHTML = `
    <span class="starter-card-topic">${item.number}. ${item.topicLabel}</span>
  `;
  card.appendChild(header);

  const prompt = document.createElement("div");
  prompt.className = "starter-card-question";
  prompt.innerHTML = starterApi.renderMathMarkup(item.question);
  card.appendChild(prompt);

  if (item.diagram) {
    const diagram = document.createElement("div");
    diagram.className = "starter-card-diagram worksheet-diagram";
    diagram.innerHTML = starterApi.renderDiagramMarkup(item.diagram);
    card.appendChild(diagram);
  }

  return card;
}

function buildStarterAnswerItem(item) {
  const entry = document.createElement("li");
  entry.innerHTML = `${item.number}. <span class="answer-text">${starterApi.renderMathMarkup(item.answer)}</span>`;
  return entry;
}

function groupStarterTopicsBySubject(topicCatalog) {
  return topicCatalog.reduce((groups, [id, topic]) => {
    if (!groups[topic.subject]) {
      groups[topic.subject] = [];
    }

    groups[topic.subject].push({ id, label: topic.label, topic });
    return groups;
  }, {});
}

function buildStarterTopicPlan(selections, totalQuestions) {
  const plan = [];
  for (let index = 0; index < totalQuestions; index += 1) {
    plan.push(selections[index % selections.length]);
  }

  return plan;
}

function handleStarterTopicSelection(event) {
  const checkedTopics = starterTopicRows.querySelectorAll("input[type='checkbox']:checked");
  if (checkedTopics.length > 5) {
    event.target.checked = false;
    return;
  }

  updateStarterTopicAvailability();
}

function updateStarterTopicAvailability() {
  const checkboxes = [...starterTopicRows.querySelectorAll("input[type='checkbox']")];
  const checkedCount = checkboxes.filter((checkbox) => checkbox.checked).length;

  checkboxes.forEach((checkbox) => {
    checkbox.disabled = checkedCount >= 5 && !checkbox.checked;
  });
}
