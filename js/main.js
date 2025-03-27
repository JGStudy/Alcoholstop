// communication 탭 기능 & 더보기 링크 변경
document.addEventListener('DOMContentLoaded', () => {
  // DOMContentLoaded :

  // 탭 별로 '더보기' 링크를 설정
  const tabLinks = {
    notice: 'https://www.khepi.or.kr/board?menuId=MENU01178', //공지사항
    news: 'https://www.khepi.or.kr/board?menuId=MENU01179', //소식
    press: 'https://www.khepi.or.kr/board?menuId=MENU01180', //언론보도
  }

  //탭에 따라 필요한 요소들을 class로 가져옵니다~
  const tabs = document.querySelectorAll('.communication__tabs-item')
  const panels = document.querySelectorAll('.communication__panel')
  const moreLink = document.querySelector('.communication__more-link')

  //탭에 클릭이벤트 추가
  tabs.forEach((tab) => {
    // 클릭이 되면
    tab.addEventListener('click', () => {
      // tab.dataset.tab : data-tab 속성의 값을 읽어옵니당 (여기선 탭이름)
      const target = tab.dataset.tab
      if (!target) return // .communication__tabs-item 중에서, data-tab이 없는 '더보기' 무시

      // 탭 활성화 처리
      tabs.forEach((el) =>
        el.classList.remove('communication__tabs-item--active'),
      )
      tab.classList.add('communication__tabs-item--active')

      // 콘텐츠 패널 전환
      panels.forEach((panel) =>
        panel.classList.remove('communication__panel--active'),
      )
      const targetPanel = document.getElementById(target)
      if (targetPanel) {
        targetPanel.classList.add('communication__panel--active')
      }

      // 더보기 링크 변경
      if (tabLinks[target]) {
        moreLink.href = tabLinks[target]
      }
    })
  })

  // 페이지를 로드하면, 지금 '활성화 된 탭'에 따라 '더보기'의 링크를 설정합니다~
  const defaultActiveTab = document.querySelector(
    '.communication__tabs-item--active',
  )
  if (defaultActiveTab) {
    const defaultTarget = defaultActiveTab.dataset.tab
    if (tabLinks[defaultTarget]) {
      moreLink.href = tabLinks[defaultTarget]
    }
  }
})
