const GRID_CONTAINER = document.querySelector('.grid-container');
const INPUT_FIELD = document.querySelector('#input-gridSize');
const INPUT_BTN = document.querySelector('#input-btn');

const gridSize = 16;

let mouseDown = false;

function generateGrid() {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);

            cell.addEventListener('mouseover', function(e) {
                if (mouseDown) {
                    cell.style.backgroundColor = 'black';
                }
            })
        }

        GRID_CONTAINER.appendChild(row);
    }
}

INPUT_BTN.addEventListener('click', function() {
    
})

document.addEventListener('mousedown', () => mouseDown = true);
document.addEventListener('mouseup', () => mouseDown = false);

generateGrid();