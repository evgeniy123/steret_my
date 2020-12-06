import {Stripe_payment} from "./stripe_payment";
import {Paypal_payment} from "./paypal_payment";

export class Object_for_send_payment {
  name: string;
  keys: Paypal_payment | Stripe_payment;

  public static STRING_PAYPAL_SEND: string = "paypal";
  public static STRING_STRIPE_SEND: string = "stripe";

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}
