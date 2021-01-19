export const getPath = (path = '') => (path ? `/${path}` : '');

export const createUrlParamFromObj = (params = null) => {
  if(!params) return '';
  const result = [];
  Object.keys(params).map(key => result.push(`${key}=${params[key]}`));
  return `?${result.join('&')}`;
};

export const getCustomUrl = (url = '') => url;

export const getContentType = (type = '') => {
  switch(type){
    case 'form-data':
      return 'multipart/form-data';
    default:
      return 'application/json';
  }
};

export const createHeader = (value = {}, base = {}) => ({
  ...base,
  ...value
});

export const handleAsync = async promise => {
  try{
    const response = await promise;
    return [response, undefined];
  }catch(err){
    return [undefined, err];
  }
};


/**
 * a helper for create profile state to save state profile reducer
 * @param {*} data
 */
export const createProfileObj = data => ({
  name: data.name,
  email: data.email,
  userId: data.userId,
  photo: data.photo,
  bio: data.bio
})



/**
 * a helper to validate email string
 * @param {*} email 
 */
export const validateEmail = (email = '') => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLocaleLowerCase());
}