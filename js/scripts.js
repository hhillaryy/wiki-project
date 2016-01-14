$(document).ready(function(){
    var list = ["block" , "bootstrap", "css", "inline", "markdown" , "floats" , "boxmodel"];
    list.forEach(function(line) {
      $("#pages").append("<li><a href='pages/" + line + ".html'>" + line + "</a></li>");
    });


  event.preventDefault();
});
