// 제품영역 li 슬라이드

$(document).ready(function() {
    var position=0;  //최초위치
    var movesize=1; //이동 크기
    var timeonoff;
    
    $('.products_box ul').after($('.products_box ul').clone()); //복재
    // $('가져다 놓을 태그').after('기준태그');
    
    function partnerMove(){
         position-=movesize;  // 150씩 감소
         $('.products_box').css('left',position);
         
          if(position < -1900){
                $('.products_box').css('left',0);
                position=0;
          } 
         
    };
 
      timeonoff= setInterval(partnerMove, 10);
     
        $('.products_box').hover(function(){
         clearInterval(timeonoff);
     },function(){
         timeonoff= setInterval(partnerMove, 10);	
     });
     
     
  });




// 메인 어쩌구2




// 메인 저쩌구