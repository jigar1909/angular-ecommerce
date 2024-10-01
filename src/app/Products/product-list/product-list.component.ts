import { Component } from '@angular/core';
import { products } from './productdata';
import { RouterModule,Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productList: any[] = []; 
  constructor(private router: Router) {}

  ngOnInit() {
    this.productList = products;
  }
  goToProductDetail(productId: number) {
    this.router.navigate(['/products/', productId]);
  }
}
