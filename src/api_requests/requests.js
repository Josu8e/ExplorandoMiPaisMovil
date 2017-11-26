import configs from './config.json';

const api_url = configs.api_url;

const getBuilder = (url, callback) => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log('getBuilder');
      callback(data);
    })
    .catch(error => {
      console.log(error);
      callback(error);
    })
}

const postBuilder = (url, body, callback) => {
    fetch(url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then((response) => response.json())
    .then(data => {
      console.log(data);
      callback(data);
    })
    .catch(error => {
      console.error(error);
      callback(error);
    })
}

const getExcursions = (callback) => {
  console.log(`${api_url}/getAllExcursions`);
  getBuilder(`${api_url}/getAllExcursions`, callback);
}

const getThemes = (callback) => {
  data =
    [
      {
        name: 'Playa',
        img: 'http://www.elblogdeyes.com/wp-content/uploads/playa.jpg'
      },
      {
        name: 'Montaña',
        img: 'http://intergatur.com.ar/wp-content/uploads/2016/08/CostaRica.jpg'
      },
      {
        name: 'Crucero',
        img: 'https://www.ecestaticos.com/imagestatic/clipping/f54/177/f54177d022003e4bc4e2dcc21c1afbfc/un-camarero-revela-como-es-la-vida-en-un-crucero-de-ricos.jpg?mtime=1490376847'
      }
  ];
  callback(data);

}

const getPlaces = (callback) => {

  data =
    [
      {
        name: 'Volcán Arenal, Fortuna',
        img: 'http://www.visitcentroamerica.com/files/news_images/volcan.jpg?1343859181'
      },
      {
        name: 'Parque nacional Manuel Antonio',
        img: 'https://billbeardcostarica.com/wp-content/uploads/2015/09/PN-001.jpg'
      },
      {
        name: 'Playa Conchal',
        img: 'https://r-ec.bstatic.com/images/hotel/max1024x768/315/31597181.jpg'
      }
    ];

  callback(data);
}

const obtenerEncargadoExcursion = (id, callback) => {
  getBuilder(`${api_url}/getEncargadoExcursion/${id}`, callback);
}

const obtenerLugaresExcursion = (id, callback) => {
  getBuilder(`${api_url}/placesByActivities/${id}`, callback);
}

const obtenerActividadesExcursion = (id, callback) => {
  getBuilder(`${api_url}/activitiesByExcursions/${id}`, callback);
}

const registrarUsuario = (_nombre, _email, contra, callback) => {

  fetch(`${api_url}/createPerson`, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nombre: _nombre,
      correo: _email,
      contrasehna: contra
    })
  })
    .then((response) => response.json())
    .then(data => {
      console.log(data);
      callback(data);
    })
    .catch(error => {
      console.error(error);
      callback(error);
    })
}

const login = (correo, password, callback) => {
  getBuilder(`${api_url}/login/${correo}/${password}`, callback);
}

export {
  getExcursions,
  getThemes,
  getPlaces,
  obtenerEncargadoExcursion,
  obtenerActividadesExcursion,
  obtenerLugaresExcursion,
  registrarUsuario,
  login
};