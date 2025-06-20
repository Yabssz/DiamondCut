const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

const slidesContainerNew = document.getElementById("slides-container-new");
const slideNew = document.querySelector(".slide-new");
const prevButtonNew = document.getElementById("slide-arrow-prev-new");
const nextButtonNew = document.getElementById("slide-arrow-next-new");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

nextButtonNew.addEventListener("click", () => {
  const slideWidthNew = slideNew.clientWidth;
  slidesContainerNew.scrollLeft += slideWidthNew;
});

prevButtonNew.addEventListener("click", () => {
  const slideWidthNew = slideNew.clientWidth;
  slidesContainerNew.scrollLeft -= slideWidthNew;
});
