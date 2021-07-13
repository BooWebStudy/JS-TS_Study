// Typescript 로 Helloworld ! 출력_(1)
let message = 'hello world!';
console.log(message);

// Typescript 로 Helloworld ! 출력_(2)
console.log('hello world!');

// 함수로 x, y, z 값을 입력받아서 전부다 더한 값을 리턴 받기
function sum(x:number, y:number, z:number): number {
    return x+y+z;
}

// interface, class, forEach practice
interface Shape {
    getArea(): number;
}

class Circle implements Shape {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10,5)];

shapes.forEach(shape => {
    console.log(shape.getArea());
});