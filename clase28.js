const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}` 
const opts = {
    crossDomain: true
}
const onPeopleResponse = (person) => {
    console.log(`Hola yo soy ${person.name}`)
}
$.get(lukeUrl, opts, onPeopleResponse) 