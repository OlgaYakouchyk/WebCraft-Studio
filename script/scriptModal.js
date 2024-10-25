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

// МОДАЛЬНОЕ ОКНО REVIEWS

document.addEventListener("DOMContentLoaded", function () {
  const modalReviews = document.querySelector(".modal-reviews");
  const modalWindow = document.querySelector(".modal-reviews-main");
  const modalContentReview = document.querySelector(".modal-content-reviews");
  const closeModalReviews = document.querySelector(".close-modal-reviews");

  // открытие модального окна при клике на  кнопку read more

  document.querySelectorAll(".btn-read-more").forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // Останавливаем переход по ссылке

      // Здесь можно динамически менять содержимое модального окна
      const info = this.getAttribute("data-info");

      // содержимое окна меняется в зависимости от информации

      let content = "";
      if (info === "Nadya Kosova") {
        content = `
                  <p>Nadya Kosova</p>
                  <p>Founder and Head of the KOSOVA CLUB Beauty Studio</p>
<p>I really like the visuals! The information has become more clear, understandable, and definitely more aesthetically pleasing…</p>
<p>I liked that you did everything yourself. You quickly handled all my questions and difficult situations. I had no experience with delegating, and I am surprised that people can do this on their own without my involvement.</p>
  <p>You are a very valuable connection! Yes, I would recommend you to friends and acquaintances.</p>
`;
      } else if (info === "Anna Kirbay") {
        content = `
 <p>Anna Kirbay</p>
                  <p>Teacher, tutor, and mentor for training</p>
                  <p>I started working with you because I could see the systematic approach, professionalism, and the clear stages of interaction. The explanations for the commercial proposal were clear, and the deadlines were acceptable to me</p>
                   <p>I am satisfied with the result and appreciated how quickly adjustments were made. It was also great that I was reminded to complete or check certain tasks to stay on track with the project plan.</p>
                    <p>I want to thank you once again for the work you've done!</p>
`;
      } else if (info === "Tanya Kazina") {
        content = `
        <p>Tanya Kazina</p>
                  <p>Web designer and illustrator</p>
                  <p>I'm thrilled with the presentation: everything is clear and well-structured. Thank you for all the comments, they will definitely be helpful in the work.</p>
                  <p>I have only two minor revisions regarding the wording, which I left in Figma. The rest of the text is perfect and fits perfectly. 👍</p>

        `;
      } else if (info === "Kristina Izotova") {
        content = `
        <p>Kristina Izotova</p>
                  <p>Business assistant</p>
                <p>The website turned out amazing! You're awesome, I haven't seen such speed and precision in ages✨ Thank you for your work, it's truly a pleasure working with you.</p>
                

        `;
      } else if (info === "Aleksey Ryzhov") {
        content = `
        <p>Aleksey Ryzhov</p>
                  <p>Business coach and trainer</p>
                  <p>Thank you so much for the work, it turned out beautifully and perfectly!</p>
                  <p>I really enjoyed working with you. I'll definitely come back to you as soon as I plan the next steps for promoting my services and website.</p>

        `;
      } else if (info === "Kseniya Kott") {
        content = `
         <p>Kseniya Kott</p>
                  <p>SMM consulting expert</p>
                  <p>Your websites are really awesome! Yesterday, we were discussing how beautiful your work is and realized that we wouldn't have come up with something like that even in our wildest dreams.</p>
                  <p>The employees I spoke with about the installment plan said the website is sooo beautiful and mesmerizing, it's really fun to explore!</p>

        `;
      }

      modalContentReview.innerHTML = content; // Устанавливаем содержимое модального окна
      modalReviews.style.display = "block";
      modalWindow.style.display = "block";
      document.body.style.overflow = "hidden"; // Отключаем прокрутку страницы
    });
  });

  // Закрытие модального окна
  closeModalReviews.addEventListener("click", function () {
    modalReviews.style.display = "none";
    modalWindow.style.display = "none";
    document.body.style.overflow = "auto"; // Включаем прокрутку страницы
  });

  // Закрытие модального окна при клике на затемнённый фон
  modalReviews.addEventListener("click", function () {
    modalReviews.style.display = "none";
    modalWindow.style.display = "none";
    document.body.style.overflow = "auto"; // Включаем прокрутку страницы
  });
});
