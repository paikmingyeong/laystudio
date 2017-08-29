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