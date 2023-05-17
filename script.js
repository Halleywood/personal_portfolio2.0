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