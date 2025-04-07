import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductItemComponent } from './product-item/product-item.component'
import { ProductListComponent } from './product-list/product-list.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: "product-item",
        component: ProductItemComponent
    },
    {
        path: "product-list",
        component: ProductListComponent
    }
];
