// number of tickets
let numTickets = 4;
// price per ticket
let pricePerTicket = 150;
// calculate the total pricelet totalPrice;
if (numTickets <= 2) 
{ 
 totalPrice = numTickets * pricePerTicket;
} 
else if (numTickets >= 6) 
{ 
 console.log("Sorry, booking is not allowed for more than 5 tickets.");
} 
else 
{ 
 pricePerTicket = 120;  
totalPrice = numTickets * pricePerTicket;
}
// display the results
console.log(`Number of tickets: ${numTickets}`);
console.log(`Price per ticket: Rs. ${pricePerTicket}`);
console.log(`Total price: Rs. ${totalPrice}`);
