$(function(){

  // �����

  var currentIndex4 = 0;
  var nextIndex4 = 0;


  function moveDown(){

    if(nextIndex4 >= $('.life-page').length){
      nextIndex4 = 0;
    }

    // eq()�� ���� ���� �־� �ָ� �� �������� ���ʴ�� ��Ī��Ŵ
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
      // ����Լ�
      $selector.one('click', function(){
        activeClick(dir4);
      });

    }, 500);

  };


  // �����


  $('.arrow.up').on('click', function(){

    nextIndex4 = currentIndex4 + 1;
    moveDown('up');

  });

  $('.arrow.down').on('click', function(){

    nextIndex4 = currentIndex4 - 1;
    moveUp('down');

  });


  var calculateRatio = {
    // jQuery DOM ����� �����ϴ� ������Ƽ

    $imageTop : $('.life-image-big','.life-image2-big'),
    $imageBig : $('.life-image-big-image','.life-image2-big-image'),
    $imageThumb : $('.life-image-list-item','.life-image2-list-item'),

    // �ش� �κ��� ���� ����ϴ� �޼ҵ�
    // ����ũ ���� ���
    areaValue : function(){
      this.areaWidth = parseInt(this.$imageTop.css('width'));
      this.areaHeight = parseInt(this.$imageTop.css('height'));
      this.areaRatio = this.areaWidth / this.areaHeight;
    },
    // �̹��� ���
    imageValue : function( $image ){
      this.imageWidth = parseInt( $image.css('width') );
      this.imageHeight = parseInt( $image.css('height') );
      this.imageRatio = this.imageWidth / this.imageHeight;
    },
    // ū �̹����� ����
    applyBig : function(){
      this.areaValue();
      this.imageValue(this.$imageBig);
      if( this.areaRatio > this.imageRatio ){
        this.$imageBig.removeClass('full-height').addClass('full-width');
      } else {
        this.$imageBig.removeClass('full-width').addClass('full-height');
      }
    },
    // ���� �̹����� ����
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
    // ���콺 ������ �̹��� ���� �Լ�
    changeImage : function( $overImage ){
      var src = $overImage.children().attr('src');
      $('.life-image-big-image').attr('src', src);
    },
    changeImage2 : function( $overImage ){
      var src2 = $overImage.children().attr('src');
      $('.life-image2-big-image').attr('src', src2);

    }
  };
  // �Լ� ����
  calculateRatio.applyBig();
  calculateRatio.applyThumb();

  // �̺�Ʈ ����
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