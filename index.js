/* YOUR CODE GOES HERE! */
var username;
var password;
clearErrorText();
document.getElementById("login-button").addEventListener("click", function(e){
    username = document.getElementsByTagName("input")[0].value;
    password = document.getElementsByTagName("input")[1].value;
    loginValidation(e);
});

function loginValidation(e) {
    if (username.length > 3 && password.length > 7) {
        document.getElementsByClassName("form")[0].style.display = "none";
        clearErrorText();
        e.preventDefault();
    }
    else {
        document.getElementsByClassName("error")[0].style.display = "initial";
        e.preventDefault();
    }
}

function clearErrorText(){
    document.getElementsByClassName("error")[0].style.display = "none";
}

function regexValid(){

}
/*
    "Found " + obj[0] + " in position " + obj.index + " in the text: " + obj.input;
    console.log("form_elements: ", sub);*/