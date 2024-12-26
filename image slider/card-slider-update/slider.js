document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "loop",
    perPage: 2,
    perMove: 1,
    gap: "2rem",
  });

  splide.mount();
});

// document.addEventListener("DOMContentLoaded", function () {
//   new Splide(".splide", {
//     perPage: 2,
//     breakpoints: {
//       740: {
//         perPage: 1,
//       },
//     },
//   }).mount();
// });
