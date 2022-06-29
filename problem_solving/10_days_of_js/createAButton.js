let clickMeButton = document.getElementById("btn");
let x = 0;
clickMeButton.innerHTML = x;
clickMeButton.style.background = "#4FFF8F";
document.body.appendChild(clickMeButton);

clickMeButton.addEventListener("click", () => {
  x += 1;
  clickMeButton.innerHTML = x;
});
