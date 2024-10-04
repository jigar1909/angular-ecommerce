import { Routes } from '@angular/router';
import { ProductListComponent } from './Products/product-list/product-list.component';
import { ProductDetailComponent } from './Products/product-detail/product-detail.component';
import { HomeComponent } from './Homepage/home/home.component';
import { CartComponent } from './CartPage/cart/cart.component';
import { ThankyoupageComponent } from './thankyoupage/thankyoupage.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { LoginComponent } from './Auth/login/login.component';
import { authGuard } from './Auth/auth.guard';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        title: "Home page",
        canActivate: [authGuard], // Protect home page with authGuard
    },
    {
        path: "products",
        component: ProductListComponent,
        title: "Product Listing Page",
        canActivate: [authGuard], // Protect product page
    },
    {
        path: "products/:id",  
        component: ProductDetailComponent,
        title: "Product Detail Page",
        canActivate: [authGuard], // Protect product detail page
    },
    {
        path: "cart",  
        component: CartComponent,
        title: "Cart Page",
        canActivate: [authGuard], // Protect cart page
    },
    {
        path: "thank-you",  
        component: ThankyoupageComponent,
        title: "Thank You Page",
        canActivate: [authGuard], // Protect thank-you page
    },
    {
        path: "login",  
        component: LoginComponent,
        title: "Login Page"
    },
    {
        path: "signup", 
        component: SignupComponent,
        title: "Signup Page"
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
    }
];
