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