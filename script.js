document.addEventListener("DOMContentLoaded", () => {
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");

  function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
  }

  changeColorBtn.addEventListener("click", () => {
    const randomColor = getRandomColor();
    console.log(randomColor);
    colorBox.style.backgroundColor = randomColor;
  });
});
