import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(environment.API_URL + 'products');
  }
  getOne(id) {
    return this.httpClient.get(environment.API_URL + 'products/' + id);
  }
  getExchangeRates(): Observable<any> {
    return this.httpClient.get('https://api.exchangeratesapi.io/latest');
  }
  searchProducts(search) {
    return this.httpClient.get(environment.API_URL + 'products/name/' + search);
  }
}
