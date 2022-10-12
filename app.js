const nmbrbuttons = document.querySelectorAll("input.nmbr");
const equalsign = document.getElementById('equalsign');
const addsign = document.getElementById("addsign");
const clearbtn = document.getElementById('clearbtn');
const subsign = document.getElementById('subsign');
const multsign = document.getElementById('multsign');
const divsign = document.getElementById('divsign');
var operer = document.getElementById("operer");
var operateur = document.getElementById("operateur");
var operant = document.getElementById("operant");

clearbtn.addEventListener('click' , clear);
equalsign.addEventListener("click", egaliser);
addsign.addEventListener("click", additionner);
subsign.addEventListener('click', soustraire);
multsign.addEventListener('click', multiplier);
divsign.addEventListener('click', diviser);
nmbrbuttons.forEach(button =>{
    button.addEventListener('click', function(){
       operant.innerText += button.value;
    })
})
function egaliser(){
    if(operer.innerText !== '0' &&  operateur.innerText === '/' && operant.innerText === '0'){
        alert('nice try');
        operant.innerText = '';
    }
     if(operateur.innerText === '+'){
        additionner();
        operant.innerText = resultat;
        operer.innerText = '';
        operateur.innerText = ''; 
    } 
    else if(operateur.innerText === '-'){
        soustraire();
        operant.innerText = resultat;
        operer.innerText = '';
        operateur.innerText = ''; 
    }
    else if(operateur.innerText === '*'){
        multiplier();
        operant.innerText = resultat;
        operer.innerText = '';
        operateur.innerText = ''; 
    }
    else if(operateur.innerText === '/'){
        diviser();
        operant.innerText = resultat;
        operer.innerText = '';
        operateur.innerText = ''; 
    }
}
function diviser(){
    if(operant.innerText === '0'){
        alert('nice try');
        operant.innerText = '';
    }
    else if(operer.innerText === ''){
        operer.innerText = operant.innerText;
        operateur.innerText = '/';
        operant.innerText = '';
    }
    else if(operer.innerText !=='' && operant.innerText === ''){
        operateur.innerText = '/'
    }
    else if(operer.innerText !=='' && operant !==''){
        evaluer();
        operer.innerText = resultat;
        operateur.innerText = '/';
        operant.innerText = '';
    }
}
function multiplier(){
    if(operer.innerText === ''){
        operer.innerText = operant.innerText;
        operateur.innerText = '*';
        operant.innerText = '';
    }
    else if(operer.innerText !=='' && operant.innerText === ''){
        operateur.innerText = '*'
    }
    else if(operer.innerText !=='' && operant !==''){
        evaluer();
        operer.innerText = resultat;
        operateur.innerText = '*';
        operant.innerText = '';
    }
}
function soustraire(){
    if(operer.innerText === ''){
        operer.innerText = operant.innerText;
        operateur.innerText = subsign.value;
        operant.innerText = '';
    }
    else if(operer.innerText !=='' && operant.innerText === ''){
        operateur.innerText = subsign.value;
    }
    else if(operer.innerText !=='' && operant !==''){
        evaluer();
        operer.innerText = resultat;
        operateur.innerText = subsign.value;
        operant.innerText = '';
    }
}
function additionner(){
    if(operer.innerText === ''){
        operer.innerText = operant.innerText;
        operateur.innerText = addsign.value;
        operant.innerText = '';
    }
    else if(operer.innerText !=='' && operant.innerText === ''){
        operateur.innerText = addsign.value;
    }
    else if(operer.innerText !=='' && operant !==''){
        evaluer();
        operer.innerText = resultat;
        operateur.innerText = addsign.value;
        operant.innerText = '';
    }
}
function evaluer(){
    var operation = operer.innerText + operateur.innerText + operant.innerText;
    resultat = eval(operation);
}
function clear() {
    operer.innerText = '' ;
    operateur.innerText = '' ;
    operant.innerText = '' ;
}
function test(){alert('test reussi')};
