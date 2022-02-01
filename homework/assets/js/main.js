let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
let result = document.getElementById('result');
let sum = document.querySelector('#sum');
const sub = document.querySelector('#sub');
const multiply = document.querySelector('#multiply');
const division = document.querySelector('#division');



sum.addEventListener('click', function(e){
     result.value = parseFloat(Number(number1.value) + Number(number2.value)) ;
    return result.value;
    e.preventDefault
})

sub.addEventListener('click', function(e){
    result.value = parseFloat(Number(number1.value) - Number(number2.value)) ;
   return result.value;
   e.preventDefault
})

multiply.addEventListener('click', function(e){
    result.value = parseFloat(Number(number1.value) * Number(number2.value)) ;
   return result.value;
   e.preventDefault
})

division.addEventListener('click', function(e){
    result.value = parseFloat(Number(number1.value) / Number(number2.value)) ;
   return result.value;
   e.preventDefault
})

