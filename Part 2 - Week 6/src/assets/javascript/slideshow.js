// if there are multiple slideshows on the page
const slideshows = document.getElementsByClassName("slideshow-wrapper");

// activate each slideshow
[...slideshows].forEach((slideshow) => {
  const slideImage = slideshow.getElementsByClassName("slideshow-image")[0];
  const slideDots = slideshow.getElementsByClassName("slideshow-dots")[0];
  const slidePager = slideshow.getElementsByClassName("slideshow-pager-button");

  const slidesCount = slideImage?.childElementCount;
  // if there are no slides, don't do anything
  if (!slidesCount) return;

  let activeSlide = 0;

  const updateActiveSlide = (i) => {
    [...slideImage.children].forEach((slide, j) => {
      if (i === j) {
        slide.classList.add("active-slide");
      } else {
        slide.classList.remove("active-slide");
      }
    });
    [...slideDots.children].forEach((dot, j) => {
        if (i === j) {
          dot.classList.add("active-dot");
        } else {
          dot.classList.remove("active-dot");
        }
      });
  };

  // handle when a dot is clicked
  for (let i = 0; i < slidesCount; i++) {
    slideDots?.children[i]?.addEventListener("click", () => {
      activeSlide = i;
      updateActiveSlide(activeSlide);
    });
  }

  // handle when the pager is clicked
  [...slidePager].forEach((pager) => {
    const isLeft = pager.classList.contains("left");
    const isRight = pager.classList.contains("right");
    pager.addEventListener("click", () => {
      if (isLeft) {
        activeSlide = activeSlide === 0 ? slidesCount - 1 : activeSlide - 1;
      } else if (isRight) {
        activeSlide = activeSlide === slidesCount - 1 ? 0 : activeSlide + 1;
      }
      updateActiveSlide(activeSlide);
    });
  });
});
