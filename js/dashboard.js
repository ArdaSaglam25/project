let grades;

fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m')
    .then(myData => myData.json())
    .then(jsonData => showInConsole(jsonData)

    );

function showInConsole(jsonData) {
    console.log(jsonData);
    // document.body.innerHTML += jsonData.elevation;

    console.log(jsonData.hourly.temperature_2m); 

    let total = 0;

    jsonData.hourly.temperature_2m.forEach((temp) => {
        total += temp;
    });

    const avg = (total / jsonData.hourly.temperature_2m.length).toFixed(1);
    document.body.innerHTML += `Gemiddelte: ${avg} C graden`;


}     