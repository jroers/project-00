console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  //even numbered cell colors
  // var even;
  // var odd;
  // for (even = 2; even < 25; even += 2) {
  //   $("." + even).css("background-color", "blue");
  // }
  // for (odd = 1; odd < 25; odd += 2) {
  //   $("." + odd).css("background-color", "purple");
  // }


  var pos1 = 1;
  var pos2 = 1;
  $(window).on("keypress", function handler(event) {
    if (event.which === 97) { //97 yields "a". check https://api.jquery.com/keypress/ for a list of all keypresses
        if (pos1 < 50) {
            $(".pl-1." + pos1).text("");
            pos1 ++;
            $(".pl-1." + pos1).text("X"); 
        // } else if (pos1 === 11) {
        //     $(".pl-1." + pos1).text("");
        //     pos1 ++;
        //     $(".pl-1." + pos1).text("X"); 
        //     console.log("winner!");
        }
    } else if (event.which === 59) {
        if (pos2 < 50) {
            $(".pl-2." + pos2).text("");
            pos2 ++;
            $(".pl-2." + pos2).text("O");
        // } else if (pos2 === 11) {
        //     $(".pl-2." + pos1).text("");
        //     pos1 ++;
        //     $(".pl-2." + pos1).text("O"); 
        //     console.log("winner!");
        }
    }
    
});

});

