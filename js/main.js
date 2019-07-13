document.getElementById("calcy").addEventListener("click", function lottery() {
    annual = document.getElementById("lotteryAmount").value * 0.04 ;
    monthly = annual / 12 ;
    document.getElementById("finalText").innerHTML = 
    `<p>If you were to win a <b> $${document.getElementById("lotteryAmount").value} jackpot</b>, you would have:</p>
    <p><b>An annual income of</b> $${annual}</p>
    <p><b>A monthly income of</b> $${monthly}</p>
    <hr>
    <p><em>This calculation was made by taking the "4% rule of investment" into consideration, which means you will never run out of money if you were to spend the amounts above while keeping the rest of the jackpot in a S&P 500 index fund.</em></p>

    <p><em>This calculation only makes sense in US & Canada since the inflation numbers play a big role in the final results. Your mileage may vary if you live in another country.</em></p>`;
  });
  