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


let currentBox = 55;

const snake = [document.querySelector("#box55")];

const moveRight = () => {
    currentBox -=1;
    snake.push()
}

const moveLeft = () => {
    snake.push(document.querySelector(""));
    console.log(snake);
}