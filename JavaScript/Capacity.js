document.querySelectorAll('.Formula').forEach(formula =>{
  formula.addEventListener('click', function(){
    this.closest('.Formula').querySelector('.Derivation').classList.toggle('active');
  });
});