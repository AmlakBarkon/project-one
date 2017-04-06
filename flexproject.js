$(document).ready(function(){

  var containerIsSelected = false
  var sourceContainer = null
  var targetContainer = null


  var count=1;
  function moveDisk() {

    let smallestSourceDisk = $(sourceContainer).children().eq(0)
    let smallestTargetDisk = $(targetContainer).children().eq(0)
    //console.log($(smallestSourceDisk).attr("id")
    console.log(smallestSourceDisk.attr('id'), smallestTargetDisk.attr('id'))

    if(parseInt(smallestSourceDisk.attr('id')) < parseInt(smallestTargetDisk.attr('id')) || smallestTargetDisk.attr('id') == undefined) {
      smallestSourceDisk.remove()
      $(targetContainer).prepend(smallestSourceDisk)
    }else{
      alert("Wrong move")
    }

    containerIsSelected = false;



    $("span").text(count++);if(count==8){
      $("span").text("Game Over");

    }
  };

  $('.table').on('click', function() {
    if(containerIsSelected == false) {
      sourceContainer = this
      if($(this).children().length <1){
        //check if there is a child in the container
        alert("You Click Empty Contianer");
      } else{
        containerIsSelected = true
      }
    }else
    {
      targetContainer = this


      moveDisk()

    }
  });
  $("h2").on("click",function(){
    $(".rule").slideDown(5000);
    $("h2").click(function(){
      $(".rule").slideUp(2000);
    });
  });
});
