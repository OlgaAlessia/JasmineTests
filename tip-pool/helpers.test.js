describe("Helpers test (with setup and tear-down)", function() {

  it('should calculate the total payment on sumPaymentTotal()', function () {
    expect(sumPaymentTotal('tipPercent')).toEqual(0);
  });

  it('should calculate the tip percent on calculateTipPercent()', function () {
    expect(calculateTipPercent(150, 15)).toEqual(10);
    });


});
