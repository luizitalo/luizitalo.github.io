const numeros = document.querySelectorAll('.feli');
numeros.forEach((numero) => {
    const total = numero.innerText;

    let start = 0;
    const timer = setInterval(() =>{
        start++; 
       numero.innerText = start
        if (start >= total)
        clearInterval(timer)
    }, 140)
});


var paragrafo = document.querySelector('.pp')
var text =  paragrafo.innerHTML
var index = 0


const escrever = () =>{
    paragrafo.innerHTML = paragrafo.innerHTML.replace('', '')

    if (text.length > index){
        if (index == 0){
            paragrafo.innerHTML = text.charAt(index)
        }else {
            paragrafo.innerHTML += text.charAt(index)
        }
        paragrafo.innerHTML += ''

        index++
        setTimeout(escrever, 100)
    }
}

escrever()


const menuDiv = document.getElementById('menu-mobile')
const btnAnimar = document.getElementById('btn-menu')
 
menuDiv.addEventListener('click', animarMenu)

function animarMenu(){
    menuDiv.classList.toggle('abri')
    btnAnimar.classList.toggle('ativo')
}
