var number=prompt("Enter the numbers");
var arr=[];
number=parseInt(number);
var i=0;
for(i=0;i<number;i++)
{   var value=prompt("Give the values");
    
    arr.push(value);
}
value=parseInt(value);
var max=arr[0];
max=parseInt(max);
for(i=0;i<number;i++)
{
   if(arr[i]>max)
     { max=arr[i];
     }
}
console.log(" The maximum number is",max);
alert(max);
