$(document).foundation();


/*
-- mit each wird durch jede section gegangen
-- für jede wird onScreen initialisiert
-- onScreen prüft ob das Element im viewport sichtbar wird
-- falls sichtbar wird die Klasse isonScreen zugefügt
-- falls das Element wieder aus dem viewport verschwindet, wird die Klasse wieder entfernt
-- mit dieser Klasse kann im css gearbeitet werden, siehe ab Zeile 22 im app.css
*/

$( "section" ).each(function( index, section ) {
     $(section).onScreen({
        container: window,
        direction: 'vertical',
        doIn: function() {
            $(section).addClass('onScreen');
        },
        doOut: function() {
            //$(section).removeClass('onScreen');
        },
        tolerance: 0,
        throttle: 50,
        lazyAttr: null,
        debug: false
    });
});


var scrollDistanz;
var distanzElement;
//distanzElement = $('#globe').offset().top;

$(window).on('scroll',
    function(){
      if($('#globe').length>0){
        scrollDistanz = $(window).scrollTop();
        distanzElement = $('#globe').offset().top;
      //console.log("distanz"+distanzElement);
        if(scrollDistanz>=distanzElement){
          $('#globe').addClass('arrived');
        }else{
          $('#globe').removeClass('arrived');
        }
      }

    }

);

$('a.mehr').on('click', function(e){

    var target=this.hash, $target = $(target);
    var scroll = $(target).offset().top;

    $('html, body').stop().animate({
        'scrollTop':scroll

      },900, 'swing', function(){}

    );
    e.preventDefault();

})
