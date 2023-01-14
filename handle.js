const btnMoveToTop = document.querySelector('.footer .line-top .btn')
const navHeader = document.querySelector('.header-wrapper')
const btnsShowSubNav = document.querySelectorAll(
    '.nav-mobile .nav-mobile-inner .btn-show-subnav'
)
const btnShowMobileNav = document.querySelector('.icon-nav-mobile')
const btnCloseMobileNav = document.querySelector('.nav-mobile .btn-close')
const navMobile = document.querySelector('.nav-mobile')
const overlay = document.querySelector('.overlay')
const navlinks = document.querySelectorAll('.header-menu > ul > .nav-link')
const sessions = document.querySelectorAll('.session')

const moveToTop = () => {
    window.scrollTo(0, 0)
}

function activeMenu() {
    let len = sessions.length
    while (--len && window.scrollY + 105 < sessions[len].offsetTop) {}
    navlinks.forEach((link) => {
        link.classList.remove('active')
        navlinks[len].classList.add('active')
    })
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 104) {
        navHeader.classList.add('sticky-menu')
    } else {
        navHeader.classList.remove('sticky-menu')
    }
    activeMenu()
})
window.addEventListener('DOMContentLoaded', moveToTop)
btnMoveToTop.addEventListener('click', moveToTop)

btnsShowSubNav.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        event.preventDefault()
        if (btn.classList.contains('active')) {
            btn.classList.remove('active')
        } else {
            btn.classList.add('active')
        }
    })
})

btnShowMobileNav.addEventListener('click', () => {
    navMobile.classList.add('active')
    overlay.classList.add('active')
})

btnCloseMobileNav.addEventListener('click', () => {
    navMobile.classList.remove('active')
    overlay.classList.remove('active')
})
