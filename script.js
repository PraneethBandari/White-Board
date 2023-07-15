document.addEventListener('DOMContentLoaded',function(){
const canvas=document.getElementById('myCanvas');
const ctx=canvas.getContext('2d');
let isDrawing=false;
let lastX=0;
let lastY=0;
let size=10;
let color='black';
let isDrawingRectangle = false;
let isDrawingCircle = false;
// earaser
let earaser=document.getElementById('eraser')
let isEarasing=false;
earaser.addEventListener('click',function(){
    if(isEarasing){
        isEarasing=false;
    }
    else{
        isEarasing=true;
    }
})
//clearall
const clear=document.getElementById('clearall')
clear.addEventListener('click', (e)=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})
//rectangle
const rectangleButton = document.getElementById('rectangle');
  rectangleButton.addEventListener('click', function(e) {
    isDrawingRectangle = !isDrawingRectangle;
    rectangleButton.classList.toggle('active');
  });
  // Circle button
  const circleButton = document.getElementById('circle');
  circleButton.addEventListener('click', function(e) {
    isDrawingCircle = !isDrawingCircle;
    circleButton.classList.toggle('active');
  });
//drawing
function startDrawing(e){
    isDrawing=true;
    [lastX, lastY]=[e.offsetX, e.offsetY];
}
function draw(e){
    if(!isDrawing) return;

    if (isDrawingRectangle) {
        ctx.strokeStyle = isEarasing ? 'white' : color;
        ctx.fillStyle = 'transparent';
        ctx.lineWidth = size;
        var width=parseInt(document.getElementById('rectWidth').value);
        var height=parseInt(document.getElementById('rectHeight').value);
        ctx.beginPath();
      ctx.rect(lastX, lastY, width, height);
      ctx.stroke();
      } 
      else if (isDrawingCircle) {
        // Circle drawing
        ctx.strokeStyle = isEarasing ? 'white' : color;
        var radius =parseInt(document.getElementById('radius').value) ;
        ctx.lineWidth = size;
        ctx.fillStyle = 'transparent';
        ctx.beginPath();
        ctx.arc(lastX, lastY, radius, 0, 2 * Math.PI);
        ctx.stroke();
      }
      else{
    ctx.strokeStyle= isEarasing? 'white':color;
    ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.lineWidth = size;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}
}
function stopDrawing(e){
    isDrawing=false;
}
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);
//color
const colorchange=document.getElementById('color');
colorchange.addEventListener('input',(e)=>{
    color=e.target.value;
})

//size
const increseBtn=document.getElementById('increase');
const increseby10Btn=document.getElementById('increseby10');
const increseby50Btn=document.getElementById('increseby50');
const increseby5Btn=document.getElementById('increseby5');
const decreseBtn=document.getElementById('decrease');
const decreseby10Btn=document.getElementById('decreaseby10');
const decreseby50Btn=document.getElementById('decreaseby50');
const decreseby5Btn=document.getElementById('decreaseby5');
const sizeChange=document.getElementById('size');
increseBtn.addEventListener('click',(e)=>{
    if(size<500){
        size+=1;
    }
    else{
        size=500;
    }
    updateSizeOnScreen()
})
increseby5Btn.addEventListener('click',(e)=>{
    if(size<495){
        size+=5;
    }
    else{
        size=500;
    }
    updateSizeOnScreen()
})
increseby10Btn.addEventListener('click',(e)=>{
    if(size<490){
        size+=10;
    }
    else{
        size=500;
    }
    updateSizeOnScreen()
})
increseby50Btn.addEventListener('click',(e)=>{
    if(size<450){
        size+=50;
    }
    else{
        size=500;
    }
    updateSizeOnScreen()
})

decreseBtn.addEventListener('click',(e)=>{
    if(size>1){
        size-=1;
    }
    else{
        size=1;
    }
    updateSizeOnScreen()
})
decreseby5Btn.addEventListener('click',(e)=>{
    if(size>5){
        size-=5;
    }
    else{
        size=1;
    }
    updateSizeOnScreen()
})
decreseby10Btn.addEventListener('click',(e)=>{
    if(size>10){
        size-=10;
    }
    else{
        size=1;
    }
    updateSizeOnScreen()
})
decreseby50Btn.addEventListener('click',(e)=>{
    if(size>50){
        size-=50;
    }
    else{
        size=1;
    }
    updateSizeOnScreen()
})

function updateSizeOnScreen(){
    sizeChange.innerText=size;
}

});

