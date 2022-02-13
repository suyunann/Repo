let counter = Number(document.getElementById("value").innerHTML);
function increase(){
    document.getElementById("value").innerHTML = counter + 1;
    counter = Number(document.getElementById("value").innerHTML);
    if(counter > 0){
        document.getElementById("value").style.color = 'green';
    }else if(counter === 0){
        document.getElementById("value").style.color = 'black';
    }
}
function decrease(){
    document.getElementById("value").innerHTML = counter - 1;
    counter = Number(document.getElementById("value").innerHTML);
    if(counter < 0){
        document.getElementById("value").style.color = 'red';
    }else if(counter === 0){
        document.getElementById("value").style.color = 'black';
    }
}
function reset(){
    document.getElementById("value").innerHTML = 0;
    counter = 0;
    document.getElementById("value").style.color = 'black';
}
