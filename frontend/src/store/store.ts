import { configureStore } from '@reduxjs/toolkit';
import mallItemsSlice from './feature/mallitemSlice';

export interface MallItem {
  product_title: string;
  product_price: number;
  product_thumbnail: string;
  product_url: string;
  product_rating: number;
  product_rating_cnt: number;
}

export type Mall = 'coupang' | 'daaangn' | 'homenshopping';

export interface RootState {
  status: {
    coupang: 'idle' | 'pending',
    daaangn: 'idle' | 'pending',
    homenshopping: 'idle' | 'pending',
  },
  coupang: MallItem[];
  daaangn: MallItem[];
  homenshopping: MallItem[];
}

const store = () => {
  const reducer = {
    mallItem: mallItemsSlice,
  };

  return configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production',
  });
};

export default store;
