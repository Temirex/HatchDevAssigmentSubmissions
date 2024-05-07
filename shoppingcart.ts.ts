// creating interface
interface Product {
    id: string;
    name: string;
    price: number;
}

interface ShoppingCart {
    addItem(product: Product, quantity: number): void;
    removeItem(productId: string, quantity: number): void;
    calculateTotal(): number;
}

interface User {
    name: string;
    email: string;
    shoppingCart: ShoppingCart;
}

// class to implement interface
class SimpleShoppingCart implements ShoppingCart {
    private items: { product: Product; quantity: number }[] = [];

    addItem(product: Product, quantity: number = 1): void {
        this.items.push({ product, quantity });
    }

    removeItem(productId: string, quantity: number = 1): void {
        const index = this.items.findIndex(item => item.product.id === productId);
        if (index !== -1) {
            const item = this.items[index];
            if (item.quantity > quantity) {
                item.quantity -= quantity;
            } else {
                this.items.splice(index, 1);
            }
        }
    }

    calculateTotal(): number {
        return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }
}

class SimpleUser implements User {
    shoppingCart: ShoppingCart;

    constructor(public name: string, public email: string) {
        this.shoppingCart = new SimpleShoppingCart();
    }
}


// Creating products
const laptop: Product = { id: '1', name: 'Laptop', price: 1000 };
const headphones: Product = { id: '2', name: 'Headphones', price: 350 };

// Creating a user
const user: User = new SimpleUser('Temirex Ade', 'temirexade02@gmail.com');

// Adding items to the shopping cart
user.shoppingCart.addItem(laptop, 2);
user.shoppingCart.addItem(headphones, 3);

// Removing items from the shopping cart
user.shoppingCart.removeItem('1', 1);

// Calculating the total price
const totalPrice = user.shoppingCart.calculateTotal();
console.log("Total Price:", totalPrice);
