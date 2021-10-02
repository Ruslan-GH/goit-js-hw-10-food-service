// import './sass/main.scss';
import menuItemTpl from './templates/menu.hbs'
import menuList from './menu.json'

const menuListContainer = document.querySelector('.js-menu');
const menuMarkup = createMenuMarkup(menuList);
menuListContainer.insertAdjacentHTML('beforeend', menuMarkup)

function createMenuMarkup(menuList) {

    return menuList.map(menuItemTpl).join('')
}
 

const inputThemeSwitch = document.querySelector('#theme-switch-toggle')

inputThemeSwitch.addEventListener('change', (e) => {
    if (e.target.checked) {
        document.querySelector('body').classList.remove('light-theme')
        document.querySelector('body').classList.add('dark-theme')
        localStorage.setItem('theme', 'dark-theme')
    } else {
        document.querySelector('body').classList.remove('dark-theme')
        document.querySelector('body').classList.add('light-theme')
        localStorage.setItem('theme', 'light-theme')}
})

const savedTheme = localStorage.getItem('theme')
if (savedTheme === 'dark-theme') {
    inputThemeSwitch.checked = savedTheme;
    document.querySelector('body').classList.add('dark-theme');
} else(document.querySelector('body').classList.add('light-theme'))

