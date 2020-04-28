$(document).ready(function () {

    $('body').on('click','.submit-application',function () {event.preventDefault();
    var btn = $(this);
    $('.overlay').fadeIn(200,
        function() {
        $('.modal-submit').addClass('active');
        $('html, header').width($('html, header').width());
        $('html').css('overflow', 'hidden');
            });
    });


    $('body').on('click', '.delit-file', function () {
        $(this).closest('.download-doc').remove();
    });


    function reset () {
        $('.reset-form').find('input').val('');
        $('.reset-form').find('textarea').val('');
    };

    function resetForm () {
        $('.reset-form').find('input').each(function () {
            $('input').val('');
        });
        $('.reset-form').find('textarea').val('');
    };


    function showMassege () {
        $('.message').addClass('active');
        setTimeout(function(){
            $('.message').removeClass('active');
        }, 3000);
    }


    function showMassegeAfterComment () {
        $('.message-comment').addClass('active');
        setTimeout(function(){
            $('.message-comment').removeClass('active');
        }, 3000);
    }



    $('.submit-vopros').click(function(event) {
        event.preventDefault();
        var btn = $(this);
        $('.overlay').fadeIn(200,
            function() {
            $('.modal-vopros').addClass('active');
            $('html, header').width($('html, header').width());
            $('html').css('overflow', 'hidden');
        });
    });
    $('.close-btn, .overlay, .modal-slide-btn').click(function() {
        $('.modal-vopros').removeClass('active');
        $('.overlay').fadeOut(200);
        $('html').removeAttr('style');
    });



    $('.filter-handler').click(function() {
        $('.filter-dd').not(this).slideUp(200); // закрываем уже открытые меню
        // $(this).next('.filter-dd').slideDown(200);
        
        $('.filter-handler').not(this).removeClass('active'); // удаляем у других меню .active
        $(this).toggleClass('active');
        if($(this).hasClass('active')) {
            $(this).next('.filter-dd').slideDown(200);
        }
    });
    $('.filter-dd a').click(function() {
        let val = $(this).text(),
            velText = $.trim(val);

        $(this).closest('.filter-item').find('.filter-dd a').removeClass('active');
        $(this).addClass('active');
        $(this).closest('.filter-item').find('.filter-handler').text(velText.substring(0, 19));
        let value = $(this).text();
        $(this).closest('.filter-item').find('input').val(value);
    });
    $('body').on('click', function(e) {
        if ($(e.target).closest('.filter-handler').length === 0) {
            $('.filter-dd').slideUp(200);
            $('.filter-handler').removeClass('active');
        }
    });

    $('#calculatorMOB .filter-dd a').click(function () {
        var dataId = $(this).data('id');
        $(this).closest('.filter-item').find('input').val(dataId);

    });


//course selection
    $('.price-form .filter-dd a').click(function() {
        let value = $(this).data('id');
        $(this).closest('.filter-item').find('input').val(value);
    });

    $('#show-avtoshkola .filter-dd a').click(function() {
        let value = $(this).data('id');
        $(this).closest('.filter-item').find('input').val(value);
    });

    $('#show-avtoshkola-mob .filter-dd a').click(function() {
        let value = $(this).data('id');
        $(this).closest('.filter-item').find('input').val(value);
    });


    $("#metro-value-mob").change(function () {
        var metro_id = $('#metro option[value="' + $('#metro-value-mob').val() + '"]').data('id');
        $('input[name="METRO-MOB"]').val(metro_id);
    });



  //FILTR SHOW ADDRESS
    $("#metro-value").change(function () {
        var metro_id = $('#metro-search option[value="' + $('#metro-value').val() + '"]').data('id'),
            metro_text =  $('#metro-search option[value="' + $('#metro-value').val() + '"]').val(),
            metro_vetka_id =  parseInt($('#metro-search option[value="' + $('#metro-value').val() + '"]').attr('class'));
        console.log(metro_vetka_id);

        $('input[name="METRO"]').val(metro_id);
        $('input[name="VETKA_METRO"]').val(metro_vetka_id);
        $('#text').text(metro_text.slice(0,19));
        $('#text-vetka-ID a').each(function () {
            var vetka_id = +$(this).data('id'),
                vetka_name = $(this).text(),
                vetka_icon = $(this).find('img').attr('src');

            if (vetka_id == metro_vetka_id) {
                $('#text-vetka').text(vetka_name);
                $('#vetka-icon').find('img').attr("src", vetka_icon);
            }
        });

        $('.filtr-vetka-METRO a').each(function () {
            $idVetkaMetro = $(this).attr("class");
            $idVetkaMetro = parseInt($idVetkaMetro);
            if ($idVetkaMetro !== metro_vetka_id) {
                $(this).css('display', 'none');
            }    else {
                $(this).css('display', 'block');
            }
        });
    });

    $('#filtr-vetka .filtr-vetka-ID a').click(function() {
        let idVetka = $(this).data('id');
        $('#text').text('Выберите станцию');
        $('#metro-value').val('');
        $('.filtr-vetka-METRO a').each(function () {
            $idVetkaMetro = $(this).attr("class");

            $idVetkaMetro = parseInt($idVetkaMetro);

            if ($idVetkaMetro !== idVetka) {
                $(this).css('display', 'none');
            }    else {
                $(this).css('display', 'block');
            }
        });

        var scrIcon = $(this).find('img').attr('src');
        $('#vetka-icon').find('img').attr("src", scrIcon);

    });

    $('#filtr-vetka .filtr-vetka-METRO a').click(function() {
        $('#metro-value').val('');

    });


    //FILTR SHOW PRICE
    //if categoriya A,A1,М,B1,C,CE hide "korobka avtomat"
    $('#kategoriya li').click(function () {
        var kategoriyaID = $(this).find('a').data('id');
        if((+kategoriyaID == 42) || (+kategoriyaID == 43) || (+kategoriyaID == 44) || (+kategoriyaID == 46) || (+kategoriyaID == 47) || (+kategoriyaID == 62) || (+kategoriyaID == 49)) {
            $( "#korobka a" ).not( "."+ kategoriyaID ).addClass('disabled');
        } else {
            $( "#korobka a" ).removeClass('disabled');
        }

    //if categoriya A1,М,B1,C, CE hide "oput"
        if((+kategoriyaID == 43) || (+kategoriyaID == 44) || (+kategoriyaID == 46) || (+kategoriyaID == 47) || (+kategoriyaID == 62) || (+kategoriyaID == 49)) {
            $( "#oput a" ).not( "."+ kategoriyaID ).addClass('disabled');
        } else {
            $( "#oput a" ).removeClass('disabled');
        }

    });


    $('.button-show-map').click(function () {
        if($('div').is('#myMap')) {
            $('#tab-1').css('display', 'none');
            $('#tab-2').css('display', 'block');
        } else {
            $(this).closest('.show-map').append(
                '<div class="btn-hint">Чтоб показать автошколу на карте, выберите станцию метро и нажмите на кнопку "Найти"</div>'
            );
            setTimeout(function(){
                $('.btn-hint').remove('.btn-hint');
            }, 3200);
        }
    });

    
    $('.main-slider-btn').each(function () {
        var attr = $(this).attr('href');
        if (attr == '#') {
            $(this).addClass('ostavit-zayavku');
        }
    });

    $( 'body' ).on( 'click', '.ostavit-zayavku', function(event) {
        event.preventDefault();
        var btn = $(this);
        $('.overlay').fadeIn(200,
            function() {
                $('.modal-submit').addClass('active');
                $('html, header').width($('html, header').width());
                $('html').css('overflow', 'hidden');
            });
    });


    // $('.branch-btn-other').click(function () {
    //     $('.overlay').fadeIn('slow');
    //     $('html').toggleClass('noscroll');
    //     $('.modal-car').slideDown(500);
    // });

    // $('.branch-btn-other-moto').click(function () {
    //     $('.overlay').fadeIn('slow');
    //     $('html').toggleClass('noscroll');
    //     $('.modal-moto').slideDown(500);
    // });

    $('.modal .close-btn').click(function () {
        $('.overlay').fadeOut('slow');
        $('.modal').slideUp(300);
        $('html').toggleClass('noscroll');
    });

        $('.overlay').click(function() {
        $('.modal').slideUp(300);
        $('.overlay').fadeOut(200);
        $('html').removeClass('noscroll');
    });


    // $().fancybox({
    //     selector : '.video-conteiner a:visible',
    //     loop: true,
    //     animationEffect: "zoom-in-out",
    //     buttons : [
    //         'fullScreen',
    //         'close'
    //     ],
    //     titleShow: true
    // });

    // $().fancybox({
    //     selector : '.docs-swiper a:visible',
    //     loop: true,
    //     animationEffect: "zoom-in-out",
    //     buttons : [
    //         'fullScreen',
    //         'close'
    //     ]
    // });




// KALKULATOR
    $('.tab-btn').click(function () {
        var valueId = $(this).attr('id');
        $('.tab-item-block').removeClass('active');
        $(this).closest('.calc-select-block').find('#'+valueId+'-description').addClass('active');
    });


    function kalkulator() {
        $('.categoriya-block label').click(function () {
            var valueFor = $(this).attr('for');
            var valueCategoriya = $('input[id='+valueFor +']').val();
        });
    }


// FORMS
    $('#question-form').submit(function () {
        var data = $(this).serialize();

        $.ajax({
            type: 'post',
            url: '/ajax/question-form.php',
            data: data,
            dataType: 'json',
            success: function (e) {
                console.log(e);
                console.log(true);
                reset();
                showMassege();
            },
            error: function (e) {
                console.log(e);
                console.log(false);
            }
        });
        return false;
    });

    $('.zayavka').submit(function () {
        var data = $(this).serialize();

        $.ajax({
            type: 'post',
            url: '/ajax/form__zayavka.php',
            data: data,
            dataType: 'json',
            success: function (e) {
                console.log(e);
                console.log(true);
                reset();
                $('.modal-submit').removeClass('active');
                showMassege();
                setTimeout(function(){
                    $('.overlay').fadeOut(200);
                    $('html').removeAttr('style');
                }, 2500);
            },
            error: function (e) {
                console.log(e);
                console.log(false);
            }
        });
        return false;
    });

    $('#form_obratnyj-zvonok').submit(function () {
        var data = $(this).serialize();

        $.ajax({
            type: 'post',
            url: '/ajax/form__obratnyj-zvonok.php',
            data: data,
            dataType: 'json',
            success: function (e) {
                console.log(e);
                console.log(true);
                reset();
                $('.modal-callback').removeClass('active');
                showMassege();
                setTimeout(function(){
                    $('.overlay').fadeOut(200);
                    $('html').removeAttr('style');
                }, 3000);

            },
            error: function (e) {
                console.log(e);
                console.log(false);
            }
        });
        return false;
    });


    $('#form_test-drive').submit(function () {
        var data = $(this).serialize();

        $.ajax({
            type: 'post',
            url: '/ajax/form__test-drive.php',
            data: data,
            dataType: 'json',
            success: function (e) {
                console.log(e);
                console.log(true);
                reset();
                showMassege();
            },
            error: function (e) {
                console.log(e);
                console.log(false);
            }
        });
        return false;
    });



    $('#form_zayavka-na-obuchenie').submit(function () {
        var data = $(this).serialize();

        $.ajax({
            type: 'post',
            url: '/ajax/form__zayavka-na-obuchenie.php',
            data: data,
            dataType: 'json',
            success: function (e) {
                console.log(e);
                console.log(true);
                reset();
                showMassege();
                },
            error: function (e) {
                console.log(e);
                console.log(false);
            }
        });
        return false;
    });



    $('#form1_zayavka-na-obuchenie').submit(function () {
        var data = $(this).serialize();

        $.ajax({
            type: 'post',
            url: '/ajax/form1__zayavka-na-obuchenie.php',
            data: data,
            dataType: 'json',
            success: function (e) {
                console.log(e);
                console.log(true);
                reset();
                showMassege();
            },
            error: function (e) {
                console.log(e);
                console.log(false);
            }
        });
        return false;
    });

    $('#form2_zayavka-na-vakansiyu').submit(function () {
        var data = $(this).serialize();

        $.ajax({
            type: 'post',
            url: '/ajax/form2__zayavka-na-vakansiyu.php',
            data: data,
            dataType: 'json',
            success: function (e) {
                console.log(e);
                console.log(true);
                reset();
                showMassege();
            },
            error: function (e) {
                console.log(e);
                console.log(false);
            }
        });
        return false;
    });

    $('#form_zadat-vopros').submit(function () {
        var data = $(this).serialize();

        $.ajax({
            type: 'post',
            url: '/ajax/form__zadat-vopros.php',
            data: data,
            dataType: 'json',
            success: function (e) {
                console.log(e);
                console.log(true);
                reset();
                $('.modal-vopros').removeClass('active');
                $('.overlay').fadeOut(200);
                $('html').removeAttr('style');
            },
            error: function (e) {
                console.log(e);
                console.log(false);
            }
        });
        return false;
    });

    $('#form__otzyv').submit(function () {
        var data = $(this).serialize();

        $.ajax({
            type: 'post',
            url: '/ajax/form__otzyv.php',
            data: data,
            dataType: 'json',
            success: function (e) {
                console.log(e);
                console.log(true);
                reset();
                showMassege();
            },
            error: function (e) {
                console.log(e);
                console.log(false);
            }
        });
        return false;
    });


    // $('#vyzov-menedzhera').submit(function() {
    //     // var formData = new FormData($('#vyzov-menedzhera')[0]);
    //
    //     var $that = $(this);
    //     var data = new FormData($that.get(0));
    //
    //     // jQuery.each($('#file')[0].files, function(i, file) {
    //     //     formData.append('file', file);
    //     // });
    //
    //     $.ajax({
    //         type: 'post',
    //         url: '/ajax/form__vyzov-menedjera.php',
    //         data: data,
    //         dataType: 'json',
    //         async: false,
    //         cache: false,
    //         contentType: false,
    //         processData: false,
    //         success: function (e) {
    //             console.log(e);
    //             console.log(true);
    //             resetForm();
    //             showMassege();
    //         },
    //
    //         error: function (e) {
    //             console.log(e);
    //             console.log(false);
    //         }
    //     });
    //     return false;
    // });


    $('#pokazat-tceny').submit(function () {
        var data = $(this).serialize();

        $.ajax({
            type: 'post',
            url: '/ajax/pokazat-tceny.php',
            data: data,
            dataType: 'html',
            success: function (e) {
                console.log(e);
                console.log(true);
                $('.pokazat-tceny').empty();
                $('.pokazat-tceny').append(e);
            },
            error: function (e) {
                console.log(e);
                console.log(false);
            }
        });
        return false;
    });


    $('#show-avtoshkola').submit(function (e) {

        var kategoriya = $(this).find('input[name="KATEGORIYA"]').val(),
            metro = $(this).find('input[name="METRO"]').val();


        if ((kategoriya!='') & (metro!='')) {
            var data = $(this).serialize();

            $.ajax({
                type: 'post',
                url: '/ajax/show-avtoshkola.php',
                data: data,
                dataType: 'html',
                success: function (e) {
                    console.log(e);
                    console.log(true);
                    $('.conteiner-block').empty();
                    $('.conteiner-block').append(e);

                    $('.load-items').remove();

                },
                error: function (e) {
                    console.log(e);
                    console.log(false);
                }
            });
            return false;

        } else {
            e.preventDefault();
            $('.conteiner-block').append(
                '<div class="btn-hint">Выберите категорию и метро</div>'
            );
            setTimeout(function(){
                $('.btn-hint').remove('.btn-hint');
            }, 3000);

        }
    });


    $('#show-avtoshkola-mob').submit(function (e) {

        var kategoriya = $(this).find('input[name="KATEGORIYA"]').val();
            metro = $(this).find('input[name="METRO-MOB"]').val();


        if ((kategoriya!='') && (metro!='')) {
            var data = $(this).serialize();

            $.ajax({
                type: 'post',
                url: '/ajax/show-avtoshkola-mob.php',
                data: data,
                dataType: 'html',
                success: function (e) {
                    console.log(e);
                    console.log(true);
                    $('.address-cards').empty();
                    $('.address-cards').append(e);
                },
                error: function (e) {
                    console.log(e);
                    console.log(false);
                }
            });
            return false;

        } else {
            e.preventDefault();
            $('.address-cards').append(
                '<div class="btn-hint">' +
                '<span>! </span> ' +
                'Выберите категорию и метро' +
                '</div>'
            );
            setTimeout(function(){
                $('.btn-hint').remove('.btn-hint');
            }, 3000);

        }
    });

    $('#comments').submit(function () {
        var data = $(this).serialize();

        $.ajax({
            type: 'post',
            url: '/ajax/comments.php',
            data: data,
            dataType: 'json',
            success: function (e) {
                console.log(e);
                console.log(true);
                resetForm();
                showMassegeAfterComment();
            },
            error: function (e) {
                console.log(e);
                console.log(false);
            }
        });
        return false;
    });
})
