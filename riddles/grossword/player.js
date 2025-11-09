document.getElementById("submit-answer").addEventListener("click", () => {
  const input = document.getElementById("answer-input").value.trim();
  const result = document.getElementById("result-message");
  const tweet = document.getElementById("tweet");

  if (input === "こんさーと") {
    result.textContent = "グロスワ～ド 撃破！";
    result.style.color = "red";
    tweet.style.display = "block";
  } else {
    result.textContent = "グロスワ～ド 非撃破。";
    result.style.color = "blue";
  }
});

document.getElementById("tweet").addEventListener("click", () => {
  const text = "https://twitter.com/intent/tweet?text=%E3%82%B0%E3%83%AD%E3%82%B9%E3%83%AF%EF%BD%9E%E3%83%89%20%E6%92%83%E7%A0%B4%EF%BC%81%20%23%E3%82%B0%E3%83%AD%E3%82%B9%E3%83%AF%EF%BD%9E%E3%83%89%0Ahttps%3A%2F%2Fradiconminicar.github.io%2Friddles%2Fgrossword%2Fplayer.html";

  const tweetUrl =
    `${encodeURIComponent(text)}}`;
  
  window.open(tweetUrl, "_blank");
});