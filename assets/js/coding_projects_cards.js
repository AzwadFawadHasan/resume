$(document).ready(function() {
  console.log("document is ready");

  $(".coding-card").hover(
    function() {
      $(this).addClass('shadow-lg').css('cursor', 'pointer');
    }, function() {
      $(this).removeClass('shadow-lg');
    }
  );
});
$(document).ready(function() {
  $(".coding-card").on('click', function() {
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 500);
  });
});
