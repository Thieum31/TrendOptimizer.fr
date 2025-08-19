// /assets/js/darkmode.js
document.addEventListener("DOMContentLoaded", function () {
  // Crée le bouton flottant si absent
  if (!document.getElementById("darkmode-toggle")) {
    const btn = document.createElement("button");
    btn.id = "darkmode-toggle";
    btn.className = "btn-darkmode";
    btn.textContent = "🌙 / ☀️";
    // Style inline pour garantir l’affichage même sans CSS
    Object.assign(btn.style, {
      position: "fixed",
      right: "1rem",
      bottom: "1rem",
      zIndex: 9999
    });
    document.body.appendChild(btn);
  }

  const body = document.body;
  const prefersDark = window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Prend en compte l’état mémorisé, sinon préférence système
  const saved = localStorage.getItem("darkMode");
  if (saved === "true" || (saved === null && prefersDark)) {
    body.classList.add("dark-mode");
  }

  // Toggle
  document.getElementById("darkmode-toggle").addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
  });
});
