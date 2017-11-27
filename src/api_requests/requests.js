import configs from './config.json';
import {_getItem} from "../localStorage";

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
  _getItem('user', (userInfo) => {
    let userId = (userInfo === undefined) ? 1 : userInfo.id;
    getBuilder(`${api_url}/getThemes/${userId}`, callback);
  });
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
  let body = {
    nombre: _nombre,
    correo: _email,
    contrasehna: contra
  }
  postBuilder(`${api_url}/createPerson`, body, callback);
}

const login = (correo, password, callback) => {
  getBuilder(`${api_url}/login/${correo}/${password}`, callback);
}

const reservarExcursion = (idUsuario, idExcursion, callback) => {
  getBuilder(`${api_url}/reservar/${idExcursion}/${idUsuario}`, callback);
}

const cancelarReserva = (idUsuario, idExcursion, callback) => {
  getBuilder(`${api_url}/cancelarReserva/${idExcursion}/${idUsuario}`, callback);
}

const misReservaciones = (idUsuario, callback) => {
  getBuilder(`${api_url}/misReservas/${idUsuario}`, callback);
}

export {
  getExcursions,
  getThemes,
  getPlaces,
  obtenerEncargadoExcursion,
  obtenerActividadesExcursion,
  obtenerLugaresExcursion,
  registrarUsuario,
  login,
  reservarExcursion,
  misReservaciones,
  cancelarReserva
};