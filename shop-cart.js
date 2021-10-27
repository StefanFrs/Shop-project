// function fetchData() {
//     fetch("https://fakestoreapi.com/products")
//         .then(response => {
//             if (!response.ok) {
//                 throw Error("Error");
//             }
//             return response.json();
//         })
//         .then(data => {
//             const html = data.data
//                 .map(products => {
//                     return `
//     <div class="card product-card">
//     <img class="card-img-top" src="${products.image}" alt="Card image cap">
//     <div class="card-body">
//       <h5 class="card-title">${products.title}</h5>
//       <p class="card-text">${products.description}</p>
//     </div>
//   </div>
//         `;
//                 })
//                 .join("");
//             document.querySelector("#product-card").insertAdjacentElement("afterbegin", html);
//         })
//         .catch(error => {
//             console.log(error);
//         });
// }

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
        <div class="card product-card mb-4">
        <img class="card-img-top img-fluid" src="${product.image}" alt="${product.title}">
        <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text description-text">${product.description}</p>
        <h5 class="price-product"> Price : ${product.price}$ </h5>
        <a class="add-cart" href ="#">Add to card </a>
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

var timeout = setTimeout(function () {
    var carts = document.querySelectorAll('.add-cart')
}, 5000);
console.log(timeout);


// let carts = document.querySelectorAll('.add-cart');
// console.log(carts);

for (let i = 0; i < timeout.length; i++) {
    timeout[i].addEventListener('click', () => {
        console.log("ai apasat");
        cartNumbers();
    })
}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    console.log(productNumbers);
    productNumbers = parseInt(productNumbers);
    localStorage.setItem('cartNumbers', 1);
}