

let chessBoard = document.getElementById('chessBoard');
let counter = 0;
let board = [],
    mycell = {
        cell: null,
        class: null
    };


setChessBoard(0, 8);
board.forEach(item => item.forEach(innerItem => {
    innerItem.addEventListener('click', www, false)
}));



function setChessBoard(number, condition) {

    let tr = document.createElement('tr');
    chessBoard.appendChild(tr);
    board.push([]);


    for (let i = number; i < condition; i++) {
        let cell = document.createElement('td');

        if (i % 2 === 0) {
            cell.className = 'white'
        } else {
            cell.className = 'brown'
        }

        tr.appendChild(cell);

        board[counter].push(cell)
    }


    if (counter !== 7) {

        counter++;
        counter % 2 === 1 ? setChessBoard(1, 9) : setChessBoard(0, 8);
    }

    return;

};



function www(e) {

    if (mycell.cell) { mycell.cell.className = mycell.class }

    mycell.cell = e.target;
    mycell.class = e.target.className;

    e.target.className = 'blue';

    document.addEventListener ('keydown', aaa, false);

    console.log (e.target)
    console.log (board)

}




function aaa () {



    if (e.keyCode === 38) { mycell.cell.previousElementSibling

        
      
    }
console.log (e.keyCode)

}

