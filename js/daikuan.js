$(function(){
  var step =1;
  var scale=[];
  for(var i=0;i<=180;i+=15){
    scale.push(i);
  }
  console.log(scale)
  var width=$(window).width();
  console.log(width);
  $('.slider-input').jRange({
    from: 0,
    to: 180,
    step:step,
    scale: scale,
    format: '%s',
    width: 0.8*width,
    showLabels: true,
    showScale:true,
    snap:true,
    isRange : false,
    onstatechange:function(res){
      $('#shijian').html('最短授权时间:'+res+'天<font style="color:red">(推出需手动预约)</font>');
    }
});
$('#active1').click(function (e) { 
  $('#active1').addClass("active");
  $('#active2').removeClass("active");
  
});
$('#active2').click(function (e) { 
  $('#active2').addClass("active");
  $('#active1').removeClass("active");
  
});

})