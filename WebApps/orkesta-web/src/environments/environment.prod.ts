export const hosts = {
  API_BASE: 'http://localhost'
};

export const environment = {
  production: true,


    //CONF
    API_BASE_URL_GENERAL_MASTERS: `${hosts.API_BASE}:30789`,
  
      //TASKS
    API_BASE_URL_TASKS: `${hosts.API_BASE}:26101`,
  
    API_BASE_URL_AUTHORIZATION: `${hosts.API_BASE}:25102`,
    API_BASE_URL_AUTHENTICATION: `${hosts.API_BASE}:25101`,
};
