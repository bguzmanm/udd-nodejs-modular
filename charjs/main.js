(() => {
  function get(url){
    return Promise.resolve(
      fetch(url)
      .then((response) => response.json())
    );
  }

  let tasasArray = [];
  let fechasArray = [];
  let nombre = '';
  const graph = document.getElementById('desempleo');
  
  get('https://www.mindicador.cl/api/tasa_desempleo')
  .then((data) => {

    nombre = data.nombre;
    let tasas = data.serie;

    tasasArray = tasas.map((serie) => serie.valor);
    fechasArray = tasas.map((serie) => serie.fecha.split('T')[0]);


    const myChart = new Chart(graph, {
        type: 'line',
        data: {
            labels: fechasArray,
            datasets: [{
                label: nombre,
                data: tasasArray,
                borderWidth: 1,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
            }],
          },
        options: {
          animations: {
            tension: {
              duration: 1000,
              easing: 'linear',
              from: 2,
              to: 1,
              loop: true
            }
          },
          scales: {
            y: { // defining min and max so hiding the dataset does not change scale range
              min: 1,
              max: 15
            }
          }
        }
    });
  });


})();

