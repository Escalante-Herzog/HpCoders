//These are variavbles that use Strings,Numbers,And boolean
var name = "Marcelo";
var age = 16;
var alive = true;

var marcelo =  name + "" + age + "" + alive;

console.log(marcelo);

document.write();

innerHtml();

//Arithmetic

var sumOf = 3 * 5;
/*
Multi-Lined Comment

3+5
3-5
3*5
3/5
3**5

Modulo
3%5
=>0


for(i=0;i<101<i++){

	if(i % 3){
		console.log(i);
	}
	else{
		console.log("Not true");
	}
}

*/


/*Functions in Javascript*/



/*SYNTAX-
function functionName(input1 , input2){
	executed code here
}*/

//this function will take in two inputs, or finding the area of a square
//A = a^2


//http://www.w3schools.com/js/js_functions.asp



function cubeArea(a){
	a = prompt("What is A"); //Takes in A variable
	var c = Math.pow(a,2) ; 
	alert("Your Answer is! " + c); //Print out answer

}


/*
		Arrays
*/
var members = ['Marcelo','Kevin','Ben','Eric'];

members.sort(); //This sorts our names in Alphabetical Order

if (age < 21) {
	var output = "this guy is too young";
}
else if (age == 21){
	var output = "First time drinking buddy?";
}
else if(age >= 21){
	var output = "Hey have drink";
}
else{
	var output = "An error occured";
}










//How boolean Logic Works



var time = 0;

while(time != 30){

	console.log("The time is" + time );

	time++; //Adds 1 to the time every seconds
}





var marceloArray = ["marcelo",16,true];

console.log(sumOf);

document.write(output);

