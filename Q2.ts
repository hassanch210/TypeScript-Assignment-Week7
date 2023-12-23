type CartItem = {
    name: string;
    price: number;
    quantity: number;
};

class ShoppingCart {
    private cart: CartItem[] = [];

    // Function to add an item to the cart
    addItem(name: string, price: number, quantity: number): void {
        const newItem: CartItem = { name, price, quantity };
        this.cart.push(newItem);
        this.printCart();
    }

    // Function to remove an item from the cart by name
    removeItemByName(name: string): void {
        const index = this.findIndexByName(name);
        if (index !== -1) {
            this.cart.splice(index, 1);
            this.printCart();
        } else {
            console.error(`Item "${name}" not found in the cart.`);
        }
    }

    // Function to update the quantity of an item in the cart
    updateQuantity(name: string, newQuantity: number): void {
        const index = this.findIndexByName(name);
        if (index !== -1) {
            this.cart[index].quantity = newQuantity;
            this.printCart();
        } else {
            console.error(`Item "${name}" not found in the cart.`);
        }
    }

    // Function to find the index of an item in the cart by name
    private findIndexByName(name: string): number {
        return this.cart.findIndex(item => item.name === name);
    }

    // Function to print the cart's contents
    private printCart(): void {
        console.log('Current Cart:');
        console.table(this.cart);
        console.log('------------------------');
    }
}

// Example usage:
const shoppingCart = new ShoppingCart();

shoppingCart.addItem('Product A', 25.99, 2);
shoppingCart.addItem('Product B', 14.99, 1);
shoppingCart.updateQuantity('Product A', 3);
shoppingCart.removeItemByName('Product B');