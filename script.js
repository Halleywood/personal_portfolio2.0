const sections = document.querySelectorAll('.section');

function toggleAccordion(){
    sections.forEach(section=>{
        section.classList.remove('active');
    })
    this.classList.add('active');
}
sections.forEach( section =>{
    section.addEventListener('click', toggleAccordion);
})


window.requestAnimationFrame = window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function(f){return setTimeout(f, 1000/60)} //last fallback incase browser not compatible 

// const imageArray = [
//     "const newFunction = () =>{ console.log('this is a test')}",
//     "function findRepeatingConstantInArray(array){ for some test code here blah blah blah blah blah}"
// ]
// const newImage = document.querySelector('#icon-image')

// const generateRandomNumber= ()=>{
//     return Math.floor(Math.random() * (4)); 
// }
// let interval=3100
// let lastTime=0
// const changeImage=(timestamp)=>{

//     if(timestamp - lastTime >= interval){
//         // newImage.setAttribute("src", imageArray[generateRandomNumber()])
//         newImage.innerText = imageArray[generateRandomNumber()]
//         lastTime = timestamp
//     }
//     requestAnimationFrame(changeImage)
// }

// requestAnimationFrame(changeImage);

const activeCards = document.querySelectorAll('.card-body');

function changeActiveCard(){
    activeCards.forEach(card=>{
        card.classList.remove('active-card');
    })
    this.classList.add('active-card');
}

activeCards.forEach((card)=>{
    card.addEventListener('mouseover', changeActiveCard);
})