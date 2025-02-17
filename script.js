function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteChar() {
    const display = document.getElementById('display');
    if(display.value=="0" && display.value.length==0){
        let history=document.querySelector(".history-display");
        history.innerHTML=history.innerHTML.substring(0,history.innerHTML.length-1);
        return;
    }
    display.value = display.value.substring(0,display.value.length-1);
    let history=document.querySelector(".history-display");
    history.innerHTML=history.innerHTML.substring(0,history.innerHTML.length-1);
}

function appendChar(char) {
    let history=document.querySelector('.history-display');
    history.innerHTML+=char;
    if(char==="="){
        return;
    }
    else{
        let display = document.getElementById('display');
        display.value += char;
    }  
}
function calculate() {
    let display = document.getElementById("display");
    try {
        let data=display.value;
        for(let i=0;i<data.length;i++){
            if(data[i]=="/"){
                let result = eval(display.value);
                display.value = Number(result).toFixed(1);
                break;
            }
        }
        let result = eval(display.value);
        display.value = Number(result);
    } catch (e) {
        display.value = 'Error';
    }
    let history=document.querySelector('.history-display');
    history.innerHTML+=display.value;
    history.innerHTML+="<br>";
}
function deleteHistory(){
    let history=document.querySelector('.history-display');
    history.innerHTML='';
}
function deleteLine(){
    let history=document.querySelector('.history-display');
    let display = document.getElementById('display');
    if(display.value.length==0){
        return;
    }
    history.innerHTML+="<br>";
}