//User input

window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return;
  }

  switch (event.key) {
    case "ArrowDown":
      moveDown();
      break;
    case "ArrowUp":
      moveUp();
      break;
    case "ArrowLeft":
      moveLeft();
      break;
    case "ArrowRight":
      moveRight();
      break;
    default:
      return;
  }


  event.preventDefault();
}, true);





const moveRight = () => {
    let currentBox = [1,1];
    if (currentBox[1] < 10) {
        currentBox[1] += 1;
        console.log(currentBox);
        if (currentBox = [1,1]) {
            let box = document.querySelector('#box1');
            box.style.backgroundColor = 'white';
        } else if (currentBox = [1,2]) {
            let box = document.querySelector('#box2');
            box.style.backgroundColor = 'white';
        } else if (currentBox = [1,3]) {
            let box = document.querySelector('#box3');
                box.style.backgroundColor = 'white';
            }
        }
}

const moveLeft = () => {
    if (currentBox[1] > 1) {
        currentBox[1] -=1;
        console.log(currentBox);
    }
}

const moveUp = () => {
    if (currentBox[0] > 1) {
        currentBox[0] -= 1;
        console.log(currentBox);
    }
}

const moveDown = () => {
    if (currentBox[0] < 10) {
        currentBox[0] += 1;
        console.log(currentBox);
    }
}






//The Snake



