// HTML container variables
const searchDropdown = document.getElementById('section');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const infoDetails = document.getElementById('info-details');
const filmsDrop = document.getElementById('films-drop');
const peopleDrop = document.getElementById('people-drop');
const planetsDrop = document.getElementById('planets-drop');
const speciesDrop = document.getElementById('species-drop');
const spaceshipsDrop = document.getElementById('spaceships-drop');
const vehiclesDrop = document.getElementById('vehicles-drop');

// Films Variables
const title = document.getElementById('title');
const epNum = document.getElementById('epnum');
const producer = document.getElementById('producer');
const release = document.getElementById('release');
const crawl = document.getElementById('crawl');
const director = document.getElementById('director');
const created = document.getElementById('created');
const edited = document.getElementById('edited');

// People Variables
const charName = document.getElementById('charname');
const birth = document.getElementById('birth');
const gender = document.getElementById('gender');
const eye = document.getElementById('eye');
const hair = document.getElementById('hair');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const skin = document.getElementById('skin');

// Planet Variables
const plName = document.getElementById('plname');
const diameter = document.getElementById('diameter');
const rotation = document.getElementById('rotation');
const orbital = document.getElementById('orbital');
const gravity = document.getElementById('gravity');
const population = document.getElementById('population');
const climate = document.getElementById('climate');
const terrain = document.getElementById('terrain');
const water = document.getElementById('water');

// functions to get data
const getDataArr = async () => {
    try {
      filmUrl();
let infoData = filmUrl().toString();
      const response = await fetch(infoData);
      const data = await response.json();

      // Films assignments
        title.textContent = `Film Title: "${data.title}"`
        epNum.textContent = `Episode #: ${data.episode_id}`
        director.textContent = `Director: ${data.director}`
        producer.textContent = `Producer: ${data.producer}`
        release.textContent = `Release Date: ${data.release_date}`
        crawl.textContent = `Film Opening Crawl: ${data.opening_crawl}`
        created.textContent = `Entry Created: ${data.created}`
        edited.textContent = `Entry Last Edited: ${data.edited}`

        //People Assignments
        charName.textContent = `Character: ${data.name}`
        birth.textContent = `Birth Year: ${data.birth_year}`
        gender.textContent = `Gender: ${data.gender}`
        eye.textContent = `Eye Color: ${data.eye_color}`
        hair.textContent = `Hair Color: ${data.hair_color}`
        height.textContent = `Height:${data.height}(cm)/${data.height * 0.3937}(in)`
        weight.textContent = `weight: ${data.mass}(kg)/${data.mass * 2.20}(lbs)`
        skin.textContent = `skin: ${data.skin_color}`
        
        //Planet Assignments
        plName.textContent = `Planet Name: ${data.name}`
        diameter.textContent = `Diameter: ${data.diameter}(km)/ ${data.diameter * 0.621371}(mi)`
        rotation.textContent = `Day Length: ${data.rotation_period} hrs`
        orbital.textContent = `Year Length: ${data.orbital_period} days`
        gravity.textContent = `Gravity: ${data.gravity} Standard G's`
        population.textContent = `Planet Population:${data.population}`
        climate.textContent = `Climate: ${data.climate}`
        terrain.textContent = `Terrain: ${data.edited}`
        water.textContent = `Surface Water:${data.surface_water}%`
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
    if (starWarsData === "a new hope" || starWarsData === "luke skywalker" || starWarsData === "tatooine"){
      data2 = "1"; 
    } else if (starWarsData === "the empire strikes back" || starWarsData === "c-3po" || starWarsData === "alderaan"){
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
        
        document.getElementById('info-details'). style.display = "block";

        if (outputConverted === "films") {
          document.getElementById('vehicles-drop').style.display = "none";
          document.getElementById('starships-drop').style.display = "none";
          document.getElementById('species-drop').style.display = "none";
          document.getElementById('planets-drop').style.display = "none";
          document.getElementById('people-drop').style.display = "none";
          document.getElementById('films-drop').style.display = "block";   
        } else if (outputConverted === "people") {
          document.getElementById('vehicles-drop').style.display = "none";
          document.getElementById('starships-drop').style.display = "none";
          document.getElementById('species-drop').style.display = "none";
          document.getElementById('planets-drop').style.display = "none";
          document.getElementById('films-drop').style.display = "none";
          document.getElementById('people-drop').style.display = "block"; 
        } else if (outputConverted === "planets") {
          document.getElementById('vehicles-drop').style.display = "none";
          document.getElementById('starships-drop').style.display = "none";
          document.getElementById('species-drop').style.display = "none";
          document.getElementById('people-drop').style.display = "none";
          document.getElementById('films-drop').style.display = "none";
          document.getElementById('planets-drop').style.display = "block";
        } else if (outputConverted === 'species') {
          document.getElementById('vehicles-drop').style.display = "none";
          document.getElementById('starships-drop').style.display = "none";
          document.getElementById('people-drop').style.display = "none";
          document.getElementById('planets-drop').style.display = "none";
          document.getElementById('films-drop').style.display = "none";
          document.getElementById('species-drop').style.display = "block";   
        } else if (outputConverted === "starships") {
          document.getElementById('people-drop').style.display = "none";
          document.getElementById('starships-drop').style.display = "none";
          document.getElementById('species-drop').style.display = "none";
          document.getElementById('planets-drop').style.display = "none";
          document.getElementById('films-drop').style.display = "none";
          document.getElementById('starships-drop').style.display = "block"; 
        } else if (outputConverted === "vehicles") {
          document.getElementById('people-drop').style.display = "none";
          document.getElementById('starships-drop').style.display = "none";
          document.getElementById('species-drop').style.display = "none";
          document.getElementById('planets-drop').style.display = "none";
          document.getElementById('films-drop').style.display = "none";
          document.getElementById('vehicles-drop').style.display = "block";
        }
        }
        

// call to listen for submission
searchBtn.addEventListener('click', ()=>{
    getDataArr();
    displayData();})