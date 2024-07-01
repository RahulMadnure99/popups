
//prompt popup method
var demo=function()
{
var choice=Number(prompt("Enter your choice 1)Add 2)sub 3)mul 4)Div"))
var num1=Number(prompt("Enter the first number"))
var num2=Number(prompt("Enter the second number"))
switch(choice)
{
    case 1:document.write("Addtion value is "+(num1+num2))
    break
    case 2:document.write("Substraction value is "+(num1-num2))
    break
    case 3:document.write("Multiplication value is "+(num1*num2))
    break
    case 4:document.write("Division value is "+(num1/num2))
    break
    default : document.write("Invalid Choice!!")
}
}

//confirm popup method
function showConfirmation() 
{
    var confirmation = confirm("Are you sure you want to proceed?");
    if (confirmation) 
    {
        alert("You clicked OK!");
    } 
    else
     {
        alert("You clicked Cancel!");
    }
}

//Alert popup method
function showAlert()
     {
        alert("This is an alert popup!");
    }