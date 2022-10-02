let number = 0;
function add() {
    number++;
    document.getElementById("number").innerHTML = number;
}
function sub() {
    number--;
    document.getElementById("number").innerHTML = number;
}
function reset() {
    number = 0;
    document.getElementById("number").innerHTML = number;
}