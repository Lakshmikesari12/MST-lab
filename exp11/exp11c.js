var Product = /** @class */ (function () {
    function Product(productId) {
        this.productId = productId;
    }
    Product.prototype.getProductId = function () {
        return "Product id is ".concat(this.productId);
    };
    return Product;
}()); // Creating an instance of the Product class
var product = new Product(123);
// Calling the getProductId() method to retrieve the message
console.log(product.getProductId());
