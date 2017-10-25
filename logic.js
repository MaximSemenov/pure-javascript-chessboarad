

let chessBoard = document.getElementById('chessBoard'),
    counter = 0,
    myCell = {
        cell: null,
        class: null
    };


setChessBoard(0, 8);

chessBoard.addEventListener('click', setByClick, false);
document.addEventListener('keydown', shiftCell, false);


function setChessBoard(number, condition) {

    let tr = document.createElement('tr');
    chessBoard.appendChild(tr);

    let cellYNumber = 0;

    for (let i = number; i < condition; i++) {

        let cell = document.createElement('td');
        cell.setAttribute('data-cell-x', cellYNumber);
        cell.setAttribute('data-cell-y', counter);

        if (i % 2 === 0) {
            cell.className = 'white'
        } else {
            cell.className = 'brown'
        }

        tr.appendChild(cell);
        cellYNumber++;


    }


    if (counter !== 7) {

        counter++;
        counter % 2 === 1 ? setChessBoard(1, 9) : setChessBoard(0, 8);
    }

    return;

};



function setByClick(e) {

    if (myCell.cell) {
        myCell.cell.className = myCell.class
    }

    myCell.cell = e.target;
    myCell.class = e.target.className;
    e.target.className = 'blue';

}

function setByKeyBoard(element) {



    if (myCell.cell) { myCell.cell.className = myCell.class }

    myCell.cell = element;
    myCell.class = element.className;

    element.className = 'blue';


}

function shiftCell(e) {
console.log (myCell.cell)
    let x,
        y,
        keyCode;

    x = myCell.cell.dataset.cellX;
    y = myCell.cell.dataset.cellY;
    keyCode = e.keyCode;

    switch (keyCode) {

        case 37:
            goLeft(x, y);
            break;

        case 38:
            goUp(x, y);
            break;

        case 39:
            goRight(x, y);
            break;

        case 40:
            goDown(x, y);
            break;

    }

}

function goUp(x, y) {

    if (y == 0) {
        return;
    }
    var newCell = document.querySelector(`[data-cell-x='${x}'][data-cell-y='${y - 1}']`);
    setByKeyBoard(newCell);
}

function goLeft(x, y) {

    if (x == 0) {
        return;
    }
    var newCell = document.querySelector(`[data-cell-x='${x - 1}'][data-cell-y='${y}']`);
    setByKeyBoard(newCell);
}

function goRight(x, y) {

    if (x == 7) {
        return;
    }
    var newCell = document.querySelector(`[data-cell-x='${+x + 1}'][data-cell-y='${y}']`);
    setByKeyBoard(newCell);
}

function goDown(x, y) {
    if (y == 7) {
        return;
    }
    var newCell = document.querySelector(`[data-cell-x='${x}'][data-cell-y='${+y + 1}']`);
    setByKeyBoard(newCell);
}





