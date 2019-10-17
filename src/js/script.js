  // resp_menu
  const toggler_item = document.querySelector(".toggler_item");
  const resp_menu = document.querySelector(".resp_menu");
  const toggler_menu = document.getElementById('menu');
 
   resp_menu.addEventListener('click', function(){
     toggler_item.classList.toggle('open');
     toggler_menu.classList.toggle('resp_toggler_menu');
   })

let header_navigation_link = document.getElementsByClassName('header_navigation_link');
let right_side = document.getElementById('right_side');
let header_navigation = document.getElementById('header_navigation')
headerColor =() => {
    if(window.location.href  != "/index.html") {
      console.log("test")
        for(let i=0; i < header_navigation_link.length; i++ ){
            header_navigation_link[i].style.color = '#fff';
        } 
        right_side.classList.add("bgImage");
    }
}
headerColor();