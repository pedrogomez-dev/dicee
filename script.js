function primerito(){
let primero = Math.random();
    primero = Math.floor(primero * 6)+1;
    console.log(primero);
    return primero;
}
function segundito(verificar){
    let segundo = 0;
    do{
        segundo = Math.random();
        segundo = Math.floor(segundo*6)+1;
    }while(verificar == segundo);
    console.log(segundo)
    return segundo;
}

function imprimir(fir,sec){//FIR DE FIRST(PRIMERO) SEC DE SECOND(SEGUNDO)
    primeraFoto = document.querySelector(".img1");
    segundaFoto = document.querySelector(".img2");
    for (let i = 1; i<7; i++){
        if (fir === i){
            primeraFoto.setAttribute(`src`,`./images/dice${i}.png`);
            console.log(`Primer dado ${i}`);
        }
    }
    for(let y = 1; y<7; y++){
        if (sec === y){
            segundaFoto.setAttribute(`src`,`./images/dice${y}.png`);
            console.log(`Segundo dado ${y}`);
        }
    }
    if(fir>sec){
        document.querySelector("h1").innerHTML = "EL PRIMERO GANA";
    }else{
        document.querySelector("h1").innerHTML = "EL SEGUNDO GANA";
    }
}



let calcularPrimero = primerito();
let calcularSegundo = segundito(calcularPrimero);
imprimir(calcularPrimero,calcularSegundo);




