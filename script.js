const searchDropdown = document.getElementById('section');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const infoDetails = document.getElementById('info-details');
const filmsDrop = document.getElementById('films-drop');
const peopleDrop = document.getElementById('peopleDrop');
const title = document.getElementById('title');
const epNum = document.getElementById('epnum');
const producer = document.getElementById('producer');
const release = document.getElementById('release');
const crawl = document.getElementById('crawl');
const director = document.getElementById('director');
const created = document.getElementById('created');
const edited = document.getElementById('edited');

let info = {};

const getDataArr = async () => {
    try {
      filmUrl();
let infoData = filmUrl().toString();
      const response = await fetch(infoData);
      const data = await response.json();

        title.textContent = `Film Title: ${data.title}`
        epNum.textContent = `Episode #: ${data.episode_id}`
        director.textContent = `Director: ${data.director}`
        producer.textContent = `Producer: ${data.producer}`
        release.textContent = `Release Date: ${data.release_date}`
        crawl.textContent = `Film Opening Crawl: ${data.opening_crawl}`
        created.textContent = `Entry Created: ${data.created}`
        edited.textContent = `Entry Last Edited: ${data.edited}`
    } 
    catch (err) {
        alert('Data not found');
        console.log(`Data not found:`);
      };
    };

function filmId() {
    let selectElement = 
          document.querySelector('#section');
    let output = selectElement.value;
    const starWarsSection = output.toLowerCase();

    const starWarsData = searchInput.value.toLowerCase();
    
    let data2; 
    if (starWarsData === "a new hope"){
      data2 = "1"; 
    } else if (starWarsData === "the empire strikes back"){
      data2 = "2";
    }

    let data = `/${starWarsSection}/${data2}`;
    return `${data}`;
}

function filmUrl() {
    filmId();
let infoData = filmId().toString();
return `https://swapi.dev/api/${infoData}`
} 

function displayData() {
        let dropdownConverted = document.querySelector('#section');
        let outputDrop = dropdownConverted.value;
        const outputConverted = outputDrop.toLowerCase();

        if (outputConverted === "films") {
            document.getElementById('people-drop').style.display = "none";
            document.getElementById('films-drop').style.display = "block";   
        } else if (outputConverted === "people") {
            document.getElementById('films-drop').style.display = "none";
           document.getElementById('people-drop').style.display = "block"; 
        }
        }

searchBtn.addEventListener('click', ()=>{
    getDataArr();
    displayData();})