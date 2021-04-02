const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var email = document.getElementById('uname');

function validateEmail() {
    console.log(email.value);
    console.log(re.test(String(email.value).toLowerCase()));

    if (email.value == "") {
        alert('Il campo mail non può essere vuoto');
        return;
    }

    if (!re.test(String(email.value).toLowerCase())) {
        alert('La mail inserita non e\' valida');
        email.value = "";
        return;
    } 
    
    newAjaxRequest("email", "select", email.value).onreadystatechange = () => {
        if(this.readyState == 4 && this.status == 200){
            console.log(JSON.parse(this.responseText));
            if(JSON.parse(this.responseText) == "0"){
              //alert("value: " + this.responseText + "\nCaso ok");
              //element.style.border = "2px solid Green";
            }else{
              //element.style.border = "2px solid Red";
              alert("Email non riconosciuta");
              //element.value = "";
            }// Chiude else*/ 
        }
    }

}


function validatePassword() {

}