new Swiper(".card-wrapper", {
  loop: true,
  spaceBetween: 30,

  // pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    DynamicsBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // RESPONSIVE BREAKPOINTS
  breakpoints: {
    0: {
      slidePerView: 1,
    },
    768: {
      slidePerView: 2,
    },
    1024: {
      slidePerView: 3,
    },
  },
});

// // And if we need scrollbar
// scrollbar: {
//   el: ".swiper-scrollbar",
// },
