onload = () => {
  document.body.classList.remove("container");
};
function createSnow(){

const snow = document.createElement("div");

snow.innerText = "💕";
snow.style.position = "fixed";
snow.style.top = "-20px";
snow.style.left = Math.random()*window.innerWidth + "px";

snow.style.fontSize = (10 + Math.random()*30) + "px";

snow.style.transition = "transform 5s linear";

document.body.appendChild(snow);

setTimeout(()=>{
snow.style.transform = "translateY(110vh)";
},50);

setTimeout(()=>{
snow.remove();
},5000);

}

setInterval(createSnow,300);