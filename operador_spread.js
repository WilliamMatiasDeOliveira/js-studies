// Operador spread

let n1 = [1, 2, 3, 4]
let n2 = [5, 6, 7 ,8]
let n3 = [9, 10, 11, 12]

// utilizando o spread

console.log(n1);
console.log(n2);
console.log(n3,...n1);

// exemplo em uma função de soma
const soma = (v1, v2, v3) => {
    return v1 + v2 + v3    
}

let valores = [1, 2, 3]

console.log(soma(...valores));

