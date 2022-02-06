var a=prompt("Enter first number");
b=prompt("Enter second number");
c=prompt("Enter the third number");
a=parseInt(a);
b=parseInt(b);
c=parseInt(c);

if (a<b && a<c)
{
alert(a);
}
else if(b<a && b<c)
{
alert(b);
}
else{
alert(c);
}