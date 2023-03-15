function validateForm() {
    
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    
   if(username.value==""){
    username.classList.add("error");
   }else{
    username.classList.remove("error");
   }
   if(password.value==""){
    password.classList.add("error");
   }else{
    password.classList.remove("error");
   }
   if(username.value!="" && password.value!=""){
    username.classList.remove("error");
    password.classList.remove("error");
    window.location.replace("First_Page.html");
   }
}

