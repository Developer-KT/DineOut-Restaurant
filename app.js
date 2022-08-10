
                                            // Removing/displaying menu items

const navbarToggle = document.querySelector('.navbar-toggle')
const barsItems = document.querySelector('.bars-items')                                                       // bars-items is the initial value of the menu-items (display:none)
const menu = document.querySelector('.menu-items')                                                      // we are adding a class that will display the menu-items

navbarToggle.addEventListener('click', () => {
    barsItems.classList.toggle('menu-items')
    barsItems.classList.toggle('bars-items')                                                   // we're then adding that class to the div and we're removing bars-items
})

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('is-active')
    document.getElementById('mobile-menu').style.left="86%";                                    // we're moving the button
})

                                            // Removing menu items when menu item is clicked

const item1 = document.querySelector('.item1')

item1.addEventListener('click', () => {
    barsItems.classList.toggle('menu-items')
    barsItems.classList.toggle('bars-items')
    navbarToggle.classList.toggle('is-active')
    document.getElementById('mobile-menu').style.left="93%";
})

const item2 = document.querySelector('.item2')

item2.addEventListener('click', () => {
    barsItems.classList.toggle('menu-items')
    barsItems.classList.toggle('bars-items')
    navbarToggle.classList.toggle('is-active')
    document.getElementById('mobile-menu').style.left="93%";
})

const item3 = document.querySelector('.item3')

item3.addEventListener('click', () => {
    barsItems.classList.toggle('menu-items')
    barsItems.classList.toggle('bars-items')
    navbarToggle.classList.toggle('is-active')
    document.getElementById('mobile-menu').style.left="93%";
})

const item4 = document.querySelector('.item4')

item4.addEventListener('click', () => {
    barsItems.classList.toggle('menu-items')
    barsItems.classList.toggle('bars-items')
    navbarToggle.classList.toggle('is-active')
    document.getElementById('mobile-menu').style.left="93%";
})

const item5 = document.querySelector('.item5')

item5.addEventListener('click', () => {
    barsItems.classList.toggle('menu-items')
    barsItems.classList.toggle('bars-items')
    navbarToggle.classList.toggle('is-active')
    document.getElementById('mobile-menu').style.left="93%";
})

const item6 = document.querySelector('.item6')

item6.addEventListener('click', () => {
    barsItems.classList.toggle('menu-items')
    barsItems.classList.toggle('bars-items')
    navbarToggle.classList.toggle('is-active')
    document.getElementById('mobile-menu').style.left="93%";
})


                                            // For button's text to change when button hovered
const button = document.querySelector('.button')
const hoverText = document.querySelector('#hover-text')

button.addEventListener('mouseover', () => {
    document.getElementById("hover-text").style.color="white"
})

button.addEventListener('mouseleave', () => {
    document.getElementById("hover-text").style.color="orange"
})

                                                                        // For header background-color to change when scrolled past home page

function scrolledHeader() {
    let scrollPos = window.scrollY

    if (window.innerWidth > 960 && scrollPos > 600) {
        document.getElementById("scrolled").style.backgroundColor="rgb(199, 199, 199)";
        return
    } else if (window.innerWidth > 960 && scrollPos < 625) {
        document.getElementById("scrolled").style.backgroundColor="transparent"
        return
    }
}

window.addEventListener('scroll', scrolledHeader);

                                                                        // To display current category tab

const lunch = document.getElementById("lunch")
const supper = document.getElementById("supper")
const drinks = document.getElementById("drinks")
const desserts = document.getElementById("desserts")

                                                            // To display current menu list

const lunchList = document.getElementById("lunch-list")
const supperList = document.getElementById("supper-list")
const drinksList = document.getElementById("drinks-list")
const dessertsList = document.getElementById("desserts-list")

lunch.addEventListener('click', () => {
    lunch.classList.add('active')
    supper.classList.remove('active')
    drinks.classList.remove('active')
    desserts.classList.remove('active')
// -----------------------------------------------current menu list----------------------------------
    lunchList.classList.add('is-active')
    supperList.classList.remove('is-active')
    drinksList.classList.remove('is-active')
    dessertsList.classList.remove('is-active')
})

supper.addEventListener('click', () => {
    supper.classList.add('active')
    lunch.classList.remove('active')
    drinks.classList.remove('active')
    desserts.classList.remove('active')
    // --------------------------------------------current menu list------------------------------
    supperList.classList.add('is-active')
    lunchList.classList.remove('is-active')
    drinksList.classList.remove('is-active')
    dessertsList.classList.remove('is-active')
})

drinks.addEventListener('click', () => {
    drinks.classList.add('active')
    lunch.classList.remove('active')
    supper.classList.remove('active')
    desserts.classList.remove('active')
    // --------------------------------------------current menu list------------------------------
    drinksList.classList.add('is-active')
    supperList.classList.remove('is-active')
    lunchList.classList.remove('is-active')
    dessertsList.classList.remove('is-active')
})

desserts.addEventListener('click', () => {
    desserts.classList.add('active')
    lunch.classList.remove('active')
    supper.classList.remove('active')
    drinks.classList.remove('active')
    // --------------------------------------------current menu list------------------------------
    dessertsList.classList.add('is-active')
    supperList.classList.remove('is-active')
    drinksList.classList.remove('is-active')
    lunchList.classList.remove('is-active')
})

