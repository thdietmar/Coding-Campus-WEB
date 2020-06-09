function register() {
    const user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,  
        birth: document.getElementById("birth").value,
        gender: document.querySelector('input[name="gender"]:checked').value

    }

    localStorage.setItem('user', JSON.stringify(user));
    const user = JSON.parse(localStorage.getItem("user"));
    user.name

    windows.location.href ="fertig.html";        
    
} 

function myFunction() {
    var greeting = document.getElementById("userName")
    const user = JSON.parse(localStorage.getItem("user"))
    greeting.innerHTML += user.name
}

   
        
    
/*

if (name == "" || email == "" || pw == "" || birth == "") {
    alert("Bitte füllen Sia alle Felder aus!");
}

var gender;
for (var i = 0; i < genderRadios.length; i++) {
    if (genderRadios[i].checked) {
        gender = genderRadios[i].value
    }
}
*/
