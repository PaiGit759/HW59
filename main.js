let button_press = false;



function button_onclick()
{ 
  
    if (!button_press)
    {
        document.getElementById("imagecat").style.width = '400px';
        document.getElementById("imagecat").style.height = '400px';
        document.getElementById("cat").style.top = '12%';
        document.getElementById("cat").style.left = '24%';
            button_press = true;
    }
    else 
    {
        document.getElementById("imagecat").style.width = '40px';
        document.getElementById("imagecat").style.height = '40px';
        document.getElementById("cat").style.top = '45%';
        document.getElementById("cat").style.left = '45%';
            button_press = false;
    } 
}
