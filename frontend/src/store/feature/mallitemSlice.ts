import { createSlice } from '@reduxjs/toolkit';

export interface IData {
  product_title: string;
  product_price: number;
  product_thumbnail: string;
  product_url: string;
  product_rating: number;
  product_rating_cnt: number;
}

export interface MallItemInitialState {
  status: {
    coupang: 'idle' | 'pending';
    daaangn: 'idle' | 'pending';
    homenshopping: 'idle' | 'pending';
  };
  items: {
    coupang: IData[];
    daaangn: IData[];
    homenshopping: IData[];
  };
}

const initialState: MallItemInitialState = {
  status: {
    coupang: 'idle',
    daaangn: 'idle',
    homenshopping: 'idle',
  },
  items: {
    coupang: [],
    daaangn: [],
    homenshopping: [],
  },
};

const mallItemSlice = createSlice({
  name: 'mallitems',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    SET_ITEM_COUPANG: (state, action) => {
      const nextState = state;
      nextState.status.coupang = 'pending';
      nextState.items.coupang = action.payload;
    },
    SET_ITEM_DAAANGN: (state, action) => {
      const nextState = state;
      nextState.status.daaangn = 'idle';
      nextState.items.daaangn = action.payload;
    },
    SET_ITEM_HOMEANDSHOPPING: (state, action) => {
      const nextState = state;
      nextState.status.homenshopping = 'idle';
      nextState.items.homenshopping = action.payload;
    },
  },
});

export default mallItemSlice;
