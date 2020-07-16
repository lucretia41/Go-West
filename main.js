let newDiv = document.createElement('div')
newDiv.className = 'Go West'
newDiv.id = 1
newDiv.append('Go West')

let goWestimg = document.createElement('img')
goWestimg.src = './assets/images/headed west.jpeg'
goWestimg.style.textAlign = 'center'
goWestimg.style.display = 'block'
goWestimg.style.margin = 'auto'


let addPassengerButton = document.createElement('button')
addPassengerButton.className = 'addPassenger'
addPassengerButton.append('Ride Wagon')


let huntButton = document.createElement('button')
huntButton.className = 'hunt'
huntButton.append('Shoot')

let consumeButton = document.createElement('button')
consumeButton.className = 'consume'
consumeButton.append('Eat')

let loadButton = document.createElement('button')
loadButton.className = 'onboard'
loadButton.append('Load')



let sectionElement = document.querySelector('section')
sectionElement.append(newDiv, goWestimg, addPassengerButton, huntButton, consumeButton, loadButton)