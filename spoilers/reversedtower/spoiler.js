document.getElementById("saved-submit").addEventListener("click", () => {
  const input = document.getElementById("saved-input").value.trim();
  const spoiler = document.getElementById("saved-spoiler");
  const err = document.getElementById("saved-check")

  if (input === "いちもんめちょこ") {
    spoiler.style.display = "block";
    err.style.display = "none";
    document.getElementById("saved-input").disabled = true;
  } else {
    err.style.display = "block";
  }
});

document.getElementById("allclear-submit").addEventListener("click", () => {
  const input = document.getElementById("allclear-input").value.trim();
  const spoiler = document.getElementById("allclear-spoiler");
  const err = document.getElementById("allclear-check")

  if (input === "どしろうと") {
    spoiler.style.display = "block";
    err.style.display = "none";
    document.getElementById("allclear-input").disabled = true;
  } else {
    err.style.display = "block";
  }
});

const titles = {
  1: "？",
  2: "←",
  3: "€",
  4: "￥",
  5: "＄",
  6: "￡",
  7: "↑",
  8: "〇",
  9: "↓",
  10: "♭",
  11: "！",
  12: "☆",
  13: "角が丸い△",
  14: "§",
  15: "→",
  16: "Σ",
  17: "＃",
  18: "♪",
  19: "＊",
  20: "〒",
  21: "□",
  22: "％",
  23: "△",
  24: "◇",
  25: "∠",
  26: "①",
  27: "②",
  28: "③",
  29: "◎",
  30: "　",
  31: "ψ"
};
const descriptions = {
  1: "白い部分を読むとCHOCOと書いてあるので「ちょこ」です。",
  2: "中央に方位磁針があり、南の「たい」が「たいなん」になっているので、東の「きょう」は「きょうとう」になります。",
  3: "岩と手なので「いわて」です。",
  4: "木のイラストを木に、一万円札のイラストを万に変換すると「とちぎ」です。",
  5: "五十音表から対応する文字を拾って「もりおか」です。",
  6: "「いわて」→「もりおか」なので、「とちぎ」→「うつのみや」です。",
  7: "大きい豆が大豆なので、大きい木は「たいぼく」です。",
  8: "「た」より上の部分が「たいぼく」なので、上とは北を指していることが分かります。<br>よって「さ」より下は「さ以南」、すなわち「さいなん」です。",
  9: "〇〇〇〇は「さいなん」なので、1文字目を「た」に変えて「たいなん」です。",
  10: "上は「閉まる間」で「しまるま」なので、下は「開く間」で「あくま」です。",
  11: "上は「森の形をした岡」で「もりおか」なので、下は「林の形をしたライス」で「はやしらいす」です。",
  12: "もともとは「このぶんしょうがあらわしているものをこたえましょう」と書かれていたと考えられるので、「し」が「ー」に変化している、すなわち「しがー」です。",
  13: "右辺は楽器のトライアングルなので、答えは「とらいあんぐる」です。",
  14: "「とらいあんぐる」の対応する部分を拾って「とぐる」です。",
  15: "「たいぼく」が「たいなん」に変化しているので、矢印は方角を逆にする法則と考えられます。よって「きょうとう」の方角を逆にして「きょうざい」です。",
  16: "☆の問題の対応する文字を拾って「らぶこーる」です。",
  17: "アイコンの四隅を見ると「だいなし」と書かれています。",
  18: "上から順に「うたがい」「ゆうがい」「ぼうがい」なので、「うがい」です。",
  19: "676=26×26、161=7×23なので、アルファベットの番号と考えると161/676はGWと捉えられます。よってゴールデンウィークがある「ごがつ」が答えです。",
  20: "？？？は「ちょこ」なので、これに「ごがつ」を適用してTTTは「ちょつ」です。よって「ちょつうがい」を並べ替えて「ちょうつがい」です。",
  21: "ガチャでCはコモン、UCはアンコモン、Rはレアを表していると考えれば、上の例示の意味が通ります。よって下は「えくれあ」です。",
  22: "♪が反転していることに注意しましょう。「だいなし」に「しがー」「いがう」を適用して「だうなー」です。",
  23: "「かないあんぜん」で意味が通ります。",
  24: "？は1問目、！は11問目なので、□は「にじゅういち」問目です。",
  25: "「きょうざい」に問題の通りの加工をして「ぎょうざ」です。",
  26: "Auは金なので「しきん」です。",
  27: "見えにくいですが、「しAg」と書かれているので「しぎん」です。",
  28: "ここまでの流れから「しCu」と書かれていると予想できるので、「しどう」です。",
  29: "どう見ても「スタートするタートル」なので「すたーと」です。",
  30: "対応する問題の答えを埋めると「あーくさいん」です。",
  31: "対応する問題の答えを拾うと「さいごのこたえはどしろうと」となるので「どしろうと」です。"
};
const images = document.querySelectorAll(".gallery-img");
const modal = document.getElementById("img-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const modalContent = document.querySelector(".modal-content");

images.forEach(img => {
  img.addEventListener("click", () => {
    const id = img.dataset.id;
    modalImg.src = img.src;
    modalTitle.innerHTML = titles[id];
    modalText.innerHTML = descriptions[id];
    modal.classList.add("active");
  });
});

modal.addEventListener("click", e => {
  if (e.target === modal) {
    // modal.classList.remove("active");
    modalContent.style.transform = "scale(0)";
    setTimeout(() => {
      modal.classList.remove("active");
      // modalContent.removeEventListener("transitionend", handler);
      modalContent.style.transform = "";
    }, 250);
  }
});