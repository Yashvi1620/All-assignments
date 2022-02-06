
var obj = {
    "first_name": "Yashvi",
    "last_name": "Patwa",
    "email": "y123@gmail.com",
    "website": "sdfhsdhfjds",
    "k": "This is Key K's value",
    "students": [
        {
            "name": "Ted",
            "marks": 92
        },
        {
            "name": "Barney",
            "marks": 25
        },
        {
            "name": "Robin",
            "marks": 89
        },
        {
            "name": "Marshal",
            "marks": 98
        },
        {
            "name": "Lily",
            "marks": 23
        },
        {
            "name": "Tracy",
            "marks": 76
        },
    ],
};

var score = prompt("Enter the score")
var studentsLength = obj.students.length
for(var i = 0; i < studentsLength; i = i + 1)
{
    if(score <= obj.students[i].marks)
	{
		console.log(" name: " +obj.students[i].name);
		console.log(" marks: " +obj.students[i].marks);
		
	}
}