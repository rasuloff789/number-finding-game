var bodyEver = document.querySelector('body');
var thinkNumberForm = document.querySelector('.think-number-form');
var thinkNumberInput = thinkNumberForm.querySelector('.think-number-input');
var thinkNumberSubmit = thinkNumberForm.querySelector('.think-number-submit');
var checkNumberForm = document.querySelector('.check-number-form');
var checkNumberInput = checkNumberForm.querySelector('.check-number-input');
var checkNumberBtn = checkNumberForm.querySelector('.check-number-btn');
var result = document.querySelector('.result');
var openModal = document.querySelector('.openModal');
var reloadPageBtn = document.querySelector('.reloadPageBtn');
var reloadPage = document.querySelector('.reloadPage');

var thinkNumber = 100 ; 
var thinkNumberRandom = Math.floor(Math.random() * (thinkNumber  + 1) );

var openModalFnc = function(){
  bodyEver.classList.add('modal-open');
  var shadow = document.createElement("DIV");
  bodyEver.appendChild(shadow);
  shadow.classList.add('modal-backdrop' , 'fade' , 'show');
  openModal.classList.add("show");
  openModal.style.display = "block" ;
}

reloadPageBtn.addEventListener('click' , function(){
  location.reload();
})

reloadPage.addEventListener('click' , function(){
  location.reload();
})

thinkNumberForm.addEventListener('submit' , function(evt){
  evt.preventDefault();
  var thinkNumberInputValue = parseFloat( Math.round(thinkNumberInput.value.trim()) , 10);
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
  alert(`o'yinni boshladik :))`);
  
  thinkNumberRandom = Math.floor(Math.random() * (thinkNumber  + 1) );
})

checkNumberForm.addEventListener('submit' , function(evt){
  evt.preventDefault();
  thinkNumberForm.remove();
  
  var checkNumberInputValue = parseFloat(Math.round(checkNumberInput.value.trim()) , 10);
  
  if(checkNumberInputValue === thinkNumberRandom){
    result.textContent = `To'g'ri`;
    result.classList.add('bg-success');
    result.classList.remove('bg-danger');
    setTimeout( () => openModalFnc()  , 500);
    
  }else{
    result.textContent = `Noto'g'ri`;
    result.classList.add('bg-danger');
    result.classList.remove('bg-success');
    
  }
  
})