
window.addEventListener("DOMContentLoaded", () => {

    //모바일버튼(햄버거버튼) 모션 처리와 헤더 등장

    // 요소찾기
    const collapsedMenuIcon = document.querySelector(".collapsedMenuIcon");
    const nav = document.querySelector("nav");

    //이벤트 처리
    collapsedMenuIcon.onclick = (e) => {
      // event.currentTarget은 이벤트 함수내에서 객체 자신을 가리킨다.
      btnMotion(event.currentTarget);
      //함수호출
      // 화살표 함수 이벤트 안에서의 this는 window이다.
      // 익명함수 이벤트 내에서 this는 이벤트 객체이다. 
      // myFunction(this);
      // 객체에서의 this와 같은게 event.currentTarget이다.

      // console.log(collapsedMenuIcon);
      // console.log(e.currentTarget);
      // 만약 화살표함수로 안쓰고 function(e) 이렇게쓰면 this로도 가능
      // ㄴ console.log(this);
      // console.log(event.currentTarget);
    };

    // 호이스팅
    // 함수 선언(정의)
    function btnMotion(x) {

      // classList.add("선택자"); => 선택자 추가
      // classList.remove("선택자"); => 선택자 제거
      // classList.toggle("선택자"); => 선택자를 추가 또는 제거


      
      // x객체가 change가 있으면 제거, 아니면 추가
      x.classList.toggle("change");

      // nav태그의 change클래스가 추가됨 그럼 nav먼저 찾아야함
      nav.classList.toggle("change");
    }

    //호출
    // 원래 함수는 선언먼저 하고 호출하는데 선언적함수는 호출먼저 하고 선언해도됨

  });
