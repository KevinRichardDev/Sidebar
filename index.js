// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus

// Ranger la sidebar si on click sur le contenu principal

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : id > classe > baliseHtml

// sideBar = document.getElementById("side-bar");
// content = document.querySelector(".content");
// toggleBtn = document.querySelector(".toggle-btn");

// btn.addEventListener("click", () => {
//   sideBar.classList.toggle("active")
//   sideBar.style.left = "0"
//   content.style.opacity = 0.3
// })

// content.addEventListener("click", () => {
//   sideBar.style.left = "-230px";
//   content.style.opacity = 1
// })

//Correction

sidebar = document.getElementById("side-bar");

btn.addEventListener("click", () => {
  sidebar.classList.toggle("active")
})