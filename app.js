const burger = document.querySelector(".burger-container");
const dinnerSection = document.querySelector(".dinner");
const drinksSection = document.querySelector(".drinks");

// Landing page

// // Burger

window.onload = () => {
  ScrollTrigger.refresh();
};

toggleBurger = () => {
  if (burger.classList.contains("checked")) {
    burger.classList.remove("checked");
  } else {
    burger.classList.add("checked");
  }
};

// Overlay menu
gsap.from(".burger-container", {
  scrollTrigger: {
    trigger: "section.menu",
    start: "top center",
    toggleActions: "play none none reverse",
    // markers: true,
  },
  x: "-6rem",
  opacity: 0,
  duration: 0.5,
});

gsap.from(".overlay-nav", {
  scrollTrigger: {
    trigger: "section.menu",
    start: "top center",
    toggleActions: "play none none reverse",
  },
  x: "-100%",
  duration: 0.4,
});

// Dinner
toggleDinner = () => {
  if (dinnerSection.classList.contains("checked")) {
    dinnerSection.classList.remove("checked");
  } else {
    dinnerSection.classList.add("checked");
  }
};

toggleDrinks = () => {
  if (drinksSection.classList.contains("checked")) {
    drinksSection.classList.remove("checked");
  } else {
    drinksSection.classList.add("checked");
  }
};
