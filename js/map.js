// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
google.maps.event.addDomListener(window, 'resize', init);

function init() {

    // Basic options for a simple Google Map
    // The latitude and longitude to center the map (always required)
    var center = new google.maps.LatLng(55.4586, -4.6292);
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var isDraggable = $(document).width() > 1024 ? true : false; // If document (your website) is wider than 1024px, isDraggable = true, else isDraggable = false

    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 12,
        scrollwheel: false,
        draggable: isDraggable,
        center: center,
        streetViewControl: true,
        mapTypeControl: true,
        key: "AIzaSyDGJGggn4ksA9lqyyimjdkmd_kdfnSOtGM",

        zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP
    },

    streetViewControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP
    },

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [
{
    "featureType": "administrative.province",
    "elementType": "all",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [
        {
            "saturation": -100
        },
        {
            "lightness": 65
        },
        {
            "visibility": "on"
        }
    ]
},
{
    "featureType": "poi",
    "elementType": "all",
    "stylers": [
        {
            "saturation": -100
        },
        {
            "lightness": 51
        },
        {
            "visibility": "simplified"
        }
    ]
},
{
    "featureType": "road.highway",
    "elementType": "all",
    "stylers": [
        {
            "saturation": -100
        },
        {
            "visibility": "simplified"
        }
    ]
},
{
    "featureType": "road.arterial",
    "elementType": "all",
    "stylers": [
        {
            "saturation": -100
        },
        {
            "lightness": 30
        },
        {
            "visibility": "on"
        }
    ]
},
{
    "featureType": "road.local",
    "elementType": "all",
    "stylers": [
        {
            "saturation": -100
        },
        {
            "lightness": 40
        },
        {
            "visibility": "on"
        }
    ]
},
{
    "featureType": "transit",
    "elementType": "all",
    "stylers": [
        {
            "saturation": -100
        },
        {
            "visibility": "simplified"
        }
    ]
},
{
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
        {
            "hue": "#006bff"
        },
        {
            "lightness": "-10"
        },
        {
            "saturation": "-92"
        },
        {
            "gamma": "0.37"
        }
    ]
},
{
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
        {
            "color": "#323a45"
        }
    ]
},
{
    "featureType": "water",
    "elementType": "labels",
    "stylers": [
        {
            "visibility": "on"
        },
        {
            "lightness": -25
        },
        {
            "saturation": -100
        }
    ]
},
{
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
        {
            "color": "#4f5256"
        }
    ]
},
{
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
        {
            "color": "#ffffff"
        }
    ]
}
]
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions, center);

    var locations = [
        ['<h6>Boswells Bar Restaurant</h6><p>Our First Ayrtime installation.<br><i class="fa fa-coffee"></i> Great coffee!</p>', 55.462238, -4.632940, 1],
        ['<h6>Hollowpark Stores</h6><p>Local Usave Store</p>', 55.436680, -4.613290, 2]

    ];

    var infowindow = new google.maps.InfoWindow();

    var marker, i;
    var image = 'img/logo-map.png';

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            icon: image
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            };
        })(marker, i));
    }

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });

}