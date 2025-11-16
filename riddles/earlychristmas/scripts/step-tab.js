document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".step-button a");
  const tabContents = document.querySelectorAll(".step-tab-contents-item");

  tabButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      if (button.classList.contains("is-disabled")) {
        return;
      }

      tabButtons.forEach((btn) => btn.classList.remove("is-active"));
      //tabContents.forEach((content) => content.classList.remove("is-active"));
      tabContents.forEach((content) => {
        if (content.classList.contains("is-active")) {
          content.style.transition = "opacity 0s";
          content.classList.remove("is-active");
        }
      });

      button.classList.add("is-active");

      const target = document.querySelector(button.dataset.tab);
      if (target) {
        target.style.transition = "opacity 0.4s ease, transform 0.5s ease";
        target.classList.add("is-active");
      }
    });
  });

  //初期状態を指定
  tabButtons[0].classList.add("is-active");
  tabContents[0].classList.add("is-active");

  // for (let i = 1; i < 4; i++) {
  //   tabButtons[i].classList.add("is-disabled");
  // }
});