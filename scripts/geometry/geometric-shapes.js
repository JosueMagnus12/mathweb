export class Square {
    perimeter(sideLength) {
        return sideLength * 4;
    }

    area(sideLength) {
        return sideLength ** 2;
    }
}

export class Triangle {
    perimeter(sideA, sideB, base) {
        return sideA + sideB + base;
    }

    area(base, height) {
        return (base * height) / 2;
    }
}

export class Circle {
    perimeter(radius) {
        const diameter = radius * 2;
        return diameter * Math.PI;
    }

    area(radius) {
        const radiusSqr = radius ** 2;
        return Math.PI * (radiusSqr);
    }
}