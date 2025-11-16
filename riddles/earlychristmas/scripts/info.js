const infoButton = document.getElementById("btn-info");
const infoMenu = document.getElementById("menu-info");
const infoMenuItems = document.querySelectorAll(".menu-info-item");
const infoModals = document.querySelectorAll(".modal-info");
const infoCloseButtons = document.querySelectorAll(".close-modal-info");

infoButton.addEventListener("click", () => {
  infoMenu.classList.toggle("active");
  infoButton.classList.toggle("active");
});

infoMenuItems.forEach(item => {
  item.addEventListener("click", () => {
    const targetId = item.dataset.target;
    document.getElementById(targetId).classList.add("active");
  });
});

infoCloseButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".modal-info").classList.remove("active");
  });
});