let displayResult = document.querySelector('.displayResult');

//Edit This Array To Test
const prices = [100, 230, 44, 293, 23224, 34535, 10921, 0];


function BuySellGold(arr) {
    let market = [];

    arr.forEach(x => {
        for (let i = 0; i < arr.length - arr.indexOf(x); i++) {
            market.push({
                price: x,
                sell: arr[i + arr.indexOf(x)],
                diff: arr[i + arr.indexOf(x)] - x
            });
        }
    });

    market.sort((a, b) => {
        if (a.diff > b.diff) {
            return -1;
        } else if (b.diff > a.diff) {
            return 1;
        } else {
            return 0;
        }
    });

    let buyDay = arr.indexOf(market[0].price) + 1;
    let sellDay = arr.indexOf(market[0].sell) + 1;
    let diff = market[0].diff;
    let result = diff > 0 ? `You will make profit of ${diff}` : `You will lose ${diff}`;

    return `To make the most profit, you must buy on day ${buyDay} and sell it on day ${sellDay}. ${result} `;
}

displayResult.innerHTML += BuySellGold(prices);
