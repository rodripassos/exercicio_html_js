const form = document.getElementById('form-valida');
const CampoA = document.getElementById('campo-A');
const CampoB = document.getElementById('campo-B');
let Formvalido = false;

function ValidaCampo(CampoA,CampoB) {
    return CampoB > CampoA;
}

form.addEventListener('submit',function(e) {
    e.preventDefault();
    let Message = '';
    const containerMessage = document.querySelector('.message');

    Formvalido = ValidaCampo(CampoA.value,CampoB.value)
        
    if (Formvalido) {
        Message = 'Parabéns, o campo B é maior que o Campo A!';
        containerMessage.classList.remove('error');
        containerMessage.classList.add('succes');
        containerMessage.innerHTML = Message;       
        containerMessage.style.display = "block";
                 
    }
    else {
        Message = 'Incorreto, o campo B NÃO é maior que o Campo A!';
        containerMessage.classList.add('error');
        containerMessage.innerHTML = Message;        
        containerMessage.style.display = "block";
    }
        
})