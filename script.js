/* =========================================================
   WEB FOR ALL - shared features (loaded on every page)
   ========================================================= */

/* ---------- Saved settings (safe if storage is blocked) ---------- */
function loadSetting(key, fallback) {
    try {
        const value = localStorage.getItem(key);
        return value === null ? fallback : value;
    } catch (error) {
        return fallback;
    }
}

function saveSetting(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (error) {
        /* storage blocked: the setting just won't be remembered */
    }
}

/* ---------- Filipino translations ---------- */
const TRANSLATIONS = {
    "Home": "Tahanan",
    "About": "Tungkol",
    "Contact": "Kontak",
    "Read Aloud": "Basahin Nang Malakas",
    "© 2026 Web For All. Digital Accessibility for Everyone.": "© 2026 Web For All. Digital Accessibility para sa Lahat.",
    "Contact Us": "Makipag-ugnayan sa Amin",
    "Back": "Bumalik",
    "Everyday Example": "Pang-araw-araw na Halimbawa",
    "Key Takeaway": "Pangunahing Aral",
    "Start Activity": "Simulan ang Aktibidad",
    "About Us | Web For All": "Tungkol Sa Amin | Web For All",
    "Accessibility Guide | Web For All": "Gabay sa Accessibility | Web For All",
    "Contact | Web For All": "Kontak | Web For All",
    "Congratulations | Web For All": "Binabati Kita | Web For All",
    "Word Puzzle | Web For All": "Palaisipan ng Salita | Web For All",
    "About Us": "Tungkol Sa Amin",
    "Who We Are?": "Sino Kami?",
    "Web For All is a student-created educational website that promotes digital accessibility and inclusion. We want to make accessibility easier to understand through simple explanations, practical examples, and interactive learning activities.": "Ang Web For All ay isang pang-edukasyong website na ginawa ng mga mag-aaral upang itaguyod ang digital accessibility at pagiging inklusibo. Nais naming gawing mas madaling maunawaan ang accessibility sa pamamagitan ng simpleng paliwanag, praktikal na halimbawa, at interaktibong mga gawaing pampagkatuto.",
    "Our Vision": "Aming Bisyon",
    "A digital world where people can access information and opportunities without unnecessary barriers, regardless of their abilities.": "Isang digital na mundo kung saan maaaring ma-access ng lahat ang impormasyon at mga oportunidad nang walang hindi kinakailangang hadlang, anuman ang kanilang kakayahan.",
    "Our Mission": "Aming Misyon",
    "To raise awareness about digital accessibility and encourage thoughtful website design through easy-to-follow guides and learning activities.": "Upang magpalaganap ng kamalayan tungkol sa digital accessibility at hikayatin ang maalalahaning disenyo ng website sa pamamagitan ng madaling sundang mga gabay at gawaing pampagkatuto.",
    "Core Values": "Mga Pangunahing Pagpapahalaga",
    "Inclusivity — Making space for different needs and experiences.": "Pagiging Inklusibo — Pagbibigay ng espasyo para sa iba't ibang pangangailangan at karanasan.",
    "Equality — Supporting fair access to online information.": "Pagkakapantay-pantay — Pagsuporta sa patas na access sa impormasyon online.",
    "Empathy — Considering the challenges others may face.": "Empatiya — Pagsasaalang-alang sa mga hamong maaaring harapin ng iba.",
    "Responsibility — Making ethical choices when designing technology.": "Responsibilidad — Paggawa ng etikal na pagpapasya sa pagdidisenyo ng teknolohiya.",
    "Continuous Learning — Staying open to better and more accessible solutions.": "Patuloy na Pagkatuto — Pananatiling bukas sa mas mahusay at mas accessible na mga solusyon.",
    "Welcome to Accessibility Guide": "Maligayang Pagdating sa Gabay sa Accessibility",
    "Digital accessibility means making websites, apps, and online information usable by people with different abilities. People do not all browse the internet in the same way. Some use screen readers, captions, keyboards, voice controls, or simpler page layouts. This guide introduces four areas of accessibility. Choose a topic to learn about common barriers and practical ways to reduce them.": "Ang digital accessibility ay ang paggawa ng mga website, app, at impormasyon online na magagamit ng mga taong may iba't ibang kakayahan. Hindi pare-pareho ang paraan ng lahat sa pag-browse ng internet. May gumagamit ng screen reader, captions, keyboard, voice control, o mas simpleng layout ng pahina. Ipinapakilala ng gabay na ito ang apat na larangan ng accessibility. Pumili ng paksa upang malaman ang karaniwang mga hadlang at praktikal na paraan upang mabawasan ang mga ito.",
    "Visual Accessibility Guide": "Gabay sa Visual Accessibility",
    "Making text, images, and page layouts easier to understand for people with different visual needs.": "Paggawa ng teksto, larawan, at layout ng pahina na mas madaling maunawaan ng mga taong may iba't ibang pangangailangan sa paningin.",
    "Hearing Accessibility Guide": "Gabay sa Hearing Accessibility",
    "Providing captions, transcripts, and visual information so important content does not depend on sound.": "Pagbibigay ng captions, transcript, at biswal na impormasyon upang ang mahahalagang nilalaman ay hindi nakasalalay sa tunog.",
    "Physical Accessibility Guide": "Gabay sa Physical Accessibility",
    "Supporting keyboard navigation and different ways of interacting with a website.": "Pagsuporta sa pag-navigate gamit ang keyboard at sa iba't ibang paraan ng paggamit ng website.",
    "Cognitive Accessibility Guide": "Gabay sa Cognitive Accessibility",
    "Using clear language, familiar layouts, and simple instructions to reduce confusion.": "Paggamit ng malinaw na wika, pamilyar na layout, at simpleng panuto upang mabawasan ang kalituhan.",
    "Keeping Online Experiences Clear and Simple": "Panatilihing Malinaw at Simple ang mga Karanasan Online",
    "A website can be difficult to use when instructions are confusing, pages are crowded, or important buttons keep moving. Cognitive accessibility helps people who may have difficulties with attention, memory, reading, or processing information. Clear design also makes things easier for everyone.": "Maaaring maging mahirap gamitin ang isang website kapag nakalilito ang mga panuto, siksik ang mga pahina, o palipat-lipat ang mahahalagang button. Tinutulungan ng cognitive accessibility ang mga taong maaaring nahihirapan sa atensyon, memorya, pagbabasa, o pagproseso ng impormasyon. Ang malinaw na disenyo ay nagpapadali rin ng mga bagay para sa lahat.",
    "Write in plain language": "Sumulat sa simpleng wika",
    "Use familiar words and short sentences. Explain technical terms when they are needed.": "Gumamit ng pamilyar na mga salita at maiikling pangungusap. Ipaliwanag ang mga teknikal na termino kapag kinakailangan.",
    "Organize content into sections": "Ayusin ang nilalaman sa mga seksyon",
    "Headings, short paragraphs, and logical steps make information easier to follow.": "Ang mga heading, maiikling talata, at lohikal na mga hakbang ay nagpapadali sa pagsunod sa impormasyon.",
    "Keep navigation consistent": "Panatilihing pare-pareho ang nabigasyon",
    "Use familiar menus and keep important controls in predictable places.": "Gumamit ng pamilyar na mga menu at ilagay ang mahahalagang kontrol sa mga inaasahang lugar.",
    "Explain tasks clearly": "Ipaliwanag nang malinaw ang mga gawain",
    "Tell users what they need to do, one step at a time.": "Sabihin sa mga gumagamit kung ano ang kailangan nilang gawin, isang hakbang sa bawat pagkakataon.",
    "Make errors easy to fix": "Gawing madaling ayusin ang mga error",
    "Instead of saying “Invalid input,” explain what went wrong and how to correct it.": "Sa halip na sabihing “Invalid input,” ipaliwanag kung ano ang nagkamali at kung paano ito itatama.",
    "A form that says “Please enter a valid email address, such as name@example.com” is more helpful than one that only says “Error.”": "Mas nakatutulong ang form na nagsasabing “Maglagay ng wastong email address, tulad ng name@example.com” kaysa sa form na “Error” lamang ang sinasabi.",
    "Cognitive accessibility helps people understand information and complete tasks with less confusion.": "Tinutulungan ng cognitive accessibility ang mga tao na maunawaan ang impormasyon at makumpleto ang mga gawain nang may mas kaunting kalituhan.",
    "Send Us a Message": "Magpadala ng Mensahe",
    "We Would Love to Hear From You": "Gusto Naming Marinig ang Inyong Saloobin",
    "Have a question, suggestion, or idea about digital accessibility? We welcome feedback that can help make Web For All more useful and easier to understand.": "May tanong, mungkahi, o ideya tungkol sa digital accessibility? Malugod naming tinatanggap ang puna na makatutulong upang maging mas kapaki-pakinabang at mas madaling maunawaan ang Web For All.",
    "Message Form": "Form ng Mensahe",
    "Message:": "Mensahe:",
    "Send Message": "Ipadala ang Mensahe",
    "Making Information Available Beyond Sound": "Gawing Magagamit ang Impormasyon Higit sa Tunog",
    "Videos, online lessons, and alerts often use sound to share important information. But not everyone can hear audio clearly, and some people browse with their sound turned off. Hearing accessibility provides other ways to follow along.": "Madalas gumagamit ng tunog ang mga video, online na aralin, at alerto upang magbahagi ng mahalagang impormasyon. Ngunit hindi lahat ay malinaw na nakaririnig ng audio, at may mga taong nagba-browse nang naka-off ang tunog. Nagbibigay ang hearing accessibility ng ibang paraan upang makasabay.",
    "Add accurate captions": "Magdagdag ng tumpak na captions",
    "Captions show spoken words and meaningful sounds in videos. They help viewers follow the content without relying on audio.": "Ipinapakita ng captions ang mga binibigkas na salita at makabuluhang tunog sa mga video. Tinutulungan nito ang mga manonood na masundan ang nilalaman nang hindi umaasa sa audio.",
    "Provide transcripts": "Magbigay ng transcript",
    "A transcript gives users a written version of audio content that they can read at their own pace.": "Ang transcript ay nagbibigay sa mga gumagamit ng nakasulat na bersyon ng audio na maaari nilang basahin sa sarili nilang bilis.",
    "Use visual notifications": "Gumamit ng biswal na notipikasyon",
    "Important alerts should appear on the screen instead of being communicated through sound alone.": "Dapat lumitaw sa screen ang mahahalagang alerto sa halip na ipaalam sa pamamagitan ng tunog lamang.",
    "Offer accessible media controls": "Mag-alok ng accessible na kontrol sa media",
    "Give users a way to pause, replay, and control media whenever possible.": "Bigyan ang mga gumagamit ng paraan upang i-pause, ulitin, at kontrolin ang media hangga't maaari.",
    "Make instructions available in text": "Ilagay sa teksto ang mga panuto",
    "Do not rely only on spoken directions. Written instructions help more people understand the next step.": "Huwag umasa lamang sa mga binibigkas na direksyon. Mas maraming tao ang natutulungan ng nakasulat na panuto upang maunawaan ang susunod na hakbang.",
    "An online lesson with accurate captions allows students to follow the discussion even when they cannot hear the video.": "Ang online na aralin na may tumpak na captions ay nagbibigay-daan sa mga estudyante na masundan ang talakayan kahit hindi nila marinig ang video.",
    "Hearing accessibility makes information easier to follow by offering visual and written alternatives to sound.": "Pinadadali ng hearing accessibility ang pagsunod sa impormasyon sa pamamagitan ng pag-aalok ng biswal at nakasulat na alternatibo sa tunog.",
    "Making the Digital World Accessible for Everyone": "Ginagawang Accessible ang Digital na Mundo para sa Lahat",
    "Welcome to the Accessibility Guide This page will help you understand how digital accessibility makes websites and technology easier to use for everyone. People have different abilities and ways of using technology. Some may have difficulty seeing, hearing, moving, or understanding information. Through accessible design and helpful features, we can make digital experiences easier and more inclusive": "Maligayang pagdating sa Gabay sa Accessibility. Tutulungan ka ng pahinang ito na maunawaan kung paano nagiging mas madaling gamitin ang mga website at teknolohiya para sa lahat dahil sa digital accessibility. Magkakaiba ang kakayahan at paraan ng bawat tao sa paggamit ng teknolohiya. Maaaring nahihirapan ang ilan sa pagtingin, pakikinig, paggalaw, o pag-unawa ng impormasyon. Sa pamamagitan ng accessible na disenyo at kapaki-pakinabang na mga tampok, magagawa nating mas madali at mas inklusibo ang mga digital na karanasan.",
    "Configure Settings": "I-configure ang mga Setting",
    "Everyone uses technology differently. Explore the available settings and see how options such as text size, language, and display preferences can make a website more comfortable to use.": "Magkakaiba ang paraan ng bawat isa sa paggamit ng teknolohiya. Subukan ang mga available na setting at tingnan kung paano nagiging mas komportableng gamitin ang isang website sa tulong ng mga opsyon tulad ng laki ng teksto, wika, at mga kagustuhan sa display.",
    "Select Language": "Pumili ng Wika",
    "Adjust Font Size": "Ayusin ang Laki ng Font",
    "Toggle Dark Mode": "I-toggle ang Dark Mode",
    "Proceed to Accessibility Guide Page": "Magpatuloy sa Pahina ng Gabay sa Accessibility",
    "Making Websites Easier to Navigate": "Gawing Mas Madaling I-navigate ang mga Website",
    "Some people cannot comfortably use a mouse or touchscreen. They may prefer a keyboard, voice control, switches, or other assistive tools. Physical accessibility makes it possible to interact with a website in different ways.": "Hindi komportableng makagamit ng mouse o touchscreen ang ilang tao. Maaaring mas gusto nila ang keyboard, voice control, switch, o iba pang assistive tool. Dahil sa physical accessibility, posibleng gamitin ang isang website sa iba't ibang paraan.",
    "Support keyboard navigation": "Suportahan ang nabigasyon gamit ang keyboard",
    "Important links, buttons, and forms should work without requiring a mouse.": "Dapat gumana ang mahahalagang link, button, at form nang hindi nangangailangan ng mouse.",
    "Show keyboard focus clearly": "Ipakita nang malinaw ang keyboard focus",
    "When someone presses Tab, they should be able to see which button or link is currently selected.": "Kapag pinindot ang Tab, dapat makita kung aling button o link ang kasalukuyang napili.",
    "Make controls easy to use": "Gawing madaling gamitin ang mga kontrol",
    "Buttons and links should be easy to identify and have enough space around them.": "Dapat madaling makilala ang mga button at link at may sapat na espasyo sa paligid ng mga ito.",
    "Allow different input methods": "Payagan ang iba't ibang paraan ng pag-input",
    "Avoid interactions that work only with one device or one type of gesture.": "Iwasan ang mga interaksyong gumagana lamang sa iisang device o iisang uri ng galaw.",
    "Give people enough time": "Bigyan ng sapat na oras ang mga tao",
    "Avoid unnecessary time limits, especially for reading instructions and completing forms.": "Iwasan ang mga hindi kinakailangang limitasyon sa oras, lalo na sa pagbabasa ng panuto at pagkumpleto ng mga form.",
    "A visitor should be able to open a menu, choose an accessibility topic, and submit a form using only the keyboard.": "Dapat makapagbukas ng menu, makapili ng paksa sa accessibility, at makapagsumite ng form ang isang bisita gamit lamang ang keyboard.",
    "Physical accessibility gives people more than one way to move around and use a website.": "Nagbibigay ang physical accessibility sa mga tao ng higit sa isang paraan upang makagalaw at makagamit ng website.",
    "Congratulations!": "Binabati Kita!",
    "You Got the Correct Answer!": "Tama ang Sagot Mo!",
    "Great job! You've successfully guessed the accessibility word.": "Mahusay! Matagumpay mong nahulaan ang salita tungkol sa accessibility.",
    "Would you like to play again?": "Gusto mo bang maglaro muli?",
    "Play Again": "Maglaro Muli",
    "Go to Homepage": "Pumunta sa Homepage",
    "Helping Everyone Access Visual Information": "Pagtulong sa Lahat na Ma-access ang Biswal na Impormasyon",
    "Not everyone sees a screen in the same way. Some people have low vision, difficulty telling colors apart, or use screen readers to access content. Visual accessibility helps make sure information stays understandable in different situations.": "Hindi pare-pareho ang paningin ng lahat sa screen. May mga taong mahina ang paningin, nahihirapang magkilala ng mga kulay, o gumagamit ng screen reader upang ma-access ang nilalaman. Tinitiyak ng visual accessibility na nananatiling maunawaan ang impormasyon sa iba't ibang sitwasyon.",
    "Use meaningful image descriptions": "Gumamit ng makabuluhang paglalarawan ng larawan",
    "Add alternative text to images that share important information. This gives screen reader users a way to understand what an image communicates.": "Magdagdag ng alternatibong teksto sa mga larawang nagbabahagi ng mahalagang impormasyon. Nagbibigay ito sa mga gumagamit ng screen reader ng paraan upang maunawaan ang ipinapahayag ng larawan.",
    "Keep text easy to read": "Panatilihing madaling basahin ang teksto",
    "Choose readable fonts, clear spacing, and layouts that still work when someone zooms in or increases text size.": "Pumili ng nababasang font, malinaw na espasyo, at layout na gumagana pa rin kapag nag-zoom in o nagpalaki ng teksto ang isang tao.",
    "Do not use color alone": "Huwag gumamit ng kulay lamang",
    "Pair colors with labels, icons, or clear messages. A red border by itself should not be the only sign that a form has an error.": "Samahan ang mga kulay ng label, icon, o malinaw na mensahe. Hindi dapat red border lamang ang nag-iisang palatandaan na may error ang isang form.",
    "Use clear headings and links": "Gumamit ng malinaw na heading at link",
    "Organized headings and descriptive links help people understand and navigate a page, including those using assistive technology.": "Nakatutulong ang maayos na heading at naglalarawang link upang maunawaan at ma-navigate ng mga tao ang isang pahina, kasama ang mga gumagamit ng assistive technology.",
    "Instead of showing only a red warning icon, write: “Please enter your email address.” The message explains what needs to be fixed without depending on color.": "Sa halip na red warning icon lamang ang ipakita, isulat: “Pakilagay ang iyong email address.” Ipinapaliwanag ng mensahe kung ano ang dapat ayusin nang hindi umaasa sa kulay.",
    "Visual accessibility is about making information clear, readable, and available beyond what someone can see.": "Ang visual accessibility ay tungkol sa paggawa ng impormasyong malinaw, nababasa, at magagamit higit sa nakikita ng isang tao.",
    "Word Puzzle": "Palaisipan ng Salita",
    "Guess the Correct Accessibility Word!": "Hulaan ang Tamang Salita Tungkol sa Accessibility!",
    "Go Back to Accessibility Guide Page": "Bumalik sa Pahina ng Gabay sa Accessibility",

    // text created by this script
    "Not in word list": "Wala sa listahan ng salita",
    "Thank you! Your message has been submitted.": "Salamat! Naisumite na ang iyong mensahe.",
    "Please write a message before sending.": "Mangyaring magsulat ng mensahe bago ipadala.",
    "Font size": "Laki ng font",
    "Smaller text": "Mas maliit na teksto",
    "Default text size": "Karaniwang laki ng teksto",
    "Larger text": "Mas malaking teksto",
};

let currentLanguage = loadSetting("language", "en");
const originalTitle = document.title;

/* t("English text") gives the text in the chosen language */
function t(text) {
    return currentLanguage === "fil" && TRANSLATIONS[text] ? TRANSLATIONS[text] : text;
}

function normalizeText(text) {
    return text.replace(/\s+/g, " ").trim();
}

function translateTextNodes(language) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode: function (node) {
            const parent = node.parentElement;
            if (!parent || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
            if (parent.closest("script, style, #board, .keyboard-row, #answer")) {
                return NodeFilter.FILTER_REJECT;
            }
            return NodeFilter.FILTER_ACCEPT;
        }
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach(function (node) {
        if (node.originalText === undefined) node.originalText = node.nodeValue;

        const translated = TRANSLATIONS[normalizeText(node.originalText)];
        let result = node.originalText;
        if (language === "fil" && translated) {
            const start = node.originalText.match(/^\s*/)[0];
            const end = node.originalText.match(/\s*$/)[0];
            result = start + translated + end;
        }
        if (node.nodeValue !== result) node.nodeValue = result;
    });
}

function applyLanguage(language) {
    currentLanguage = language === "fil" ? "fil" : "en";
    saveSetting("language", currentLanguage);

    document.documentElement.lang = currentLanguage;
    document.title = (currentLanguage === "fil" && TRANSLATIONS[originalTitle]) || originalTitle;
    translateTextNodes(currentLanguage);
    updateFontSizeControls();
}

function setupLanguageOptions() {
    document.querySelectorAll('input[name="language"]').forEach(function (radio) {
        radio.checked = radio.value === currentLanguage;
        radio.setAttribute("aria-label", radio.value === "fil" ? "Filipino" : "English");
        radio.addEventListener("change", function () {
            if (radio.checked) applyLanguage(radio.value);
        });
    });
}

/* ---------- Font size ---------- */
const FONT_SIZES = {
    small:  { percent: "100%",    text: "A-", label: "Smaller text" },
    medium: { percent: "112.5%",  text: "A",  label: "Default text size" },
    large:  { percent: "131.25%", text: "A+", label: "Larger text" }
};

let currentFontSize = loadSetting("fontSize", "medium");
if (!FONT_SIZES[currentFontSize]) currentFontSize = "medium";
document.documentElement.style.fontSize = FONT_SIZES[currentFontSize].percent;

function applyFontSize(size) {
    currentFontSize = FONT_SIZES[size] ? size : "medium";
    saveSetting("fontSize", currentFontSize);
    document.documentElement.style.fontSize = FONT_SIZES[currentFontSize].percent;
    updateFontSizeControls();
}

function setupFontSizeControls() {
    const container = document.querySelector(".font-size-container");
    if (!container) return;

    const group = document.createElement("div");
    group.className = "font-size-controls";
    group.setAttribute("role", "group");

    Object.keys(FONT_SIZES).forEach(function (size) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "font-size-" + size;
        button.dataset.size = size;
        button.textContent = FONT_SIZES[size].text;
        button.addEventListener("click", function () {
            applyFontSize(size);
        });
        group.appendChild(button);
    });

    container.appendChild(group);
}

function updateFontSizeControls() {
    const group = document.querySelector(".font-size-controls");
    if (!group) return;

    group.setAttribute("aria-label", t("Font size"));
    group.querySelectorAll("button").forEach(function (button) {
        const size = button.dataset.size;
        button.setAttribute("aria-label", t(FONT_SIZES[size].label));
        button.setAttribute("aria-pressed", String(size === currentFontSize));
    });
}

/* ---------- Read aloud ---------- */
function textToSpeech(elementID) {
    const element = document.getElementById(elementID);
    if (!element || !("speechSynthesis" in window)) return;

    const speech = new SpeechSynthesisUtterance(element.innerText);
    speech.lang = currentLanguage === "fil" ? "fil-PH" : "en-US";
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    if (currentLanguage === "fil") {
        const voice = window.speechSynthesis.getVoices().find(function (v) {
            return /^(fil|tl)/i.test(v.lang);
        });
        if (voice) speech.voice = voice;
    }

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
}

/* ---------- Dark mode ---------- */
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    saveSetting("darkMode", document.body.classList.contains("dark-mode"));
}

/* ---------- Contact form ---------- */
function setupContactForm() {
    const form = document.querySelector(".message-form");
    if (!form) return;

    const status = document.createElement("p");
    status.className = "form-status";
    status.setAttribute("role", "status");
    form.appendChild(status);

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const field = form.elements["message"];

        if (!field.value.trim()) {
            status.textContent = t("Please write a message before sending.");
            field.focus();
            return;
        }

        form.reset();
        status.textContent = t("Thank you! Your message has been submitted.");
    });
}

/* ---------- Buttons that contain a link (some browsers ignore the link) ---------- */
function setupLinkButtons() {
    document.querySelectorAll("button").forEach(function (button) {
        const link = button.querySelector(":scope > a");
        if (!link) return;

        button.addEventListener("click", function (event) {
            if (event.target.closest("a")) return;
            window.location.href = link.href;
        });
    });
}

/* ---------- Start everything ---------- */
document.addEventListener("DOMContentLoaded", function () {
    if (loadSetting("darkMode", "false") === "true") {
        document.body.classList.add("dark-mode");
    }

    setupFontSizeControls();
    setupLanguageOptions();
    setupContactForm();
    setupLinkButtons();
    applyLanguage(currentLanguage);
});

/* ---------- Word puzzle ---------- */
var height = 6;
var width = 5;

var row = 0;
var col = 0;

var gameOver = false;

var wordList = ["blind", "sight", "audio", "input", "touch", "voice", "sense", "adapt", "usage", "users", "share", "equal", "media"]

guessList = guessList.concat(wordList);

var word = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
console.log(word);

window.onload = function() {
    if (document.getElementById("board")) {
        intiialize();
    }
}

function intiialize() {
    for(let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("board").appendChild(tile);
        }
    }

    let keyboard = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        ["Enter", "Z", "X", "C", "V", "B", "N", "M", "⌫"]
    ]

    for (let i = 0; i < keyboard.length; i++) {
        let currRow = keyboard[i];
        let keyboardRow = document.createElement("div");
        keyboardRow.classList.add("keyboard-row");

        for (let j = 0; j < currRow.length; j++) {
            let keyTile = document.createElement("div");
            let key = currRow[j];
            keyTile.innerText = key;
            if (key == "Enter") {
                keyTile.id = "Enter";
            }

            else if (key == "⌫") {
                keyTile.id = "Backspace";
            }

            else if ("A" <= key && key <= "Z") {
                keyTile.id = "Key" + key;
            }

            keyTile.addEventListener("click", processKey);

            if (key == "Enter") {
                keyTile.classList.add("enter-key-tile");
            } else {
                keyTile.classList.add("key-tile");
            }
            keyboardRow.appendChild(keyTile);
        }
        document.body.appendChild(keyboardRow);
    }

    document.addEventListener("keyup", (e) => {
        processInput(e);
    })
}

function processKey() {
    let e = {"code" : this.id};
    processInput(e);
}

function processInput(e) {
    if (gameOver) return;

    if ("KeyA" <= e.code && e.code <= "KeyZ") {
        if (col < width) {
            let currTile = document.getElementById(row.toString() + "-" + col.toString());
            if (currTile.innerText == "") {
                currTile.innerText = e.code[3];
                col += 1;
            }
        }
    }

    else if (e.code == "Backspace") {
        if (0 < col && col <= width) {
            col -= 1;
        }
        let currTile = document.getElementById(row.toString() + "-" + col.toString());
        currTile.innerText = "";
    }

    else if (e.code == "Enter") {
        update();
    }

    if (!gameOver && row == height) {
        gameOver = true;
        document.getElementById("answer").innerText = word;
    }
}

function update() {
    let guess = "";
    document.getElementById("answer").innerText = "";

    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + "-" + c.toString());
        let letter = currTile.innerText;
        guess += letter;
    }

    guess = guess.toLowerCase();
    if (!guessList.includes(guess)) {
        document.getElementById("answer").innerText = t("Not in word list");
        return;
    }

    let correct = 0;
    let letterCount = {};
    for (let i = 0; i < word.length; i++) {
        letter = word[i];
        if (letterCount[letter]) {
            letterCount[letter] += 1;
        }

        else {
            letterCount[letter] = 1;
        }
    }

    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + "-" + c.toString());
        let letter = currTile.innerText;
        if (word[c] == letter) {
            currTile.classList.add("correct");

            let keyTile = document.getElementById("Key" + letter);
            keyTile.classList.remove("present");
            keyTile.classList.add("correct");

            correct += 1;
            letterCount[letter] -= 1;
        }

        if (correct == width) {
            gameOver = true;
        }
    }

    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + "-" + c.toString());
        let letter = currTile.innerText;

        if (!currTile.classList.contains("correct")) {
            if (word.includes(letter) && letterCount[letter] > 0) {
                currTile.classList.add("present");
                let keyTile = document.getElementById("Key" + letter);
                if (!keyTile.classList.contains("correct")) {
                    keyTile.classList.add("present");
                }

                letterCount[letter] -= 1;
            }

            else {
                currTile.classList.add("absent");
            }
        }
    }

    row += 1;
    col = 0;

    if (correct == width) {
        setTimeout(function() {
            window.location.href = "result-page.html";
        }, 500);
    }
}