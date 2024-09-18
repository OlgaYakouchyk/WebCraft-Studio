document.querySelector(".touch-with-me").addEventListener("click", openModal);
// document.querySelector(".button-robot"), addEventListener("click", openModal);

function openModal() {
  document.querySelector(".modal-window-answer").style.display = "block";
}

function closeModal() {
  document.querySelector(".modal-window-answer").style.display = "none";
}

document.querySelector(".close-modal").addEventListener("click", closeModal);

window.addEventListener("click", function (event) {
  if (
    event.target === document.querySelector(".modal-window-answer") ||
    event.target === this.document.querySelector(".modal-more-services")
  ) {
    closeModal();
  }
});

//модальное окно more services

document
  .querySelector(".btn-more-services")
  .addEventListener("click", openModalMore);

function openModalMore() {
  document.querySelector(".modal-more-services").style.display = "block";
}

function closeModalMore() {
  document.querySelector(".modal-more-services").style.display = "none";
}
document
  .querySelector(".close-modal-more")
  .addEventListener("click", closeModalMore);

window.addEventListener("click", function (event) {
  if (event.target === this.document.querySelector(".modal-more-services")) {
    closeModalMore();
  }
});
