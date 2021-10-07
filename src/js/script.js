$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 800,
        //adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="/img/carousel/chevron left solid.png"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="/img/carousel/chevron right solid.png"></img></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false,
                    dotsClass: 'slick-dots',
            }
        }
        ]
      });
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
  });