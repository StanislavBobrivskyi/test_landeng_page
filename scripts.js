// Плавний скрол до секції замовлення
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Додаємо клас для анімацій, коли елементи з'являються на екрані
const faders = document.querySelectorAll(".fade-in");
const options = {
  threshold: 0.1,
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    }
  });
}, options);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

document.addEventListener("DOMContentLoaded", function () {
  // Відображення модального вікна з описом свічки
  document.querySelectorAll(".gallery-image").forEach(function (image) {
    image.addEventListener("click", function () {
      var title = this.getAttribute("data-title");
      var description = this.getAttribute("data-description");
      var images = this.getAttribute("data-images").split(",");

      // Заповнюємо модальне вікно даними
      document.getElementById("candle-title").textContent = title;
      document.getElementById("candle-description").textContent = description;

      var mainImage = document.getElementById("main-image");
      mainImage.src = images[0]; // Встановлюємо перше зображення як основне

      var thumbnailGallery = document.querySelector(".thumbnail-gallery");
      thumbnailGallery.innerHTML = ""; // Очищення попередніх зображень
      images.forEach(function (imgSrc) {
        var img = document.createElement("img");
        img.src = imgSrc;
        img.alt = title;
        img.addEventListener("click", function () {
          mainImage.src = imgSrc; // Зміна основного зображення
        });
        thumbnailGallery.appendChild(img);
      });

      // Відображення модального вікна
      document.getElementById("candle-description-modal").style.display =
        "flex";
    });
  });

  // Закриття модального вікна при натисканні на кнопку
  document.querySelector(".close-btn").addEventListener("click", function () {
    var modal = document.getElementById("candle-description-modal");
    modal.style.display = "none";
  });

  // Закриття модального вікна при натисканні поза ним
  window.onclick = function (event) {
    var modal = document.getElementById("candle-description-modal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
