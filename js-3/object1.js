let pedro = {
  nombre: "Pedro Perez",
  edad: 30,
  activo: true,
  hobbies: ["programar", "squash", "piano"],
};

// Imprimir el valor de la llave edad
console.log(pedro.edad);

// Agregar la propiedad estatura con valor 1.8
pedro.estatura = 1.8;

// Eliminar la propiedad activo
delete pedro.activo;

// Recorrer todas las propiedades e imprimir sus llaves y valores
for (let key in pedro) {
  console.log(key + ": " + pedro[key]);
}

// Agregar la función saluda al objeto pedro
pedro.saluda = function() {
  return "Hola, me llamo " + this.nombre;
};

// Llamar la función saluda y verificar el resultado
console.log(pedro.saluda());
