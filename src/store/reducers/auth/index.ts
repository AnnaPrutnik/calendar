import { IUser } from '../../../models/IUser';
import { AuthState, AuthAction, AuthActionsEnum } from './types';

const initialState: AuthState = {
  isAuth: false,
  user: {} as IUser,
  isLoading: false,
  error: '',
};

export default function authReducer(
  state = initialState,
  action: AuthAction
): AuthState {
  switch (action.type) {
    case AuthActionsEnum.SET_AUTH:
      return { ...state, isAuth: action.payload, isLoading: false };
    case AuthActionsEnum.SET_USER:
      return { ...state, user: action.payload };
    case AuthActionsEnum.SET_LOADING:
      return { ...state, isLoading: true };
    case AuthActionsEnum.SET_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}
