// JavaScript Document

$(document).ready(function() {
    var position=0;  //최초위치(left목적지)
    var movesize=2; //이동 크기(속도)
    var timeonoff; //자동기능
    
    $('.typo_box .typo').after($('.typo_box .typo').clone()); //복재
    // $('가져다 놓을 태그').after('기준태그');
    
    function partnerMove(){
         position-=movesize;  // 2씩 감소
         $('.typo_box').css('left',position);
         
          if(position < -2050){
                $('.typo_box').css('left',50);
                position=50;
          } 
         
    };
 
      timeonoff= setInterval(partnerMove, 10);

     },function(){
         timeonoff= setInterval(partnerMove, 10);	
     });
