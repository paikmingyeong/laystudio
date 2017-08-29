$(function() {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 4600) {
      $('.book').addClass('changeColor5')
    }
    if ($(this).scrollTop() < 4600) {
      $('.book').removeClass('changeColor5')
    }
    if ($(this).scrollTop() > 3400) {
      $('.book').addClass('changeColor4')
    }
    if ($(this).scrollTop() < 3400) {
      $('.book').removeClass('changeColor4')
    }
    if ($(this).scrollTop() > 2200) {
      $('.book').addClass('changeColor3')
    }
    if ($(this).scrollTop() < 2200) {
      $('.book').removeClass('changeColor3')
    }
    if ($(this).scrollTop() > 1000) {
      $('.book').addClass('changeColor2')
    }
    if ($(this).scrollTop() < 1000) {
      $('.book').removeClass('changeColor2')
    }
    if ($(this).scrollTop() > 0) {
      $('.book').addClass('changeColor1')
    }
    if ($(this).scrollTop() < 0) {
      $('.book').removeClass('changeColor1')
    }
  });
});