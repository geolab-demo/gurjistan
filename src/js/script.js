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
    if(window.location.pathname   === "/index.html") {
        for(let i=0; i < header_navigation_link.length; i++ ){
            header_navigation_link[i].style.color = '#fff';
        } 
        right_side.classList.add("bgImage");
    }
}
headerColor();

if(window.location.pathname  != "/search.html") {
    // search page
  let peopleList = document.querySelector('.search_content');
  let alphabetList = document.querySelector('.alphabet');
  let alphabet = [];

  getPeople();
  getAlphabet();

  function populatePeople() {
    alphabet.forEach(i => {
      peopleList.innerHTML += `
        <li class="search_content_list peopleList_${i.id}">${i.value}<ul class="people_${i.id}"></ul></li>`;
      
      alphabetList.innerHTML += `
        <li><a onclick="filterPeopleWithAlphabet('${i.id}')" class="alphabet_${i.id}">${i.value}</a></li>`;

      let selectedPeople = document.querySelector(`.people_${i.id}`);
      let filteredPeople = people.filter( p => p.surname.slice(0, 1) === i.value);
      filteredPeople.forEach(p => {
        selectedPeople.innerHTML += `
         <li>${p.name} ${p.surname}</li>`;
      });
    });
  }

  async function getPeople() {
    const response = await fetch('../storage/people.json');
    people = await response.json();
    if(alphabet.length) {
      populatePeople();
    }
  }
  
  function filterPeopleWithAlphabet(id) {
    let peopleContentList = document.querySelectorAll('.search_content_list');
    let selectedPeople = document.querySelector(`.peopleList_${id}`);

    peopleContentList.forEach(i => {
      i.style.display = 'none';
    });
    selectedPeople.style.display = 'block';
  }

  async function getAlphabet() {
    const response = await fetch('../storage/alphabet.json');
    alphabet = await response.json();
    if(people.length) {
      populatePeople();
    }
  }
}