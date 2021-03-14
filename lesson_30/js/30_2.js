
$(function($) {
    $(function() {

      $('ul.tab-label').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tab-content').removeClass('active').eq($(this).index()).addClass('active');
      });

    });
    })();