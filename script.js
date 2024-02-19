function diaSemana() {
    var entrada = parseInt(document.getElementById("valor").value);
    switch (entrada) {
        case 1:
            document.getElementById("resultado").innerHTML="Domingo";
            break;
        case 2:
            document.getElementById("resultado").innerHTML="Segunda-feira";
            break;
        case 3:
            document.getElementById("resultado").innerHTML="Terça-feira";
            break;
        case 4:
            document.getElementById("resultado").innerHTML="Quarta-feira";
            break;
        case 5:
            document.getElementById("resultado").innerHTML="Quinta-feira";
            break;
        case 6:
            document.getElementById("resultado").innerHTML="Sexta-feira";
            break;
        case 7:
            document.getElementById("resultado").innerHTML="Sábado";
            break;
        default:
            document.getElementById("resultado").innerHTML="Valor inválido";
            break;
    }
}