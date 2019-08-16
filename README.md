# Meeting Mate World Wide

https://meetingmate-live1.herokuapp.com/
Our aim to help aid in making you feel closely connected to your clients & partners worldwide and increase personal productivity

Our personalized dashboard provides the user with a variety of features.

### Chat 
Chat application which allows users to connect and communicate in a chat room

### To-Do
A to-do list that is unique to the user.
The user is able to add a task, mark as completed or delete a task.

### Calendar
A custom calendar that allows an user to create an event on the fly.
THe user is also able to easily edit the events by dragging, and dropping.

### Currency Calculator
As well as translating text, the user is also able to convert currency.

## How To Run
Once you are on the website, login and you will be able to access the features!

## How It Works
Once the user has passed the authecation page, they will presented with a dashboard with the following features:

### Chat 
Enter name in the input field in the header and connect to the chat application. Once another user joins, you are able to chat back and forth. The chats are stored into a database table to be used as chat history.

### To-Do
Once you enter in a task, it is inserted into a database. From there, editing, marking complete or deleting will do a different mysql command.

### Calendar
The calendar can be changed to a monthly, weekly, or daily view. Once a date is clicked, a prompt appears where the user is able to name their event. The duration of the event can be dragged to adjust how long the event lasts in the week or day tab.

### Currency Calculator
This uses an iframe. Currency options can be changed to a number of foreign currencies and automatically convert currency once a number is entered.

### Translate Feature
Uses a google-translate-api node package. Gets the text as well as the desired language from the user, and then calls the function. And returns the translated text.

## Technologies
Designed with materalize framework
Written in javascript, mysql, sass framework & node.js.
Uses mysql, socket.io, sequelize, & vitalets/google-translate-api packages.

## Resources
resource for chat: https://github.com/dkhd/node-group-chat
