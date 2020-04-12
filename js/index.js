$(document).ready(function () {

    function reset () {
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
        let val = $(this).text();
        $(this).closest('.filter-item').find('.filter-dd a').removeClass('active');
        $(this).addClass('active');

        $(this).closest('.filter-item').find('.filter-handler').text(val);
        // val = $(this).data('id');
        // $(this).closest('.filter-item').find('input').val(val);
        // console.log($(this).closest('.filter-item').find('input').val());

        let value = $(this).text();
        $(this).closest('.filter-item').find('input').val(value);

        // let imgSrc = $(this).find('img').attr("src"); // путь к иконке
        // let handlerEl = $(this).closest('.filter-item').find('.filter-handler'); // элемент, куда записывается текст
        // let imgTemplate = '<i class="metro-icon-shadow-large metro-icon-absolute"><img src="' + imgSrc +'"></i>';  // шаблон с иконкой
        // console.log(imgTemplate);
        // handlerEl.html(imgTemplate);
    });
    $('body').on('click', function(e) {
        if ($(e.target).closest('.filter-handler').length === 0) {
            $('.filter-dd').slideUp(200);
            $('.filter-handler').removeClass('active');
            // updatePrice2();
        }
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

    $("#metro-value").change(function () {
        var metro_id = $('#metro-search option[value="' + $('#metro-value').val() + '"]').data('id');
        $('input[name="METRO"]').val(metro_id);
        console.log($('input[name="METRO"]').val());
    });


    $('#filtr-vetka .filtr-vetka-ID a').click(function() {
        let idVetka = $(this).data('id');
        // console.log('ID ветки =  '+ idVetka);
        // console.log(typeof(idVetka));
        $('#text').text('Выберите станцию');
        $('.filtr-vetka-METRO a').each(function () {
            $idVetkaMetro = $(this).attr("class");

            $idVetkaMetro = parseInt($idVetkaMetro);

            if ($idVetkaMetro !== idVetka) {
                $(this).css('display', 'none');
            }    else {
                $(this).css('display', 'block');
            }
        });

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
    // kalkulator();


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


        if ((kategoriya!='') || (metro!='')) {
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
                reset();
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