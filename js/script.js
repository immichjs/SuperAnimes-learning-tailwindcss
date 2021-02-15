const searchBar = document.querySelector('.main__search-bar')
const figure = document.querySelector('.main__last-releases___thumbs____content')
const titles = document.querySelectorAll('.main__last-releases___thumbs____content_____title-text')
const thumbs = document.querySelector('.main__last-releases___thumbs img')

const changeColorToggle = () => {
    searchBar.classList.toggle('changecolor-border')
}
searchBar.addEventListener('focus', changeColorToggle)
searchBar.addEventListener('focusout', changeColorToggle)


const limitedCharacters = (element, index) => {
    if (element.textContent.length > 36) {
        titles[index].innerHTML = element.textContent.slice(0, 33) + '...'
    }
}
titles.forEach(limitedCharacters)