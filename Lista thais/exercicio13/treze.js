let numero = 11;
let primo = true;

for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
        primo = false;
    }
}

if (numero <= 1) {
    primo = false;
}

if (primo) {
    console.log("É primo");
} else {
    console.log("Não é primo");
}