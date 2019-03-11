import * as AppActions from './app.actions';


export interface AppState {
    app: State;
  }

  export interface State {
    name: string;
  }


const initialState: State = {
    name: 'test'
  };

  export function appReducer(state = initialState, action: AppActions.AppActions) {
    switch (action.type) {
      case AppActions.SAVE_NAME:
        return {
          ...state,
          name: action.payload
        };
    default:
        return state;
    }
  }
