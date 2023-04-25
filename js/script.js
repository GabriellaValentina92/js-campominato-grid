const grid = document.querySelector('.big-square');
const selectLevel = document.querySelector('#play').value;
const title = document.querySelector('.intro')


const btnPlay = document.querySelector('.btn');
btnPlay.addEventListener('click', 
function () {
    createCell(101);
    const listCells = document.querySelectorAll('.cell');
    for (let i = 1; i < listCells.length; i++) {
        const cells = listCells[i];
        cells.addEventListener('click',
            function() {
            this.classList.toggle('clicked');
        })
    }

    title.remove();
});


// FUNZIONI 

function createCell (numCell){
    for (i = 1; i < numCell; i++) {
        grid.innerHTML += `<div class= "cell"> ${i}</div>`;
    }
} 

