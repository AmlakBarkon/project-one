$(document).ready(function(){
  // Nice use of a $(document).ready()

  var containerIsSelected = false
  var sourceContainer = null
  var targetContainer = null
  var count = 1;
  // regarding semicolons, try to stay consistent. Either use them everywhere they
  // should be placed, or don't use them at all (the browser will insert them for you)

  function moveDisk() {
    let smallestDisk = $(sourceContainer).children().eq(0)
    smallestDisk.remove()
    $(targetContainer).prepend(smallestDisk)
    containerIsSelected = false;
    // You don't need to reassign targetContainer here, already did so in the $('table').on('click')
    $("span").text(count++);
    if(count == 8){
      // Not sure that you want to end the game after only 8 moves
      $("span").text("Game Over");
    }
  };

  $('.table').on('click', function() {
    if(containerIsSelected == false) {
      sourceContainer = this
      if($(sourceContainer).children().length < 1){
        //check if there is a child in the container
        alert("You Click Wrong Contianer");
      } else {
       containerIsSelected = true
      }
    } else {
      targetContainer = this
      moveDisk()
      // Nice abstraction of the moveDisk functionality
    }
  })



  $("h2").on("click",function(){
    $(".rule").slideDown(5000);
    $("h2").click(function(){
      $(".rule").slideUp(2000);
    });
  });
  // Nice use of jQuery animations but maybe make the div to click to trigger this
  // animation more apparent (like a label that says 'Click Me')
});

// Good code structure of all variables declared at the top, functions in the middle,
// and event listeners at the bottom ++
