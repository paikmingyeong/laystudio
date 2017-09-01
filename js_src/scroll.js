$(function(){

  //제일 위 텍스트
  $(window).on('mouseenter',function(){
    $('.inter-top-title').css({
      'transform':'translateX(0)',
      'transition':'all 1s ease-out'
    })
  });



var i;
var limit = 500;

function scroll(){

  $('.inter-middle1-bg').css({
    "transform":"translate3d(0," + (100 * (i / limit)) + "px,0)"

  });

  $('.inter-middle1-image.two').css({

    "transform":"translate3d(0," + (-50 * (i / limit)) + "px,0)"

  });


  $('.inter-middle1-image.three').css({
    "transform":"translate3d(0," + (20 * (i / limit)) + "px,0)"

  });

  $('.inter-middle1-image.four').css({

    "transform":"translate3d(0," + (-30 * (i / limit)) + "px,0)"

  });
}

$(window).on('scroll', function(){

  i = $(window).scrollTop();

  scroll();

});

});