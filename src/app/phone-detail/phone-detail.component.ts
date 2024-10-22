import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PhoneData, Phone } from '../core/phone/phone.service';

@Component({
  selector: 'phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls:['./phone-detail.component.css']
})
export class PhoneDetailComponent {
  img:string;
  phone: PhoneData;
  mainImageUrl: string;

  constructor(activateRoute: ActivatedRoute, phone: Phone) {
    let phoneId = activateRoute.snapshot.paramMap.get('phoneId');
    phone.get(phoneId).subscribe(data => {
      this.phone = data;
      this.setImage(data.images[0]);
    });
  }

  setImage(imageUrl:string) {
    this.mainImageUrl = imageUrl;
  }
}
