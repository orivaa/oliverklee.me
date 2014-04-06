/**
 * Main JS for oliverklee.me
 *
 * @author Oliver Klee
 * @version 0.5.2
 */
jQuery(function($) {

  window.mySwipe = new Swipe(document.getElementById('slider'), {
    startSlide: 1,
    speed: 400,
    auto: 3000,
    continuous: true,
    disableScroll: false,
    callback: function(index, elem) {},
    transitionEnd: function(index, elem) {}
  });

  initResizeMenu();

});

var initResizeMenu = function() {
    // This will hold the state of the pop-up menu
    var open = false;
    var $mainNav = $("#mainnav");
    var $showMenu =  $(".show-menu");

    function resizeMenu() {
        // If window is less than 600px wide
        if ( $(this).width() < 600 ) {
            if (!open) {
                // Hide the menu if it's not supposed to be displayed
                $mainNav.hide();
            }
            // Display the button
            $showMenu.show();
        } else if ( $(this).width() >= 600 ) {
            // If window is wider than 600px
            if (!open) {
                // Show the menu if it's not displayed yet
                $mainNav.show();
            }
            // Hide the button if the screen is wide enough for the menu to always show
            $showMenu.hide();
        }
    }

    function setupMenuButton() {
        $showMenu.click(function(e) {
            e.preventDefault();

            // If already shown...
            if (open) {
                // Hide the menu
                $mainNav.slideToggle().fadeOut();
                $showMenu.toggleClass("selected");
            } else {
                // If not shown, show the menu
                $mainNav.slideToggle().fadeIn();
                $showMenu.toggleClass("selected");
            }
            open = !open;
        });
    }
     
    // Add a handler function for the resize event of window
    $(window).resize(resizeMenu);

    // Initialize the menu and the button
    resizeMenu();
    setupMenuButton();
}