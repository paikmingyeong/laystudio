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




//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnVfb3Blbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtZW51X29wZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCl7XHJcblxyXG4gICQoJy5nbmItY2xvc2UtYnV0dG9uJykuZGF0YSh7J29wZW4nOmZhbHNlfSkub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICBpZiggJCh0aGlzKS5kYXRhKCkub3Blbil7XHJcbiAgICAgICQoJy5nbmItb3BlbicpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAkKHRoaXMpLmRhdGEoe29wZW46ZmFsc2V9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJy5nbmItb3BlbicpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAkKHRoaXMpLmRhdGEoe29wZW46dHJ1ZX0pO1xyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG4iXX0=
