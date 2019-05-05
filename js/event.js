$(function(){

  $(".study-list__title").on("click",function(){

    $(".study-list").removeClass("on");

    $(this).parents("li").addClass("on");

  })

})