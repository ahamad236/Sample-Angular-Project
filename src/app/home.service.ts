import { inject, Injectable } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  UrlPath:string = '';
  http = inject(HttpClient);

  constructor() {
  this.UrlPath = "https://dummyjson.com/products"
  // this.http =
  }

  getAPIData(){
    return this.http.get(this.UrlPath);
  }
  

}
