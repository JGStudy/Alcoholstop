// 사업별 웹사이트 바로가기 링크 호출 함수
function redirectToWebsite() {
  const select = document.getElementById('website-select')
  const url = select.value
  if (url) {
    window.location.href = url // 선택한 URL로 이동
  }
}
