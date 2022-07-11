//api calling using call back function

var check = (callback)=>{
    if(document.getElementById("username").value == "admin",
    document.getElementById("password").value == 12345){
        callback();
        document.getElementById("error").style.color = "green";
        document.getElementById("error").innerHTML = "Sucess";
        return true;
    }else{
        document.getElementById("error").style.color = "red";
        document.getElementById("error").innerHTML = "Invalid Username or Password";
        return false;
    }
}

function redirect(){
    document.getElementById("form").action="main.html";
}

