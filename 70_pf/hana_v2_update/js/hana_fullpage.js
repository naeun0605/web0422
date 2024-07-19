// Hanatour fullpage.js

//바닐라 자바스크립트를 사용한 초기화
// window.addEventListener("DOMContentLoaded",function(){
//     new fullpage('#fullpage', {
//         //options here
//         autoScrolling:true,
//         scrollHorizontally: true
//     });
// });


//jQuery를 사용한 초기화
$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true
	});

	//methods
	$.fn.fullpage.setAllowScrolling(false);
});

