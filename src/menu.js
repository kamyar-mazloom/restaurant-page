import{removeAllChildNodes} from './removeChildNode.js'

function menuCreation(){
    let box2 = document.getElementById("box2")

    removeAllChildNodes()

    let body = document.createElement("div")
    body.setAttribute("class","menu") 
    body.appendChild(createParagraph("Rib-eye Bye opened it’s doors in 2008 and from the start we focused on only one thing. Selling the best ribeye in the world without breaking the bank."))
    body.appendChild(createParagraph("Here we sell ribeye and only ribeye, by selling only one item we can increase the quality and speed while keeping the cost at a minimum. Now you know why we call it Rib-eye bye, it’s cause you come , you get your rib-eye and then you go bye bye! (yes it’s kinda lame, no we won’t change it!)"))
    body.appendChild(createParagraph("We have 5 main methods of cooking our ribeyes: Grilling / Sous vide / Sear-roasting / pan-frying & Broiling"))
    body.appendChild(createParagraph("We carry minimum of 5 sides at a time.Our sides are made daily and change depending on the local fresh produce we can source. Sides are portioned and you get to choose a minimum of 2 sides for each ribeye for free. You get more sides the bigger your ribeye is. So go big!"))
    body.appendChild(createParagraph("As for the price… well since the price of meat changes everyday we decided to change our prices daily as well. But don’t worry we never go higher than $25/lb. If we get a great deal on our meat we pass the savings to you and if we’re having a bad day, well… we shoulder the extra cost!"))
    body.appendChild(createParagraph("Hopefully the explanation is clear enough, come over and have the best steak of your life. You deserve it!"))
    box2.append(body)
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
  }

export{menuCreation}

