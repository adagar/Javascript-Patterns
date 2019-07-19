// class Suv {
//     constructor(doors, engine, color){
//             this.doors = doors;
//             this.engine = engine;
//             this.color = color;
//     }
// }

// class suvFactory {
//     createSuv(type){
//         switch(type){
//             case 'CX5':
//                 return new Car(4, 'V8', 'blue');
//             case 'wrangler':
//                 return new Car(6, "v10", 'yellow');
//         }
//     }
// }

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


let carMixin = {
    revEngine(){
        console.log(`The ${this.engine} is doing vroom vroom`);
    }
}
// const mySuvFactory = new suvFactory();
const myCarFactory = new carFactory();

const autoManufacturer = (type, model) => {
    switch(type){
        case 'car':
            return myCarFactory.createCar(model);
        case 'suv':
            return mySuvFactory.createSuv(model);
    }

}

Object.assign(Car.prototype, carMixin);

const cx5 = autoManufacturer('car', 'civic');

cx5.revEngine();