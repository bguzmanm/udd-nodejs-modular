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
          }
    });
  });
  
  const bitcoin = document.getElementById('bitcoingggg');
  let bitArray = [];
  let bitsFechaArray = [];
  
  get('https://www.mindicador.cl/api/bitcoin')
  .then((data) => {

    nombre = data.nombre;
    let bitcoins = data.serie;

    bitArray = bitcoins.map((serie) => serie.valor);
    bitsFechaArray = bitcoins.map((serie) => serie.fecha.split('T')[0]);

    const myBitcoin = new Chart(bitcoin, {
        type: 'line',
        data: {
            labels: bitsFechaArray,
            datasets: [{
                label: nombre,
                data: bitArray,
                borderWidth: 1,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
            }],
          },
        
    });
  });



})();

