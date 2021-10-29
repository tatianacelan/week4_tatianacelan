


function changeLogInPage() {

    let inputs = document.getElementsByClassName("input")

    let loginButton = document.querySelector(" input[type='submit']")

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") {    
            loginButton.disabled = true;  
            return;
        }
        loginButton.disabled = false;
    }
}



function save() {   
   let inputs = document.getElementsByClassName("input")
    let Nome = inputs[0].value 
    localStorage.setItem('Nome', Nome)
}

function hideForm() {

    let form = document.querySelector(".button");
    form.style.display = "none";
}

function checkLoggedUser() {
    let storedNome = localStorage.getItem('Nome') 
   
}

function logout() {
    localStorage.clear()
    let form = document.querySelector("form")
    form.style.display = "";
    let logoutButton = document.getElementById("logoutButton")
    logoutButton.style.display = "none"
}


let subscribed = false;

function welcome() {

    if (subscribed) {
        let Nome= localStorage.getItem("Nome");
        alert("Benvenuto " + Nome);
    }
    else {
        alert("Benvenuto!")
    }
}