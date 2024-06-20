$(function(){
    //./product.html?pname=베이스
    var key, value;
  
    function getParams() {
   
    // 현재 페이지의 url   ./product.html?pname=베이스
    var url = decodeURIComponent(location.href);
    // url이 encodeURIComponent 로 인코딩 되었을때는 다시 디코딩 해준다.
    url = decodeURIComponent(url);  //  'ex2.html?num=1'
 
    var params='';
    // url에서 '?' 문자 이후의 파라미터 문자열까지 자르기
    params = url.substring( url.indexOf('?')+1, url.length );   // 'abcdefg'.substring(2,40);=> 'cdef'
    // '문자열'.substring(시작인덱스 , 자를개수) 
    // 'abcdefg'.substring(2 , 3) ->  'cde'
    // params = 'pname=베이스' 
    
    key = params.split("=")[0];  //'pname'
    value = params.split("=")[1];  // '베이스'
    }   
    getParams();  //함수호출



   //ajax 처리

   $.ajax({
       url: './js/sam.json',
       dataType: 'json',
       success: function(data){
           var useData = data.sam;  // 모든 객체배열
           
           function dataPrint(arr){
               
                   var txt = '<ul class="pop_menu">';
                   
                   for(var i in arr){
                       
                       var $Name = arr[i].Name;
                       var $Image = arr[i].Image;

                       txt+='<li>';
                       txt+='<p>'+$Name+'</p>';
                       txt+='<img src="'+ $Image +'" alt="">';
                       txt+='<a href="#">'
                       txt+='<span class="material-symbols-rounded">';
                       txt+='add_circle'
                       txt+='</span>';
                       txt+='</a>';
                       txt +='</li>';
                   }

                   txt += '</ul>';

                   $('.pop').html(txt);
              
           };
           
           var newArray = [];
           //초기실행, 함수호출
            
           if(value){
                //다른페이지에서 검색어 입력을 하였을때...
                newArray = useData.filter(function(element){
                    return element.Name.includes(value);
                });
                console.log(newArray);

                if(newArray.length!=0){
                  dataPrint(newArray);
                }else{
                    $('.pop').html('<span style="display:block;text-align:center; font-size:30px; color:red">검색된 상품이 없습니다</span>');
                }
           }else{ 
                dataPrint(useData); 
           }
           

           //검색버튼을 클릭했을때...
           $('#btn1').click(function(){
                newArray = useData.filter(function(element){
                    //console.log($('#title').val());
                    //return element.Name == $('#title').val();
                    return element.Name.includes($('#title').val());
                });
                //console.log(newArray);
                if(newArray.length!=0){
                    dataPrint(newArray);
                }else{
                      $('.pop').html('<span style="display:block;text-align:center; font-size:30px; color:#0056b8; margin-bottom:150px;">검색된 상품이 없습니다</span>');
                }
           });

       } 
   });
    
});