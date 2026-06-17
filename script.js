const systems = [
  {
    id: "sun",
    label: "Sun",
    intro: "Our local star is a giant fusion engine with extreme heat and magnetic storms.",
    texture: "radial-gradient(circle at 35% 30%, #fffec3 0%, #ffc057 45%, #ef6820 100%)",
    parts: [
      {
        name: "Core",
        zoom: 1.22,
        facts: [
          "The Sun's core is about 15 million degrees C.",
          "Hydrogen atoms fuse into helium and release massive energy."
        ],
        cat: {
          id: "plasma-cat",
          name: "Plasma Cat",
          origin: "Sun Core",
          description: "Purrs in magnetic loops and naps in fusion flares."
        }
      },
      {
        name: "Photosphere",
        zoom: 1.08,
        facts: [
          "The photosphere is the visible surface of the Sun.",
          "Sunspots appear darker because they are cooler than nearby regions."
        ],
        cat: {
          id: "sunspot-cat",
          name: "Sunspot Cat",
          origin: "Sun Photosphere",
          description: "Blends into sunspots and leaps across granules."
        }
      },
      {
        name: "Corona",
        zoom: 1.3,
        facts: [
          "The corona extends millions of kilometers into space.",
          "It is much hotter than the Sun's visible surface."
        ],
        cat: {
          id: "flare-cat",
          name: "Flare Cat",
          origin: "Sun Corona",
          description: "Rides solar wind and chases charged particles."
        }
      }
    ]
  },
  {
    id: "mars",
    label: "Mars",
    intro: "The red planet has giant volcanoes, deep valleys, and evidence of ancient water.",
    texture: "radial-gradient(circle at 32% 28%, #ffc79c 0%, #dd6a3b 48%, #8e3423 100%)",
    parts: [
      {
        name: "Olympus Mons",
        zoom: 1.2,
        facts: [
          "Olympus Mons is the tallest volcano in the Solar System.",
          "It is about 22 km tall, nearly three times Everest's height."
        ],
        cat: {
          id: "lava-paw",
          name: "Lava Paw",
          origin: "Olympus Mons",
          description: "Surfs warm volcanic slopes on dustproof paws."
        }
      },
      {
        name: "Valles Marineris",
        zoom: 1.25,
        facts: [
          "Valles Marineris is a canyon system over 4,000 km long.",
          "Some sections are up to 7 km deep."
        ],
        cat: {
          id: "rift-whisker",
          name: "Rift Whisker",
          origin: "Valles Marineris",
          description: "Echo-locates through canyons with ultra-long whiskers."
        }
      },
      {
        name: "Polar Ice Cap",
        zoom: 1.14,
        facts: [
          "Mars has polar caps made of water ice and carbon dioxide ice.",
          "The caps grow and shrink with seasons."
        ],
        cat: {
          id: "frost-tail",
          name: "Frost Tail",
          origin: "Mars Polar Cap",
          description: "Leaves glittering pawprints in frozen carbon frost."
        }
      }
    ]
  },
  {
    id: "jupiter",
    label: "Jupiter",
    intro: "A gas giant with fierce storms, powerful radiation, and many moons.",
    texture: "linear-gradient(180deg, #f6debf 0%, #d6ab7f 28%, #be865f 56%, #f2d0a5 100%)",
    parts: [
      {
        name: "Great Red Spot",
        zoom: 1.21,
        facts: [
          "The Great Red Spot is a storm larger than Earth.",
          "It has persisted for at least 300 years."
        ],
        cat: {
          id: "storm-claw",
          name: "Storm Claw",
          origin: "Great Red Spot",
          description: "Twirls through megastorms with cyclone balance."
        }
      },
      {
        name: "Cloud Bands",
        zoom: 1.1,
        facts: [
          "Jupiter's colored bands are fast-moving cloud belts.",
          "Winds can exceed 600 km/h."
        ],
        cat: {
          id: "bandit-purr",
          name: "Bandit Purr",
          origin: "Jupiter Cloud Bands",
          description: "Camouflages in striped cloud rivers."
        }
      },
      {
        name: "Auroras",
        zoom: 1.28,
        facts: [
          "Jupiter has intense auroras near its poles.",
          "They are powered by the planet's huge magnetic field."
        ],
        cat: {
          id: "aurora-mew",
          name: "Aurora Mew",
          origin: "Jupiter Poles",
          description: "Glows neon green when magnetic storms rise."
        }
      }
    ]
  }
];

const state = {
  started: false,
  currentIndex: 0,
  selectedPartIndex: 0,
  rotationY: 0,
  foundCats: []
};

const el = {
  startScreen: document.getElementById("startScreen"),
  app: document.getElementById("app"),
  startBtn: document.getElementById("startBtn"),
  mapBtn: document.getElementById("mapBtn"),
  catalogBtn: document.getElementById("catalogBtn"),
  closeCatalogBtn: document.getElementById("closeCatalogBtn"),
  prevArrow: document.getElementById("prevArrow"),
  nextArrow: document.getElementById("nextArrow"),
  mapView: document.getElementById("mapView"),
  planetView: document.getElementById("planetView"),
  solarStage: document.getElementById("solarStage"),
  mapHint: document.getElementById("mapHint"),
  visitBtn: document.getElementById("visitBtn"),
  locationLabel: document.getElementById("locationLabel"),
  planetObject: document.getElementById("planetObject"),
  planetTitle: document.getElementById("planetTitle"),
  planetIntro: document.getElementById("planetIntro"),
  partButtons: document.getElementById("partButtons"),
  factBtn: document.getElementById("factBtn"),
  catBtn: document.getElementById("catBtn"),
  nextBtn: document.getElementById("nextBtn"),
  factText: document.getElementById("factText"),
  discoverStatus: document.getElementById("discoverStatus"),
  catalogPanel: document.getElementById("catalogPanel"),
  catalogCount: document.getElementById("catalogCount"),
  catalogGrid: document.getElementById("catalogGrid"),
  cardTemplate: document.getElementById("catalogCardTemplate")
};

let viewMode = "map";
let isDragging = false;
let lastX = 0;

loadState();
wireEvents();
boot();

function wireEvents() {
  el.startBtn.addEventListener("click", startMission);
  el.mapBtn.addEventListener("click", showMap);
  el.catalogBtn.addEventListener("click", openCatalog);
  el.closeCatalogBtn.addEventListener("click", closeCatalog);
  el.visitBtn.addEventListener("click", zoomToCurrentPlanet);
  el.prevArrow.addEventListener("click", () => stepPlanet(-1));
  el.nextArrow.addEventListener("click", () => stepPlanet(1));
  el.factBtn.addEventListener("click", revealFact);
  el.catBtn.addEventListener("click", discoverCat);
  el.nextBtn.addEventListener("click", () => {
    stepPlanet(1);
    showMap();
  });

  document.querySelectorAll(".planet-pin").forEach((pin) => {
    pin.addEventListener("click", () => selectPlanet(Number(pin.dataset.index)));
    pin.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectPlanet(Number(pin.dataset.index));
      }
    });
  });

  el.planetObject.addEventListener("pointerdown", onDragStart);
  window.addEventListener("pointermove", onDragMove);
  window.addEventListener("pointerup", onDragEnd);
}

function boot() {
  if (state.started) {
    el.startScreen.hidden = true;
    el.app.hidden = false;
    renderMapSelection();
    renderPlanet();
    showMap();
  } else {
    el.startScreen.hidden = false;
    el.app.hidden = true;
  }

  renderCatalog();
}

function startMission() {
  state.started = true;
  saveState();
  el.startScreen.hidden = true;
  el.app.hidden = false;
  renderMapSelection();
  renderPlanet();
  showMap();
}

function getCurrentSystem() {
  return systems[state.currentIndex];
}

function selectPlanet(index) {
  state.currentIndex = clampIndex(index);
  state.selectedPartIndex = 0;
  renderMapSelection();
  renderPlanet();
  saveState();
}

function stepPlanet(delta) {
  selectPlanet(state.currentIndex + delta);
}

function clampIndex(index) {
  const total = systems.length;
  return (index + total) % total;
}

function renderMapSelection() {
  const system = getCurrentSystem();
  el.mapHint.textContent = `Selected: ${system.label}`;
  el.locationLabel.textContent = viewMode === "map" ? "Solar System Map" : system.label;

  document.querySelectorAll(".planet-pin").forEach((pin) => {
    const selected = Number(pin.dataset.index) === state.currentIndex;
    pin.classList.toggle("selected", selected);
  });
}

function showMap() {
  viewMode = "map";
  el.mapView.hidden = false;
  el.planetView.hidden = true;
  el.locationLabel.textContent = "Solar System Map";
  el.solarStage.classList.remove("zooming");
}

function zoomToCurrentPlanet() {
  el.solarStage.classList.add("zooming");
  setTimeout(() => {
    viewMode = "planet";
    el.mapView.hidden = true;
    el.planetView.hidden = false;
    el.locationLabel.textContent = getCurrentSystem().label;
    el.solarStage.classList.remove("zooming");
    renderPlanet();
  }, 900);
}

function renderPlanet() {
  const system = getCurrentSystem();
  el.planetTitle.textContent = system.label;
  el.planetIntro.textContent = system.intro;
  el.planetObject.style.background = system.texture;
  el.factText.textContent = "Select a part first.";
  el.discoverStatus.textContent = "";
  el.discoverStatus.className = "discover-status";
  buildPartButtons(system);
  applyPlanetTransform();
  renderMapSelection();
}

function buildPartButtons(system) {
  el.partButtons.innerHTML = "";
  state.selectedPartIndex = Math.min(state.selectedPartIndex, system.parts.length - 1);

  system.parts.forEach((part, index) => {
    const chip = document.createElement("button");
    chip.className = "part-chip";
    if (index === state.selectedPartIndex) chip.classList.add("active");
    chip.textContent = part.name;
    chip.addEventListener("click", () => {
      state.selectedPartIndex = index;
      renderPlanet();
      saveState();
    });
    el.partButtons.appendChild(chip);
  });
}

function revealFact() {
  const part = getCurrentSystem().parts[state.selectedPartIndex];
  const fact = part.facts[Math.floor(Math.random() * part.facts.length)];
  el.factText.textContent = fact;
}

function discoverCat() {
  const part = getCurrentSystem().parts[state.selectedPartIndex];
  const cat = part.cat;
  const hasCat = state.foundCats.includes(cat.id);

  if (hasCat) {
    el.discoverStatus.className = "discover-status warn";
    el.discoverStatus.textContent = `${cat.name} already joined your crew.`;
    return;
  }

  state.foundCats.push(cat.id);
  saveState();
  renderCatalog();

  el.discoverStatus.className = "discover-status ok";
  el.discoverStatus.textContent = `${cat.name} discovered.`;
}

function applyPlanetTransform() {
  const part = getCurrentSystem().parts[state.selectedPartIndex];
  const zoom = part ? part.zoom : 1;
  el.planetObject.style.setProperty("--planet-zoom", String(zoom));
  el.planetObject.style.transform = `translate(-50%, -50%) rotateY(${state.rotationY}deg) scale(${zoom})`;
}

function onDragStart(event) {
  isDragging = true;
  lastX = event.clientX;
  el.planetObject.setPointerCapture(event.pointerId);
}

function onDragMove(event) {
  if (!isDragging) return;
  const delta = event.clientX - lastX;
  lastX = event.clientX;
  state.rotationY += delta * 0.5;
  applyPlanetTransform();
}

function onDragEnd(event) {
  if (!isDragging) return;
  isDragging = false;
  if (el.planetObject.hasPointerCapture(event.pointerId)) {
    el.planetObject.releasePointerCapture(event.pointerId);
  }
  saveState();
}

function openCatalog() {
  renderCatalog();
  el.catalogPanel.hidden = false;
}

function closeCatalog() {
  el.catalogPanel.hidden = true;
}

function renderCatalog() {
  const allCats = systems.flatMap((system) => system.parts.map((part) => part.cat));
  el.catalogCount.textContent = `${state.foundCats.length} / ${allCats.length} cats collected`;
  el.catalogGrid.innerHTML = "";

  allCats.forEach((cat) => {
    const card = el.cardTemplate.content.firstElementChild.cloneNode(true);
    const unlocked = state.foundCats.includes(cat.id);

    card.dataset.locked = String(!unlocked);
    card.querySelector(".cat-name").textContent = unlocked ? cat.name : "Unknown Cat";
    card.querySelector(".cat-origin").textContent = unlocked ? cat.origin : "Unknown Origin";
    card.querySelector(".cat-description").textContent = unlocked
      ? cat.description
      : "Discover this cat by exploring planetary regions.";
    el.catalogGrid.appendChild(card);
  });
}

function saveState() {
  localStorage.setItem("galaxy-cat-academy-state", JSON.stringify(state));
}

function loadState() {
  const raw = localStorage.getItem("galaxy-cat-academy-state");
  if (!raw) return;

  try {
    const parsed = JSON.parse(raw);
    if (typeof parsed.started === "boolean") state.started = parsed.started;
    if (typeof parsed.currentIndex === "number") state.currentIndex = clampIndex(parsed.currentIndex);
    if (typeof parsed.selectedPartIndex === "number") state.selectedPartIndex = Math.max(0, parsed.selectedPartIndex);
    if (typeof parsed.rotationY === "number") state.rotationY = parsed.rotationY;
    if (Array.isArray(parsed.foundCats)) {
      const validIds = new Set(systems.flatMap((s) => s.parts.map((p) => p.cat.id)));
      state.foundCats = parsed.foundCats.filter((id) => typeof id === "string" && validIds.has(id));
    }
  } catch {
    localStorage.removeItem("galaxy-cat-academy-state");
  }
}
