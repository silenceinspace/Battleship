export { generateGrid, addBoardPositions };

const divs = document.querySelectorAll('.board-grid');
function generateGrid() {
  divs.forEach((div) => {
    for (let i = 0; i < 100; i++) {
      const innerDiv = document.createElement('div');
      innerDiv.classList.add('cell');
      div.appendChild(innerDiv);
    }
  });
}

const numericalPositions = document.querySelectorAll('.numerical-marks');
const charPositions = document.querySelectorAll('.char-marks');
function addBoardPositions() {
  numericalPositions.forEach((position) => {
    for (let i = 1; i < 11; i++) {
      const positionMark = document.createElement('div');
      positionMark.classList.add('board-position');
      positionMark.textContent = i;
      position.appendChild(positionMark);
    }
  });

  charPositions.forEach((position) => {
    const characters = 'ABCDEFGHIJ';
    for (let i = 0; i < 10; i++) {
      const positionMark = document.createElement('div');
      positionMark.classList.add('board-position');
      positionMark.textContent = characters[i];
      position.appendChild(positionMark);
    }
  });
}
