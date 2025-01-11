function payment(){
    var cardno=document.getElementById('number').value;
    var cname=document.getElementById('name').value;
    if(cardno==""||cname==""){
        alert("Please enter the card number/name");
    }
    else{
        alert("Payment Successful!!!");
    }
} 