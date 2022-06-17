
const spinner = document.getElementById("spinner");
const cart = document.querySelector(".list-items");
let noProducts = 1;
let total = 0;

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
        <div class="card product-card mb-4 item-${product.id}" id="${product.id}">
        <img class="card-img-top img-fluid" src="${product.image}" alt="${product.title}">
        <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text description-text">${product.description}</p>
        <h5 class="price-product"> Price : <div class="price">${product.price}</div>$</h5>
        <span class="add-cart" href ="#" onclick="addToCart(${product.id})">Add to cart </span>
        </div>
       </div>
    `;

        html += htmlSegment;
    });

    let container = document.querySelector('.products-list');
    container.innerHTML = html;
}

function addToCart(id){
    const li = document.createElement("li");
    const showNr = document.getElementById("nrProducts")
    let selectedItem = document.querySelector(`.item-${id} .card-title`);
    let slectedPrice = document.querySelector(`.item-${id} .price`);
    let selectedTotal = document.querySelector('#total');
    console.log(selectedItem);
    console.log(slectedPrice);
    li.append(selectedItem.textContent);
    li.append(' ' + slectedPrice.textContent + '$');
    cart.append(li);
    showNr.innerHTML = noProducts==1 ? `(${noProducts})item` : `(${noProducts})items`; //not working, try with html+=htmlSegment
    let priceInt = parseInt(slectedPrice.textContent);
    console.log(typeof priceInt);
    total = total + priceInt;
    selectedTotal.textContent = `Total: ${total}$`;
    noProducts = noProducts+1;
}

function search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    
    li = querySelectorAll(".product-card");
    // for (i = 0; i < li.length; i++) {
    //     a = li[i].getElementsByTagName("a")[0];
    //     txtValue = a.textContent || a.innerText;
    //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //         li[i].style.display = "";
    //     } else {
    //         li[i].style.display = "none";
    //     }
    // }
}
li = document.querySelectorAll(".product-card");
console.log(li);
renderProducts();
