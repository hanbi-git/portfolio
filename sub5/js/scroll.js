


 
$(window).on('scroll',function(){
    var scroll1 = $(window).scrollTop();
    
    $('.awards_year').removeClass('navOn1');
    
    if(scroll1>=822 && scroll1<6156){
        $('#his_2022_2015 .awards_year1').addClass('navOn1');
    }
    else if(scroll1>=6157 && scroll1<9911){ 
        $('#his_2014_2002 .awards_year2').addClass('navOn1');
    }
    else if(scroll1>=9912){ 
        $('#his_1999_1970 .awards_year3').addClass('navOn1');
    }
});



$(window).on('scroll',function(){
    var scroll2 = $(window).scrollTop();
    
    if(scroll2>=822 && scroll2<1242){
        $('.awards_year1 .year').css('transform','translateY(0)');
    }
    else if(scroll2>=1242 && scroll2<2524){ 
        $('.awards_year1 .year').css('transform','translateY(-217px)');
    }
    else if(scroll2>=2524 && scroll2<3509){ 
        $('.awards_year1 .year').css('transform','translateY(-434px)');
    }
    else if(scroll2>=3509 && scroll2<4392){ 
        $('.awards_year1 .year').css('transform','translateY(-651px)');
    }
    else if(scroll2>=4392 && scroll2<5275){ 
        $('.awards_year1 .year').css('transform','translateY(-868px)');
    }
    else if(scroll2>=5275 && scroll2<5808){ 
        $('.awards_year1 .year').css('transform','translateY(-1085px)');
    }
    else if(scroll2>=5808 && scroll2<6207){ 
        $('.awards_year1 .year').css('transform','translateY(-1302px)');
    }



    else if(scroll2>=6208 && scroll2<7260){ 
        $('.awards_year2 .year').css('transform','translateY(0)');
    }
    else if(scroll2>=7260 && scroll2<8019){ 
        $('.awards_year2 .year').css('transform','translateY(-217px)');
    }
    else if(scroll2>=8019 && scroll2<8326){ 
        $('.awards_year2 .year').css('transform','translateY(-434px)');
    }
    else if(scroll2>=8326 && scroll2<8633){ 
        $('.awards_year2 .year').css('transform','translateY(-651px)');
    }
    else if(scroll2>=8633 && scroll2<9290){ 
        $('.awards_year2 .year').css('transform','translateY(-868px)');
    }
    else if(scroll2>=9290 && scroll2<9597){ 
        $('.awards_year2 .year').css('transform','translateY(-1085px)');
    }
    else if(scroll2>=9597 && scroll2<9955){ 
        $('.awards_year2 .year').css('transform','translateY(-1302px)');
    }



    else if(scroll2>=9955 && scroll2<10211){ 
        $('.awards_year3 .year').css('transform','translateY(0)');
    }
    else if(scroll2>=10211 && scroll2<10518){ 
        $('.awards_year3 .year').css('transform','translateY(-217px)');
    }
    else if(scroll2>=10518 && scroll2<10825){ 
        $('.awards_year3 .year').css('transform','translateY(-434px)');
    }
    else if(scroll2>=10825 && scroll2<11168){ 
        $('.awards_year3 .year').css('transform','translateY(-651px)');
    }
    else if(scroll2>=11168 && scroll2<11475){ 
        $('.awards_year3 .year').css('transform','translateY(-868px)');
    }
    else if(scroll2>=11475 && scroll2<11783){ 
        $('.awards_year3 .year').css('transform','translateY(-1085px)');
    }
    else if(scroll2>=11783){ 
        $('.awards_year3 .year').css('transform','translateY(-1302px)');
    }
});