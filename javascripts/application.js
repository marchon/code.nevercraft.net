$(document).ready(function() {
  // Stuff to do as soon as the DOM is ready;
  $('#testing').click(
    alert('clicked testing');
    $.getJSON('/javascripts/posts.json', function(data) {
      $.each(data.posts, function (i, item) {
        alert(item.title);
      });
    });
  );
});