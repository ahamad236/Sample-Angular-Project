import { Component, inject } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  service = inject(HomeService);
  products: any;

  getProductList() {
    this.service.getAPIData().subscribe(
      response => {
        console.log(response);
        if ('products' in response) {
          this.products = response.products;
        }
      }
    )
  }

  objectKeys() {
    const returnArr = Object.keys(this.products[0]);
    return returnArr.splice(0, 4);
  }

}
