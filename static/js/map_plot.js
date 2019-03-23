Plotly.d3.csv("../../resources/migration.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; })
  }
  
  var frames = []
  var z = unpack(rows, 'Internally displaced persons, new displacement associated with disasters (number of cases) (number of cases)')
  var locations = unpack(rows, 'Entity')

  var n = 10;
  var j = 195;
  var k = 0;
  var num = 2008;
  for (var i = 0; i < n; i++) {
    k++
    j = 195;
    j = j*k
    num++
    frames[i] = {data: [{z: [], locations: []}], name: num}
    frames[i].data[0].z = z.slice(0, j);
    frames[i].data[0].locations = locations.slice(0, j);
  };

var data = [{
      type: 'choropleth',
      locationmode: 'country names',
      locations: locations,
      z: z,
      colorscale: [
        [0, 'rgb(242,240,247)'], [0.2, 'rgb(218,218,235)'],
        [0.4, 'rgb(188,189,220)'], [0.6, 'rgb(158,154,200)'],
        [0.8, 'rgb(117,107,177)'], [1, 'rgb(84,39,143)']
        ],
      text: frames[0].data[0].locations,
      zauto: false, 
      zmin: 0,
      zmax: 6000000
      
}];

var layout = {
    title: 'Global Migration Caused by Natural Disasters',
    geo:{
        showframe: false,
        showcoastlines: false,
        projection:{
            type: 'robinson'},
            showland: true,
            landcolor: 'rgb(217, 217, 217)',
            showlakes: true,
            lakecolor: 'rgb(255, 255, 255)',
            subunitcolor: 'rgb(255, 255, 255)',
            lonaxis: {},
            lataxis: {}  
    },
    updatemenus: [{
      x: 0.1,
      y: 0,
      yanchor: "top",
      xanchor: "right",
      showactive: false,
      direction: "left",
      type: "buttons",
      pad: {"t": 87, "r": 10},
      buttons: [{
        method: "animate",
        args: [null, {
          fromcurrent: true,
          transition: {
            duration: 200,
          },
          frame: {
            duration: 500,
            redraw: false
          }
        }],
        label: "Play"
      }, {
        method: "animate",
        args: [
          [null],
          {
            mode: "immediate",
            transition: {
              duration: 0
            },
            frame: {
              duration: 0,
              redraw: false
            }
          }
        ],
        label: "Pause"
      }]
    }],
    sliders: [{
      active: 0,
      steps: [
        {
            label: "2008",
            method: "animate",
            args: [["2008"], {
                mode: "immediate",
                transition: {duration: 1000},
                frame: {duration: 1000, "redraw": false}
              }
            ]
          },
        {
        label: "2009",
        method: "animate",
        args: [["2009"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      },
        {
        label: "2010",
        method: "animate",
        args: [["2010"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      },{
        label: "2011",
        method: "animate",
        args: [["2011"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      }, {
        label: "2012",
        method: "animate",
        args: [["2012"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      }, {
        label: "2013",
        method: "animate",
        args: [["2013"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      }, {
        label: "2014",
        method: "animate",
        args: [["2014"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      }, {
        label: "2015",
        method: "animate",
        args: [["2015"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      }, {
        label: "2016",
        method: "animate",
        args: [["2016"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      },
      {
        label: "2017",
        method: "animate",
        args: [["2017"], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300, "redraw": false}
          }
        ]
      }],
      x: 0.1,
      len: 0.9,
      xanchor: "left",
      y: 0,
      yanchor: "top",
      pad: {t: 50, b: 10},
      currentvalue: {
        visible: true,
        prefix: "Year:",
        xanchor: "right",
        font: {
          size: 30,
          color: "#666"
        }
      },
      transition: {
        duration: 300,
        easing: "cubic-in-out"
      }
    }]
};

Plotly.plot(myDiv, data, layout).then(function() {
    Plotly.addFrames('migration', frames); 
  });
}) 