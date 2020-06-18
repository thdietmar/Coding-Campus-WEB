function anzahlSchuhe() {
    var regalboeden = 8;
    var paareJeBoden = 5;
    var paareNebenRegal = 7;
    var schuhe = (paareJeBoden * regalboeden + paareNebenRegal) * 2;

    document.getElementById('result').innerHTML = schuhe;
}



var einkaufsliste = ["Banana", "Orange", "Mango"]
document.getElementById('list').innerHTML = einkaufsliste;

function add() {
    var productInput = document.getElementById('product').value;
    einkaufsliste.push(productInput);
    document.getElementById('list').innerHTML = einkaufsliste;
}



function run() {
    let numberInput = document.getElementById('input').value;

    let op = numberInput.indexOf('+');
    document.getElementById('operator').innerHTML = op;
    let zahl1 = numberInput.substring(0, op);
    document.getElementById('number1').innerHTML = zahl1;
    let zahl2 = numberInput.substring(op + 1, numberInput.length);
    document.getElementById('number2').innerHTML = zahl2;
}

function calc() {
    let result1 = parseInt(document.getElementById('number1').innerHTML) + parseInt(document.getElementById('number2').innerHTML);
    document.getElementById('result1').innerHTML = result1;
}


