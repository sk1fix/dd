import { Transport } from "./transport";

const owner = new Transport.OwnerImpl(
    "Иванов",
    "Иван",
    "Иванович",
    new Date(2020, 1, 1),
    Transport.DocType.Passport,
    "1234",
    "123456"
);

const car1 = new Transport.CarImpl(
    "Toyota",
    "Camry",
    2020,
    "12345678901234567",
    "A123BC",
    owner,
    Transport.BodyType.Sedan,
    Transport.CarClass.Comfort
);

const car2 = new Transport.CarImpl(
    "Audi",
    "A4",
    2019,
    "98765432109876543",
    "B456DE",
    owner,
    Transport.BodyType.Sedan,
    Transport.CarClass.Luxury
);

const bike = new Transport.MotorbikeImpl(
    "Yamaha",
    "YZF-R1",
    2021,
    "12312312312312312",
    "C789FG",
    owner,
    "Спортивная",
    true
);

const storage = new Transport.VehicleStorageImpl(new Date());
storage.addVehicle(car1);
storage.addVehicle(car2);
storage.addVehicle(bike);

const sortedVehicles = storage.sortByBrand();

sortedVehicles.forEach(vehicle => vehicle.printVehicleInfo());