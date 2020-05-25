var Squares = document.querySelectorAll(".square");
var colordisplay = document.querySelector(".colorDisplay");
var messagedisplay = document.querySelector("#message");
var h1 = document.querySelector("h1"); 
var button = document.querySelector("#reset");
var level = document.querySelectorAll(".level");
var easy = document.querySelector("#easybtn");
var hard = document.querySelector("#hardbtn");
var numOfColor=6;
var colors = generateRandomColor(numOfColor);
var pickedColor =  pickColor();
colordisplay.textContent = pickedColor;

easy.addEventListener("click",function(){
     
    numOfColor = 3;
     easy.classList.add("selected");
     hard.classList.remove("selected");
     colors = generateRandomColor(numOfColor);
     pickedColor =  pickColor();
     colordisplay.textContent = pickedColor;
     for(var i=0;i<Squares.length;i++)
     {
         if(colors[i])
          Squares[i].style.backgroundColor = colors[i];
         else
          Squares[i].style.display = "none";

     }
     messagedisplay.textContent = "";

})

hard.addEventListener("click",function(){
     
    numOfColor = 6;
    hard.classList.add("selected");
    easy.classList.remove("selected");
    colors = generateRandomColor(numOfColor);
    pickedColor =  pickColor();
    colordisplay.textContent = pickedColor;
    for(var i=0;i<Squares.length;i++)
    {
         Squares[i].style.backgroundColor = colors[i];
         Squares[i].style.display = "block";
    }
    messagedisplay.textContent = "";
})


button.addEventListener("click",function(){
    colors = generateRandomColor(numOfColor);
    pickedColor =  pickColor();
    colordisplay.textContent = pickedColor;
    for(var i=0;i<colors.length;i++)
    {
     Squares[i].style.backgroundColor = colors[i];
    }
    h1.style.background = "Steelblue";
    messagedisplay.textContent = "";
    
})



for(var i=0;i<colors.length;i++)
{
    Squares[i].style.backgroundColor = colors[i];
     
    Squares[i].addEventListener('click',function(){
             
        
           console.log(this.style.backgroundColor);


           if(this.style.backgroundColor=== pickedColor){
                messagedisplay.textContent="Correct!!";
                changeColor( pickedColor);
                h1.style.background = pickedColor;
                button.textContent = "PLAY AGAIN?";
            }
           else
           {
            this.style.background = "black"; 
             messagedisplay.textContent = "Incorrect";
           }                                                                    
    });
    
}  


function changeColor(setcolor){

    for(var i=0;i<Squares.length;i++)
    {
        Squares[i].style.backgroundColor = setcolor;
    }

}

function pickColor()
{
   
    var index =  Math.floor(Math.random()*colors.length); 
     return colors[index];
}


function generateRandomColor(num)
{
    var randcolor = [];
    for(var i=0;i<num;i++)
    {
        var a = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);
        var c = Math.floor(Math.random()*256);
        var col = "rgb("+a+", "+b+", "+c+")" ;
        randcolor.push(col);
    }
    
  return randcolor;
}