// Crear el objeto persona con las propiedades nombre, edad, ciudad y profesión
let persona = {
    nombre: "Cristofer",
    edad: 42,
    ciudad: "Bogotá",
    profesion: "Ingeniero",
  };
  
  // Imprimir el objeto persona completo
  console.log(persona);
  
  // Definir la función presentacion que toma el objeto persona como argumento y devuelve una cadena de texto
  function presentacion(persona) {
    return "Hola, mi nombre es " + persona.nombre + ", tengo " + persona.edad + " años y vivo en " + persona.ciudad + ".";
  }
  
  // Llamar a la función presentacion y almacenar el resultado en la variable mensaje
  let mensaje = presentacion(persona);
  
  // Imprimir el valor de la variable mensaje
  console.log(mensaje);
  
  // Agregar la propiedad hobbies al objeto persona
  persona.hobbies = ["viajar", "leer", "cocinar"];
  
  // Imprimir la propiedad hobbies del objeto persona
  console.log(persona.hobbies);
  
  // Utilizar un ciclo for para imprimir cada elemento del arreglo de hobbies
  for (let i = 0; i < persona.hobbies.length; i++) {
    console.log(persona.hobbies[i]);
  }