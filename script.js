var map = L.map('mapid').setView([38.62620387281226, -90.24457630300674], 14);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var restaurants = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "Restaurant": "Vito's",
        "Review": "5"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.22946834564209,
          38.63676017004009
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurant": "Snarf",
        "Review": 1
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.23408442735672,
          38.63207112198133
        ]
      }
    }
  ]
};

var river = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -90.19226074218749,
            38.74123075381228
          ],
          [
            -90.20702362060545,
            38.73292893708775
          ],
          [
            -90.21251678466797,
            38.71685816358206
          ],
          [
            -90.20736694335936,
            38.6999799615129
          ],
          [
            -90.19432067871094,
            38.68604574559684
          ],
          [
            -90.1809310913086,
            38.656560576727024
          ],
          [
            -90.17818450927734,
            38.6326955080123
          ],
          [
            -90.18573760986328,
            38.60989560714296
          ],
          [
            -90.20050048828125,
            38.59004038021371
          ],
          [
            -90.22968292236328,
            38.56883752245028
          ],
          [
            -90.2468490600586,
            38.54655436043634
          ],
          [
            -90.26092529296875,
            38.52211548602912
          ]
        ]
      }
    }
  ]
};

var parks = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "Name": "Forest Park",
        "Ball_Field": "Yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -90.30083656311035,
              38.647310454098594
            ],
            [
              -90.30422687530518,
              38.63279607975038
            ],
            [
              -90.26474475860596,
              38.62887367741793
            ],
            [
              -90.26697635650635,
              38.63453930079258
            ],
            [
              -90.26521682739258,
              38.643724034567015
            ],
            [
              -90.30083656311035,
              38.647310454098594
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Tower Grove",
        "Ball_Field": "Yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -90.26809215545654,
              38.60956026040487
            ],
            [
              -90.26886463165282,
              38.60523414696081
            ],
            [
              -90.24251461029053,
              38.60302068573555
            ],
            [
              -90.24187088012695,
              38.60707864582887
            ],
            [
              -90.26809215545654,
              38.60956026040487
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Arch Grounds",
        "Ball_Field": "No"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -90.18569469451904,
              38.62956095145228
            ],
            [
              -90.18563032150269,
              38.628236685845074
            ],
            [
              -90.1882266998291,
              38.62131322824326
            ],
            [
              -90.1881194114685,
              38.620206754186576
            ],
            [
              -90.18616676330566,
              38.61941880013377
            ],
            [
              -90.18243312835693,
              38.62914188270295
            ],
            [
              -90.18569469451904,
              38.62956095145228
            ]
          ]
        ]
      }
    }
  ]
};

L.geoJSON(restaurants).addTo(map);
L.geoJSON(river).addTo(map);
L.geoJSON(parks,{
  style: function(feature){
    switch(feature.properties["Ball_Field"]){
      case 'Yes':return{color: "blue"};
      case 'No':return{color: "red"};
    }
  }
}).addTo(map);
