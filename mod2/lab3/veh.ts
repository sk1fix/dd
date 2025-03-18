import { Owner } from "./owner";

export interface Vehicle {
    brand: string;
    model: string;
    year: number;
    vin: string;
    registrationNumber: string;
    owner: Owner;
    printVehicleInfo(): void;
}

export class VehicleImpl implements Vehicle {
    constructor(
        private _brand: string,
        private _model: string,
        private _year: number,
        private _vin: string,
        private _registrationNumber: string,
        private _owner: Owner
    ) {}

    get brand(): string {
        return this._brand;
    }

    get model(): string {
        return this._model;
    }

    get year(): number {
        return this._year;
    }

    get vin(): string {
        return this._vin;
    }

    get registrationNumber(): string {
        return this._registrationNumber;
    }

    get owner(): Owner {
        return this._owner;
    }

    set brand(value: string) {
        this._brand = value;
    }

    set model(value: string) {
        this._model = value;
    }

    set year(value: number) {
        this._year = value;
    }

    set vin(value: string) {
        this._vin = value;
    }

    set registrationNumber(value: string) {
        this._registrationNumber = value;
    }

    set owner(value: Owner) {
        this._owner = value;
    }

    printVehicleInfo(): void {
        console.log("Информация о транспортном средстве:");
        console.log(`Марка: ${this._brand}`);
        console.log(`Модель: ${this._model}`);
        console.log(`Год выпуска: ${this._year}`);
        console.log(`VIN-номер: ${this._vin}`);
        console.log(`Регистрационный номер: ${this._registrationNumber}`);
    }
}