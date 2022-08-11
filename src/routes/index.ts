import React from 'react';
import Login from '../pages/Login';
import Event from '../pages/Event';

export interface IRoute {
  path: string;
  element: React.ComponentType;
}

export enum RoutesNames {
  LOGIN = '/login',
  EVENT = '/',
  ANY = '*',
}

export const publicRoutes: IRoute[] = [
  {
    path: RoutesNames.LOGIN,
    element: Login,
  },
];

export const privateRoutes: IRoute[] = [
  {
    path: RoutesNames.EVENT,
    element: Event,
  },
];
