# Single file code

class Product:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def display(self):
        print(f"Product: {self.name}, Price: ${self.price:.2f}")

# Creating instances of the Product class and using them
product1 = Product("Apple", 1.99)
product2 = Product("Banana", 0.99)

# Displaying the products
product1.display()
product2.display()

