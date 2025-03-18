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

const car = new Transport.CarImpl(
    "Toyota",
    "Camry",
    2020,
    "12345678901234567",
    "A123BC",
    owner,
    Transport.BodyType.Sedan,
    Transport.CarClass.Comfort
);

const bike = new Transport.MotorbikeImpl(
    "Yamaha",
    "YZF-R1",
    2021,
    "98765432109876543",
    "B456DE",
    owner,
    "Спортивная",
    true
);

const storage = new Transport.VehicleStorageImpl(new Date());
storage.addVehicle(car);
storage.addVehicle(bike);

storage.getAllVehicles().forEach((vehicle: Transport.Vehicle) => vehicle.printVehicleInfo()); 