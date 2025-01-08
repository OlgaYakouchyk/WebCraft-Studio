//КАрусель PROCESS


const swiper = new Swiper('.swiper', {
  slidesPerView: 4, // Количество видимых слайдов
  slidesPerGroup: 1, // Прокрутка по 1
  spaceBetween: 20, // Расстояние между слайдами
  loop: true, // Зацикливание
  loopFillGroupWithBlank: true, // Заполняет пустые места
  navigation: {
    nextEl: '.swiper-button-next', // Кнопка "вперед"
    prevEl: '.swiper-button-prev', // Кнопка "назад"
  },
  breakpoints: {
    768: {
      slidesPerView: 1, // На мобильных показывать 1 элемент
    },
    1024: {
      slidesPerView: 2, // На планшетах показывать 2 элемента
    },
    1440: {
      slidesPerView: 4, // На десктопах показывать 4 элемента
    },
  },
  pagination: {
    el: '.swiper-pagination', // Пагинация
    clickable: true, // Возможность клика по пагинации
  },
});

console.log(swiper.slides);



// let carousel = document.querySelector(".block-carusel");

// let i = 1;
// for (let block of carousel.querySelectorAll(".block")) {
//   block.style.position = "relative";
//   i++;
// }

// /* конфигурация */
// let width = 336; // ширина картинки
// let count = 1; // видимое количество изображений

// let list = carousel;
// let listElems = carousel.querySelectorAll(".block");

// let position = 0; // положение ленты прокрутки

// const prevButton = document.querySelector(".prev");
// const nextButton = document.querySelector(".next");

// if (prevButton && nextButton) {
//   prevButton.onclick = function () {
//     // сдвиг влево
//     position += width * count;
//     // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
//     position = Math.min(position, 0);
//     list.style.marginLeft = position + "px";
//   };

//   nextButton.onclick = function () {
//     // сдвиг вправо
//     position -= width * count;
//     if (position < -width * (listElems.length - count)) {
//       position = 0;
//     }

//     // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
//     // position = Math.max(position, -width * (listElems.length - count));
//     list.style.marginLeft = position + "px";
//   };
// } else {
//   console.error("Button navigetion do not exist");
// }




document.addEventListener("DOMContentLoaded", function () {
  const fadeMainTaxt = document.querySelectorAll(".main-text");
  const fadeTextH3 = document.querySelectorAll(".text-h3");
  const fadeTextH4 = document.querySelectorAll(".text-h4");
  const fadeTextServiceH1 = document.querySelectorAll(".service-buttom2-h1");
  const fadeTextServiceH1Bottom = document.querySelectorAll(
    ".service-buttom2-h1-bottom"
  );
  const fadeRobot = document.querySelectorAll(".button-robot img");
  const fadeRobot2 = document.querySelectorAll(".button-robot2 img");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target); // Отслеживание прекращается после того, как элемент появляется
        }
      });
    },
    {
      threshold: 0.1, // Элемент должен быть видим на 10%, чтобы сработала анимация
    }
  );

  fadeMainTaxt.forEach((element) => {
    observer.observe(element);
  });

  fadeTextH3.forEach((element) => {
    observer.observe(element);
  });

  fadeTextH4.forEach((element) => {
    observer.observe(element);
  });

  fadeTextServiceH1.forEach((element) => {
    observer.observe(element);
  });

  fadeTextServiceH1Bottom.forEach((element) => {
    observer.observe(element);
  });

  fadeRobot.forEach((element) => {
    observer.observe(element);
  });

  fadeRobot2.forEach((element) => {
    observer.observe(element);
  });
});

// КАРУСЕЛЬ REVIEWS

let carousel2 = document.querySelector(".block-carusel2");

let b = 1;
for (let block2 of carousel2.querySelectorAll(".block-review")) {
  block2.style.position = "relative";
  b++;
}

/* конфигурация */
let width2 = 530; // ширина картинки
let count2 = 3; // видимое количество изображений

let list2 = carousel2;
let listElems2 = carousel2.querySelectorAll(".block-review");

let position2 = 0; // положение ленты прокрутки

const prevButton2 = document.querySelector(".prev2");
const nextButton2 = document.querySelector(".next2");

if (prevButton2 && nextButton2) {
  prevButton2.onclick = function () {
    // сдвиг влево
    position2 += width2 * count2;
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position2 = Math.min(position2, 0);
    list2.style.marginLeft = position2 + "px";
  };

  nextButton2.onclick = function () {
    // сдвиг вправо
    position2 -= width2 * count2;
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    if (position2 < -(width2 * (listElems2.length - count2))) {
      position2 = -(width2 * (listElems2.length - count2));
    }
    list2.style.marginLeft = position2 + "px";
  };
} else {
  console.error("Button navigetion do not exist");
}
