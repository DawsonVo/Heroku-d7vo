$(document).ready(function(){
  function setRandomWord(){
    var phrases = new Array("a Photographer","a Cinematographer","a Programmer", "an Artist");  
    var txt  = phrases[Math.floor(Math.random()*phrases.length)];
    var temp = '';
    var i = 0;
    function typeDeleter() {
            if (i >= 0) {
               temp = temp.substring(0,i);
        $("#rotatingText").text(temp);
          i--;
        setTimeout(typeDeleter, 50);
      }
      else {
      setTimeout(setRandomWord,500);
      }
             }
    function typeWriter() {
            if (i < txt.length) {
               temp += txt.charAt(i);
        $("#rotatingText").text(temp);
          i++;
        setTimeout(typeWriter, 50);
      }
      else {
      setTimeout(typeDeleter,1000);
      }
             }
    
    typeWriter(); 
    
         }
setRandomWord();
});
