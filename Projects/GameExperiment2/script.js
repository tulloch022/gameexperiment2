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





//The Snake


let currentBox = [5,6];


const snake = [document.querySelector("#box55")];


const moveRight = () => {
    if (currentBox[1] < 10) {
        currentBox[1] +=1;
    }
    snake.push()
    console.log(currentBox)
}

const moveLeft = () => {
    if (currentBox[1] > 1) {
        currentBox[1] -=1;
        console.log(currentBox);
    }
    snake.push(document.querySelector("#box56"));
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