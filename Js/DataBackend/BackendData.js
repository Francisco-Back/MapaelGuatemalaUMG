const url = 'https://mapaelguatemalaumg2023-default-rtdb.firebaseio.com/RegionAlimentos.json';
// Realizamos una solicitud GET usando fetch
document.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById('miGrafico1');
    var regiones;
    var puntuaciones;
    obtenerDatosDesdeURL(url)
    .then(data => {
      var regiones = data.map(item => item.Región);
      var puntuaciones = data.map(item => parseInt(item.Alimento));
      var miGrafico1 = new Chart(ctx, {
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
    })
    .catch(error => {
      console.error('Error:', error);
    });

});
document.addEventListener('DOMContentLoaded', function() {
  var ctx = document.getElementById('miGrafico2');
  var regiones;
  var puntuaciones;
  obtenerDatosDesdeURL(url)
  .then(data => {
    var regiones = data.map(item => item.Región);
    var puntuaciones = data.map(item => parseInt(item.Alimento));
    var miGrafico2 = new Chart(ctx, {
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
  })
  .catch(error => {
    console.error('Error:', error);
  });

});

function obtenerDatosDesdeURL(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        return response.json();
      })
      .then(datafire => {
        resolve(datafire); // Resolvemos la promesa con los datos
      })
      .catch(error => {
        reject(error); // Rechazamos la promesa en caso de error
      });
  });
}



