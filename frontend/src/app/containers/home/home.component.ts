import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, OnChanges {
  public products$: Observable<any>;
  public exchangeRates$: Observable<any>;
  public currency: string;
  constructor(public productService: ProductService) { }
  ngOnInit(): void {
    this.products$ = this.productService.getAll();
    this.exchangeRates$ = this.productService.getExchangeRates();
  }
  ngOnChanges() {
    console.log('esto no se consolea porque no hay inputs')
  }

  ngOnDestroy() {
    console.log('Home destruido');
  }
}
