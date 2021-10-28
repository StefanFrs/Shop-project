
const spinner = document.getElementById("spinner");
async function getProducts() {
    spinner.removeAttribute('hidden');
    let url = 'https://fakestoreapi.com/products';
    try {
        let res = await fetch(url);
        spinner.setAttribute('hidden', '');
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderProducts() {

    let products = await getProducts();
    let html = '';
    console.log(products);
    products.forEach(product => {
        let htmlSegment = `
        <div class="card product-card mb-4" id="${product.id}">
        <img class="card-img-top img-fluid" src="${product.image}" alt="${product.title}">
        <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text description-text">${product.description}</p>
        <h5 class="price-product"> Price : ${product.price}$ </h5>
        <span class="add-cart" href ="#" onclick="addToCart(${product.id})">Add to cart </span>
        </div>
       </div>
    `;

        html += htmlSegment;
    });

    let container = document.querySelector('.products-list');
    container.innerHTML = html;
}

renderProducts();
// let products = getProducts();
// const globalProducts=products.then(function (result) {
// console.log(result)
// })

console.log("test");

// var carts = document.getElementsByClassName('add-cart');
// console.log(carts);

// for (var i = 0; i < carts.length; i++) {
//     console.log(carts[i]);
//     carts[i].addEventListener('click', addToCart)
// }


var addItemId = 0;

function addToCart(item) {
    addItemId += 1;
    var selectedItem = document.createElement('div');
    var cart = document.getElementById("cart");


    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id', addItemId);
    var title = document.createElement('div');
    title.innerText = item.children[1].innerText;
    var cartItems = document.getElementById('title');
    selectedItem.append(title);
    cartItems.append(selectedItem);

}