
$(document).ready(function() {


  var memo = [
      {imgsrc:'pre_drug_big01.jpg' ,title:'스텐드로주', price:'10,000원', sub1:'제품설명1-1', sub2:'제품설명2-1'},
      {imgsrc:'pre_drug_big02.jpg' ,title:'테몰드캡슐', price:'20,000원', sub1:'제품설명1-2', sub2:'제품설명2-2'},
      {imgsrc:'pre_drug_big03.jpg' ,title:'신풍겐타마이신황산염크림', price:'25,000원', sub1:'제품설명1-3', sub2:'제품설명2-3'},
      {imgsrc:'pre_drug_big04.jpg' ,title:'바로디핀정5mg', price:'25,000원', sub1:'제품설명1-3', sub2:'제품설명2-3'},
      {imgsrc:'pre_drug_big05.jpg' ,title:'암로발탄정10/160mg', price:'25,000원', sub1:'제품설명1-3', sub2:'제품설명2-3'},
      {imgsrc:'pre_drug_big06.jpg' ,title:'이베라정150mg', price:'25,000원', sub1:'제품설명1-3', sub2:'제품설명2-3'},
      {imgsrc:'pre_drug_big07.jpg' ,title:'하이탑핀정', price:'25,000원', sub1:'제품설명1-3', sub2:'제품설명2-3'},
      {imgsrc:'pre_drug_big08.jpg' ,title:'칸데암로정8/5mg', price:'25,000원', sub1:'제품설명1-3', sub2:'제품설명2-3'},
      {imgsrc:'pre_drug_big09.jpg' ,title:'린탁밤주4.5g', price:'25,000원', sub1:'제품설명1-3', sub2:'제품설명2-3'},
      {imgsrc:'pre_drug_big10.jpg' ,title:'브라이 점안액', price:'25,000원', sub1:'제품설명1-3', sub2:'제품설명2-3'},
      {imgsrc:'pre_drug_big11.jpg' ,title:'하이알원샷주', price:'25,000원', sub1:'제품설명1-3', sub2:'제품설명2-3'},
      {imgsrc:'pre_drug_big12.jpg' ,title:'에스넥졸정20mg', price:'30,000원', sub1:'제품설명1-4', sub2:'제품설명2-4'}
  ];
  var ind = 0;
  var txt = '';
  var total = $('.pop_menu li').length;

  function popchange() {
      $('.popup img').attr('src', './images/content1/' + memo[ind].imgsrc);
      txt = '<dl>';
      txt += '<dt>제품명: ' + memo[ind].title + '</dt>';
      txt += '<dd>제품가격: ' + memo[ind].price + '</dd>';
      txt += '<dd>제품설명1: ' + memo[ind].sub1 + '</dd>';
      txt += '<dd>제품설명2: ' + memo[ind].sub2 + '</dd>';
      txt += '</dl>';
      $('.popup .txt').html(txt);
      $('.popup span').text((ind + 1) + '/' + total);
  }


  $('.pop_menu a').click(function(e) {
      e.preventDefault();
      ind = $(this).parent('li').index();
      console.log(ind);

      $('.modal_box').css('display', 'flex').hide().fadeIn('fast');
      $('.popup').fadeIn('slow');

      popchange();
  });


  $('.close_btn, .modal_box').click(function(e) {
      e.preventDefault();
      $('.modal_box').fadeOut('fast');
      $('.popup').fadeOut('fast');
  });

});

