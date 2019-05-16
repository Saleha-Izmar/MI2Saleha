//'use strict';

// wait for the window to load
window.addEventListener('load', function() {

    document.onkeydown =function(e){
        let i = 400;
        let elem = document.getElementById("bol");   
        let id = setInterval(frame, 3);
        
        if(i>120){
            if (e.keyCode =='39'){
                i= i-10;
                elem.style.top = i +"px";
            }
        }
	 
        function frame() {
          if (i > 600) {
            clearInterval(id);
          } else {
            i++; 
            elem.style.top = i + "px"; 
          }
        }
          
    };
  
      
			
});

