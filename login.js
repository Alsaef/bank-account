// step 1
document.getElementById("btn-login").addEventListener("click",function() {
    console.log("system update")
    const email=document.getElementById("user-email")
   const emailValue=email.value;
   const password=document.getElementById("securaty-password");
   const passwordValue=password.value
//DONOT Chack on VERYFY EMAIL AND PASSWORD
if (emailValue=="saef.ratul@gmail.com"&&passwordValue=="ratul") {
    location.href = "bank.html";
    console.log("curract")
}
else{
  const error=document.getElementById("error");
  error.innerText="Try Again..!"
  error.style.color="red"
  password.value=""
}
})