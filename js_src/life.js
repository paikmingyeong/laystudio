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