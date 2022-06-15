// to open the sign in modal on Home Nav
document.getElementById("sign-in-nav").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";
})

// to close sign in modal using the X
document.querySelector(".close-button").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
})


// ^^ same thing but with Sign up button 
document.querySelector(".sign-up").addEventListener("click", function(){
    document.querySelector(".popup-2").style.display = "flex";
})


document.querySelector(".close-button-2").addEventListener("click", function(){
    document.querySelector(".popup-2").style.display = "none";
})





//If you click on sign in button in the Modal it will close .popup-2 then open .popup
document.getElementById("already-have-sign-in").addEventListener("click", function(){
    document.querySelector(".popup-2").style.display = "none";
 })
 
 document.getElementById("already-have-sign-in").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";
 })



//If you click on Create one button in the Modal it will close .popup then open .popup-2
document.getElementById("dont-have-create-one").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
 })

document.getElementById("dont-have-create-one").addEventListener("click", function(){
    document.querySelector(".popup-2").style.display = "flex";
 })





 /* I put a ID(sign-in-nav) and a class(sign-in) in the HTML, you can use either
   one. To use the class substitute the getElementById to querySelector... thats it. */