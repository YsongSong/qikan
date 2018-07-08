// 期刊列表切换

// 教育期刊，医学期刊，核心期刊切换（通知，类别）
$(function(){
    $("#jiaoyu .tab a").mouseover(function () {
        $(this).addClass('on').siblings().removeClass('on');
        var index = $(this).index();
        number = index;
        $('#jiaoyu .content li').hide();
        $('#jiaoyu .content li:eq(' + index + ')').show();
    });
    
    var auto = 1;  
    if(auto ==1){
        var number = 0;
        var maxNumber = $('#jiaoyu .tab a').length;
        function autotab(){
            number++;
            number == maxNumber? number = 0 : number;
            $('#jiaoyu .tab a:eq(' + number + ')').addClass('on').siblings().removeClass('on');
            $('#jiaoyu .content ul li:eq(' + number + ')').show().siblings().hide();
        }

    }
});

// 经济期刊，建筑期刊，农业期刊，科学期刊切换（通知，类别）
$(function () {
    $("#jingji .tab a").mouseover(function () {
        $(this).addClass('on').siblings().removeClass('on');
        var index = $(this).index();
        number = index;
        $('#jingji .content li').hide();
        $('#jingji .content li:eq(' + index + ')').show();
    });

    var auto = 1; 
    if (auto == 1) {
        var number = 0;
        var maxNumber = $('#jingji .tab a').length;
        function autotab() {
            number++;
            number == maxNumber ? number = 0 : number;
            $('#jingji .tab a:eq(' + number + ')').addClass('on').siblings().removeClass('on');
            $('#jingji .content ul li:eq(' + number + ')').show().siblings().hide();
        }

    }
});

// 详细期刊列表切换
$(function () {
    $("#ljiaoyu .title span").mouseover(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        var index = $(this).index();
        number = index;
        $('#ljiaoyu .conno div').hide();
        $('#ljiaoyu .conno div:eq(' + index + ')').show();
    });

});