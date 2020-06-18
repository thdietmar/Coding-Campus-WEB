
function average() {
    var myNumbers = document.getElementById('numbers').value.split(',');
    let sum = 0;
    for (let i = 0; i < myNumbers.length; i++) {
        sum += parseInt(myNumbers[i]);
    }

    document.getElementById('result2').innerHTML = sum / myNumbers.length;
}

