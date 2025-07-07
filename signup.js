let signup = () => {
  let UserName = document.querySelector("#username").value.trim();
  let MNumber = document.querySelector("#cnumber").value.trim();
  let Email = document.querySelector("#email").value.trim();
  let Password = document.querySelector("#password").value.trim();
  let Cpassword = document.querySelector("#cpassword").value.trim();

  if(UserName == ""){
     document.querySelector("#username").placeholder = "Please Enter Your Name";
     return false;
  }


  else if (MNumber == "") {
    MNumber = document.querySelector("#cnumber").value = "";
    document.querySelector("#cnumber").placeholder = "Please enter the Number";
    return false;
  }
    else if (isNaN(MNumber)) {
       MNumber = document.querySelector("#cnumber").value = "";
     document.querySelector("#cnumber").placeholder = "Please enter number Only";
    return false;
  }
  else if (MNumber.length != 10) {
     MNumber = document.querySelector("#cnumber").value = "";
     document.querySelector("#cnumber").placeholder = "Please enter 10 digits only";
    return false;
  }
  // Email Validation
  else if(Email == ""){
    document.querySelector("#email").placeholder = "Please enter your email";
    return false;
  }
  else if(!(Email.includes("@") && Email.includes(".com"))){
    document.querySelector("#email").value = "";
    document.querySelector("#email").placeholder = "Please enter valid email"
    return false;
  }

  //Password Validation

  else if(Password == ""){
    document.querySelector("#password").placeholder = "Please Enter your password";
    return false;
  }
  else if(!(Password.match(/[0-9]/)
    && Password.match(/[a-z]/)
    && Password.match(/[A-Z]/)
    && Password.match(/[!@#$%^&*()]/))){
       document.querySelector("#password").value="";
        document.querySelector("#password").placeholder = "Please Enter Strong password";
        return false
  }
  else if(Password != Cpassword){
    document.querySelector("#cpassword").value = "";
    document.querySelector("#cpassword").placeholder = "Please Enter the same Password";
  }

  //Using local storage

  localStorage.setItem("name", UserName);
  localStorage.setItem("email", Email);
  localStorage.setItem("number", MNumber);
  localStorage.setItem("Password", Password);

  location.href = "login.html";
  return false;
};

let login = () => {
   let storeName = document.querySelector("#username").value.trim();
   let storePassword = document.querySelector("#password").value.trim(); // Fix: was #cnumber

   let name = localStorage.getItem("name");
   let pass = localStorage.getItem("Password");

   if (storeName === name && storePassword === pass) {
      location.href = "home.html";
   } else {
      alert("Wrong Username or Password");
   }

   return false; // Prevent form from submitting
}


