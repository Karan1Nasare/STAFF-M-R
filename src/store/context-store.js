import React, {
  createContext,
  useReducer,
  useContext,
  useCallback,
  useMemo,
} from 'react';

const InitialState = {
  user: null,
  userStatus: false,
  otpTimeout: false,
  isConnected: undefined,
  enclaveInfo: {},
  selectedEnclave: {},
  questionBanks: [],
  AdminData: {},
};

/** @fixme Decode the last state when fetching from localstorage and then assign. */
export const DefaultState = localStorage.getItem('last_state')
  ? JSON.parse(localStorage.getItem('last_state'))
  : InitialState;

export const StoreContext = createContext(DefaultState);
export const StoreDispatchContext = createContext();

const StateReducer = (State, action) => {
  console.log(action.type, action);

  switch (action.type) {
    case 'Login': {
      const state = { ...State, user: action.user };
      localStorage.setItem('last_state', JSON.stringify(state));
      return state;
    }

    case 'RemoveState': {
      localStorage.removeItem('last_state');
      return InitialState;
    }

    case 'Log': {
      console.log(action);
      return State;
    }

    case 'ADD_QUESTION_BANK': {
      return {
        ...State,
        questionBanks: [...State.questionBanks, action.payload],
      };
    }

    case 'AddAdminDetails': {
      console.log('AdminData', action);
      return { ...State, AdminData: action.AdminData };
    }

    default: {
      return State;
    }
  }
};

export const ContextStoreProvider = ({ children }) => {
  const [State, StateDispatch] = useReducer(StateReducer, DefaultState);

  const Store = useMemo(() => [State, StateDispatch], [State]);

  const StoreDispatch = useCallback(StateDispatch, [StateDispatch]);

  return (
    <StoreDispatchContext.Provider value={StoreDispatch}>
      <StoreContext.Provider value={Store}>{children}</StoreContext.Provider>
    </StoreDispatchContext.Provider>
  );
};

export function useStore() {
  return useContext(StoreContext);
}

export function useDispatch() {
  return useContext(StoreDispatchContext);
}
