//Variaveis globais para identificação de conta
let maisSbl      = '+';
let menosSbl     = '-';
let multSbl      = '×';
let pontoSbl     = '.';

//Variaveis para controle de conta
let numControleUm = 0;
let numControleDois = 0;
let calculo = '';
let resultado;

// base para verificação de operador usado (base para duas proximas funções)
idMais.addEventListener('click', function (event) {
    //Verifica para realizar um conta por vez.
    if(calculo == 'Menos' || calculo == 'Mult' ||  calculo == 'Divi'){
        alert("Só é permitido um calculo por vez");
    }else{
        //Atribui para realizar a conta
        calculo = 'Mais';
        //Colocar o valor digitado
        document.getElementById("idNumVisor").value += maisSbl;
        //Atriu os valores as variavés
        numControleUm = numControleDois;
        numControleDois = 0;
    }
    //Previne o comportamento padrão do formulario 
    event.preventDefault();
});


idMenos.addEventListener('click', function (event) {
    if(calculo == 'Mais' || calculo == 'Mult' ||  calculo == 'Divi'){
        alert("Só é permitido um calculo por vez");
    }else{
        calculo = 'Menos';
        document.getElementById("idNumVisor").value += menosSbl;
        numControleUm = numControleDois;
        numControleDois = 0;
    }
    event.preventDefault();
});

idMult.addEventListener('click', function (event) {

    if(calculo == 'Mais' || calculo == 'Menos' ||  calculo == 'Divi'){
        alert("Só é permitido um calculo por vez");
    }else{
        calculo = 'Mult';
        document.getElementById("idNumVisor").value += multSbl;
        numControleUm = numControleDois;
        numControleDois = 0;
    }
    event.preventDefault();
});

//Função para limpar visor
idClear.addEventListener('click', function (event) {

    //Captura de formulario
    var formulario = document.getElementById("idCalcForm");
    //Reset de formulario
    formulario.reset();
    //Uso do <form>, previnindo comportamento
    event.preventDefault();
    //Limpa variaveis
    numControleUm = 0;
    segundoNumero = 0;
});

//Base para adição de botoes para conta(proximas funções)
idPoint.addEventListener('click', function (event) {

    //Atribui valor 
    numControleDois += '.' 
    //Colocar o valor digitado
    document.getElementById("idNumVisor").value += pontoSbl;
    //Previne o comportamento padrão do formulario 
    event.preventDefault();
});

idSete.addEventListener('click', function (event) {
    numControleDois += '7' 
    document.getElementById("idNumVisor").value += 7;
    event.preventDefault();
});

idOito.addEventListener('click', function (event) {
    numControleDois += '8' 
    document.getElementById("idNumVisor").value += 8;
    event.preventDefault();
});

idNove.addEventListener('click', function (event) {
    numControleDois += '9' 
    document.getElementById("idNumVisor").value += 9; 
    event.preventDefault();
});

idQuatro.addEventListener('click', function (event) {
    numControleDois += '4' 
    document.getElementById("idNumVisor").value += 4;
    event.preventDefault();
});

idCinco.addEventListener('click', function (event) {
    numControleDois += '5' 
    document.getElementById("idNumVisor").value += 5; 
    event.preventDefault();
});

idSeis.addEventListener('click', function (event) {
    numControleDois += '6' 
    document.getElementById("idNumVisor").value += 6;
    event.preventDefault();
});

idUm.addEventListener('click', function (event) {
    numControleDois += '1' 
    document.getElementById("idNumVisor").value += 1;
    event.preventDefault();
});

idDois.addEventListener('click', function (event) {
    numControleDois += '2' 
    document.getElementById("idNumVisor").value += 2;
    event.preventDefault();
});

idTres.addEventListener('click', function (event) {
    numControleDois += '3' 
    document.getElementById("idNumVisor").value += 3;
    event.preventDefault();
});

idZero.addEventListener('click', function (event) {
    numControleDois += '0' 
    document.getElementById("idNumVisor").value += 0;
    event.preventDefault();
});

// funtion com switch case para fazer calculos 
idEqual.addEventListener('click', function (event) {

    switch (calculo) {

        case 'Mais':

            //(base para outros cases)
            //Zera Calculos Feitos
            calculo = '';
            //Realiza a conta
            resultado = parseFloat(numControleUm) + parseFloat(numControleDois);
            //Limpa o input e colocar o resultado
            //Captura o formulario completo 
            var formulario = document.getElementById("idCalcForm");
            //Limpando o formulario
            formulario.reset();
            //Previne o comportamento padrão do formulario 
            event.preventDefault();
            //Colocar o valor resultado
            document.getElementById("idNumVisor").value += resultado;
            
            break;

        case 'Menos':

            calculo = '';  
            resultado = parseFloat(numControleUm) - parseFloat(numControleDois);
            var formulario = document.getElementById("idCalcForm");
            formulario.reset();
            event.preventDefault();
            document.getElementById("idNumVisor").value += resultado;

            break;

        case 'Mult':

            calculo = '';  
            resultado = parseFloat(numControleUm) * parseFloat(numControleDois);
            var formulario = document.getElementById("idCalcForm");
            formulario.reset();
            event.preventDefault();
            document.getElementById("idNumVisor").value += resultado;
        
            break;
        
        default:
            alert("Não é possível realizar mais de uma conta.");
            break;
        }

});
