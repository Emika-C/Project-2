const systems = [
  {
    id: "sun",
    label: "Sun",
    intro: "Our local star is a giant fusion engine with extreme heat and magnetic storms.",
    image: "Assets/solar-system/sun.png",
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
    image: "Assets/solar-system/mars.png",
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
    image: "Assets/solar-system/jupiter.png",
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
  },
  {
    id: "mercury",
    label: "Mercury",
    intro: "The smallest planet and closest to the Sun, with extreme temperature swings.",
    image: "Assets/solar-system/mercury.png",
    texture: "radial-gradient(circle at 35% 30%, #c0c0c0 0%, #808080 50%, #404040 100%)",
    parts: [
      {
        name: "Dayside",
        zoom: 1.18,
        facts: [
          "Mercury's day side reaches 430°C, hot enough to melt lead.",
          "There is virtually no atmosphere to distribute heat."
        ],
        cat: {
          id: "scorch-kitten",
          name: "Scorch Kitten",
          origin: "Mercury Dayside",
          description: "Heat-resistant paws that can walk on molten metal."
        }
      },
      {
        name: "Nightside",
        zoom: 1.15,
        facts: [
          "Mercury's night side drops to -180°C.",
          "The temperature difference is the largest in the solar system."
        ],
        cat: {
          id: "frost-whisker",
          name: "Frost Whisker",
          origin: "Mercury Nightside",
          description: "Survives extreme cold by hibernating in impact craters."
        }
      },
      {
        name: "Surface Craters",
        zoom: 1.12,
        facts: [
          "Mercury is covered in impact craters from ancient asteroids.",
          "Some craters are over 1,500 km wide."
        ],
        cat: {
          id: "crater-pounce",
          name: "Crater Pounce",
          origin: "Mercury Craters",
          description: "Leaps between crater rims with incredible agility."
        }
      }
    ]
  },
  {
    id: "venus",
    label: "Venus",
    intro: "Earth's toxic twin with crushing pressure and sulfuric acid clouds.",
    image: "Assets/solar-system/venus.png",
    texture: "radial-gradient(circle at 30% 28%, #ffd89b 0%, #ffb347 50%, #ff8c00 100%)",
    parts: [
      {
        name: "Atmosphere",
        zoom: 1.2,
        facts: [
          "Venus's atmosphere is 90 times denser than Earth's.",
          "It consists mainly of carbon dioxide with sulfuric acid clouds."
        ],
        cat: {
          id: "cloud-dancer",
          name: "Cloud Dancer",
          origin: "Venus Atmosphere",
          description: "Floats through acid clouds on wind currents."
        }
      },
      {
        name: "Surface",
        zoom: 1.16,
        facts: [
          "Venus's surface temperature is 465°C, the hottest planet.",
          "The pressure would crush a submarine."
        ],
        cat: {
          id: "magma-paw",
          name: "Magma Paw",
          origin: "Venus Surface",
          description: "Paddles through molten volcanic plains fearlessly."
        }
      },
      {
        name: "Retrograde Rotation",
        zoom: 1.19,
        facts: [
          "Venus rotates backwards compared to most planets.",
          "A day on Venus is longer than its year."
        ],
        cat: {
          id: "backwards-mew",
          name: "Backwards Mew",
          origin: "Venus Rotation",
          description: "Spins in reverse and sees backwards through time."
        }
      }
    ]
  },
  {
    id: "earth",
    label: "Earth",
    intro: "Our home planet: the only known world with life.",
    image: "Assets/solar-system/earth.png",
    texture: "radial-gradient(circle at 32% 30%, #4a90e2 0%, #2e5c8a 50%, #1a3a52 100%)",
    parts: [
      {
        name: "Atmosphere",
        zoom: 1.17,
        facts: [
          "Earth's atmosphere is made of 78% nitrogen and 21% oxygen.",
          "The ozone layer protects us from harmful UV radiation."
        ],
        cat: {
          id: "breeze-paw",
          name: "Breeze Paw",
          origin: "Earth Atmosphere",
          description: "Rides jet streams and plays with weather patterns."
        }
      },
      {
        name: "Oceans",
        zoom: 1.21,
        facts: [
          "Water covers 71% of Earth's surface.",
          "The deepest ocean trench is nearly 11 km deep."
        ],
        cat: {
          id: "tide-whisker",
          name: "Tide Whisker",
          origin: "Earth Oceans",
          description: "Swims through bioluminescent jellyfish gardens."
        }
      },
      {
        name: "Continents",
        zoom: 1.13,
        facts: [
          "The continents are slowly drifting across the planet.",
          "Mountains are still being formed by tectonic plate collisions."
        ],
        cat: {
          id: "explorer-mew",
          name: "Explorer Mew",
          origin: "Earth Continents",
          description: "Maps the world and discovers new habitats daily."
        }
      }
    ]
  },
  {
    id: "saturn",
    label: "Saturn",
    intro: "The ringed gas giant with over 80 moons and spectacular ice rings.",
    image: "Assets/solar-system/saturn.png",
    texture: "radial-gradient(circle at 32% 28%, #fad5a5 0%, #f4a460 50%, #d2691e 100%)",
    parts: [
      {
        name: "Rings",
        zoom: 1.24,
        facts: [
          "Saturn's rings are made of billions of ice particles.",
          "They range from fine dust to house-sized boulders."
        ],
        cat: {
          id: "ring-surfer",
          name: "Ring Surfer",
          origin: "Saturn Rings",
          description: "Glides across ice rings on a frictionless sled."
        }
      },
      {
        name: "Atmosphere",
        zoom: 1.19,
        facts: [
          "Saturn is made mostly of hydrogen and helium.",
          "Winds can reach 1,800 km/h in the upper atmosphere."
        ],
        cat: {
          id: "wind-pounce",
          name: "Wind Pounce",
          origin: "Saturn Atmosphere",
          description: "Hunts prey in supersonic hurricane zones."
        }
      },
      {
        name: "Titan Moon",
        zoom: 1.22,
        facts: [
          "Titan is Saturn's largest moon with a thick atmosphere.",
          "It has liquid methane lakes and may harbor strange life."
        ],
        cat: {
          id: "methane-paw",
          name: "Methane Paw",
          origin: "Saturn's Titan",
          description: "Drinks from methane oceans and breathes alien air."
        }
      }
    ]
  },
  {
    id: "uranus",
    label: "Uranus",
    intro: "An icy giant that orbits on its side with 27 known moons.",
    image: "Assets/solar-system/uranus.png",
    texture: "radial-gradient(circle at 34% 32%, #4fd0e7 0%, #2e8b9e 50%, #1a4d5c 100%)",
    parts: [
      {
        name: "Tilted Axis",
        zoom: 1.18,
        facts: [
          "Uranus rotates on its side at 98 degrees of tilt.",
          "This may have been caused by a giant collision early in the solar system."
        ],
        cat: {
          id: "dizzy-mew",
          name: "Dizzy Mew",
          origin: "Uranus Axis",
          description: "Spins in all directions without getting nauseous."
        }
      },
      {
        name: "Icy Atmosphere",
        zoom: 1.16,
        facts: [
          "Uranus is made of water, methane, and ammonia ices.",
          "It's the coldest planetary atmosphere in the solar system."
        ],
        cat: {
          id: "glacier-whisker",
          name: "Glacier Whisker",
          origin: "Uranus Atmosphere",
          description: "Constructs ice fortresses in methane snow storms."
        }
      },
      {
        name: "Faint Rings",
        zoom: 1.2,
        facts: [
          "Uranus has a complex system of narrow, dark rings.",
          "They are much less visible than Saturn's rings."
        ],
        cat: {
          id: "shadow-paw",
          name: "Shadow Paw",
          origin: "Uranus Rings",
          description: "Hunts in the darkness between invisible ring particles."
        }
      }
    ]
  },
  {
    id: "neptune",
    label: "Neptune",
    intro: "A deep blue ice giant with the fastest winds in the solar system.",
    image: "Assets/solar-system/neptune.png",
    texture: "radial-gradient(circle at 33% 31%, #4169e1 0%, #1e3a5f 50%, #0f1f34 100%)",
    parts: [
      {
        name: "Great Dark Spot",
        zoom: 1.23,
        facts: [
          "Neptune's Great Dark Spot is a storm larger than Earth.",
          "It travels across the planet and then disappears."
        ],
        cat: {
          id: "storm-dancer",
          name: "Storm Dancer",
          origin: "Neptune's Dark Spot",
          description: "Performs acrobatics in the heart of cosmic hurricanes."
        }
      },
      {
        name: "Supersonic Winds",
        zoom: 1.2,
        facts: [
          "Winds on Neptune reach 2,100 km/h.",
          "These are the fastest winds ever recorded in the solar system."
        ],
        cat: {
          id: "gale-pounce",
          name: "Gale Pounce",
          origin: "Neptune Winds",
          description: "Catches prey at hypersonic speeds."
        }
      },
      {
        name: "Triton Moon",
        zoom: 1.19,
        facts: [
          "Triton orbits backwards, suggesting it was captured from the Kuiper Belt.",
          "It has icy volcanoes that erupt nitrogen geysers."
        ],
        cat: {
          id: "geyser-whisker",
          name: "Geyser Whisker",
          origin: "Neptune's Triton",
          description: "Rides nitrogen plumes and freezes instantly in the void."
        }
      }
    ]
  },
  {
    id: "pluto",
    label: "Pluto",
    intro: "The distant dwarf planet at the edge of our solar system.",
    image: "Assets/solar-system/pluto.png",
    texture: "radial-gradient(circle at 35% 35%, #d3d3d3 0%, #a9a9a9 50%, #696969 100%)",
    parts: [
      {
        name: "Heart Region",
        zoom: 1.2,
        facts: [
          "Pluto has a bright heart-shaped region called Tombaugh Regio.",
          "The left side is filled with nitrogen ice."
        ],
        cat: {
          id: "love-paw",
          name: "Love Paw",
          origin: "Pluto's Heart",
          description: "Leaves paw prints shaped like hearts on frozen plains."
        }
      },
      {
        name: "Cthulhu Macula",
        zoom: 1.17,
        facts: [
          "Pluto's dark equatorial region is named after a cosmic horror.",
          "It may be filled with darker materials like organic compounds."
        ],
        cat: {
          id: "mystic-mew",
          name: "Mystic Mew",
          origin: "Pluto's Dark Side",
          description: "Purrs in alien tongues and dreams cosmic dreams."
        }
      },
      {
        name: "Charon Moon",
        zoom: 1.21,
        facts: [
          "Charon is so large it and Pluto orbit each other.",
          "Charon is nearly half the size of Pluto itself."
        ],
        cat: {
          id: "dual-whisker",
          name: "Dual Whisker",
          origin: "Pluto and Charon",
          description: "Dances between two worlds in an endless cosmic waltz."
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
  quitBtn: document.getElementById("quitBtn"),
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
state.started = false;
wireEvents();
boot();
generatePlanetPins();

function wireEvents() {
  el.startBtn.addEventListener("click", startMission);
  el.mapBtn.addEventListener("click", showMap);
  el.catalogBtn.addEventListener("click", openCatalog);
  el.quitBtn.addEventListener("click", quitMission);
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

function quitMission() {
  if (!confirm("Are you sure you want to return to the title screen? Your progress will be saved.")) {
    return;
  }
  closeCatalog();
  showMap();
  state.started = false;
  saveState();
  el.app.hidden = true;
  el.startScreen.hidden = false;
}

function generatePlanetPins() {
  const solarStage = el.solarStage;
  solarStage.querySelectorAll(".planet-pin").forEach((pin) => pin.remove());

  const center = 50;
  const pointOnOrbit = (orbitPct, angleDeg) => {
    const radius = orbitPct / 2;
    const rad = (angleDeg * Math.PI) / 180;
    return {
      x: center + radius * Math.cos(rad),
      y: center + radius * Math.sin(rad)
    };
  };

  const positionsById = {
    sun: { x: 50, y: 50 },
    mercury: pointOnOrbit(20, -12),
    venus: pointOnOrbit(28, 26),
    earth: pointOnOrbit(36, 86),
    mars: pointOnOrbit(44, 138),
    jupiter: pointOnOrbit(56, 184),
    saturn: pointOnOrbit(64, 238),
    uranus: pointOnOrbit(72, 294),
    neptune: pointOnOrbit(80, 332),
    pluto: pointOnOrbit(88, 34)
  };

  systems.forEach((system, index) => {
    const pos = positionsById[system.id];
    if (!pos) return;
    const pin = document.createElement("div");
    pin.className = `planet-pin ${system.id}`;
    pin.dataset.index = index;
    pin.tabIndex = 0;
    pin.role = "button";
    pin.ariaLabel = `Visit ${system.label}`;
    pin.style.left = pos.x + "%";
    pin.style.top = pos.y + "%";
    pin.style.transform = "translate(-50%, -50%)";
    pin.addEventListener("click", () => selectPlanet(index));
    pin.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectPlanet(index);
      }
    });
    solarStage.appendChild(pin);
  });
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
  el.solarStage.classList.remove("spiral-zoom");
}

function zoomToCurrentPlanet() {
  el.solarStage.classList.add("spiral-zoom");
  setTimeout(() => {
    viewMode = "planet";
    el.mapView.hidden = true;
    el.planetView.hidden = false;
    el.locationLabel.textContent = getCurrentSystem().label;
    el.solarStage.classList.remove("spiral-zoom");
    renderPlanet();
  }, 900);
}

function renderPlanet() {
  const system = getCurrentSystem();
  el.planetTitle.textContent = system.label;
  el.planetIntro.textContent = system.intro;
  if (system.image) {
    el.planetObject.style.backgroundImage = `url("${system.image}")`;
  } else {
    el.planetObject.style.backgroundImage = system.texture;
  }
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
