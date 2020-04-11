/*Появляющееся скрытое меню в шапке*/
$(document).ready(function() {
    $('.driving-branches').click(function(event) {
        event.preventDefault();
        var btn = $(this);
        $('.overlay-half').fadeIn(200,
            function() {
                $('.hidden-menu').addClass('visible');
                $('html, header').width($('html, header').width());
                // $('html').css('overflow', 'hidden');
                // var myHeight = $('.hidden-menu').find('.hidden-menu-left ul').height() + 80 + "px";
                // var myHeight = $('.hidden-menu').find('.hidden-menu-left').height() + 80 + "px";
                var myHeight = $('.hidden-menu').find('.hidden-menu-left ul').height() + 100 + "px";
                console.log(myHeight);
                $('.hidden-menu').css('max-height', myHeight);
            });
    });
    $('.close-btn, .overlay-half, .modal-slide-btn').click(function() {
        $('.hidden-menu').removeClass('visible');
        $('.overlay-half').fadeOut(200);
        $('html').removeAttr('style');
    });
});

/*продолжение появляющегося меню - переключение табов*/
$(document).ready(function() {
    $(".hidden-menu-left li").hover(function() {
        $(".hidden-menu-addition").removeClass('active');
        $(".hidden-menu-left li a").removeClass('active');
        $(this).find("a").addClass("active");
        var selected_tab = $(this).find("a").attr("href");
        $(selected_tab).stop().addClass("active");
        return false;
    });
});

/*оставить заявку*/
// $(document).ready(function() {
//     $('body').on('click','.submit-application',function () {
//         event.preventDefault();
//         var btn = $(this);
//         $('.overlay').fadeIn(200,
//             function() {
//                 $('.modal-submit').addClass('active');
//                 $('html, header').width($('html, header').width());
//                 $('html').css('overflow', 'hidden');
//             });
//     });


//     $('.close-btn, .overlay, .modal-slide-btn').click(function() {
//         $('.modal-submit').removeClass('active');
//         $('.overlay').fadeOut(200);
//         $('html').removeAttr('style');
//     });
// });

/*заказать звонок*/
// $(document).ready(function() {
//     $('.footer-request-call').click(function(event) {
//         event.preventDefault();
//         var btn = $(this);
//         $('.overlay').fadeIn(200,
//             function() {
//                 $('.modal-callback').addClass('active');
//                 $('html, header').width($('html, header').width());
//                 $('html').css('overflow', 'hidden');
//             });
//     });
//     $('.close-btn, .overlay, .modal-slide-btn').click(function() {
//         $('.modal-callback').removeClass('active');
//         $('.overlay').fadeOut(200);
//         $('html').removeAttr('style');
//     });
// });

// модальные окна
function modalShow(clickElement, modalClass) {
    $('.' + clickElement).click(function(event) {
        event.preventDefault();
        var btn = $(this);
        $('.overlay').fadeIn(200,
            function() {
                $('.' + modalClass).addClass('active');
                $('html, header').width($('html, header').width());
                $('html').css('overflow', 'hidden');
            });
    });
    $('.close-btn, .overlay, .modal-slide-btn').click(function() {
        $('.' + modalClass).removeClass('active');
        $('.overlay').fadeOut(200);
        $('html').removeAttr('style');
    });
};
modalShow('footer-request-call', 'modal-callback'); /*оставить заявку*/
modalShow('submit-application', 'modal-submit');    /*заказать звонок*/
modalShow('header-lower-right-tel', 'modal-other-filial');    /*показать другой филиал*/

// маска для телефона
$(document).ready(function () {
  // $(".phone-mask").mask("+ 7 ( 999 ) 999 99 - 99");
  $(".phone-mask").mask("+ 7 (999)  999-99-99");
});

/*слайдер на главной верхний*/
var swiper = new Swiper('.main-swiper', {
    effect: 'fade',
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.main-swiper-pagination',
        clickable: true,
        renderBullet: function(index, className) {
            return '<span class="mainPagination ' + className + '">' + (index + 1) + '</span>';
        },
    },
    // autoHeight: true,
});


/*Селект форма на главной*/
// $('.filter-handler').click(function() {
//     $(this).next('.filter-dd').slideToggle(200);
//     $(this).toggleClass('active');
// });
// $('.filter-dd a').click(function() {
//     let val = $(this).text();
//     // следующие два пункта добавил для выделение активного пункта
//     $(this).closest('.filter-item').find('.filter-dd a').removeClass('active');
//     $(this).addClass('active');
//
//     $(this).closest('.filter-item').find('.filter-handler').text(val);
//     val = $(this).data('id');
//     $(this).closest('.filter-item').find('input').val(val);
//     console.log($(this).closest('.filter-item').find('input').val());
// });
// $('body').on('click', function(e) {
//     if ($(e.target).closest('.filter-handler').length === 0) {
//         $('.filter-dd').slideUp(200);
//         $('.filter-handler').removeClass('active');
//         updatePrice2();
//     }
// });


/*Смещение иконки поиска при фокусировки*/
$(".address-col-small-search").delegate("*", "focus blur", function(event) {
    var elem = $(this);
    setTimeout(function() {
        $(".address-col-small-search").toggleClass("active", elem.is(":focus"));
    }, 0);
});


/*Слайдер на главной отзывы*/
var swiper2 = new Swiper('.feedback-swiper', {
    effect: 'fade',
    watchSlidesVisibility: true,
    navigation: {
        nextEl: '.feedback-button-next',
        prevEl: '.feedback-button-prev',
    },
});


/*вопрос-ответ появление ответа по клику*/
$(document).ready(function() {
    $(".questions-question").click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });
    $(".questions-question").click(function(e) {
        e.preventDefault();
        $(this).next().slideToggle();
    });
});


/*слайдер на странице документы и лицензии*/
var swiper = new Swiper('.docs-swiper', {
    // cssMode: true,
    slidesPerView: 1.5,
    spaceBetween: 20,
    navigation: {
        nextEl: '.docs-button-next',
        prevEl: '.docs-button-prev',
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 25,
        }
      }
});



/*калькулятор сверху смена ползунка*/
$('input[type="range"]').on("change mousemove", function() {
    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));

    $(this).css('background-image',
        '-webkit-gradient(linear, left top, right top, ' +
        'color-stop(' + val + ', #9f41ff), ' +
        'color-stop(' + val + ', #cdcfdc)' +
        ')'
    );
    if ((val * 100) < 16.666) {
        $('#rangeValue-min').addClass('active');
    } else {
        $('#rangeValue-min').removeClass('active');
    }
});

function updatePrice() {
    var price = +$('#amount1').val() * 100 +
        $('[name="format"]:checked').toArray().reduce((sum, n) => sum + +$(n).val(), 0) +
        $('[name="category"]:checked').toArray().reduce((sum, n) => sum + +$(n).val(), 0) +
        $('[name="transmission"]:checked').toArray().reduce((sum, n) => sum + +$(n).val(), 0);

    // $( "#amount3" ).val("$" + price);

    if ($("#category-1").is(':checked')) {
        $('#selectCategory').html('Категория A - Мотоциклы');
    } else if ($("#category-2").is(':checked')) {
        $('#selectCategory').html('Категория B - Легковые автомобили');
    } else if ($("#category-3").is(':checked')) {
        $('#selectCategory').html('Категория С - Грузовые автомобили');
    } else if ($("#category-4").is(':checked')) {
        $('#selectCategory').html('Категория D - Автобусы');
    }


    $("#value__result").html(price);
    var oldPrice = +price * 1.7;
    $("#value__result-old").html(oldPrice);
}
$('[name="format"]').change(updatePrice);
$('[name="category"]').change(updatePrice);
$('[name="transmission"]').change(updatePrice);
$('#amount1').change(updatePrice);

updatePrice();



/*калькулятор мобильная версии*/
function updatePrice2() {
    var price = +$('#amount2').val() * 100 +
        $('[name="formatMob"]').toArray().reduce((sum, n) => sum + +$(n).val(), 0)  +
        $('[name="categoryMob"]').toArray().reduce((sum, n) => sum + +$(n).val(), 0) +
        $('[name="transmissionMob"]').toArray().reduce((sum, n) => sum + +$(n).val(), 0);
console.log(price);
    var rangeValue = +$('#amount2').val();

    $("#calc-mobile-range-val").html(rangeValue + ' ак/час');
    var oldPrice = +price * 1.7;
    $("#value__result-old-mob").html(oldPrice);
    $("#value__result-mob").html(price);
}
$('#amount2').change(updatePrice2);

updatePrice2();

/*слайдер на странице детской мотошколы*/
var swiper = new Swiper('.moto-swiper', {
    slidesPerView: 1.2,
    spaceBetween: 30,
    scrollbar: {
        el: '.moto-swiper-scrollbar',
        // hide: true,
    },
    navigation: {
        nextEl: '.moto-button-next',
        prevEl: '.moto-button-prev',
    },
    breakpoints: {
        768: {
          slidesPerView: 3.5,
          spaceBetween: 25,
        }
      }
});


/*запретить прокручивание страницы к input при клике на label for*/
$('label[for="form-vacancies-checkbox-hidden"]').on('click', function (e) {
    var target = window[this.htmlFor];
    target.checked = !target.checked;
    e.preventDefault();
});

/*переключение табов*/
$(document).ready(function(){
    $('.reviews-tabs a').click(function(e) {
        e.preventDefault();
        $('.reviews-tabs .active').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.reviews-tabs-blocks').not(tab).css({'display':'none'});

        // удаляем у всех блоков класс active
        $('.reviews-tabs-blocks').not(tab).removeClass('active');

        // блоку с нужным id добавляем класс active
        $(tab).addClass('active');


        console.log(tab);
        $('.show-more').removeClass('active');

        //кнопке с нужным id добавляем класс active
        // $('#btn-'+ tab).addClass('active');
        $(tab + '-btn').addClass('active'); // новый вариант

        // console.log($('#btn-'+ tab)); - так возвращает пустой объект
        // console.log($(tab + '-btn')); - так возвращает кнопку

        $(tab).fadeIn(400);
    });
});

/*слайдер на странице филиалы, верхний*/
var swiper = new Swiper('.branch-swiper', {
    // cssMode: true,
    slidesPerView: 1.2,
    spaceBetween: 20,
    navigation: {
        nextEl: '.branch-button-next',
        prevEl: '.branch-button-prev',
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        768: {
          slidesPerView: 4,
          spaceBetween: 25,
        }
      }
});

/*слайдер на странице филиалы, нижний*/
var swiper = new Swiper('.info-swiper', {
    // cssMode: true,
    slidesPerView: 1.2,
    spaceBetween: 20,
    navigation: {
        nextEl: '.info-button-next',
        prevEl: '.info-button-prev',
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        }
      }
});

/*филиалы появления списка станций по клику*/
$(document).ready(function() {
    $(".district-line-title-btn").click(function(e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).next().slideUp();
            $(this).removeClass('active');
        } else {
            $(this).next().slideDown();
            $(this).addClass('active');
        }
    });
});


/*mobile hamburger*/
    $('#hamburger').click(function() {
        $(this).toggleClass('active');
        $('.header-desktop').toggleClass('active');
        $('html').toggleClass('noscroll');
    });

/*появление меню связь*/
$(document).ready(function() {
    $('.mobile-call').click(function() {
        $('.mobile-call-block').addClass('active');
        $('.mobile-hidden-blocks').addClass('active');
        $('html').addClass('noscroll');
    });
    $('.call-close-btn').click(function () {
        $('.mobile-call-block').removeClass('active');
        $('.mobile-hidden-blocks').removeClass('active');
        $('html').removeClass('noscroll');
    })
});

/*открытие мобильного меню*/
$(document).ready(function() {
    $('#hamburger').click(function() {
        $(this).addClass('active');
        $('.mobile-hidden-blocks').addClass('active');
        $('html').addClass('noscroll');
        $('.mobile-menu-block').addClass('active');
    });
    $('.menu-close-btn').click(function () {
        $('.mobile-menu-block').removeClass('active');
        $('#hamburger').removeClass('active');
        $('.mobile-hidden-blocks').removeClass('active');
        $('html').removeClass('noscroll');
    })
});

/*открытие категории меню*/
$(document).ready(function() {
    $('.mobile-category').click(function() {
        $('.mobile-category-block').addClass('active');
        $('.mobile-hidden-blocks').addClass('active');
        $('html').addClass('noscroll');
    });
    $('.category-close-btn').click(function () {
        $('.mobile-category-block').removeClass('active');
        $('.mobile-hidden-blocks').removeClass('active');
        $('html').removeClass('noscroll');
    })
});

/*открытие адрес меню*/
$(document).ready(function() {
    $('.open-address-form').click(function() {
        $('.mobile-address-block').addClass('active');
        $('.mobile-hidden-blocks').addClass('active');
        $('html').addClass('noscroll');
    });
    $('.address-close-btn').click(function () {
        $('.mobile-address-block').removeClass('active');
        $('.mobile-hidden-blocks').removeClass('active');
        $('html').removeClass('noscroll');
    })
});

/*Слайдер наше авто для мобильной версии*/
var autoSwiper = new Swiper('.auto-swiper', {
    slidesPerView: 1.2,
    spaceBetween: 20,
});
var mql = window.matchMedia('all and (max-width: 768px)');
if (mql.matches) {

} else {
    // нет, размер окна более 1000px 
    autoSwiper.destroy(true, true);
}


/*Слайдер наша команда для мобильной версии*/
var teamSwiper = new Swiper('.team-swiper', {
    slidesPerView: 1.2,
    spaceBetween: 20,
});
if (mql.matches) {

} else {
    // нет, размер окна более 1000px 
    teamSwiper.destroy(true, true);
}