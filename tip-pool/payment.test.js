describe("Payment test (with setup and tear-down)", function() {
  beforeEach(function () {
    billAmtInput.value = '100';
    tipAmtInput.value = '10';
  });

  it('should add a new curPayment to allPayments on submitPaymentInfo()', function () {
    submitPaymentInfo();
    
    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments['payment' + paymentId].tipPercent).toEqual(10);
  });

  afterEach(function() {
    paymentId = 0;
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = "";
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    allPayments = {};
  });
});
