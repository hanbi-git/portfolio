 window.onload = function() {
    var container = document.getElementById('map1');
    var options = {
        center: new daum.maps.LatLng(37.49523588815088,127.03665001727084),
        level: 2
    };

    var map = new daum.maps.Map(container, options);
    
    var mapTypeControl = new daum.maps.MapTypeControl();
    map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);

    var zoomControl = new daum.maps.ZoomControl();
    map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);
    
    var markerPosition  = new daum.maps.LatLng(37.49523588815088,127.03665001727084); 
    var marker = new daum.maps.Marker({
        position: markerPosition
    });

    marker.setMap(map);
    
    var overlay = new daum.maps.CustomOverlay({
        map: map,
        position: marker.getPosition()       
    });
     
    //두번째 맵
     
      var container2 = document.getElementById('map2');
    var options2 = {
        center: new daum.maps.LatLng(37.39702372873542,126.97438640701237),
        level: 2
    };

    var map2 = new daum.maps.Map(container2, options2);
    
    var mapTypeControl2 = new daum.maps.MapTypeControl();
    map2.addControl(mapTypeControl2, daum.maps.ControlPosition.TOPRIGHT);

    var zoomControl2 = new daum.maps.ZoomControl();
    map2.addControl(zoomControl2, daum.maps.ControlPosition.RIGHT);
    
    var markerPosition2  = new daum.maps.LatLng(37.39702372873542,126.97438640701237); 
    var marker2 = new daum.maps.Marker({
        position: markerPosition2
    });

    marker2.setMap(map2);
    
    var overlay2 = new daum.maps.CustomOverlay({
        map: map2,
        position: marker2.getPosition()       
    }); 
     
     
    //세번째 맵
     
   var container3 = document.getElementById('map3');
   var options3 = {
       center: new daum.maps.LatLng(37.29863566975441,126.77695451720506),
       level: 2
   };

   var map3 = new daum.maps.Map(container3, options3);
   
   var mapTypeControl3 = new daum.maps.MapTypeControl();
   map3.addControl(mapTypeControl3, daum.maps.ControlPosition.TOPRIGHT);

   var zoomControl3 = new daum.maps.ZoomControl();
   map3.addControl(zoomControl3, daum.maps.ControlPosition.RIGHT);
   
   var markerPosition3  = new daum.maps.LatLng(37.29863566975441,126.77695451720506); 
   var marker3 = new daum.maps.Marker({
       position: markerPosition2
   });

   marker3.setMap(map3);
   
   var overlay3 = new daum.maps.CustomOverlay({
       map: map3,
       position: marker3.getPosition()       
   }); 
   
    //네번째 맵
     
   var container4 = document.getElementById('map4');
   var options4 = {
       center: new daum.maps.LatLng(37.30001306504643,126.77752003565446),
       level: 2
   };

   var map4 = new daum.maps.Map(container4, options4);
   
   var mapTypeControl4 = new daum.maps.MapTypeControl();
   map4.addControl(mapTypeControl4, daum.maps.ControlPosition.TOPRIGHT);

   var zoomControl4 = new daum.maps.ZoomControl();
   map4.addControl(zoomControl4, daum.maps.ControlPosition.RIGHT);
   
   var markerPosition4  = new daum.maps.LatLng(37.30001306504643,126.77752003565446); 
   var marker4 = new daum.maps.Marker({
       position: markerPosition4
   });

   marker4.setMap(map4);
   
   var overlay4 = new daum.maps.CustomOverlay({
       map: map4,
       position: marker4.getPosition()       
   }); 
    
    
 //다섯번째 맵
     
 var container5 = document.getElementById('map5');
 var options5 = {
     center: new daum.maps.LatLng(37.30001306504643,126.77752003565446 ),
     level: 2
 };

 var map5 = new daum.maps.Map(container5, options5);
 
 var mapTypeControl5 = new daum.maps.MapTypeControl();
 map5.addControl(mapTypeControl5, daum.maps.ControlPosition.TOPRIGHT);

 var zoomControl5 = new daum.maps.ZoomControl();
 map5.addControl(zoomControl5, daum.maps.ControlPosition.RIGHT);
 
 var markerPosition5  = new daum.maps.LatLng(37.30001306504643,126.77752003565446 ); 
 var marker5 = new daum.maps.Marker({
     position: markerPosition5
 });

 marker5.setMap(map5);
 
 var overlay5 = new daum.maps.CustomOverlay({
     map: map5,
     position: marker5.getPosition()       
 }); 

//여섯번째 맵
     
var container6 = document.getElementById('map6');
var options6 = {
    center: new daum.maps.LatLng(36.6431472902659,127.33820398246033),
    level: 2
};

var map6 = new daum.maps.Map(container6, options6);

var mapTypeControl6 = new daum.maps.MapTypeControl();
map6.addControl(mapTypeControl6, daum.maps.ControlPosition.TOPRIGHT);

var zoomControl6 = new daum.maps.ZoomControl();
map6.addControl(zoomControl6, daum.maps.ControlPosition.RIGHT);

var markerPosition6  = new daum.maps.LatLng(36.6431472902659,127.33820398246033); 
var marker6 = new daum.maps.Marker({
    position: markerPosition6
});

marker6.setMap(map6);

var overlay6 = new daum.maps.CustomOverlay({
    map: map6,
    position: marker6.getPosition()       
}); 


}

 
 
 
 
