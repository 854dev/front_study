/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
export const increase = 'INCREASE';
export const decrease = 'DECREASE';
const increaseFive = 'INCREASE_FIVE';

// 액션생성함수
export const increaseAction = () => {
  return { type: increase };
};

export const decreaseAction = () => {
  return { type: decrease };
};

export const increaseOtherAction = (number: number) => {
  return { type: increaseFive, data: number };
};

// 초기 상태값
const initialState: any = {
  number: 30,
};

// 리듀서
export const numberReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case increase:
      return {
        ...state,
        number: state.number + 1,
      };

    case decrease:
      return (state = {
        ...state,
        number: state.number - 1,
      });

    case increaseFive:
      return (state = {
        ...state,
        number: state.number + action.data,
      });

    default:
      return state;
  }
};
