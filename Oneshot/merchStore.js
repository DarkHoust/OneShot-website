// //Plays breaking bulb sound
// const logoImage = document.getElementById('lamp-logo');
// const breakSounds = [
//     document.getElementById('breakSound1'),
//     document.getElementById('breakSound2'),
//     document.getElementById('breakSound3'),
// ];
// let clickCount = 0;

// logoImage.addEventListener('click', () => {
//     clickCount++;

//     const soundToPlay = breakSounds[0];
//     soundToPlay.play();

//     // if (clickCount >= 5) {
//     //     window.location.href = "jpage.html";
//     // }
// });

// Function to add an item to the shopping cart.

//Storage of products at cart.
var shoppingCart = [];
counterOfCartItems();

//Adding item to cart.
function addItemToCart(productName, productPrice) {
    const item = {
        name: productName,
        price: productPrice,
        qty: 1
    };

    const existingItem = shoppingCart.find(existingItem => existingItem.name === item.name);

    if (existingItem) {
        existingItem.qty++;
    } else {
        shoppingCart.push(item);
    }
}


// Function to update the shopping cart's subtotal.
function updateSubtotal() {
    let subtotal = 0;
    for (const item of shoppingCart) {
        subtotal += item.price * item.qty;
    }
    return subtotal;
}

function addToCart(productName, productPrice) {
    addItemToCart(productName, productPrice);
    displayCart();
    counterOfCartItems()
}

function removeItemFromCart(product) {
    const index = shoppingCart.findIndex(item => item === product);
    if (index !== -1) {
        shoppingCart.splice(index, 1);
        displayCart();
        updateSubtotal();
        counterOfCartItems();
    }
}

function increaseQuantity(product) {
    const index = shoppingCart.findIndex(item => item === product);
    if (index !== -1) {
        shoppingCart[index].qty++;
        displayCart();
        updateSubtotal();
        counterOfCartItems();
    }
}

function decreaseQuantity(product) {
    const index = shoppingCart.findIndex(item => item === product);
    if (index !== -1) {
        shoppingCart[index].qty--;
        if (shoppingCart[index].qty === 0) {
            shoppingCart.splice(index, 1);
        }
        displayCart();
        updateSubtotal();
        counterOfCartItems();
    }
}

// Function to display the cart content and subtotal.
function displayCart() {
    const cartElement = document.querySelector('.basket');
    cartElement.innerHTML = '';

    for (const item of shoppingCart) {
        const cartItem = document.createElement('div');
        cartItem.textContent = `${item.name} - $${item.price} X ${item.qty} `;

        const removeBtn = document.createElement('img');
        removeBtn.src = "../Image/trash-icon.png";
        removeBtn.width = 20;
        removeBtn.alt = "Remove";
        removeBtn.className = "me-3 mb-1 press-effect"
        removeBtn.addEventListener('click', () => removeItemFromCart(item))

        const decreaseBtn = document.createElement('img');
        decreaseBtn.src = "../Image/minus.png";
        decreaseBtn.width = 20;
        decreaseBtn.alt = "-";
        decreaseBtn.className = "ms-2 mb-1 press-effect"
        decreaseBtn.addEventListener('click', () => decreaseQuantity(item))

        const increaseBtn = document.createElement('img');
        increaseBtn.src = "../Image/plus.png";
        increaseBtn.width = 20;
        increaseBtn.alt = "+";
        increaseBtn.className = "ms-2 mb-1 press-effect"
        increaseBtn.addEventListener('click', () => increaseQuantity(item))

        cartItem.prepend(removeBtn);
        cartItem.appendChild(decreaseBtn);
        cartItem.appendChild(increaseBtn);
        cartElement.appendChild(cartItem);
    }

    const subtotal = updateSubtotal();
    const subtotalElement = document.querySelector('.total-price');
    subtotalElement.textContent = `$ ${subtotal.toFixed(2)}`;
    counterOfCartItems();
}

//Filter functionality
filterBy("all");
function filterBy(option){
    var x,i;
    x = document.getElementsByClassName('filter');
    if (option == 'all') {
        for (i = 0; i < x.length; i++){
            x[i].classList.remove('hidden');
        }
    } else {
        for (i = 0; i < x.length; i++){
            var classOption = x[i].className.split(' ');
            if (classOption.includes(option)){
                x[i].classList.remove('hidden');
            } else{
                x[i].classList.add('hidden');
            }
        }
    }
}

//Counter of cart items
function counterOfCartItems() {
    var counter = document.querySelector('.numberOfItems');
    var sum = 0;
    for (const item of shoppingCart) {
        sum += item.qty;
    }

    if (sum == 0){
        counter.style.display = 'none';
    } else {
        if (Math.floor(sum / 10) == 0){
            counter.style.right = '42px' // Make it look more centered
        } else {
            counter.style.right = '38px'
        }
        counter.style.display = 'block';
    }

    if (sum >= 100) {
        counter.innerHTML = '+99';
        counter.style.right = '35px'
    } else {
        counter.innerHTML = sum.toString(); // Convert the sum to a string before setting innerHTML
    }
}

