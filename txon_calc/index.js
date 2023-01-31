let outScreen = document.getElementById("input");
const btn2El = document.getElementById("btn2");
const darkEl = document.querySelector(".input2");
const containerEl = document.querySelector(".container");
const calculatorEl = document.querySelector(".calculator");
const btnEl = document.querySelectorAll(".active");

darkEl.checked = JSON.parse(localStorage.getItem("mode"));

function display(n) {
  outScreen.value += n;
}

function result() {
  try {
    outScreen.value = eval(outScreen.value);
  } catch (error) {
    alert("Invalid ! ");
  }
}
function Clear() {
  outScreen.value = "";
}
function del() {
  outScreen.value = outScreen.value.slice(0, -1);
}

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(darkEl.checked));
}

function darkMode() {
  if (darkEl.checked) {
    containerEl.style.background = "#ecf0fe";
    calculatorEl.className = calculatorEl.className.replace(
      "con-active",
      "calculator"
    );
    outScreen.className = outScreen.className.replace("in-active", "input");

    for (let i = 0; i < btnEl.length; i++) {
      btnEl[i].className = btnEl[i].className.replace("active", "button");
    }
  } else {
    containerEl.style.background = "rgba(0, 0, 0, 0.7)";
    calculatorEl.className = calculatorEl.className.replace(
      "calculator",
      "con-active"
    );
    outScreen.className = outScreen.className.replace("input", "in-active");

    for (let i = 0; i <= btnEl.length; i++) {
      btnEl[i].className = btnEl[i].className.replace("button", "active");
    }
  }
}

darkMode();

darkEl.addEventListener("input", () => {
  darkMode();
  updateLocalStorage();
});
