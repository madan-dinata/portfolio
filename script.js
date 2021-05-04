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
