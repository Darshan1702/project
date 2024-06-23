document.addEventListener("DOMContentLoaded", function() {
    var currentTime = new Date();
    var currentHour = currentTime.getHours();
  
    var greetingMessage;
  
    if (currentHour < 12) {
      greetingMessage = "Good morning!";
    } else if (currentHour < 18) {
      greetingMessage = "Good afternoon!";
    } else {
      greetingMessage = "Good evening!";
    }
  
    alert(greetingMessage);
  });
  