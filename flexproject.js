$(document).ready(function(){

  var containerIsSelected = false
  var sourceContainer = null
  var targetContainer = null
  var count=1;
  function moveDisk() {
    let smallestDisk = $(sourceContainer).children().eq(0)


    smallestDisk.remove()



  $(targetContainer).prepend(smallestDisk)
    containerIsSelected=false;
    targetContainer= this;

     $("span").text(count++);if(count==8){
     $("span").text("Game Over");
     }
  };
  $('.table').on('click', function() {

    if(containerIsSelected == false) {

      sourceContainer = this
      if($(sourceContainer).children().length <1){
    //check if there is a child in the container
         alert("You Click Wrong Contianer");
       } else{
       containerIsSelected = true
     }
    //===================================================//
    }

       else {

      targetContainer = this

      moveDisk()

    }

  })



$("h2").on("click",function(){
  $(".rule").slideDown(5000);
  $("h2").click(function(){
          $(".rule").slideUp(2000);
      });
});


});
