import axios from 'axios';
import { getAppEnvironment, AppEnvironment } from './environment';

class HttpApi {
  private env: AppEnvironment;

  constructor() {
    this.env = getAppEnvironment();
  }

  async get<T>(url: string): Promise<T> {
    const { data } = await axios.get(this.env.API_URL + url);
    return data;
  }
}

export const httpApi = new HttpApi();
