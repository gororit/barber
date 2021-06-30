$(function(){
$('#first-up').click(function(){
 $('.first-up').slideToggle();
 $(this).toggleClass('close');
  if($(this).hasClass('close')){
   $(this).find('.plus').html("-");
  }else{
   $(this).find('.plus').html("+");
  }
});

$('#second-up').click(function(){
 $('.second-up').slideToggle();
 $(this).toggleClass('close');
  if($(this).hasClass('close')){
   $(this).find('.plus').html("-");
  }else{
   $(this).find('.plus').html("+");
  }
});

if(window.matchMedia("(min-width:1100px)").matches){
	$('#down').click(function(){
  $('.slide-down').slideToggle();
  $(this).toggleClass('close');
  if($(this).hasClass('close')){
   $(this).find('.plus').html("-");
  }else{
   $(this).find('.plus').html("+");
  }
 });
}else{ 
	
}

$('a[href^="#"]:not([href="#"])').click(function(){
 var target=$($(this).attr("href")).offset().top;
 target -= 30;
$("html,body").animate({scrollTop:target},500);

 return false;
});

$(window).resize(function(){
if($(window).width() < 1280){
  $('.guys-img').attr('src', 'img/guys2.png');
  $('.isami-img').attr('src', 'img/isami2.png');
}else{
  $('.guys-img').attr('src', 'img/guys.png');
  $('.isami-img').attr('src', 'img/isami.png');
}
});
});