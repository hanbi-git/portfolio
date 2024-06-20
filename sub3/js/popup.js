$(document).ready(function(){
    //객체배열(json)
    var memo = [
          {title:'SP-8416', info:'SP-8416은 주로 심장과 폐에서 발현되는 GRK-5 억제제로 만성 심부전 치료용으로 개발 중인 신약 후보 물질 입니다.'},
          {title:'SP-8257', info:'SP-8257은 뇌졸중 치료제로 개발 중인 Verbenone 유도체의 새로운 표적 약물 입니다.'},
          {title:'SP-8356', info:'SP-8356은 허혈성 뇌졸중 및 동맥경화증을 적응증으로 하는 항염증 및 항산화 효능을 포함한 다중기전의 Verbenone 유도체입니다.'},
          {title:'Otaplimastat(SP-8203)', info:'개발 중인 SP-8203은 새로운 신경 보호 화합물입니다.<br>적응증은 급성 허혈성 뇌졸중 치료이며, 항염증 작용을 포함한 여러 신경 보호 기작을 가진 퀴나졸린-2,4-다이온 유도체 입니다.'},
          {title:'칸데암로®', info:'칸데암로정은 칸데사르탄과 암로디핀의 항고혈압 복합제 개량신약으로 식약처 허가를 득하여 판매 중에 있습니다.<br>칸데사르탄은 Angiotensin II 수용체를 차단하여 혈압을 강하시키는 제제로 심부전 등 심혈관질환 개선효과를 입증 받은 항고혈압제입니다.'},
          {title:'에제로수®', info:'에제로수정은 에제티미브와 로수바스타틴칼슘의 항고지혈증 복합제 개량신약으로 식약처 허가를 득하여 판매 중에 있습니다.'},
          {title:'메디커튼®', info:'히알루론산과 하이드록시에틸스타치 성분 조합의 새로운 유착방지제 메디커튼은 자궁경 임상을 통해 제품 허가를 득하였으며, 복부 수술 시 유착 방지 효과에 대한 임상을 통해 유착방지 효과와 안전성을 입증 받은 의료기기입니다.'},
          {title:'피라맥스® 정', info:'국내 신약 16호, EMA 승인 (Article 58)'},
          {title:'피라맥스® 과립', info:'국내 신약 16호, EMA 승인 (Article 58)'},
          
        ];
    var ind = 0;  //전역변수
    var txt =''; // dl태그 생성
    var total = $('.pipe_table ol li a').size(); //총개수 9
    //var total = memo.length; 
  
    function popchange(){
      //$('.pop .popup img').attr('src','./images/big'+(ind+1)+'.jpg');
        txt ='';
        txt+= '<dl>';
        txt+= '<dt>'+memo[ind].title+'</dt>';
        txt+= '<dd>'+memo[ind].info+'</dd>';
        txt+= '</dl>';
        $('.pipe_table .popup .txt').html(txt);
    }
  
  
    $('.pipe_table ol ul li a').click(function(e){
        e.preventDefault();
        
        ind = $(this).index('.pipe_table ol ul li a');  // 0 1 2 3
  
        $('.pop_btn').fadeIn('slow');
        $('.pipe_table .modal_box').fadeIn('fast');
        $('.pipe_table .popup').fadeIn('slow');
  
        popchange();
  
    });
  
    $('.pipe_table .modal_box').click(function(e){
        e.preventDefault();
        $('.pipe_table .modal_box').fadeOut('fast');
        $('.pipe_table .popup').fadeOut('fast');
        $('.pop_btn').fadeOut('fast');
    });
  
  });
  