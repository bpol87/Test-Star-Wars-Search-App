const searchDropdown = document.getElementById('section');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

const showInput = (value) =>{
let value = searchDropdown.value;
searchInput.style.display = "block";
searchBtn.style.display = "block";

}

searchDropdown.addEventListener('select', showInput);