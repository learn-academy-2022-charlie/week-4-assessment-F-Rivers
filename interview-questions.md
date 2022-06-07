# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What are props in React?

  Your answer: Props is how you pass information from the parent component to the child component. You make the information available by referencing the variable with props. 

  Researched answer: Props is a keyword in React, that stands for properties, and is being used for passing data from one component to another. The important part is that the data in props is being passed in a uni-directional flow (from parent to child). Props data is read-only, the data coming from the parent cannot be changed by the child component.

  source: https://itnext.io/what-is-props-and-how-to-use-it-in-react-da307f500da0



2. What is a DOM event?

  Your answer: Document Object Model event, also referred to as "e", is an event that occurs when the user interacts with the web page. 

  Researched answer: DOM Events are a signal that something has occurred, or is occurring, and can be triggered by user interactions or by the browser. HTML DOM events allow JS to register different event handlers on elements in an HTML document. Events are normally used in combination with functions, and the function will not be executed before the event occurs (such as when a user clicks a button).

  source: https://www.w3schools.com/jsref/dom_obj_event.asp#:~:text=HTML%20DOM%20events%20allow%20JavaScript,a%20user%20clicks%20a%20button).


3. What is object-oriented programming? How is it different than functional programming?

  Your answer: Object-oriented programming has the data stored in the elements and functional programming is empty to use.

  Researched answer:
  OOP - At the center of the code are things, a person, a database connection, or an input field. The “things” we can actually work with are called instances. All instances have a blueprint — classes, in most OO programming languages. We can use them in JavaScript as well. You can describe OOP in a sentence with: We create “things” of a certain type. Of course, this is very simplified. Here is an example.

  FP - Unlike OOP, in functional programming we don’t have “things” that hold their own state — that’s rather what we want to avoid. There are no blueprints for instances. We decompose the task we want to implement into functions as much as possible. But not just any functions — the ideal is so-called “Pure Functions”.

  source: https://javascript.plainenglish.io/javascript-functional-vs-oop-fb5fbf15a35d



4. What is the difference between a Float and an Integer in Ruby?

  Your answer: An Float is any rational number, while an Integer is any whole number. 

  Researched answer: The main difference between float and decimal is that the latter gives a more accurate value, even though it is likely to take up more space in your database. This is why decimal is ideal for complex financial applications. In a real world application, you are more likely to use the float data type in your database as opposed to integers because you can get more accurate values.

  source: https://rails.devcamp.com/trails/ruby-programming/campsites/working-with-numbers-in-ruby/guides/difference-between-integers-and-floats-in-a-ruby-program



5. Ruby has an implicit return. What does that mean?

  Your answer: Implicit return is when Ruby automatically knows to run the last code without being told to do so. 

  Researched answer: Any statement in Ruby returns the value of the last evaluated expression. A simple example is the getter method. We call a method and expect some value in return.

  source: https://www.freecodecamp.org/news/idiomatic-ruby-writing-beautiful-code-6845c830c664/



## Looking Ahead: Terms for Next Week

1. Instance Variable: An instance variable is a variable defined in a class, for which each represented object of the class has a separate copy, or instance. An instance variable has similarities with a class variable, but is non-static.

2. PostgreSQL: Also known as just Postgres, it is a free and open-source object relational database management system,  which means it looks at databases through an object-oriented programming (OOP) lens.

3. Ruby on Rails: Open source development framework that is written in ruby 

4. ORM: Object Relational mapping, lets you write and alter data from a data base using object oriented programing 

5. Active Record: The model in MVC which is responsible for representing business data and logic. Active Record facilitates the creation and use of business objects whose data requires persistent storage to a database. It is an implementation of the Active Record pattern which itself is a description of an Object Relational Mapping system.