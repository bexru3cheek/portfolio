const bootcamp_close = document.querySelector(
  ".main-container .bootcamp .title .close"
);
const bootcamp = document.querySelector(".bootcamp");
bootcamp_close.addEventListener("click", () => {
  bootcamp.style.display = "block";
});
