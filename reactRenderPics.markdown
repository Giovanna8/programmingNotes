# React and Programming in JSX

# Going through different methods to render pics in a React App

var React = require('react');
var ReactDOM = require('react-dom');

function makeDoggy (e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

var kitty = (
	<img 
    onClick={makeDoggy}
		src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg" 
		alt="kitty" />
);

ReactDOM.render(kitty, document.getElementById('app'));



# Rendering different picks through a ‘coin toss’.

var React = require('react');
var ReactDOM = require('react-dom');

function coinToss () {
  // Randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

var pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};

var img = <img src={pics[coinToss() == 'heads' ? 'kitty' : 'doggy']} />;

ReactDOM.render(
	img, 
	document.getElementById('app')
);

# && Operator

example;

{!judgmental && <li>bubba<li/>}

// This has a 50% chance to show the <li /> or not


# Rendering a string

var people = ['Rowe', 'Prevost', 'Gare'];

var peopleLIs = people.map(function(person){
  // return statement goes here:
	return <li>{person}</li>
});

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLIs}</ul>, document.getElementById('app'));

// When you make a list in JSX, sometimes your list will need to include something called keys
//A key is a JSX attribute. The attribute's name is key. The attribute's value should be something unique, similar to an id attribute.

// keys don't do anything that you can see! React uses them internally to keep track of lists. If you don't use keys when you're supposed to, React might accidentally scramble your list-items into the wrong order.
// Not all lists need to have keys. A list needs keys if either of the following are true:
// The list-items have memory from one render to the next. For instance, when a to-do list renders, each item must "remember" whether it was checked off. The items shouldn't get amnesia when they render.
A list's order might be shuffled. For instance, a list of search results might be shuffled from one render to the next.
If neither of these conditions are true, then you don't have to worry about keys. If you aren't sure then it never hurts to use them!
// Setting up a loop to go through each string and add a key to each <li /> tag.

var React = require('react');
var ReactDOM = require('react-dom');
var people = ['Rowe', 'Prevost', 'Gare'];
var peopleLIs = people.map(function(person, i){
	return <li key={'person_' + i}>{person}</li>
});
ReactDOM.render(<ul>{peopleLIs}</ul>, document.getElementById('app'));


# Without JSX

// In React, just as in ES6 Javascript, you can render HTML without JSX. Here’s how you would in React, just without JSX.

var greatestDivEver = React.createElement(
	"div",
     null,
	"i am div"
);





















