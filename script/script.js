$(function () {
    // 팝업
    $('.pop_open').click(function(){
        $('#popup').css("display","block")
    })
    $('.pop_close').click(function(){
        $('#popup').css('display','none')
    })
    //메인메뉴
    $('.m_bar').click(function(){
        $('.m_menu_page').css("display",'block')
    })
    $('.menu_close_btn').click(function(){
        $('.m_menu_page').css("display",'none')
        $('.m_submenu').css("display",'none')
    })
    $('.m_submenu_open1').click(function(){
        $('.m_submenu1').css("display",'block')
    })
    $('.m_submenu_open2').click(function(){
        $('.m_submenu2').css("display",'block')
    })
    $('.m_submenu_open3').click(function(){
        $('.m_submenu3').css("display",'block')
    })
    $('.m_submenu_open4').click(function(){
        $('.m_submenu4').css("display",'block')
    })
    $('.m_submenu_open5').click(function(){
        $('.m_submenu5').css("display",'block')
    })
    $('.m_submenu_open6').click(function(){
        $('.m_submenu6').css("display",'block')
    })
    $('.m_submenu_open7').click(function(){
        $('.m_submenu7').css("display",'block')
    })
    $('.submenu_prev_btn').click(function(){
        $('.m_submenu').css("display",'none')
    })
    // visual 슬라이드
    var swiper = new Swiper(".m_visual_swiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            // delay: 4000,
            delay: 999999999,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // youmake 슬라이드
    var swiper = new Swiper(".youMakeSwiper", {
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // Shop display Click
    $('.btn_newGalaxy').click(function () {
        $('.new_galaxy_display').css("display", "block").siblings().css("display", "none");
        $('.btn_newGalaxy').css({
            color: '#4043dd',
            fontWeight: '700'
        }).siblings().css({
            color: '#000',
            fontWeight: '500'
        })
    });
    $('.btn_selectShop').click(function () {
        $('.selectshop_display').css("display", "block").siblings().css("display", "none");
        $('.btn_selectShop').css({
            color: '#4043dd',
            fontWeight: '700'
        }).siblings().css({
            color: '#000',
            fontWeight: '500'
        })
    });
    $('.btn_carePlus').click(function () {
        $('.careplus_display').css("display", "block").siblings().css("display", "none");
        $('.btn_carePlus').css({
            color: '#4043dd',
            fontWeight: '700'
        }).siblings().css({
            color: '#000',
            fontWeight: '500'
        })
    });
    $('.btn_special').click(function () {
        $('.special_display').css("display", "block").siblings().css("display", "none");
        $('.btn_special').css({
            color: '#4043dd',
            fontWeight: '700'
        }).siblings().css({
            color: '#000',
            fontWeight: '500'
        })
    });

    // 모바일 & PC click
    $('.btn_s22').click(function () {
        $('.galaxyS22_page').css("display", "block").siblings().css("display", "none");
        $('.btn_s22').css({
            color: '#4043dd',
            fontWeight: '700'
        }).siblings().css({
            color: '#000',
            fontWeight: '500'
        })
    });
    $('.btn_unpacked').click(function () {
        $('.galaxyUnpacked_page').css("display", "block").siblings().css("display", "none");
        $('.btn_unpacked').css({
            color: '#4043dd',
            fontWeight: '700'
        }).siblings().css({
            color: '#000',
            fontWeight: '500'
        })
    });
    $('.btn_book').click(function () {
        $('.galaxyBook_page').css("display", "block").siblings().css("display", "none");
        $('.btn_book').css({
            color: '#4043dd',
        }).siblings().css({
            color: '#000',
            fontWeight: '500'
        })
    });
    $('.btn_watch').click(function () {
        $('.galaxyWatch_page').css("display", "block").siblings().css("display", "none");
        $('.btn_watch').css({
            color: '#4043dd',
            fontWeight: '700'
        }).siblings().css({
            color: '#000',
            fontWeight: '500'
        })
    });
    $('.btn_campus').click(function () {
        $('.galaxyCampus_page').css("display", "block").siblings().css("display", "none");
        $('.btn_campus').css({
            color: '#4043dd',
            fontWeight: '700'
        }).siblings().css({
            color: '#000',
            fontWeight: '500'
        })
    });
    $('.btn_studio').click(function () {
        $('.galaxyStudio_page').css("display", "block").siblings().css("display", "none");
        $('.btn_studio').css({
            color: '#4043dd',
            fontWeight: '700'
        }).siblings().css({
            color: '#000',
            fontWeight: '500'
        })
    });
    $('.btn_online').click(function () {
        $('.online_page').css("display", "block").siblings().css("display", "none");
        $('.btn_online').css({
            color: '#4043dd',
            fontWeight: '700'
        }).siblings().css({
            color: '#000',
            fontWeight: '500'
        })
    });

    // tv_audio click
    $('.btn_qled').click(function () {
        $('.neoQled_page').css("display", "block").siblings().css("display", "none");
        $('.btn_qled').css({
            'border-bottom': '2px solid #fff'
        }).siblings().css({
            borderBottom: 'none'
        })
    });
    $('.btn_led').click(function () {
        $('.microLed_page').css("display", "block").siblings().css("display", "none");
        $('.btn_led').css({
            'border-bottom': '2px solid #fff'
        }).siblings().css({
            borderBottom: 'none'
        })
    });
    $('.btn_smart').click(function () {
        $('.smaratMonitor_page').css("display", "block").siblings().css("display", "none");
        $('.btn_smart').css({
            borderBottom: '2px solid #fff'
        }).siblings().css({
            borderBottom: 'none'
        })
    });


    // 가전 click
    $('.btn_infinite').click(function () {
        $('.bespokeInfinite_page').css("display", "block").siblings().css("display", "none");
        $('.click_btn li').css('color', '#fff')
        $('#bespoke .con_title').css('color', '#fff')
        $('.btn_infinite').css({
            borderBottom: '2px solid #fff'
        }).siblings().css({
            borderBottom: 'none'
        })
    });
    $('.btn_grandet').click(function () {
        $('.bespokeGrandet_page').css("display", "block").siblings().css("display", "none");
        $('#bespoke .click_btn li').css('color', '#333')
        $('#bespoke .con_title').css('color', '#333')
        $('.btn_grandet').css({
            borderBottom: '2px solid #333'
        }).siblings().css({
            borderBottom: 'none'
        })
    });
    $('.btn_combine').click(function () {
        $('.bespokeCombine_page').css("display", "block").siblings().css("display", "none");
        $('#bespoke .click_btn li').css('color', '#333')
        $('#bespoke .con_title').css('color', '#333')
        $('.btn_combine').css({
            borderBottom: '2px solid #333'
        }).siblings().css({
            borderBottom: 'none'
        })
    });
    $('.btn_cukor').click(function () {
        $('.bespokeCukor_page').css("display", "block").siblings().css("display", "none");
        $('#bespoke .click_btn li').css('color', '#333')
        $('#bespoke .con_title').css('color', '#333')
        $('.btn_cukor').css({
            borderBottom: '2px solid #333'
        }).siblings().css({
            borderBottom: 'none'
        })
    });
    $('.btn_besbokeHome').click(function () {
        $('.bespokeHome_page').css("display", "block").siblings().css("display", "none");
        $('#bespoke .click_btn li').css('color', '#333')
        $('#bespoke .con_title').css('color', '#333')
        $('.btn_besbokeHome').css({
            borderBottom: '2px solid #333'
        }).siblings().css({
            borderBottom: 'none'
        })
    });

    //  아코디언 메뉴
    $('.aco_list').click(function () {
        $('.aco_submenu').slideUp();
        if ($(this).children('.aco_submenu').is(':hidden')) {
            $(this).children('.aco_submenu').slideDown();
        } else {
            $(this).children('.aco_submenu').slideUp();
        }
        // $('.aco_list>.aco_sub_btn>.aco_sub_btn_open').css('display','none');
        // $('.aco_list>.aco_sub_btn>.aco_sub_btn_close').css('display','block');
    });
})