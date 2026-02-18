import { films } from '/data/films.js'

const pageBody = document.querySelector('body')
const cardContainer = document.querySelector('#cards')
cardContainer.className = "grid"
const gridBtn = document.querySelector('#grid-btn')
const listBtn = document.querySelector('#list-btn')

gridBtn.addEventListener('click', () => {
    pageBody.className = "grid"
    cardContainer.className = "grid"
})
listBtn.addEventListener('click', () => {
    pageBody.className = "list"
    cardContainer.className = "list"
})

for (let i = 0; i < films.length; i++) {

    let card = document.createElement('section')
    card.classList.add('card')

    let title = document.createElement('h2')
    title.textContent = films[i].title

    let image = document.createElement('img')
    image.setAttribute('src', "images/" + films[i].episode_id + ".jpg")
    image.setAttribute('alt', films[i].title)

    let info = document.createElement('p')
    info.innerHTML = `
        Director: ${films[i].director}<br>
        Producer: ${films[i].producer}<br>
        Released: ${films[i].release_date}
    `

    card.appendChild(title)
    card.appendChild(image)
    card.appendChild(info)

    cardContainer.appendChild(card)
}