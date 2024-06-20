// 비주얼 스와이퍼
var swiper = new Swiper('.swiper1',{
    initialSlide: 0,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    }
});

//제품 스와이퍼
var swiper = new Swiper('.swiper2',{
    initialSlide: 0,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    }
});


//텍스트 슬라이드
$(document).ready(function() {
    var position=0;  //최초위치(left목적지)
    var movesize=2; //이동 크기(속도)
    var timeonoff; //자동기능
    
    $('.slide_wrap span').after($('.slide_wrap span').clone()); //복재
    // $('가져다 놓을 태그').after('기준태그');
    
    function partnerMove(){
         position-=movesize;  // 2씩 감소
         $('.slide_wrap').css('left',position);
         
          if(position < -900){
                $('.slide_wrap').css('left',0);
                position=0;
          } 
         
    };
 
      timeonoff= setInterval(partnerMove, 10);

     },function(){
         timeonoff= setInterval(partnerMove, 10);	
     });
