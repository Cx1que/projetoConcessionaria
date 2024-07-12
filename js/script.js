const checkbox = document.getElementById('chechbox-id');
const inputAroTraseiro = document.getElementById('aroTraseiro');
const inputAroDianteiro = document.getElementById('aroDianteiro')

checkbox.addEventListener('change', ()=> {
    if (checkbox.checked) {
        inputAroTraseiro.disabled = true;
      inputAroTraseiro.value = inputAroDianteiro.value;
    } else {
        inputAroTraseiro.disabled = false;
    }
  });
  