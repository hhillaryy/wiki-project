$(document).ready(function(){
    var list = ["block" , "bootstrap", "css", "inline", "markdown" , "floats" , "jsvariables" , "jsmethods" , "forms"];
    list.forEach(function(line) {
      $("#pages").append("<li><a href='pages/" + line + ".html'>" + line + "</a></li>");
    });

    $("#blank form").submit(function(event) {
      var message1Input = $("input#message1").val();
      var newMessage = message1Input.toUpperCase();

      $(".message1").text(newMessage);

      $("#output").show();
      event.preventDefault();
    });
});


  // $("#blah form").submit(function(event) {
  //   var message1Input = $("input#message1").val();
  //   var newMessage = message1Input.toUpperCase();
  //
  //   $(".message1").text(newMessage);
  //
  //   $("#output").show();
  //   event.preventDefault();
  // });
