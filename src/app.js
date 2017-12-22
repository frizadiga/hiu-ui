// require('./js/app.js');
import './scss/app.scss';

// (process.env.NODE_ENV !== 'production')?require('./html/wrapper/app.html'):null;

if (process.env.NODE_ENV !== 'production') {
  console.log('NODE_ENV: Development mode!');
}else{
  console.log('NODE_ENV: Production mode!');
}

console.log(`test Webpack Hot Module Reload`);
const i = require('./js/app.js');
i('0.2.0');