// 팝업창 버튼 관련
const closeBtnPopup = document.querySelector(".popup-button.close");
const todayChkBtn = document.querySelector(".bot-button-check");
const htmlTag = document.querySelector("html");
const popupTag = document.querySelector("#popup");

// 함수 정의
// 1. 오늘하루열지않음
// 1) 쿠키 생성 함수
function setCookie(name, value, expires) {
  let today = new Date();
  today.setDate(today.getDate() + expires);
  document.cookie =
    name +
    "=" +
    encodeURIComponent(value) +
    "; path=/; expires=" +
    today.toUTCString() +
    ";";
}

// 2) 쿠키 확인 함수
function getCookie(name) {
  let match = document.cookie.match(
    new RegExp("(^|;\\s*)" + name + "=([^;]+)")
  );
  return match ? decodeURIComponent(match[2]) : null;
}

// 2. 팝업 열기+닫기 함수
function togglePopup(show) {
  show
    ? (popupTag.classList.add("show"), htmlTag.classList.add("scrollFixed"))
    : (popupTag.classList.remove("show"),
      htmlTag.classList.remove("scrollFixed"));
}

// 이벤트 정의
// 1. 오늘하루열지않기 클릭 이벤트
todayChkBtn.addEventListener("click", () => {
  setCookie("popup", "done", 1);
  togglePopup(false);
});

// 1-1. 새로고침했을 때 쿠키가 있다면 팝업 닫기+쿠키가 있다면 팝업 열기
document.addEventListener("DOMContentLoaded", function () {
  if (getCookie("popup") === "done") {
    togglePopup(false);
  } else {
    togglePopup(true);
  }
});

// 2. 팝업 닫기
closeBtnPopup.addEventListener("click", () => togglePopup(false));

// popup contents slide 관련 - swiper.js 사용
// Swiper 초기화 및 swiper.js 관련
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".popup__swiper", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    on: {
      // 사용자 정의 함수 -> swiper-slide-count 관련, gpt 자문
      init: function () {
        updateSlideCount(this);
      },
      slideChange: function () {
        updateSlideCount(this);
      },
    },
  });

  // 함수 정의
  // 1. swiper-slide-count 관련 함수
  function updateSlideCount(swiper) {
    const currentSlide = swiper.activeIndex + 1;
    const totalSlides = swiper.slides.length;
    document.querySelector(".count-current").textContent = currentSlide;
    document.querySelector(".count-total").textContent = totalSlides;
    document.querySelector(".total").textContent = totalSlides;
  }

  // 이벤트 정의
  // 1. 자동재생 관련 버튼 클릭 이벤트
  const autoPlayBtn = document.querySelector(".swiper-button-play");
  autoPlayBtn.addEventListener("click", () => {
    if (swiper.autoplay.running) {
      swiper.autoplay.stop();
      autoPlayBtn.classList.remove("pause");
      autoPlayBtn.classList.add("play");
    } else {
      swiper.autoplay.start();
      autoPlayBtn.classList.remove("play");
      autoPlayBtn.classList.add("pause");
    }
  });
});
