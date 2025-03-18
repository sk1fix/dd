export namespace Transport {   
    function freezePrototype(constructor: Function) {
        Object.freeze(constructor);
        Object.freeze(constructor.prototype);
    } 

    function toUpperLog(target: any, propertyName: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
    
        descriptor.value = function (...args: any[]) {
            const originalConsoleLog = console.log;
    
            console.log = (message: string) => {
                if (typeof message === "string") {
                    originalConsoleLog(message.toUpperCase());
                } else {
                    originalConsoleLog(message);
                }
            };
    
            originalMethod.apply(this, args);
    
            console.log = originalConsoleLog;
        };
    
        return descriptor;
    }
    export enum DocType {
        Passport = "Паспорт",
        DriverLicense = "Водительское удостоверение",
        IDCard = "Удостоверение личности"
    }

    export interface Owner {
        lastName: string;
        firstName: string;
        middleName: string;
        birthDate: Date;
        documentType: DocType;
        documentSeries: string;
        documentNumber: string;
        printOwnerInfo(): void;
    }

    export class OwnerImpl implements Owner {
        constructor(
            private _lastName: string,
            private _firstName: string,
            private _middleName: string,
            private _birthDate: Date,
            private _documentType: DocType,
            private _documentSeries: string,
            private _documentNumber: string
        ) {}

        get lastName(): string {
            return this._lastName;
        }

        get firstName(): string {
            return this._firstName;
        }

        get middleName(): string {
            return this._middleName;
        }

        get birthDate(): Date {
            return this._birthDate;
        }

        get documentType(): DocType {
            return this._documentType;
        }

        get documentSeries(): string {
            return this._documentSeries;
        }

        get documentNumber(): string {
            return this._documentNumber;
        }

        set lastName(value: string) {
            this._lastName = value;
        }

        set firstName(value: string) {
            this._firstName = value;
        }

        set middleName(value: string) {
            this._middleName = value;
        }

        set birthDate(value: Date) {
            this._birthDate = value;
        }

        set documentType(value: DocType) {
            this._documentType = value;
        }

        set documentSeries(value: string) {
            this._documentSeries = value;
        }

        set documentNumber(value: string) {
            this._documentNumber = value;
        }

        printOwnerInfo(): void {
            console.log(`Фамилия: ${this._lastName}`);
            console.log(`Имя: ${this._firstName}`);
            console.log(`Отчество: ${this._middleName}`);
            console.log(`Дата рождения: ${this._birthDate.toLocaleDateString()}`);
            console.log(`Тип документа: ${this._documentType}`);
            console.log(`Серия документа: ${this._documentSeries}`);
            console.log(`Номер документа: ${this._documentNumber}`);
        }
    }
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

    @freezePrototype
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

        @toUpperLog
        printVehicleInfo(): void {
            super.printVehicleInfo();
            console.log(`Тип кузова: ${this._bodyType}`);
            console.log(`Класс автомобиля: ${this._carClass}`);
        }
    }
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
    export interface VehicleStorage<T extends Vehicle> {
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
}