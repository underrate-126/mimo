let tracks = ["track1.mp3", "track2.mp3"]; // список треков
let currentTrack = 0;

let player = document.getElementById("player");
let nextBtn = document.getElementById("next-track");
let prevBtn = document.getElementById("prev-track");

// Функция для воспроизведения текущего трека
function playTrack(index) {
  player.src = tracks[index];
  player.play();
}

// Кнопка "Следующий трек"
nextBtn.addEventListener("click", () => {
  currentTrack = (currentTrack + 1) % tracks.length;
  playTrack(currentTrack);
});

// Кнопка "Предыдущий трек"
prevBtn.addEventListener("click", () => {
  currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
  playTrack(currentTrack);
});

// Автопереключение на следующий трек, когда текущий закончился
player.addEventListener("ended", () => {
  currentTrack = (currentTrack + 1) % tracks.length;
  playTrack(currentTrack);
});
