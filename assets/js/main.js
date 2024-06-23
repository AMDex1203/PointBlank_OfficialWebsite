(function( $ ){
    $(function(){
        mainSlide_height();
        
        $('.item_wrap .item_list .pass .con').mouseover(function(){
            $(this).children('.in').children('.lock_p').attr('src' , '/images/common/webshop/icon_premium.png');
            $(this).children('.in').children('.lock_l').attr('src' , '/images/common/webshop/icon_level.png');
        });
        
        $('.item_wrap .item_list .pass .con').mouseout(function(){
            $(this).children('.in').children('.lock_p').attr('src' , '/images/common/webshop/lock_premium.png');
            $(this).children('.in').children('.lock_l').attr('src' , '/images/common/webshop/lock_level.png');
        });
        
        
        $('.item_wrap .lock').each(function(){
          if ($(this).children('img').length > 1) {
            $(this).addClass('prm');
          }
        });
        
        $('.item_list > li').each(function(){
            if ($(this).find('.lock.in').length > 0) {
                $(this).find('.lv_wrap').addClass('over');
            }
        });
        
        if($('.item_wrap .item_list .con .lock').length) {
    
            $(this).siblings('.lv_wrap').css('background' ,'#3f3f3f');
    
        }
    
        
        
        
        
        
        $(window).load(function(){
            item_h();
            mainSlide_height();
        
        });
        
        $(window).resize(function(){	
            item_h();
            mainSlide_height();
        });
        
        
        
        function item_h(){
            var it_w = $('.item_list .item').outerWidth();
            var lv_h = $('.lv_wrap').outerHeight();
            var ws_h=$('.wish_wrap .item_wrap .state').outerHeight();
            $('.item_list .item').css('height', it_w);
            $('.lv_wrap').css('top', it_w - lv_h);
            $('.wish_wrap .item_wrap .state').css('top', it_w - ws_h - 2);
        };item_h();
        
        function mainSlide_height(){
            var mainImg = $('.main_slide_wrap img.pc').height();
            $('.main_slide_wrap').css('height' , mainImg);
        };
        
        
    
        
        
        
        
    
    
    });
    })( jQuery );