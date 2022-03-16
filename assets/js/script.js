$(document).ready(function () {
    function activeTab(obj) {
        $('.tab ul li').removeClass('active');

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
});

$('.responding').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });