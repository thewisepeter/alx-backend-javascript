function calculateNumber(a, b){
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);

    // Calculate the sum of the rounded values
    const sum = roundedA + roundedB;

    return sum;
}

module.exports = calculateNumber;