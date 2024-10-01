import { Component } from '@angular/core';
import { ProductCartComponent } from "../product-cart/product-cart.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ProductCartComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}
