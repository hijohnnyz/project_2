Plotly.d3.csv('../Resources/migration.csv', function(err, rows){
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }
    //rows.map(r => r.time);
    let lookup = {};
    function getData(Year, Code) {
        let byYear, trace;
        if (!(byYear = rows['Year'])) {
            byYear = rows['Year'];
        }
        // If a container for this year + state doesn't exist yet,
        // then create one:
        if (!(trace = byYear[entity])) {
            trace = byYear[entity] = {
                x: [],
                y: [],
                id: [],
                text: [],
                marker: { size: [] }
            };
        }
        return trace;
    }
    for (let i = 0, ii = rows.length; i < ii; i++) {
      let datum = rows[i];
      let trace = getData(datum.year, datum.state);
      trace.text.push(`State: ${datum.state_name}<br>Total Production: ${datum.totalprod} lbs<br>Price per Pound: $${datum.priceperlb}<br>Number of Colonies: ${datum.numcol}<br>Total Insecticide: ${datum.totalpest} kg`);
      trace.id.push(datum.state);
      trace.x.push(datum.totalprod);
      trace.y.push(datum.priceperlb);
      trace.marker.size.push(datum.numcol);
  }
var data = [{
            type: 'choropleth',
            locations: unpack(rows, 'Code'),
            z: unpack(rows, 'Internally displaced persons, new displacement associated with disasters (number of cases) (number of cases)'),
            text: unpack(rows, 'Entity'),
            colorscale: [[0,'rgb(5, 10, 172)'],[0.5,'rgb(40, 60, 190)'],[0.75,'rgb(70, 100, 245)'], [0.6,'rgb(90, 120, 245)'],[0.7,'rgb(106, 137, 247)'],[1,'rgb(220, 220, 220)']],
            autocolorscal: false,
            reversescale: true,
            marker: {
              line: {
                color: 'rgb(180,180,180)',
                width: 0.5
              }
            },
            tick0: 0,
            zmin: 0,
            dtick: 1000,
            colorbar: {
              autotic: false,
              //tickprefix: '$',
              title: 'Migration'
            }
        }];

console.log(data.locations);
var layout = {

        title: '<a>Number of People Migration Due to Natural Disasters</a>',
        geo:{
          showframe: true,
          showcoastlines: false,
          projection:{
            type: 'mercator'
          }
        }
    };
    Plotly.plot('mapPlot', data, layout, {showLink: false});
}); 