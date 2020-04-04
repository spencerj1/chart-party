Highcharts.getJSON('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/us-population-density.json', function (data) {

    // Make codes uppercase to match the map data
    data.forEach(function (p) {
        p.code = p.code.toUpperCase();
    });

    // Instantiate the map
    Highcharts.mapChart('us-map', {

        chart: {
            map: 'countries/us/us-all'
        },

        title: {
            text: 'United States COVID-19 Cases'
        },

        exporting: {
            sourceWidth: 600,
            sourceHeight: 600
        },

        legend: {
            layout: 'vertical',
            borderWidth: 0,
            backgroundColor: '#2a2a2b',
            floating: true,
            horizontalAlign: 'left',
            y: -30,
            x: 290
        },

        mapNavigation: {
            enabled: false
        },

        colorAxis: {
            min: 1,
            type: 'logarithmic',
            minColor: '#ffffff',
            maxColor: '#ff0000',
            stops: [
                [0, '#ffffff'],
                [0.67, '#ff8a8a'],
                [1, '#ff0000']
            ]
        },

        series: [{
            animation: {
                duration: 1000
            },
            data: data,
            joinBy: ['postal-code', 'code'],
            dataLabels: {
                enabled: true,
                color: '#FFFFFF',
                format: '{point.code}'
            },
            name: 'Population density',
            tooltip: {
                pointFormat: '{point.code}: {point.value} Cases'
            }
        }]
    });
});