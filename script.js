```javascript
/* =========================================================
   DESIGN GLASS & MIRROR KUWAIT
   WEBSITE CONTROL SCRIPT
========================================================= */


/* =========================================================
   SETTINGS
========================================================= */

const ADMIN_PASSWORD = "1234";

let currentLanguage = localStorage.getItem("siteLanguage") || "en";

let heroBackgrounds =
    JSON.parse(localStorage.getItem("heroBackgrounds") || "[]");

let addedGalleryImages =
    JSON.parse(localStorage.getItem("addedGalleryImages") || "[]");

let addedVideos =
    JSON.parse(localStorage.getItem("addedVideos") || "[]");

let currentHeroIndex = 0;
let heroTimer = null;


/* =========================================================
   PAGE START
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    setupGalleryLightbox();

    loadHeroBackgrounds();

    loadAddedGalleryImages();

    loadAddedVideos();

    applyLanguage();

    setupEditableFields();

    updateAdminDisplay();

});


/* =========================================================
   MOBILE MENU
========================================================= */

function toggleMobileMenu() {

    const nav = document.getElementById("mainNav");

    const button = document.querySelector(".menu-toggle");

    if (!nav) return;

    nav.classList.toggle("mobile-open");

    if (button) {

        const isOpen = nav.classList.contains("mobile-open");

        button.setAttribute("aria-expanded", isOpen ? "true" : "false");

    }

}


/* Close mobile menu after clicking a link */

document.addEventListener("click", function (event) {

    if (event.target.matches("#mainNav a")) {

        const nav = document.getElementById("mainNav");

        if (nav) {

            nav.classList.remove("mobile-open");

        }

    }

});


/* =========================================================
   ADMIN LOGIN
========================================================= */

function openLogin() {

    const overlay = document.getElementById("loginOverlay");

    if (!overlay) return;

    overlay.classList.add("show");

    const password = document.getElementById("adminPassword");

    if (password) {

        password.value = "";

        setTimeout(function () {

            password.focus();

        }, 100);

    }

}


function closeLogin() {

    const overlay = document.getElementById("loginOverlay");

    if (!overlay) return;

    overlay.classList.remove("show");

}


function loginAdmin() {

    const passwordInput =
        document.getElementById("adminPassword");

    if (!passwordInput) return;

    const password = passwordInput.value;

    if (password === ADMIN_PASSWORD) {

        localStorage.setItem("adminLoggedIn", "true");

        closeLogin();

        updateAdminDisplay();

        alert("Admin Edit Mode is now ON.");

    } else {

        alert("Incorrect password.");

        passwordInput.value = "";

        passwordInput.focus();

    }

}


function logoutAdmin() {

    localStorage.removeItem("adminLoggedIn");

    updateAdminDisplay();

    alert("Edit Mode closed.");

}


function updateAdminDisplay() {

    const loggedIn =
        localStorage.getItem("adminLoggedIn") === "true";

    document.body.classList.toggle("admin-mode", loggedIn);

}


/* =========================================================
   EDITABLE TEXT
========================================================= */

function setupEditableFields() {

    const editableElements =
        document.querySelectorAll(".editable");

    editableElements.forEach(function (element) {

        const key = element.dataset.key;

        if (!key) return;

        const saved =
            localStorage.getItem("text_" + key);

        if (saved !== null) {

            element.innerHTML = saved;

        }

        element.addEventListener("click", function () {

            if (
                localStorage.getItem("adminLoggedIn") !== "true"
            ) {
                return;
            }

            const newText =
                prompt(
                    "Edit this text:",
                    element.innerText
                );

            if (newText !== null) {

                element.innerText = newText;

                localStorage.setItem(
                    "text_" + key,
                    newText
                );

            }

        });

    });

}


/* =========================================================
   SAVE ALL
========================================================= */

function saveAll() {

    alert(
        "Your website changes have been saved on this browser."
    );

}


/* =========================================================
   RESET WEBSITE
========================================================= */

function resetWebsite() {

    const confirmReset =
        confirm(
            "Are you sure you want to reset the saved website changes?"
        );

    if (!confirmReset) return;

    const keys = [];

    for (let i = 0; i < localStorage.length; i++) {

        keys.push(localStorage.key(i));

    }

    keys.forEach(function (key) {

        if (
            key.startsWith("text_") ||
            key === "heroBackgrounds" ||
            key === "addedGalleryImages" ||
            key === "addedVideos"
        ) {

            localStorage.removeItem(key);

        }

    });

    location.reload();

}


/* =========================================================
   LANGUAGE
========================================================= */

const translations = {

    en: {

        navHome: "Home",
        navAbout: "About",
        navServices: "Services",
        navGallery: "Gallery",
        navVideos: "Videos",
        navWhy: "Why Us",
        navContact: "Contact",

        callNow: "📞 Call Now",
        whatsapp: "💬 WhatsApp",

        saveChanges: "💾 Save Changes",
        closeEdit: "🔒 Close Edit",
        reset: "Reset",

        aboutLabel: "ABOUT US",
        servicesLabel: "WHAT WE DO",
        galleryLabel: "OUR WORK",
        videosLabel: "OUR PROJECTS",
        whyLabel: "WHY CHOOSE US",
        contactLabel: "GET IN TOUCH",

        phoneLabel: "PHONE",
        whatsappLabel: "WHATSAPP",
        emailLabel: "EMAIL",
        locationLabel: "LOCATION",

        quoteTitle: "Request a Quote",
        quoteText:
            "Tell us about your glass or mirror project.",

        namePlaceholder: "Your Name",
        phonePlaceholder: "Phone Number",
        messagePlaceholder:
            "Tell us about your project...",

        sendQuote:
            "Send Request on WhatsApp",

        instagramLabel: "FOLLOW OUR WORK",

        followInstagram:
            "📷 Follow Design Glass & Mirror",

        footerText:
            "Professional Glass & Mirror Solutions in Kuwait",

        footerCall: "📞 Call",
        footerWhatsApp: "💬 WhatsApp",
        footerEmail: "✉ Email",
        footerInstagram: "📷 Instagram",

        copyright:
            "© 2026 Design Glass & Mirror Kuwait. All Rights Reserved.",

        adminLoginTitle: "🔐 Admin Login",

        adminLoginText:
            "Enter your password to edit the website.",

        passwordPlaceholder: "Admin Password",

        loginEdit: "Login & Edit",

        cancel: "Cancel",

        backgroundEditorTitle:
            "🖼️ Website Background Slideshow",

        backgroundEditorNote:
            "Select several pictures at once. They will automatically change every 5 seconds.",

        videoEditorTitle:
            "🎥 Project Videos Editor",

        videoEditorNote:
            "You can add videos from your computer while in Edit Mode."

    },

    ar: {

        navHome: "الرئيسية",
        navAbout: "من نحن",
        navServices: "خدماتنا",
        navGallery: "المعرض",
        navVideos: "الفيديوهات",
        navWhy: "لماذا نحن",
        navContact: "اتصل بنا",

        callNow: "📞 اتصل الآن",
        whatsapp: "💬 واتساب",

        saveChanges: "💾 حفظ التغييرات",
        closeEdit: "🔒 إغلاق التعديل",
        reset: "إعادة ضبط",

        aboutLabel: "من نحن",
        servicesLabel: "ماذا نقدم",
        galleryLabel: "أعمالنا",
        videosLabel: "مشاريعنا",
        whyLabel: "لماذا تختارنا",
        contactLabel: "تواصل معنا",

        phoneLabel: "الهاتف",
        whatsappLabel: "واتساب",
        emailLabel: "البريد الإلكتروني",
        locationLabel: "الموقع",

        quoteTitle: "طلب عرض سعر",
        quoteText:
            "أخبرنا عن مشروع الزجاج أو المرايا الخاص بك.",

        namePlaceholder: "اسمك",
        phonePlaceholder: "رقم الهاتف",
        messagePlaceholder:
            "أخبرنا عن مشروعك...",

        sendQuote:
            "إرسال الطلب عبر واتساب",

        instagramLabel:
            "تابع أعمالنا",

        followInstagram:
            "📷 تابع Design Glass & Mirror",

        footerText:
            "حلول احترافية للزجاج والمرايا في الكويت",

        footerCall: "📞 اتصال",
        footerWhatsApp: "💬 واتساب",
        footerEmail: "✉ البريد الإلكتروني",
        footerInstagram: "📷 إنستغرام",

        copyright:
            "© 2026 Design Glass & Mirror Kuwait. جميع الحقوق محفوظة.",

        adminLoginTitle: "🔐 دخول المدير",

        adminLoginText:
            "أدخل كلمة المرور لتعديل الموقع.",

        passwordPlaceholder:
            "كلمة مرور المدير",

        loginEdit:
            "دخول وتعديل",

        cancel:
            "إلغاء",

        backgroundEditorTitle:
            "🖼️ خلفية الموقع",

        backgroundEditorNote:
            "اختر عدة صور وسيتم تغيير الخلفية تلقائياً كل 5 ثوانٍ.",

        videoEditorTitle:
            "🎥 محرر فيديوهات المشاريع",

        videoEditorNote:
            "يمكنك إضافة فيديوهات من جهازك أثناء وضع التعديل."

    }

};


function toggleLanguage() {

    currentLanguage =
        currentLanguage === "en"
            ? "ar"
            : "en";

    localStorage.setItem(
        "siteLanguage",
        currentLanguage
    );

    applyLanguage();

}


function applyLanguage() {

    const lang =
        translations[currentLanguage];

    if (!lang) return;

    document.documentElement.lang =
        currentLanguage;

    document.documentElement.dir =
        currentLanguage === "ar"
            ? "rtl"
            : "ltr";


    document
        .querySelectorAll("[data-i18n]")
        .forEach(function (element) {

            const key =
                element.dataset.i18n;

            if (lang[key]) {

                element.textContent =
                    lang[key];

            }

        });


    document
        .querySelectorAll("[data-placeholder-i18n]")
        .forEach(function (element) {

            const key =
                element.dataset.placeholderI18n;

            if (lang[key]) {

                element.placeholder =
                    lang[key];

            }

        });


    const languageButton =
        document.getElementById("languageToggle");

    if (languageButton) {

        languageButton.textContent =
            currentLanguage === "en"
                ? "العربية"
                : "English";

    }

}


/* =========================================================
   HERO BACKGROUND
========================================================= */

function changeBackground(event) {

    const files =
        Array.from(event.target.files || []);

    if (!files.length) return;


    let completed = 0;

    files.forEach(function (file) {

        if (!file.type.startsWith("image/")) {

            completed++;

            return;

        }

        const reader =
            new FileReader();

        reader.onload = function (e) {

            heroBackgrounds.push(
                e.target.result
            );

            completed++;

            if (completed === files.length) {

                localStorage.setItem(
                    "heroBackgrounds",
                    JSON.stringify(heroBackgrounds)
                );

                loadHeroBackgrounds();

                alert(
                    "Hero background pictures added."
                );

            }

        };

        reader.readAsDataURL(file);

    });

}


function loadHeroBackgrounds() {

    const hero =
        document.querySelector(".hero");

    if (!hero) return;


    if (
        !heroBackgrounds ||
        heroBackgrounds.length === 0
    ) {

        hero.style.backgroundImage = `
            linear-gradient(
                rgba(4,30,55,0.48),
                rgba(8,72,115,0.48)
            ),
            linear-gradient(
                135deg,
                #0ea5e9,
                #123b70
            )
        `;

        updateHeroBackgroundList();

        return;

    }


    currentHeroIndex = 0;

    showHeroBackground();

    clearInterval(heroTimer);

    if (heroBackgrounds.length > 1) {

        heroTimer =
            setInterval(
                nextHeroBackground,
                5000
            );

    }

    updateHeroBackgroundList();

}


function showHeroBackground() {

    const hero =
        document.querySelector(".hero");

    if (!hero) return;

    const image =
        heroBackgrounds[currentHeroIndex];

    if (!image) return;


    hero.style.backgroundImage = `
        linear-gradient(
            rgba(4,30,55,0.42),
            rgba(8,72,115,0.42)
        ),
        url("${image}")
    `;

    hero.style.backgroundSize = "cover";

    hero.style.backgroundPosition = "center center";

    hero.style.backgroundRepeat = "no-repeat";

}


function nextHeroBackground() {

    if (!heroBackgrounds.length) return;

    currentHeroIndex =
        (currentHeroIndex + 1)
        % heroBackgrounds.length;

    showHeroBackground();

}


function removeAllHeroBackgrounds() {

    const confirmRemove =
        confirm(
            "Remove all custom hero background pictures?"
        );

    if (!confirmRemove) return;

    heroBackgrounds = [];

    localStorage.removeItem(
        "heroBackgrounds"
    );

    clearInterval(heroTimer);

    loadHeroBackgrounds();

}


/* =========================================================
   SHOW HERO BACKGROUND LIST
========================================================= */

function updateHeroBackgroundList() {

    const list =
        document.getElementById(
            "heroBackgroundList"
        );

    if (!list) return;


    list.innerHTML = "";


    if (!heroBackgrounds.length) {

        list.innerHTML = `
            <div class="hero-bg-empty">
                No custom Hero background pictures added yet.
            </div>
        `;

        return;

    }


    heroBackgrounds.forEach(
        function (image, index) {

            const item =
                document.createElement("div");

            item.className =
                "hero-bg-preview";

            item.innerHTML = `
                <img
                    src="${image}"
                    alt="Hero background ${index + 1}"
                >

                <span>
                    Background ${index + 1}
                </span>
            `;

            list.appendChild(item);

        }
    );

}


/* =========================================================
   GALLERY
========================================================= */

function addGalleryImages(event) {

    const files =
        Array.from(event.target.files || []);

    if (!files.length) return;


    let completed = 0;

    files.forEach(function (file) {

        if (!file.type.startsWith("image/")) {

            completed++;

            return;

        }

        const reader =
            new FileReader();

        reader.onload = function (e) {

            addedGalleryImages.push(
                e.target.result
            );

            completed++;

            if (completed === files.length) {

                localStorage.setItem(
                    "addedGalleryImages",
                    JSON.stringify(
                        addedGalleryImages
                    )
                );

                loadAddedGalleryImages();

                alert(
                    "Gallery pictures added."
                );

            }

        };

        reader.readAsDataURL(file);

    });

}


function loadAddedGalleryImages() {

    const grid =
        document.getElementById(
            "galleryGrid"
        );

    if (!grid) return;


    document
        .querySelectorAll(
            ".added-gallery-card"
        )
        .forEach(function (card) {

            card.remove();

        });


    addedGalleryImages.forEach(
        function (image, index) {

            const card =
                document.createElement("div");

            card.className =
                "gallery-card added-gallery-card";

            card.innerHTML = `
                <img
                    src="${image}"
                    alt="Glass and mirror project ${index + 1}"
                    loading="lazy"
                >

                <div class="gallery-caption">
                    Glass & Mirror Project
                </div>
            `;

            grid.appendChild(card);

        }
    );


    setupGalleryLightbox();

}


/* =========================================================
   REMOVE ADDED GALLERY
========================================================= */

function removeAddedGallery() {

    const confirmRemove =
        confirm(
            "Remove the gallery pictures that were added from Edit Mode?"
        );

    if (!confirmRemove) return;

    addedGalleryImages = [];

    localStorage.removeItem(
        "addedGalleryImages"
    );

    loadAddedGalleryImages();

}


/* =========================================================
   GALLERY LIGHTBOX
========================================================= */

function setupGalleryLightbox() {

    document
        .querySelectorAll(
            "#galleryGrid img"
        )
        .forEach(function (image) {

            image.onclick = function (event) {

                event.stopPropagation();

                openLightbox(
                    image.src,
                    image.alt
                );

            };

        });

}


function openLightbox(src, alt) {

    const lightbox =
        document.getElementById(
            "lightbox"
        );

    const image =
        document.getElementById(
            "lightboxImage"
        );

    if (!lightbox || !image) return;

    image.src = src;

    image.alt =
        alt || "Glass project";

    lightbox.classList.add("show");

    document.body.style.overflow =
        "hidden";

}


function closeLightbox() {

    const lightbox =
        document.getElementById(
            "lightbox"
        );

    if (!lightbox) return;

    lightbox.classList.remove("show");

    document.body.style.overflow =
        "";

}


/* =========================================================
   VIDEOS
========================================================= */

function addVideos(event) {

    const files =
        Array.from(event.target.files || []);

    if (!files.length) return;


    let completed = 0;

    files.forEach(function (file) {

        if (!file.type.startsWith("video/")) {

            completed++;

            return;

        }


        const reader =
            new FileReader();

        reader.onload = function (e) {

            addedVideos.push({
                name: file.name,
                data: e.target.result
            });

            completed++;


            if (completed === files.length) {

                localStorage.setItem(
                    "addedVideos",
                    JSON.stringify(
                        addedVideos
                    )
                );

                loadAddedVideos();

                alert(
                    "Project videos added."
                );

            }

        };

        reader.readAsDataURL(file);

    });

}


function loadAddedVideos() {

    const grid =
        document.getElementById(
            "videoGrid"
        );

    if (!grid) return;


    document
        .querySelectorAll(
            ".added-video-card"
        )
        .forEach(function (video) {

            video.remove();

        });


    const empty =
        document.getElementById(
            "videoEmpty"
        );


    if (
        addedVideos.length > 0 &&
        empty
    ) {

        empty.style.display =
            "none";

    } else if (empty) {

        empty.style.display =
            "flex";

    }


    addedVideos.forEach(
        function (video) {

            const card =
                document.createElement("div");

            card.className =
                "video-card added-video-card";


            card.innerHTML = `
                <video
                    controls
                    preload="metadata"
                >
                    <source
                        src="${video.data}"
                    >
                    Your browser does not support video.
                </video>

                <div class="video-caption">
                    ${escapeHTML(video.name)}
                </div>
            `;


            grid.appendChild(card);

        }
    );

}


function removeAddedVideos() {

    const confirmRemove =
        confirm(
            "Remove all videos added from Edit Mode?"
        );

    if (!confirmRemove) return;


    addedVideos = [];

    localStorage.removeItem(
        "addedVideos"
    );

    loadAddedVideos();

}


/* =========================================================
   WHATSAPP QUOTE FORM
========================================================= */

function sendWhatsApp(event) {

    event.preventDefault();


    const name =
        document.getElementById(
            "customerName"
        )?.value.trim();


    const phone =
        document.getElementById(
            "customerPhone"
        )?.value.trim();


    const message =
        document.getElementById(
            "customerMessage"
        )?.value.trim();


    if (!name || !phone || !message) {

        alert(
            "Please complete all fields."
        );

        return;

    }


    const text =
        `Hello Design Glass & Mirror Kuwait,

Name: ${name}

Phone: ${phone}

Project:
${message}`;


    const whatsappURL =
        "https://wa.me/96555507290?text="
        +
        encodeURIComponent(text);


    window.open(
        whatsappURL,
        "_blank"
    );

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeLightbox();

            closeLogin();

        }

    }
);


/* =========================================================
   OLD CONTACT ALERT REMOVED
=========================================================

The old code:

document.querySelector("button").addEventListener(...)

was removed because it attached the message to the
wrong button on the website.

The Request a Quote form now sends the customer
directly to WhatsApp.
========================================================= */
```
