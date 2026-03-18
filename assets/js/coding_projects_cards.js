window.addEventListener('load', function () {
  if (!window.jQuery) {
    return;
  }

  $('.coding-card').hover(
    function () {
      $(this).addClass('shadow-lg').css('cursor', 'pointer');
    },
    function () {
      $(this).removeClass('shadow-lg');
    }
  );

  $('.coding-card').on('click', function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 500);
  });
});
