import {Component, Input, OnInit} from '@angular/core';
import {Form, FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss']
})

export class PaymentPageComponent implements OnInit {

  public paypal: boolean = false;
  public stripe: boolean = false;


  public color = 'accent';

  public disabled_toggle: boolean = false;
  public checked_toggle: boolean = false;

  public checkedBankCard: boolean = false;
  public checkedCash: boolean = false;

  public first_load: boolean = true;

  formErrors: any;
  errorMessage: string = '';

  public form: FormGroup;
  public submitted: boolean = false;
  public out_for_server: Array<number>;

  constructor(
    public fb: FormBuilder,
  ) {
    this.form = fb.group({
      card: new FormControl({value: '', disabled: false}, Validators.required),
      cash: new FormControl({value: '', disabled: false}, Validators.required),

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
      cash: false,
      card: false,
      paypal: {
        paypal_client: "test_data",
        secret_key: "test_data",
      }
    };


    this.form.controls.card.setValue(!!result.card);
    this.form.controls.cash.setValue(!!result.cash);

    if (result.paypal) {

      this.checked_toggle = true;
      this.form.controls.online_payment.setValue(this.checked_toggle);

      if (result.paypal) {
        this.paypal = true;
        this.stripe = false;
        this.form.controls.paypal.setValue(true);
        this.form.controls.stripe.setValue(false);
      }
    }

    this.form.controls.paypal_client_id.setValue(result.paypal.paypal_client);
    this.form.controls.paypal_secret.setValue(result.paypal.secret_key);
  }


  public changed_toggle() {
    this.checked_toggle = !this.checked_toggle;
    console.log(this.checked_toggle);
  }

  public paypal_toggle() {
    this.paypal = !this.paypal;
    this.form.controls.paypal.setValue(this.paypal);
    if (this.stripe) {
      this.stripe = !this.stripe;
    }
  }

  public stripe_toggle() {
    this.stripe = !this.stripe;
    this.form.controls.stripe.setValue(this.stripe);
    if (this.paypal) {
      this.paypal = !this.paypal;
    }
  }

  onCheckedBankCard($event: Event) {

  }

  onCheckedCash($event: Event) {

  }
}
