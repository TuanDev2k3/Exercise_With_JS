var productList = [
    {
        name: 'Áo Hoodie nam',
        image: './img/product1.jpeg',
        price: '$50'
    },
    {
        name: 'Balo màu đen',
        image: './img/product2.jpeg',
        price: '$20'
    },
    {
        name: 'Mũ xanh lá',
        image: './img/product3.jpeg',
        price: '$10'
    },
    {
        name: 'Áo thun đen',
        image: './img/product4.jpeg',
        price: '$20'
    },
    {
        name: 'Hoodie xanh dương',
        image: './img/product5.jpeg',
        price: '$150'
    },
    {
        name: 'Tai nghe ko dây',
        image: './img/product6.jpeg',
        price: '$90'
    },
    {
        name: 'Bình giữ nhiệt',
        image: './img/product7.jpeg',
        price: '$70'
    },
    {
        name: 'Giày nam',
        image: './img/product8.jpeg',
        price: '$200'
    }
]

let products = document.querySelector('.products');

// Load Product to ProductList[]
productList.forEach(item => {
    let newProduct = document.createElement('div')
    newProduct.classList.add('product')
    newProduct.classList.add('hide')
    newProduct.innerHTML = `<div class="image">
                                <img src="${item.image}" alt="">
                            </div>
                            <div class="detail">
                                <h2 class="name">${item.name}</h2>
                                <h3 class="price">${item.price}</h3>
                            </div>`
    products.appendChild(newProduct)
})

// Tim kiem procduct
let search = document.querySelector('.search input')
let product = document.querySelectorAll('.product')

search.addEventListener('input', function () {
    let input = this.value.trim().toLowerCase()

    product.forEach(item => {
        let name = item.querySelector('.name').innerHTML

        if (!name.toLowerCase().includes(input))
            item.classList.add('hide')
        else {
            item.classList.remove('hide')
        }
    })
})

// Loading 
setTimeout(function () {
    document.querySelector('.products h3').classList.add('hide')
    product.forEach(item =>
        item.classList.remove('hide')
    )
    search.focus();
}, 5000)
