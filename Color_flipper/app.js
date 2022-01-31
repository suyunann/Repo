const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// alert('歡迎來到 COLOR FLIPPER')
 function colorFlip(){
  let colordiv=Math.floor(Math.random()*colors.length);
  document.body.style.background=colors[colordiv];
  document.getElementById('color').innerHTML=colors[colordiv];
} 
