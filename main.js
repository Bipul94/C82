var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
width_of_line = 2;
var last_position_of_x , last_position_of_y;
var mouseEvent;
canvas.addEventListener("mousedown" , my_Mousedown);

function my_Mousedown(e){
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseup" , my_Mouseup);

function my_Mouseup(e){
    mouseEvent = "mouseUp";
}
canvas.addEventListener("mouseleave" , my_Mouseleave);

function my_Mouseleave(e){
    mouseEvent = "mouseLeave";
}
canvas.addEventListener("mousemove" , my_Mousemove);

function my_Mousemove(e){
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;
    if(mouseEvent == "mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log("last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + ", y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x , last_position_of_y);
        console.log("current position of x and y coordinates = ");
        console.log("x = " + current_position_of_x + ", y = " + current_position_of_y);
        ctx.lineTo(current_position_of_x , current_position_of_y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;
}

function clearArea(){
    ctx.clearRect(0 , 0 , canvas.width , canvas.height);
}