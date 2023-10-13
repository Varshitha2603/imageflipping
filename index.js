"use strict"

let div1 = document.createElement("div");
div1.setAttribute("id","div1");

let div2 = document.createElement("div");
div2.setAttribute("id","div2");

let boxinimage = document.createElement("img");
boxinimage.setAttribute("class","par");

let btn1 = document.createElement("button");
btn1.setAttribute("id","btn1");
btn1.innerText = "Previous image";

let btn2 = document.createElement("button");
btn2.setAttribute("id","btn2");
btn2.innerText = "Next image";

div1.append(boxinimage);
div2.append(btn1, btn2);
document.body.append(div1,div2);

let images = ['moon1.jpg','moon2.jpg','moon3.jpg','moon4.jpg','moon5.jpg','moon6.jpg','moon7.jpg','moon8.jpg','moon9.jpg','moon10.jpg',
               'moon11.jpg','moon12.jpg','moon13.jpg','moon14.jpg','moon15.jpg','moon16.jpg','moon17.jpg','moon18.jpg','moon19.jpg',
               'moon20.jpg','moon21.jpg'];
let step = 0;
btn2.addEventListener('click',imageFun)
let images2 = images.length;
console.log(images2);
boxinimage.src = images[0];
function imageFun()
{
    step ++;
    boxinimage.src = images[step];
    if(step == images2-1)
    {
        step = 0;
    }
}
btn1.addEventListener('click',preima)
function preima()
{
  if(step==0){
    step = images.length-1
  }else{
    step --;
    boxinimage.src = images[step];
  }   
}
