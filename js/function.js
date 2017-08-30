/**
 * Created by Administrator on 2017-08-05.
 */

$(function(){

  // 선언부

  var currentIndex = 0;
  var nextIndex = 0;

  function init(){
    $('.art-page').eq(0).addClass('center');
    $('.art-page').eq(1).addClass('up');
    $('.art-page').eq(2).addClass('up');
    $('.art-page').eq(3).addClass('up');
    $('.art-page').eq(4).addClass('down');

  }

  function moveLeft(){

    if(nextIndex >= $('.art-page').length){
      nextIndex = 0;
    }

    // eq()에 음수 값을 넣어 주면 뒷 순서부터 차례대로 매칭시킴
    $('.art-page').eq(currentIndex-1).removeClass('down ani').addClass('right');
    $('.art-page').eq(currentIndex).removeClass('center ani').addClass('left ani');
    $('.art-page').eq(nextIndex).removeClass('right').addClass('center ani');

    currentIndex = nextIndex;
    nextIndex++;
  }

  function moveRight(){

    if(nextIndex <= -1){
      nextIndex = $('.art-page').length-1;
    }

    $('.art-page').eq(nextIndex-1).removeClass('right ani').addClass('left');
    $('.art-page').eq(currentIndex).removeClass('center ani').addClass('right ani');
    $('.art-page').eq(nextIndex).removeClass('left').addClass('center ani');

    currentIndex = nextIndex;
    nextIndex--;
  }

  init();

  var activeClick = function(direction){

    var dir = direction;

    if( dir == 'right' ){
      nextIndex = currentIndex + 1;
      moveLeft();
    } else {
      nextIndex = currentIndex - 1;
      moveRight();
    }

    var $selector = $('.art-arrow.' + dir);

    setTimeout(function(){
      // 재귀함수
      $selector.one('click', function(){
        activeClick(dir);
      });

    }, 500);

  };


  // 실행부

  $('.arrow.up').one('click', function(){

    activeClick('up');

  });

  $('.arrow.down').one('click', function(){

    activeClick('left');

  });

})
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydF9wYWdlcm9sbGluZy5qcyIsImJvb2tfYmFja2dyb3VuZC5qcyIsImludGVyaW9yX3doaWNoLmpzIiwibWVudV9vcGVuLmpzIiwic2Nyb2xsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImZ1bmN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTA1LlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgLy8g77+977+977+977+977+977+9XHJcblxyXG4gIHZhciBjdXJyZW50SW5kZXggPSAwO1xyXG4gIHZhciBuZXh0SW5kZXggPSAwO1xyXG5cclxuICBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICAkKCcuYXJ0LXBhZ2UnKS5lcSgwKS5hZGRDbGFzcygnY2VudGVyJyk7XHJcbiAgICAkKCcuYXJ0LXBhZ2UnKS5lcSgxKS5hZGRDbGFzcygndXAnKTtcclxuICAgICQoJy5hcnQtcGFnZScpLmVxKDIpLmFkZENsYXNzKCd1cCcpO1xyXG4gICAgJCgnLmFydC1wYWdlJykuZXEoMykuYWRkQ2xhc3MoJ3VwJyk7XHJcbiAgICAkKCcuYXJ0LXBhZ2UnKS5lcSg0KS5hZGRDbGFzcygnZG93bicpO1xyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1vdmVMZWZ0KCl7XHJcblxyXG4gICAgaWYobmV4dEluZGV4ID49ICQoJy5hcnQtcGFnZScpLmxlbmd0aCl7XHJcbiAgICAgIG5leHRJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXEoKe+/ve+/vSDvv73vv73vv73vv70g77+977+977+977+9IO+/vda+77+9IO+/vda477+9IO+/ve+/vSDvv73vv73vv73vv73vv73vv73vv73vv70g77+977+977+9yrTvv73vv73vv70g77+977+9xKrvv73vv73FtFxyXG4gICAgJCgnLmFydC1wYWdlJykuZXEoY3VycmVudEluZGV4LTEpLnJlbW92ZUNsYXNzKCdkb3duIGFuaScpLmFkZENsYXNzKCdyaWdodCcpO1xyXG4gICAgJCgnLmFydC1wYWdlJykuZXEoY3VycmVudEluZGV4KS5yZW1vdmVDbGFzcygnY2VudGVyIGFuaScpLmFkZENsYXNzKCdsZWZ0IGFuaScpO1xyXG4gICAgJCgnLmFydC1wYWdlJykuZXEobmV4dEluZGV4KS5yZW1vdmVDbGFzcygncmlnaHQnKS5hZGRDbGFzcygnY2VudGVyIGFuaScpO1xyXG5cclxuICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcclxuICAgIG5leHRJbmRleCsrO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbW92ZVJpZ2h0KCl7XHJcblxyXG4gICAgaWYobmV4dEluZGV4IDw9IC0xKXtcclxuICAgICAgbmV4dEluZGV4ID0gJCgnLmFydC1wYWdlJykubGVuZ3RoLTE7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnLmFydC1wYWdlJykuZXEobmV4dEluZGV4LTEpLnJlbW92ZUNsYXNzKCdyaWdodCBhbmknKS5hZGRDbGFzcygnbGVmdCcpO1xyXG4gICAgJCgnLmFydC1wYWdlJykuZXEoY3VycmVudEluZGV4KS5yZW1vdmVDbGFzcygnY2VudGVyIGFuaScpLmFkZENsYXNzKCdyaWdodCBhbmknKTtcclxuICAgICQoJy5hcnQtcGFnZScpLmVxKG5leHRJbmRleCkucmVtb3ZlQ2xhc3MoJ2xlZnQnKS5hZGRDbGFzcygnY2VudGVyIGFuaScpO1xyXG5cclxuICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcclxuICAgIG5leHRJbmRleC0tO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpO1xyXG5cclxuICB2YXIgYWN0aXZlQ2xpY2sgPSBmdW5jdGlvbihkaXJlY3Rpb24pe1xyXG5cclxuICAgIHZhciBkaXIgPSBkaXJlY3Rpb247XHJcblxyXG4gICAgaWYoIGRpciA9PSAncmlnaHQnICl7XHJcbiAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgICBtb3ZlUmlnaHQoKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgJHNlbGVjdG9yID0gJCgnLmFydC1hcnJvdy4nICsgZGlyKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgIC8vIO+/ve+/ve+/ve+/ve+/vdS877+9XHJcbiAgICAgICRzZWxlY3Rvci5vbmUoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBhY3RpdmVDbGljayhkaXIpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB9LCA1MDApO1xyXG5cclxuICB9O1xyXG5cclxuXHJcbiAgLy8g77+977+977+977+977+977+9XHJcblxyXG4gICQoJy5hcnJvdy51cCcpLm9uZSgnY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIGFjdGl2ZUNsaWNrKCd1cCcpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLmFycm93LmRvd24nKS5vbmUoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICBhY3RpdmVDbGljaygnbGVmdCcpO1xyXG5cclxuICB9KTtcclxuXHJcbn0pIiwiJChmdW5jdGlvbigpIHtcclxuICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gNDYwMCkge1xyXG4gICAgICAkKCcuYm9vaycpLmFkZENsYXNzKCdjaGFuZ2VDb2xvcjUnKVxyXG4gICAgfVxyXG4gICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPCA0NjAwKSB7XHJcbiAgICAgICQoJy5ib29rJykucmVtb3ZlQ2xhc3MoJ2NoYW5nZUNvbG9yNScpXHJcbiAgICB9XHJcbiAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDM0MDApIHtcclxuICAgICAgJCgnLmJvb2snKS5hZGRDbGFzcygnY2hhbmdlQ29sb3I0JylcclxuICAgIH1cclxuICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpIDwgMzQwMCkge1xyXG4gICAgICAkKCcuYm9vaycpLnJlbW92ZUNsYXNzKCdjaGFuZ2VDb2xvcjQnKVxyXG4gICAgfVxyXG4gICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAyMjAwKSB7XHJcbiAgICAgICQoJy5ib29rJykuYWRkQ2xhc3MoJ2NoYW5nZUNvbG9yMycpXHJcbiAgICB9XHJcbiAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA8IDIyMDApIHtcclxuICAgICAgJCgnLmJvb2snKS5yZW1vdmVDbGFzcygnY2hhbmdlQ29sb3IzJylcclxuICAgIH1cclxuICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gMTAwMCkge1xyXG4gICAgICAkKCcuYm9vaycpLmFkZENsYXNzKCdjaGFuZ2VDb2xvcjInKVxyXG4gICAgfVxyXG4gICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPCAxMDAwKSB7XHJcbiAgICAgICQoJy5ib29rJykucmVtb3ZlQ2xhc3MoJ2NoYW5nZUNvbG9yMicpXHJcbiAgICB9XHJcbiAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDApIHtcclxuICAgICAgJCgnLmJvb2snKS5hZGRDbGFzcygnY2hhbmdlQ29sb3IxJylcclxuICAgIH1cclxuICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpIDwgMCkge1xyXG4gICAgICAkKCcuYm9vaycpLnJlbW92ZUNsYXNzKCdjaGFuZ2VDb2xvcjEnKVxyXG4gICAgfVxyXG4gIH0pO1xyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMjkuXHJcbiAqL1xyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICQoJy5hcnJvdy13cmFwMScpLmRhdGEoeydvcGVuJzogZmFsc2V9KS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIGlmICgkKHRoaXMpLmRhdGEoKS5vcGVuKSB7XHJcbiAgICAgICQoJy5pbnRlci13aGljaC1pbWFnZXdyYXAxJykucmVtb3ZlQ2xhc3MoJ3JpZ2h0LW9uJyk7XHJcbiAgICAgICQodGhpcykuZGF0YSh7b3BlbjogZmFsc2V9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJy5pbnRlci13aGljaC1pbWFnZXdyYXAxJykuYWRkQ2xhc3MoJ3JpZ2h0LW9uJyk7XHJcbiAgICAgICQodGhpcykuZGF0YSh7b3BlbjogdHJ1ZX0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKCcuYXJyb3ctd3JhcDInKS5kYXRhKHsnb3Blbic6IGZhbHNlfSkub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICBpZiAoJCh0aGlzKS5kYXRhKCkub3Blbikge1xyXG4gICAgICAkKCcuaW50ZXItd2hpY2gtaW1hZ2V3cmFwMicpLnJlbW92ZUNsYXNzKCdsZWZ0LW9uJyk7XHJcbiAgICAgICQodGhpcykuZGF0YSh7b3BlbjogZmFsc2V9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJy5pbnRlci13aGljaC1pbWFnZXdyYXAyJykuYWRkQ2xhc3MoJ2xlZnQtb24nKTtcclxuICAgICAgJCh0aGlzKS5kYXRhKHtvcGVuOiB0cnVlfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG59KTsiLCIkKGZ1bmN0aW9uKCkge1xyXG5cclxuXHJcbiAgJCgnLmduYi1jbG9zZS1idXR0b24nKS5kYXRhKHsnb3Blbic6IGZhbHNlfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGlmICgkKHRoaXMpLmRhdGEoKS5vcGVuKSB7XHJcbiAgICAgICQoJy5nbmItb3BlbicpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAkKHRoaXMpLmRhdGEoe29wZW46IGZhbHNlfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcuZ25iLW9wZW4nKS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgJCh0aGlzKS5kYXRhKHtvcGVuOiB0cnVlfSk7XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG4iLCIkKGZ1bmN0aW9uKCl7XHJcblxyXG4gIC8v77+977+977+977+9IO+/ve+/vSDvv73Yve+/vcauXHJcbiAgJCh3aW5kb3cpLm9uKCdtb3VzZWVudGVyJyxmdW5jdGlvbigpe1xyXG4gICAgJCgnLmludGVyLXRvcC10aXRsZScpLmNzcyh7XHJcbiAgICAgICd0cmFuc2Zvcm0nOid0cmFuc2xhdGVYKDApJyxcclxuICAgICAgJ3RyYW5zaXRpb24nOidhbGwgMXMgZWFzZS1vdXQnXHJcbiAgICB9KVxyXG4gIH0pO1xyXG5cclxuXHJcblxyXG52YXIgaTtcclxudmFyIGxpbWl0ID0gNTAwO1xyXG5cclxuZnVuY3Rpb24gc2Nyb2xsKCl7XHJcblxyXG4gICQoJy5pbnRlci1taWRkbGUxLWJnJykuY3NzKHtcclxuICAgIFwidHJhbnNmb3JtXCI6XCJ0cmFuc2xhdGUzZCgwLFwiICsgKDgwICogKGkgLyBsaW1pdCkpICsgXCJweCwwKVwiXHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcuaW50ZXItbWlkZGxlMS1pbWFnZS50d28nKS5jc3Moe1xyXG5cclxuICAgIFwidHJhbnNmb3JtXCI6XCJ0cmFuc2xhdGUzZCgwLFwiICsgKC01MCAqIChpIC8gbGltaXQpKSArIFwicHgsMClcIlxyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLmludGVyLW1pZGRsZTEtaW1hZ2UuZm91cicpLmNzcyh7XHJcblxyXG4gICAgXCJ0cmFuc2Zvcm1cIjpcInRyYW5zbGF0ZTNkKDAsXCIgKyAoLTMwICogKGkgLyBsaW1pdCkpICsgXCJweCwwKVwiXHJcblxyXG4gIH0pO1xyXG59XHJcblxyXG4kKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKCl7XHJcblxyXG4gIGkgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gIHNjcm9sbCgpO1xyXG5cclxufSk7XHJcblxyXG59KTsiXX0=
