import { configureStore } from '@reduxjs/toolkit';
import mallItemsSlice, {
  MallItemInitialState,
} from 'store/feature/mallitemSlice';

const reducer = {
  mallItem: mallItemsSlice.reducer,
};

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
export interface RootState {
  mallItem: MallItemInitialState;
}
