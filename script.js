let carousel = document.querySelector(".block-carusel");

let i = 1;
for (let block of carousel.querySelectorAll(".block")) {
  block.style.position = "relative";
  i++;
}

/* конфигурация */
let width = 450; // ширина картинки
let count = 4; // видимое количество изображений

let list = carousel;
let listElems = carousel.querySelectorAll(".block");

let position = 0; // положение ленты прокрутки

const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

if (prevButton && nextButton) {
  prevButton.onclick = function () {
    // сдвиг влево
    position += width * count;
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position = Math.min(position, 0);
    list.style.marginLeft = position + "px";
  };

  nextButton.onclick = function () {
    // сдвиг вправо
    position -= width * count;
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + "px";
  };
} else {
  console.error("Button navigetion do not exist");
}

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
