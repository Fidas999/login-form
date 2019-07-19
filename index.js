/* YOUR CODE GOES HERE! */
function userValidation(){
    var user = document.getElementsByTagName("input")[0].value;
    var submit = document.getElementById("login-button");
    console.log("form_elements: ", submit);
}
userValidation();









function hideForm(){
    var loginForm = document.getElementsByClassName("form");
    var i;
    for (i = 0; i < loginForm.length; i++) {
        loginForm[i].style.display = 'none';
    }
}