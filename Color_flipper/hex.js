const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
alert('歡迎來到 COLOR FLIPPER')
function colorFlip(){
    let colorSym = "#";
    for(let i = 0; i <= 5; i++){
        let colorCombine = Math.floor(Math.random()*hex.length);
        colorSym = colorSym + hex[colorCombine]; 
    }
    document.body.style.backgroundColor = colorSym;
    document.getElementsByClassName('color').innerHTML = colorSym;

}