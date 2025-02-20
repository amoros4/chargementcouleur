
function getRandomRGBColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    
    return  `rgb(${r}, ${g}, ${b})`;
}
function changeColor() {
    const randomColor = getRandomRGBColor();
    document.body.style.backgroundColor = randomColor;
    document. getElementById('couleur').textContent = randomColor;
    

}


let btnstart = document.querySelector(".btn1");
let btnstop = document.querySelector(".btn2");
let colorInterval;
btnstart.addEventListener('click', (e) => {
     if(!colorInterval){
        colorInterval = setInterval(changeColor, 2000);
        changeColor();
     }
     btnstart.style.backgroundColor = "black";
     btnstart.style.color = "white"
})
btnstop.addEventListener('click', (e) => {
    clearInterval(colorInterval);
       colorInterval = null;

    
})
