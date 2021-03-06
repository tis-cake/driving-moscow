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
                // $('html, header').width($('html, header').width());
                $('html').css('overflow', 'hidden');
            });
    });
    $('.close-btn, .overlay, .modal-slide-btn').click(function() {
        $('.' + modalClass).removeClass('active');
        $('.overlay').fadeOut(200);
        $('html').removeAttr('style');
    });
};
modalShow('footer-request-call', 'modal-callback');          /* оставить заявку */
modalShow('submit-application', 'modal-submit');             /* заказать звонок */
modalShow('offer-modal-link', 'modal-submit');               /* горячее предложение */
modalShow('aside-link-block__link-modal', 'modal-callback'); /* ссылка внизу страницы на телефоне */

modalShow('branch-btn-other', 'modal-car');                  /* другие филиалы, авто */
modalShow('branch-btn-other-moto', 'modal-moto');            /* другие филиалы, мото */

// горячее предложение
$('.offer-close-btn').click(function(event) {
    $('.offer-slide').fadeOut();
}); 

// маска для телефона
$(document).ready(function () {
  // $(".phone-mask").mask("+ 7 ( 999 ) 999 99 - 99");
  $(".phone-mask").mask("+ 7 (999)  999-99-99");
});

/*слайдер на главной верхний*/
var swiper = new Swiper('.main-swiper', {
    effect: 'fade',
    speed: 2000,
    autoplay: {
        delay: 6000,
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

// мобильные отзывы
$(document).ready(function() {
    var width = $(window).width();
    var toggleList = $(".reviews-tab-select");
    if (width <= 768) {
        // $('.reviews-tabs').slideUp();
        $('.reviews-tab-select').click(function(evt) {
            $(this).toggleClass('active');
            $('.reviews-tabs').slideToggle();
            var val = $(this).text();
            $('.revews-tab-link').click(function() {
                val = $(this).text();
                $('.reviews-tab-select').text(val);
                $('.reviews-tab-select').removeClass('active');
                $('.reviews-tabs').slideUp();
            })

            $('body').on('click', function(e) {
                if ($(e.target).closest('.reviews-tab-select').length === 0) {
                    $('.reviews-tab-select').removeClass('active');
                    $('.reviews-tabs').slideUp();
                }
            });
        });
    }
});

// $('.reviews-tab-select').click(function() {
//     $('.reviews-tab-select-form').toggleClass('active');
// });

$('.sub-list-toggle').click(function() {
    $('.mobile-header-nav-list.sub-list').slideToggle();
});

$('body').on('click', function(e) {
    if ($(e.target).closest('.reviews-tab-select').length === 0) {
        $('.reviews-tab-select-form').removeClass('active');
    }
});

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
    // mousewheel: true,
    // keyboard: true,
    breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 25,
        }
      }
});





// вывод значения из range калькулятора
$(document).ready(function() {
    let inputRange = $('#amount1');
    let outputRange = $('#output');

    // вывод значения в поле вывода
    inputRange.mousemove(function() {
        // outputRange.val(inputRange.val());
        outputRange.text(inputRange.val());
    });

    // показ введённого числа на ползунке
    outputRange.change(function() {
        // inputRange.val(outputRange.val());
        inputRange.text(outputRange.val());
    });
})

// function updatePrice() {
//     var price = +$('#amount1').val() * 100 +
//         $('[name="format"]:checked').toArray().reduce((sum, n) => sum + +$(n).val(), 0) +
//         $('[name="category"]:checked').toArray().reduce((sum, n) => sum + +$(n).val(), 0) +
//         $('[name="transmission"]:checked').toArray().reduce((sum, n) => sum + +$(n).val(), 0);

    // $( "#amount3" ).val("$" + price);

//     $("#value__result").html(price);
//     var oldPrice = +price * 1.7;
//     $("#value__result-old").html(oldPrice);
// }
// $('[name="format"]').change(updatePrice);
// $('[name="category"]').change(updatePrice);
// $('[name="transmission"]').change(updatePrice);
// $('#amount1').change(updatePrice);

// updatePrice();



/*калькулятор мобильная версии*/
function updatePrice2() {
    var price = +$('#amount2').val() * 100 +
        $('[name="formatMob"]').toArray().reduce((sum, n) => sum + +$(n).val(), 0)  +
        $('[name="categoryMob"]').toArray().reduce((sum, n) => sum + +$(n).val(), 0) +
        $('[name="transmissionMob"]').toArray().reduce((sum, n) => sum + +$(n).val(), 0);
    // console.log(price);
    var rangeValue = +$('#amount2').val();

    $("#calc-mobile-range-val").html(rangeValue + ' ак/час');
    var oldPrice = +price * 1.7;
    $("#value__result-old-mob").html(oldPrice);
    $("#value__result-mob").html(price);
}
// $('#amount2').change(updatePrice2);

// updatePrice2();

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

    // $('.reviews-tab-select').click(function () {
    //     var optionValue = $(this).val();
    //     console.log(optionValue);
    //     $('.reviews-tabs-blocks').not(optionValue).css({'display':'none'});
    //     $('.reviews-tabs-blocks').not(optionValue).removeClass('active');
    //     $(optionValue).addClass('active');
    //     $('.show-more').removeClass('active');
    //     $(optionValue + '-btn').addClass('active');
    //     $(optionValue).fadeIn(400);
    // });
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
    // mousewheel: true,
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
    // mousewheel: true,
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
        // $('header').toggleClass('hidden');
    });

/*появление меню связь*/
$(document).ready(function() {
    $('.mobile-call').click(function() {
        $('.mobile-call-block').addClass('active');
        $('.mobile-hidden-blocks').addClass('active');
        $('html').addClass('noscroll');
        // $('header').addClass('hidden');
    });
    $('.call-close-btn').click(function () {
        $('.mobile-call-block').removeClass('active');
        $('.mobile-hidden-blocks').removeClass('active');
        $('html').removeClass('noscroll');
        // $('header').removeClass('hidden');
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
        // $('header').removeClass('hidden');
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

    $('.mobile-driving-branches').click(function () {
        $(this).removeClass('active');
        $('.mobile-address-block').addClass('active');
        $('.mobile-hidden-blocks').addClass('active');
        $('.mobile-menu-block').removeClass('active');
    })
});

/*Слайдер наше авто для мобильной версии*/
var autoSwiper = new Swiper('.auto-swiper', {
    // slidesPerView: 1.2,
    // spaceBetween: 20,
    slidesPerView: 1
});
var mql = window.matchMedia('all and (max-width: 768px)');
if (mql.matches) {

} else {
    // нет, размер окна более 1000px 
    // autoSwiper.destroy(true, true);
}


/*Слайдер наша команда для мобильной версии*/
var teamSwiper = new Swiper('.team-swiper', {
    // slidesPerView: 1.2,
    // spaceBetween: 20,
    slidesPerView: 1
});
// if (mql.matches) {

// } else {
//     // нет, размер окна более 1000px 
//     teamSwiper.destroy(true, true);
// }

// var autoSwiper = new Swiper('#cars-swiper', {
//     slidesPerView: 1,
//     // spaceBetween: 20,
// });
// if (mql.matches) {

// } else {
//     // нет, размер окна более 1000px 
//     autoSwiper.destroy(true, true);
// }

// aside-bar
$(document).ready(function () {

  // !NB: El = Element

  let mainEl = $('.aside');

  // отмечаем элемент при попадании в поле зрения
  $(window).on('scroll', function () {

    mainEl.removeClass('hidden-top hidden-bottom');

    // mainEl = $('.aside-list');

    let scrollRelativeEl = $('section'); // сравниваем относительно этих элементов (section)
    let mainElHeight = mainEl.outerHeight();

    let relativeElCurrentPosition = $(this).scrollTop(); // текущая позиция относительного элемента (section)
    scrollRelativeEl.each(function() {
      let borderTop = $(this).offset().top - mainElHeight;
      let borderBottom = borderTop + $(this).outerHeight();
      
      if (relativeElCurrentPosition >= borderTop && relativeElCurrentPosition <= borderBottom) {
        mainEl.find('a').removeClass('active');
        mainEl.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
      }
    });
  });

  // плавный переход по якорям
  let asideАnchor = $('.aside-link').not('.aside-page-link');
  $(asideАnchor).on("click", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 700);
  });

  // скрываем на футере
  // let target = $('footer');
  // let targetPos = target.offset().top;
  // let windowHeight = $(window).height();
  // let scrollToElem = targetPos - windowHeight;

  // $(window).scroll(function(){
  //   let winScrollTop = $(this).scrollTop();

  //   if((winScrollTop - scrollToElem) > 0 ) {
  //     mainEl.addClass('hidden-bottom');
  //   } else {
  //     mainEl.removeClass('hidden-bottom');
  //   }
  // });

  // скрываем на первом элементе после хедера
  // let firstEl = ($('main section:first'));        // первый элемент
  // let firstElHeight = firstEl.outerHeight(true);  // высота первого элемента

  // $(window).scroll(function () {
  //   if ($(window).scrollTop() < firstElHeight / 2) {
  //     mainEl.addClass('hidden-top');
  //   } else if ($(window).scrollTop() >= firstElHeight  / 2) {
  //     mainEl.removeClass('hidden-top');
  //   }
  // });
});

// появление нижнего блока меню
$(document).ready(function () {

  var headerTopBlock = $('.header-mobile-top'),
      headerMiddleBlock = $('.header-mobile-middle'),
      headerBottomBlock = $('.header-mobile-bottom'),
      scrollPrev = 0;

  $(window).scroll(function() {
    var scrolled = $(window).scrollTop();

    if ( scrolled > 100 && scrolled > scrollPrev ) {
      headerTopBlock.addClass('out');
      headerMiddleBlock.addClass('out');
      headerBottomBlock.addClass('out');
    } else {
      headerTopBlock.removeClass('out');
      headerMiddleBlock.removeClass('out');
      headerBottomBlock.removeClass('out');
    };
    scrollPrev = scrolled;
  })
});

// label с файлом
//   let inputFile = $('.vacancies-file');
//   let labelFile = $('.more-content-btn');
//   let labelTextField = labelFile.find($('.input__file-button-text'));
//   let labelVal = labelFile.find($('.input__file-button-text')).text();

//   inputFile.on('change', function (evt) {
//     let countFiles = '';
//     if (this.files && this.files.length >= 1) {
//       countFiles = this.files.length;
//     }
//     if (countFiles) {
//       labelTextField.text('Выбрано файлов: ' + countFiles);
//     }
//     else {
//       labelTextField.text(labelVal);
//     }

//     countFiles ? labelTextField.text('Выбрано файлов: ' + countFiles) : labelTextField.text(labelVal);
// });