const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

/*
  PUBLIC DEMO PRODUCTS — the ONLY place a shop URL should ever appear in this codebase.

  Add an entry here ONLY for a shop that is meant to be freely explorable by
  any website visitor: no password set on the shop itself, filled with
  fictional/randomized data (this is how "Shop 2" works today).

  NEVER add a real client shop link here, or anywhere else on the site.
  Client shops are password-protected by the app itself and their link is
  shared privately and directly with that client (WhatsApp, email, in
  person) — never linked, listed, or referenced on the public website, not
  even in an anonymized "who uses BitLab" showcase. The website does not
  and should not know anything about client shops or authentication.

  Full policy: website_shop_access_context.md

  Key = the value used in each link's data-demo-product="..." attribute.
*/
const publicDemoProducts = {
  pharmacy: "https://pharmacy.bitlabhq.com"

  // Add the next public demo once it exists. A branded subdomain is preferred,
  // but a Railway-generated URL is fine — demo.html gives it a stable address:
  // salon: "https://salon-pos-pwa-production-xxxx.up.railway.app",
};

/*
  Products whose demo is shown inside the desktop phone shell (demo.html)
  instead of linking straight to the shop URL. The shell redirects mobile
  visitors on to the real app, so the URL above stays the source of truth.

  Keep these keys in sync with BITLAB_DEMOS in demo.html.
*/
const framedDemoPages = {
  pharmacy: "demo.html?p=pharmacy"
};

document.querySelectorAll("[data-demo-product]").forEach(link => {
  const productId = link.getAttribute("data-demo-product");
  const url = publicDemoProducts[productId];
  const exploreLabel = link.querySelector(".built-explore");

  if (url) {
    const framedPage = framedDemoPages[productId];
    link.href = framedPage || url;
    if (framedPage) link.removeAttribute("target");
  } else {
    // No public demo configured yet for this product — keep the card
    // visible but inert, instead of shipping a dead "#" link.
    link.removeAttribute("href");
    link.setAttribute("aria-disabled", "true");
    link.classList.add("built-product-soon");
    if (exploreLabel) exploreLabel.textContent = "Coming soon";
  }
});

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

/* Draw the database module's chart from the supplied business-growth data. */
const growthChart = document.getElementById("growthChart");
const growthData = [
  100, 108, 104, 119, 115, 107, 124, 132,
  126, 139, 131, 145, 152, 143, 128, 136,
  149, 157, 151, 164, 177, 169, 154, 161,
  173, 188, 181, 193, 185, 171, 179, 196,
  211, 203, 218, 207, 194, 202, 219, 231,
  224, 241, 253, 239, 221, 234, 251, 268
];

if (growthChart) {
  const chartWidth = 640;
  const chartHeight = 360;
  const padding = { top: 42, right: 34, bottom: 38, left: 42 };
  const minValue = Math.min(...growthData) - 10;
  const maxValue = Math.max(...growthData) + 10;
  const plotWidth = chartWidth - padding.left - padding.right;
  const plotHeight = chartHeight - padding.top - padding.bottom;
  const points = growthData.map((value, index) => {
    const x = padding.left + (index / (growthData.length - 1)) * plotWidth;
    const y = padding.top + ((maxValue - value) / (maxValue - minValue)) * plotHeight;
    return { x, y };
  });
  const pointList = points.map(point => `${point.x.toFixed(1)},${point.y.toFixed(1)}`).join(" ");
  const areaPath = `M ${points[0].x.toFixed(1)} ${chartHeight - padding.bottom} L ${pointList.replaceAll(",", " ")} L ${points.at(-1).x.toFixed(1)} ${chartHeight - padding.bottom} Z`;
  const gridLines = Array.from({ length: 5 }, (_, index) => {
    const y = padding.top + (index / 4) * plotHeight;
    return `<line class="growth-grid" x1="${padding.left}" y1="${y}" x2="${chartWidth - padding.right}" y2="${y}" />`;
  }).join("");
  const dots = points.map((point, index) => `<circle class="growth-dot" cx="${point.x}" cy="${point.y}" r="${index === points.length - 1 ? 4 : 2.4}" style="transition-delay:${.55 + index * .13}s" />`).join("");

  growthChart.innerHTML = `
    <defs>
      <linearGradient id="growthFill" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stop-color="#ff7da7" stop-opacity=".62" />
        <stop offset="100%" stop-color="#8e7dff" stop-opacity="0" />
      </linearGradient>
    </defs>
    ${gridLines}
    <line class="growth-axis" x1="${padding.left}" y1="${padding.top}" x2="${padding.left}" y2="${chartHeight - padding.bottom}" />
    <line class="growth-axis" x1="${padding.left}" y1="${chartHeight - padding.bottom}" x2="${chartWidth - padding.right}" y2="${chartHeight - padding.bottom}" />
    <path class="growth-area" d="${areaPath}" />
    <polyline class="growth-line" points="${pointList}" />
    ${dots}
  `;

  const growthLine = growthChart.querySelector(".growth-line");
  const lineLength = growthLine?.getTotalLength() || 0;
  if (growthLine) {
    growthLine.style.strokeDasharray = lineLength;
    growthLine.style.strokeDashoffset = lineLength;
  }

  const chartPanel = growthChart.closest(".data-visual");
  const showChart = () => chartPanel?.classList.add("chart-visible");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    showChart();
  } else if ("IntersectionObserver" in window) {
    const chartObserver = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        showChart();
        chartObserver.disconnect();
      }
    }, { threshold: .35 });
    chartObserver.observe(chartPanel);
  } else {
    showChart();
  }
}