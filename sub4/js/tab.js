// // JavaScript Document

$(document).ready(function(){
    // var cnt=$('.tab_menu li').size();  //탭메뉴 개수 ***

    setTimeout(function(){
      $('.chart_area .chart_container div').hide();
      $('.chart_area .chart_container div:eq(0)').show(); // 첫번째 탭 내용만 열어라
    },300);


   
    $('.tab_menu li a:eq(0)').css('background','#D9F5FB').css('right','50px');
              //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
    
    $('.tab_menu li a').each(function (index) {  // index=0 1 2
      $(this).click(function(e){
          e.preventDefault();   // <a> href="#" 값을 강제로 막는다    

          $(".chart_area .chart_container div").hide(); //모든 탭내용을 안보이게...
          $(".chart_area .chart_container div:eq("+index+")").fadeIn('slow'); //클릭한 해당 탭내용만 보여라
          
          $('.tab_menu li a').css('background','#fff').css('right','0'); //모든 탭메뉴를 비활성화
          $(this).css('background','#D9F5FB').css('right','50px'); // 클릭한 해당 탭메뉴만 활성화

    });
    });

  });
