// counter'

document.addEventListener("DOMContentLoaded", countvalue, false);
var counter = document.querySelectorAll(".number");

function countvalue(isCount) {
  if (isCount) {
    counter.forEach(function (item) {
      let endVal = item.getAttribute("data-value");
      let start;

      if (endVal > 20) {
        start = endVal - 20;
      } else {
        start = 0;
      }
      var end = endVal;
      var speed = 40;

      setInterval(function () {
        start++;
        if (start > end) {
          return false;
        }
        item.innerText = start;
      }, speed);
    });
  }
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        countvalue(true);
      }
    });
  },
  {
    threshold: 1, // Adjust as needed, 0.5 means the element is considered in the viewport when 50% visible
  }
);

document.querySelectorAll(".number").forEach((client) => {
  observer.observe(client);
});

// animated lines
const animatedText = document.querySelectorAll(".animated-span");

const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated-line");
      } else {
        entry.target.classList.remove("animated-line");
      }
    });
  },
  {
    threshold: 1, // Adjust as needed, 0.5 means the element is considered in the viewport when 50% visible
  }
);

animatedText.forEach((client) => {
  observer2.observe(client);
});

// animated sections
const sections = document.querySelectorAll(".section");
const observer_opacity = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

sections.forEach((client) => {
  observer_opacity.observe(client);
});

// nav on scroll background
document.addEventListener("DOMContentLoaded", function () {
  let scrollpos = window.scrollY;
  const header = document.querySelector("header");
  const header_height = header.offsetHeight;

  const add_class_on_scroll = () => header.classList.add("bg-light");
  const remove_class_on_scroll = () => header.classList.remove("bg-light");

  window.addEventListener("scroll", function () {
    scrollpos = window.scrollY;

    if (scrollpos >= header_height) {
      add_class_on_scroll();
    } else {
      remove_class_on_scroll();
    }
  });
});

function isMobile() {
  return window.innerWidth <= 768; // Adjust breakpoint as needed
}

// carousel
const swiper = new Swiper(".card-swiper", {
  slidesPerView: 1.5,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: false,
  autoplay: isMobile()
    ? {
        delay: 3000, // Auto scroll delay (in ms)
        disableOnInteraction: true,
      }
    : false,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 1.8,
      spaceBetween: 20,
    },
  },
});

// testimonial_swiper
const testi_swiper = new Swiper(".testi-swiper", {
  slidesPerView: 1,
  centeredSlides: false,
  spaceBetween: 30,
  autoplay: isMobile()
    ? {
        delay: 3500, // Auto scroll delay (in ms)
        disableOnInteraction: true,
      }
    : false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});

// Facility Section

let facilitySection = document.querySelector("#facilitySection");
if (facilitySection) {
  let slideMain = facilitySection.querySelector(".slide-main");
  let rightPos = slideMain.getBoundingClientRect().right;
  let swiperDiv = facilitySection.querySelector(".facility-swiper-div");
  swiperDiv.style.marginLeft = `${Number(rightPos.toFixed()) + 20}px`;
  console.log(rightPos);
}

// Button Hover

let btn1 = document.querySelectorAll(".btn-primary");

btn1.forEach((btn) => {
  let span = btn.querySelector("span");
  let span2 = span.cloneNode(true);
  span2.classList.add("text2");
  btn.append(span2);
});

let btnLight = document.querySelectorAll(".animated-btn");

btnLight.forEach((btn) => {
  let image = btn.querySelector("img");
  let image2 = image.cloneNode(true);
  image2.classList.add("arrow-2");
  btn.append(image2);
});

// Back to top button

const backToTopButton = document.querySelector(".backToTop");

function smoothScrollToTop(duration) {
  const start = window.scrollY;
  const end = 0;
  const startTime = performance.now();

  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

  const animateScroll = () => {
    const now = performance.now();
    const progress = (now - startTime) / duration;
    const easedProgress = easeInOutCubic(progress);
    const position = start + (end - start) * easedProgress;
    window.scrollTo(0, position);
    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };
  animateScroll();
}

backToTopButton.addEventListener("click", () => {
  smoothScrollToTop(1000); // Adjust duration in milliseconds
});