const automobile = {
    manufacturer: 'Audi',
    brand: 'Quatro',
    model: 'Q3 Sportback',
    year:  "10.11.2020",
    engine: {
        type: "R4TFSI",
        fuel: "AI-95",
        volume: 1498,
        power: 150,
    },
    dimensions: {
        length: 4484,
        width: 2024,
        height: 1616,
    },
    maxSpeed: 205,
    averageSpeed: 100,
    acceleration: 9.6,
    fuelConsumption: 7,
    tankCapacity: 58,

    tеravelInfo: function(way) {
        let travelTime = (way / this.averageSpeed) + Math.round(way / (this.averageSpeed * 4));
        let tFuel = (way / 100) * 7;
        return [travelTime, tFuel];
    }
};

function autoInfo () {
    console.log(automobile);
}

function autoTravelInfo(a) {
    let b = automobile.tеravelInfo(a);
    console.log("Travel time: " + b[0] + " hours."+ "\nFuel consumption: " + b[1] +" liters.");
}


const fractionOne = {
    numerator: 16,
    denominator: 32,
}

const fractionTwo = {
    numerator: 4,
    denominator: 12,
}

function simplificationFractions(a, b) {
    let nod = NOD(a, b);
    a = a / nod;
    b = b / nod;
    return [a, b];
}

function divisionFractions(a1, b1, a2, b2) {
    let a = a1 * b2;
    let b = b1 * a2;
    return simplificationFractions(a, b);
}

function multiplicationFractions(a1, b1, a2, b2) {
    let a = a1 * a2;
    let b = b1 * b2;
    return simplificationFractions(a, b);
}

function subtractionFractions(a1, b1, a2, b2) {
    let a = a1 * b2 - a2 * b1;
    let b = b1 * b2;
    return simplificationFractions(a, b);
}

function additionFractions(a1, b1, a2, b2) {
    let a = a1 * b2 + a2 * b1;
    let b = b1 * b2;
    return simplificationFractions(a, b);
}