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
function saveFile() {
    
    let saveData = new Blob(product, {type: "text/plain;charset=utf-8"});
    saveAs(saveData, "/product.csv");
}
