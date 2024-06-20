// // JavaScript Document

  $(document).ready(function(){
      // var cnt=$('.tab_menu li').size();  //탭메뉴 개수 ***
      $('.tabs1 .contlist:eq(0)').show(); // 첫번째 탭 내용만 열어라
      $('.tabs1 .tab1').css('background','#0056b8').css('color','#fff');
                //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
      
      $('.tabs1 .tabcon1').each(function (index) {  // index=0 1 2
        $(this).click(function(e){
            e.preventDefault();   // <a> href="#" 값을 강제로 막는다    

            $(".tabs1 .contlist").hide(); //모든 탭내용을 안보이게...
            $(".tabs1 .contlist:eq("+index+")").show(); //클릭한 해당 탭내용만 보여라
            
            $('.tabcon1').css('background','#fff').css('color','#333'); //모든 탭메뉴를 비활성화
            $(this).css('background','#0056b8').css('color','#fff'); // 클릭한 해당 탭메뉴만 활성화

      });
      });

      
      $('.tabs2 .contlist:eq(0)').show(); // 첫번째 탭 내용만 열어라
      $('.tabs2 .tab1').css('background','#0056b8').css('color','#fff');
                //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
      
      $('.tabs2 .tabcon2').each(function (index) {  // index=0 1 2
        $(this).click(function(e){
            e.preventDefault();   // <a> href="#" 값을 강제로 막는다    

          var ind = $(this).index('.tabcon2');

            $(".tabs2 .contlist").hide(); //모든 탭내용을 안보이게...
            $(".tabs2 .contlist:eq("+ind+")").show(); //클릭한 해당 탭내용만 보여라

            $('.tabcon2').css('background','#fff').css('color','#333'); //모든 탭메뉴를 비활성화
            $(this).css('background','#0056b8').css('color','#fff'); // 클릭한 해당 탭메뉴만 활성화

      });
      });

    });

