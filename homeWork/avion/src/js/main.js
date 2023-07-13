// // Мобильное меню бургер
// function burgerMenu() {
//     const burger = document.querySelector('.burger')
//     const menu = document.querySelector('.menu')
//     const body = document.querySelector('body')
//     burger.addEventListener('click', () => {
//         if (!menu.classList.contains('active')) {
//             menu.classList.add('active')
//             burger.classList.add('active')
//             body.classList.add('locked')
//         } else {
//             menu.classList.remove('active')
//             burger.classList.remove('active')
//             body.classList.remove('locked')
//         }
//     })
//     // Вот тут мы ставим брейкпоинт навбара
//     window.addEventListener('resize', () => {
//         if (window.innerWidth > 991.98) {
//             menu.classList.remove('active')
//             burger.classList.remove('active')
//             body.classList.remove('locked')
//         }
//     })
// }
// burgerMenu()

let productListening = [
    {
        img: 'Parent-1.png',
        title: 'The Dandy chair',
        price: 250,
    },

    {
        img: 'Parent-2.png',
        title: 'Rustic Vase Set',
        price: 155,
    },

    {
        img: 'Parent-3.png',
        title: 'The Dandy chair',
        price: 250,
    },

    {
        img: 'Parent-4.png',
        title: 'The Silky Vase',
        price: 150,
    }
]

const products = document.querySelector('.products')

function showProducts(item) {
    let productCard = document.createElement('div')
    
    let img = document.createElement('img')
    img.src = `../img/${item.img}`
    img.width = `305`
    img.alt = `img ${item.title}`

    let title = document.createElement('h4')
    title.innerText = `${item.title}`

    let price = document.createElement('div')
    price.innerText = `$${item.price}`

    productCard.append(img, title, price)

    return productCard
}

productListening.map(item => {
    products.append(showProducts(item))
})