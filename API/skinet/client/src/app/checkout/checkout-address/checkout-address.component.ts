import { ToastrService } from 'ngx-toastr';
import { AccountService } from './../../account/account.service';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout-address',
  templateUrl: './checkout-address.component.html',
  styleUrls: ['./checkout-address.component.scss']
})
export class CheckoutAddressComponent {
  @Input() checkoutForm?: FormGroup;

  constructor(private accountService: AccountService, private toasterService: ToastrService) {

  }

  saveUserAddress() {
    this.accountService.updateUserAddress(this.checkoutForm?.get('addressForm')?.value).subscribe({
      next: () => {
        this.toasterService.success('Address saved')
        this.checkoutForm?.get('addressForm')?.reset(this.checkoutForm?.get('addressForm')?.value);
      }
    })
  }
}
