var display = document.getElementById('display');

function pushButton(obj) {
    var pushed = obj.innerHTML;    
    
    if (pushed == '=') {
        display.innerHTML = eval(display.innerHTML);

    } else if (pushed == 'AC') {
        display.innerHTML = '0';

    } else {
        if (display.innerHTML == '0') {
            display.innerHTML = pushed;

        } else {
            display.innerHTML += pushed;
        }
    }
}