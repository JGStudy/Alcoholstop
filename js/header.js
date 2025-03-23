//혜련 js 시작
// 절주온(ON) 버튼
const toggleButton = document.querySelector(".top_service button");
const toggleSite = document.querySelector(".top_instit");
const toggleSiteText = document.querySelectorAll(".top_instit li");

toggleButton.addEventListener("click", () => {
  toggleSite.classList.toggle("active");
});

toggleButton.addEventListener("mouseover", () => {
  toggleSiteText.forEach((item) => item.classList.toggle("active"));
});

// 대표 SNS 버튼 토글
const snsButton = document.querySelector(".top_sns");
const socialSite = document.querySelector(".sns"); // 목록 전체

snsButton.addEventListener("click", () => {
  socialSite.classList.toggle("active");
});

// 알콜스탑 캠페인 버튼 클릭 이벤트
const insta = document.querySelector(".restart_ampaign_insta");
insta.onclick = () => {
  window.open("https://www.instagram.com/alcohol__stop/", "_blank");
};

//혜련 js 끝
