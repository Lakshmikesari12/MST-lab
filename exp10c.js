function displayProductDetails(product) {
    console.log("Product ID: ".concat(product.productId, ", Product Name: ").concat(product.productName));
}
var newProduct = { productId: 1234, productName: "Widget" };
displayProductDetails(newProduct);
