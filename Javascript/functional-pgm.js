//Javascript examples


"torn".replace("o", "")
	//this will turn into 'trn' because it replaces
	//"o" with a nothing (" ")

function torn(N){
	torn.replace(/o/g, '')
	//the same as the one above
	//better for lists and is easier to work with
}

function reverse(str){
    str = str.reverse("")
    //reversing the string
}





function sumOfArray(array){
//names the function
    var sum = 0
//the sum starts at 0
    for (i=0; i<array.length; i++) {
//the formula to check for the sum of the array
    	sum +=array[i];
//whatformat that variable should be output to
    }
    return sum
//says what variable to output
}




function sum(a, b){
	return (a + b)
//just 'a' + 'b' = 'c'
}


var GCD = function(a, b) { 
	//added var GCD to the begining to make GCD usable
		return ( !b ) ? a: GCD ( b,a % b ); 
	//this uses the equation for GCD made to work for Javascript
	//setting it up like this is easier than using the 'if' function, but
	//not sure if this would cause problems for a heavier workload
}



var LCM = function(a, b) {
	return  a * b / GCD(a,b);
//using a similar function to GCD but again, not sure if this would work
//for a longer list of problems or even for more numbers
}



function isVowel(char){
	if (char.length == 0)
	{
		var vowels = new Array (a, e, i, o, u);
		//you have to tell JS what vowels are
		var isVowel = false;
		//tell it not to accept those letters

		for (vowels){
			if(vowels == char){
				isVowel = true;
		//initaites when something is a vowel

			}
		}

	}
}



function gimmeArray(n){
	return new Array(n).join(',-').split(',')
}

//function isPrime(n){
//	for(var i = 2; i < n/2; i++){
//		f(n % factor === 0) return false
//	}
//	return true
//}


function isPrime(n){
	//to tell js what is and isnt a prime number
    if(n === 1 || n === 2 || n === 3) return true
    for(var i = 2; i <= Math.floor(n/2); i++){
        if(n % i === 0) return false
    }
    return true;
}

function getNextPrime(i){
	//the function for the next prime in the list
    i++
    while(!isPrime(i)){ i++ }
    return i
}

function primes(n) {
	//for all the prime numbers
    var c = 0
    if(!n) return []
    return gimmeArray(n).reduce((a, v, i) => {
        c = getNextPrime(c)
        a.push(c)
        return a
    }, [])
}







