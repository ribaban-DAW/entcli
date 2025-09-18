function printStatus(user) {
    if (user.age < 0) {
        throw new Error("La edad no puede ser negativa");
    } else if (user.age <= 12) {
        userStatus = "Niño";
    } else if (user.age <= 17) {
        userStatus = "Adolescente";
    } else if (user.age <= 64) {
        userStatus = "Trabajador";
    } else if (user.age >= 65) {
        userStatus = "Jubilado";
    }

    const newUser = {
        ...user,
        status: userStatus,
    };
    console.log(`${newUser.name} tiene ${newUser.age} años y por tanto es ${newUser.status}`);
}

const userName = prompt("¿Cómo te llamas?");
let userAge = prompt("¿Cuántos años tienes?");
userAge = parseInt(userAge);
if (isNaN(userAge)) {
    throw new Error("La edad no es un número válido");
}

printStatus({
    name: userName,
    age: userAge,
});

const testValues = [
    {
        name: "a",
        age: -1,
    },
    {
        name: "b",
        age: 0,
    },
    {
        name: "c",
        age: 12,
    },
    {
        name: "d",
        age: 13,
    },
    {
        name: "e",
        age: 16,
    },
    {
        name: "f",
        age: 17,
    },
    {
        name: "g",
        age: 18,
    },
    {
        name: "h",
        age: 63,
    },
    {
        name: "i",
        age: 64,
    },
    {
        name: "j",
        age: 65,
    },
    {
        name: "k",
        age: 66,
    },
];

testValues.forEach(testValue => {
    try {
        printStatus(testValue);
    } catch (e) {
        console.log("Ha habido un error");
    }
})
