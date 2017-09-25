var $ = require('jquery');

$('body').append('<h1 id=firstvalue>Holberton</h1>');
$('body').append('<h1 id=secondvalue>HBTN</h1>');
$("#secondvalue").hide();

setInterval(function(){
  $("#secondvalue").is(":visible") ? $("#secondvalue").hide() : $("#secondvalue").show();
   $("#firstvalue").is(":visible") ? $("#firstvalue").hide() : $("#firstvalue").show();
}, 2000);
