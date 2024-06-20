$(document).ready(function() {
   var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
 	
   $(".menu_ham").click(function(e) { //메뉴버튼 클릭시
       e.preventDefault();
       
       var documentHeight =  $(document).height(); //전체 페이지의 높이
       $("#gnb").css('height',documentHeight); //네비의 높이를 전체 전체 페이지의 높이로...

      if(op==false){  //메뉴가 닫혀있는 상태에서 클릭했냐??
        $("#gnb").animate({right:0,opacity:1}, 'fast');
        $('#headerArea').addClass('mn_open');
        op=true;
      }else{  //메뉴가 열려있는 상태에서 클릭했냐??
        $("#gnb").animate({right:'-100%',opacity:0}, 'fast');
        $('#headerArea').removeClass('mn_open');
        op=false;
      }

   });
   
   
    //2depth 메뉴 교대로 열기 처리 
    var onoff=[false,false,false,false,false,false]; //가정법 false(서브닫힘) , true(열림)
    var arrcount=onoff.length;  // 배열의 개수 6
    
    //console.log(arrcount);
    
    $('#gnb .depth1 h3 a').click(function(e){  //1depth메뉴를 클릭하면
      e.preventDefault();
        
      var ind=$(this).parents('.depth1').index();  // 0~5
      //var ind=$(this).index('#gnb .depth1 h3 a');
        
      //console.log(ind);
        
       if(onoff[ind]==false){  //각각의 1depth메뉴의 서브가 닫혀있냐??
        //$('#gnb .depth1 ul').hide();
        $(this).parents('.depth1').find('ul').slideDown('slow'); //자신의 서브를 열어라
        $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast'); //자신을 제외한 모든 서브를 닫아라
         for(var i=0; i<arrcount; i++) onoff[i]=false; //모든 배열값을 false
         onoff[ind]=true;  //자신의 대한 배열만 true로 변경
           
         $('.depth1 span').text('+');   
         $(this).find('span').text('-');   
            
       }else{ //각각의 1depth메뉴의 서브가 열려있냐??
         $(this).parents('.depth1').find('ul').slideUp('fast'); //지 서브를 닫아라~~
         onoff[ind]=false;  // true->false 
           
         $(this).find('span').text('+');     
       }
    }); 
    
    
    var smh=$('.visual').height();  //비주얼 이미지의 높이를 리턴한다  1000px

    $(window).on('scroll',function(){//스크롤의 거리가 발생하면
      var scroll = $(window).scrollTop();  
      //스크롤의 거리를 리턴하는 함수
      //console.log(scroll,smh);

      if(scroll>smh){//스크롤이 비주얼의 높이-header높이까지 내리면
          $('#top_move').fadeIn('slow');
      }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
        $('#top_move').fadeOut('slow');
      }; 
      
   });


   //top_move
  var top_move = document.getElementById('top_move');
  top_move.onclick =function(e){
        e.preventDefault();
        window.scroll({
          top:0,
          //left:0,
          behavior:'smooth'
        });
  }


  //패밀리 사이트
  $('.family .arrow').toggle(function(){
    $('.family .aList').slideDown('slow');	
    $(this).children('span').html('<i class="fa-solid fa-xmark"></i>').animate(
        {rotate:"90deg"}, 500);	
},function(){   
    $('.family .aList').slideUp('fast');	
    $(this).children('span').html('<i class="fa-solid fa-xmark"></i>').animate(
        {rotate:"-45deg"}, 500);	
});

//tab키 처리
  $('.family .arrow').on('focus', function () {        
          $('.family .aList').slideDown('slow');	
   });
   $('.family .aList li:last a').on('blur', function () {        
          $('.family .aList').slideUp('fast');
   });


  
  });


