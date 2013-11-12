'use strict';

$(function () {

  var data = [
    {
      value: 30,
      color: '#F38630'
    },
    {
      value : 50,
      color : '#E0E4CC'
    },
    {
      value : 100,
      color : '#69D2E7'
    }
  ];

  $('.brand').hover(function () {
    var nav = $('.navbox');
    if (nav.css('display') == 'none' ) {
     nav.fadeIn(500);
   } else {
    nav.fadeOut(500);
   }
  });

});