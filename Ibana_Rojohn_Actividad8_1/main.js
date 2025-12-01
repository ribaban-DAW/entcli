function testError(x) {
    try {
        if (x == "hack") {
            console.log("Increíble");
            return;
        }
        if (x < 0 || x > 10) {
            throw new RangeError("Rango inválido tiene que estar entre 0 y 10");
        }
        if (x.toUpperCase() == x) {
            throw new Error("No ha transformado en mayúscula");
        }
    } catch (e) {
        console.log(e.name, e.message);
        if (e instanceof RangeError) {
            testError(10);
        } else if (e instanceof TypeError) {
            testError("10");
        } else {
            testError("hack");
        }
    }
}

testError(11);
