var map;
var chicago = new google.maps.LatLng(40.715411, -74.008429);
var marker;

$(document).ready(function () {
//    $('#tribeca-loft img').mouseenter(function(){
//                 $('#tribeca-loft h5').css("opacity", "1");
//    });
//    $('#tribeca-loft img').mouseleave(function(){
//                 $('#tribeca-loft h5').css("opacity", "0");
//    });
    
    
    
//        $('#tribeca-loft img').mouseenter(function () {
//           
//            $('#tribeca-loft h5').animate({
//                "opacity": "1"
//            }, 800);
//        });
//    
//        $('#tribeca-loft img').mouseleave(function () {
//            $('#tribeca-loft h5').animate({
//                opacity: 0
//            }, 800);
//    
//        });

    $('.hide-title img').mouseenter(function () {
        $(this).siblings().animate({
            "opacity": "1"
        }, 800)
    });

    $('.hide-title img').mouseleave(function () {
        $(this).siblings().animate({
            "opacity": "0"
        }, 800);
    });

});



function initialize() {
    var roadAtlasStyles = [
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": -8
                },
                {
                    "gamma": 1.18
                }
    ]
  }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "gamma": 1
                },
                {
                    "lightness": -24
                }
    ]
  }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "saturation": -100
                }
    ]
  }, {
            "featureType": "administrative",
            "stylers": [
                {
                    "saturation": -100
                }
    ]
  }, {
            "featureType": "transit",
            "stylers": [
                {
                    "saturation": -100
                }
    ]
  }, {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "saturation": -100
                }
    ]
  }, {
            "featureType": "road",
            "stylers": [
                {
                    "saturation": -100
                }
    ]
  }, {
            "featureType": "administrative",
            "stylers": [
                {
                    "saturation": -100
                }
    ]
  }, {
            "featureType": "landscape",
            "stylers": [
                {
                    "saturation": -100
                }
    ]
  }, {
            "featureType": "poi",
            "stylers": [
                {
                    "saturation": -100
                }
    ]
  }, {}
  ]

    var mapOptions = {
        zoom: 14,
        center: chicago,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'usroadatlas']
        }
    };

    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: chicago
    });
    google.maps.event.addListener(marker, 'click', toggleBounce);

    var usRoadMapType = new google.maps.StyledMapType(
        roadAtlasStyles, styledMapOptions);

    map.mapTypes.set('usroadatlas', usRoadMapType);
    map.setMapTypeId('usroadatlas');
}

function toggleBounce() {

    if (marker.getAnimation() != null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}
google.maps.event.addDomListener(window, 'load', initialize);

$('.carousel').carousel({
    interval: 200
})