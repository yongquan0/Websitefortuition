const button = document.getElementById("colorButton");

button.addEventListener("click", function () {

  const colors = [
    "#ffdddd",
    "#ddffdd",
    "#ddddff",
    "#fff0cc",
    "#f0ddff"
  ];

  const randomColor =
    colors[Math.floor(Math.random() * colors.length)];

  document.body.style.backgroundColor = randomColor;

  document.getElementById("message").innerText =
    "Background changed successfully!";
});
