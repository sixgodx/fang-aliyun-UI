$(function(){
    // 设置高度自适应
    $('.main_height').css('height', ($(window).height()-51)+'px');
    $('.main_height2').css('height', ($(window).height()-121)+'px');
    $('.divTab').css('height', ($(window).height()-51)+'px');
    $('.tree_left').css('height', ($(window).height()-151)+'px');
    
    
    
    // nav收缩展开
    $('.nav-item>a').on('click',function(){
        if (!$('.nav').hasClass('nav-mini')) {
            if ($(this).next().css('display') == "none") {
                //展开未展开
                $('.nav-item').children('ul').slideUp(300);
                $(this).next('ul').slideDown(300);
                $(this).parent('li').addClass('nav-show').siblings('li').removeClass('nav-show');
            }else{
                //收缩已展开
                $(this).next('ul').slideUp(300);
                $('.nav-item.nav-show').removeClass('nav-show');
            }
        }
    });

    //nav-mini切换
    $('#mini').on('click',function(){
        if (!$('.nav').hasClass('nav-mini')) {
			$('.main_index').addClass('main_index_hover');
            $('.nav-item.nav-show').removeClass('nav-show');
            $('.nav-item').children('ul').removeAttr('style');
            $('.nav').addClass('nav-mini');
            $('.main_nav').css('display','none');
        }else{
            $('.nav').removeClass('nav-mini');
			$('.main_index').removeClass('main_index_hover');
            $('.main_nav').css('display','block');
        }
    });

    // 点击打开功能面板
    $('.clickTab').on('click',function(){
        $("#divTab").animate({right:"0px"});
    });
    // 关闭功能面板函数
    function onTab(){
        $("#divTab").animate({right:"-30%"});
    }
    // 点击关闭功能面板
    $('#onTab').on('click',function(){
        onTab();
    });
});