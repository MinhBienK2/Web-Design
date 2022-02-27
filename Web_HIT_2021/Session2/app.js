let getBtn = document.getElementById('btn-js');
let getContainerSign = document.getElementById('cont-sign');
let getP1 = document.getElementById('opa1');
let getP2 = document.getElementById('opa2');
let getClose = document.getElementById('close');
let getContainer = document.querySelector('.container');

getBtn.onclick = function(e) {
    getContainerSign.setAttribute("class", "render-box container-sign");
    getP1.setAttribute("class", "opacity-p");
    getP2.setAttribute("class", "opacity-p deletes");
    getContainer.setAttribute("class", "container hidden-box");

}
getClose.onclick = function (e){
    getContainer.setAttribute("class", "container");
    getContainerSign.setAttribute("class", "container-sign");
    
}
