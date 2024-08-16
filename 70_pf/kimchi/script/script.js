$(document).ready(function(){

    // 슬라이드
    let idx = 0;
    setInterval(autoSlide, 2000);

    function autoSlide(){
        console.log("idx",idx);
        
        // (조건) ? 참 : 거짓
        // idx 0 -> 1 -> 2 -> 0
        (idx === 2) ? idx = 0 : idx++;

        // 1in, 0out -> 2in, 1out -> 0in, 2out
        $("#slide li").eq(idx).fadeIn(1000, function(){
            if (idx === 0) idx = 3;
            $("#slide li").eq(idx-1).fadeOut(1000);
            if (idx === 3) idx = 0;
        });
    }




    // 모달 팝업
    $('.notice li').eq(0).click(function(){
        $('#modal').css({
            display:"block"});
    });

    $('button').click(function(){
        $('modal').css({display:"none"});
    });
    
});