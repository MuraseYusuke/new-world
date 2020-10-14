import * as home from './home';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

export interface ApplicationState {
  home: home.HomeState
};
// export type ApplicationStaate = { state: State };

const storeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//ここに各画面のstoreを追加していく
// const Reducer = () => (
//   reducerWithInitialState({
//   home: home.initialState
// } as ApplicationState)
// );

const store = createStore(
  combineReducers({
    home: home.reducer
  }),
  storeEnhancers(applyMiddleware(thunk))
);

export interface ThunkDispatch<
  TBasicAction,
  TExtraThunkArg,
> {
  <TReturnType>(
    thunkAction: AppThunkAction<TBasicAction, TReturnType, TExtraThunkArg>
  ): TReturnType;
  <A extends TBasicAction>(action: A): A;
  // This overload is the union of the two above (see TS issue #14107).
  <TAction extends TBasicAction, TReturnType>(
    action:
      | TAction
      | AppThunkAction<TBasicAction, TReturnType, TExtraThunkArg>
  ): TAction | TReturnType;
}


// This type can be used as a hint on action creators so that its 'dispatch' and 'getState' params are
// correctly typed to match your store.
export interface AppThunkAction<TAction, TReturnType = void, TExtraThunkArg = never> {
    (dispatch: ThunkDispatch<TAction, TExtraThunkArg>, getState: () => ApplicationState, extraArguments?: TExtraThunkArg): TReturnType;
};

export default store;