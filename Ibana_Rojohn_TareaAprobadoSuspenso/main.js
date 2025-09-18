function hasPassed(grades) {
    const values = grades.split(";");
    if (values.length !== 3) {
        throw new Error("Debe haber 3 notas separadas por ';'");
    }
    
    let total = 0;
    values.forEach(value => {
        valueInt = parseInt(value);
        if (isNaN(valueInt) || valueInt < 0 || value > 10) {
            throw new Error("La nota debe ser entre 0 y 10");
        }
        total += valueInt;
    });

    return total / values.length >= 5;
}

const testValues = [
    "0;5;1",
    "",
    "a;b;c",
    "5;5;5",
    "10;10",
    "10;10;10",
    "10;11;10",
];

testValues.forEach(testValue => {
    try {
        console.log(hasPassed(testValue) ? "aprobado" : "suspenso");
    } catch (e) {
        console.log("Ha habido un error");
    }
})
