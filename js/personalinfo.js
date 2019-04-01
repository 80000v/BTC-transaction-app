$(function(){
    var top_cHeight = $('.top_c').height();
    // var footerHeight = $('.footer').height();
    var tou2Height = $('.tou2').height();
    var zzcUSDT = $('#zzc').height()+$('#USDT').height();
    var payment = $('.payment').height();
    var media = $(window).height()-top_cHeight-tou2Height-zzcUSDT-payment;
    console.log($(window).height())
    console.log(media)
    // $('#fourkeys').css("height",media);
    $('#fourkeys').css("height",media);
    console.log(sessionStorage.getItem("states"));
    if(sessionStorage.getItem("states")==1){
        $('#states').append("已实名");
    }else if(sessionStorage.getItem("states")==0){
        $('#states').append("未实名");
    }else{
        $('#states').append("未登录");
    }
    
    $('.text_p').append('<p>'+ sessionStorage.getItem('phonenum')+'</p>  <span class="yue">'+sessionStorage.getItem('roles')+'</span>');
    $('#walletaddress').append(sessionStorage.getItem('address'));   
    $('#moneypi').append(sessionStorage.getItem('moneypi'));
    
})