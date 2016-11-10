# Constructor JS

In Javascript there are no classes like in CSS to give multiple objects a pattern of sorts, instead there's a little something called Constructors. A constructor is useful when you want to create multiple similar objects with the same properties and methods.

An example of this would be something like;

```
function person(name, year) {  
this.name = name;  
this.year = '(' + year + ')';
}
```

The constructor above shows that the class or function "person", means 'name' and 'year'. And then defines what the data should output as.

`var personOne = new person(“Joe”, 2014);` etc... This is the data that will go in the person function

`console.log(personOne.name, personOne.year);` etc... This outputs the data to the console for you to see

The output should say "Jo Joe (19xx)" as well as the rest of the items in the console or terminal.

I find it easier to explain in terms that I understand, and a language I use regularly. I hope this helps explain how constructors work with objects.
