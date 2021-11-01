import products from './products';


const productName: string = 'beanie';
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAddress: string = "PT 4 Takoradi, Western Ghana";


//Code to find order
const product = products.filter( product => 
product.name === productName
  )[0];

//Condition to show when items is shiped
if (product.preOrder){
  console.log('We will send you a message when your product ships.')
}

if(product.price > 25)
{
  console.log('This item will receive free shipping.');
  shipping = 0;
}else {
  shipping = 5;
}

//Checking for state to apply discount
if(shippingAddress.match('New York')){
  taxPercent = 0.1;
}else{
  taxPercent = 0.5;
}

taxTotal = product.price * taxPercent;
total = product.price + taxTotal + shipping;

console.log(`
Product:  ${product.name}
Address:  ${shippingAddress}
Price:    $${product.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`);