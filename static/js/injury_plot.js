function init(injuries) {
  
  var data = injuries;
  console.log(data);
  var trace1 = {
    type: "scatter",
    name: "Injuries", 
    x: data.map(row => row.Year),
    y: data.map(row => row._2),
    text: data.map(row => row.Year),
    textposition: 'top',
    line: {color: '#17BECF'},
  }
  
  var graphData = [trace1];

  var layout = {
    title: "Global Injuries",
    xaxis: {
      title: 'Years',
      titlefont: {
          family:'Courier New, monospace',
          size: 18,
          color:'#7f7f7f'
      },
      autorange: false,
      range: ['1900', '2018'],
      rangeselector: {buttons: [
        {
          count: 10,
          label: '10y',
          step: 'year',
          stepmode: 'backward'
        },
        {
          count: 50,
          label: '50y',
          step: 'year',
          stepmode: 'backward'
        },
        {step: 'all'}
      ]},
      rangeslider: {range: ['1900', '2017']},
      type: 'date'
  },
    yaxis: {
      title: 'Total Global Injuries',
      titlefont: {
        family:'Courier New, monospace',
        size: 18,
        color:'#7f7f7f',
        autorange: true,
        range: [0, 250000],
        type: 'linear'
      },
      tickmode: 1
    },
    margin: {
      left: 160,
      right: 100,
      top: 140,
      bottom: 140
    },
    showlegend: true
  };
  Plotly.newPlot("injuries", graphData, layout);
}

function updatePlotly(newdata) {  
  console.log(newdata, [newdata.map(row => row._2)], [newdata.map(row => row.Year)]);
  Plotly.restyle('injuries', 'values', [newdata.map(row => row._2)]);
  Plotly.restyle('injuries', 'labels', [newdata.map(row => row.Year)]);
}

function grabData(dataset) {

  var filterData = injuries.filter(row => row.Type == dataset);

  switch (dataset) {
  case "All natural disasters":
    filterData;
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
  default:
    filterData;
  }
  init(filterData);
}

grabData("All natural disasters");



