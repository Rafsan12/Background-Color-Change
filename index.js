function randomColor() {
  const hexColor = "0123456789ADCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexColor[Math.floor(Math.random() * 16)];
  }
  return color;
}

let interval;

const startChangingColor = function () {
  function changeBgColor() {
    const color = randomColor();
    document.body.style.backgroundColor = color;
    document.querySelector(".input").value = color; // Display the color name
  }
  if (!interval) {
    interval = setInterval(changeBgColor, 1000);
  }
};
const stopChangingColor = function () {
  clearInterval(interval);
  interval = null;
};

const startbtn = document
  .getElementById("start")
  .addEventListener("click", startChangingColor);
const stoptbtn = document
  .getElementById("stop")
  .addEventListener("click", stopChangingColor);

console.log(randomColor());

document.getElementById("copy").addEventListener("click", function () {
  const colorName = document.querySelector(".input").value;
  navigator.clipboard.writeText(colorName).then(
    function () {
      alert("Color name copied to clipboard: " + colorName);
    },
    function (err) {
      console.error("Could not copy text: ", err);
    }
  );
});
