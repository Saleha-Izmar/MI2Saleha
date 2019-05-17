//'use strict';

// wait for the window to load
window.addEventListener('load', function() {
    let id1 = setInterval(obs, 3);
    let x = 200;
    let x2 =200;
    document.onkeydown =function(e){
        let i = 400;
        let elem = document.getElementById("bol");  
        let id = setInterval(frame, 3);
       /* let id1 = setInterval(obs, 3);
        let x = 200;
        let x2 =200;*/
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
       function obs() {
            let obst = document.getElementById("obstacle1");
            let obst2 = document.getElementById("obstacle2");
            if (x > 1380) {
                x =200;
                obs.style.right = x +"px";
                clearInterval(id1);
              } else {
                x++; 
                obst.style.right = x + "px";
                if(x >300){
                if (x2 < 1380) {
                    x2++; 
                    obst2.style.right = x2 + "px"; 
                  } else {
                    x2 =200;
                    obs2.style.right = x2 +"px";
                    clearInterval(id1);
                  } }
                
              }
          
            
        }
          
    };
  
      
			
});

