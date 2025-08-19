document.addEventListener("DOMContentLoaded", function () {
  // Crée un bouton flottant
  const btn = document.createElement("button");
  btn.id = "darkmode-toggle";
  btn.className = "btn-darkmode";
  btn.textContent = "🌙/☀️";
  Object.assign(btn.style, {
    position: "fixed",
    right: "1rem",
    bottom: "1rem",
    zIndex: 9999
  });
  document.body.appendChild(btn);

  // Etat conservé
  const body = document.body;
  if (localStorage.getItem("darkMode") === "true") {
    body.classList.add("dark-mode");
  }
  btn.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
  });
});
