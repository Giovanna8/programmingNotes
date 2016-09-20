# Vanilla JS notes

// Notes taken in 2015

remember different types of array
.map   !!


{
developing internals

ES5
	array
.forEach
.map
.filter
.reduce
...etc


ES5-shim = polyfill
(allowing to overwrite functions for older browsers)

underscore and lodash
}
 |
 |
\/

functions --> Constructors
				|		|
			       \/	       \/
			     'new' -- 'prototype'
			
call and apply

test.call({ name: '...' }, 1, 2, 3, 4)
{ name '...' } { '0': 1, '1': 2 ....} 


sum = () = => {

	this; //--> {global object}
	var arga = Array.prototype.slice(arguments)
	return args.reduce ((a,num) => a+num)
	//a:1, num: 2
	//a: 3, num 3 
	//a: 6, num 4
	//a :10
}

sum(1,2,3,4) //--> 10


	ES5
funtion sum() {
	return a+b

}

	ES6
funtion sum() { }



Promises (cardinality)

x (previous code) would call a a promise, which has a state (resolved, failed, or pending) and a value.
 

In javascript you can change a tag, ID, or object in html into whatever you want
so in CSS you can have that new tag have new properties, and so on






