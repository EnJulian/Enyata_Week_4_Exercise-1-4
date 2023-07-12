let price = 90;
let quantity = 5;

console.log(`Initial price: $${price} with quantity: ${quantity}`)

let discount = 20/100;

let newPrice = 90;
    newPrice -= price * discount;
quantity++;
console.log(`New Price: ${newPrice}`);

totalPrice = quantity * newPrice;
console.log(`Item A has a quantity of ${quantity} and price of $${newPrice} with a discount of 20%. Total Price is: $${totalPrice}`);
