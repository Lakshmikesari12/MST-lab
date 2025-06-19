var Product = /** @class */ (function () {
    function Product(productId, productName, price) {
        this.productId = productId;
        this.productName = productName;
        this.price = price;
    }
    return Product;
}());
// Create objects of the Product class
var product1 = new Product(1, "Smartphone", 999.99);
var product2 = new Product(2, "Headphones", 49.99);
var product3 = new Product(3, "Charging Cable", 9.99);
// Create an array to store the products and add the objects directly
var productList = [product1, product2, product3];
// Log the productList to the console
console.log(productList);
