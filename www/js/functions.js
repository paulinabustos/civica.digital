$('#js-btn--menu').on('click', function(){
    $('#js-bar__menu').slideDown('fast', function(){
        $('html').click(function() {
            $('#js-bar__menu').slideUp('fast', function(){
                $('html').off();
            });
        });
        $('html').on('touchend', function() {
            $('#js-bar__menu').slideUp('fast', function(){
                $('html').off();
            });
        });
    });
});