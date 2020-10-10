import changeCardAndIcon from "./helpers.js";

window.addEventListener("DOMContentLoaded", () => {
  //define main elements we'll be working with
  let reloadBtn = document.querySelector(".renew-btn");
  let container = document.querySelector(".main");
  let card = document.querySelector(".card");
  let icon = document.querySelector(".hero-icon");

  // on clicking 'reload' button, change card & icon
  reloadBtn.addEventListener("click", () => {
    changeCardAndIcon(container, card, icon);
  });

  window.addEventListener("keyup", (e) => {
    if (e.code === "Space") {
      changeCardAndIcon(container, card, icon);
    }
  });

  //register service worker
  if ("serviceWorker" in navigator) {
    console.log("registering service worker...");
    navigator.serviceWorker
      .register("worker.js")
      .then(console.log("service worker registered!"));
  }
});

// for A2HS for desktop
window.addEventListener("beforeinstallprompt", (e) => {
  e.prompt();
});
