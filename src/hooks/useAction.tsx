import { useTypedDispatch } from './useTypeDispatch';
import { allCreators } from '../store/reducers/action-creators';
import { bindActionCreators } from 'redux';

export const useActions = () => {
  const dispatch = useTypedDispatch();
  return bindActionCreators(allCreators, dispatch);
};
