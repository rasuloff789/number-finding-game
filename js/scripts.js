var bodyEver = document.querySelector('body');

var thinkNumberForm = document.querySelector('.think-number-form');
var thinkNumberInput = thinkNumberForm.querySelector('.think-number-input');
var thinkNumberSubmit = thinkNumberForm.querySelector('.think-number-submit');

var thinkAttempForm = document.querySelector('.think-attemp-form');
var thinkAttempInput = thinkAttempForm.querySelector('.think-attemp-input');
var thinkAttempSubmit = thinkAttempForm.querySelector('.think-attemp-submit');

var checkNumberForm = document.querySelector('.check-number-form');
var checkNumberInput = checkNumberForm.querySelector('.check-number-input');
var checkNumberBtn = checkNumberForm.querySelector('.check-number-btn');

var result = document.querySelector('.result');
var openModal = document.querySelector('.openModal');
var reloadPageBtn = document.querySelectorAll('.reloadPageBtn');

var thinkNumber = 100 ; 
var thinkNumberRandom = Math.floor(Math.random() * (thinkNumber  + 1) );

var attemptBox = document.querySelector('.attemp-box');
var attemptText = document.querySelector('.attempt');
var attempt = 10;
attemptText.textContent = attempt;

var win  = document.querySelector('.win');
var lose  = document.querySelector('.lose');

var openModalFnc = function(){
  bodyEver.classList.add('modal-open');
  var shadow = document.createElement("DIV");
  bodyEver.appendChild(shadow);
  shadow.classList.add('modal-backdrop' , 'fade' , 'show');
  openModal.classList.add("show");
  openModal.style.display = "block" ;
}
for(var i = 0; i < reloadPageBtn.length ;i++ ){
  reloadPageBtn[i].addEventListener('click' , function(){
    location.reload();
  });
};

thinkNumberForm.addEventListener('submit' , function(evt){
  evt.preventDefault();
  var thinkNumberInputValue = parseFloat( Math.round(thinkNumberInput.value.trim()) , 10);
  
  if(thinkNumberInput.value.trim() === ""){
    
    thinkNumberInput.value = "";
    alert('Baribir tekshirishingizni bilgandim :))');
    return;
    
  }
  
  if (isNaN(thinkNumberInputValue)){
    
    thinkNumberInput.value = "";
    alert('Baribir tekshirishingizni bilgandim :))');
    return;
    
  }
  if (thinkNumberInputValue < 0 ){
    
    thinkNumberInput.value = "";
    alert('Baribir tekshirishingizni bilgandim :)) Musbat Son kiriting');
    return;
    
  }
  
  thinkNumber = thinkNumberInputValue ; 
  thinkNumberForm.remove();
  alert(`Qabul qilindi`);
  
  thinkNumberRandom = Math.floor(Math.random() * (thinkNumber  + 1) );
})


thinkAttempForm.addEventListener('submit' , function(evt){
  evt.preventDefault();
  
  var thinkAttempInputValue = parseFloat( Math.round(thinkAttempInput.value.trim()) , 10);
  if(thinkAttempInput.value.trim() === ""){
    thinkAttempInput.value = "";
    alert('Baribir tekshirishingizni bilgandim :))');
    return;
  }
  if (isNaN(thinkAttempInputValue)){
    
    thinkAttempInput.value = "";
    alert('Baribir tekshirishingizni bilgandim :))');
    return;
    
  }
  if (thinkAttempInputValue < 0 ){
    
    thinkAttempInput.value = "";
    alert('Baribir tekshirishingizni bilgandim :)) Musbat Son kiriting');
    return;
    
  }
  
  alert(`Qabul qilindi`);
  attempt = thinkAttempInputValue ;
  attemptText.textContent = attempt ;  
  thinkAttempForm.remove();
  
})


checkNumberForm.addEventListener('submit' , function(evt){
  
  evt.preventDefault();
  thinkNumberForm.remove();
  thinkAttempForm.remove();
  
  var checkNumberInputValue = parseFloat(Math.round(checkNumberInput.value.trim()) , 10);
  
  if(checkNumberInputValue === thinkNumberRandom){
    
    result.textContent = `To'g'ri`;
    result.classList.add('bg-success');
    result.classList.remove('bg-danger');
    lose.classList.add('d-none');
    setTimeout( () => openModalFnc()  , 500);
    attemptBox.remove();
    
  }else{
    
    attempt--;
    result.textContent = `Noto'g'ri`;
    result.classList.add('bg-danger');
    result.classList.remove('bg-success');
    attemptText.textContent = attempt;
    
    if(attempt === 0){
      
      win.classList.add('d-none');
      setTimeout( () => openModalFnc()  , 500);
      attemptBox.remove();
      
    }
  }
  
})