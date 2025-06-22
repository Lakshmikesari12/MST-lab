// number of tickets
let numTickets = 3;
// price per ticket
const pricePerTicket = 150;
// calculate the total price
let totalPrice = numTickets * pricePerTicket;
// apply a 10% discount for festive season
const discount = 0.1;
let discountedAmount = totalPrice * discount;
// calculate the final price after discount
let finalPrice = totalPrice - discountedAmount;
// display the results
console.log(`Number of tickets: ${numTickets}`);
console.log(`Price per ticket: Rs. ${pricePerTicket}`);
console.log(`Total price: Rs. ${totalPrice}`);
console.log(`Discounted amount (10%): Rs. ${discountedAmount}`);
console.log(`Final price after discount: Rs. ${finalPrice}`);
