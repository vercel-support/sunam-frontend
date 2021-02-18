import React, { useContext, useReducer, createContext, Dispatch } from 'react';

type State = {
  category: string;
  date: string;
  step: number;
};

// Discriminated Unions
type Actions =
  | { type: 'NEXT'; step: number }
  | { type: 'BEFORE'; step: number }
  | { type: 'SELECTCATEGORY'; category: string }
  | { type: 'SELECTDATE'; date: string };

function BookingReducer(state: State, action: Actions): State {
  console.log('Reducer state', state);
  console.log('Reducer action', action);
  switch (action.type) {
    case 'SELECTCATEGORY':
      return {
        ...state,
        category: action.category,
      };
    case 'SELECTDATE':
      return {
        ...state,
        date: action.date,
      };
    case 'NEXT':
      return {
        ...state,
        step: state.step + 1,
      };
    case 'BEFORE':
      return {
        ...state,
        step: state.step - 1,
      };
    default:
      throw new Error('Unhandled action');
  }
}

type BookingDispatch = Dispatch<Actions>;

// for provider, Context 객체 생성, Provider로 부터 현재값 읽음
const BookingStateContext = createContext<State | null | any>(null);
const BookingDispatchContext = createContext<BookingDispatch | null | any>(
  null
);

// state
export function useBookingState() {
  const context = useContext(BookingStateContext);
  return context;
  // createContext에서 반환된 값을 그 context의 현재 값을 반환
  // context 값은 Provier의 value prop에 의해 결정
}
// dispatch
export function useBookingDispatch() {
  const context = useContext(BookingDispatchContext);
  return context;
}

// context 값은 value의 props
// provider는 context를 구독하는 컴포넌트들에게 context의 변화를 알린다.
// by using dispatch, works is delivered
export const BookingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BookingReducer, {
    category: '',
    date: '',
    step: 0,
  });
  return (
    <BookingStateContext.Provider value={state}>
      <BookingDispatchContext.Provider value={dispatch}>
        {children}
      </BookingDispatchContext.Provider>
    </BookingStateContext.Provider>
  );
};
