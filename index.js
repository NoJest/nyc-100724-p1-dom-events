// GLOBAL CONSTANTS //
const exitButton = document.querySelector('.exit-button')
const messageWindow = document.querySelector('#message-window')
const fileButton = document.querySelector('#file')
let fileOptionsDiv
const menuOptionsP = document.querySelector('.file-options')

// messenger constants
const messageForm = document.querySelector('.message-form')
const messageInput = messageForm.querySelector('input')
const messageBox = document.querySelector('.messages')

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
    event.stopPropagation() // should stop the event from bubbling up
    // event propagation
    // or event bubbling
    console.log(event.target)
}

function handleNewMessage(event) {
    // stop the page from refreshing
    event.preventDefault()
    // get what the user typed
    const newMessage = messageInput.value

    
    const newMessageElement = document.createElement('p')
    newMessageElement.textContent = newMessage
    
    const timeStamp = document.createElement('span')
    timeStamp.className = 'blue-text'
    // get hours and minutes in a string
    const now = new Date
    timeStamp.textContent = `${now.getHours()}:${now.getMinutes()}`
    newMessageElement.prepend(timeStamp)    

    messageBox.append(newMessageElement)

    // resets the form / empties the input
    messageForm.reset()
}


// EVENT HANDLERS //

exitButton.addEventListener("click", handleExit)

// arrow fn version:
// exitButton.addEventListener("click", () => messageWindow.remove())

fileButton.addEventListener("mouseover", handleMouseOverFile)

fileButton.addEventListener("mouseleave", handleMouseLeaveFile)

menuOptionsP.addEventListener("click", whoAmI)

// form submit
messageForm.addEventListener("submit", handleNewMessage)







// ...here is an alternate way of attaching event listeners 
// ( exitWindow would be a predefined function )
// exitButton.onclick = exitWindow