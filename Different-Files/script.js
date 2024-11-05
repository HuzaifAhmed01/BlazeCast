


// const scroll = new LocomotiveScroll({
//     el: document.getElementById("main"),
//     smooth: true,
//     lerp : 0.06
    
// });

function smoothtrigger(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
smoothtrigger();





var cursor = document.querySelector(".cursor");
var home = document.querySelector("#home");
var heading= document.querySelector("#slow")
var logo = document.querySelector("#nav .logo span")
var right = document.querySelector(".right")
var a = document.querySelector(".right a")
var page2 = document.getElementById("page2");
var cursor2 = document.getElementsByClassName("cursor2");
var footflow = document.querySelector("#footflow")
var menu = document.querySelector(".play")

function mousefollowerEffect(){

    


    home.addEventListener("mousemove",function(delta){
    gsap.to(cursor,{
        x:delta.x,
        y:delta.y,
        stagger:30,
        duration:.6,
        ease:Power4,
        //  transition:"0.3s";
    })

    
    home.addEventListener("mouseenter",()=>{
        gsap.to(".cursor",{
            scale:1,
            
            opacity:1,
            duration:.6,
            ease:Power4,
          
          
        })
 
        
        })
        home.addEventListener("mouseleave",()=>{ 

            gsap.to(".cursor",{
              scale:0,
              duration:.6,
                opacity:0,
                            ease:Power4,
        
                // opacity:0,

        
              })
              //  This is for page2 mousefollower
    
    
            })
            
            
            
          })  

          // var menuicon = document.querySelector(".right h3");

          // menuicon.addEventListener("mouseenter",function(){
          // gsap.to(".cursor",{
          //   scale:0,
          // })
          // })

          // menuicon.addEventListener("mouseleave",function(){
          // gsap.to(".cursor",{
          //   scale:1,
          // })
          // })


      


}
mousefollowerEffect();










function introflow(){
    gsap.from("#flow",{
    stagger: .8,
    y:10,duration:1,
    ease: Power4,
    opacity: 0
})
gsap.from("#slow",{
    stagger: .20,
    y:80,  duration:1,
    ease: Power4,
    opacity: 0
})
gsap.from("#tlow",{
    stagger: .25,
    x:10,  duration:1,
    ease: Power4,
    opacity: 0
})
gsap.to(".footer span",{
  stagger: .8,
  y:10,duration:1,
  ease: Power4,
  opacity: 0
})

}
introflow();


function menudrop(){

  var i = document.querySelector(".ri-close-line");
  // var mein = document.getElementById("menu");
  var menuicon = document.querySelector(".right h3");
  var menu = document.querySelector(".ri-menu-4-fill");
  
  
  menuicon.addEventListener("click",function(){
      gsap.to(".menu",{
          marginTop:"0vh",
          // display:"block",
          ease:"power1",
          
  
      })
    
      gsap.to(".ri-close-line",{
          display:"block",
          delay: 1.5,
          opacity:4
      
      })
  })
  i.addEventListener("click",function(){
  gsap.to(".menu",{
  marginTop:"-100vh",
  })
  
  })
  menu.addEventListener("click",function(){
      gsap.to(".menu",{
          marginTop:"0vh",
          // display:"block",
          ease:"power4",
          
  
      })
    
      gsap.to(".ri-close-line",{
          display:"block",
          delay: 1.5,
          opacity:4
      
      })
  })
  i.addEventListener("click",function(){
  gsap.to(".menu",{
  marginTop:"-100vh",
  })
  
  })


}
menudrop();

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});












