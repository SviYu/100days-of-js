const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylight Drive', 'Anywhere But Here', 'An Old Dog'];
const bandsList = document.querySelector('#bands');


function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
}

const sortedBands = bands.sort( (a, b) => {
    return (strip(a) > strip(b)) ? 1 : -1;
})

/* for (let i = 0; i < sortedBands.length; i++){
    bandsList.innerHTML += `
        <li>
            <a href="">${sortedBands[i]}</a>
        </li>
    `
} */

bandsList.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('')

console.log(sortedBands);