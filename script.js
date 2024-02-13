
const container = document.getElementById('container');
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");



//add a button asking for num of squares
const askPopup = document.createElement('button');
askPopup.className = 'btn';
askPopup.innerText = "New Grid";
document.body.appendChild(askPopup);
let squaresNmb ;
askPopup.addEventListener("click", () => {
    do {
        squaresNmb = prompt("Squares number do you want ? ");
    } while (squaresNmb >= 100);
    removeGrid();
    makeGrid(squaresNmb);
    addMouseOver();
});

//existing grid removed 
function removeGrid() {
    let squares = document.querySelectorAll('.square');
    squares.forEach((div) => {
        div.remove();
    });
}
let darkenSquare = [];

// a new grid generated
function makeGrid(nmb) {
    for (let i = 0; i < nmb * nmb; i++ ) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.cssText = `
        width:${100 /nmb}%;
        height:${100 /nmb}%;`;
        container.appendChild(square);
    }
    document.body.appendChild(container);
}

//by default exist a grid (16 divs)
for (let i = 0; i < 16 * 16; i++ ) {
    let square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}
document.body.appendChild(container);

function addMouseOver() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', (event) => {
            // event.target.classList.add('mouseOver');
            // event.target.style.backgroundColor = getRandomRgb();
            event.target.style.backgroundColor = `rgb(0,0,0)`;
        });
    });
}
addMouseOver();

//function to randomize the square’s RGB value entirely
function getRandomRgb() {
    return `rgb(${Math.floor(Math.random() * 256)},
                ${Math.floor(Math.random() * 256)},
                ${Math.floor(Math.random() * 256)})`;
} 
