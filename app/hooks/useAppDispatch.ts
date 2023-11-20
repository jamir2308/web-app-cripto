
import { useDispatch as reduxUseDispatch } from 'react-redux';
import { AppDispatch } from '../store/Index';

export const useAppDispatch = () => reduxUseDispatch<AppDispatch>();
