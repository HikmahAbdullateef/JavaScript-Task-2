const data = [
    {principal:2500, time:1.8},
    {principal:1000, time:5},
    {principal:3000, time:1},
    {principal:2000, time:3}
];
function interestCalculator(array) {
    let interestData = [];

    for (let i=0; i<array.length; i++) {
        let rate;
        let interest;
        let objectData;
    if (array[i].principal >= 2500 && array[i].time > 1 && array[i].time < 3) {
        rate = 3;
    } else if (array[i].principal >= 2500 && array[i].time >= 3) {
        rate = 4;
    } else if (array[i].principal < 2500 || array[i].time <= 1) {
        rate = 2;   
    } else {
        rate = 1;
    }
    interest = (array[i].principal * rate * array[i].time) / 100;
    objectData = {
        principal: array[i].principal,
        rate: rate,
        time: array[i].time,
        interest: interest
    };
    interestData.push(objectData);
}
console.log(interestData);
return interestData;
}

interestCalculator(data);
