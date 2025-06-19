var Product = /** @class */ (function () {
    function Product(productId, productName, productPrice, productCategory) {
        this.productId = productId;
        this.productName = productName;
        this.productPrice = productPrice;
        Product.productCategory = productCategory;
    }
    Product.prototype.getProductDetails = function () {
        console.log("Product ID: ".concat(this.productId));
        console.log("Product Name: ".concat(this.productName));
        console.log("Product Price: ".concat(this.productPrice));
        console.log("Product Category: ".concat(Product.productCategory));
    };
    return Product;
}());
var Gadget = /** @class */ (function () {
    function Gadget() {
    }
    Gadget.displayProductDetails = function (product) {
        product.getProductDetails();
    };
    return Gadget;
}());
var product = new Product(123, "Smartphone", 999.99, "Electronics");
Gadget.displayProductDetails(product);
