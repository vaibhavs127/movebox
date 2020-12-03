let box = document.createElement("div");

let x = {
  top: 40,
  left: 40,
};

document.addEventListener("keydown", moveBox);
document.addEventListener("click", newBox);
// document.addEventListener("click", removeBox);

function newBox() {
  document.body.appendChild(box);
}

// function removeBox() {
//   let parent = document.querySelector("body");
//   let child = parent.querySelector("div");
//   console.log(child);
//   parent.removeChild(child);
// }

function moveBox(e) {
  if (e.keyCode === 37) {
    x.left -= 10;
  }
  if (e.keyCode === 38) {
    x.top -= 10;
  }
  if (e.keyCode === 39) {
    x.left += 10;
  }
  if (e.keyCode === 40) {
    x.top += 10;
  }

  box.style.top = x.top + "px";
  box.style.left = x.left + "px";
}
