const spinButton = document.getElementById("img01");
const wheel = document.getElementById("img1");
const audio = document.getElementById("sound");

spinButton.addEventListener("click", () => {
  // Play audio
  audio.play();
  const randomValue = Math.floor(Math.random() * 10) + 1;

  // Rotate the wheel
  wheel.style.transition = "transform 4s ease";
  wheel.style.transform = `rotate(${500 * randomValue}deg)`; // 10 full spins (360 * 10)
});
