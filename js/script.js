const grid = document.querySelector('.big-square');
// const container = document.querySelector('.container-grid')
const selectLevel = document.querySelector('#play').value;

const btnPlay = document.querySelector('.btn');
btnPlay.addEventListener('click', 
function () {
    createCell(65);
    const listCells = document.querySelectorAll('.cell');
    for (let i = 1; i < listCells.length; i++) {
        const cells = listCells[i];
        cells.addEventListener('click',
            function() {
            this.classList.toggle('clicked');
        })
    }
    
});


// FUNZIONI 

function createCell (numCell){
    for (i = 1; i < numCell; i++) {
        grid.innerHTML += `<div class= "cell"> ${i}</div>`;
    }
} 

