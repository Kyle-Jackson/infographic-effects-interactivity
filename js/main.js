var $time = $('.time');

$time.waypoint(function() {
  $time.addClass('js-time-animate')
}, { offset: '85%' });
