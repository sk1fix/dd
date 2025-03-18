import { Vehicle } from "./veh";

interface VehicleStorage<T extends Vehicle> {
    creationDate: Date;
    vehicles: T[];
    getAllVehicles(): T[];
}

export class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T> {
    vehicles: T[];

    constructor(public creationDate: Date, vehicles: T[] = []) {
        this.vehicles = vehicles;
    }
    getAllVehicles(): T[] {
        return this.vehicles;
    }

    addVehicle(vehicle: T): void {
        this.vehicles.push(vehicle);
    }
}