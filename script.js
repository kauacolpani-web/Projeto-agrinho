function saibaMais(){
    document.getElementById("sobre").scrollIntoView({
        behavior:"smooth"
    });
}

function animarNumero(id, valorFinal){

    let numero = document.getElementById(id);

    let contador = 0;

    let intervalo = setInterval(() => {

        contador++;

        numero.textContent = contador;

        if(contador >= valorFinal){
            clearInterval(intervalo);
        }

    }, 30);
}

window.onload = () => {

    animarNumero("n1", 40);
    animarNumero("n2", 35);
    animarNumero("n3", 50);

}