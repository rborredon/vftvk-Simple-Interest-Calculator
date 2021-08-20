//Compute the awaited value
function compute()
{
    var principal = document.getElementById("principal").value;

    //Checking if principale is positive or not
    if (principal <= 0)
    {
        //Negative or null value
        document.getElementById("result").innerHTML="";
        alert("Enter a positive number");
    }
    else
    {
        //Positive value
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);

        document.getElementById("result").innerHTML="If you deposit \<span class=\"highlightTxt\"\>"+principal+"</span>,\<br\>at an interest rate of \<span class=\"highlightTxt\"\>"+rate+"%\</span\>.\<br\>You will receive an amount of \<span class=\"highlightTxt\"\>"+interest+"\</span\>,\<br\>in the year \<span class=\"highlightTxt\"\>"+year+"\</span\>\<br\>";    
    }
}

//Update the rate display
function updateRate() 
{
    var rateval = document.getElementById("rate").value+"%";
    document.getElementById("rate_val").innerText=rateval;
}
