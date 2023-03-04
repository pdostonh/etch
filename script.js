
for (let i = 0; i < 16; i++) {
    let newRow = document.createElement('div');
    for (let j = 0; j < 16; j++) {
        let newDiv = document.createElement('div');
        newDiv.style = 'height: 20px; width: 20px; border: solid red 1px';
        newRow.appendChild(newDiv);
        newDiv.addEventListener('mouseover', () => {
            //newDiv.style.borderColor = "blue";
            newDiv.style.background = "blue";
        });
    }
    document.body.appendChild(newRow);
}
