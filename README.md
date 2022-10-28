# To-do app
### _*Work in progress...*_

Welcome to my to-do app!
## About the project

_This is a web app where the user can add, edit and delete items in their to-do list, as well as filter through it._\
\
This is my first post Digital Futures academy project.\
I've chosen to do work on a to-do app because I will allow me to practice the knowledge I gathered during the academy challenges as well as explore further, like PUT and DELETE requests, which I haven't used in previous projects.\
This project is going to be created following Thinking in React methodology, as well as TDD.
</br></br>

## Built with
Client side- React\
Serve side- NodeJS (Express)\
Persistance- MongoDB (Atlas)\
Style- Bootstrap + CSS
</br></br>

## Getting started
To run this project on your machine, first clone this repo and then follow these steps:\
1- Navigate to the _client_ folder on your terminal and run npm i.\
2- Repeat the previous step but on _server_ folder.\
3- Run `npm start` on each on the folders, on separate terminals.\
4- The project is ready to view on your browser, port 3000.
</br></br>

## Problem statements
### User stories
The below stories are in order of importance, with the most important first.
```
As a user,
so that I know what I need to do,
I want to be able to see all the tasks in my to-do list.
```
```
As a user,
so that I know what I need to do, 
I want to be able to add tasks to my to-do list.
```
```
As a user,
so that I meet my deadlines,
I want to be able to add a due date on my todos.
```
```
As a user,
so that I can see progress,
I want to be able to mark tasks as 'in progress'.
```
```
As a user,
so that I can keep track of what has been done already,
I want to be able to mark tasks as 'done'.
```
```
As a user,
so that I can correct mistakes,
I want to be able to edit my todo's text.
```
```
As a user,
so that I can correct mistakes,
I want to be able to edit my todo's due date.
```
```
As a user, 
so that I can keep my list tidy,
I want to be able to delete todos.
```
```
As a user,
so that I can prioritise,
I want to see my todos in order with the closest due date first.
```
```
As a user,
so that I can see what needs to be done at a glance,
I want to be able to filter my to-do list.
```
```
As a user, 
so that only I can see my todos,
I want to have to login to see them.
```
```
As a user, 
so that I can see my todos on different devices,
I want the todo app to be responsive.
```
### Component hierarchy 
Common to every page:
- pink: whole page
- yellow: header
- blue: footer

All todos page:
- green: every to-do component
- purple: each individual to-do
![to-do list](/images/todoList.PNG)

Add to-do page:
- purple: to-do form component
![add to-do](/images/addTodo.PNG)
Edit page:
- red: editing form component
![edit to-do](/images/edit.PNG)
Sign-up page:
- green: sign-up form component
- orange: go to sign-in component
![register](/images/signUp.PNG)
Login page:
- red: login form component
- purple: go to sign-up component
![login](/images/login.PNG)

### Component tree
![component tree](/images/componentTree.png)

### App architecture
![app architecture](/images/appArchitecture.PNG)
</br></br>

## Project review
It's 28/10 and I'm putting this project on pause to prepare for my first Software Engineer position! 
Here is an overview of the progress I've been doing: [Project log.](log.md)

At the moment, the project meet all the basic functionality described on the user stories, apart from showing only the to-do's belonging to the logged in user and being responsive (or any styling, for that matter). 

Once I'm settled and reprise this project, I'll first complete the user stories as described above, plus add the header and footer.\
Then I'd like to add some nicer navigation to the app, like navigating to the to-do list once the user logs in, or navigating to login when the user registers.\
I'll then re-do the user's system to use JWT (json web tokens).\
Finally, I'll deploy my app.
</br></br>

## Acknowledgements 
- Trello- https://trello.com/
- Moqups- https://app.moqups.com/
- React Date-Picker- https://www.npmjs.com/package/react-date-picker