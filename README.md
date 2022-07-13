## Your Books World

Simple React app to manage of history of books you read with Express.js, Typescript and MySQL.

## General info
This project is a simple react connect with own backend application made for the MegaK course.
The goal is to be able to manage and rating the history of the books we had read.You can add, edit and delete your books.App has simple sorting and searching by title.


## Setup
To run this project, first go to https://github.com/mateuszslowinski/megakBooksBack and follow all instruction.
Then clone this repo to your desktop and to install all the dependencies by:
```sh
  npm install 
  ```
Next you can run by:
```sh
  npm start
```
# Important!
It could be problem with connect property types from backend. You should go to tsconfig.paths.json and change "types" to correct path. This path probably help:
```
"../../megakBooksBack-main/megakBooksBack-main/types"
```
  

 You will then be able to access it at localhost:3000.
