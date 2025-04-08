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
  showTable: boolean = false;

  getProductList() {
    this.service.getAPIData().subscribe(
      response => {
        console.log(response);
        if ('products' in response) {
          this.showTable = true;
          this.products = response.products;
        }
      }
    )
  }

  objectKeys() {
    if (!this.products) {
      return
    }

    const returnArr = Object.keys(this.products[0]);
    const splitArr = [];
    if ("id" in returnArr) {
      splitArr.push(returnArr.id);
    }
    if ("title" in returnArr) {
      splitArr.push(returnArr.title);
    }
    if ("description" in returnArr) {
      splitArr.push(returnArr.description)
    }
    return splitArr;
  }

}
