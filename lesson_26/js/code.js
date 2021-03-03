
// --- Task 1-2 ---
let product = [
    {name: 'Butter', price: 55, stock: 2, units: 'piece', isAvailable: true },
    {name: 'Cheese', price: 220, stock: 1.2, units: 'kilo', isAvailable: false },
    {name: 'Sausage', price: 140, stock: 2, units: 'kilo', isAvailable: true },
    {name: 'Bread', price: 25, stock: 1, units: 'loaf', isAvailable: false },
    {name: 'Water', price: 15, stock: 5, units: 'litre', isAvailable: false },
    {name: 'Juice', price: 40, stock: 2, units: 'litre', isAvailable: false },
    {name: 'Apples', price: 25, stock: 5, units: 'kilo', isAvailable: true },
    {name: 'Bananas', price: 35, stock: 3, units: 'kilo', isAvailable: false },
    {name: 'Coffee', price: 120, stock: 2, units: 'pack', isAvailable: false },
    {name: 'Tea', price: 40, stock: 3, units: 'pack', isAvailable: true },
    {name: 'Sugar', price: 20, stock: 2, units: 'kilo', isAvailable: false },
]

function sortByAvailable (arr){
    arr.sort(function(product) {
        if (product.isAvailable == true) { return -1; }
        if (product.isAvailable == false) { return 1; }
    });

    console.log(arr);
}

function inputNewProduct() {

    let name = prompt("Enter product name: ");
    let price = prompt("Enter the cost: ");
    let stock = prompt("Enter minimum quantity: ");
    let units = prompt("Enter units: ");

    if (name == null || price == null || stock == null || units == null) {
        let f1 = confirm("Invalid data entered! Re-enter?");
            if (f1 == true) { inputNewProduct(); } else if (f1 == false) { return; }
    }

    if (price != 0 && stock != 0) { isAvailable = true; }
    else { isAvailable = false; }

    product.push({name, price, stock, units, isAvailable});

        let f2 = confirm("Add another product?");
            if (f2 == true) { inputNewProduct(); } else if (f2 == false) { return; }
}

function addProductStock() {

    addName = prompt("Enter product name: ");
    addStock = Number(prompt("Enter new quantity: "));

    for (let i = 0; i < product.length - 1; i++) {
        if (product[i].name == addName) {
            product[i].stock += addStock;
        }
    }
}

function checkPrint () {
    let total = 0;
    let averagePrice = 0;
    let maxSum = 0;
    let separator1 = "..................";
    let separator2 = "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~";

    for (let i = 0; i < product.length - 1; i++) {
        if (product[i].isAvailable == true) {
            let name = product[i].name;
            let price = product[i].price;
            let stock = product[i].stock;
            let units = product[i].units
            let sum = price * stock;

            if (maxSum < sum) { maxSum = sum; }
            total += sum;
            averagePrice = total / i;
            console.log(separator1 + "\nProduct: " + name + "\nPrice:   " + price + " uah" + "\nAmount:  " + stock + " " + units + "\nSUM:     " + sum + " uah");
        }
    }
        console.log("TOTAL:   " + total + " uah" + "\n" + separator2);
        console.log("Average price: " + averagePrice.toFixed (2) + " uah");
        console.log("Maximum purchase price: " + maxSum + " uah" + "\n" + separator2);
}


// --- Task 4 ---
let academy = [
    {auditoria: 201, facultet: 'Machanical', seating: 10},
    {auditoria: 204, facultet: 'Chemical', seating: 15},
    {auditoria: 331, facultet: 'Physics', seating: 10},
    {auditoria: 501, facultet: 'Chemical', seating: 35},
    {auditoria: 424, facultet: 'Technology', seating: 20},
    {auditoria: 211, facultet: 'Machanical', seating: 20},
    {auditoria: 531, facultet: 'Physics', seating: 20},
]

function facultet(fName){
    let separator = "+++++++++++++++++++++++++++++++++"

    for (let i = 0; i < academy.length - 1; i++) {
        if (academy[i].facultet == fName || fName == null) {
            let aNum = academy[i].auditoria;
            let fName = academy[i].facultet;
            let aSit = academy[i].seating;

            console.log(separator + "\nAuditoria:......... " + aNum + "\nFacultet:.......... " + fName +  "\nNumber of seats:... " + aSit);
        }
    }
}

function sortByFacultet(arr){
    arr.sort(function(a, b) {
        if (a.facultet < b.facultet) { return -1; }
        if (b.facultet > a.facultet) { return 1; }
    });

    console.log(arr);
}

function sortBySeating(arr){
    arr.sort(function(a, b) {
        if (a.seating - b.seating > 0) { return 1; }
        if (a.seating - b.seating < 0) { return -1; }
    });

    console.log(arr);
}

function studentCondition(a, b){
    if (a = academy.facultet && b > Number(academy.seating)) { return true; }
    else return false;
}

function audienceSelection (a, b) {
    let filtered = academy.filter(studentCondition == true);
    console.log(filtered);
}
