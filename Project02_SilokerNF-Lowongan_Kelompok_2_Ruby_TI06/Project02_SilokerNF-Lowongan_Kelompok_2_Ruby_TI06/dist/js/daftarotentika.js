function login(e){
    e.preventDefault()
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    if(username == "admin" && password == "admin"){
        location.href = "login_user.html"
    }else{
        alert("Pendaftaran Gagal")
    }
}