
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

      if( dir == 'one' ){
        nextIndex = currentIndex + 1;
        moveDown();
      } else{
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

  $('.inter-which-arrow-wrap1').data({'open': false}).on('click', function(){

    console.log(1);

    if ( !$(this).data().open ) {
      $('.inter-which-imagewrap1').css({
        width:'1600px',
        'z-index':'20'
      });
      $(this).data({open: true});

    } else if ( $(this).data().open ){

      $('.inter-which-imagewrap1').css({
        width:'800px'
      });
      $(this).data({open: false});

      setTimeout(function(){
        $('.inter-which-imagewrap1').css({
          'z-index':10
        });
      }, 1000);

    }
  });

  $('.inter-which-arrow-wrap2').data({'open': false}).on('click', function(){

    if (!$(this).data().open) {

      $('.inter-which-imagewrap2').css({
        'z-index':'20',
      left:0,
      width:'1600px'
      });
      $(this).data({open: true});

    } else if ( $(this).data().open){

      $('.inter-which-imagewrap2').css({
        width:'800px',
        left:'800px'
      });
      $(this).data({open: false});

      setTimeout(function(){
        $('.inter-which-imagewrap2').css({
          'z-index':10
        });
      }, 1000);
    }

  });

  //$('.arrow-wrap1').click(function(){
  //  $('.inter-which-imagewrap1').animate({
  //    width:'1600px','z-index':'2'
  //  })
  //
  //});
  //

});
$(function(){

  // 선언부

  var currentIndex4 = 0;
  var nextIndex4 = 0;


  function moveDown(){

    if(nextIndex4 >= $('.life-page').length){
      nextIndex4 = 0;
    }

    // eq()에 음수 값을 넣어 주면 뒷 순서부터 차례대로 매칭시킴
    $('.life-page').eq(currentIndex4-1).removeClass('down ani').addClass('up');
    $('.life-page').eq(currentIndex4).removeClass('middle ani').addClass('down ani');
    $('.life-page').eq(nextIndex4).removeClass('up').addClass('middle ani');

    currentIndex4 = nextIndex4;
    nextIndex4++;
  }

  function moveUp(){

    if(nextIndex4 <= -1){
      nextIndex4 = $('.life-page').length-1;
    }

    $('.life-page').eq(nextIndex4-1).removeClass('up ani').addClass('down');
    $('.life-page').eq(currentIndex4).removeClass('middle ani').addClass('up ani');
    $('.life-page').eq(nextIndex4).removeClass('down').addClass('middle ani');

    currentIndex4 = nextIndex4;
    nextIndex4--;
  }



  var activeClick = function(direction){

    var dir4 = direction;

    if( dir4 == 'up' ){
      nextIndex4 = currentIndex4 + 1;
      moveDown();
    } else {
      nextIndex4 = currentIndex4 - 1;
      moveUp();
    }

    var $selector = $('.artup.' + dir4);

    setTimeout(function(){
      // 재귀함수
      $selector.one('click', function(){
        activeClick(dir4);
      });

    }, 500);

  };


  // 실행부


  $('.arrow.up').on('click', function(){

    nextIndex4 = currentIndex4 + 1;
    moveDown('up');

  });

  $('.arrow.down').on('click', function(){

    nextIndex4 = currentIndex4 - 1;
    moveUp('down');

  });


  var calculateRatio = {
    // jQuery DOM 대상을 저장하는 프로퍼티

    $imageTop : $('.life-image-big','.life-image2-big'),
    $imageBig : $('.life-image-big-image','.life-image2-big-image'),
    $imageThumb : $('.life-image-list-item','.life-image2-list-item'),

    // 해당 부분의 값을 계산하는 메소드
    // 마스크 영역 계산
    areaValue : function(){
      this.areaWidth = parseInt(this.$imageTop.css('width'));
      this.areaHeight = parseInt(this.$imageTop.css('height'));
      this.areaRatio = this.areaWidth / this.areaHeight;
    },
    // 이미지 계산
    imageValue : function( $image ){
      this.imageWidth = parseInt( $image.css('width') );
      this.imageHeight = parseInt( $image.css('height') );
      this.imageRatio = this.imageWidth / this.imageHeight;
    },
    // 큰 이미지에 적용
    applyBig : function(){
      this.areaValue();
      this.imageValue(this.$imageBig);
      if( this.areaRatio > this.imageRatio ){
        this.$imageBig.removeClass('full-height').addClass('full-width');
      } else {
        this.$imageBig.removeClass('full-width').addClass('full-height');
      }
    },
    // 작은 이미지에 적용
    applyThumb : function(){

      this.areaValue();

      for(var i=0; i<this.$imageThumb.length; i++){

        this.imageValue(this.$imageThumb.eq(i));

        if( this.areaRatio > this.imageRatio ){
          this.$imageThumb.eq(i).addClass('full-width');
        } else{
          this.$imageThumb.eq(i).addClass('full-height');
        }
      }
    },
    // 마우스 오버시 이미지 변경 함수
    changeImage : function( $overImage ){
      var src = $overImage.children().attr('src');
      $('.life-image-big-image').attr('src', src);
    },
    changeImage2 : function( $overImage ){
      var src2 = $overImage.children().attr('src');
      $('.life-image2-big-image').attr('src', src2);

    }
  };
  // 함수 실행
  calculateRatio.applyBig();
  calculateRatio.applyThumb();

  // 이벤트 실행
  $('.life-image-list-wrap').on('click', function(){
    calculateRatio.changeImage( $(this) );
    //calculateRatio.changeImage2( $(this) );
    calculateRatio.applyBig();
  });

  $('.life-image2-list-wrap').on('click', function(){
    //calculateRatio.changeImage( $(this) );
    calculateRatio.changeImage2( $(this) );
    calculateRatio.applyBig();
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydF9pbWFnZS5qcyIsImFydF9wYWdlcm9sbGluZy5qcyIsImJvb2tfYmFja2dyb3VuZC5qcyIsImludGVyaW9yX3doaWNoLmpzIiwibGlmZS5qcyIsIm1lbnVfb3Blbi5qcyIsInNjcm9sbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJmdW5jdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0wNS5cclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIC8vIO+/ve+/ve+/ve+/ve+/ve+/vVxyXG5cclxuICB2YXIgY3VycmVudEluZGV4ID0gMDtcclxuICB2YXIgbmV4dEluZGV4ID0gMDtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gbW92ZURvd24oKXtcclxuXHJcbiAgICAgIGlmKG5leHRJbmRleCA+PSAkKCcuYXJ0LXBhZ2UtaW5mbycpLmxlbmd0aCl7XHJcbiAgICAgICAgbmV4dEluZGV4ID0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gZXEoKe+/ve+/vSDvv73vv73vv73vv70g77+977+977+977+9IO+/vda+77+9IO+/vda477+9IO+/ve+/vSDvv73vv73vv73vv73vv73vv73vv73vv70g77+977+977+9yrTvv73vv73vv70g77+977+9xKrvv73vv73FtFxyXG4gICAgICAkKCcuYXJ0LXBhZ2UtaW5mbycpLmVxKGN1cnJlbnRJbmRleC0xKS5yZW1vdmVDbGFzcygnZG93biBhbmknKS5hZGRDbGFzcygndXAnKTtcclxuICAgICAgJCgnLmFydC1wYWdlLWluZm8nKS5lcShjdXJyZW50SW5kZXgpLnJlbW92ZUNsYXNzKCdtaWRkbGUgYW5pJykuYWRkQ2xhc3MoJ2Rvd24gYW5pJyk7XHJcbiAgICAgICQoJy5hcnQtcGFnZS1pbmZvJykuZXEobmV4dEluZGV4KS5yZW1vdmVDbGFzcygndXAnKS5hZGRDbGFzcygnbWlkZGxlIGFuaScpO1xyXG5cclxuICAgICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xyXG4gICAgICBuZXh0SW5kZXgrKztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtb3ZlVXAoKXtcclxuXHJcbiAgICAgIGlmKG5leHRJbmRleCA8PSAtMSl7XHJcbiAgICAgICAgbmV4dEluZGV4ID0gJCgnLmFydC1wYWdlLWluZm8nKS5sZW5ndGgtMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJCgnLmFydC1wYWdlLWluZm8nKS5lcShuZXh0SW5kZXgtMSkucmVtb3ZlQ2xhc3MoJ3VwIGFuaScpLmFkZENsYXNzKCdkb3duJyk7XHJcbiAgICAgICQoJy5hcnQtcGFnZS1pbmZvJykuZXEoY3VycmVudEluZGV4KS5yZW1vdmVDbGFzcygnbWlkZGxlIGFuaScpLmFkZENsYXNzKCd1cCBhbmknKTtcclxuICAgICAgJCgnLmFydC1wYWdlLWluZm8nKS5lcShuZXh0SW5kZXgpLnJlbW92ZUNsYXNzKCdkb3duJykuYWRkQ2xhc3MoJ21pZGRsZSBhbmknKTtcclxuXHJcbiAgICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcclxuICAgICAgbmV4dEluZGV4LS07XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICB2YXIgYWN0aXZlQ2xpY2sgPSBmdW5jdGlvbihkaXJlY3Rpb24pe1xyXG5cclxuICAgICAgdmFyIGRpciA9IGRpcmVjdGlvbjtcclxuXHJcbiAgICAgIGlmKCBkaXIgPT0gJ29uZScgKXtcclxuICAgICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgICAgIG1vdmVEb3duKCk7XHJcbiAgICAgIH0gZWxzZXtcclxuICAgICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgICAgIG1vdmVVcCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgJHNlbGVjdG9yID0gJCgnLmFydHVwLicgKyBkaXIpO1xyXG5cclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vIO+/ve+/ve+/ve+/ve+/vdS877+9XHJcbiAgICAgICAgJHNlbGVjdG9yLm9uZSgnY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgYWN0aXZlQ2xpY2soZGlyKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIH0sIDUwMCk7XHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgLy8g77+977+977+977+977+977+9XHJcblxyXG5cclxuICAgICQoJy5hcnR1cC5vbmUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcclxuICAgICAgbW92ZURvd24oJ3VwJyk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmFydGRvd24ub25lJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XHJcbiAgICAgIG1vdmVVcCgnZG93bicpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgLy8gaW1hZ2UxXHJcblxyXG4gICAgdmFyIGN1cnJlbnRJbmRleDIgPSAwO1xyXG4gICAgdmFyIG5leHRJbmRleDIgPSAwO1xyXG5cclxuICAgIGZ1bmN0aW9uIG1vdmVEb3duMigpe1xyXG5cclxuICAgICAgaWYobmV4dEluZGV4MiA+PSAkKCcuYXJ0LWltYWdlMS1ib3gxJykubGVuZ3RoKXtcclxuICAgICAgICBuZXh0SW5kZXgyID0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gZXEoKe+/ve+/vSDvv73vv73vv73vv70g77+977+977+977+9IO+/vda+77+9IO+/vda477+9IO+/ve+/vSDvv73vv73vv73vv73vv73vv73vv73vv70g77+977+977+9yrTvv73vv73vv70g77+977+9xKrvv73vv73FtFxyXG4gICAgICAkKCcuYXJ0LWltYWdlMS1ib3gxJykuZXEoY3VycmVudEluZGV4Mi0xKS5yZW1vdmVDbGFzcygnZG93biBhbmknKS5hZGRDbGFzcygndXAnKTtcclxuICAgICAgJCgnLmFydC1pbWFnZTEtYm94MScpLmVxKGN1cnJlbnRJbmRleDIpLnJlbW92ZUNsYXNzKCdtaWRkbGUgYW5pJykuYWRkQ2xhc3MoJ2Rvd24gYW5pJyk7XHJcbiAgICAgICQoJy5hcnQtaW1hZ2UxLWJveDEnKS5lcShuZXh0SW5kZXgyKS5yZW1vdmVDbGFzcygndXAnKS5hZGRDbGFzcygnbWlkZGxlIGFuaScpO1xyXG5cclxuICAgICAgY3VycmVudEluZGV4MiA9IG5leHRJbmRleDI7XHJcbiAgICAgIG5leHRJbmRleDIrKztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtb3ZlVXAyKCl7XHJcblxyXG4gICAgICBpZihuZXh0SW5kZXgyIDw9IC0xKXtcclxuICAgICAgICBuZXh0SW5kZXgyID0gJCgnLmFydC1pbWFnZTEtYm94MScpLmxlbmd0aC0xO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAkKCcuYXJ0LWltYWdlMS1ib3gxJykuZXEobmV4dEluZGV4Mi0xKS5yZW1vdmVDbGFzcygndXAgYW5pJykuYWRkQ2xhc3MoJ2Rvd24nKTtcclxuICAgICAgJCgnLmFydC1pbWFnZTEtYm94MScpLmVxKGN1cnJlbnRJbmRleDIpLnJlbW92ZUNsYXNzKCdtaWRkbGUgYW5pJykuYWRkQ2xhc3MoJ3VwIGFuaScpO1xyXG4gICAgICAkKCcuYXJ0LWltYWdlMS1ib3gxJykuZXEobmV4dEluZGV4MikucmVtb3ZlQ2xhc3MoJ2Rvd24nKS5hZGRDbGFzcygnbWlkZGxlIGFuaScpO1xyXG5cclxuICAgICAgY3VycmVudEluZGV4MiA9IG5leHRJbmRleDI7XHJcbiAgICAgIG5leHRJbmRleDItLTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdmFyIGFjdGl2ZUNsaWNrMiA9IGZ1bmN0aW9uKGRpcmVjdGlvbil7XHJcblxyXG4gICAgICB2YXIgZGlyMiA9IGRpcmVjdGlvbjtcclxuXHJcbiAgICAgIGlmKCBkaXIyID09ICd1cCcgKXtcclxuICAgICAgICBuZXh0SW5kZXgyID0gY3VycmVudEluZGV4MiArIDE7XHJcbiAgICAgICAgbW92ZURvd24yKCk7XHJcbiAgICAgIH0gZWxzZSBpZiggZGlyMiA9PSAnZG93bicgKXtcclxuICAgICAgICBuZXh0SW5kZXgyID0gY3VycmVudEluZGV4MiAtIDE7XHJcbiAgICAgICAgbW92ZVVwMigpO1xyXG4gICAgICB9XHJcbiAgICAgIHZhciAkc2VsZWN0b3IyID0gJCgnLmFydHVwLicgKyBkaXIyKTtcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAvLyDvv73vv73vv73vv73vv73UvO+/vVxyXG4gICAgICAgICRzZWxlY3RvcjIub25lKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICBhY3RpdmVDbGljazIoZGlyMik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICB9LCA1MDApO1xyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIC8vIO+/ve+/ve+/ve+/ve+/ve+/vVxyXG5cclxuICAkKCcuYXJ0dXAudGhyZWUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIG5leHRJbmRleDIgPSBjdXJyZW50SW5kZXgyICsgMTtcclxuICAgIG1vdmVEb3duMigndXAnKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5hcnRkb3duLnRocmVlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICBuZXh0SW5kZXgyID0gY3VycmVudEluZGV4MiAtIDE7XHJcbiAgICBtb3ZlVXAyKCdkb3duJyk7XHJcblxyXG4gIH0pO1xyXG5cclxuXHJcbn0pOyIsIiQoZnVuY3Rpb24oKSB7XHJcbiAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDQ2MDApIHtcclxuICAgICAgJCgnLmJvb2snKS5hZGRDbGFzcygnY2hhbmdlQ29sb3I1JylcclxuICAgIH1cclxuICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpIDwgNDYwMCkge1xyXG4gICAgICAkKCcuYm9vaycpLnJlbW92ZUNsYXNzKCdjaGFuZ2VDb2xvcjUnKVxyXG4gICAgfVxyXG4gICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAzNDAwKSB7XHJcbiAgICAgICQoJy5ib29rJykuYWRkQ2xhc3MoJ2NoYW5nZUNvbG9yNCcpXHJcbiAgICB9XHJcbiAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA8IDM0MDApIHtcclxuICAgICAgJCgnLmJvb2snKS5yZW1vdmVDbGFzcygnY2hhbmdlQ29sb3I0JylcclxuICAgIH1cclxuICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gMjIwMCkge1xyXG4gICAgICAkKCcuYm9vaycpLmFkZENsYXNzKCdjaGFuZ2VDb2xvcjMnKVxyXG4gICAgfVxyXG4gICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPCAyMjAwKSB7XHJcbiAgICAgICQoJy5ib29rJykucmVtb3ZlQ2xhc3MoJ2NoYW5nZUNvbG9yMycpXHJcbiAgICB9XHJcbiAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDEwMDApIHtcclxuICAgICAgJCgnLmJvb2snKS5hZGRDbGFzcygnY2hhbmdlQ29sb3IyJylcclxuICAgIH1cclxuICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpIDwgMTAwMCkge1xyXG4gICAgICAkKCcuYm9vaycpLnJlbW92ZUNsYXNzKCdjaGFuZ2VDb2xvcjInKVxyXG4gICAgfVxyXG4gICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAwKSB7XHJcbiAgICAgICQoJy5ib29rJykuYWRkQ2xhc3MoJ2NoYW5nZUNvbG9yMScpXHJcbiAgICB9XHJcbiAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA8IDApIHtcclxuICAgICAgJCgnLmJvb2snKS5yZW1vdmVDbGFzcygnY2hhbmdlQ29sb3IxJylcclxuICAgIH1cclxuICB9KTtcclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTI5LlxyXG4gKi9cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAkKCcuaW50ZXItd2hpY2gtYXJyb3ctd3JhcDEnKS5kYXRhKHsnb3Blbic6IGZhbHNlfSkub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICBjb25zb2xlLmxvZygxKTtcclxuXHJcbiAgICBpZiAoICEkKHRoaXMpLmRhdGEoKS5vcGVuICkge1xyXG4gICAgICAkKCcuaW50ZXItd2hpY2gtaW1hZ2V3cmFwMScpLmNzcyh7XHJcbiAgICAgICAgd2lkdGg6JzE2MDBweCcsXHJcbiAgICAgICAgJ3otaW5kZXgnOicyMCdcclxuICAgICAgfSk7XHJcbiAgICAgICQodGhpcykuZGF0YSh7b3BlbjogdHJ1ZX0pO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoICQodGhpcykuZGF0YSgpLm9wZW4gKXtcclxuXHJcbiAgICAgICQoJy5pbnRlci13aGljaC1pbWFnZXdyYXAxJykuY3NzKHtcclxuICAgICAgICB3aWR0aDonODAwcHgnXHJcbiAgICAgIH0pO1xyXG4gICAgICAkKHRoaXMpLmRhdGEoe29wZW46IGZhbHNlfSk7XHJcblxyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLmludGVyLXdoaWNoLWltYWdld3JhcDEnKS5jc3Moe1xyXG4gICAgICAgICAgJ3otaW5kZXgnOjEwXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG5cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJCgnLmludGVyLXdoaWNoLWFycm93LXdyYXAyJykuZGF0YSh7J29wZW4nOiBmYWxzZX0pLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgaWYgKCEkKHRoaXMpLmRhdGEoKS5vcGVuKSB7XHJcblxyXG4gICAgICAkKCcuaW50ZXItd2hpY2gtaW1hZ2V3cmFwMicpLmNzcyh7XHJcbiAgICAgICAgJ3otaW5kZXgnOicyMCcsXHJcbiAgICAgIGxlZnQ6MCxcclxuICAgICAgd2lkdGg6JzE2MDBweCdcclxuICAgICAgfSk7XHJcbiAgICAgICQodGhpcykuZGF0YSh7b3BlbjogdHJ1ZX0pO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoICQodGhpcykuZGF0YSgpLm9wZW4pe1xyXG5cclxuICAgICAgJCgnLmludGVyLXdoaWNoLWltYWdld3JhcDInKS5jc3Moe1xyXG4gICAgICAgIHdpZHRoOic4MDBweCcsXHJcbiAgICAgICAgbGVmdDonODAwcHgnXHJcbiAgICAgIH0pO1xyXG4gICAgICAkKHRoaXMpLmRhdGEoe29wZW46IGZhbHNlfSk7XHJcblxyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLmludGVyLXdoaWNoLWltYWdld3JhcDInKS5jc3Moe1xyXG4gICAgICAgICAgJ3otaW5kZXgnOjEwXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbiAgLy8kKCcuYXJyb3ctd3JhcDEnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gIC8vICAkKCcuaW50ZXItd2hpY2gtaW1hZ2V3cmFwMScpLmFuaW1hdGUoe1xyXG4gIC8vICAgIHdpZHRoOicxNjAwcHgnLCd6LWluZGV4JzonMidcclxuICAvLyAgfSlcclxuICAvL1xyXG4gIC8vfSk7XHJcbiAgLy9cclxuXHJcbn0pOyIsIiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgLy8g77+977+977+977+977+977+9XHJcblxyXG4gIHZhciBjdXJyZW50SW5kZXg0ID0gMDtcclxuICB2YXIgbmV4dEluZGV4NCA9IDA7XHJcblxyXG5cclxuICBmdW5jdGlvbiBtb3ZlRG93bigpe1xyXG5cclxuICAgIGlmKG5leHRJbmRleDQgPj0gJCgnLmxpZmUtcGFnZScpLmxlbmd0aCl7XHJcbiAgICAgIG5leHRJbmRleDQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVxKCnvv73vv70g77+977+977+977+9IO+/ve+/ve+/ve+/vSDvv73Wvu+/vSDvv73WuO+/vSDvv73vv70g77+977+977+977+977+977+977+977+9IO+/ve+/ve+/vcq077+977+977+9IO+/ve+/vcSq77+977+9xbRcclxuICAgICQoJy5saWZlLXBhZ2UnKS5lcShjdXJyZW50SW5kZXg0LTEpLnJlbW92ZUNsYXNzKCdkb3duIGFuaScpLmFkZENsYXNzKCd1cCcpO1xyXG4gICAgJCgnLmxpZmUtcGFnZScpLmVxKGN1cnJlbnRJbmRleDQpLnJlbW92ZUNsYXNzKCdtaWRkbGUgYW5pJykuYWRkQ2xhc3MoJ2Rvd24gYW5pJyk7XHJcbiAgICAkKCcubGlmZS1wYWdlJykuZXEobmV4dEluZGV4NCkucmVtb3ZlQ2xhc3MoJ3VwJykuYWRkQ2xhc3MoJ21pZGRsZSBhbmknKTtcclxuXHJcbiAgICBjdXJyZW50SW5kZXg0ID0gbmV4dEluZGV4NDtcclxuICAgIG5leHRJbmRleDQrKztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1vdmVVcCgpe1xyXG5cclxuICAgIGlmKG5leHRJbmRleDQgPD0gLTEpe1xyXG4gICAgICBuZXh0SW5kZXg0ID0gJCgnLmxpZmUtcGFnZScpLmxlbmd0aC0xO1xyXG4gICAgfVxyXG5cclxuICAgICQoJy5saWZlLXBhZ2UnKS5lcShuZXh0SW5kZXg0LTEpLnJlbW92ZUNsYXNzKCd1cCBhbmknKS5hZGRDbGFzcygnZG93bicpO1xyXG4gICAgJCgnLmxpZmUtcGFnZScpLmVxKGN1cnJlbnRJbmRleDQpLnJlbW92ZUNsYXNzKCdtaWRkbGUgYW5pJykuYWRkQ2xhc3MoJ3VwIGFuaScpO1xyXG4gICAgJCgnLmxpZmUtcGFnZScpLmVxKG5leHRJbmRleDQpLnJlbW92ZUNsYXNzKCdkb3duJykuYWRkQ2xhc3MoJ21pZGRsZSBhbmknKTtcclxuXHJcbiAgICBjdXJyZW50SW5kZXg0ID0gbmV4dEluZGV4NDtcclxuICAgIG5leHRJbmRleDQtLTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgdmFyIGFjdGl2ZUNsaWNrID0gZnVuY3Rpb24oZGlyZWN0aW9uKXtcclxuXHJcbiAgICB2YXIgZGlyNCA9IGRpcmVjdGlvbjtcclxuXHJcbiAgICBpZiggZGlyNCA9PSAndXAnICl7XHJcbiAgICAgIG5leHRJbmRleDQgPSBjdXJyZW50SW5kZXg0ICsgMTtcclxuICAgICAgbW92ZURvd24oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5leHRJbmRleDQgPSBjdXJyZW50SW5kZXg0IC0gMTtcclxuICAgICAgbW92ZVVwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyICRzZWxlY3RvciA9ICQoJy5hcnR1cC4nICsgZGlyNCk7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAvLyDvv73vv73vv73vv73vv73UvO+/vVxyXG4gICAgICAkc2VsZWN0b3Iub25lKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgYWN0aXZlQ2xpY2soZGlyNCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH0sIDUwMCk7XHJcblxyXG4gIH07XHJcblxyXG5cclxuICAvLyDvv73vv73vv73vv73vv73vv71cclxuXHJcblxyXG4gICQoJy5hcnJvdy51cCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgbmV4dEluZGV4NCA9IGN1cnJlbnRJbmRleDQgKyAxO1xyXG4gICAgbW92ZURvd24oJ3VwJyk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcuYXJyb3cuZG93bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgbmV4dEluZGV4NCA9IGN1cnJlbnRJbmRleDQgLSAxO1xyXG4gICAgbW92ZVVwKCdkb3duJyk7XHJcblxyXG4gIH0pO1xyXG5cclxuXHJcbiAgdmFyIGNhbGN1bGF0ZVJhdGlvID0ge1xyXG4gICAgLy8galF1ZXJ5IERPTSDvv73vv73vv73vv73vv73vv70g77+977+977+977+977+9z7Tvv70g77+977+977+977+977+977+9xrxcclxuXHJcbiAgICAkaW1hZ2VUb3AgOiAkKCcubGlmZS1pbWFnZS1iaWcnLCcubGlmZS1pbWFnZTItYmlnJyksXHJcbiAgICAkaW1hZ2VCaWcgOiAkKCcubGlmZS1pbWFnZS1iaWctaW1hZ2UnLCcubGlmZS1pbWFnZTItYmlnLWltYWdlJyksXHJcbiAgICAkaW1hZ2VUaHVtYiA6ICQoJy5saWZlLWltYWdlLWxpc3QtaXRlbScsJy5saWZlLWltYWdlMi1saXN0LWl0ZW0nKSxcclxuXHJcbiAgICAvLyDvv73YtO+/vSDvv73Ouu+/ve+/ve+/vSDvv73vv73vv73vv70g77+977+977+977+977+9z7Tvv70g77+93rzSte+/vVxyXG4gICAgLy8g77+977+977+977+9xakg77+977+977+977+9IO+/ve+/ve+/ve+/vVxyXG4gICAgYXJlYVZhbHVlIDogZnVuY3Rpb24oKXtcclxuICAgICAgdGhpcy5hcmVhV2lkdGggPSBwYXJzZUludCh0aGlzLiRpbWFnZVRvcC5jc3MoJ3dpZHRoJykpO1xyXG4gICAgICB0aGlzLmFyZWFIZWlnaHQgPSBwYXJzZUludCh0aGlzLiRpbWFnZVRvcC5jc3MoJ2hlaWdodCcpKTtcclxuICAgICAgdGhpcy5hcmVhUmF0aW8gPSB0aGlzLmFyZWFXaWR0aCAvIHRoaXMuYXJlYUhlaWdodDtcclxuICAgIH0sXHJcbiAgICAvLyDvv73Mue+/ve+/ve+/vSDvv73vv73vv73vv71cclxuICAgIGltYWdlVmFsdWUgOiBmdW5jdGlvbiggJGltYWdlICl7XHJcbiAgICAgIHRoaXMuaW1hZ2VXaWR0aCA9IHBhcnNlSW50KCAkaW1hZ2UuY3NzKCd3aWR0aCcpICk7XHJcbiAgICAgIHRoaXMuaW1hZ2VIZWlnaHQgPSBwYXJzZUludCggJGltYWdlLmNzcygnaGVpZ2h0JykgKTtcclxuICAgICAgdGhpcy5pbWFnZVJhdGlvID0gdGhpcy5pbWFnZVdpZHRoIC8gdGhpcy5pbWFnZUhlaWdodDtcclxuICAgIH0sXHJcbiAgICAvLyDFqyDvv73Mue+/ve+/ve+/ve+/ve+/vSDvv73vv73vv73vv71cclxuICAgIGFwcGx5QmlnIDogZnVuY3Rpb24oKXtcclxuICAgICAgdGhpcy5hcmVhVmFsdWUoKTtcclxuICAgICAgdGhpcy5pbWFnZVZhbHVlKHRoaXMuJGltYWdlQmlnKTtcclxuICAgICAgaWYoIHRoaXMuYXJlYVJhdGlvID4gdGhpcy5pbWFnZVJhdGlvICl7XHJcbiAgICAgICAgdGhpcy4kaW1hZ2VCaWcucmVtb3ZlQ2xhc3MoJ2Z1bGwtaGVpZ2h0JykuYWRkQ2xhc3MoJ2Z1bGwtd2lkdGgnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLiRpbWFnZUJpZy5yZW1vdmVDbGFzcygnZnVsbC13aWR0aCcpLmFkZENsYXNzKCdmdWxsLWhlaWdodCcpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8g77+977+977+977+9IO+/vcy577+977+977+977+977+9IO+/ve+/ve+/ve+/vVxyXG4gICAgYXBwbHlUaHVtYiA6IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICB0aGlzLmFyZWFWYWx1ZSgpO1xyXG5cclxuICAgICAgZm9yKHZhciBpPTA7IGk8dGhpcy4kaW1hZ2VUaHVtYi5sZW5ndGg7IGkrKyl7XHJcblxyXG4gICAgICAgIHRoaXMuaW1hZ2VWYWx1ZSh0aGlzLiRpbWFnZVRodW1iLmVxKGkpKTtcclxuXHJcbiAgICAgICAgaWYoIHRoaXMuYXJlYVJhdGlvID4gdGhpcy5pbWFnZVJhdGlvICl7XHJcbiAgICAgICAgICB0aGlzLiRpbWFnZVRodW1iLmVxKGkpLmFkZENsYXNzKCdmdWxsLXdpZHRoJyk7XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgdGhpcy4kaW1hZ2VUaHVtYi5lcShpKS5hZGRDbGFzcygnZnVsbC1oZWlnaHQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyDvv73vv73vv73svbog77+977+977+977+977+977+9IO+/vcy577+977+977+9IO+/ve+/ve+/ve+/vSDvv73UvO+/vVxyXG4gICAgY2hhbmdlSW1hZ2UgOiBmdW5jdGlvbiggJG92ZXJJbWFnZSApe1xyXG4gICAgICB2YXIgc3JjID0gJG92ZXJJbWFnZS5jaGlsZHJlbigpLmF0dHIoJ3NyYycpO1xyXG4gICAgICAkKCcubGlmZS1pbWFnZS1iaWctaW1hZ2UnKS5hdHRyKCdzcmMnLCBzcmMpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZUltYWdlMiA6IGZ1bmN0aW9uKCAkb3ZlckltYWdlICl7XHJcbiAgICAgIHZhciBzcmMyID0gJG92ZXJJbWFnZS5jaGlsZHJlbigpLmF0dHIoJ3NyYycpO1xyXG4gICAgICAkKCcubGlmZS1pbWFnZTItYmlnLWltYWdlJykuYXR0cignc3JjJywgc3JjMik7XHJcblxyXG4gICAgfVxyXG4gIH07XHJcbiAgLy8g77+91Lzvv70g77+977+977+977+9XHJcbiAgY2FsY3VsYXRlUmF0aW8uYXBwbHlCaWcoKTtcclxuICBjYWxjdWxhdGVSYXRpby5hcHBseVRodW1iKCk7XHJcblxyXG4gIC8vIO+/vcy677+9xq4g77+977+977+977+9XHJcbiAgJCgnLmxpZmUtaW1hZ2UtbGlzdC13cmFwJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIGNhbGN1bGF0ZVJhdGlvLmNoYW5nZUltYWdlKCAkKHRoaXMpICk7XHJcbiAgICAvL2NhbGN1bGF0ZVJhdGlvLmNoYW5nZUltYWdlMiggJCh0aGlzKSApO1xyXG4gICAgY2FsY3VsYXRlUmF0aW8uYXBwbHlCaWcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnLmxpZmUtaW1hZ2UyLWxpc3Qtd3JhcCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAvL2NhbGN1bGF0ZVJhdGlvLmNoYW5nZUltYWdlKCAkKHRoaXMpICk7XHJcbiAgICBjYWxjdWxhdGVSYXRpby5jaGFuZ2VJbWFnZTIoICQodGhpcykgKTtcclxuICAgIGNhbGN1bGF0ZVJhdGlvLmFwcGx5QmlnKCk7XHJcbiAgfSk7XHJcblxyXG59KTsiLCIkKGZ1bmN0aW9uKCkge1xyXG5cclxuXHJcbiAgJCgnLmduYi1jbG9zZS1idXR0b24nKS5kYXRhKHsnb3Blbic6IGZhbHNlfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGlmICgkKHRoaXMpLmRhdGEoKS5vcGVuKSB7XHJcbiAgICAgICQoJy5nbmItb3BlbicpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAkKHRoaXMpLmRhdGEoe29wZW46IGZhbHNlfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcuZ25iLW9wZW4nKS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgJCh0aGlzKS5kYXRhKHtvcGVuOiB0cnVlfSk7XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG4iLCIkKGZ1bmN0aW9uKCl7XHJcblxyXG4gIC8v77+977+977+977+9IO+/ve+/vSDvv73Yve+/vcauXHJcbiAgJCh3aW5kb3cpLm9uKCdtb3VzZWVudGVyJyxmdW5jdGlvbigpe1xyXG4gICAgJCgnLmludGVyLXRvcC10aXRsZScpLmNzcyh7XHJcbiAgICAgICd0cmFuc2Zvcm0nOid0cmFuc2xhdGVYKDApJyxcclxuICAgICAgJ3RyYW5zaXRpb24nOidhbGwgMXMgZWFzZS1vdXQnXHJcbiAgICB9KVxyXG4gIH0pO1xyXG5cclxuXHJcblxyXG52YXIgaTtcclxudmFyIGxpbWl0ID0gNTAwO1xyXG5cclxuZnVuY3Rpb24gc2Nyb2xsKCl7XHJcblxyXG4gICQoJy5pbnRlci1taWRkbGUxLWJnJykuY3NzKHtcclxuICAgIFwidHJhbnNmb3JtXCI6XCJ0cmFuc2xhdGUzZCgwLFwiICsgKDEwMCAqIChpIC8gbGltaXQpKSArIFwicHgsMClcIlxyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLmludGVyLW1pZGRsZTEtaW1hZ2UudHdvJykuY3NzKHtcclxuXHJcbiAgICBcInRyYW5zZm9ybVwiOlwidHJhbnNsYXRlM2QoMCxcIiArICgtNTAgKiAoaSAvIGxpbWl0KSkgKyBcInB4LDApXCJcclxuXHJcbiAgfSk7XHJcblxyXG5cclxuICAkKCcuaW50ZXItbWlkZGxlMS1pbWFnZS50aHJlZScpLmNzcyh7XHJcbiAgICBcInRyYW5zZm9ybVwiOlwidHJhbnNsYXRlM2QoMCxcIiArICgyMCAqIChpIC8gbGltaXQpKSArIFwicHgsMClcIlxyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLmludGVyLW1pZGRsZTEtaW1hZ2UuZm91cicpLmNzcyh7XHJcblxyXG4gICAgXCJ0cmFuc2Zvcm1cIjpcInRyYW5zbGF0ZTNkKDAsXCIgKyAoLTMwICogKGkgLyBsaW1pdCkpICsgXCJweCwwKVwiXHJcblxyXG4gIH0pO1xyXG59XHJcblxyXG4kKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKCl7XHJcblxyXG4gIGkgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gIHNjcm9sbCgpO1xyXG5cclxufSk7XHJcblxyXG59KTsiXX0=
