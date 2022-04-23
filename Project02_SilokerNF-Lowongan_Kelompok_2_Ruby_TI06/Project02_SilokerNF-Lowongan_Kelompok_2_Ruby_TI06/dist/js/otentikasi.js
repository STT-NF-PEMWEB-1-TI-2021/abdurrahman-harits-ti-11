function login(e){
    e.preventDefault()
    let username = document.getElementById("user").value
    let password = document.getElementById("pasword").value

    if(username == "admin" && password == "admin"){
        location.href = "admin_lowongan.html"
    }else{
        alert("Login Gagal")
    }
}