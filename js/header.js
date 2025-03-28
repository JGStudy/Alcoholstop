//혜련 js 시작
// 절주온(ON) 버튼
const toggleButton = document.querySelector('.top_service button');
const toggleSite = document.querySelector('.top_instit');
const toggleSiteText = document.querySelectorAll('.top_instit li');

toggleButton.addEventListener('click', () => {
  toggleSite.classList.toggle('active');
  toggleButton.classList.toggle('active');
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
// HTML 문서가 모두 로드된 후 실행되도록 이벤트 등록
document.addEventListener('DOMContentLoaded', () => {
  // 각 상단 메뉴 항목에 대응되는 드롭다운 메뉴 항목들을 정의한 객체
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

  // 상단 네비게이션 항목들(li)을 모두 선택
  const navItems = document.querySelectorAll('#navigation > li');

  // 드롭다운 영역(div)
  const dropdown = document.getElementById('globalDropdown');

  // 드롭다운이 사라질 때까지 대기하는 타이머 변수 (호버 이탈 시 바로 사라지지 않도록)
  let closeTimeout = null;

  // 각 네비게이션 항목에 마우스를 올렸을 때의 동작
  navItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      // 드롭다운이 바로 사라지지 않도록 설정한 타이머 해제
      clearTimeout(closeTimeout);

      // 해당 항목에 설정된 data-menu 속성 값 가져오기
      const menuName = item.dataset.menu;

      // menuMap에서 해당 이름에 맞는 드롭다운 항목 배열 가져오기
      const links = menuMap[menuName] || [];

      // 드롭다운 내용을 초기화하고 새 항목 추가
      dropdown.innerHTML = '';
      links.forEach((text) => {
        const a = document.createElement('a'); // 새 링크 요소 생성
        a.href = '#'; // 임시 링크 설정
        a.textContent = text; // 표시할 텍스트 지정
        a.classList.add('dropdown-link'); // CSS 클래스 적용 (스타일은 CSS에서)
        dropdown.appendChild(a); // 드롭다운 영역에 추가
      });

      // 삼각형 포인터의 위치를 현재 메뉴 중앙에 맞추기 위한 계산
      const dropdownRect = dropdown.getBoundingClientRect(); // 드롭다운 위치
      const rect = item.getBoundingClientRect(); // 현재 메뉴 위치
      const triangleLeft = rect.left + rect.width / 2 - dropdownRect.left;
      dropdown.style.setProperty('--triangle-left', `${triangleLeft}px`);

      // 드롭다운 표시
      dropdown.classList.add('active');
    });

    // 마우스가 메뉴에서 벗어날 경우, 드롭다운이 잠시 후 사라지도록 타이머 설정
    item.addEventListener('mouseleave', () => {
      closeTimeout = setTimeout(() => {
        dropdown.classList.remove('active'); // 드롭다운 숨기기
      }, 100);
    });
  });

  // 드롭다운 위에 마우스를 올릴 경우, 사라지는 타이머 해제 → 유지
  dropdown.addEventListener('mouseenter', () => {
    clearTimeout(closeTimeout);
  });

  // 드롭다운에서 마우스가 벗어나면 드롭다운 숨김
  dropdown.addEventListener('mouseleave', () => {
    dropdown.classList.remove('active');
  });
});
// js 윤민 파트 end
