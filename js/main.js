var $time = $('.time');
var $girl = $('.girl');

$time.waypoint(function () {
  $time.addClass('js-time-animate');
}, {offset: '90%'});

$girl.waypoint(function () {
  $girl.addClass('js-girl-animate');
}, {offset: '0%'});
