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