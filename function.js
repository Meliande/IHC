var $header_top = $('.header-top');
var $nav = $('nav');

$header_top.find('a').on('click', function() {
  $(this).parent().toggleClass('open-menu');
});
$('#fullpage').fullpage({
  sectionsColor: ['#3dcfa1', '#348899', '#ff8b20', '#ff5757', '#ffd03c', '#ff8b20', '#3dcfa1', '#348899', '#ff8b20', '#ff5757', '#ffd03c'],
  sectionSelector: '.vertical-scrolling',
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection', 'sixthSection', 'seventhSection', 'eighthSection', 'ninethSection', 'tenthSection', 'eleventhSection'],
  menu: '#menu',
  afterLoad: function(anchorLink, index) {
    $header_top.css('background', 'rgba(0, 47, 77, .3)');
    $nav.css('background', 'rgba(0, 47, 77, .25)');
  },
  onLeave: function(index, nextIndex, direction) {
    if(index == 5) {
      $('#fp-nav').show();
    }
  },


});
