/**
 * Created by Administrator on 2017-08-05.
 */

$(function(){

  // 선언부

  var currentIndex = 0;
  var nextIndex = 0;


    function moveDown(){

      if(nextIndex >= $('.art-page-info').length){
        nextIndex = 0;
      }

      // eq()에 음수 값을 넣어 주면 뒷 순서부터 차례대로 매칭시킴
      $('.art-page-info').eq(currentIndex-1).removeClass('down ani').addClass('up');
      $('.art-page-info').eq(currentIndex).removeClass('middle ani').addClass('down ani');
      $('.art-page-info').eq(nextIndex).removeClass('up').addClass('middle ani');

      currentIndex = nextIndex;
      nextIndex++;
    }

    function moveUp(){

      if(nextIndex <= -1){
        nextIndex = $('.art-page-info').length-1;
      }

      $('.art-page-info').eq(nextIndex-1).removeClass('up ani').addClass('down');
      $('.art-page-info').eq(currentIndex).removeClass('middle ani').addClass('up ani');
      $('.art-page-info').eq(nextIndex).removeClass('down').addClass('middle ani');

      currentIndex = nextIndex;
      nextIndex--;
    }



    var activeClick = function(direction){

      var dir = direction;

      if( dir == 'up' ){
        nextIndex = currentIndex + 1;
        moveDown();
      } else if( dir == 'down' ){
        nextIndex = currentIndex - 1;
        moveUp();
      }

      var $selector = $('.artup.' + dir);

      setTimeout(function(){
        // 재귀함수
        $selector.one('click', function(){
          activeClick(dir);
        });

      }, 500);

    };


    // 실행부


    $('.artup.one').on('click', function(){

      nextIndex = currentIndex + 1;
      moveDown('up');

    });

    $('.artdown.one').on('click', function(){

      nextIndex = currentIndex - 1;
      moveUp('down');

    });


  // image1

    var currentIndex2 = 0;
    var nextIndex2 = 0;

    function moveDown2(){

      if(nextIndex2 >= $('.art-image1-box1').length){
        nextIndex2 = 0;
      }

      // eq()에 음수 값을 넣어 주면 뒷 순서부터 차례대로 매칭시킴
      $('.art-image1-box1').eq(currentIndex2-1).removeClass('down ani').addClass('up');
      $('.art-image1-box1').eq(currentIndex2).removeClass('middle ani').addClass('down ani');
      $('.art-image1-box1').eq(nextIndex2).removeClass('up').addClass('middle ani');

      currentIndex2 = nextIndex2;
      nextIndex2++;
    }

    function moveUp2(){

      if(nextIndex2 <= -1){
        nextIndex2 = $('.art-image1-box1').length-1;
      }

      $('.art-image1-box1').eq(nextIndex2-1).removeClass('up ani').addClass('down');
      $('.art-image1-box1').eq(currentIndex2).removeClass('middle ani').addClass('up ani');
      $('.art-image1-box1').eq(nextIndex2).removeClass('down').addClass('middle ani');

      currentIndex2 = nextIndex2;
      nextIndex2--;
    }


    var activeClick2 = function(direction){

      var dir2 = direction;

      if( dir2 == 'up' ){
        nextIndex2 = currentIndex2 + 1;
        moveDown2();
      } else if( dir2 == 'down' ){
        nextIndex2 = currentIndex2 - 1;
        moveUp2();
      }
      var $selector2 = $('.artup.' + dir2);

      setTimeout(function(){
        // 재귀함수
        $selector2.one('click', function(){
          activeClick2(dir2);
        });

      }, 500);

    };


    // 실행부

  $('.artup.three').on('click', function(){

    nextIndex2 = currentIndex2 + 1;
    moveDown2('up');

  });

  $('.artdown.three').on('click', function(){

    nextIndex2 = currentIndex2 - 1;
    moveUp2('down');

  });


  // image2

  var currentIndex3 = 0;
  var nextIndex3 = 0;


  function moveDown3(){

    if(nextIndex3 >= $('.art-image2-box2').length){
      nextIndex3 = 0;
    }

    // eq()에 음수 값을 넣어 주면 뒷 순서부터 차례대로 매칭시킴
    $('.art-image2-box2').eq(currentIndex3-1).removeClass('down ani').addClass('up');
    $('.art-image2-box2').eq(currentIndex3).removeClass('middle ani').addClass('down ani');
    $('.art-image2-box2').eq(nextIndex3).removeClass('up').addClass('middle ani');

    currentIndex3 = nextIndex3;
    nextIndex3++;
  }

  function moveUp3(){

    if(nextIndex3 <= -1){
      nextIndex3 = $('.art-image2-box2').length-1;
    }

    $('.art-image2-box2').eq(nextIndex3-1).removeClass('up ani').addClass('down');
    $('.art-image2-box2').eq(currentIndex3).removeClass('middle ani').addClass('up ani');
    $('.art-image2-box2').eq(nextIndex3).removeClass('down').addClass('middle ani');

    currentIndex3 = nextIndex3;
    nextIndex3--;
  }



  var activeClick3 = function(direction){

    var dir3 = direction;

    if( dir3 == 'up' ){
      nextIndex3 = currentIndex3 + 1;
      moveDown3();
    } else if( dir3 == 'down' ){
      nextIndex3 = currentIndex3 - 1;
      moveUp3();
    }

    var $selector3 = $('.artup.' + dir3);

    setTimeout(function(){
      // 재귀함수
      $selector3.one('click', function(){
        activeClick3(dir3);
      });

    }, 500);

  };


  // 실행부


  $('.artup.two').on('click', function(){

    nextIndex3 = currentIndex3 + 1;
    moveDown3('up');

  });

  $('.artdown.two').on('click', function(){

    nextIndex3 = currentIndex3 - 1;
    moveUp3('down');

  });


  });
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
/**
 * Created by Administrator on 2017-08-29.
 */
$(function(){

  $('.arrow-wrap1').data({'open': false}).on('click', function(){

    if ($(this).data().open) {
      $('.inter-which-imagewrap1').removeClass('right-on');
      $(this).data({open: false});
    } else {
      $('.inter-which-imagewrap1').addClass('right-on');
      $(this).data({open: true});
    }
  });

  $('.arrow-wrap2').data({'open': false}).on('click', function(){

    if ($(this).data().open) {
      $('.inter-which-imagewrap2').removeClass('left-on');
      $(this).data({open: false});
    } else {
      $('.inter-which-imagewrap2').addClass('left-on');
      $(this).data({open: true});
    }
  });

});
/**
 * Created by Administrator on 2017-08-31.
 */

$(function(){

  var currentIndex = 0;
  var nextIndex = 0;

  function moveDown(){

    if(nextIndex >= $('.life-page').length){
      nextIndex = 0;
    }


    $('.life-page').eq(currentIndex-1).removeClass('down ani').addClass('up');
    $('.life-page').eq(currentIndex).removeClass('middle ani').addClass('down ani');
    $('.life-page').eq(nextIndex).removeClass('up').addClass('middle ani');

    currentIndex = nextIndex;
    nextIndex++;
  }

  function moveUp(){

    if(nextIndex <= -1){
      nextIndex = $('.life-page').length-1;
    }


    $('.life-page').eq(nextIndex-1).removeClass('down ani').addClass('up');
    $('.life-page').eq(currentIndex).removeClass('middle ani').addClass('down ani');
    $('.life-page').eq(nextIndex).removeClass('up').addClass('middle ani');

    currentIndex = nextIndex;
    nextIndex--;
  }

  var activeClick = function(direction){

    var dir = direction;

    if( dir == 'up' ){
      nextIndex = currentIndex + 1;
      moveDown();
    } else if( dir == 'down' ){
      nextIndex = currentIndex - 1;
      moveUp();
    }

    var $selector = $('.arrow.' + dir);

    setTimeout(function(){
      // 재귀함수
      $selector.one('click', function(){
        activeClick(dir);
      });

    }, 500);

  };



  $('.arrow.up').on('click', function(){
    nextIndex = currentIndex+1;
    moveDown('up');
  });
  $('.arrow.down').on('click', function(){

    nextIndex = currentIndex - 1;
    moveUp('down');

  });

});
$(function() {


  $('.gnb-close-button').data({'open': false}).on('click', function () {

    if ($(this).data().open) {
      $('.gnb-open').removeClass('on');
      $(this).data({open: false});
    } else {
      $('.gnb-open').addClass('on');
      $(this).data({open: true});
    }

  });

});





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
    "transform":"translate3d(0," + (80 * (i / limit)) + "px,0)"

  });

  $('.inter-middle1-image.two').css({

    "transform":"translate3d(0," + (-50 * (i / limit)) + "px,0)"

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydF9wYWdlcm9sbGluZy5qcyIsImJvb2tfYmFja2dyb3VuZC5qcyIsImludGVyaW9yX3doaWNoLmpzIiwibGlmZS5qcyIsIm1lbnVfb3Blbi5qcyIsInNjcm9sbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJmdW5jdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0wNS5cclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIC8vIO+/ve+/ve+/ve+/ve+/ve+/vVxyXG5cclxuICB2YXIgY3VycmVudEluZGV4ID0gMDtcclxuICB2YXIgbmV4dEluZGV4ID0gMDtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gbW92ZURvd24oKXtcclxuXHJcbiAgICAgIGlmKG5leHRJbmRleCA+PSAkKCcuYXJ0LXBhZ2UtaW5mbycpLmxlbmd0aCl7XHJcbiAgICAgICAgbmV4dEluZGV4ID0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gZXEoKe+/ve+/vSDvv73vv73vv73vv70g77+977+977+977+9IO+/vda+77+9IO+/vda477+9IO+/ve+/vSDvv73vv73vv73vv73vv73vv73vv73vv70g77+977+977+9yrTvv73vv73vv70g77+977+9xKrvv73vv73FtFxyXG4gICAgICAkKCcuYXJ0LXBhZ2UtaW5mbycpLmVxKGN1cnJlbnRJbmRleC0xKS5yZW1vdmVDbGFzcygnZG93biBhbmknKS5hZGRDbGFzcygndXAnKTtcclxuICAgICAgJCgnLmFydC1wYWdlLWluZm8nKS5lcShjdXJyZW50SW5kZXgpLnJlbW92ZUNsYXNzKCdtaWRkbGUgYW5pJykuYWRkQ2xhc3MoJ2Rvd24gYW5pJyk7XHJcbiAgICAgICQoJy5hcnQtcGFnZS1pbmZvJykuZXEobmV4dEluZGV4KS5yZW1vdmVDbGFzcygndXAnKS5hZGRDbGFzcygnbWlkZGxlIGFuaScpO1xyXG5cclxuICAgICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xyXG4gICAgICBuZXh0SW5kZXgrKztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtb3ZlVXAoKXtcclxuXHJcbiAgICAgIGlmKG5leHRJbmRleCA8PSAtMSl7XHJcbiAgICAgICAgbmV4dEluZGV4ID0gJCgnLmFydC1wYWdlLWluZm8nKS5sZW5ndGgtMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJCgnLmFydC1wYWdlLWluZm8nKS5lcShuZXh0SW5kZXgtMSkucmVtb3ZlQ2xhc3MoJ3VwIGFuaScpLmFkZENsYXNzKCdkb3duJyk7XHJcbiAgICAgICQoJy5hcnQtcGFnZS1pbmZvJykuZXEoY3VycmVudEluZGV4KS5yZW1vdmVDbGFzcygnbWlkZGxlIGFuaScpLmFkZENsYXNzKCd1cCBhbmknKTtcclxuICAgICAgJCgnLmFydC1wYWdlLWluZm8nKS5lcShuZXh0SW5kZXgpLnJlbW92ZUNsYXNzKCdkb3duJykuYWRkQ2xhc3MoJ21pZGRsZSBhbmknKTtcclxuXHJcbiAgICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcclxuICAgICAgbmV4dEluZGV4LS07XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICB2YXIgYWN0aXZlQ2xpY2sgPSBmdW5jdGlvbihkaXJlY3Rpb24pe1xyXG5cclxuICAgICAgdmFyIGRpciA9IGRpcmVjdGlvbjtcclxuXHJcbiAgICAgIGlmKCBkaXIgPT0gJ3VwJyApe1xyXG4gICAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgICAgbW92ZURvd24oKTtcclxuICAgICAgfSBlbHNlIGlmKCBkaXIgPT0gJ2Rvd24nICl7XHJcbiAgICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcclxuICAgICAgICBtb3ZlVXAoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyICRzZWxlY3RvciA9ICQoJy5hcnR1cC4nICsgZGlyKTtcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAvLyDvv73vv73vv73vv73vv73UvO+/vVxyXG4gICAgICAgICRzZWxlY3Rvci5vbmUoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgIGFjdGl2ZUNsaWNrKGRpcik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICB9LCA1MDApO1xyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIC8vIO+/ve+/ve+/ve+/ve+/ve+/vVxyXG5cclxuXHJcbiAgICAkKCcuYXJ0dXAub25lJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgIG1vdmVEb3duKCd1cCcpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5hcnRkb3duLm9uZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgICBtb3ZlVXAoJ2Rvd24nKTtcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gIC8vIGltYWdlMVxyXG5cclxuICAgIHZhciBjdXJyZW50SW5kZXgyID0gMDtcclxuICAgIHZhciBuZXh0SW5kZXgyID0gMDtcclxuXHJcbiAgICBmdW5jdGlvbiBtb3ZlRG93bjIoKXtcclxuXHJcbiAgICAgIGlmKG5leHRJbmRleDIgPj0gJCgnLmFydC1pbWFnZTEtYm94MScpLmxlbmd0aCl7XHJcbiAgICAgICAgbmV4dEluZGV4MiA9IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGVxKCnvv73vv70g77+977+977+977+9IO+/ve+/ve+/ve+/vSDvv73Wvu+/vSDvv73WuO+/vSDvv73vv70g77+977+977+977+977+977+977+977+9IO+/ve+/ve+/vcq077+977+977+9IO+/ve+/vcSq77+977+9xbRcclxuICAgICAgJCgnLmFydC1pbWFnZTEtYm94MScpLmVxKGN1cnJlbnRJbmRleDItMSkucmVtb3ZlQ2xhc3MoJ2Rvd24gYW5pJykuYWRkQ2xhc3MoJ3VwJyk7XHJcbiAgICAgICQoJy5hcnQtaW1hZ2UxLWJveDEnKS5lcShjdXJyZW50SW5kZXgyKS5yZW1vdmVDbGFzcygnbWlkZGxlIGFuaScpLmFkZENsYXNzKCdkb3duIGFuaScpO1xyXG4gICAgICAkKCcuYXJ0LWltYWdlMS1ib3gxJykuZXEobmV4dEluZGV4MikucmVtb3ZlQ2xhc3MoJ3VwJykuYWRkQ2xhc3MoJ21pZGRsZSBhbmknKTtcclxuXHJcbiAgICAgIGN1cnJlbnRJbmRleDIgPSBuZXh0SW5kZXgyO1xyXG4gICAgICBuZXh0SW5kZXgyKys7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbW92ZVVwMigpe1xyXG5cclxuICAgICAgaWYobmV4dEluZGV4MiA8PSAtMSl7XHJcbiAgICAgICAgbmV4dEluZGV4MiA9ICQoJy5hcnQtaW1hZ2UxLWJveDEnKS5sZW5ndGgtMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJCgnLmFydC1pbWFnZTEtYm94MScpLmVxKG5leHRJbmRleDItMSkucmVtb3ZlQ2xhc3MoJ3VwIGFuaScpLmFkZENsYXNzKCdkb3duJyk7XHJcbiAgICAgICQoJy5hcnQtaW1hZ2UxLWJveDEnKS5lcShjdXJyZW50SW5kZXgyKS5yZW1vdmVDbGFzcygnbWlkZGxlIGFuaScpLmFkZENsYXNzKCd1cCBhbmknKTtcclxuICAgICAgJCgnLmFydC1pbWFnZTEtYm94MScpLmVxKG5leHRJbmRleDIpLnJlbW92ZUNsYXNzKCdkb3duJykuYWRkQ2xhc3MoJ21pZGRsZSBhbmknKTtcclxuXHJcbiAgICAgIGN1cnJlbnRJbmRleDIgPSBuZXh0SW5kZXgyO1xyXG4gICAgICBuZXh0SW5kZXgyLS07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHZhciBhY3RpdmVDbGljazIgPSBmdW5jdGlvbihkaXJlY3Rpb24pe1xyXG5cclxuICAgICAgdmFyIGRpcjIgPSBkaXJlY3Rpb247XHJcblxyXG4gICAgICBpZiggZGlyMiA9PSAndXAnICl7XHJcbiAgICAgICAgbmV4dEluZGV4MiA9IGN1cnJlbnRJbmRleDIgKyAxO1xyXG4gICAgICAgIG1vdmVEb3duMigpO1xyXG4gICAgICB9IGVsc2UgaWYoIGRpcjIgPT0gJ2Rvd24nICl7XHJcbiAgICAgICAgbmV4dEluZGV4MiA9IGN1cnJlbnRJbmRleDIgLSAxO1xyXG4gICAgICAgIG1vdmVVcDIoKTtcclxuICAgICAgfVxyXG4gICAgICB2YXIgJHNlbGVjdG9yMiA9ICQoJy5hcnR1cC4nICsgZGlyMik7XHJcblxyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy8g77+977+977+977+977+91Lzvv71cclxuICAgICAgICAkc2VsZWN0b3IyLm9uZSgnY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgYWN0aXZlQ2xpY2syKGRpcjIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgfSwgNTAwKTtcclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICAvLyDvv73vv73vv73vv73vv73vv71cclxuXHJcbiAgJCgnLmFydHVwLnRocmVlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICBuZXh0SW5kZXgyID0gY3VycmVudEluZGV4MiArIDE7XHJcbiAgICBtb3ZlRG93bjIoJ3VwJyk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcuYXJ0ZG93bi50aHJlZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgbmV4dEluZGV4MiA9IGN1cnJlbnRJbmRleDIgLSAxO1xyXG4gICAgbW92ZVVwMignZG93bicpO1xyXG5cclxuICB9KTtcclxuXHJcblxyXG4gIC8vIGltYWdlMlxyXG5cclxuICB2YXIgY3VycmVudEluZGV4MyA9IDA7XHJcbiAgdmFyIG5leHRJbmRleDMgPSAwO1xyXG5cclxuXHJcbiAgZnVuY3Rpb24gbW92ZURvd24zKCl7XHJcblxyXG4gICAgaWYobmV4dEluZGV4MyA+PSAkKCcuYXJ0LWltYWdlMi1ib3gyJykubGVuZ3RoKXtcclxuICAgICAgbmV4dEluZGV4MyA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXEoKe+/ve+/vSDvv73vv73vv73vv70g77+977+977+977+9IO+/vda+77+9IO+/vda477+9IO+/ve+/vSDvv73vv73vv73vv73vv73vv73vv73vv70g77+977+977+9yrTvv73vv73vv70g77+977+9xKrvv73vv73FtFxyXG4gICAgJCgnLmFydC1pbWFnZTItYm94MicpLmVxKGN1cnJlbnRJbmRleDMtMSkucmVtb3ZlQ2xhc3MoJ2Rvd24gYW5pJykuYWRkQ2xhc3MoJ3VwJyk7XHJcbiAgICAkKCcuYXJ0LWltYWdlMi1ib3gyJykuZXEoY3VycmVudEluZGV4MykucmVtb3ZlQ2xhc3MoJ21pZGRsZSBhbmknKS5hZGRDbGFzcygnZG93biBhbmknKTtcclxuICAgICQoJy5hcnQtaW1hZ2UyLWJveDInKS5lcShuZXh0SW5kZXgzKS5yZW1vdmVDbGFzcygndXAnKS5hZGRDbGFzcygnbWlkZGxlIGFuaScpO1xyXG5cclxuICAgIGN1cnJlbnRJbmRleDMgPSBuZXh0SW5kZXgzO1xyXG4gICAgbmV4dEluZGV4MysrO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbW92ZVVwMygpe1xyXG5cclxuICAgIGlmKG5leHRJbmRleDMgPD0gLTEpe1xyXG4gICAgICBuZXh0SW5kZXgzID0gJCgnLmFydC1pbWFnZTItYm94MicpLmxlbmd0aC0xO1xyXG4gICAgfVxyXG5cclxuICAgICQoJy5hcnQtaW1hZ2UyLWJveDInKS5lcShuZXh0SW5kZXgzLTEpLnJlbW92ZUNsYXNzKCd1cCBhbmknKS5hZGRDbGFzcygnZG93bicpO1xyXG4gICAgJCgnLmFydC1pbWFnZTItYm94MicpLmVxKGN1cnJlbnRJbmRleDMpLnJlbW92ZUNsYXNzKCdtaWRkbGUgYW5pJykuYWRkQ2xhc3MoJ3VwIGFuaScpO1xyXG4gICAgJCgnLmFydC1pbWFnZTItYm94MicpLmVxKG5leHRJbmRleDMpLnJlbW92ZUNsYXNzKCdkb3duJykuYWRkQ2xhc3MoJ21pZGRsZSBhbmknKTtcclxuXHJcbiAgICBjdXJyZW50SW5kZXgzID0gbmV4dEluZGV4MztcclxuICAgIG5leHRJbmRleDMtLTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgdmFyIGFjdGl2ZUNsaWNrMyA9IGZ1bmN0aW9uKGRpcmVjdGlvbil7XHJcblxyXG4gICAgdmFyIGRpcjMgPSBkaXJlY3Rpb247XHJcblxyXG4gICAgaWYoIGRpcjMgPT0gJ3VwJyApe1xyXG4gICAgICBuZXh0SW5kZXgzID0gY3VycmVudEluZGV4MyArIDE7XHJcbiAgICAgIG1vdmVEb3duMygpO1xyXG4gICAgfSBlbHNlIGlmKCBkaXIzID09ICdkb3duJyApe1xyXG4gICAgICBuZXh0SW5kZXgzID0gY3VycmVudEluZGV4MyAtIDE7XHJcbiAgICAgIG1vdmVVcDMoKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgJHNlbGVjdG9yMyA9ICQoJy5hcnR1cC4nICsgZGlyMyk7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAvLyDvv73vv73vv73vv73vv73UvO+/vVxyXG4gICAgICAkc2VsZWN0b3IzLm9uZSgnY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGFjdGl2ZUNsaWNrMyhkaXIzKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgfSwgNTAwKTtcclxuXHJcbiAgfTtcclxuXHJcblxyXG4gIC8vIO+/ve+/ve+/ve+/ve+/ve+/vVxyXG5cclxuXHJcbiAgJCgnLmFydHVwLnR3bycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgbmV4dEluZGV4MyA9IGN1cnJlbnRJbmRleDMgKyAxO1xyXG4gICAgbW92ZURvd24zKCd1cCcpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLmFydGRvd24udHdvJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICBuZXh0SW5kZXgzID0gY3VycmVudEluZGV4MyAtIDE7XHJcbiAgICBtb3ZlVXAzKCdkb3duJyk7XHJcblxyXG4gIH0pO1xyXG5cclxuXHJcbiAgfSk7IiwiJChmdW5jdGlvbigpIHtcclxuICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gNDYwMCkge1xyXG4gICAgICAkKCcuYm9vaycpLmFkZENsYXNzKCdjaGFuZ2VDb2xvcjUnKVxyXG4gICAgfVxyXG4gICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPCA0NjAwKSB7XHJcbiAgICAgICQoJy5ib29rJykucmVtb3ZlQ2xhc3MoJ2NoYW5nZUNvbG9yNScpXHJcbiAgICB9XHJcbiAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDM0MDApIHtcclxuICAgICAgJCgnLmJvb2snKS5hZGRDbGFzcygnY2hhbmdlQ29sb3I0JylcclxuICAgIH1cclxuICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpIDwgMzQwMCkge1xyXG4gICAgICAkKCcuYm9vaycpLnJlbW92ZUNsYXNzKCdjaGFuZ2VDb2xvcjQnKVxyXG4gICAgfVxyXG4gICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAyMjAwKSB7XHJcbiAgICAgICQoJy5ib29rJykuYWRkQ2xhc3MoJ2NoYW5nZUNvbG9yMycpXHJcbiAgICB9XHJcbiAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA8IDIyMDApIHtcclxuICAgICAgJCgnLmJvb2snKS5yZW1vdmVDbGFzcygnY2hhbmdlQ29sb3IzJylcclxuICAgIH1cclxuICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gMTAwMCkge1xyXG4gICAgICAkKCcuYm9vaycpLmFkZENsYXNzKCdjaGFuZ2VDb2xvcjInKVxyXG4gICAgfVxyXG4gICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPCAxMDAwKSB7XHJcbiAgICAgICQoJy5ib29rJykucmVtb3ZlQ2xhc3MoJ2NoYW5nZUNvbG9yMicpXHJcbiAgICB9XHJcbiAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDApIHtcclxuICAgICAgJCgnLmJvb2snKS5hZGRDbGFzcygnY2hhbmdlQ29sb3IxJylcclxuICAgIH1cclxuICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpIDwgMCkge1xyXG4gICAgICAkKCcuYm9vaycpLnJlbW92ZUNsYXNzKCdjaGFuZ2VDb2xvcjEnKVxyXG4gICAgfVxyXG4gIH0pO1xyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMjkuXHJcbiAqL1xyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICQoJy5hcnJvdy13cmFwMScpLmRhdGEoeydvcGVuJzogZmFsc2V9KS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIGlmICgkKHRoaXMpLmRhdGEoKS5vcGVuKSB7XHJcbiAgICAgICQoJy5pbnRlci13aGljaC1pbWFnZXdyYXAxJykucmVtb3ZlQ2xhc3MoJ3JpZ2h0LW9uJyk7XHJcbiAgICAgICQodGhpcykuZGF0YSh7b3BlbjogZmFsc2V9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJy5pbnRlci13aGljaC1pbWFnZXdyYXAxJykuYWRkQ2xhc3MoJ3JpZ2h0LW9uJyk7XHJcbiAgICAgICQodGhpcykuZGF0YSh7b3BlbjogdHJ1ZX0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKCcuYXJyb3ctd3JhcDInKS5kYXRhKHsnb3Blbic6IGZhbHNlfSkub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICBpZiAoJCh0aGlzKS5kYXRhKCkub3Blbikge1xyXG4gICAgICAkKCcuaW50ZXItd2hpY2gtaW1hZ2V3cmFwMicpLnJlbW92ZUNsYXNzKCdsZWZ0LW9uJyk7XHJcbiAgICAgICQodGhpcykuZGF0YSh7b3BlbjogZmFsc2V9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJy5pbnRlci13aGljaC1pbWFnZXdyYXAyJykuYWRkQ2xhc3MoJ2xlZnQtb24nKTtcclxuICAgICAgJCh0aGlzKS5kYXRhKHtvcGVuOiB0cnVlfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMzEuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICB2YXIgY3VycmVudEluZGV4ID0gMDtcclxuICB2YXIgbmV4dEluZGV4ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gbW92ZURvd24oKXtcclxuXHJcbiAgICBpZihuZXh0SW5kZXggPj0gJCgnLmxpZmUtcGFnZScpLmxlbmd0aCl7XHJcbiAgICAgIG5leHRJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgICQoJy5saWZlLXBhZ2UnKS5lcShjdXJyZW50SW5kZXgtMSkucmVtb3ZlQ2xhc3MoJ2Rvd24gYW5pJykuYWRkQ2xhc3MoJ3VwJyk7XHJcbiAgICAkKCcubGlmZS1wYWdlJykuZXEoY3VycmVudEluZGV4KS5yZW1vdmVDbGFzcygnbWlkZGxlIGFuaScpLmFkZENsYXNzKCdkb3duIGFuaScpO1xyXG4gICAgJCgnLmxpZmUtcGFnZScpLmVxKG5leHRJbmRleCkucmVtb3ZlQ2xhc3MoJ3VwJykuYWRkQ2xhc3MoJ21pZGRsZSBhbmknKTtcclxuXHJcbiAgICBjdXJyZW50SW5kZXggPSBuZXh0SW5kZXg7XHJcbiAgICBuZXh0SW5kZXgrKztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1vdmVVcCgpe1xyXG5cclxuICAgIGlmKG5leHRJbmRleCA8PSAtMSl7XHJcbiAgICAgIG5leHRJbmRleCA9ICQoJy5saWZlLXBhZ2UnKS5sZW5ndGgtMTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgJCgnLmxpZmUtcGFnZScpLmVxKG5leHRJbmRleC0xKS5yZW1vdmVDbGFzcygnZG93biBhbmknKS5hZGRDbGFzcygndXAnKTtcclxuICAgICQoJy5saWZlLXBhZ2UnKS5lcShjdXJyZW50SW5kZXgpLnJlbW92ZUNsYXNzKCdtaWRkbGUgYW5pJykuYWRkQ2xhc3MoJ2Rvd24gYW5pJyk7XHJcbiAgICAkKCcubGlmZS1wYWdlJykuZXEobmV4dEluZGV4KS5yZW1vdmVDbGFzcygndXAnKS5hZGRDbGFzcygnbWlkZGxlIGFuaScpO1xyXG5cclxuICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcclxuICAgIG5leHRJbmRleC0tO1xyXG4gIH1cclxuXHJcbiAgdmFyIGFjdGl2ZUNsaWNrID0gZnVuY3Rpb24oZGlyZWN0aW9uKXtcclxuXHJcbiAgICB2YXIgZGlyID0gZGlyZWN0aW9uO1xyXG5cclxuICAgIGlmKCBkaXIgPT0gJ3VwJyApe1xyXG4gICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgICBtb3ZlRG93bigpO1xyXG4gICAgfSBlbHNlIGlmKCBkaXIgPT0gJ2Rvd24nICl7XHJcbiAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XHJcbiAgICAgIG1vdmVVcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciAkc2VsZWN0b3IgPSAkKCcuYXJyb3cuJyArIGRpcik7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAvLyDvv73vv73vv73vv73vv73UvO+/vVxyXG4gICAgICAkc2VsZWN0b3Iub25lKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgYWN0aXZlQ2xpY2soZGlyKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgfSwgNTAwKTtcclxuXHJcbiAgfTtcclxuXHJcblxyXG5cclxuICAkKCcuYXJyb3cudXAnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4KzE7XHJcbiAgICBtb3ZlRG93bigndXAnKTtcclxuICB9KTtcclxuICAkKCcuYXJyb3cuZG93bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcclxuICAgIG1vdmVVcCgnZG93bicpO1xyXG5cclxuICB9KTtcclxuXHJcbn0pOyIsIiQoZnVuY3Rpb24oKSB7XHJcblxyXG5cclxuICAkKCcuZ25iLWNsb3NlLWJ1dHRvbicpLmRhdGEoeydvcGVuJzogZmFsc2V9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgaWYgKCQodGhpcykuZGF0YSgpLm9wZW4pIHtcclxuICAgICAgJCgnLmduYi1vcGVuJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICQodGhpcykuZGF0YSh7b3BlbjogZmFsc2V9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJy5nbmItb3BlbicpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAkKHRoaXMpLmRhdGEoe29wZW46IHRydWV9KTtcclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbiIsIiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgLy/vv73vv73vv73vv70g77+977+9IO+/vdi977+9xq5cclxuICAkKHdpbmRvdykub24oJ21vdXNlZW50ZXInLGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcuaW50ZXItdG9wLXRpdGxlJykuY3NzKHtcclxuICAgICAgJ3RyYW5zZm9ybSc6J3RyYW5zbGF0ZVgoMCknLFxyXG4gICAgICAndHJhbnNpdGlvbic6J2FsbCAxcyBlYXNlLW91dCdcclxuICAgIH0pXHJcbiAgfSk7XHJcblxyXG5cclxuXHJcbnZhciBpO1xyXG52YXIgbGltaXQgPSA1MDA7XHJcblxyXG5mdW5jdGlvbiBzY3JvbGwoKXtcclxuXHJcbiAgJCgnLmludGVyLW1pZGRsZTEtYmcnKS5jc3Moe1xyXG4gICAgXCJ0cmFuc2Zvcm1cIjpcInRyYW5zbGF0ZTNkKDAsXCIgKyAoODAgKiAoaSAvIGxpbWl0KSkgKyBcInB4LDApXCJcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5pbnRlci1taWRkbGUxLWltYWdlLnR3bycpLmNzcyh7XHJcblxyXG4gICAgXCJ0cmFuc2Zvcm1cIjpcInRyYW5zbGF0ZTNkKDAsXCIgKyAoLTUwICogKGkgLyBsaW1pdCkpICsgXCJweCwwKVwiXHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcuaW50ZXItbWlkZGxlMS1pbWFnZS5mb3VyJykuY3NzKHtcclxuXHJcbiAgICBcInRyYW5zZm9ybVwiOlwidHJhbnNsYXRlM2QoMCxcIiArICgtMzAgKiAoaSAvIGxpbWl0KSkgKyBcInB4LDApXCJcclxuXHJcbiAgfSk7XHJcbn1cclxuXHJcbiQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgaSA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgc2Nyb2xsKCk7XHJcblxyXG59KTtcclxuXHJcbn0pOyJdfQ==
