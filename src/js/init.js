(function($){
  $(function(){

    $('.button-collapse').sideNav({
          menuWidth: 240, // Default is 240
          edge: 'left', // Choose the horizontal origin
          closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        }
    );
      $('.slider').slider({interval: 5000});

      $('.collapsible').collapsible({
          accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
      $('.parallax').parallax();


  }); // end of document ready
})(jQuery); // end of jQuery name space