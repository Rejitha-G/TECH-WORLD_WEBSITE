var p=document.getElementById("password").value;
var e=document.getElementById("email").value;
function register(){
    const passregrex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if(!passregrex.test(p)){
        alert("Your password should have atleast 8 character long.atleast one Uppercase,Lowercase and number");
        return false;
    }
    
    const emailregrex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailregrex.test(e)){
        alert("Please Enter valid Email ID");
        return false;
    }
    
     alert("Registered Successfully!!");
}