$(document).ready(function () {

    //fade my photo in and out on hover
    $('.fade').mouseover(function () {
        $('.fade').fadeOut('slow');
        $('.fade').fadeIn('slow');
    });

    //changing font size of h2 heading with hover
    $('section h2').hover(
        function () {
            $(this).animate({ fontSize: '2rem' });
        }, function () {
        $(this).animate({ fontSize: '1.3rem' });
    });

    //activate the snow effect plugin
    $.fn.snow({newOn: 1000});

    //activate the tooltipster Plugin on work, education and projects
    $('.tooltip').tooltipster();

    //activate the tooltipster Plugin on pottery section, use image
    $('.potterytooltip').tooltipster({
        content: $('<span><img class="tipimg" src="img/pottery.jpg" /></span>')
    });

    //activate the tooltipster Plugin on wood section, use image
    $('.woodtooltip').tooltipster({
        content: $('<span><img class="tipimg" src="img/bench.jpg" /></span>')
    });

    //activate the tooltipster Plugin on crochet section, use image
    $('.crochettooltip').tooltipster({
        content: $('<span><img class="tipimg" src="img/scarf.jpg" /></span>')
    });

    //activate the tooltipster Plugin on doodle section, use image
    $('.doodletooltip').tooltipster({
        content: $('<span><img class="tipimg" src="img/butterfly.jpg" /></span>')
    });

});
