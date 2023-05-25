// Crear la variable receta como un objeto literal vacío
let receta = {};

// Agregar la propiedad nombre con valor "Sandwich"
receta.nombre = "Sandwich";

// Agregar la propiedad ingredientes como un arreglo vacío
receta.ingredientes = [];

// Agregar un objeto al arreglo ingredientes con las propiedades nombre y cantidad
receta.ingredientes.push({ nombre: "Pan", cantidad: 2 });

// Agregar otro ingrediente al arreglo con las propiedades nombre y cantidad
receta.ingredientes.push({ nombre: "Queso", cantidad: 1 });

// Imprimir el nombre del primer ingrediente
console.log(receta.ingredientes[0].nombre);

// Sumar todas las cantidades de los ingredientes
let totalCantidad = 0;
for (let i = 0; i < receta.ingredientes.length; i++) {
  totalCantidad += receta.ingredientes[i].cantidad;
}

// Imprimir el resultado de la suma en la consola
console.log("Total de cantidades:", totalCantidad);