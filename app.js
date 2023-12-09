const inputEl = document.querySelector("input");
const iconEl = document.querySelector("i");

let regex = /\w+@\w+.(com|net|fr)/gi;

inputEl.addEventListener("input", () => {
  if (regex.test(inputEl.value)) {
    iconEl.className = `fa-regular fa-circle-check check`;
    iconEl.style.color = "green";
  } else {
    iconEl.className = `fa-regular fa-envelope envelope`;
    iconEl.style.color = "red";
  }
});
