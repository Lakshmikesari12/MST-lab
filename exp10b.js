function createProduct(id, name) {
    var product = { productId: id, productName: name, };
    return product;
} // Example usage
var newProduct = createProduct(1234, "Widget");
console.log(newProduct); // { productId: 1234, productName: "Widget" }
