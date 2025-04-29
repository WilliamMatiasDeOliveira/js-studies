// estrutura de repetição for
// aplicada quando sabemos exatamente quantas repetições vamos ter

for(let i = 0; i <= 10; i++){
    console.log("2 x " + i + " = " + 2 * i);
}

// for dentro de for
for(let i = 1; i <= 10; i++){
    console.log("TABUADA DO ", i);
    for(let j = 1; j <= 10; j++){
        console.log(`${i} x ${j} = ${i*j}`);
    }
}