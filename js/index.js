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

  $(window).smartresize(function(){
    if ($(window).width() <= 740) {
      updatePagination();
    } else {
      $('tbody tr').each(function () {
        $(this).removeAttr('style');
      });
    }
  });
  updatePagination();
});

// As user can scale windows size we have to react on changes cause by hidding element by mobile size
(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');
