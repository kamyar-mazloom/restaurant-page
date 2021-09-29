import{removeAllChildNodes} from './removeChildNode.js'


function contactCreation(){
    let box2 = document.getElementById("box2")

    removeAllChildNodes()

    let body = document.createElement("div")
    body.setAttribute("class","home")
    body.appendChild(createParagraph("📞 123 456 78"))
    body.appendChild(createParagraph("🏠 Hollywood Boulevard 42, Los Angeles, USA"))
    box2.append(body)
}

//create paragraphs
function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
  }

export{contactCreation}
