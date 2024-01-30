function validate(){
    var username=document.getElementById('username').value
    var password=document.getElementById('password').value

    if (username=="ayo" && password=="kareem"){
        alert('login successful')
    }
    
    else{
        alert("invalid credentials")
    }
}