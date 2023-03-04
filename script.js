let sideNum = 20;
let btnSide = document.createElement('button');
btnSide.innerText = "sides count";
btnSide.addEventListener('click', () => {
    console.log('buttonFunc is working');
    let sideNumAsk = prompt('how many sides but less than 20');
    if (sideNumAsk > sideNum || sideNumAsk < 1) {sideNum = 20}
        else {sideNum = sideNumAsk};
    play(sideNum);
});
document.body.appendChild(btnSide);

function play(sideNum) {
    console.log('play is working');
    let playground = document.createElement('div');
    playground.className = 'playground';
    for (let i = 0; i < sideNum; i++) {
        let newRow = document.createElement('div');
        for (let j = 0; j < sideNum; j++) {
            let newDiv = document.createElement('div');
            newDiv.style = 'height: 20px; width: 20px; border: solid red 1px';
            newRow.appendChild(newDiv);
            newDiv.addEventListener('mouseover', () => {
                //newDiv.style.borderColor = "blue";
                newDiv.style.background = "blue";
            });
        };
        playground.appendChild(newRow);
    };
    document.body.appendChild(playground);
    btnSide.addEventListener('click', () => {
        document.body.removeChild(playground);
    });
};

