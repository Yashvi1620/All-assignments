var ch = prompt("Enter a String");
var a = ch.split("");
count = 0;
for (i = 0; i <= a.length; i++) {

    var character = a[i];

    switch (character) {
        case "a":
            case "A":    
            count = count + 1;
            break;
        case "e":
            case "E":
            count = count + 1;
            break;
        case "i":
            case "I":
            count = count + 1;
            break;
        case "o":
            case "O":
            count = count + 1;
            break;
        case "u":
            case "U":
            count = count + 1;
            break;
       
        default:
            break;
    }
}
console.log("No of vowels", +count);
