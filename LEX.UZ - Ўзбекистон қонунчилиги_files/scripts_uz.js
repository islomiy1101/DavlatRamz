$(document).ready(function () {
    /* the libs */
    $.ajax({ url: '/javascript/jquery.cookie.js', dataType: "script", async: false });
    $.ajax({ url: '/javascript/superfish.js', dataType: "script", async: false });
    $.ajax({ url: '/javascript/hoverIntent.js', dataType: "script", async: false });
    /* auth check */
    $('.organ_search_in > a').click(function (e) {
        e.preventDefault();
        $(this).parents('.organ').find('#organs_list').slideToggle();
    });
    $('.the_list_ul > li > a:first-child').click(function (e) {
        e.preventDefault();
        $('.the_list_ul > li > div.opened').each(function () { $(this).removeClass("opened"); });
        var div = $(this).next("div");
        div.addClass("opened");
        var res = $('.the_list_ul > li > div:not(.opened)').each(function () { $(this).slideUp(); });
        div.slideToggle();
    });
    $('.main_menu > ul').superfish({
        speed: 'normal',
        autoArrows: false
    });

    setTimeout(function () {
        try {
            $('#top_tabs').easytabs({ defaultTab: "#default", updateHash: false, animate: false });
            $('.tab_nav li a').click(function (e) {
                e.preventDefault();
                initCustomForms();
            });
            initCustomForms();
            initFocus();

            $('.the_list_ul > li > a:first-child').click(function (e) {
                e.preventDefault();
                $('.the_list_ul > li > div.opened').each(function () { $(this).removeClass("opened"); });
                var div = $(this).next("div");
                div.addClass("opened");
                var res = $('.the_list_ul > li > div:not(.opened)').each(function () { $(this).slideUp(); });
                div.slideToggle();
            });
            $('.pre-loader').hide();
            $('.tab_nav').show();
        }
        catch (err) { 
            
        }
    }, 500);


    var rndurl = Math.random();
    $('#footer .bottom_nav').load('/pages/footer.aspx?_t=' + rndurl);
    $('.tab_nav_a').click(function () {
        $(this).addClass('test');
    })
    //accordion
    $('.tab_nav > li > a:first-child').click(function (e) {
        e.preventDefault();
        $('.tab_nav  li > div.opened').each(function () { $(this).removeClass("opened"); });
        var div = $(this).next("div");
        div.addClass("opened");
        var res = $('.tab_nav > li > div:not(.opened)').each(function () { $(this).slideUp(); });
        div.slideDown();
    });
    $('.tab_nav > li:first-child > div').css('display', 'block');

    $('.organ_list > ul > li > a:first-child').click(function (e) {
        e.preventDefault();
        $('.organ_list > ul > li > div.opened').each(function () { $(this).removeClass("opened"); });
        var div = $(this).next("div");
        div.addClass("opened");
        var res = $('.organ_list > ul > li > div:not(.opened)').each(function () { $(this).slideUp(); });
        div.slideToggle();
    });


    $('.cat_list > .first ,.cat_list > .second ').find('ul').find('li:nth-child(11)').nextAll().css('display', 'none');
    $('.cat_list .first .more, .cat_list .second .more,').click(function (e) {
        e.preventDefault();
        $(this).css('display', 'none');
        $(this).parent().find('ul').find('li:nth-child(11)').nextAll().slideToggle()
    })
    // loading only for safari  
    /*if (navigator.userAgent.match(/AppleWebKit/) && ! navigator.userAgent.match(/Chrome/)) {
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/safari.css') );
    }*/
    $('.additional_conds').click(function () {
        $(this).parents('.the_acts_searching').find('.bottom').find('.additionals').slideToggle();
        initCustomForms();
        $(this).toggleClass('active_conds');
    });
    $('.libraries').find('> ul').find('> li:last-child').find('.razdelitel').remove();

    var fn = $('.result_list').find('header').find('.all').find('.choose_all');
    fn.change(function () {
        if ($(this).is(':checked')) {
            $(this).parents('.result_list').find('.the_results_list').find('> ul').find('> li').find('.choose').find('div').addClass('checkboxAreaChecked');
            $(this).parents('.result_list').find('.the_results_list').find('> ul').find('> li').find('.choose').find('.outtaHere').attr('checked', 'checked')
        }
        else {
            $(this).parents('.result_list').find('.the_results_list').find('> ul').find('> li').find('.choose').find('div').addClass('checkboxArea').removeClass('checkboxAreaChecked');
            $(this).parents('.result_list').find('.the_results_list').find('> ul').find('> li').find('.choose').find('.outtaHere').removeAttr('checked')
        }
    })

    $('.search_cats').find('.byForm,.byYear').find('ul > li:nth-child(7)').nextAll().css('display', 'none');
    $('.search_cats').find('.byOrgan').find('ul > li:nth-child(4)').nextAll().css('display', 'none');
    $('.slide_down').click(function (e) {
        e.preventDefault();
        $(this).parents('.search_cats').find('.byYear').find('ul> li:nth-child(7)').nextAll().slideToggle();
    });
    $('.slide_down').click(function (e) {
        e.preventDefault();
        $(this).parents('.search_cats').find('.byForm').find('ul> li:nth-child(7)').nextAll().slideToggle();
    });
    $('.slide_down').click(function (e) {
        e.preventDefault();
        $(this).parents('.search_cats').find('.byOrgan').find('ul> li:nth-child(4)').nextAll().slideToggle();
    });
    //focus actions
    function initFocus() {
        $("input[type=text],input[type=password],input[type=search],textarea").focus(function () {
            $(this).addClass('focus');
        }).blur(function () {
            $(this).removeClass('focus');
        });
    }
    $('.organs_acts_list .all_lists td:nth-child(1)').css('width', '3%');
    $('.organs_acts_list .all_lists td:nth-child(2)').css('width', '28%');
    $('.organs_acts_list .all_lists td:nth-child(3)').css('width', '18%');
    $('.organs_acts_list .all_lists td:nth-child(4)').css('width', '20%');
    $('.organs_acts_list .all_lists td:nth-child(5)').css('width', '10%');
    $('.organs_acts_list .all_lists td:nth-child(6)').css('width', '9%');
    $('.organs_acts_list .all_lists td:last-child').addClass('last-child');
    $('#top_tabs .tab_nav li:first-child').css('width', '90px'); 
    $('#top_tabs .tab_nav li:nth-child(2)').css('width', '165px');
    $('#top_tabs .tab_nav li:nth-child(3)').css('width', '90px'); 
    $('#top_tabs .tab_nav li:nth-child(4)').css('width', '90px'); 
    $('#top_tabs .tab_nav li:last-child').css('width', '150px'); 

    $('.razvernut_add_search a').click(function (e) {
        e.preventDefault();
        $(this).parents('#global_search').find('.additional_search_options').slideToggle();
        $(this).toggleClass('active');
    })
    $('#tab-container').easytabs();
    $('#global_search').easytabs({ defaultTab: "#default", updateHash: false, animate: false });

    /* for titles */
    $('.the_icons a').addClass('title_hover');
    $('.title_hover').append("<div class='hover-popup'></div>");
    $('.title_hover').hover(function () {
        var i = $(this).attr('title');
        if (i) {
            var tr = $(this).find('.hover-popup').css('display', 'block').html(i);
        }
    }, function () {
        $(this).find('.hover-popup').css('display', 'none');
    });
})