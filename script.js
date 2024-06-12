const infoContainer = document.getElementById('info-container');
const loadMoreBtn = document.getElementById('load-more-btn');
const dropdownSelection = document.getElementById('section');
const searchBtn = document.getElementById('search-btn');
const infoTitle = document.getElementById('info-title');
const clearBtn = document.getElementById('clear-btn');
const infoWrapper = document.getElementById('infowrapper')

let dataSection;
let isDataShowing = false;

let startingIndex = 0;
let endingIndex = 10;
let dataArr = [];

function searchIdUrl() {
    let selectElement = 
          document.querySelector('#section');
    let output = selectElement.value;
    const starWarsSection = output.toLowerCase();
    let data = `/${starWarsSection}/`;
    dataSection = `https://swapi.dev/api/${data}`;
    return `https://swapi.dev/api/${data}`
    
}


const starWarsApiPull = async () => {
    try {
    searchIdUrl();
    let infoData = searchIdUrl().toString();
    const response = await fetch(infoData);
    const data = await response.json();
    dataArr = data;
    showData(data);

} catch (err) {
    alert('Data not found');
    console.log(`Data not found:`);
  }}
  
  const showMoreData = () =>{
    const { count, next, previous, results } = dataArr;
    fetch(next).then((res) => res.json()).then((data) => {
        dataArr = data;
        showData(dataArr);
    }).catch((err) => {
        alert('Data not found');
      })
  }


   const showData = (data) => {
        const { count, next, previous, results } = data;
        let selectElement = 
        document.querySelector('#section');
        let output = selectElement.value;
        const starWarsSection = output.toLowerCase();

        if (next === null) {
            loadMoreBtn.style.display = "none";
        } else {
            loadMoreBtn.style.display = "block";
        }

        if (starWarsSection === "films"){
        infoTitle.textContent = "Films";
        infoContainer.innerHTML += results.map((item) =>{
            const {title, episode_id, opening_crawl, director, producer, release_date, species, starships, vehicles, characters, planets, created, edited } = item; 
            return `
                <div id="film-block">
                    <h3>${title}</h3>
                    <p>${director}</p>
                    <p>${producer}</p>
                    <p>${release_date}</p>
                    <p>${opening_crawl}</p>
                    <p>Entry Created: ${created}</p>
                    <p>Entry Last Edited: ${edited}</p>
                </div>
            `}).join('');
        } else if (starWarsSection === "people") {
        infoTitle.textContent = "People";
        infoContainer.innerHTML += results.map((item) =>{
            const { name, height, mass, birth_year, gender, homeworld, films, species, vehicles, starships, created, edited, url } = item; 
            return `
                <div id="film-block">
                    <h3>${name}</h3>
                    <p>${gender}</p>
                    <p>${birth_year}</p>
                    <p>${height}(cm)/ ${Math.round(height / 2.54)}(in)</p>
                    <p>${mass}(kg)/${Math.round(mass * 2.205)}(lbs)</p>
                    <p>Entry Created: ${created}</p>
                    <p>Entry Last Edited: ${edited}</p>
                </div>
            `}).join('');
        } else if (starWarsSection === "planets") {
            infoTitle.textContent = "Planets";
            infoContainer.innerHTML += results.map((item) =>{
                const { name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population, residents, films, created, edited, url } = item; 
                return `
                    <div id="film-block">
                        <h3>${name}</h3>
                        <p>Diameter of Planet: ${diameter} (km)/ ${Math.floor(diameter / 1.609)} (mi)</p>
                        <p>Day Length: ${rotation_period} hours</p>
                        <p>Year Length: ${orbital_period} days</p>
                        <p>Gravity: ${gravity} G's</p>
                        <p>Climate: ${climate}</p>
                        <p>Terrain: ${terrain}</p>
                        <p>Surface Water of Planet: ${surface_water}%</p>
                        <p>Entry Created: ${created}</p>
                        <p>Entry Last Edited: ${edited}</p>
                    </div>
                `}).join('')
        } else if (starWarsSection === "species") {
            infoTitle.textContent = "Species";
            infoContainer.innerHTML += results.map((item) =>{
                const { name, classification, designation, average_height, skin_colors, hair_colors, eye_colors, average_lifespan, homeworld, language, people, films, created, edited, url } = item; 
                return `
                    <div id="film-block">
                        <h3>${name}</h3>
                        <p>Classification: ${classification}</p>
                        <p>Designation: ${designation} hours</p>
                        <p>Average Lifespan: ${average_lifespan} years</p>
                        <p>Average Height: ${average_height}(cm)/ ${Math.round(average_height /2.54)}(in)</p>
                        <p>Skin Colors: ${skin_colors}</p>
                        <p>Hair Colors: ${hair_colors}</p>
                        <p>Eye Colors: ${eye_colors}</p>
                        <p> Language(s): ${language}</p>
                        <p>Entry Created: ${created}</p>
                        <p>Entry Last Edited: ${edited}</p>
                    </div>
                `}).join('')
        } else if (starWarsSection === "starships") {
            infoTitle.textContent = "Starships";
            infoContainer.innerHTML += results.map((item) =>{
                const { name, classification, designation, average_height, skin_colors, hair_colors, eye_colors, average_lifespan, homeworld, language, people, films, created, edited, url } = item; 
                return `
                    <div id="film-block">
                        <h3>${name}</h3>
                        <p>Classification: ${classification}</p>
                        <p>Designation: ${designation} hours</p>
                        <p>Average Lifespan: ${average_lifespan} years</p>
                        <p>Average Height: ${average_height}(cm)/ ${Math.round(average_height /2.54)}(in)</p>
                        <p>Skin Colors: ${skin_colors}</p>
                        <p>Hair Colors: ${hair_colors}</p>
                        <p>Eye Colors: ${eye_colors}</p>
                        <p> Language(s): ${language}</p>
                        <p>Entry Created: ${created}</p>
                        <p>Entry Last Edited: ${edited}</p>
                    </div>
                `}).join('')
        } 
        /* else if (starWarsSection === "vehicles") {
            infoTitle.textContent = "Vehicles";
            infoContainer.innerHTML = results.map((item) =>{
                const { name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, consumables, vehicle_class, pilots, films, created, edited, url } = item; 
                return `
                    <div id="film-block">
                        <h3>${name}</h3>
                        <p>Model: ${model}</p>
                        <p>Manufacturer: ${manufacturer} hours</p>
                        <p>Cost: ${cost_in_credits} Galactic Credits years</p>
                        <p>Length: ${length}(m)/ ${Math.round(average_height * 3.281)}(ft)</p>
                        <p>Vehicle Class: ${vehicle_class}</p>
                        <p>Max Speed In Atmosphere: ${max_atmosphering_speed}(kph)/ ${Math.round(max_atmosphering_speed / 1.609)}(mph)</p>
                        <p>Crew: ${crew}</p>
                        <p>Passengers: ${passengers}</p>
                        <p> Cargo Capacity: ${cargo_capacity}(kg)/ ${Math.round(cargo_capacity * 2.205)}(lbs)</p>
                        <p>Ration Limit: ${consumables}</p>
                        <p>Entry Created: ${created}</p>
                        <p>Entry Last Edited: ${edited}</p>
                    </div>
                `}).join('')
        } */

        infoWrapper.style.display = "flex";
        isDataShowing = true;
    }


searchBtn.addEventListener('click', () => {
    infoContainer.innerHTML = '';
    starWarsApiPull();
})

clearBtn.addEventListener('click', () => {
    isDataShowing = !isDataShowing;
    infoWrapper.style.display = "none";
    infoContainer.innerHTML = '';
    dropdownSelection.selectedIndex = 0;
    startingIndex = 0;
    endingIndex = 0;
})

loadMoreBtn.addEventListener('click', ()=> {
showMoreData();
})