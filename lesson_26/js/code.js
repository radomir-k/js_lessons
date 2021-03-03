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


product.sort(function(product) {
    if (product.isAvailable == true) { return -1; }
    if (product.isAvailable == false) { return 1; }
});

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
    for (let i = 0; i < product.length - 1; i++) {
        let name = product[i].name;
        let price = product[i].price;
        let stock = product[i].stock;
        let units = product[i].units
        let sum = price * stock;
        total += sum;
        console.log("Product: " + name + "\nPrice: " + price + " uah" + "\nAmount: " + stock + " " + units + "\nSUM: " + sum + " uah" + "\n..................");
    }

        console.log("TOTAL: " + total + " uah");
}