// JavaScript Document

$(document).ready(function() {
    var position=0;  //최초위치(left목적지)
    var movesize=2; //이동 크기(속도)
    var timeonoff; //자동기능
    
    $('.textslide p').after($('.textslide p').clone()); //복재
    // $('가져다 놓을 태그').after('기준태그');
    
    function partnerMove(){
         position-=movesize;  // 2씩 감소
         $('.textslide').css('left',position);
         
          if(position < -1770){
                $('.textslide').css('left',0);
                position=0;
          } 
         
    };
 
      timeonoff= setInterval(partnerMove, 10);

     },function(){
         timeonoff= setInterval(partnerMove, 10);	
     });
