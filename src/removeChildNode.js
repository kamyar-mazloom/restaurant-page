//Remove child nodes 
function removeAllChildNodes() {
  let box2 = document.getElementById("box2")
    while (box2.firstChild) {
        box2.removeChild(box2.firstChild);
    }
  }
export{removeAllChildNodes}