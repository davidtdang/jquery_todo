// $(document).ready(function){
//  init();
// };


var body = $('body')
body.append("<h1>Todo App");
body.append($('<input placeholder = "what do you want to learn?"></input>'));
body.append($('<ul>'));



$('input').keypress(function(e)
{
  var text = $('input').val()
  if (e.which != 13) {return;}   //guard clause
    $('ul').append($('<li>' + text + '<span class="delete">Delete</span></li>').fadeIn(700));
});

body.append($('<p id="itemsleft">' + $('li:not([class = completed])').length + ' Items Left</p>'));
var deleteButton = body.append($('<button id="deleteAll">Delete Completed</id>'));


$('ul').on('click', 'li',function()
{
  $(this).toggleClass("completed");
})


$('ul').on('click', 'li span', function()
{
  $(this).parent().remove();
});


$('button').on('click', function()
{
  $(".completed").remove()

});
