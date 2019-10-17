import { ApisauceInstance, create } from 'apisauce';
import Config from 'react-native-config';

class Api {
  private static api: ApisauceInstance;

  public static getInstance() {
    if (!Api.api) {
      const url = 'http://localhost:8000';
      Api.initializeWithUrl(url);
    }

  private static initializeWithUrl(url: string) {
      Api.api = create({
        baseURL: url,
        headers: {
          Accept: 'application/json',
        },
      });
    }

  public static setAuthorizationHeader(token: string) {
    Api.api.setHeader('Authorization', token);
  }

  static get = async <T>(url: string, params?: {}): Promise<T> => {
    const response = await Api.api.get<T>(url, params);
    return Api.getResponse(response);
  };

  static post = async <T>(url: string, data?: {}): Promise<T> => {
    const response = await Api.api.post<T>(url, data);
    return Api.getResponse(response);
  };

  static patch = async <T>(url: string, data?: {}): Promise<T> => {
    const response = await Api.api.patch<T>(url, data);
    return Api.getResponse(response);
  };

  static put = async <T>(url: string, data?: {}): Promise<T> => {
    const response = await Api.api.put<T>(url, data);
    return Api.getResponse(response);
  };

  static delete = async <T>(url: string, params?: {}): Promise<T> => {
    const response = await Api.api.delete<T>(url, params);
    return Api.getResponse(response);
  };

  private static getResponse = (response: any): Promise<any> => {
    return !response.ok ? Promise.reject(response.data) : Promise.resolve(response.data);
  };
}

export default Api;
