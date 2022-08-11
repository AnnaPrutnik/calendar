import { AppDispatch } from '../../index';
import {
  AuthActionsEnum,
  SetUserAction,
  SetAuthAction,
  SetErrorAction,
  SetLoadingAction,
} from './types';
import { IUser } from '../../../models/IUser';
import UserService from '../../../api/UserService';

export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActionsEnum.SET_USER,
    payload: user,
  }),
  setIsAuth: (isAuth: boolean): SetAuthAction => ({
    type: AuthActionsEnum.SET_AUTH,
    payload: isAuth,
  }),
  setLoading: (): SetLoadingAction => ({
    type: AuthActionsEnum.SET_LOADING,
    payload: null,
  }),
  setError: (error: string): SetErrorAction => ({
    type: AuthActionsEnum.SET_ERROR,
    payload: error,
  }),
  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      dispatch(AuthActionCreators.setError(''));
      dispatch(AuthActionCreators.setLoading());

      try {
        setTimeout(async () => {
          const { data } = await UserService.getUsers();
          const user = data.find(
            (user) => user.username === username && user.password === password
          );
          if (user) {
            localStorage.setItem('auth', 'true');
            localStorage.setItem('user', user.username);
            dispatch(AuthActionCreators.setIsAuth(true));
            dispatch(AuthActionCreators.setUser(user));
          } else {
            dispatch(
              AuthActionCreators.setError('Login or password is incorrect')
            );
          }
        }, 1000);
      } catch (error) {
        dispatch(AuthActionCreators.setError('Error'));
      }
    },
  logout: () => (dispatch: AppDispatch) => {
    localStorage.removeItem('auth');
    localStorage.removeItem('user');
    dispatch(AuthActionCreators.setIsAuth(false));
    dispatch(AuthActionCreators.setUser({} as IUser));
  },
};
