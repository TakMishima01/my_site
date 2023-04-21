/*global $*/
$(function(){
  $('#hamburger, .list-item').on('click',function(event){
    $('.icon').toggleClass('close');
    $('.sm').slideToggle();
  });
});
