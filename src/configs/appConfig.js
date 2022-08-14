const activeConfig = 'dev';

const constants = {
  dev: {
    url: {
      api: 'http://localhost:4000',
      assets: '',
      origin: ''
    },
    firebase: {
      apiKey: "AIzaSyCXm6rVsDbUIZjJMIa-00lmU2dckx3avc8",
      authDomain: "arredo-shop.firebaseapp.com",
      databaseURL: "https://arredo-shop-default-rtdb.firebaseio.com",
      projectId: "arredo-shop",
      storageBucket: "arredo-shop.appspot.com",
      messagingSenderId: "670284835117",
      appId: "1:670284835117:web:32e22c5217d4c967564ba4"
    }
  },

  production: {
    url: {
      api: '',
      assets: '',
      origin: ''
    }
  }
};

export const appConfig = constants[activeConfig];