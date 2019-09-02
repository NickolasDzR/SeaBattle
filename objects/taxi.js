var taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: "1955",
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341
}

var test = {
    make: "Web",
    model: "BMW",
    year: "1951",
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 21341
}

function prequal(car) { // создаем функцию prequal c объектом car
    if (car.mileage > 10000) { // проверяем свойства объекта 
        return false;
    } else if (car.year > 1960) { // проверяем свойства объекта 
        return false;
    }
    return true;
}
var worthALook = prequal(taxi); // возвращаем переменной WorthALook функцию prequal со своствами объекта taxi
                                // мы вызываем функцию prequal и передаем переменную taxi как аргумент
                                // в переменную параметра car помещается копия ссылки
                                var worthALook = prequal(test); // в функцию prequal поместилась ссылка test на объект как аргумент и в функции prequal переменной car поместилась копия ссылки на этот объект

if (worthALook) {
    console.log("You gotta check out this " + taxi.make + taxi.model)
} else {
    console.log("You should really pass on the " + taxi.make + " " + taxi.model)
}

if (worthALook) {
    console.log("You gotta check out this " + test.make + taxi.model)
} else {
    console.log("You should really pass on the " + test.make + " " + taxi.model)
}

// пример.

var fido = {
    name: "fido",
    weight: 48,
    breed: "mixed",
    loves: "walks"
}

loseWeight(fido, 10); // передаем аргумент fido, 10 к переменной loseWeight

function loseWeight(dog, amount) { // переменная копирует значение ссылки fido на объект и подставляет аргумент 10 к amount
    dog.weight = dog.weight - amount; // берем копию dog объекта fido свойство weight и вычитаем amount 10 из аргумента к функции loseWeight
}
console.log(fido.name + " now weights " + fido.weight); // так как все значения подставленные в функции меняют и объект вне функции, получаем число 38