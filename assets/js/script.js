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
      var speed = 10;

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

// carousel
const swiper = new Swiper(".card-swiper", {
  slidesPerView: 1.5,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
  },
});

// testimonial_swiper
const testi_swiper = new Swiper(".testi-swiper", {
  slidesPerView: 1,
  centeredSlides: false,
  spaceBetween: 30,
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
  swiperDiv.style.marginLeft = `${Number(rightPos.toFixed()) + 40}px`;
  console.log(rightPos);
}
