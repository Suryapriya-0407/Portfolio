(function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }

})();

   
AOS.init({
    
});


$(document).ready(function() {
  $('.gallarys').magnificPopup({type:'image',


  delegate: 'a',

});
});

$('.counter').counterUp({              //without this only 100% will only be displayed no other percent will be displayed
    delay: 10,
    time: 1500,
});


var cursor = document.querySelector(".cursor");             //the round cursor moving when mouse is moved
    var cursor2 = document.querySelector(".cursor2");
    document.addEventListener("mousemove",function(e){
      cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
    });

    function openFunction(){
        document.getElementById("menu").style.width="300px";
        document.getElementById("mainbox").style.marginLeft="300px";
       
       }
      function closeFunction(){
       document.getElementById("menu").style.width="0px";
       document.getElementById("mainbox").style.marginLeft="0px";
      
      }


      var myVar;

      function myFunction() {               //function is used to open the main page after count down till 100
        myVar = setTimeout(showPage, 3000);
      }
      
      function showPage() {                   //function is used to open the main page after count down till 100
        document.getElementById("loader_bg").style.display = "none";
        
      }


      

      // function openFunction(){
      //   document.getElementById("menu").style.width="300px";
      //   document.getElementById("mainbox").style.marginLeft="0px";
       
      //  }
      // function closeFunction(){
      //  document.getElementById("menu").style.width="0px";
      //  document.getElementById("mainbox").style.marginLeft="0px";
       
      // }