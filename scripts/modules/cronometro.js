export default function initCronometro(){

    let buttonStart = document.querySelector('[data-cronometro="iniciar"]')
    let buttonPause = document.querySelector('[data-cronometro="pausar"]')
    let buttonReset = document.querySelector('[data-cronometro="resetar"]')
    let segundos = document.querySelector('.segundos');
    let minutos = document.querySelector('.minutos');
    
    buttonStart.addEventListener('click', iniciar)
    buttonPause.addEventListener('click', pausar);
    buttonReset.addEventListener('click', reset);
    
    let segundo = 0;
    let minuto = 0;
    let intervalo;
    
    function iniciar(){
        intervalo = setInterval(() => {
            segundos.innerText = segundo++;
            if(segundo == 60){
                segundo = 0;
                minuto++;
            }
            if (segundo <= 9) {
                    segundos.innerText = "0" + segundo;
            }
            minutos.innerText = minuto;
            if (minuto <= 9) {
                minutos.innerText = "0" + minuto;
            }
        },1000)
        buttonStart.setAttribute('disabled','')
    }
    function pausar(){
        clearInterval(intervalo);
        buttonStart.removeAttribute('disabled');
    }
    function reset(){
        segundos.innerText = "00";
        segundo = 0;
        minutos.innerText = "00";
        minuto = 0;
    }
}
