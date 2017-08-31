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
      // Àç±ÍÇÔ¼ö
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