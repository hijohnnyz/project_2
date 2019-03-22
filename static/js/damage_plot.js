// Sort the data array using the greekSearchResults value
damage.sort(function(a, b) {
 return parseFloat(b._2) - parseFloat(a._2);
});

function init(damage) {
  
  var data = damage;

  var trace1 = {
    x: data.map(row => row.Year),
    y: data.map(row => row._2),
    text: data.map(row => row.Year),
    textposition: 'top',
    mode: 'markers',
    type: "bar",
    name: "Damages",
    xbins: {
      start: '1900',
      end: '2018',
      size: 'Y1'
    },
    // How:
    orientation: "v"
  }
  
  var graphData = [trace1];

  var layout = {
    title: "Damages Per Disaster Types",
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
      title: 'Total Damages ($USD)',
      titlefont: {
        family:'Courier New, monospace',
        size: 18,
        color:'#7f7f7f',
      },
      tickmode: 1
    },
    margin: {
      left: 100,
      right: 100,
      top: 140,
      bottom: 140
    },
    showlegend: true
  };
  Plotly.newPlot("damage1", graphData, layout);
}

function updatePlotly(newdata) {  
    console.log(newdata, [newdata.map(row => row._2)], [newdata.map(row => row.Year)]);
  Plotly.restyle('damage1', 'values', [newdata.map(row => row._2)]);
  Plotly.restyle('damage1', 'labels', [newdata.map(row => row.Year)]);
}

function getData(dataset) {

  var filterData = damage.filter(row => row.Type == dataset);

  switch (dataset) {
  case "All natural disasters":
    filterData
    break;
  case "Extreme weather":
    filterData;
    break;
  case "Flood":
    filterData;
    break;
  case "Earthquake":
    filterData;
    break;
  case "Volcanic activity":
   filterData;
    break;
  case "Wildfire":
    filterData;
    break;
  case "Extreme temperature":
    filterData;
    break;
  case "Landslide":
    filterData;
    break;
  case "Mass movement (dry)":
    filterData;
    break;
  case "Drought":
    filterData;
    break;
  case "Impact":
    filterData;
    break;
  default:
    filterData;
  }
  init(filterData);
}

init(damage);