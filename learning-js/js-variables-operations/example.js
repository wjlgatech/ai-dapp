class Retangle {
    constructor(height, width) { //constructor function is; it equals to python __init__
        this.height = height;
        this.width = width;
    }

    getArea() { //define a function inside a class
        return this.height * this.width;
    }
}

module.exports = Retangle; //export the class Retangle