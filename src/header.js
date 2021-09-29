import{homeCreation} from './home.js'
import{menuCreation} from './menu.js'
import{contactCreation} from './contact.js'

function headerCreation(){
    let box1 = document.getElementById("box1")

    let header = document.createElement("div")
    header.setAttribute("id","header")
    box1.append(header)

    let title = document.createElement("div")
    title.setAttribute("id","title")
    title.innerHTML = "Rib-eye Bye"
    header.append(title) 

    let buttons = document.createElement("div")
    buttons.setAttribute("id","buttons")
    header.append(buttons)

    let homeBtn = document.createElement("button")
    homeBtn.setAttribute("id","home-btn")
    homeBtn.setAttribute("class","button")
    homeBtn.innerHTML = "Home"
    homeBtn.addEventListener("click",homeCreation)
    buttons.append(homeBtn)

    let menuBtn = document.createElement("button")
    menuBtn.setAttribute("id","menu-btn")
    menuBtn.setAttribute("class","button")
    menuBtn.innerHTML = "How We Do"
    menuBtn.addEventListener("click",menuCreation)
    buttons.append(menuBtn)

    let contactBtn = document.createElement("button")
    contactBtn.setAttribute("id","contact-btn")
    contactBtn.setAttribute("class","button")
    contactBtn.innerHTML = "Contact"
    contactBtn.addEventListener("click",contactCreation)
    buttons.append(contactBtn)
}

export {headerCreation}
