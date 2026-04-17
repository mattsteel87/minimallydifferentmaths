const numberGameForm = document.getElementById("number-game-form");
const largeCountSelect = document.getElementById("large-count");
const timerSecondsSelect = document.getElementById("timer-seconds");
const generateRoundButton = document.getElementById("number-game-generate-button");
const startTimerButton = document.getElementById("number-game-start-button");
const regenerateRoundButton = document.getElementById("number-game-regenerate-button");
const showSolutionToggle = document.getElementById("toggle-number-game-solution");
const timerDisplay = document.getElementById("number-game-timer");
const targetDisplay = document.getElementById("number-game-target");
const numbersDisplay = document.getElementById("number-game-numbers");
const resultsTitle = document.getElementById("number-game-results-title");
const solutionPanel = document.getElementById("number-game-solution-panel");
const solutionText = document.getElementById("number-game-solution-text");
const bestTotal = document.getElementById("number-game-best-total");
const distanceText = document.getElementById("number-game-distance");

const LARGE_NUMBERS = [25, 50, 75, 100];
const SMALL_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numberGameState = {
  round: null,
  timerId: null,
  remainingSeconds: 30
};

numberGameForm.addEventListener("submit", (event) => {
  event.preventDefault();
  buildNumberRound();
});

startTimerButton.addEventListener("click", () => {
  startRoundTimer();
});

regenerateRoundButton.addEventListener("click", () => {
  buildNumberRound();
});

showSolutionToggle.addEventListener("change", () => {
  const isVisible = showSolutionToggle.checked;
  solutionPanel.hidden = !isVisible;
});

buildNumberRound();

function buildNumberRound() {
  stopRoundTimer();

  const largeCount = Number.parseInt(largeCountSelect.value, 10);
  const timerSeconds = Number.parseInt(timerSecondsSelect.value, 10);
  const numbers = drawNumbers(largeCount);
  const target = randomInteger(100, 999);
  const solution = solveCountdown(numbers, target);

  numberGameState.round = {
    largeCount,
    timerSeconds,
    numbers,
    target,
    solution
  };

  numberGameState.remainingSeconds = timerSeconds;
  timerDisplay.textContent = timerSeconds || "Off";
  resultsTitle.textContent = `Target ${target}`;

  renderRound(numbers, target);
  renderSolution(solution);

  solutionPanel.hidden = !showSolutionToggle.checked;
}

function drawNumbers(largeCount) {
  const largePool = shuffleArray([...LARGE_NUMBERS]);
  const smallPool = [];

  while (smallPool.length < 10) {
    smallPool.push(...shuffleArray([...SMALL_NUMBERS]));
  }

  return [
    ...largePool.slice(0, largeCount),
    ...smallPool.slice(0, 6 - largeCount)
  ];
}

function renderRound(numbers, target) {
  targetDisplay.textContent = String(target);
  numbersDisplay.innerHTML = "";

  numbers.forEach((value) => {
    numbersDisplay.appendChild(buildNumberTile(value));
  });
}

function buildNumberTile(value) {
  const tile = document.createElement("div");
  tile.className = "number-game-tile";
  tile.textContent = String(value);
  return tile;
}

function renderSolution(solution) {
  bestTotal.textContent = String(solution.value);
  distanceText.textContent = String(solution.distance);
  solutionText.innerHTML = formatSolutionLines(solution.steps);
}

function formatSolutionLines(steps) {
  if (!steps.length) {
    return "No valid method found.";
  }

  return steps.map((step) => `<div>${step}</div>`).join("");
}

function startRoundTimer() {
  const { timerSeconds } = numberGameState.round || {};
  if (!timerSeconds) {
    timerDisplay.textContent = "Off";
    return;
  }

  stopRoundTimer();
  numberGameState.remainingSeconds = timerSeconds;
  timerDisplay.textContent = String(numberGameState.remainingSeconds);

  numberGameState.timerId = window.setInterval(() => {
    numberGameState.remainingSeconds -= 1;
    if (numberGameState.remainingSeconds <= 0) {
      timerDisplay.textContent = "0";
      stopRoundTimer();
      return;
    }

    timerDisplay.textContent = String(numberGameState.remainingSeconds);
  }, 1000);
}

function stopRoundTimer() {
  if (numberGameState.timerId) {
    window.clearInterval(numberGameState.timerId);
    numberGameState.timerId = null;
  }
}

function solveCountdown(numbers, target) {
  const best = {
    value: null,
    distance: Number.POSITIVE_INFINITY,
    steps: []
  };

  const initial = numbers.map((value) => ({
    value,
    expression: String(value),
    steps: []
  }));
  const seen = new Set();

  search(initial);
  return best;

  function search(items) {
    const signature = items.map((item) => item.value).sort((a, b) => a - b).join(",");
    if (seen.has(signature)) {
      return;
    }
    seen.add(signature);

    items.forEach((item) => {
      const distance = Math.abs(item.value - target);
      if (distance < best.distance) {
        best.value = item.value;
        best.distance = distance;
        best.steps = item.steps.length ? item.steps : [item.expression];
        if (distance === 0) {
          return;
        }
      }
    });

    if (best.distance === 0 || items.length === 1) {
      return;
    }

    for (let firstIndex = 0; firstIndex < items.length; firstIndex += 1) {
      for (let secondIndex = firstIndex + 1; secondIndex < items.length; secondIndex += 1) {
        const first = items[firstIndex];
        const second = items[secondIndex];
        const remaining = items.filter((_, index) => index !== firstIndex && index !== secondIndex);
        const options = buildOperations(first, second);

        options.forEach((option) => {
          search([
            ...remaining,
            option
          ]);
        });
      }
    }
  }
}

function buildOperations(first, second) {
  const results = [];
  const sharedSteps = [...first.steps, ...second.steps];

  results.push({
    value: first.value + second.value,
    expression: `(${first.expression} + ${second.expression})`,
    steps: [...sharedSteps, `${first.value} + ${second.value} = ${first.value + second.value}`]
  });

  results.push({
    value: first.value * second.value,
    expression: `(${first.expression} &times; ${second.expression})`,
    steps: [...sharedSteps, `${first.value} &times; ${second.value} = ${first.value * second.value}`]
  });

  if (first.value > second.value) {
    results.push({
      value: first.value - second.value,
      expression: `(${first.expression} - ${second.expression})`,
      steps: [...sharedSteps, `${first.value} - ${second.value} = ${first.value - second.value}`]
    });
  }

  if (second.value > first.value) {
    results.push({
      value: second.value - first.value,
      expression: `(${second.expression} - ${first.expression})`,
      steps: [...sharedSteps, `${second.value} - ${first.value} = ${second.value - first.value}`]
    });
  }

  if (second.value !== 0 && first.value % second.value === 0) {
    results.push({
      value: first.value / second.value,
      expression: `(${first.expression} &divide; ${second.expression})`,
      steps: [...sharedSteps, `${first.value} &divide; ${second.value} = ${first.value / second.value}`]
    });
  }

  if (first.value !== 0 && second.value % first.value === 0) {
    results.push({
      value: second.value / first.value,
      expression: `(${second.expression} &divide; ${first.expression})`,
      steps: [...sharedSteps, `${second.value} &divide; ${first.value} = ${second.value / first.value}`]
    });
  }

  return dedupeOperations(results);
}

function dedupeOperations(results) {
  const seen = new Set();
  return results.filter((result) => {
    if (result.value <= 0) {
      return false;
    }

    const key = `${result.value}|${result.steps[result.steps.length - 1]}`;
    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
}

function shuffleArray(items) {
  const clone = [...items];
  for (let index = clone.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [clone[index], clone[swapIndex]] = [clone[swapIndex], clone[index]];
  }
  return clone;
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

