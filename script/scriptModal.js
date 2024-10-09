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

// modal window what include?

document.addEventListener("DOMContentLoaded", function () {
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalWindow = document.querySelector(".modal-what-in-price");
  const closeModal = document.querySelector(".close-modal-include");

  // открытие модального окна

  document.querySelectorAll(".btn-include").forEach((button) => {
    button.addEventListener("click", function () {
      modalOverlay.style.display = "block";
      modalWindow.style.display = "block";
      document.body.style.overflow = "hidden";
    });
  });

  // закрытие модального окна
  closeModal.addEventListener("click", () => {
    modalOverlay.style.display = "none";
    modalWindow.style.display = "none";
    document.body.style.overflow = "auto";
  });

  //  закрытие модального окна при клике ина темный фон

  modalOverlay.addEventListener("click", () => {
    modalOverlay.style.display = "none";
    modalWindow.style.display = "none";
    document.body.style.overflow = "auto";
  });
});
