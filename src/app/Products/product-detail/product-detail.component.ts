import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { products } from '../product-list/productdata';
import { CommonModule } from '@angular/common';
import { CartService } from '../../CartPage/cartservice';


@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product: any;

  constructor(private route: ActivatedRoute,
    private cartService: CartService,  // Inject the CartService
    private router: Router
  ) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    const numericProductId = productId ? +productId : null;
    
    if (numericProductId !== null) {
      this.product = products.find(p => p._id === numericProductId);
    }
  }
  addToCart() {
    this.cartService.addToCart(this.product);  
    this.router.navigate(['/cart']);  
  }
}