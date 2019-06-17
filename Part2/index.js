// console.log('The House always wins!')
let idInput = document.getElementById('idInput')
let colorInput = document.getElementById('colorInput')

// console.log(idInput)
// console.log(colorInput)

function setCard(){
    let card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;
    console.log(card)
};