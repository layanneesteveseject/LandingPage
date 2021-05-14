function hidefunction(){
    let x = document.getElementById("idtext"); 
     if (x.style.display === "block") 
     {
        x.style.display = "none";
     } else 
     {
         x.style.display = "block";
     }
 }
 
 //Validate Function
 function validaForm(){
 let z = document.getElementById("validateMethods"); 
 let x = document.getElementById("validateIdText");
       
       if(document.getElementById("Annually").checked==false && document.getElementById("Once").checked == false){
           z.style.display = "block";
           return false;
       }
       if(document.getElementById("Once").checked || document.getElementById("Annually").checked){
         z.style.display = "none";
     }
       if(form.idUpgrad.value == "" && form.upgrading.checked ){
         x.style.display = "block";
         return false;
       }
 
 
       
 }

 // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn1 = document.getElementById("myBtn1");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
btn1.onclick = function() {
    modal.style.display = "block";
  }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}