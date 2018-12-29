function loginValidation(){

    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;

    if(email==""|email!="user@gmail.com"){
        document.getElementById("useremail").innerHTML="invalid email id";
        return false;
    }

    if(password==""|password!="123456"){
        document.getElementById("userpassword").innerHTML="invalid password";
        return false;
    }
}