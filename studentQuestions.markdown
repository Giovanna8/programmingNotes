## Javascript

Hey Student, 

What you're running into is a pretty simple issue. You've got the idea down, but the logic is a bit mixed up.
What's happening in the code is that you're calling `btnNum` and having it select a string inside of the prizes array, but it's not able to know where to go in the array because it's self contained.
What you need to do is have call the button `id`, and the length of the array. 
Somthing like `var pLen = 'btn-' + prizes.length;` after the `prizes` variable would let the process know to add a position from the array to the string, and then have it pull that with `for` loop you set up.

An alternate way to do this would be something like this:
```
var btn = 'btn-'
var btnId = ""
for (i = 0; i < 3; i++) {
		btnId += btn[i];
}
```
Where you'd have it search for each btn 0-2 and have when all have their own case. `for each` might also work better in this case.


-Mentor


## Rails

Hey Student,

In a rails application, you’d use `has_many :x` to define that `:x` has a one-to-many connection with another model. And a `has_many :y, :through :x`, so `:x` will have many uses with other models, `:y` being one of them. This `:through` association connects different data to another. 
A good example of this would where patients make appointments to see physicians:
```
class Physician < ApplicationRecord
  has_many :appointments
  has_many :patients, through: :appointments
end
 
class Appointment < ApplicationRecord
  belongs_to :physician
  belongs_to :patient
end
 
class Patient < ApplicationRecord
  has_many :appointments
  has_many :physicians, through: :appointments
end
```

Here’s a good resource for learning more about `has_many` and `:through`
-http://guides.rubyonrails.org/association_basics.html


-Mentor


## SQL


Hey Student,

So in a SQL database you input data inside your app. Lets use the example of usernames. Your user is setting up their account and creating their Username and Password which is then sent to your database and stored in a username field and password field, that’s a form of SQL Injection. So now whenever they log in the database is checking if that code is stored in it.
Now if you’re a hacker or someone trying to get inside a databse, what you’d be looking for inside their would be usernames and passwords, so they would make a call to the database to catch users information:
```
UNION SELECT UserName, Password, IsAdmin FROM Users;--
```
They are then given the info of the users.
Now, if you want to prevent something like this from happening, you’d want to create multiple layers of authentication before you can even see or access the data. There’s multiple ways to do this such as hashing passwords through javascript, which will create a hash in the database which will then access the data, that creates a layer just for the password. Other ways can be with a timeout feature so it shutsdown the connection with the SQL server if it’s taking to long. 
In short, to protect your data
- Encrypt sensitive data.
- Access the database using an account with the least privileges necessary.
- Install the database using an account with the least privileges necessary.
- Ensure that data is valid.
- Do a code review to check for the possibility of second-order attacks.
- Use parameterised queries.
- Use stored procedures.
- Re-validate data in stored procedures.
- Ensure that error messages give nothing away about the internal architecture of the application or the database.

Here’s a good resource for learning more about SQL Injection:
-http://www.codeproject.com/Articles/9378/SQL-Injection-Attacks-and-Some-Tips-on-How-to-Prev


-Mentor


## Angular 

Hey Student, 

Much like JQuery, Angular is a javascript framework, but it’s a lot more than that. It creates cleaner code and works really well with HTML. If you’re familiar with HTML elements then you’re already halfway there. Angular, unlike JQuery, is used for building scaleable and extensive applications. With Angular you can build web apps as well as native mobile apps. It also makes it easier for data to be integrated into your applications, it’s as simple as adding a script file. Features like Components and controllers help to make your apps reactive and be more scaleable. It breaks down every component in your app into different files which are accesses only when they are needed. It not only boosts speed but also productivity to make building apps faster and cleaner. 
If you go to the AngularJS site, you can better visualize how Angular works and get to see code in action.
-https://angularjs.org/

-Mentor



## CSS

Hey Student,


Your problem your facing is with the `float` property in CSS. For float, you’d want to set up an element that would go after the float that would then tell the float where to end but still no background.  
There’s a better way to do it with one change to your code.
Under the `.pricing-tiers .tier` elements, you should change the `float: left` to `display: inline-block`. Inline blocks work better across browsers and require less code. With this simple change you now have the background behind the pricing tiers and it looks exactly like the example.

Here’s a quote from W3 
“It has been possible for a long time to create a grid of boxes that fills the browser width and wraps nicely (when the browser is resized), by using the float property.
However, the inline-block value of the display property makes this even easier.
inline-block elements are like inline elements but they can have a width and a height.”
-http://www.w3schools.com/css/css_inline-block.asp

I hope this helps you better understand floats and inline-blocks.

-Mentor










