const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

/*
  Hero "calendar page" animation.
  The phrase changes every few seconds, while the card flips like a page.
  Hover/focus the card to pause the cycle.
*/
const flipPage = document.getElementById("flipPage");
const flipWord = flipPage?.querySelector(".flip-word");
const flipPageNext = document.getElementById("flipPageNext");
const flipNextWord = flipPageNext?.querySelector(".flip-word");
const systemCard = document.getElementById("systemCard");
const systemNumber = document.getElementById("systemNumber");
const systemKicker = document.getElementById("systemKicker");
const systemTitle = document.getElementById("systemTitle");
const systemDescription = document.getElementById("systemDescription");
const systemFooter = document.getElementById("systemFooter");
const miniBars = document.getElementById("miniBars");
const systemIcon = document.getElementById("systemIcon");
const swapGraph = document.getElementById("swapGraph");
const chartImages = [
  "assets/images/growth%20curve%201.png",
  "assets/images/bar%20diagram%201.png",
  "assets/images/pie%20chart%201.png"
];

chartImages.forEach(src => {
  const chartImage = new Image();
  chartImage.src = src;
});
let activeChartIndex = 0;

const heroSlides = [
  {
    phrase: "organize data.",
    number: "01",
    kicker: "STRUCTURE",
    title: "Database systems",
    description: "Turn scattered business information into something clear, searchable, and useful.",
    bars: [9, 16, 12, 22],
    visual: "data-icon"
  },
  {
    phrase: "automate work.",
    number: "02",
    kicker: "AUTOMATION",
    title: "AI + workflows",
    description: "Take repetitive steps out of the day and let useful automation handle them.",
    bars: [18, 10, 23, 15],
    visual: "workflow-icon"
  },
  {
    phrase: "build software.",
    number: "03",
    kicker: "PRODUCT",
    title: "Business software",
    description: "Create tools around the actual process instead of forcing the process into a template.",
    bars: [12, 22, 16, 25],
    visual: "software-icon"
  }
];

let slideIndex = 0;
let heroPaused = false;
let flipTimer;

function updateMiniBars(values) {
  if (!miniBars) return;
  [...miniBars.children].forEach((bar, i) => {
    bar.style.height = `${values[i] || 12}px`;
  });
}

function changeHeroSlide() {
  if (!flipPage || !flipWord || !flipPageNext || !flipNextWord) return;

  const nextIndex = (slideIndex + 1) % heroSlides.length;
  const next = heroSlides[nextIndex];
  flipNextWord.textContent = next.phrase;
  if (swapGraph) {
    let nextChartIndex = Math.floor(Math.random() * (chartImages.length - 1));
    if (nextChartIndex >= activeChartIndex) nextChartIndex += 1;
    activeChartIndex = nextChartIndex;
    swapGraph.src = chartImages[activeChartIndex];
  }
  flipPage.classList.add("flip-out");
  flipPageNext.classList.add("flip-in");

  systemCard?.classList.remove("card-leave", "card-enter");
  void systemCard?.offsetWidth;
  systemCard?.classList.add("card-leave");

  setTimeout(() => {
    if (systemNumber) systemNumber.textContent = next.number;
    if (systemKicker) systemKicker.textContent = next.kicker;
    if (systemTitle) systemTitle.textContent = next.title;
    if (systemDescription) systemDescription.textContent = next.description;
    if (systemFooter) systemFooter.textContent = `${next.number} / 03`;
    if (systemIcon) systemIcon.className = `system-icon ${next.visual}`;
    updateMiniBars(next.bars);
    systemCard?.classList.remove("card-leave");
    systemCard?.classList.add("card-enter");

    slideIndex = nextIndex;

    setTimeout(() => {
      flipWord.textContent = next.phrase;
      flipPage.classList.remove("flip-out");
      flipPageNext.classList.remove("flip-in");
    }, 490);

    setTimeout(() => {
      systemCard?.classList.remove("card-enter");
    }, 340);
  }, 220);
}

function startHeroTimer() {
  clearInterval(flipTimer);
  flipTimer = setInterval(() => {
    if (!heroPaused && !document.hidden) changeHeroSlide();
  }, 3600);
}

flipPage?.addEventListener("mouseenter", () => { heroPaused = true; });
flipPage?.addEventListener("mouseleave", () => { heroPaused = false; });
flipPage?.addEventListener("focusin", () => { heroPaused = true; });
flipPage?.addEventListener("focusout", () => { heroPaused = false; });

const systemStack = document.querySelector(".system-stack");
systemStack?.addEventListener("mouseenter", () => { heroPaused = true; });
systemStack?.addEventListener("mouseleave", () => { heroPaused = false; });

updateMiniBars(heroSlides[0].bars);
startHeroTimer();

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) startHeroTimer();
});

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Replace DEMO_LINK_HERE in index.html when the public Shop 2 URL is ready.
