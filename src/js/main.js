if(checkPage('search')) {
    // search page
  var peopleList = document.querySelector('.search_content');
  let alphabetList = document.querySelector('.alphabet');
  let alphabet = [];

  getPeople();
  getAlphabet();

   populatePeople = () =>{
    alphabet.forEach(i => {
      peopleList.innerHTML += `
        <li class="search_content_list peopleList_${i.id}">${i.value}<ul class="people_${i.id}"></ul></li>`;
      
      alphabetList.innerHTML += `
        <li><a onclick="filterPeopleWithAlphabet('${i.id}')" class="alphabet_${i.id}">${i.value}</a></li>`;

      let selectedPeople = document.querySelector(`.people_${i.id}`);
      let filteredPeople = people.filter( p => p.surname.slice(0, 1) === i.value);
      filteredPeople.forEach(p => {
        selectedPeople.innerHTML += `
         <li class="personData">${p.name} ${p.surname}</li>`;
      });
    });
  }

  async function getPeople() {
    const response = await fetch('../storage/people.json');
    people = await response.json();
    alphabet.length ? populatePeople() : '';
  }
  
   filterPeopleWithAlphabet = (id) => {
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
    people.length ? populatePeople() : '';
  }

  //search
  const search = document.getElementById('search');
  
  search.addEventListener('keyup', searchFilter);
  function searchFilter(){
    alphabet.forEach(i => {
     
      let filteredPeople = people.filter( p => p.surname.slice(0, 1) === i.value);
      filteredPeople.forEach(p => {   
        if(search.value === p.surname) {
          let filteredPerson = people.filter( p => p.surname === search.value);
          selectedPeople = document.querySelector(`.peopleList_${i.id}`);
           let peopleContentList = document.querySelectorAll('.search_content_list');
            peopleContentList.forEach(i => {
              i.style.display = 'none';
            });
            filteredPerson.forEach(person=> {
              selectedPeople.style.display = 'block';
              let personData = document.querySelectorAll('.personData')
              personData.forEach(personData => {
                personData.style.display = 'none'
              })
              selectedPeople.innerHTML += `
               <li class="personData">${person.name} ${person.surname}</li>`;  
            })
           }
      });
    })
  }
}