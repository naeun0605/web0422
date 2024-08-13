$(document).ready(function () {

    // 모달팝업////////////////////////////////////

    //요소 찾기 및 이벤트 처리
    // 객체.이벤트(function(){})
    // firstList.click()=>{};

    // .notice a로 써도됨
    $('.notice li').eq(0).click(function(){
        // css({속성:값, 속성:값,...})
        $('#modal').css({display:"block"});
    });
    
    $('button').click(function(){
        $('#modal').css({display:"none"});
    });
    
    //////////////////////////////////////////////

});