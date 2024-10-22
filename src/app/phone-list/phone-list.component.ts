import { Component } from '@angular/core';

import { PhoneData, Phone } from '../core/phone/phone.service';

@Component({
  selector: 'phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls:["./phone-list.component.css"]
})
export class PhoneListComponent {
  phones: PhoneData[];
  query: string;
  orderProp: string;

  constructor(phone: Phone) {
    phone.query().subscribe(phones => {
      this.phones = phones;
    });
    this.orderProp = 'age';
  }
}
