const divs = document.querySelectorAll('div');

function logText(e){
  console.log(this.classList.value);

  //prevent bubbling
  //e.stopPropagation();
}

divs.forEach(div => div.addEventListener('click', logText, {capture: false,
  //runs click event only once
  once: true
}))