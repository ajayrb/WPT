
function addition(num1, num2)
{
	var res = num1 + num2;
	return res;
}

function substraction(num1, num2)
{
	var res = num1 - num2;
	return res;
}

function multiplication(num1, num2)
{
	var res = num1 * num2;
	return res;
}

function average(num1, num2, num3, num4)
{
	var res = addition(num1,num2,num3,num4)/4;
	return res;
}


var val1 = 20;
var val2 = 10; 

console.log("Addition : "+addition(val1,val2));
console.log("Substraction :"+substraction(val1,val2));
console.log("Multiplication : "+multiplication(val1,val2));

var val3 = 30;
var val4 = 40;

console.log("Average : "+average(val1,val2,val3,val4));


