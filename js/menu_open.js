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




//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnVfb3Blbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtZW51X29wZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCl7XG5cbiAgJCgnLmduYi1jbG9zZS1idXR0b24nKS5kYXRhKHsnb3Blbic6ZmFsc2V9KS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgaWYoICQodGhpcykuZGF0YSgpLm9wZW4pe1xuICAgICAgJCgnLmduYi1vcGVuJykucmVtb3ZlQ2xhc3MoJ29uJyk7XG4gICAgICAkKHRoaXMpLmRhdGEoe29wZW46ZmFsc2V9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLmduYi1vcGVuJykuYWRkQ2xhc3MoJ29uJyk7XG4gICAgICAkKHRoaXMpLmRhdGEoe29wZW46dHJ1ZX0pO1xuICAgIH1cblxuICB9KTtcblxufSk7XG5cblxuXG4iXX0=
