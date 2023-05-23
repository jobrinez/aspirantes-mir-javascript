function join(arr) {
    let result = '';
  
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
      
      if (i < arr.length - 1) {
        result += ' ';
      }
    }
  
    return result;
  }

const elements = ['Hola', 'amigos', 'Make It', 'Real'];
const result = join(elements);
console.log(result); // Imprime: "Hola mundo desde JavaScript"