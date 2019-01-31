
var modal = document.getElementById('filterScherm');
var btn = document.getElementById("filters");
var span = document.getElementById("kruisje");
btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





function mijnAnimatie() {
     document.getElementById("iconD").src = "download2.png";
     document.getElementById("iconD").style.width = "3em";
    
    
    setTimeout('clicker();', 1000); 
      
}
    
    function clicker(){
    document.getElementById("iconD").style.width = "2.5em";
    setTimeout('clicker1();', 1000); 
    
        }
    
 function clicker1(){
    document.getElementById("iconD").style.width = "3em";
    setTimeout('clicker2();', 1000); 
    
        }
    
 function clicker2(){
    document.getElementById("iconD").style.width = "2.5em";
    setTimeout('clicker();', 1000); 
    
        }
        
    
 




var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("zombie").style.opacity = "0.9";
  } else {
    document.getElementById("zombie").style.opacity = "0";
  }
  prevScrollpos = currentScrollPos;
}



