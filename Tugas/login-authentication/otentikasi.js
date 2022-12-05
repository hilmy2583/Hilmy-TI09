function submit(){
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  if(user == "Hilmy"){
    if(pass == "douluo"){
      alert("Login Berhasil")
      location.href = "succes-login.html";
    }else{
      alert("Gagal Login");
    }
  }else{
    alert("Gagal Login");
  }
}