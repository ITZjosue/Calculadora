let pantalla = document.querySelector('.pantalla');
let botones = document.querySelectorAll('.boton');

botones.forEach(boton => boton.addEventListener('click',()=>{
    let ca = boton.textContent;
    let p  = document.createElement('p');
    if(ca !== 'AC' && ca!=='Del' && ca!== '='){
        p.textContent += `${ca}`;
        pantalla.appendChild(p);
    }else if(ca == 'AC'){
        pantalla.innerHTML = '';
    }
    else if(ca == 'Del'){
        pantalla.removeChild(pantalla.lastChild);
    }
    else if(ca == '='){
        let operar = pantalla.textContent;
        pantalla.textContent = eval(operar);
    }
}))