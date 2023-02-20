import { BasketService } from './../../basket/basket.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.scss']
})
export class OrderTotalsComponent {

  constructor(public basketService: BasketService) {

  }
}
