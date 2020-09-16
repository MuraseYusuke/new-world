import * as home from './home';

export interface ApplicationState {
  home: home.HomeState
};

export const reducers = {
  home: home.reducer,
};

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