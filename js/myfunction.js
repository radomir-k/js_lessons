function NOD(a, b) {
    while (a != b) {
        if (a > b) {
            let tmp = a;
            a = b;
            b = tmp;
        }
        b = b - a;
    }
    return a;
}
