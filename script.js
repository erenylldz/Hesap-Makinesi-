function display(value){
  document.getElementById('display').value += value;
}
function cleardisplay() {
  document.getElementById('display').value = '';
}

function backspace() {
  let display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}
function calculate() {
  const expression = document.getElementById('display').value;
  
  try {
      const result = eval(expression);
      document.getElementById('display').value = result;
  } catch (error) {
      document.getElementById('display').value = 'Hata';
  }
}
function x2(){
  const display=document.getElementById('display')
  display.value=Math.pow(display.value,2)
}
function sin(){
  const display=document.getElementById('display')
  display.value=Math.sin(display.value*(Math.PI/180))
}
function tan(){
  const display=document.getElementById('display')
  display.value=Math.tan(display.value*(Math.PI/180))
}
function cot(){
  const display=document.getElementById('display')
  display.value=1/Math.tan(display.value*(Math.PI/180))
}
function cos(){
  const display=document.getElementById('display')
  display.value=Math.cos(display.value*(Math.PI/180))
}
function log(){
  const display=document.getElementById('display')
  display.value=Math.log10(display.value)
}
function ln(){
  const display=document.getElementById('display')
  display.value=Math.log(display.value)
}
function sqrt(){
  const display=document.getElementById('display')
  display.value=Math.sqrt(display.value)
}
function factorial() {
  const display = document.getElementById('display');
  const calculator = document.getElementById('calculator');
  var n = display.value;
  n = parseInt(n);

  let answer = 1;
  if (n == 0 || n == 1) {
    answer = 1;
  } else {
    for (var i = n; i >= 1; i--) {
      answer = answer * i;
    }
  }

  display.value = answer;
}
function onepartition() {
  const display=document.getElementById('display')
  display.value=1/display.value;
}
function reverse(){
  const display=document.getElementById('display')
  display.value=-display.value;
}
function exp() {
  const display=document.getElementById('display')
  display.value=Math.exp(display.value) 
}