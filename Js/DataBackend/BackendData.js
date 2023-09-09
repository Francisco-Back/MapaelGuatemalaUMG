
document.addEventListener('DOMContentLoaded', function() {
   
    var ctx = document.getElementById('miGrafico');
    var data = [
        { region: "El Progreso", puntuacion: 100 },
        { region: "Santa Rosa", puntuacion: 87 },
        // ... (agrega el resto de las regiones y sus puntuaciones)
    ];
    
    var regiones = data.map(item => item.region);
    var puntuaciones = data.map(item => item.puntuacion);
  //  console.log(ctx);
    var miGrafico = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: regiones, // Las etiquetas serán las regiones
            datasets: [{
                label: 'Puntuación',
                data: puntuaciones, // Los datos serán las puntuaciones
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100 // Esto puede ajustarse según el rango de puntuaciones
                }
            }
        }
    });
});


