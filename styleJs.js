burger =document.querySelector('.burger')
navbar =document.querySelector('.navbar')
navlist =document.querySelector('.navlist')
rightnav =document.querySelector('.rightnav')

burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav-resp');
    navlist.classList.toggle('v-class-resp');
    rightnav.classList.toggle('v-class-resp'); 
})

const text= document.querySelector('.sec-text');
const textload =()=>{
  setTimeout(() =>{
text.textContent="web-Designing..";
  },0);
  setTimeout(() =>{
text.textContent="web-Developement..";
  },4000);
}
textload();
setInterval(textload,8000);

//form-validation
const form=()=>{

let Name=document.myform.Name.value;
let email=document.myform.email.value;
let feedback=document.myform.Message.value;

if(Name==null || Name=="")
{
  alert("please enter your name");
  return false;
}
if(email==null || email=="")
{
  alert("please enter your email");
  return false;
}
if(feedback==null || feedback=="")
{
  alert("please give feedback");
  return false;
}

}


const toggle = document.querySelector('.toggle');
const item = document.querySelectorAll('.name,.homemain,.navlist li a,.container_para,.homemain,.contact .contactme,body,.rightnav a i,.about-text p,.text.sec-text,.box p,.box h3,.footer .box-container .box1 h3,.moon,.sun,.container_details h1,.container_details,.input,.input::placeholder,.box1,.footer,.itag2 a,.itag a,.itag,.itag2,.line');



toggle.addEventListener("click",()=>{
  item.forEach(item=>{
    item.classList.toggle('active');
  })

})

const cursor = document.querySelectorAll(".cursor");
const links = document.querySelectorAll(".link");

window.addEventListener("mousemove", (e) => {
  
  let x = e.pageX;
  let y = e.pageY;
  
  cursor.forEach(el => {
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    
    links.forEach(link => {
      link.addEventListener("mouseenter", () => {
        el.classList.add("hover");
      })
      link.addEventListener("mouseleave", () => {
        el.classList.remove("hover");
      })
    })
    
  })
  
})

let mybutton = document.getElementById("backtotopbutton");
function scrollFunction() {
    document.body.scrollTop > 400 || document.documentElement.scrollTop > 400 ? mybutton.style.display = "block" : mybutton.style.display = "none"
}
function scrolltoTopfunction() {
    document.body.scrollTop = 0,
    document.documentElement.scrollTop = 0
}
window.onscroll = function() {
    scrollFunction()
}


function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from(".container_details", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.2,
    })

}

firstPageAnim()