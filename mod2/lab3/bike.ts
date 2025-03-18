import { Vehicle, VehicleImpl } from "./veh";
import { Owner } from "./owner";

export interface Motorbike extends Vehicle {
    frameType: string;
    isForSport: boolean;
}

export class MotorbikeImpl extends VehicleImpl implements Motorbike {
    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: Owner,
        private _frameType: string,
        private _isForSport: boolean
    ) {
        super(brand, model, year, vin, registrationNumber, owner);
    }

    get frameType(): string {
        return this._frameType;
    }

    get isForSport(): boolean {
        return this._isForSport;
    }

    set frameType(value: string) {
        this._frameType = value;
    }

    set isForSport(value: boolean) {
        this._isForSport = value;
    }

    printVehicleInfo(): void {
        super.printVehicleInfo();
        console.log(`Тип рамы: ${this._frameType}`);
        console.log(`Для спорта: ${this._isForSport ? "Да" : "Нет"}`);
    }
}