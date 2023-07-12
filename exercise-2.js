let price = 90;
let quantity = 5;

console.log(`Initial price: $${price} with quantity: ${quantity}`)

let discount = 20/100;
newPrice = price - (price * discount);
quantity++;
console.log(`Calculated Discount: ${newPrice}`);

totalPrice = quantity * newPrice;
console.log(`Item A has a quantity of ${quantity} and price of $${newPrice} with a discount of 20%. Total Price is: $${totalPrice}`);
