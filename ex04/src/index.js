const BAKING_TEMEPERATURES = {
    cake: { low: 180, high: 250 },
    bread: { low: 150, high: 250 },
    pie: { low: 200, high: 230 }
};

function main(baking) {
    // Only change code below this line

    const { bread: { low: lowBread } } = BAKING_TEMEPERATURES;
    const { bread: { high: highBread } } = BAKING_TEMEPERATURES;

    return { lowBread, highBread };
    // Only change code above this line
}

console.log(main(BAKING_TEMEPERATURES));
module.exports = main;