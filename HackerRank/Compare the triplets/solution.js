function compareTriplets(a, b) {
    let scoreA = 0;
    let scoreB = 0;

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] < b[j]) {
                scoreB++;
            } else if (a[i] > b[j]) {
                scoreA++;
            } else {
                scoreB + 0 && scoreA + 0
            }
        }
    }

    return (scoreA, scoreB);

}