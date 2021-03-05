
// --- Task 1 ---

class Circle {
    constructor(radius) { this.radius = radius; }

    circleLength() { return 2 * Math.PI * this.radius; }
    circleArea() { return Math.PI * (this.radius ** 2); }

    set radius(value) {
        if (value <= 0) { alert('Incorrect value entered!'); return; }
        this._radius = value;
    }

    get radius() { return this._radius; }
    get diametr() { return this._radius * 2; }

}