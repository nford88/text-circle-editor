# TextCircle Collaborative Code Editor

This app is deployed here https://guarded-savannah-51094.herokuapp.com/

Text Edit is an small web application made with my experimentation with the Meteor framework. In essence, TextEdit allows users to log in and code to a text area which is then rendered live HTML. Think of this as a poor man's CodePen 

It was one of my first projects using the Meteor framework and I wanted to test it out rather than creating a basic "ToDo" app.  I experienmenteted with several libraries and settled on routing in the form of iron:router, MongoDB for handling the database and Bootstrap to make everything neat and responsive.

It is allows for HTML to be typed into the code editor and it will be rendered live in the display window, which is just an iFrame. It enables people to collaborate on coding assignments with others, they can add comments and see which users are editing the document. Users also have the option to make a document private, whereby JavaScript security measures disable other users from seeing the document. There is no limit to how many documents can be created or how many comments can be made.

It was a nice project to work on, particularly learning the importance of publishing and subscribe models for security and I gained more of an understanding of distributed databases and how they work.

