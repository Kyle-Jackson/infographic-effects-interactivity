var $mam = $('.mam');
var $ple = $('.ple');
var $din = $('.din');
var $pte = $('.pte');

$mam.waypoint(function() {
  $mam.addClass('js-mam-animate')
}, { offset: '50%' });

$ple.waypoint(function() {
  $ple.addClass('js-ple-animate')
}, { offset: '50%' });

$din.waypoint(function() {
  $din.addClass('js-din-animate')
}, { offset: '50%' });

$pte.waypoint(function() {
  $pte.addClass('js-pte-animate')
}, { offset: '70%' });
