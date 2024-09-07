document.querySelector(".touch-with-me").addEventListener("click", openModal);

function openModal() {
  document.querySelector(".modal-window-answer").style.display = "block";
}

function closeModal() {
  document.querySelector(".modal-window-answer").style.display = "none";
}

document.querySelector(".close-modal").addEventListener("click", closeModal);

window.addEventListener("click", function (event) {
  if (event.target === document.querySelector(".modal-window-answer")) {
    closeModal();
  }
});
