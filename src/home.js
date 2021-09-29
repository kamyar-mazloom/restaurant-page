import{removeAllChildNodes} from './removeChildNode.js'


function homeCreation(){
    let box2 = document.getElementById("box2")

    removeAllChildNodes()

    let body = document.createElement("div")
    body.setAttribute("class","home")
    body.appendChild(createParagraph("What is life's biggest pleasure? Good Food"))
    body.appendChild(createParagraph("What is the best food on this blue marble? Steak"))
    body.appendChild(createParagraph("What is the best cut of steak? Rib-eye"))
    body.appendChild(createParagraph("And where can you find the best rib-eye?"))
    body.appendChild(createParagraph("Right here in Rib-eye Bye"))
    box2.append(body)
}

//create paragraphs
function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
  }

export{homeCreation}
