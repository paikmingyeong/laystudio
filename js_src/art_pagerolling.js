/**
 * Created by Administrator on 2017-08-05.
 */

$(function(){

  // �����

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

    // eq()�� ���� ���� �־� �ָ� �� �������� ���ʴ�� ��Ī��Ŵ
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
      // ����Լ�
      $selector.one('click', function(){
        activeClick(dir);
      });

    }, 500);

  };


  // �����

  $('.arrow.up').one('click', function(){

    activeClick('up');

  });

  $('.arrow.down').one('click', function(){

    activeClick('left');

  });

})