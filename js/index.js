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
        }, 2000);
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
        // console.log($(this).closest('.filter-item').find('input').val());
    });
    $('body').on('click', function(e) {
        if ($(e.target).closest('.filter-handler').length === 0) {
            $('.filter-dd').slideUp(200);
            $('.filter-handler').removeClass('active');
            updatePrice2();
        }
    });
//course selection
    $('.price-form .filter-dd a').click(function() {
        let value = $(this).data('id');
        $(this).closest('.filter-item').find('input').val(value);
        // console.log($(this).closest('.filter-item').find('input').val());
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
            url: '/ajax/zayavka.php',
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
        var KATEGORIYA = $('.price-form').find('input[name=KATEGORIYA]').val();
        var TEORIYA = $('.price-form').find('input[name=TEORIYA]').val();
        var KOROBKA = $('.price-form').find('input[name=KOROBKA]').val();
        var OPYT = $('.price-form').find('input[name=OPYT]').val();

        console.log(KATEGORIYA);
        console.log(TEORIYA);
        console.log(KOROBKA);
        console.log(OPYT);


        var data = $(this).serialize();

        $.ajax({
            type: 'post',
            url: '/ajax/pokazat-tceny.php',
            data: data,
            dataType: 'html',
            success: function (e) {
                console.log(e);
                console.log(true);
                // reset();
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



})