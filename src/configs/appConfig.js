const activeConfig = 'dev';

const constants = {
  dev: {
    url: {
      api: 'http://localhost:3000',
      assets: '',
      origin: ''
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