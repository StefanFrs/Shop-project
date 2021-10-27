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


async function getProducts() {
    let url = 'https://fakestoreapi.com/products';
    try {
        let res = await fetch(url);
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
        <div class="card product-card mb-4" onclick="addToCart(${product.id})">
        <img class="card-img-top img-fluid" src="${product.image}" alt="${product.title}">
        <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text description-text">${product.description}</p>
        <h5 class="price-product"> Price : ${product.price}$ </h5>
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


//cart array
let cart = [];


//add to cart

function addToCart(id) {

    // check if prodcut already exist in cart
    // if (cart.some((item) => item.id === id)) {
    //   changeNumberOfUnits("plus", id);
    // } else {
    const item = products.find((product) => product.id === id);
    console.log(item);

    //   cart.push({
    //     ...item,
    //     numberOfUnits: 1,
    //   });
    // }

}