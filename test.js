const lyrics = document.querySelector(".lyrics");

function animateLyrics() {
  let lines = lyrics.innerHTML.split("<br>");
  let currentLine = 0;

  function showNextLine() {
    if (currentLine < lines.length) {
      lyrics.innerHTML = lines.slice(0, currentLine + 1).join("<br>");
      lyrics.classList.add("active");
      setTimeout(() => {
        lyrics.classList.remove("active");
        currentLine++;
        showNextLine();
      }, 3000); // Adjust the time delay as needed
    }
  }

  showNextLine();
}

animateLyrics();
