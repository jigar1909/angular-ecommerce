import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    private cart: any[] = [];

    constructor() {
        // Load cart from localStorage when the service is initialized
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            this.cart = JSON.parse(storedCart);
        }
    }

    addToCart(product: any) {
        const cartItem = this.cart.find((item) => item._id === product._id);

        if (cartItem) {
            cartItem.quantity += 1;  // Increment quantity if the product already exists
        } else {
            this.cart.push({ ...product, quantity: 1 });  // Add new product with quantity 1
        }

        this.saveCart();
    }

    // Retrieve the cart items
    getCart() {
        return this.cart;
    }

    // Save the cart to localStorage
    private saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }

    // Remove a product from the cart or decrease quantity
    removeFromCart(product: any) {
        const cartItem = this.cart.find((item) => item._id === product._id);

        if (cartItem) {
            if (cartItem.quantity > 1) {
                cartItem.quantity -= 1;  // Decrease quantity if more than 1
            } else {
                this.cart = this.cart.filter((item) => item._id !== product._id);  // Remove item if quantity is 1
            }
            this.saveCart();
        }
    }

    // Clear the cart if needed
    clearCart() {
        this.cart = [];
        localStorage.removeItem('cart');
    }
}
