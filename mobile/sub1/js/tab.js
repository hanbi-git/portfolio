// // JavaScript Document

  $(document).ready(function(){
      // var cnt=$('.tab_wrap li').size();  //탭메뉴 개수 ***
      $('.tab_wrap .contlist:eq(0)').show(); // 첫번째 탭 내용만 열어라
      $('.tab_wrap .tab1 a').css('background','#0056b8').css('color','#fff');
                //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
      
      $('.tab_wrap .tab_menu a').each(function (index) {  // index=0 1 2
        $(this).click(function(e){
            e.preventDefault();   // <a> href="#" 값을 강제로 막는다    

            $(".tab_wrap .contlist").hide(); //모든 탭내용을 안보이게...
            $(".tab_wrap .contlist:eq("+index+")").show(); //클릭한 해당 탭내용만 보여라
            
            $('.tab_wrap a').css('background','#fff').css('color','#333'); //모든 탭메뉴를 비활성화
            $(this).css('background','#0056b8').css('color','#fff'); // 클릭한 해당 탭메뉴만 활성화

      });
      });

    });

