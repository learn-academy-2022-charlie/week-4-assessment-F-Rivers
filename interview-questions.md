# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What are props in React?

  Your answer: Props is how you pass information from the parent component to the child component. You make the information available by referencing the variable with props. We have used props in our class when we learned about React, we utilized props when we made a multi-page app and needed to share information from one page to the other.   

  Researched answer: Props is a keyword in React, that stands for properties, it is used for passing data from one component to another component. The data can only be passed from parent to child, not the other way around . Props data is read-only, the data coming from the parent cannot be changed by the child component.

  source: https://itnext.io/what-is-props-and-how-to-use-it-in-react-da307f500da0



2. What is a DOM event?

  Your answer: Document Object Model event, also referred to in our code as "e", is an event that occurs when the user interacts with the web page. We used "e" when adding the commands like 'onClick' on our pages.   

  Researched answer: DOM Events are a signal that something has occurred, or is occurring, and can be triggered by user interactions or by the browser. HTML DOM events allow JS to register different events in elements in the HTML document. DOM Events are normally used in combination with functions, and the function will not be executed before the event occurs. Something interesting I learned while researching this was that the event models used by web browsers used to have some differences that caused compatibility problems. This was solved by standardizing the event models in the the World Wide Web Consortium.

  source: https://www.w3schools.com/jsref/dom_obj_event.asp#:~:text=HTML%20DOM%20events%20allow%20JavaScript,a%20user%20clicks%20a%20button).


3. What is object-oriented programming? How is it different than functional programming?

  Your answer: Object-oriented programming has the data stored in the elements and functional programming is empty to use. We use this type of programming in our class to make the most dynamic code we possibly can, making it useful for several projects. 

  Researched answer:
  OOP - The code is centralized around instances, a person, a database connection, or an input field. All instances have a blueprint or 'classes'. While researching this, I found  interesting that the OOP approach is great for large, complex programs. 

  FP - Unlike OOP, in functional programming we don’t have instances that hold their own state, it is actually what to avoid. There are no blueprints for instances. We factor down the task we want to implement into functions as much as possible. While researching this I found interesting that FP approach is great for in demand tasks such as data analysis. 

  source: https://javascript.plainenglish.io/javascript-functional-vs-oop-fb5fbf15a35d



4. What is the difference between a Float and an Integer in Ruby?

  Your answer: An Float is any rational number, while an Integer is any whole number. We used both in our class to differentiate between rational numbers for complex math and whole numbers for simple math. 

  Researched answer: The main difference between floats and integers is that float gives a more accurate number value and it is likely to take up more space in your database. This is why decimal is ideal for complex financial applications. While researching this, I found interesting that most codes will opt for a float rather than an integer to get more accurate results. 

  source: https://rails.devcamp.com/trails/ruby-programming/campsites/working-with-numbers-in-ruby/guides/difference-between-integers-and-floats-in-a-ruby-program



5. Ruby has an implicit return. What does that mean?

  Your answer: Implicit return is when Ruby automatically knows to run the last code without being told to do so. In class we used the getter method to return the value of an attribute. We also used the setter method, which takes a parameter and assigns it to the attribute.

  Researched answer: Any statement in Ruby returns the value of the last evaluated expression, we call a method and expect some value in return. Arrow functions ( => ) implicitly return values by not needing the curly braces {} that are supposed to wrap a function's body as long as their body only contains one expression.

  source: https://www.freecodecamp.org/news/idiomatic-ruby-writing-beautiful-code-6845c830c664/



## Looking Ahead: Terms for Next Week

1. Instance Variable: An instance variable is a variable defined in a class, for which each represented object of the class has a separate copy, or instance. An instance variable has similarities with a class variable, but is non-static.

2. PostgreSQL: Also known as just Postgres, it is a free and open-source object relational database management system,  which means it looks at databases through an object-oriented programming (OOP) lens.

3. Ruby on Rails: Open source development framework that is written in ruby 

4. ORM: Object Relational mapping, lets you write and alter data from a data base using object oriented programing 

5. Active Record: The model in MVC which is responsible for representing business data and logic. Active Record facilitates the creation and use of business objects whose data requires persistent storage to a database. It is an implementation of the Active Record pattern which itself is a description of an Object Relational Mapping system.