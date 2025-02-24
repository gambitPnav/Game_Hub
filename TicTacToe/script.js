
const boxes = document.querySelectorAll('.boxy');
const btn = document.querySelector('.btn');

let live = true;
btn.addEventListener('click', () => {
    boxes.forEach((box) => {
        box.innerHTML = '';
    })
    live = true;
})

let x_val = 0;
let o_val = 0;
let cnt=0;
const score = document.querySelector('.score');
const xImg = '<img src="./images/correct.png" alt="X" class="src">';
const oImg = '<img src="./images/incorrect.png" alt="O" class="src">';

score.innerHTML = `${xImg}=${x_val} &nbsp; &nbsp ${oImg}=${o_val}`;

const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

];
function checkwin() {
    for (let i = 0; i < wins.length; i++) {
        let a = wins[i][0]
        let c = wins[i][1]
        let b = wins[i][2]
        if (boxes[a].innerHTML != '') {
            if (boxes[a].innerHTML === boxes[b].innerHTML && boxes[a].innerHTML === boxes[c].innerHTML) {
                return true;
            }
        }
    }
    return false;
}
let turn = 'X'
boxes.forEach(box => {
    box.addEventListener('click', () => {
        if (box.innerHTML != '' || !live)
            return;
        cnt++;
        box.innerHTML = turn;
        if (turn === 'X') {
            box.innerHTML = '<img src="./images/correct.png" alt="X" class="src">';
        } else {
            box.innerHTML = '<img src="./images/incorrect.png" alt="O" class="src">';
        }
        if (checkwin()) {
            if (turn == 'X')
                x_val++;
            else
                o_val++;
                score.innerHTML = `${xImg}=${x_val} <br> ${oImg}=${o_val}`;
            live = false;
            setTimeout(() => alert(`player ${turn} has won the game`), 1000);
        }
        if (turn == 'X')
            turn = 'O';
        else
            turn = 'X';
        if(cnt==9)
        {
            x_val+=0.5;
            o_val+=0.5;
            score.innerHTML = `X=${x_val} <br> O=${o_val}`;
            live = false;
            setTimeout(() => alert(`Draw`), 1000);

        }
    })
})

