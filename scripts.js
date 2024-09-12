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
