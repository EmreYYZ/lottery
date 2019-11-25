var cleave = new Cleave('.lottery-A', {
  numeral: true,
  numeralThousandsGroupStyle: 'thousand'
});

document.getElementById("calcy").addEventListener("click", function lottery() {
    lotteryValue = accounting.formatMoney(document.getElementById("lotteryAmount").value);
    annual = document.getElementById("lotteryAmount").value * 0.04 ;
    annualResult = accounting.formatMoney(annual);
    monthly = annual / 12 ;
    monthlyResult = accounting.formatMoney(monthly);

    document.getElementById("finalText").innerHTML = 
      `
      <hr>
      <p>If you were to win a <b> ${lotteryValue} jackpot</b>, you would have:</p>
      <p><b>An annual income of</b> ${annualResult}</p>
      <p><b>A monthly income of</b> ${monthlyResult}</p>
      <hr>
      <p><em>This calculation was made by taking the <a href="https://www.investopedia.com/terms/f/four-percent-rule.asp" target="_blank">4% rule of investment</a> into consideration, which means you will never run out of money if you were to spend the amounts above while keeping the rest of the jackpot in a S&P 500 index fund.</em></p>

      <p><em>This calculation only makes sense in the US & Canada since the inflation numbers play a big role in the final results. Your mileage may vary if you live in another country.</em></p>`;
  });
  