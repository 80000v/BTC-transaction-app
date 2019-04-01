// JavaScript Document
$(function () {
    var WindowHeight = $(window).height();
    var lie_bHeght = $('.lie_b').height();
    var lie_b_touHeight = $('.lie_b_tou').height();
    var tou2Height = $('.tou2').height();
    var touHeight = $('.tou').height();
    var top_cHeight = $('.top_c').height();
    var footerHeight = $('.footer').height();
    var infoListHeight = WindowHeight - top_cHeight - touHeight - tou2Height - lie_b_touHeight - footerHeight;
    console.log(infoListHeight);

    // console.log(liebiaoscroll);
    $('.lie_b').css("height", infoListHeight);
    $('.lie_b').css("overflow", "auto");
    $('body').css("overflow", "hidden");
    $('.lie_b').scroll(function () {
        var liebiaoscroll = $('.lie_b').scrollTop();
        console.log(liebiaoscroll);
        console.log(lie_bHeght - infoListHeight - 1 - footerHeight);
        if (liebiaoscroll > 0) { //如果滚动到底部自动隐藏导航栏，否则则显示导航栏
            $('.footer').css("display", "none");
        } else {
            $('.footer').css("display", "block");
        }

    })
    sessionStorage.setItem('id', '1');
    $("#personalinfo").attr("href","personalinfo.html?id="+sessionStorage.getItem('id')); 
    $.ajax({//请求用户信息
        type: "get", //请求方式
        url: "http://118.24.10.164:8080/convertion/Servlet/UserServlet?id="+sessionStorage.getItem('id'), //地址，就是json文件的请求路径
        dataType: "json", //数据类型可以为 text xml json  script  jsonp
        xhrFields: {
           withCredentials: true
       },
           crossDomain: true,
        success: function (result) { //返回的参数就是 action里面所有的有get和set方法的参数
            addUser(result);
            console.log(result);
            
        }
    });

    $.ajax({//获取信息
        type: "get", //请求方式
        url: "http://118.24.10.164:8080/convertion/Servlet/SuccessServlet", //地址，就是json文件的请求路径
        dataType: "json", //数据类型可以为 text xml json  script  jsonp
        xhrFields: {
            withCredentials: true
        },
            crossDomain: true,
        success: function (result) { //返回的参数就是 action里面所有的有get和set方法的参数
            addBox(result);
            console.log(result);
        }
    });

	
 function addUser(result){
     $.each(result,function(index,obj){
        sessionStorage.setItem('phonenum',obj['phonenum']);
        sessionStorage.setItem('roles',obj['roles']);
        sessionStorage.setItem('address',obj['address']);
        sessionStorage.setItem('states',obj['states']);
        console.log(sessionStorage.getItem('states'));
        sessionStorage.setItem('username',obj['username']);
        sessionStorage.setItem('moneypi',obj['moneypi']);
        // sessionStorage.setItem('roles',obj['roles']);
        $(".text_p").append('<p>'+obj['phonenum']+'</p>  <span class="yue">'+obj['roles']+'</span>');
     })
 }
 function addBox(result) {
    var w1='<div class="media" style="border-bottom: 1px solid #ececec;">     <div class="media-left media-middle"> <img src="images/uico1.png" class="media-object" style="width:40px"> </div> <div class="media-body" style="vertical-align:middle;width:25%;">     <p class="media-heading" style="font-size: 1.2em;">';
    var w2 = '</p>    </div>     <div class="media-body" style="vertical-align:bottom;">         <p class="media-heading" style="font-size: 1.2em;">';
    var w3 = '</p>    <p style="color:#888;">当前价格</p> </div> <div class="media-body" style="vertical-align:bottom;">     <button type="button" class="btn btn-default"        style="float:right;color:#FF8000; border-color:#FF8000;line-height: 1em;margin-bottom: 0.2em;">转入</button>     <button type="button" class="btn btn-default"         style="float:right;color:#FF8000; border-color:#FF8000;line-height: 1em;margin-bottom: 0.2em;">转出</button> </div></div>';
    //result是一个集合,所以需要先遍历
    $.each(result, function (index, obj) {
        console.log("111111111111111111111111");
        console.log(obj['coinname']);
        $(".one").append(w1+obj['coinname']+w2+obj['ration']+w3);
    });

   }


});

//  var json = [{
//      	"image_url": "images/uico1.png",
//      	"info_ch": "信息1",
//      	"price": "6666.88"
//      },
//      {
//      	"image_url": "images/uico2.png",
//      	"info_ch": "信息2",
//      	"price": "6886.88"
//      },
//      {
//      	"image_url": "images/uico3.png",
//      	"info_ch": "信息3",
//      	"price": "6776.88"
//      },
//      {
//      	"image_url": "images/uico4.png",
//      	"info_ch": "信息4",
//      	"price": "6466.88"
//      },
//      {
//      	"image_url": "images/uico5.png",
//      	"info_ch": "信息5",
//      	"price": "8766.88"
//      },
//      {
//      	"image_url": "images/uico1.png",
//      	"info_ch": "信息1",
//      	"price": "61266.88"
//      },
//      {
//      	"image_url": "images/uico1.png",
//      	"info_ch": "信息1",
//      	"price": "6689.88"
//      }
//      ];
//  })
//

//监听滑动并隐藏和显示顶部文字
// $(function(){   
//     var winHeight = $(document).scrollTop();
// 	var lie_bHeght = $('.lie_b').height();
// 	var lie_b_touHeight = $('.lie_b_tou').height();
// 	var tou2Height = $('.tou2').height();
// 	var touHeight = $('.tou').height();
// 	var HeightCount =lie_bHeght+lie_b_touHeight+tou2Height+touHeight;
// 	var documentHeight = $(document).height();
// 	var scrollHeight = documentHeight-HeightCount;
// 	console.log(scrollHeight);
//     $(window).scroll(function() {
//         var scrollY = $(document).scrollTop();// 获取垂直滚动的距离，即滚动了多少

//         if (scrollY > 14*3.1){ //如果滚动距离大于550px则隐藏，否则删除隐藏类
//             $('.top_c').css("display","block");
//         } 
//         else {
//             $('.top_c').css("display","none");
//         }

//         if (scrollY > winHeight){ //如果没滚动到顶部，删除显示类，否则添加显示类
//             $('.top_c').css("display","none");
//         } 
//         else {
//             $('.top_c').css("display","block");
// 		}
// 		if (scrollY>scrollHeight){ //如果滚动到底部自动隐藏导航栏，否则则显示导航栏
// 			$('.footer').css("display","none");
// 		}else{
// 			$('.footer').css("display","block");
// 		}               

//      });
// });