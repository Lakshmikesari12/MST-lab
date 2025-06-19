var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var cart = [];
var addToCart = function () {
    var products = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        products[_i] = arguments[_i];
    }
    cart = __spreadArray(__spreadArray([], cart, true), products, true);
    console.log("Added ".concat(products.length, " product(s) to the cart."));
};
addToCart('Product 1', 'Product 2'); // Adding first batch of products
addToCart('Product 3', 'Product 4', 'Product 5'); // Adding second batch of products
console.log('Cart:', cart); // Displaying the final cart
