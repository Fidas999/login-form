/* YOUR CODE GOES HERE! */
function userValidation(){
    let username ="";
    let password ="";
    
    document.getElementById("login-button").addEventListener("click", function(e){
        username = document.getElementsByTagName("input")[0].value;
        password = document.getElementsByTagName("input")[1].value;
        alert("Username: ", username);
         if(username.length > 3 && password.length > 7){
             document.getElementsByClassName("form").style.display = "none"
         }
         else{
             let err = document.getElementsByClassName("error")[0];
             err.value = "Tente Novamente";
             e.preventDefault();
         }
    });
/*
for(var i = 0; i < inputs.length; i++) {
    if(inputs[i].type.toLowerCase() == 'text') {
        alert(inputs[i].value);
    }

    "Found " + obj[0] + " in position " + obj.index + " in the text: " + obj.input;
    console.log("form_elements: ", sub);*/
}
userValidation();

/*function hideForm(){
    var loginForm = document.getElementsByClassName("form");
    var i;
    for (i = 0; i < loginForm.length; i++) {
        loginForm[i].style.display = 'none';
    }
}*/