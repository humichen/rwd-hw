$(document).ready(function(){
    //輪播圖
    var img=$(".img_box img");
    var img1=$(".img_box1 img");
    var li=$(".ul5 li");
    var divW=$(".img_box").width();
    var len=$(".img_box img").length;
    img.css("left",divW);
    img.eq(0).css("left",0);
    li.eq(0).css("background","#FFFFFF");
    var index=0;
    var next=0;
    function show(){
    next++;
    if(next==len){
    next=0;
    }
    img.eq(next).css("left",divW);
    img.eq(index).animate({"left":-divW});
    img.eq(next).animate({"left":0});
    img1.eq(next).css("left",divW);
    img1.eq(index).animate({"left":-divW});
    img1.eq(next).animate({"left":0});
    li.eq(next).css("background","#FFFFFF");
    li.eq(index).css("background","none");
    index=next;
    }
    t=setInterval(show,5000);
    function show1(){
    next--;
    if(next==-1){
    next=len-1;
    }
    img.eq(next).css("left",-divW);
    img.eq(index).animate({"left":divW});
    img.eq(next).animate({"left":0});
    img1.eq(next).css("left",-divW);
    img1.eq(index).animate({"left":divW});
    img1.eq(next).animate({"left":0});
    li.eq(next).css("background","#FFFFFF");
    li.eq(index).css("background","none");
    index=next;     
    }
    img.hover(function(){
    clearInterval(t);     
    },function(){
    t=setInterval(show,5000);
    })
    //小白點 點選
    li.mousedown(function(){
    num=$(this).index();
    if(num==next){
    return;
    }else if(num<next){
    clearInterval(t);
    img.eq(num).css("left",-divW);
    img.eq(index).animate({"left":divW});
    img.eq(num).animate({"left":0});
    img1.eq(num).css("left",-divW);
    img1.eq(index).animate({"left":divW});
    img1.eq(num).animate({"left":0});
    li.eq(num).css("background","#FFFFFF");
    li.eq(index).css("background","none");
    index=num;
    next=num;
    }else if(num>next){
    clearInterval(t);
    img.eq(num).css("left",divW);
    img.eq(index).animate({"left":-divW});
    img.eq(num).animate({"left":0});
    img1.eq(num).css("left",divW);
    img1.eq(index).animate({"left":-divW});
    img1.eq(num).animate({"left":0});
    li.eq(num).css("background","#FFFFFF");
    li.eq(index).css("background","none");
    index=num;
    next=num;
    }
    })
    li.mouseup(function(){
    t=setInterval(show,5000);
    })

    // $('.carousel').carousel({
    //   interval: 2000
    // })

    var height=$(".img_box img").width;
    $('.chooselayout').css("margin-top",height)

    var banner=$(".img_box img").height()-139;
    $(window).scroll(function() {
        if ( $(this).scrollTop() > banner ){
          $('.navbackdround').fadeIn(222);
        }
         else {
          $('.navbackdround').fadeOut(222);
        }
      }).scroll();

    })