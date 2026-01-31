function calcularRank(vitoriasJogador, derrotasJogador){

saldoVitorias = vitoriasJogador - derrotasJogador;

    if(saldoVitorias <= 10){
        return "Ferro"
    }else if(saldoVitorias <= 20){
        return "Bronze"
    }else if(saldoVitorias <= 50){
        return "Prata"
    }else if(saldoVitorias <= 80){
        return "Ouro"
    }else if(saldoVitorias <= 90){
        return "Diamante"
    }else if(saldoVitorias <= 100){
        return "Lendário"
    }else if(saldoVitorias > 101){
        return "Imortal"
    }

}

console.log(calcularRank(90, 9))

function calcularRankCase(vitoriasJogador, derrotasJogador){
    
saldoVitorias = vitoriasJogador - derrotasJogador;

    switch(true){
        case saldoVitorias <=10: 
        return "Ferro";
        break;
        case saldoVitorias <=20: 
        return "Bronze";
        break;
        case saldoVitorias <=50: 
        return "Prata";
        break;
        case saldoVitorias <=80: 
        return "Ouro";
        break;
        case saldoVitorias <=90: 
        return "Diamante";
        break;
        case saldoVitorias <=100: 
        return "Lendário";
        break;
        case saldoVitorias > 100: 
        return "Imortal";
        break;
    }

}

console.log(calcularRankCase(101, 0))