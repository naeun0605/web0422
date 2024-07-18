// section1 - carousel
// bxSlider.js Plug-in (직접 가져다 쓴거)
// Library는 Plug-in들의 모음

//제이쿼리 라이브러리
//bx슬라이더 라이브러리
//리액트 라이브러리
//부트스트랩 프레임워크


/*
    프레임워크
    애플리케이션의 구조 또는 틀을 제공하며, 개발을 위한 기본적인 형태와 필수 요소를 포함하고 있습니다. 프레임워크가 정한 규칙과 구조 내에서 개발을 진행해야 합니다.
    예) 부트스트랩 프레임워크

    라이브러리
    특정 기능을 수행하는 코드의 집합으로, 개발자가 필요에 따라 선택적으로 사용할 수 있다.
    예) 제이쿼리

    플러그인
    어떤 특정한 하나의 문제를 해결하기 위한 컴포넌트(component)이다.

*/


//제이쿼리
$('.bxslider').bxSlider({
    // 자동 슬라이드 하면서 play/stop 버튼 숨기기로
    auto: true, /* 자동 슬라이드 => 이거 false하면 버튼의 의미가 없어지니까 play/stop 버튼까지 숨겨진 것*/
    autoControls: false, /* play/stop 버튼 표시 */
    stopAutoOnClick: true, /* 클릭 시 자동 슬라이드 정지(순간멈춤) */
    pager: true, /* 페이저(pagination, indicator)는 아래 동그라미 */
    //slideWidth: 1903 /* 슬라이드 한 장 크기(단, px단위 생략)*/ 
  });