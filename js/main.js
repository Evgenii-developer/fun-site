$(document).ready(function(){
    //waypoints
    $('.block-menu_item').on('click', function () {
        console.log('done');
        $('.block-menu_item').removeClass('active');
        $(this).addClass('active');
        console.log($(this));
    });

    $('#main').waypoint(function () {
        $('.block-menu_item').removeClass('active');
        $('#main-link').addClass('active');
    }, { offset: '-1%' });
    $('#biography').waypoint(function () {
        $('.block-menu_item').removeClass('active');
        $('#biography-link').addClass('active');
    }, { offset: '50%' });
    $('#group').waypoint(function () {
        $('.block-menu_item').removeClass('active');
        $('#group-link').addClass('active');
        $('.block-group_item').addClass('animated fadeInUp');
        $('.block-group_item-link').addClass('animated fadeIn');
    }, { offset: '50%' });

    $('#albums').waypoint(function () {
        $('.block-menu_item').removeClass('active');
        $('#albums-link').addClass('active');
        $('.block-albums_item').addClass('animated fadeIn');
    }, { offset: '50%' });

    //smooth scroll
    $('.navbar li a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 300);
                return false;
            }
        }
    });
});
