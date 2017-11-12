import configs from './config.json';

function getExcursions(callback) {
  // TODO: cambiar por una petición real al api
  data =
    [
      {
        'name': 'Jardines de las Cataratas, Heredia, Costa Rica',
        'quota': '25',
        'mainImage': 'http://www.bosquedepaz.com/wp-content/uploads/2015/01/LaPaz.jpg',
        'images': [],
        'video_url' : 'https://youtu.be/u5SLOus_u98',
        'price': 25000
      },
      {
        'name': 'Rio Celeste, Alajuela, Costa Rica',
        'quota': '25',
        'mainImage': 'https://www.anywhere.com/img-a/tour/celeste-river-tenorio-volcano-adventure-arenal-costa-rica/21.jpg',
        'images': [],
        'video_url' : 'https://youtu.be/pHDnWGCLeVY',
        'price': 65000
      }
    ];
  callback(data);
}

function getThemes(callback) {
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

function getPlaces(callback){

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

export {
  getExcursions,
  getThemes,
  getPlaces
};