var numberfield = document.getElementById('numberfield');

var stackArr = new Array(10);
var counter = 0;

function pushButton() {
    if (counter < 10) {
        stackArr[counter] = numberfield.value;
        counter++;
        printStack();
    }
    else {
        alert("Stack full");
    }
}

function printStack() {
    var stackHtmlNode = document.getElementById("stack");
    stackHtmlNode.innerHTML = "";

    for (var i = 0; i < counter; i++) {
        var childNode = document.createElement("div");
        childNode.className = "field";
        childNode.innerHTML = stackArr[i];

        if (i % 2 == 0) {
            childNode.className = "field";
        }
        else {
            childNode.className = "field field-green";
        }
        stackHtmlNode.insertBefore(childNode, stackHtmlNode.firstChild);
    }
}

function popButton() {
    if (counter > 0) {
        stackArr[counter] = numberfield.value;
        counter--;
        printStack();
    }
    else {
        alert("Stack empty");
    }



}



