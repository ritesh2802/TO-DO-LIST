var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputlength(){
    return input.value.length;
}

function createlistelement(){
    var li = document.createElement("li");
    li.appendChild.createTextNode(input.value);
    ul.appendChild(li);
    input.value="";
}

function addlistafterclick(){
    if(input.value.length>0){
        createlistelement();
    }
}

function addlistafterkeypress(event){
    if(input.value.length>0 && event.keycode===13){
        createlistelement();
    }
}

button.addEventListener("click",addlistafterclick);
input.addEventListener("keypress",addlistafterkeypress);