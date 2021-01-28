let ctx = document.getElementById('myChart').getContext('2d');
let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [{
            label: 'HR',
            backgroundColor: 'transparent',
            borderColor: '#02FD05',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});

// SECOND GRAPHIC
let ctx_2 = document.getElementById('myChart_2').getContext('2d');
let chart_2 = new Chart(ctx_2, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [{
            label: 'SPO2',
            backgroundColor: 'transparent',
            borderColor: '#06FAF8',
            data: [0, 2, 3, 1, 1, 1, 4]
        }]
    },

    // Configuration options go here
    options: {}
});

// THIRD GRAPHIC
let ctx_3 = document.getElementById('myChart_3').getContext('2d');
let chart_3 = new Chart(ctx_3, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [{
            label: 'RESP',
            backgroundColor: 'transparent',
            borderColor: '#FCFC03',
            data: [0, 5, 5, 6, 7, 13, 4]
        }]
    },

    // Configuration options go here
    options: {}
});