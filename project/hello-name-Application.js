const btnelement = document.getElementById('btn');
const spanelement = document.getElementById('updateme');

btnelement.onclick = function(){
    const yourname = prompt("write your name");
    spanelement.textContent= yourname;
}