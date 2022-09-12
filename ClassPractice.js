class Shape {
    static numberShapes = 0;
    static MAX_NUM_SHAPES = 3;
    constructor(sides, length) {
        if (Shape.numberShapes === Shape.MAX_NUM_SHAPES) {
            throw new Error("Max number of shapes already created");
        }
        Shape.numberShapes++;
        this.sides = sides;
        this.length = length
    }


    static getNumberOfShapes() {
        return this.numberShapes;
    }

    get name() {
        return this.getShape();
    }
    getShape = function () {
        if (this.sides === 3) return "triangle"
        else if (this.sides === 4) return "rectangle"
    }

    get area() {
        return this.getArea();
    }
    getArea = function () {
        switch (this.name) {
            case "triangle":
                return this.length ** 2 * Math.sqrt(3) / 4
        }
    }

    // can't really delete instances.
    // delete = function () {
    // }
}

class Triangle extends Shape {
    constructor(sides, length, type) {
        super(sides, length);
        this.type = type;
    }
}

const triangle1 = new Shape(3, 10);
console.log(triangle1.area)

console.log(Shape.getNumberOfShapes())

const triangle2 = new Triangle(3, 5, "equilateral")
console.log(triangle2.type, triangle2.area);

console.log(Shape.getNumberOfShapes())

const square = new Shape(4, 5);
console.log(square.sides, square)

console.log(Shape.getNumberOfShapes())

square.delete()
console.log(Shape.getNumberOfShapes())
console.log(square)