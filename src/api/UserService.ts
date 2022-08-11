import axios, { AxiosResponse } from 'axios';
import { IEvent } from '../models/IEvent';
import { IUser } from '../models/IUser';

export default class UserService {
  static async getUsers(): Promise<AxiosResponse<IUser[]>> {
    return await axios.get('./user.json');
  }

  static async getEvents(): Promise<AxiosResponse<IEvent[]>> {
    return await axios.get('./user.json');
  }
}
