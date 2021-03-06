// open modal
let modal = document.getElementById("myModal");
let img = document.querySelectorAll(".portfolio");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");

function open() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img.forEach((x) => x.addEventListener("click", open));

// Close Modal
let close = document.querySelector(".close");
function tutup() {
  modal.style.display = "none";
}

close.addEventListener("click", tutup);
window.addEventListener("click", (e) => {
  if (e.target == modal) {
    tutup();
  }
});

// dark mode
// if (localStorage.getItem("preferredTheme") == "dark") {
//   setDarkMode(true);
// }
// const dark = document.getElementById("darkBtn");

// function setDarkMode() {
//   const nav = document.getElementsByTagName("nav")[0];
//   const footer = document.getElementsByTagName("footer")[0];
//   const card = document.querySelectorAll(".card");
//   const link = document.querySelectorAll(".card a");
//   const icon = document.querySelectorAll(".bx");
//   document.body.classList.toggle("darkmode");
//   nav.classList.toggle("navbar-light");
//   nav.classList.toggle("navbar-dark");
//   nav.classList.toggle("bg-white");
//   nav.classList.toggle("bg-dark");
//   footer.classList.toggle("text-light");
//   footer.classList.toggle("bg-dark");
//   footer.classList.toggle("border-top");
//   card.forEach((x) => x.classList.toggle("bg-dark"));
//   link.forEach((x) => x.classList.toggle("text-light"));
//   icon.forEach((x) => x.classList.toggle("text-light"));
//   icon.forEach((x) => x.classList.toggle("text-dark"));
// }

// dark.addEventListener("click", setDarkMode);
