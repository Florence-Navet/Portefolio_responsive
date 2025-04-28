/* ============================== typing animation ============================ */
var typed = new Typed(".typing", {
  strings: [
    "",
    "developpeuse Web",
    "developpeuse logiciel",
    "en recherche d'alternance",
    "Etudiante",
    "motivée",
    "adepte des bonnes pratiques",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

/* ============================== Aside ============================ */
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

function addBackSection(num) {
  allSection[num].classList.add("back-section");
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}

/* ============================== Formulaire de message ============================ */
document
  .getElementById("messageForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Empêcher le rechargement de la page (action par défaut du bouton submit)

    const message = document.getElementById("message").value;

    if (message.trim()) {
      // Créer un nouvel élément pour afficher le message
      const messageElement = document.createElement("div");
      messageElement.classList.add("message");
      messageElement.textContent = message;

      // Ajouter le message au conteneur
      document.getElementById("messageContainer").appendChild(messageElement);

      // Effacer le champ de texte après l'envoi
      document.getElementById("message").value = "";
    } else {
      alert("Le message ne peut pas être vide.");
    }
  });
