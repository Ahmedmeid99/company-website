const loading = document.getElementById('loading')
const main = document.getElementById('main')
const menuIcon = document.querySelector('.menu-icon')
const closeIcon = document.querySelector('.icon.close-icon')
const openIcon = document.querySelector('.icon.open-icon')
const menu = document.querySelector('.menu')

const showLoading = () => {
    loading.classList.add('loading-done')
}
setTimeout(showLoading, 5000)








menuIcon.addEventListener('click', () => {
    if (!menu.classList.contains('azraq-open-menu')) {
        menu.classList.add('azraq-open-menu')
        menu.classList.remove('azraq-close-menu')

        closeIcon.classList.remove('hidden')
        openIcon.classList.add('hidden')
    } else {
        menu.classList.remove('azraq-open-menu')
        menu.classList.add('azraq-close-menu')

        openIcon.classList.remove('hidden')
        closeIcon.classList.add('hidden')
    }
}
)