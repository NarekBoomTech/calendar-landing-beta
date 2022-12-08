import { T_RootState } from '@/store/store';
import { T_Example } from '@/store/reducers/example/types';

export const selectExample = (state: T_RootState): T_Example => state.example;
