/* ============================== typing animation ============================ */
var typed = new Typed(".typing", {
  strings: [
    "",
    "developpeuse Web",
    "developpeuse logiciel",
    "debutant une alternance",
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
// document
//   .getElementById("contactForm")
//   .addEventListener("submit", function (event) {
// event.preventDefault(); // Empêche le rechargement de la page

// Récupérer les valeurs des champs
// const name = document.getElementById("name").value;
// const email = document.getElementById("email").value;
// const subject = document.getElementById("subject").value;
// const message = document.getElementById("message").value;

// Validation des champs (facultatif)
// if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
//   alert("Tous les champs sont obligatoires.");
//   return;
// }

// Créer un nouvel élément pour afficher le message
//   const messageElement = document.createElement("div");
//   messageElement.classList.add("message");
//   messageElement.innerHTML = `
//   <strong>${name}</strong> (<em>${email}</em>) a écrit :
//   <p><strong>Sujet:</strong> ${subject}</p>
//   <p><strong>Message:</strong> ${message}</p>
// `;

// // Ajouter le message au conteneur (par exemple, une div avec id "messageContainer")
// const messageContainer = document.getElementById("messageContainer");
// if (messageContainer) {
//   messageContainer.appendChild(messageElement);
// }

// Réinitialiser le formulaire après soumission
//   document.getElementById("contactForm").reset();
// });
