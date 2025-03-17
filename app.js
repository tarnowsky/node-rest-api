const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

const ptWin = document.querySelector('.pt-win');
const ptLose = document.querySelector('.pt-lose');
const ptTie = document.querySelector('.pt-tie');

const youCh = document.querySelector('.you-ch');
const cmpCh = document.querySelector('.cmp-ch');

const res = document.querySelector('.results');

const reset = document.querySelector('.reset');


let [win, lose, tie] = JSON.parse(localStorage.getItem('res')) || [0, 0, 0]
updateScore();

function updateScore() {
    ptWin.innerText = win;
    ptLose.innerText = lose;
    ptTie.innerText = tie;

    localStorage.setItem('res', JSON.stringify([win, lose, tie]));
}

reset.addEventListener('click', () => {
    win = lose = tie = 0;
    updateScore();
})

const updateRes = (results) => {
    switch (results) {
        case 0:
            res.innerText = "It's a Tie."
            break;
        case 1:
            res.innerText = "You Win!"
            break;
        case 2:
            res.innerText = "You Lost..."
            break;
        default:
            break;
    }
}

const choose = (text) => {
    youCh.innerText = text;

    let cmpOpt = [
        'Rock', 'Paper', 'Scissors'
    ]

    let i = Math.floor(Math.random() * 3);
    cmpRes = cmpOpt[i];

    cmpCh.innerText = cmpRes;

    if (cmpRes === text) {
        tie++;
        updateRes(0);
    }
    else {
        if (text === 'Rock') {
            if (cmpRes === 'Paper') {
                lose++;
                updateRes(2);

            }
            if (cmpRes === 'Scissors') {
                win++;
                updateRes(1);
            }
        }
        if (text === 'Scissors') {
            if (cmpRes === 'Rock') {
                lose++;
                updateRes(2);

            }
            if (cmpRes === 'Paper') {
                win++;
                updateRes(1);

            }
        }
        if (text === 'Paper') {
            if (cmpRes === 'Scissors') {
                lose++;
                updateRes(2);

            }
            if (cmpRes === 'Rock') {
                win++;
                updateRes(1);
                
            }
        }
    }

    updateScore();
}

rock.addEventListener('click', (e) => {
    choose(e.currentTarget.innerText)
});
paper.addEventListener('click', (e) => {
    choose(e.currentTarget.innerText)
});
scissors.addEventListener('click', (e) => {
    choose(e.currentTarget.innerText)
});

