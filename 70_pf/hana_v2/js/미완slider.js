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


//바닐라 스크립트(순수자바스크립트)
/*
window.addEventListener("DOMContentLoaded", function(){
    // 문서가 준비되면 실행할 코드;
});
*/

//제이쿼리 

//$(document).click(function(){})
// ready라는 이벤트 : document의 dom에 있는 
$(document).ready(function(){
    // 문서가 준비되면 실행할 코드;

// https://bxslider.com/examples/auto-show-start-stop-controls

$('.bxslider').bxSlider({

    //General =====================================================================

    //mode:"horizontal(기본값)," "fade", "vertical"
    mode:"horizontal",
    //speed:500(기본값) (단위는 밀리초) (숫자 작을수록 빠름)
    speed:500,
    //slideMargin: 0(기본값), /* 이미지 사이의 여백 - 한장일땐 의미 없음 */
    // https://gsgd.co.uk/sandbox/jquery/easing/
    //easing:null, /* 가속도 */

    //Pager =====================================================================
    //pager:true(기본값) - pagination, indicator라고 부른다.
    //pager: true, /*아래 동그라미 */
    //pagerType:"full(기본값)", "short으로 하면 숫자로 바뀜"
    //pagerType:"short",
    //pagerShortSeparator:"/"(기본값)
    //pagerShortSeparator:" | ",

    //Controls =====================================================================
    //controls:true, (기본값) => prev/next버튼
    //controls:false,
    autoControls: false, /* play/stop 버튼 표시 */



    //Auto =====================================================================
    // 자동 슬라이드 하면서 play/stop 버튼 숨기기로
    auto: true, /* 자동 전환 슬라이드 => 이거 false하면 버튼의 의미가 없어지니까 play/stop 버튼까지 숨겨진 것*/
    stopAutoOnClick: true, /* 클릭 시 자동 슬라이드 정지(순간멈춤) */
    pause : 4000, /* 일시 정지시간 - 기본값(4000) */
    autoStart: true, /* 기본값(true) => 자동슬라이드*/
    //autoDirection : "next"(기본값) => 슬라이드 방향/ prev로 하면 방향 반대로
    autoHover : true, /* false(기본값), true이면 슬라이드에 호버 시 일시정지 */
    autoDelay:4000,/* 0(기본값) => 자동 슬라이드 시작 시 지연 시간 */
    //slideWidth: 600 /* 슬라이드 한 장 크기(단, px단위 생략)*/ 
  });

}); //document.ready()