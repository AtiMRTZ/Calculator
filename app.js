let num1 = 0;
let num2 = 0;
let result = document.getElementById ("result");
let count1 = 0;
let count2 = 0;

function incrementLeft (){
	count1 += 1;
	document.getElementById ("num-1").textContent = count1;
	return count1;
};


function incrementRight (){
	count2 += 1;
	document.getElementById ("num-2").textContent = count2;
	return count2;
};

function decrementLeft (){
	count1 -= 1;
	document.getElementById ("num-1").textContent = count1;
	return count1;
};

function decrementRight(){
	count2 -= 1;
	document.getElementById ("num-2").textContent = count2;
	return count2;
};



function add (){
	result.textContent =  count1+count2;
	
};

function sub (){
	result.textContent =  count1-count2;
	
};

function div (){
	result.textContent =  count1/count2;
	
};

function mul (){
	result.textContent =  count1*count2;
	
};



