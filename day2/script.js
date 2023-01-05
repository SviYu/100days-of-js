const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secHand = document.querySelector('.sec-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = (((seconds / 60) * 360) + 90);
    const minDegrees = (((minutes / 60) * 360) + 90);
    const hourDegrees = ((hours / 12) * 360) + 90;

    secHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minHand.style.transform = `rotate(${minDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`



    console.log(hourDegrees)
}
setInterval(setDate, 1000)