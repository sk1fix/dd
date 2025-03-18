import { Vehicle, VehicleImpl } from "./veh";
import { Owner } from "./owner";

export enum BodyType {
    Sedan = "Седан",
    Hatchback = "Хэтчбек",
    SUV = "Внедорожник"
}

export enum CarClass {
    Economy = "Эконом",
    Comfort = "Комфорт",
    Luxury = "Люкс"
}

export interface Car extends Vehicle {
    bodyType: BodyType;
    carClass: CarClass;
}

export class CarImpl extends VehicleImpl implements Car {
    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: Owner,
        private _bodyType: BodyType,
        private _carClass: CarClass
    ) {
        super(brand, model, year, vin, registrationNumber, owner);
    }

    get bodyType(): BodyType {
        return this._bodyType;
    }

    get carClass(): CarClass {
        return this._carClass;
    }

    set bodyType(value: BodyType) {
        this._bodyType = value;
    }

    set carClass(value: CarClass) {
        this._carClass = value;
    }

    printVehicleInfo(): void {
        super.printVehicleInfo();
        console.log(`Тип кузова: ${this._bodyType}`);
        console.log(`Класс автомобиля: ${this._carClass}`);
    }
}