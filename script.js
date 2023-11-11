/* Assignment 03: Starting a Todo List App
 *
 * You are going to build the brains of a simple Todo List application
 * in JavaScript. You don't have to worry about the look of the app for now.
 * We will make it look awesome in Assignment 04.
 *
 * For now, we'll focus on giving the application the following features:
 * 1. Add a new todo item
 * 2. Delete a todo item
 * 3. Mark a todo item as completed
 * 4. Delete a todo item
 * 5. Clear all completed todos
 * *Add roblox responses (handles garbage data)
 *
 * The following code is the starting point for this assignment.
 *
 * You will have to write the code to initialise the todoItems array and
 * for the functions below.
 *
 * 1. addToDoItem(text)
 * 2. removeToDoItem(todoId)
 * 3. markToDoItemAsCompleted(todoId)
 * 4. deleteToDoItem(todoId)
 * 5. clearCompletedTasks()
 *
 * YOU MUST NOT CHANGE ANY OF THE FUNCTION NAMES OR THE AUTOMATED TESTS WILL FAIL
 *
 * As you write each function, press on the "Run Tests" button in the browser
 * to run the automated tests and check your work.
 *
 * You can also add your own tests and debug statements at the bottom of this file.
 *
 */


// Data storage - Initialize the array of To Do items
//
// NOTE:
//
// You must use the following object literal structure when creating new todo items
// {
//   id: 0,
//   text: "This is a todo item",
//   completed: false,
// }

// Initialise an empty array with the variable name todoItems
let todoItems = []
let count = 0;

// Function to add a todo to the list
// It should accept a string as a parameter (text of the todo item)
// and it should add a new todo item to the todoItems array
// the function does not need to return anything
function addToDoItem(input) {
  // Implement the logic to add a task here
  /* check text is string or not */
  if (valida_string(input) === true){
    count = count + 1;
    newObject = {
      id: count,
      text: input,
      completed: false,
    }
    todoItems.push(newObject);
    console.log(`The new todo (${input}) was added`);
  }
  else if (valida_if_in_table(input)=== false){
    console.log(`Error input: ${input + " (" + thisType + ")"}, id already in list, try again.`);
  }
  else{
    console.log(`Error input: ${input + " (" + thisType + ")"}, NOT a valid string to add, try again.`);
  }
}

function valida_string(input){
  thisType = typeof input;
  
  if (thisType === "string"){
    return true;
  }
  else {
    return false;
  }
}

function valida_number(input){
  thisType = typeof input;
  
  if (thisType === "number"){
    return true;
  }
  else {
    return false;
  }
}

function valida_if_in_table(input){
  let mark = false;
  for (i=0; i<todoItems.length; i++) {
    if (todoItems[i].id === input) {
      mark = true;
    }
  }
  // console.log(mark);
  return mark;
}

// Function to remove a todo to the list
// It should accept a number as a parameter (id of the todo item)
// Loop through the array of todos, and when you find the todo item with the id
// that matches the id passed to the function, remove it from the array
// the function does not need to return anything
function removeToDoItem(todoId) {
  // console.log(todoItems)
  // Implement the logic to add a task here
  if (valida_number(todoId) === true && valida_if_in_table(todoId) === true){ /* add && later */
    for (i=0; i<todoItems.length; i++) {
      if (todoItems[i].id === todoId) {
        todoItems.splice(i, 1);
        console.log(`The todo ${todoId} was removed below: `);
      }
    }
  }
  else if (valida_number(todoId) === false){
    console.log(`Error Input: ${todoId + " (" + thisType + ")"}, NOT a valid todo id number to remove, try again.`);
  }
  else if (valida_if_in_table(todoId) === false){
    console.log(`Error Input: ${todoId + " (" + thisType + ")"}, this id was NOT in the todo list.`);
  }
}

// Function to mark a task as completed
// It should accept a number as a parameter (id of the todo item)
// Loop through the array of todos, and when you find the todo item with the id
// that matches the id passed to the function, set its completed property to true
// the function does not need to return anything
function markToDoItemAsCompleted(todoId) {
  // Implement the logic to mark a task as completed here
  if (valida_number(todoId) === true && valida_if_in_table(todoId) === true){
    for (i=0; i<todoItems.length; i++) {
      if (todoItems[i].id === todoId) {
        todoItems[i].completed = true;
      }
    }
  }
  else if (valida_number(todoId) === false){
    console.log(`Error Input: ${todoId + " (" + thisType + ")"}, NOT a valid todo id number to mark, try again.`);
  }
  else if (valida_if_in_table(todoId) === false){
    console.log(`Error Input: ${todoId + " (" + thisType + ")"}, this id was NOT in the todo list.`);
  }
}

// Function to delete a task from the array
// It should accept a number as a parameter (id of the todo item)
// Loop through the array of todos, and when you find the todo item with the id
// that matches the id passed to the function, remove it from the array
// the function does not need to return anything, though you can return
// true or false depending on whether the item was successfully deleted
function deleteToDoItem(todoId) {
  // Implement the logic to remove a task here
  removeToDoItem(todoId)
}

// Function to clear all completed tasks
// Loop through the array of todos, and when you find a todo item that is marked
// as completed, remove it completely from the array
function clearCompletedTasks() {
  // Implement the logic to clear completed tasks here
  for (i=0; i<todoItems.length; i++) {
    // console.log(todoItems)
    if (todoItems[i].completed === true) {
      console.log(`The completed todo ${todoItems[i].id} was removed below: `);
      todoItems.splice(i, 1)
    }
  }
  console.log(todoItems); 
}

// You can write your own tests here if you would like to test
// your code before using the automated tests
// For example, you could run:
//  addToDoItem("Test ToDo"); // This should add a new todo item to the array
//  console.log(todoItems); // This should show the todo item you added
//  removeToDoItem(0); // This should remove the todo item with ID 0 from the array
//  markToDoItemAsCompleted(0); // This should mark the todo item with ID 0 as completed


/* Comment everything from here when click Run Tests -----------------------------------------*/
function console_testing(){
  console.log("-------add functions test------")
  for (i=1; i<=10; i++) {
    addToDoItem("Test ToDo"); 
  }
  console.table(todoItems) 

  /* Validate for input type */
  addToDoItem(5)
  addToDoItem(["Testing"])
  console.table(todoItems)
  console.log(count);

  console.log("-------remove functions test------")
  removeToDoItem(1); // This should remove the todo item with ID 0 from the array
  console.table(todoItems) // This should show the todo item you added

  /* Validate for input type */
  removeToDoItem("5")
  removeToDoItem(["Test ToDo"])
  removeToDoItem(5)
  removeToDoItem(13)
  console.table(todoItems)


  console.log("-------completed functions test------")
  // todoItems[1].completed = true;
  markToDoItemAsCompleted(4); // This should mark the todo item with ID 0 as completed
  markToDoItemAsCompleted(15);
  console.table(todoItems) // This should show the todo item you added
  console.log(count);

  clearCompletedTasks() 
  console.table(todoItems) // This should show the todo item you added
  console.log(count);
}
  

// Put userInputTest() in console to use
function userInputTest(){
  let flag = true;
  while (flag === true){

    let choice = prompt("Modify you todos here by enter numbers \n1.Add todo items \n2.Remove todo items  \n3.Mark items done  \n4.Remove done items \n5.Exit ");

    if (choice === "1") {
      let userInput = prompt("Enter a string for text to add in todos.")
      addToDoItem(userInput);
    }
    else if (choice === "2") {
      tag = true;
      while (tag = true){
        let userInput = prompt("Enter a id number to remove in todos.")
        userInput = parseInt(userInput);
        if (isNaN(userInput) === false){
          removeToDoItem(userInput);
          break
        }
        else if (isNaN(userInput) === true){
          console.log("Invalid entry.")
          userInput = prompt("Did not recieve valid id number, try again. y or n.")
          if (userInput === "n"){
            break
          }
          else if (userInput === "y"){
            tag = true;
          }
        }
      }
    }

    else if (choice === "3") {
      while (tag = true){
        let userInput = prompt("Enter a id number to mark completed in todos.")
        userInput = parseInt(userInput);
        if (isNaN(userInput) === false){
          markToDoItemAsCompleted(userInput);
          break
        }
        else if (isNaN(userInput) === true){
          console.log("Invalid entry.")
          userInput = prompt("Did not recieve valid id number, try again. y or n.")
          if (userInput === "n"){
            break
          }
          else if (userInput === "y"){
            tag = true;
          }
        }
      }
    }
    else if (choice === "5"){
      flag = false;
    }
    else{
      console.log("Invalid choice. We only have 5 functions.")
    }
    console.table(todoItems) 
    console.log("You have " + todoItems.length + " todos in list.\n ");
  }
}

/* Comment them out to test */
// for (i=1; i<=10; i++) {
//   addToDoItem("Test ToDo"); 
// }
// console.table(todoItems) 
// userInputTest()
