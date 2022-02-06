var num=prompt("Enter the number");
num=parseInt(num);
var a=0;
var b=1;
var c=a+b;
var i=0;
console.log(a);

console.log(b);

console.log(c);
for(i=4;i<=num;i++)
{
   a=b;
   b=c;
   c=a+b;
   console.log(c); 
}
