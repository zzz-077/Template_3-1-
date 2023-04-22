const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
        else{
            entry.target.classList.remove("show");
        }
      }); 
    });
    const hidenElements=document.querySelectorAll(".hidden");
    hidenElements.forEach((el)=>observer.observe(el));

const Open=document.getElementById("open"); 
const Open1=document.getElementById("open1"); 
const Open2=document.getElementById("open2"); 
const Modal_container=document.getElementById("modal_container");
const Close=document.getElementById("close");
const Togglebutton=document.getElementById("togglebutton");
const Body=document.querySelector("body");
const Revo_box=document.querySelector(".revo-box");
const Price_box=document.querySelector(".prc-boxes");
const Footer=document.querySelector(".footer");
const Modal=document.querySelector(".modal");
Open.addEventListener("click",function(){
    Modal_container.classList.add("show"); 
});
Open1.addEventListener("click",function(){
    Modal_container.classList.add("show");
});
Open2.addEventListener("click",function(){
    Modal_container.classList.add("show");
}); 
Close.addEventListener("click",function(){
    Modal_container.classList.remove("show");
});

Togglebutton.addEventListener("click",function(){
    this.classList.toggle("fa-moon-o");
    if(this.classList.toggle("fa-sun-o")){
Body.style.background="black";
Body.style.color="white";
Body.style.transition="0.7s";
Togglebutton.style.transition="0.3s";
Revo_box.style.background="none";
Footer.style.background="none";
Footer.style.transition="0.3s";
Revo_box.style.transition="1s";
Price_box.style.color="black";
Modal.style.color="black";
}
    else{
Body.style.background="white";
Body.style.color="black";
Body.style.transition="0.7s";
Togglebutton.style.transition="0.3s";
Revo_box.style.background="whitesmoke";
Footer.style.background="whitesmoke";
Footer.style.transition="0.3s";
Price_box.style.color="black";

}
});
