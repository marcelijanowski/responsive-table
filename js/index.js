$(function() {
  /**
  * Hide all table items
  */
  function hideAllItems() {
    $('tbody tr').each(function () {
      $(this).css('display', 'none');
    });
  };
  /**
  * Update paggination
  */
  function updatePagination() {
    var next,
        previous;

    next = $('tr:hidden:first');
    previous = $('tr:hidden').next(':first');
    $('.navigation_left').text('< ' + previous.find('td:first').text());
    $('.navigation_right').text(next.find('td:first').text() + ' >');
  }

  $('.navigation_left').click(function() {
    var previous;
    previous = $('tr:hidden').next(':first');

    hideAllItems();
    previous.css('display', 'block');
    updatePagination();
  });

  $('.navigation_right').click(function() {
    var next;
    next = $('tr:hidden:first');

    hideAllItems();
    next.css('display', 'block');
    updatePagination();
  });

  updatePagination();
});
