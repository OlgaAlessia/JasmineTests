describe('calculateMonthlyPayment tests', function (){

  it(' the monthly rate correctly', function () {
    //expect(setupIntialValues()).toEqual(748.14);

    const values = { amount: 15000, years: 3, rate: 43 };
    expect(calculateMonthlyPayment(values)).toEqual('748.14');
  });

  it('should calculate monthly rate with very high rate ', function () {
    const values = { amount: 15000, years: 3, rate: 99 };
    expect(calculateMonthlyPayment(values)).toEqual('1313.17');
  });

  it('should calculate monthly rate with low rate', function () {
    const values = { amount: 15000, years: 3, rate: 1 };
    expect(calculateMonthlyPayment(values)).toEqual('423.12');
  });

});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({ amount: 36000, years: 3, rate: 43 })).toMatch(/^\d+\.\d\d$/);
});


