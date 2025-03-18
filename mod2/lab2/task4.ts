class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
        return "No speak. I am fish!";
    }
}
    
class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
        return "Miyau!";
    }
}

function animal_info<T extends Pet>(animal: T): void {
    console.log("Кличка: " + animal.name);
    console.log("Возраст: " + animal.age);
    console.log("Голос: " + animal.speak());
    if (animal instanceof Dog)
        console.log("Тип: " + animal.label);
        
}

const cat = new Cat;
const dog = new Dog;
animal_info(cat);
animal_info(dog);
