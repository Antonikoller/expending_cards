//first bring in all the panels into our javascript file
//querrySelectAll all of the panels into a NodeList, which is
//similar to a array.
const panels = document.querySelectorAll('.panel');
//"forEach"loop through the panels
panels.forEach(panel => {
    //for each panel i loop through...
    panel.addEventListener('click', () =>{
        //on click, execute this functions
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}