// GLOBAL CONSTANTS //
const exitButton = document.querySelector('.exit-button')
const messageWindow = document.querySelector('#message-window')
const fileButton = document.querySelector('#file')
let fileOptionsDiv
const menuOptionsP = document.querySelector('.file-options')

// CALLBACK FUNCTIONS //

function handleExit(event) {
    // messageWindow.style.display = 'none'
    messageWindow.remove()
    console.log(event)
}

function handleMouseOverFile(event) {
    const menuOptions = ['New', "Open", `Save`]

    const menuDiv = document.createElement('div')
    fileOptionsDiv = menuDiv

    menuDiv.style.position = 'absolute'
    menuDiv.style.top = "40px"
    menuDiv.style.left = "20px"
    menuDiv.style.minHeight = "200px"
    menuDiv.style.minWidth = "100px"
    menuDiv.style.backgroundColor = "#B5B6B5"
    menuDiv.style.border = "solid black 2px"
    menuDiv.style.zIndex = 1

    fileButton.append(menuDiv)

    menuOptions.forEach(optionString => {
        const optionP = document.createElement('p')
        optionP.textContent = optionString
        menuDiv.append(optionP)
    })
}

function handleMouseLeaveFile(event) {
    fileOptionsDiv.remove()
}

function whoAmI(event) {
    event.stopPropagation()
    // event propagation
    // or event bubbling
    console.log(event.target)
}


// EVENT HANDLERS //

exitButton.addEventListener("click", handleExit)

// arrow fn version:
// exitButton.addEventListener("click", () => messageWindow.remove())

fileButton.addEventListener("mouseover", handleMouseOverFile)

fileButton.addEventListener("mouseleave", handleMouseLeaveFile)

menuOptionsP.addEventListener("click", whoAmI)







// ...here is an alternate way of attaching event listeners 
// ( exitWindow would be a predefined function )
// exitButton.onclick = exitWindow