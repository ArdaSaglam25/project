console.log('Main loaded');

const backgroundColours = ['red', 'blue', 'yellow', 'green', 'purple', 'orange'];

const chartExample = document.querySelector('.chart-example');

// createChart(chartExample);

// function createChart(canvasElement) {
//     new Chart(canvasElement, {
//         type: 'bar',
//         data: {
//             labels: ['T1H', 'T1J', 'T1K', 'T1L', 'T1M', 'T1N'],
//             datasets: [{
//                 backgroundColor: backgroundColours,
//                 label: '# Aantal studenten per klas',
//                 data: [20, 18, 21, 18, 17, 19],
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             responsive: true,
//             maintainAspectRatio: true,
//             scales: {
//                 y: {
//                     beginAtZero: true
//                 }
//             }
//         }
//     });
// }
//Werk hieronder opdracht 1 en opdracht 2 uit.

const assignment1Url = '/json/assignment1.json';
const assignment2Url = '/json/assignment2.json';

const chartAssignment1 = document.querySelector('.chart-assignment-1');
const chartAssignment2 = document.querySelector('.chart-assignment-2');


fetch(assignment1Url)
.then(myData => myData.json())
.then(jsonData => showInConsole(jsonData));

function showInConsole(jsonData) {
    console.log(jsonData);


createChart1(chartAssignment1, jsonData);
}


fetch(assignment2Url)
.then(myData => myData.json())
.then(jsonData => showInConsole1(jsonData));

function showInConsole1(jsonData) {
    console.log(jsonData);


createChart2(chartAssignment2, jsonData);
}
function createChart1(canvasElement, jsonData) {
    new Chart(canvasElement, {
        type: 'bar',
        data: {
            labels: jsonData.years   ,
            datasets: [{
                backgroundColor: ['blue'],
                label: '# Gemiddelde weer per jaar',
                data: jsonData.JavaScript,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}


function createChart2(canvasElement, jsonData) {
    new Chart(canvasElement, {
        type: 'line',
        data: {
            labels: jsonData.years   ,
            datasets: [{
                backgroundColor: ['red'],
                label: '# Java',
                data: jsonData.Java,
                borderWidth: 1
            },
            {
                backgroundColor: ['blue'],
                label: '# Python',
                data: jsonData.Python,
                borderWidth: 1
            },
            {
                backgroundColor: ['yellow'],
                label: '# JavaScript',
                data: jsonData.JavaScript,
                borderWidth: 1
            },
            {
                backgroundColor: ['green'],
                label: '# PHP',
                data: jsonData.PHP,
                borderWidth: 1
            },
            {
                backgroundColor: ['purple'],
                label: 'C#',
                data: jsonData['C#'],
                borderWidth: 1
            },
            {
                backgroundColor: ['orange'],
                label: '# C++',
                data: jsonData['C++'],
                borderWidth: 1
            }
        ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}