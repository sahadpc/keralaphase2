let email=document.getElementById("comm");
let pass=document.getElementById("comm1");

let error=document.getElementById("err");
let error1=document.getElementById("err1");

console.log("this gonna be blast");
function valid(){
    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;

    if(regexp.test(email.value)){
        error.innerText="THIS IS VALID";
        error.style.color="green";
        if(pass.value>5){
            return true
        
        }
        else{
            error1.innerText="password must contain min contain 5 letter "
            error1.style.color="red"
            return false
        }
    }
    else{
        error.innerText="this in not valid";
        error.style.color="red";
        return false;
    }

    
}