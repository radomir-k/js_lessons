function nCompare(a, b) {
    Number(a, b);
    return Math.sign(a-b);
}

function nFactorial(a) {
    Number(a);
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
    Number(a);
    let flag;
    let sum = 0;
    for (let i = 1; i < a; i++) {
        if (a % i == 0) { sum += i;}
    }
    if (sum == a) {flag = true;} else { flag = false;}

    return flag;
}

function perfectScan(a, b) {
    Number(a, b);
    for (let i = a; i <= b; i++) {
        if (checkPerfect(i) == true) { console.log(i); }
    }
}
// ------------------------------------------------------

function setTime(hour, minute, second) {

    if (hour < 10) {hour = 0 + "" + hour;}
    if (minute < 10) {minute = 0 + "" + minute;}
    if (second < 10) {second = 0 + "" + second;}

    return hour +":"+ minute + ":" + second;
}

function parsSec(hour, minute, second) {
    return hour*3600 + minute*60 + second;
}

function parsTime(incoming) {

    let hour = Nod(incoming, 3600);
    let minute = Nod((incoming - hour*3600), 60);
    let second = (incoming - hour*3600 - minute*60);

    return setTime(hour, minute, second);
}

function dateDifference(end, begin) {
    let timeEnd = end.split(':');
    let timeBegin = begin.split(':');
    let secEnd = (parseInt(timeEnd[0]))*3600 + (parseInt(timeEnd[1]))*60 + (parseInt(timeEnd[0]));
    let secBegin = (parseInt(timeBegin[0]))*3600 + (parseInt(timeBegin[1]))*60 + (parseInt(timeBegin[0]));
    let second = secEnd - secBegin;

    return (parsTime(second));
}

// --- NOD ---
function Nod(a, b) {
    return (a - a % b) / b;
}
