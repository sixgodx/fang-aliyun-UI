/*
 +-------------------------------------------------------------------------
 + 极资源官方出品
 + http://www.junphp.com
 + 技术交流群：368405253
 + 官方①群：706659641
 + 公共样式
 +-------------------------------------------------------------------------
*/


/*
 * 提示下拉弹窗
 * text : 提示信息
*/
function popup(text){
    var id = 'jzy_alert'+Math.floor(Math.random()*1000+1);
    $('body').append('<div class="'+id+' popupDom"><div class="popup  text-default"></div></div>'); 
    $('.'+id+" .popup").html(text);
    $('.'+id).stop().animate({
        "top": "0px"
    }, 400);
    setTimeout(function() {
        $('.'+id).stop().animate({
            "top": "-51px"
        }, 400);
    }, 2000);
}