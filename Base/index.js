class Car {
    constructor(doors, engine, color){
            this.doors = doors;
            this.engine = engine;
            this.color = color;
    }
}

class carFactory {
    createCar(type){
        switch(type){
            case 'civic':
                return new Car(4, 'V6', 'grey');
            case 'fiesta':
                return new Car(2, "v4", 'red');
        }
    }
}

const factory = new carFactory();
const civic = factory.createCar('civic');
const fiesta = factory.createCar('fiesta');

console.log(civic);
console.log(fiesta);