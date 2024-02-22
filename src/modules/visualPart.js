export { generateGrid };

const gridDiv = document.querySelectorAll('.board-grid');
const numericalPositions = document.querySelectorAll('.numerical-marks');
const letterPositions = document.querySelectorAll('.letter-marks');

function generateGrid() {
  gridDiv.forEach((div) => {
    for (let i = 0; i < 100; i++) {
      const innerDiv = document.createElement('div');
      innerDiv.classList.add('cell');
      div.appendChild(innerDiv);
    }
  });

  addBoardNumericPositions(numericalPositions);
  addBoardLetterPositions(letterPositions);
}

function addBoardNumericPositions(typeOfPosition) {
  typeOfPosition.forEach((position) => {
    for (let i = 1; i < 11; i++) {
      const positionMark = document.createElement('div');
      positionMark.classList.add('board-position');
      positionMark.textContent = i;
      position.appendChild(positionMark);
    }
  });
}

function addBoardLetterPositions(typeOfPosition) {
  typeOfPosition.forEach((position) => {
    const characters = 'ABCDEFGHIJ';
    for (let i = 0; i < 10; i++) {
      const positionMark = document.createElement('div');
      positionMark.classList.add('board-position');
      positionMark.textContent = characters[i];
      position.appendChild(positionMark);
    }
  });
}
