const buttons = document.querySelectorAll('.button');
const squareBoxes = document.querySelectorAll('.square-box');
const buttonColors = Array.from(buttons).map(button => getComputedStyle(button).backgroundColor);

squareBoxes.forEach(box => box.style.top = '-800px');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        
        const buttonColor = buttonColors[index];
        
        squareBoxes.forEach((box, boxIndex) => {
            box.style.top = '-800px';
            box.style.backgroundColor = buttonColors[boxIndex]; 
            box.style.borderColor = buttonColors[boxIndex]; 
        });

        squareBoxes[index].style.display = 'block';
        squareBoxes[index].style.backgroundColor = 'transparent'; 
        squareBoxes[index].style.borderColor = buttonColor;
        squareBoxes[index].style.top = '250px';
    });
});