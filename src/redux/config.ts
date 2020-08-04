import { ConfigState, StoreAction } from './redux.interface.d';

export const setTheme = (payload): StoreAction => ({
  type: 'config/SET_THEME',
  payload,
});

const initialState: ConfigState = {
  theme: 'light',
};

export default function configReducer(state: ConfigState = initialState, action: StoreAction) {
  switch (action.type) {
    case 'config/SET_THEME':
      return { ...state, theme: action.payload };
    default:
      return state;
  }
}
