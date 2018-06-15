# Module-6
Oxford University, Module 6, Assignment 1

As done with in the previous module, add the possibility to edit a book, but use Ajax instead of a regular HTML form. You will also need to add an update funtcitonality in the server. In REST, usually the "PUT" verb is used.

Hint: you need to create a page that reads the actual book that you need to edit. If you want to pass the id of the book to that page as a GET parameter, you can read the parameter using the following JavaScript:

//this function puts all the GET params into an objectfunction getQueryVariables() {   var query = window.location.search.substring(1);   var object = {};   var vars = query.split('&');   for (var i=0; i<vars.length; i++) {     var pair = vars[i].split('=');     var paramName = pair[0];     var paramValue = pair[1];     object[paramName] = paramValue;   }   return object;}var queryParams = getQueryVariables();//the id will be available here:var bookid = queryParams.id;
Hint: you may find an issue when you try to use the date of the book inside the input element. Remember that the date needs to be passed as yyyy-MM-dd.

Hint: on the server side, you can serve PUT requests in express similarly to how you deal with POSTs.
Remember to add the id of the book inside the ajax call !

//update a book
app.put('/books', function (req, res) {   var book = req.body;   //TODO: update the book given its id   //TODO: if all OK, send 200})
This exercise can be a bit challenging, but very useful!
You will be basically developing a complete REST client-server prototype!


If you feel lost, don't worry, demonstrators are here to help you.

Once you have implemented the update of a single book, try implementing also the deletion.

Again, you will need to specify the id of the book to be removed in the call. This time, though, you can pass the id as a parameter in the URL.

Hint: to remove elements, in the books list you can add a little button next to each book that, when called, will make the ajax request with the DELETE verb. As a starter, see the example below:

// let's supposed we are iterating over an array of booksfor(var i=0; i< books.length; i++) {   // put some HTML elements to show the book (like title and author)   // add a remove button   var removebtn = document.createElement("button");   // use a self-invoking function to be sure the right id is used   (function(id) {     removebtn.onclick = function() {       // do the ajax call to "http://localhost:8081/books/" + id       // when completed, reload the page with window.location.replace("http://localhost:8081/books.html");     }   })(i); // "i" is the id passed as the id of the book to be deleted   // write something inside the button   removebtn.appendChild(document.createTextNode("delete"));}
Hint: in the server code, you can use the "DELETE" HTTP verb with something like this:

//remove a book given its id
app.delete('/books/:id', function (req, res) {   var id = req.params.id;   //TODO: remove the book from the list (you can use the "splice" method)   //TODO: if all OK, send 200})
