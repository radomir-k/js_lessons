
// --- Task 1 ---

class Circle {

    constructor(radius) { this.radius = radius; }

    circleLength() {

        return 2 * Math.PI * this.radius;
    }

    circleArea() {

        return Math.PI * (this.radius ** 2);
    }

    set radius(value) {
        if (value <= 0) {

            alert('Incorrect value entered!');

            return;
        }
        this._radius = value;
    }

    get radius() {

        return this._radius;
    }

    get diametr() {

        return this._radius * 2;
    }

}

class waterMarker {

    constructor(color, filling, consumption) {

        this.color = color;             // Using Color Ink

        this.filling = filling;         // Filling Percent

        this.consumption = consumption; // Consumption on Symbol
    }

    set color(value) {

        this._color = value;
    }

    set filling(value) {

        if ((value + this.filling) > 100) {

            alert('Too Much Ink!'); return;
        }

        this._filling = value;
    }

    get color() {

        return this._color;
    }

    get filling() {

        return this._filling;
    }

    // --- Ink Consumption Calculation ---
    inkConsumption(str, con) {

        return (str.length - str.split(' ').length -2) * con;
    }

}