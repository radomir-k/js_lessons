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

// --- This code outputs some valid values ​​and hangs ---
function checkPerfect(a) {
    let flag;
    let sum = 0;
    for (let i = 1; i < a; i++) {
        if (a % i == 0) { sum += i;}
    }
    if (sum == a) {flag = true;} else { flag = false;}

    return flag;
}

function perfectScan(a, b) {
    for (let i = a; i <= b; i++) {
        if (checkPerfect(i) == true) { console.log(i); }
    }
}
// ------------------------------------------------------

function setTime(h, m, s) {

    if (h < 10) {h = 0 + "" + h;}
    if (m < 10) {m = 0 + "" + m;}
    if (s < 10) {s = 0 + "" + s;}

    let t = h +":"+ m + ":" + s;
    return t;
}

function parsSec(h, m, s) {
    let t = h*3600 + m*60 + s;
    return t;
}

function parsTime(s) {

    h = Nod(s, 3600);
    m = Nod((s - h*3600), 60);
    s = (s - h*3600 - m*60);

    t = setTime(h, m, s);

    return t;
}

function name(params) {
    
}

// --- NOD ---
function Nod(a, b) {
    c = (a - a % b) / b;
    return c;
}