/*global $*/
$(function(){
  $('#hamburger, .nav-list').on('click',function(event){
    $('.icon').toggleClass('close');
    $('.sm').slideToggle();
  });
});
