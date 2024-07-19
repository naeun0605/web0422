// section common layout 
//jquery Hanatour fullpage.js Plug-in



//2.9.7 버전제이쿼리 사용한 초기화
// 아래랑 같은 뜻 => $(document).ready(function(){
// $(function(){
//     $('#wrap').fullpage({
//         menu: '#hana_nav',
//         anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
//         sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke'],
//         navigation: true,
//         navigationTooltips: ['section1', 'section2', 'section3', 'section4'],
//         showActiveTooltip: true,
//         //slidesNavigation: true,
//         //loopHorizontal: false,
//     });
// });


/* 
    데이터 유형
    1. 숫자
    2. 문자열
    3. 불
    4. undefined
    5. 객체: {속성:값, 속성:값, ...}
        - 배열 : [값, 값, 값, ...]
*/

//바닐라 자바스크립트를 사용한 초기화
// window.addEventListener("DOMContentLoaded",function(){
//     new fullpage('#fullpage', {
//         //options here
//         autoScrolling:true,
//         scrollHorizontally: true
//     });
// });


// //jQuery를 사용한 초기화
// $(document).ready(function() {
// 	$('#fullpage').fullpage({
// 		//options here
// 		autoScrolling:true,
// 		scrollHorizontally: true
// 	});

// 	//methods
// 	$.fn.fullpage.setAllowScrolling(false);
// });

// Hanatour fullpage.js

// document).ready 생략 가능
// $(document).ready(function() {
    $(function(){

        $('#wrap').fullpage({
            //menu: '#hana_nav',
            //anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
            // 배경색
            //sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke'],

            // 오른쪽에 있는 indicator - false(기본값)
            navigation: true,
            // true로 하면 처음부터 써있고 주석처리하거나 false하면 마우스 올렸을 때만 나타남
            navigationTooltips: ['Home', 'Best Tour', 'Favorite', 'Culture'],
            //showActiveTooltip: true,
            //slidesNavigation: true,
            //loopHorizontal: false,
        });
    });