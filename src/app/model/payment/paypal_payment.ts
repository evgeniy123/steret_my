export class Paypal_payment {
  paypal_client: string;
  secret_key: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}
