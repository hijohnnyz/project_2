// Sort the data array using the value
damage.sort(function(a, b) {
    return parseFloat(b._2) - parseFloat(a._2);
   });

var weather = damage.filter(row => row.Type == "Extreme weather");
var drought = damage.filter(row => row.Type == "Drought");
var flood = damage.filter(row => row.Type == "Flood");
var earthquake = damage.filter(row => row.Type == "Earthquake");
var volcano = damage.filter(row => row.Type == "Volcanic activity");
var wildfire = damage.filter(row => row.Type == "Wildfire");
var temp = damage.filter(row => row.Type == "Extreme temperature");
var landslide = damage.filter(row => row.Type == "Landslide");
var movement = damage.filter(row => row.Type == "Mass movement (dry)");
var impact = damage.filter(row => row.Type == "Impact");

var trace1 = {
  x: weather.map(row => row.Year),
  y: weather.map(row => row._2),
  text: weather.map(row => row._2),
  type: "bar",
  name: "Extreme Weather"
};

var trace2 = {
    x: drought.map(row => row.Year),
    y: drought.map(row => row._2),
    text: drought.map(row => row._2),
    type: "bar",
    name: "Drought"
};

var trace3 = {
    x: flood.map(row => row.Year),
    y: flood.map(row => row._2),
    text: flood.map(row => row._2),
    type: "bar",
    name: "Floods"
};

var trace4 = {
    x: earthquake.map(row => row.Year),
    y: earthquake.map(row => row._2),
    text: earthquake.map(row => row._2),
    type: "bar",
    name: "Earthquakes"
};

var trace5 = {
    x: volcano.map(row => row.Year),
    y: volcano.map(row => row._2),
    text: volcano.map(row => row._2),
    type: "bar",
    name: "Volcanic Activity"
};

var trace6 = {
    x: wildfire.map(row => row.Year),
    y: wildfire.map(row => row._2),
    text: wildfire.map(row => row._2),
    type: "bar",
    name: "Wildfires"
};

var trace7 = {
    x: temp.map(row => row.Year),
    y: temp.map(row => row._2),
    text: temp.map(row => row._2),
    type: "bar",
    name: "Extreme Temperature"
};

var trace8 = {
    x: movement.map(row => row.Year),
    y: movement.map(row => row._2),
    text: movement.map(row => row._2),
    type: "bar",
    name: "Mass Movement (Dry)"
};

var trace9 = {
    x: landslide.map(row => row.Year),
    y: landslide.map(row => row._2),
    text: landslide.map(row => row._2),
    type: "bar",
    name: "Landslides"
};

var trace10 = {
    x: impact.map(row => row.Year),
    y: impact.map(row => row._2),
    text: impact.map(row => row._2),
    type: "bar",
    name: "Impact"
};

var graphData = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10];

var layout = {
  title: "Total Damages of All Disasters",
  xaxis: {
    title: 'Years',
    titlefont: {
        family:'Courier New, monospace',
        size: 18,
        color:'#7f7f7f'
    },
    tickmode: 1
  },
  yaxis: {
    title: 'Damages ($USD)',
    titlefont: {
      family:'Courier New, monospace',
      size: 18,
      color:'#7f7f7f'
    },
    tickmode: 1
  },
  margin: {
    left: 100,
    right: 100,
    top: 140,
    bottom: 140
  },
  showlegend: true,
  barmode: 'stack'
};

Plotly.newPlot("damage2", graphData, layout);