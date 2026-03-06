const GRID_CONTAINER = document.querySelector('.grid-container');
const INPUT_FIELD = document.querySelector('#input-gridSize');
const INPUT_BTN = document.querySelector('#input-btn');

let mouseDown = false;

function clearGrid() {
    const cells = document.querySelectorAll('.cell');
    const rows = document.querySelectorAll('.row');
    cells.forEach((cell) => cell.remove());
    rows.forEach((row) => row.remove());
}

function generateGrid(gridSize) {
    clearGrid();

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

INPUT_BTN.addEventListener('click', function(event) {
    event.preventDefault();

    // remove any alerts. Keeps from building
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach((alert) => alert.remove());

    const userInput = parseInt(INPUT_FIELD.value);

    if (userInput > 100 || userInput < 1) {
        let alert = document.createElement('p');
        alert.classList.add('alert');
        alert.textContent = "Can only set the size between 1 and 100!";
        alert.style.color = '#fc6c6c';

        document.body.appendChild(alert);
    } else {
        generateGrid(userInput);
    }
})

document.addEventListener('mousedown', () => mouseDown = true);
document.addEventListener('mouseup', () => mouseDown = false);

generateGrid(16);