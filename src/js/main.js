if(checkPage('search')) {
    // search page
  var peopleList = document.querySelector('.search_content');
  let alphabetList = document.querySelector('.alphabet');
  let alphabet = [];
  let people = [];

  getPeople();
  getAlphabet();

   populatePeople = (peopleArr, fromSearch) =>{
    alphabet.forEach(i => {
      if(!fromSearch) {        
        alphabetList.innerHTML += `
          <li><a onclick="filterPeopleWithAlphabet('${i.id}')" class="alphabet_${i.id}">${i.value}</a></li>`;
      }
      peopleList.innerHTML += `
      <li class="search_content_list peopleList_${i.id}">${i.value}<ul class="people_${i.id}"></ul></li>`;

      let selectedPeople = document.querySelector(`.people_${i.id}`);
      let filteredPeople = peopleArr.filter( p => p.surname.slice(0, 1) === i.value);
      filteredPeople.forEach(p => {
        selectedPeople.innerHTML += `
         <li class="personData">${p.name} ${p.surname}</li>`;
      });
    });
  }

  async function getPeople() {
    const response = await fetch('../storage/people.json');
    people = await response.json();
    alphabet.length ? populatePeople(people, false) : '';
  }
  
   filterPeopleWithAlphabet = (id) => {
    let selectedPeople = document.querySelector(`.peopleList_${id}`);
    let peopleContentList = document.querySelectorAll('.search_content_list');
    peopleContentList.forEach(i => {
      i.style.display = 'none';
    });
    peopleChildren()
    selectedPeople.style.display = 'block';
  }

  async function getAlphabet() {
    const response = await fetch('../storage/alphabet.json');
    alphabet = await response.json();
    people.length ? populatePeople(people, false) : '';
  }

  //search
  const search = document.getElementById('search');

  search.addEventListener('keyup', function(e) {
    e.preventDefault();
    let searchPerson = [...people];
    if(this.value) {
      searchPerson = people.filter(p => p.surname.indexOf(this.value) >= 0 ||  p.name.indexOf(this.value) >= 0);
    }
    peopleList.innerHTML = '';
    populatePeople(searchPerson, true);
  });
}


function peopleChildren() {
  let peopleContentList = document.querySelectorAll('.search_content_list');
    peopleContentList.forEach(i => {
     
      let peopleChilren = i.childNodes[1].children;
      let currentIndex = 0;
      let maxresult =2;
			for(let i=0; i< maxresult; i++) {
				if( peopleChilren.length > maxresult) {
          // let selectedPeople = document.querySelector(`.people_${i.id}`);
          // selectedPeople.innerHTML += `
          //     <li>სრულად</li>`;
					Array.from(peopleChilren).forEach(data => {
            console.log(data)
            // selectedPeople.innerHTML += `
            //    <li>სრულად</li>`;
            console.log(peopleChilren[2])
            
          })
				}
      }//   currentIndex += maxresult;
    })
    
}

