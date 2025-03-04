//Este ejercicio es un deribado del 20 que he obtuve intentando solucionar un error de como se mostraba el resultado del
//ejercicio principal. Lo añado porque visualmente me gustaba mas el resultado y por tenerlo en el grupo subido.
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
        menoresDeEdad.push(users[findUser].name+" con una edad de: "+users[findUser].years+" años ");
    } else {
        mayoresDeEdad.push(users[findUser].name+" con una edad de: "+users[findUser].years+" años ");
    }
}
console.log("Usuarios menores de Edad: "+menoresDeEdad);
console.log("Usuarios mayores de Edad: "+mayoresDeEdad);