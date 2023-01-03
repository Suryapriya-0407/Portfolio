$('.owl-carousel').owlCarousel({
    loop:true,
   
    // nav:true,
    nav:false,
    dots:false,
    autoplay:true,
    animateOut: 'fadeOut',
  
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


function openFunction(){
    document.getElementById("menu").style.width="300px";
    document.getElementById("mainbox").style.marginLeft="300px";
    document.getElementById("mainbox").style.display = "none";
   }
  function closeFunction(){
   document.getElementById("menu").style.width="0px";
   document.getElementById("mainbox").style.marginLeft="0px";
  //  document.getElementById("mainbox").innerHTML="&#9776; Open";
  document.getElementById("mainbox").style.display = "block";
  }
  

  