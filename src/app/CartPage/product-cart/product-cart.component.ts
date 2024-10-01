import { Component, OnInit } from '@angular/core';
import { CartService } from '../cartservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.css'
})
export class ProductCartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCart();  // Load items from cart
  }

  increaseQuantity(item: any) {
    this.cartService.addToCart(item);  // Increase the quantity of the product
    this.cartItems = this.cartService.getCart();  // Refresh cart after update
  }

  decreaseQuantity(item: any) {
    this.cartService.removeFromCart(item);  // Decrease the quantity or remove if 1
    this.cartItems = this.cartService.getCart();  // Refresh cart after update
  }
}
