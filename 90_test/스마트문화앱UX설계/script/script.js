window.addEventListener("DOMContentLoaded",() =>{

    const collapsedMenuIcon = document.querySelector(".collapsedMenuIcon");
    const nav = document.querySelector("nav");

    collapsedMenuIcon.onclick = (e) =>{
        btnMotion(event.currentTarget);
    };

    function btnMotion(x){
        x.classList.toggle("change");
        nav.classList.toggle("change");
    }
});