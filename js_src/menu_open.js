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




