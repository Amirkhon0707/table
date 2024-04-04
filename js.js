const box = document.querySelector('.box')
const amount = 638;

for (let i = 1; i <= amount; i++) {
    let square = document.createElement('div')
    square.classList.add('square')
    
    square.addEventListener('mouseenter', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))
    
    
    box.append(square);
}

function setColor(el) {
    el.style.background = random() 
}

function removeColor(el) {
    el.style.background = 'none'
}

function random() {
    const  first = Math.floor(Math.random() * 256)
    const  second = Math.floor(Math.random() * 256)
    const  third = Math.floor(Math.random() * 256)
    return `rgb(${first}, ${second}, ${third})`
}