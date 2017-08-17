$(function(){

  $('.gnb-close-button').data({'open':false}).on('click', function(){

    if( $(this).data().open){
      $('.gnb-open').removeClass('on');
      $(this).data({open:false});
    } else {
      $('.gnb-open').addClass('on');
      $(this).data({open:true});
    }

  });

});




//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnVfb3Blbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJfbWVudV9vcGVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpe1xyXG5cclxuICAkKCcuZ25iLWNsb3NlLWJ1dHRvbicpLmRhdGEoeydvcGVuJzpmYWxzZX0pLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgaWYoICQodGhpcykuZGF0YSgpLm9wZW4pe1xyXG4gICAgICAkKCcuZ25iLW9wZW4nKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgJCh0aGlzKS5kYXRhKHtvcGVuOmZhbHNlfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcuZ25iLW9wZW4nKS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgJCh0aGlzKS5kYXRhKHtvcGVuOnRydWV9KTtcclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuIl19
