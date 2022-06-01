// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    addToCart(id)
    // 1. Loop for to the array products to get the item to add to cart
    // let i, product;
    // for (i = 0; i < id; i++) {
    //     product = products[i];
    // }
    // 2. Add found product to the cartList array
    // cartList.push(product);
}

// Exercise 2
function cleanCart() {
    const cartTable = document.querySelector("#cart_list");
    cartTable.innerHTML = "";
    document.getElementById('total_price').innerHTML = 0;
    cart = [];
    cartList = [];
}

// Exercise 3
function calculateTotal() {
    total = 0;
    // Calculate total price of the cart using the "cartList" array
    for (let i = 0; i < cartList.length; i++) {
        total += cartList[i].price;
    }
    return total.toFixed(2);
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    // cart = [];
    // for (let i = 0; i < cartList.length; i++) {
    //     if (!cart.includes(cartList[i])) {
    //         cartList[i].quantity = 1;
    //         cartList[i].subtotal = cartList[i].quantity * cartList[i].price;
    //         cart.push(cartList[i]);
    //     } else {
    //         cartList[i].quantity += 1;
    //         cartList[i].subtotal = cartList[i].quantity * cartList[i].price;
    //     }
    // }
    // applyPromotionsCart();
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == 1 && cart[i].quantity >= 3) {
            cart[i].subtotalWithDiscount = cart[i].subtotal - 10;
        }

        if (cart[i].id == 3 && cart[i].quantity >= 10) {
            cart[i].subtotalWithDiscount = cart[i].subtotal - cart[i].subtotal * 0.3;
        }
    }
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    const cartTable = document.querySelector("#cart_list");
    cartTable.innerHTML = "";
    const cartTotal = calculateTotal();

    cart.forEach((element) => {
        const table = document.createElement('tr');

        const tableTitle = document.createElement('th');
        tableTitle.textContent = element.name;

        const tablePrice = document.createElement('td');
        tablePrice.textContent = element.price;
        
        const tableQuantity = document.createElement('td');
        tableQuantity.textContent = element.quantity;
        
        const tableSubtotal = document.createElement('td');
        tableSubtotal.textContent = element.subtotal;
        
        const tableDiscount = document.createElement('td');
        tableDiscount.textContent = element.subtotalWithDiscount;

        const tableRemove = document.createElement('td');
        tableRemove.innerHTML = '<button class="btn btn-outline-dark" onclick="removeFromCart(id)"><i class="fa fa-trash"></button>';

        const tableTotal = document.getElementById('total_price');
        tableTotal.innerHTML = cartTotal;

        cartTable.appendChild(table);
        table.appendChild(tableTitle);
        table.appendChild(tablePrice);
        table.appendChild(tableQuantity);
        table.appendChild(tableSubtotal);
        table.appendChild(tableDiscount);
        table.appendChild(tableRemove);
    })
}

// ** Nivell II **

// Exercise 8
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    let i, product;
    for (i = 0; i < id; i++) {
        product = products[i];
    }
    cartList.push(product);
    
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    const indexItem = cartList.findIndex(item => item === product);
    if (!cart.includes(product)) {
        cartList[indexItem].quantity = 1;
        cartList[indexItem].subtotal = cartList[indexItem].quantity * cartList[indexItem].price;
        cart.push(cartList[indexItem]);
    } else {
        cartList[indexItem].quantity += 1;
        cartList[indexItem].subtotal = cartList[indexItem].quantity * cartList[indexItem].price;
    }
    
    applyPromotionsCart();
    console.log("cart", cart)
}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    const indexItem = cart.findIndex(item => item.id === id);
    const indexCartList = cartList.findIndex(item => item.id === id);
    
    // 2. Add found product to the cartList array
    if (cart[indexItem].quantity == 1) {
        cart.splice(indexItem, 1);
        cartList.splice(indexCartList, 1); //Removes the remaining product on the original array
        document.getElementById('total_price').innerHTML = 0;
    } else {
        cart[indexItem].quantity -= 1;
        cart[indexItem].subtotal -= cart[indexItem].price;
        cartList.splice(indexCartList, 1); //Also removes on the original array (needed for price update)
        applyPromotionsCart();
    }
    calculateTotal();
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}