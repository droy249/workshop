function add() {
    var fno = document.getElementById("fno").value
    var sno = document.getElementById("sno").value
    document.getElementById("result").innerHTML = "Addition Result: " + (Number(fno) + Number(sno))
}
function subtract() {
    var fno=document.getElementById("fno").value
    var sno=document.getElementById("sno").value
    document.getElementById("result").innerHTML = "Subtraction Result: " + (Number(fno) - Number(sno))
}
function multiply() {
    var fno=document.getElementById("fno").value
    var sno=document.getElementById("sno").value
    document.getElementById("result").innerHTML = "Muliplication Result: " + Number(fno) * Number(sno)
}
function divide() {
    var sno=document.getElementById("sno").value
    if(Number(sno) == 0){
        document.getElementById("result").innerHTML = "ERROR: Division by 0 not possible" 
    }
    else{
        var fno=document.getElementById("fno").value
        document.getElementById("result").innerHTML = "Division Result: " + Number(fno) / Number(sno)
    }
}