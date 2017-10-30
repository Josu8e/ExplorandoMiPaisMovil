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
        'video_url' : 'https://youtu.be/u5SLOus_u98'
      },
      {
        'name': 'Rio Celeste, Alajuela, Costa Rica',
        'quota': '25',
        'mainImage': 'https://www.anywhere.com/img-a/tour/celeste-river-tenorio-volcano-adventure-arenal-costa-rica/21.jpg',
        'images': [],
        'video_url' : 'https://youtu.be/pHDnWGCLeVY'
      }
    ];
  callback(data);
}

export {getExcursions};