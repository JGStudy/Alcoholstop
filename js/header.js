//혜련 js 시작
// 절주온(ON) 버튼
const toggleButton = document.querySelector('.top_service button');
const toggleSite = document.querySelector('.top_instit');
const toggleSiteText = document.querySelectorAll('.top_instit li');

toggleButton.addEventListener('click', () => {
  toggleSite.classList.toggle('active');
});

toggleButton.addEventListener('mouseover', () => {
  toggleSiteText.forEach((item) => item.classList.toggle('active'));
});

// 대표 SNS 버튼 토글
const snsButton = document.querySelector('.top_sns');
const socialSite = document.querySelector('.sns'); // 목록 전체

snsButton.addEventListener('click', () => {
  socialSite.classList.toggle('active');
});

// 알콜스탑 캠페인 버튼 클릭 이벤트
const insta = document.querySelector('.restart_ampaign_insta');
insta.onclick = () => {
  window.open('https://www.instagram.com/alcohol__stop/', '_blank');
};

//혜련 js 끝

// js 하연 파트 start
const burgerButton = document.querySelector('.menu-toggle');
const burgerButtonX = document.querySelector('.burger-x');
const menuAll = document.getElementById('menuAll');
const html = document.querySelector('html');

burgerButton.addEventListener('click', () => {
  menuAll.classList.toggle('open');
  html.classList.toggle('scrollFixed');
});
burgerButtonX.addEventListener('click', () => {
  menuAll.classList.toggle('open');
  html.classList.toggle('scrollFixed');
});

// js 하연 파트 end

// js 윤민 파트 start
document.addEventListener('DOMContentLoaded', () => {
  const menuMap = {
    사업: [
      '모니터링',
      '홍보캠페인',
      '교육',
      '서포터즈',
      '지역사회 음주폐해예방사업',
    ],
    통계: ['통계'],
    자료: ['영상', '발간물', '정책', '건강', '절주서포터즈 활동'],
    알림: ['공지사항&소식', '언론보도', 'FAQ', 'Q&A'],
  };

  const navItems = document.querySelectorAll('#navigation > li');
  const dropdown = document.getElementById('globalDropdown');

  let closeTimeout = null;

  navItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      clearTimeout(closeTimeout);

      const menuName = item.dataset.menu;
      const links = menuMap[menuName] || [];

      dropdown.innerHTML = '';
      links.forEach((text) => {
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = text;
        a.classList.add('dropdown-link'); // ✅ 스타일은 CSS에서
        dropdown.appendChild(a);
      });

      // 삼각형 위치 계산
      const dropdownRect = dropdown.getBoundingClientRect();
      const rect = item.getBoundingClientRect();
      const triangleLeft = rect.left + rect.width / 2 - dropdownRect.left;
      dropdown.style.setProperty('--triangle-left', `${triangleLeft}px`);

      dropdown.classList.add('active');
    });

    item.addEventListener('mouseleave', () => {
      closeTimeout = setTimeout(() => {
        dropdown.classList.remove('active');
      }, 100);
    });
  });

  dropdown.addEventListener('mouseenter', () => {
    clearTimeout(closeTimeout);
  });

  dropdown.addEventListener('mouseleave', () => {
    dropdown.classList.remove('active');
  });
});
// js 윤민 파트 end
