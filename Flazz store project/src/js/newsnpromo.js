$(document).ready(function () {
  // Hide all content boxes initially
  $(".content-box").hide();

  // Show the first 4 content boxes
  $(".content-box").slice(0, 6).show();

  // Add event listener to the Load More button
  $("#loadMore").on("click", function (e) {
    e.preventDefault();

    // Show the next 4 hidden content boxes
    $(".content-box:hidden").slice(0, 3).slideDown();

    // Check if there are no more hidden content boxes
    if ($(".content-box:hidden").length == 0) {
      // Change the Load More button text and add a class
      $("#loadMore").text("No Content").addClass("noContent");
    }
  });
});
