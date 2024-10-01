import { Routes } from '@angular/router';
import { ProductListComponent } from './Products/product-list/product-list.component';
import { ProductDetailComponent } from './Products/product-detail/product-detail.component';
import { HomeComponent } from './Homepage/home/home.component';
import { CartComponent } from './CartPage/cart/cart.component';
import { ThankyoupageComponent } from './thankyoupage/thankyoupage.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        title: "Home page",
    },
    {
        path: "products",
        component: ProductListComponent,
        title: "Product Listing Page",
    },
    {
        path: "products/:id",  
        component: ProductDetailComponent,
        title: "Product Detail Page"
    },
    {
        path: "cart",  
        component: CartComponent,
        title: "Cart Page"
    },
    {
        path: "thank-you",  
        component: ThankyoupageComponent,
        title: "Cart Page"
    },
    {
        path: "login",  
        component: ThankyoupageComponent,
        title: "Cart Page"
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
    }
];
