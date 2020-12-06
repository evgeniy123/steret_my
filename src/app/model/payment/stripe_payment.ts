export class Stripe_payment {
  publish_key: string;
  secret_key: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
