const grocerys = document.getElementsByClassName("grocery");
const AM = document.getElementById("AM");
const allitems = document.getElementById("allitems");
const userInput = document.getElementById("userInput");
const show = document.getElementById("show");

AM.addEventListener("click", function(){
    allitems.innerHTML = "";
})


userInput.addEventListener("keydown", function(event){
    if(event.key == "Enter")
    addItem();
})


function addItem(){
    var h2 =document.createElement("h2");
    h2.innerHTML = "*" + userInput.value;
    

    h2.addEventListener("click", function (){
        // h2.style.textDecoration = "line-through"
        h2.style.display = "none";
        
    }) 
    allitems.insertAdjacentElement("beforeend", h2);
    userInput.value = " "

}




 