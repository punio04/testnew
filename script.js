$(function () {
  $('.in_menu').click(function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.header-inner').addClass('active');
    } else {
      $('.header-inner').removeClass('active');
    }
  });
});