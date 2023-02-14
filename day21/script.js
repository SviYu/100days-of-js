const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition((data) => {
    console.log(data);
    speed.textContent = data.coords.speed || "0";
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
    console.log(err);
    alert('You have to allow using the geolocation to see the function')
})