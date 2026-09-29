// -----解答の正誤判定-----
const answers = {
  1 : "dummy1",
  2 : "dummy2"
}

document.querySelectorAll(".submit").forEach(button => {
  button.addEventListener("click", () => {
    const n = button.dataset.n;
    const input = document.getElementById(`input-${n}`);
    const locked = document.getElementById(`locked-${n}`);
    const answerArea = document.getElementById(`answer-area-${n}`);

    if (!input) return; //一応ね

    const userAnswer = input.value;
    if (userAnswer === answers[n]) {
      // alert(`第${n}問正解！※これはダミーメッセージです`)
      locked.style.display = "block";
    } else {
      answerArea.classList.add("shake");

      answerArea.addEventListener("animationend", () => {
        answerArea.classList.remove("shake");
      }, {once: true});
    }
  });
});

// -----画像の拡大-----
const modal = document.getElementById("modal")
const modalImage  = document.getElementById("modal-image")

document.querySelectorAll(".question").forEach(img => {
  img.addEventListener("click", () => {
    modalImage.src = img.src;
    modal.classList.add("show");
  });
});

modal.addEventListener("click", () => {
  modal.classList.remove("show");
  modalImage.src = "";
});