document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("darkmode-toggle");
  const body = document.body;

  // Vérifie si un choix est déjà stocké
  if (localStorage.getItem("darkMode") === "true") {
    body.classList.add("dark-mode");
  }

  toggleBtn.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    // Stocke la préférence
    localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
  });
});
