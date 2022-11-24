function display(value){
    document.getElementById('display').value +=value;
}
function clearScreen() {
    document.getElementById("display").value = "";
}
function calculate() {
    var p = document.getElementById("display").value;
    var q = eval(p);
    document.getElementById("display").value = q;
}
