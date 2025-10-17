var corMudar = 'corBlue', corAtual = 'corRed';

/*function mudaCor(){
    let el = document.getElementById("corDiv");
    el.classList.remove(corAtual);
    el.classList.add(corMudar);
    let aux = corAtual;
    corAtual = corMudar;
    corMudar = aux;
}

document.getElementById('btnCor').addEventListener('click',mudaCor);*/
function mudaCor(){
    let el = document.getElementById("corDiv");
    el.classList.remove('corRed');
    el.classList.add('corBlue');
}

function voltaCor(){
    let el = document.getElementById("corDiv");
    el.classList.remove('corBlue');
    el.classList.add('corRed');
}

document.getElementById('corDiv').addEventListener('mouseenter',mudaCor);


document.getElementById('corDiv').addEventListener('mouseleave',voltaCor);