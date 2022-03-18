$(document).ready(function () {
    function activeTab(obj) {
        $('.breadcrump ul li').removeClass('active');

        $(obj).addClass('active');

        var id = $(obj).find('a').attr('href');

        $('.tab-item').hide();

        $(id).show();
    }

    $('.tab li').click(function () {
        activeTab(this);
        return false;
    });

    activeTab($('.tab li:first-child'));

    $('.nav-open').click(function (e) { 
        e.preventDefault();
        $('.navbar').addClass('active');
        $('.cover').addClass('active');
        
    });

    $('.cover').click(function (e) { 
        e.preventDefault();
        $('.navbar').removeClass('active');
        $('.cover').removeClass('active');
        
    });

    // $('.footer-ic').click(function (e) { 
    //     e.preventDefault();
    //     $(this).find('.list-detail-inner-text').toggle('show');
    //     $(this).siblings().toggle('hide');
    // });
});

$('.responding').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

$('.nav-open').click(function (e) { 
    e.preventDefault();
    $('.navbar').addClass('.active');
    
});