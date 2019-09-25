import Api from './api';

export const getAppConfigurations = async (): Promise<{}> => {
  return Api.get<{}>('configurations');
};
