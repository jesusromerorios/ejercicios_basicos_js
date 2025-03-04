const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
];

let menoresDeEdad = [];
let mayoresDeEdad = [];

for (const selectedUser of users ) {
    let findUser = users.indexOf(selectedUser);
    if (users[findUser].years < 18) {
        menoresDeEdad.push(users[findUser]);
    } else {
        mayoresDeEdad.push(users[findUser]);
    }
}
console.log("Usuarios menores de Edad: ");
console.log(menoresDeEdad);
console.log("Usuarios mayores de Edad: ");
console.log(mayoresDeEdad);