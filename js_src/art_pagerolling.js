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