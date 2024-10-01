import { Component } from '@angular/core';
import { ProductCartComponent } from "../product-cart/product-cart.component";
import { CheckoutSummaryComponent } from "../checkout/checkout-summary.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ProductCartComponent, CheckoutSummaryComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}
