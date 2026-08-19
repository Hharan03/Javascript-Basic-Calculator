let input = document.querySelector("input");
console.log(input.value);

function addValue(val){
    input.value = input.value + val
}

function clearbutton(){
    input.value = "";
};

function deleteButton(){
    input.value = input.value.slice(0,input.value.length-1);
    console.log(input.value)
};

function evalValue(){
    input.value = eval(input.value);
    console.log(input.value);
    
}



