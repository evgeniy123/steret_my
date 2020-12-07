import {Component, Input, OnInit} from '@angular/core';
import {Form, FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss']
})

export class PaymentPageComponent implements OnInit {



  public color = 'accent';

  public checked_toggle: boolean = false;

  errorMessage: string = '';

  public form: FormGroup;
  public submitted: boolean = false;

  constructor(
    public fb: FormBuilder,
  ) {
    this.form = fb.group({

      online_payment: new FormControl(),

      paypal: new FormControl(),
      stripe: new FormControl(),

      paypal_client_id: new FormControl(),
      paypal_secret: new FormControl(),
      stripe_publish_key: new FormControl(),
      stripe_secret: new FormControl()
    });
  }


  ngOnInit(): void {

    let result = {
      paypal: {
        paypal_client: "test_data",
        secret_key: "test_data11",
      }
    };


    if (result.paypal) {

      this.checked_toggle = true;
      this.form.controls.online_payment.setValue(this.checked_toggle);

      this.form.controls.paypal.setValue(true);
      this.form.controls.stripe.setValue(false);

    }

    this.form.controls.paypal_client_id.setValue(result.paypal.paypal_client);
    this.form.controls.paypal_secret.setValue(result.paypal.secret_key);
  }


  public changed_toggle() {
    this.checked_toggle = !this.checked_toggle;

    console.log(this.checked_toggle);
  }

  public paypal_toggle() {
    ///this.paypal = !this.paypal;
    if (this.form.controls.stripe) {
      this.form.controls.stripe.setValue(false);
      //this.stripe = !this.stripe;
    }
    // this.form.controls.paypal.setValue(this.paypal);
  }

  public stripe_toggle() {
    //this.stripe = !this.stripe;
    if (this.form.controls.paypal) {
      this.form.controls.paypal.setValue(false);
      /// this.paypal = !this.paypal;
    }
    // this.form.controls.stripe.setValue(this.stripe);
  }

  onCheckedBankCard($event: Event) {

  }

  onCheckedCash($event: Event) {

  }
}
