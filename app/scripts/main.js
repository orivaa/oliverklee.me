/**
 * Main JS for oliverklee.me
 *
 * @author Oliver Klee
 * @version 0.5.2
 */

window.mySwipe = new Swipe(document.getElementById('slider'), {
  startSlide: 1,
  speed: 400,
  auto: 3000,
  continuous: true,
  disableScroll: false,
  callback: function(index, elem) {},
  transitionEnd: function(index, elem) {}
});

jQuery(function($) {
  // This will hold the state of the pop-up menu
  var open = false;

  function resizeMenu() {
      // If window is less than 600px wide
      if ($(this).width() < 600) {
          if (!open) {
              // Hide the menu if it's not supposed to be displayed
              $("#mainnav").hide();
          }
          // Display the button
          $(".show-menu").show();
      }
      else if ($(this).width() >= 600) {
          // If window is wider than 600px
          if (!open) {
              // Show the menu if it's not displayed yet
              $("#mainnav").show();
          }
          // Hide the button if the screen is wide enough for the menu to always show
          $(".show-menu").hide();
      }
  }

  function setupMenuButton() {
      $(".show-menu").click(function(e) {
          e.preventDefault();

          // If already shown...
          if (open) {
              // Hide the menu
              $("#mainnav").slideToggle().fadeOut();
              $(".show-menu").toggleClass("selected");
          }
          else {
              // If not shown, show the menu
              $("#mainnav").slideToggle().fadeIn();
              $(".show-menu").toggleClass("selected");
          }
          open = !open;
      });
  }
   
  // Add a handler function for the resize event of window
  $(window).resize(resizeMenu);

  // Initialize the menu and the button
  resizeMenu();
  setupMenuButton();
});