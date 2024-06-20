$(function(){
    var onTab = $(".tabs li.on").index()
    //현재 탭의 내용 표시
    $(".tabcon").eq(onTab).addClass("on");
  
    $(".tabs li").click(function(){
      var idx = $(this).index();
      //탭 클릭시 해당 on 클래스 적용
      $(".tabs li").removeClass("on");
      $(this).addClass("on");
     
      // 탭 내용 보여주기
      $(".tabcon").removeClass("on")
      $(".tabcon").eq(idx).addClass("on")
    });
  });