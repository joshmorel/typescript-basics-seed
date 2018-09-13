let coupon = 'pizza25';

function removeCoupon(): void {
  // can only assign to
  coupon = null;
}

console.log(coupon);

removeCoupon();

console.log(coupon);
