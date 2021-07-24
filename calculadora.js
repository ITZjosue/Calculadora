let pantalla = document.querySelector('.pantalla');
let botones = document.querySelectorAll('.boton');

botones.forEach(boton => boton.addEventListener('click',()=>{
    let caca = boton.textContent;
    let p  = document.createElement('p');
    if(caca !== 'AC' && caca!=='Del' && caca!== '='){
        p.textContent += `${caca}`;
        pantalla.appendChild(p);
    }else if(caca == 'AC'){
        pantalla.innerHTML = '';
    }
    else if(caca == 'Del'){
        pantalla.removeChild(pantalla.lastChild);
    }
    else if(caca == '='){
        let operar = pantalla.textContent;
        pantalla.textContent = eval(operar);
    }
}))