/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/

console.log("users: ", window.users);

console.log("todos: ", window.todos);

/*
- Use this starting template, you'll find the data there => https://codesandbox.io/s/day-6-functions-template-es4eg?file=/data.js
- As always, do not code your solution in CodeSandbox
With the usual Users and Todo lists:
  - Prompt the user for a letter
  - Find all the users who's name contains the letter 
  - Say hi to those users in the console - but only 1 greeting every 2 seconds.
- Prompt the user for a user ID. Using the value, find all the todos that are Incomplete and console.log them.

Tips
- Don't forget to clear interval once it's done running
- It's perfectly okay to prompt a user for details while other stuff (i.e. the interval) is running
- Keep your code separated into functions for easier readability later */


let userLetter=prompt("Please enter a letter")
function checkingIfUsersLetterMatch( userLetter){

 users.filter(function (user){
    if (user.name.includes(userLetter)) {
             
   console.log (`Hey, ${user.name}`);
    }
 })


 let userIdNum=Number (prompt ("Please Enter your ID"))
    }