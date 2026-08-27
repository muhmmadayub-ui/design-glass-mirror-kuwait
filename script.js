/* =========================================================
   DESIGN GLASS & MIRROR KUWAIT
   INSTAGRAM + KEYWORD SEARCH ENGINE
   VERSION 1.0
   NO LOCAL STORAGE
   GITHUB PAGES SAFE
========================================================= */

(function () {

  "use strict";

  /* =======================================================
     WEBSITE / INSTAGRAM SETTINGS
  ======================================================= */

  const WEBSITE_NAME = "Design Glass & Mirror Kuwait";

  const INSTAGRAM_URL =
    "https://www.instagram.com/design_glass_mirror/";

  const WHATSAPP_URL =
    "https://wa.me/96555507290";

  const PHONE_URL =
    "tel:+96555507290";


  /* =======================================================
     SEARCH KEYWORDS
  ======================================================= */

  const KEYWORDS = [

    /* English */

    {
      keywords: [
        "glass",
        "glass kuwait",
        "glass company",
        "glass company kuwait",
        "glass installation",
        "glass work"
      ],
      title: "Glass Company Kuwait",
      description:
        "Professional glass design and installation services across Kuwait.",
      section: "#services"
    },

    {
      keywords: [
        "tempered glass",
        "tempered glass kuwait",
        "10mm glass",
        "10mm tempered glass",
        "safety glass"
      ],
      title: "Tempered Glass Kuwait",
      description:
        "Custom tempered and safety glass solutions for homes, shops and commercial projects.",
      section: "#services"
    },

    {
      keywords: [
        "shower glass",
        "shower glass kuwait",
        "glass shower",
        "glass shower doors",
        "shower doors"
      ],
      title: "Shower Glass Kuwait",
      description:
        "Custom tempered shower glass and modern glass shower doors.",
      section: "#services"
    },

    {
      keywords: [
        "glass door",
        "glass doors",
        "glass doors kuwait",
        "sliding glass door",
        "sliding glass doors",
        "sliding doors"
      ],
      title: "Glass Doors Kuwait",
      description:
        "Sliding, hinged and custom glass doors for homes, shops and offices.",
      section: "#services"
    },

    {
      keywords: [
        "glass staircase",
        "glass staircase kuwait",
        "staircase glass",
        "glass stairs",
        "glass railing",
        "glass balustrade"
      ],
      title: "Glass Staircases Kuwait",
      description:
        "Modern staircase glass, glass railings and balustrade systems.",
      section: "#projects"
    },

    {
      keywords: [
        "pool glass",
        "pool glass kuwait",
        "swimming pool glass",
        "swimming pool glass kuwait",
        "pool fencing glass"
      ],
      title: "Swimming Pool Glass Kuwait",
      description:
        "Clear glass solutions for swimming pools and modern outdoor areas.",
      section: "#projects"
    },

    {
      keywords: [
        "architectural glass",
        "architectural glass kuwait",
        "structural glass",
        "facade glass",
        "building glass"
      ],
      title: "Architectural Glass Kuwait",
      description:
        "Architectural and structural glass solutions for modern buildings.",
      section: "#services"
    },

    {
      keywords: [
        "aluminum",
        "aluminium",
        "aluminum kuwait",
        "aluminium kuwait",
        "aluminum doors",
        "aluminum windows",
        "aluminum sliding doors"
      ],
      title: "Aluminum Kuwait",
      description:
        "Modern aluminum doors, windows and aluminum glass systems.",
      section: "#services"
    },

    {
      keywords: [
        "mirror",
        "mirrors",
        "mirror kuwait",
        "custom mirror",
        "custom mirrors",
        "designer mirror"
      ],
      title: "Custom Mirrors Kuwait",
      description:
        "Custom decorative and designer mirrors made for modern interiors.",
      section: "#contact"
    },

    {
      keywords: [
        "led mirror",
        "led mirrors",
        "led mirror kuwait",
        "backlit mirror",
        "backlit mirrors",
        "light mirror"
      ],
      title: "LED Mirrors Kuwait",
      description:
        "Modern LED illuminated and backlit designer mirrors.",
      section: "#contact"
    },

    {
      keywords: [
        "bathroom mirror",
        "bathroom mirrors",
        "bathroom mirror kuwait"
      ],
      title: "Bathroom Mirrors Kuwait",
      description:
        "Custom bathroom mirrors and illuminated mirror solutions.",
      section: "#contact"
    },

    {
      keywords: [
        "shop glass",
        "shop glass kuwait",
        "shop doors",
        "storefront glass",
        "commercial glass"
      ],
      title: "Shop Glass Kuwait",
      description:
        "Glass doors and storefront glass for shops and commercial spaces.",
      section: "#projects"
    },


    /* Arabic */

    {
      keywords: [
        "زجاج",
        "زجاج الكويت",
        "شركة زجاج الكويت",
        "تركيب زجاج"
      ],
      title: "زجاج الكويت",
      description:
        "حلول احترافية للزجاج والتركيب في جميع أنحاء الكويت.",
      section: "#services"
    },

    {
      keywords: [
        "زجاج سيكوريت",
        "زجاج سيكوريت الكويت",
        "زجاج مقسى",
        "زجاج مقسى الكويت"
      ],
      title: "زجاج سيكوريت الكويت",
      description:
        "زجاج سيكوريت وزجاج مقسى للمنازل والمحلات والمشاريع.",
      section: "#services"
    },

    {
      keywords: [
        "زجاج شاور",
        "زجاج الشاور",
        "شاور زجاج",
        "أبواب شاور"
      ],
      title: "زجاج الشاور الكويت",
      description:
        "كبائن وأبواب شاور زجاجية بتصميم عصري.",
      section: "#services"
    },

    {
      keywords: [
        "أبواب زجاج",
        "ابواب زجاج",
        "أبواب زجاجية",
        "أبواب زجاج سحاب"
      ],
      title: "أبواب الزجاج الكويت",
      description:
        "أبواب زجاجية سحاب ومفصلية للمنازل والمحلات والمكاتب.",
      section: "#services"
    },

    {
      keywords: [
        "درج زجاج",
        "درج زجاج الكويت",
        "سلالم زجاج",
        "درابزين زجاج"
      ],
      title: "سلالم ودرابزين زجاج الكويت",
      description:
        "حلول السلالم والدرابزين الزجاجية الحديثة.",
      section: "#projects"
    },

    {
      keywords: [
        "زجاج مسابح",
        "زجاج مسبح",
        "زجاج المسابح الكويت"
      ],
      title: "زجاج المسابح الكويت",
      description:
        "حلول زجاجية للمسابح والمناطق الخارجية الحديثة.",
      section: "#projects"
    },

    {
      keywords: [
        "ألمنيوم",
        "المنيوم",
        "ألمنيوم الكويت",
        "أبواب ألمنيوم",
        "شبابيك ألمنيوم"
      ],
      title: "ألمنيوم الكويت",
      description:
        "أبواب وشبابيك وأنظمة ألمنيوم وزجاج حديثة.",
      section: "#services"
    },

    {
      keywords: [
        "مرايا",
        "مرايا الكويت",
        "مرآة",
        "مرايا مخصصة"
      ],
      title: "مرايا الكويت",
      description:
        "مرايا مخصصة وديكورية للمنازل والمشاريع الحديثة.",
      section: "#contact"
    },

    {
      keywords: [
        "مرايا ليد",
        "مرايا LED",
        "مرايا مضيئة",
        "مرايا خلفية"
      ],
      title: "مرايا LED الكويت",
      description:
        "مرايا LED ومرايا مضيئة بتصاميم عصرية.",
      section: "#contact"
    }

  ];


  /* =======================================================
     NORMALIZE SEARCH TEXT
  ======================================================= */

  function normalizeText(value) {

    return String(value || "")
      .toLowerCase()
      .trim()
      .replace(/[أإآ]/g, "ا")
      .replace(/ة/g, "ه")
      .replace(/ى/g, "ي")
      .replace(/\s+/g, " ");

  }


  /* =======================================================
     SEARCH ENGINE
  ======================================================= */

  function searchKeyword(query) {

    const search =
      normalizeText(query);

    if (!search) {
      return [];
    }

    const words =
      search.split(" ");

    const results = [];

    KEYWORDS.forEach(function (item) {

      let score = 0;

      const title =
        normalizeText(item.title);

      const description =
        normalizeText(item.description);

      const allKeywords =
        item.keywords.map(normalizeText);

      allKeywords.forEach(function (keyword) {

        if (keyword === search) {
          score += 100;
        }

        if (keyword.includes(search)) {
          score += 45;
        }

        words.forEach(function (word) {

          if (
            word.length > 1 &&
            keyword.includes(word)
          ) {
            score += 15;
          }

        });

      });

      if (title.includes(search)) {
        score += 30;
      }

      if (description.includes(search)) {
        score += 10;
      }

      if (score > 0) {

        results.push({
          ...item,
          score: score
        });

      }

    });

    results.sort(function (a, b) {

      return b.score - a.score;

    });

    return results.slice(0, 8);

  }


  /* =======================================================
     CREATE SEARCH ENGINE
  ======================================================= */

  function createSearchEngine() {

    if (
      document.getElementById(
        "dgmkInstagramSearch"
      )
    ) {
      return;
    }

    const section =
      document.createElement("section");

    section.id =
      "dgmkInstagramSearch";

    section.setAttribute(
      "aria-label",
      "Glass Mirror Aluminum Search"
    );

    section.innerHTML = `

      <div class="dgmk-search-container">

        <div class="dgmk-search-heading">

          <div class="dgmk-search-eyebrow">
            DESIGN GLASS & MIRROR KUWAIT
          </div>

          <h2>
            Find Our Glass & Mirror Services
          </h2>

          <p>
            Search glass, mirrors, aluminum,
            shower glass, staircase glass,
            pool glass and more.
          </p>

        </div>


        <div class="dgmk-search-box">

          <input
            id="dgmkSearchInput"
            type="search"
            autocomplete="off"
            placeholder="Search: glass doors, shower glass, mirrors..."
            aria-label="Search glass and mirror services"
          >

          <button
            id="dgmkSearchButton"
            type="button"
          >
            Search
          </button>

        </div>


        <div
          class="dgmk-keywords"
          aria-label="Popular searches"
        >

          <button type="button" data-search="glass kuwait">
            Glass Kuwait
          </button>

          <button type="button" data-search="shower glass">
            Shower Glass
          </button>

          <button type="button" data-search="glass staircase">
            Glass Staircase
          </button>

          <button type="button" data-search="pool glass">
            Pool Glass
          </button>

          <button type="button" data-search="aluminum">
            Aluminum
          </button>

          <button type="button" data-search="led mirrors">
            LED Mirrors
          </button>

          <button type="button" data-search="زجاج سيكوريت">
            زجاج سيكوريت
          </button>

          <button type="button" data-search="مرايا">
            مرايا
          </button>

        </div>


        <div
          id="dgmkSearchResults"
          class="dgmk-search-results"
          aria-live="polite"
        ></div>


        <div class="dgmk-instagram-box">

          <div>

            <strong>
              📷 See our latest work on Instagram
            </strong>

            <span>
              Follow @design_glass_mirror for
              new glass, mirror and aluminum projects.
            </span>

          </div>

          <a
            href="${INSTAGRAM_URL}"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Instagram
          </a>

        </div>

      </div>
    `;


    const contactSection =
      document.getElementById("contact");

    if (contactSection) {

      contactSection.parentNode.insertBefore(
        section,
        contactSection
      );

    } else {

      document
        .querySelector("main")
        ?.appendChild(section);

    }


    addSearchStyles();

    setupSearchEvents();

  }


  /* =======================================================
     SEARCH RESULTS
  ======================================================= */

  function displaySearchResults(query) {

    const resultsBox =
      document.getElementById(
        "dgmkSearchResults"
      );

    if (!resultsBox) return;

    const results =
      searchKeyword(query);

    if (!query.trim()) {

      resultsBox.innerHTML = `
        <div class="dgmk-search-message">
          Search for a service or project above.
        </div>
      `;

      return;

    }


    if (!results.length) {

      resultsBox.innerHTML = `

        <div class="dgmk-no-results">

          <strong>
            No exact result found.
          </strong>

          <p>
            Try:
            <br>
            Glass Kuwait
            <br>
            Shower Glass
            <br>
            Glass Staircase
            <br>
            Pool Glass
            <br>
            Aluminum
            <br>
            LED Mirrors
          </p>

          <div class="dgmk-result-actions">

            <a
              href="${INSTAGRAM_URL}"
              target="_blank"
              rel="noopener noreferrer"
            >
              📷 Search Our Instagram
            </a>

            <a href="${WHATSAPP_URL}" target="_blank">
              💬 Ask on WhatsApp
            </a>

          </div>

        </div>

      `;

      return;

    }


    resultsBox.innerHTML = `

      <div class="dgmk-result-count">

        ${results.length}
        result${results.length === 1 ? "" : "s"}
        found

      </div>

      ${results.map(function (result) {

        return `

          <article class="dgmk-result-card">

            <div>

              <span class="dgmk-result-label">
                ${escapeHTML(result.title)}
              </span>

              <h3>
                ${escapeHTML(result.title)}
              </h3>

              <p>
                ${escapeHTML(result.description)}
              </p>

            </div>

            <div class="dgmk-result-buttons">

              <a
                href="${result.section}"
              >
                View Service
              </a>

              <a
                href="${INSTAGRAM_URL}"
                target="_blank"
                rel="noopener noreferrer"
              >
                📷 Instagram
              </a>

            </div>

          </article>

        `;

      }).join("")}

    `;

  }


  /* =======================================================
     SEARCH EVENTS
  ======================================================= */

  function setupSearchEvents() {

    const input =
      document.getElementById(
        "dgmkSearchInput"
      );

    const button =
      document.getElementById(
        "dgmkSearchButton"
      );

    if (!input || !button) {
      return;
    }


    function runSearch() {

      displaySearchResults(
        input.value
      );

    }


    button.addEventListener(
      "click",
      runSearch
    );


    input.addEventListener(
      "keydown",
      function (event) {

        if (event.key === "Enter") {

          event.preventDefault();

          runSearch();

        }

      }
    );


    input.addEventListener(
      "input",
      function () {

        if (
          input.value.trim().length >= 2
        ) {

          displaySearchResults(
            input.value
          );

        } else {

          displaySearchResults("");

        }

      }
    );


    document
      .querySelectorAll(
        "[data-search]"
      )
      .forEach(function (button) {

        button.addEventListener(
          "click",
          function () {

            const value =
              button.dataset.search;

            input.value =
              value;

            displaySearchResults(
              value
            );

            input.focus();

          }
        );

      });

  }


  /* =======================================================
     CSS FOR SEARCH ENGINE
  ======================================================= */

  function addSearchStyles() {

    if (
      document.getElementById(
        "dgmkSearchStyles"
      )
    ) {
      return;
    }


    const style =
      document.createElement("style");

    style.id =
      "dgmkSearchStyles";


    style.textContent = `

      #dgmkInstagramSearch{
        background:#f6f7f8;
        padding:95px 0;
      }

      .dgmk-search-container{
        width:min(1050px,calc(100% - 40px));
        margin:auto;
      }

      .dgmk-search-heading{
        text-align:center;
        max-width:760px;
        margin:0 auto 35px;
      }

      .dgmk-search-eyebrow{
        font-size:11px;
        letter-spacing:3px;
        font-weight:900;
        color:#777;
        margin-bottom:12px;
      }

      .dgmk-search-heading h2{
        font-size:clamp(34px,5vw,56px);
        line-height:1;
        letter-spacing:-2px;
        margin-bottom:17px;
      }

      .dgmk-search-heading p{
        color:#666;
        font-size:16px;
      }

      .dgmk-search-box{
        display:flex;
        gap:10px;
        background:#fff;
        padding:10px;
        border:1px solid #ddd;
        border-radius:18px;
        box-shadow:0 12px 35px rgba(0,0,0,.07);
      }

      .dgmk-search-box input{
        flex:1;
        min-width:0;
        border:0;
        outline:0;
        padding:15px 17px;
        font:inherit;
        font-size:15px;
        background:transparent;
      }

      .dgmk-search-box button{
        border:0;
        background:#111;
        color:#fff;
        padding:0 25px;
        border-radius:12px;
        font-weight:900;
        cursor:pointer;
      }

      .dgmk-search-box button:hover{
        background:#333;
      }

      .dgmk-keywords{
        display:flex;
        justify-content:center;
        flex-wrap:wrap;
        gap:8px;
        margin:20px 0 30px;
      }

      .dgmk-keywords button{
        border:1px solid #ddd;
        background:#fff;
        color:#333;
        border-radius:999px;
        padding:9px 14px;
        cursor:pointer;
        font-size:12px;
        font-weight:800;
      }

      .dgmk-keywords button:hover{
        border-color:#111;
        background:#111;
        color:#fff;
      }

      .dgmk-search-results{
        display:grid;
        gap:12px;
      }

      .dgmk-search-message{
        text-align:center;
        color:#888;
        padding:20px;
      }

      .dgmk-result-count{
        font-size:12px;
        font-weight:900;
        color:#777;
        text-transform:uppercase;
        letter-spacing:1px;
      }

      .dgmk-result-card{
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:25px;
        padding:25px;
        background:#fff;
        border:1px solid #e5e5e5;
        border-radius:18px;
        box-shadow:0 7px 22px rgba(0,0,0,.04);
      }

      .dgmk-result-label{
        color:#999;
        text-transform:uppercase;
        letter-spacing:1.5px;
        font-size:9px;
        font-weight:900;
      }

      .dgmk-result-card h3{
        font-size:21px;
        margin:5px 0;
      }

      .dgmk-result-card p{
        color:#777;
        font-size:13px;
        margin:0;
      }

      .dgmk-result-buttons{
        display:flex;
        flex-wrap:wrap;
        gap:8px;
        flex:none;
      }

      .dgmk-result-buttons a{
        display:inline-flex;
        align-items:center;
        justify-content:center;
        padding:10px 14px;
        border-radius:10px;
        background:#111;
        color:#fff;
        font-size:11px;
        font-weight:900;
        white-space:nowrap;
      }

      .dgmk-result-buttons a:last-child{
        background:#f1f1f1;
        color:#111;
        border:1px solid #ddd;
      }

      .dgmk-no-results{
        text-align:center;
        background:#fff;
        border:1px solid #e5e5e5;
        border-radius:18px;
        padding:35px 20px;
        color:#666;
      }

      .dgmk-no-results strong{
        color:#111;
        font-size:19px;
      }

      .dgmk-no-results p{
        line-height:1.9;
        margin:15px 0;
      }

      .dgmk-result-actions{
        display:flex;
        justify-content:center;
        flex-wrap:wrap;
        gap:10px;
      }

      .dgmk-result-actions a{
        display:inline-flex;
        padding:12px 18px;
        border-radius:10px;
        background:#111;
        color:#fff;
        font-weight:900;
        font-size:12px;
      }

      .dgmk-instagram-box{
        margin-top:25px;
        padding:25px;
        background:#111;
        color:#fff;
        border-radius:20px;
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:20px;
      }

      .dgmk-instagram-box strong{
        display:block;
        font-size:17px;
        margin-bottom:5px;
      }

      .dgmk-instagram-box span{
        display:block;
        color:#aaa;
        font-size:12px;
      }

      .dgmk-instagram-box a{
        background:#fff;
        color:#111;
        padding:12px 18px;
        border-radius:10px;
        font-size:12px;
        font-weight:900;
        white-space:nowrap;
      }

      @media(max-width:650px){

        #dgmkInstagramSearch{
          padding:70px 0;
        }

        .dgmk-search-container{
          width:min(100% - 28px,1050px);
        }

        .dgmk-search-box{
          flex-direction:column;
          padding:8px;
        }

        .dgmk-search-box button{
          min-height:48px;
        }

        .dgmk-result-card{
          flex-direction:column;
          align-items:flex-start;
        }

        .dgmk-result-buttons{
          width:100%;
        }

        .dgmk-result-buttons a{
          flex:1;
        }

        .dgmk-instagram-box{
          flex-direction:column;
          align-items:flex-start;
        }

        .dgmk-instagram-box a{
          width:100%;
          text-align:center;
        }

      }

    `;


    document.head.appendChild(style);

  }


  /* =======================================================
     ESCAPE HTML
  ======================================================= */

  function escapeHTML(value) {

    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  }


  /* =======================================================
     ADD INSTAGRAM SEO META
  ======================================================= */

  function addInstagramMetadata() {

    const existing =
      document.querySelector(
        'meta[name="instagram-profile"]'
      );

    if (existing) {
      return;
    }

    const meta =
      document.createElement("meta");

    meta.name =
      "instagram-profile";

    meta.content =
      INSTAGRAM_URL;

    document.head.appendChild(meta);

  }


  /* =======================================================
     START ENGINE
  ======================================================= */

  function startEngine() {

    createSearchEngine();

    addInstagramMetadata();

  }


  if (
    document.readyState === "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      startEngine
    );

  } else {

    startEngine();

  }


})();
