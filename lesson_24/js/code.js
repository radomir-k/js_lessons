function nCompare(a, b) {
    return Math.sign(a-b);
}

function nFactorial(a) {
    let res = count = 1;
    while(count <= a) { res *= count; count++; }
    return res;
}

function nUnite(a, b, c) {
    return Number("" + a + b + c);
}

function nArea(a, b) {
    if (b == 0) { b = a; }
    return a*b;
}

function nPerfect(a) {
    let flag;
    let sum = 0;
    for (let i = 1; i < a; i++) {
        if (a % i == 0) { sum += i;}
    }
    if (sum == a) {flag = true;} else { flag = false;}

    return flag;
}

function perfectScan(a, b) {
    for (i = a; i <= b; i++) {
        if (nPerfect(i) == true) { console.log(BigInt(i)); }
    }
}