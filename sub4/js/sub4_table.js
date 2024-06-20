$(function(){
     
    $('#tableContent').load("./sub4_table1.html");  
    /*
 $('#btn .btnLoad').click(function(){
    $('#subCon').load("sub1.html");    
 });  
 $('#btn .btnLoad2').click(function(){
    $('#subCon').load("sub2.html");    
 });
 */
 $('#tab a').click(function(e){
    e.preventDefault();

    if($(this).hasClass('tabCon1')){
        $('#tableContent').load("./sub4_table1.html");   
    }else if($(this).hasClass('tabCon2')){
        $('#tableContent').load("./sub4_table2.html");  
    }else if($(this).hasClass('tabCon3')){
        $('#tableContent').load("./sub4_table3.html");  
    }else if($(this).hasClass('tabCon4')){
        $('#tableContent').load("./sub4_table4.html");  
    }
     
 });  


});