
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cartservice';
import { CommonModule } from '@angular/common';
import { RouterModule,Router } from '@angular/router';
@Component({
  selector: 'app-checkout-summary',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './checkout-summary.component.html',
  styleUrl: './checkout-summary.component.css'
})
export class CheckoutSummaryComponent implements OnInit {
  cartItems: any[] = [];
  promoCode: string = '';
  promoDiscount: number = 0; // Optional promo discount

  constructor(private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
  }
  getTotal(): number {
    let total = this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (this.promoDiscount) {
      total -= this.promoDiscount;
    }

    return total;
  }
  checkout(): void {
    this.router.navigate(['/thank-you']);

    this.cartService.clearCart();
  }
}
