let header_navigation_link = document.getElementsByClassName('header_navigation_link');
let right_side = document.getElementById('right_side');

headerColor =() => {
    if(window.location.href === "http://localhost:3000/index.html") {
        for(let i=0; i < header_navigation_link.length; i++ ){
            header_navigation_link[i].style.color = '#fff';
        } 
        right_side.classList.add("bgImage");
    }
}
headerColor();
