import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { StateInterface, AppDispatch } from '.';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<StateInterface> = useSelector;
