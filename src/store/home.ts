import * as React from 'react';
import { Action, Reducer } from 'redux';
import { AppThunkAction } from '.';

export interface HomeState {
    master: Master;
};

interface Master {
    word: string
}

interface GetMaster {
    type: 'HOME/GET_MASTER';
    master: Master;
}

interface ClearAll {
    type: 'HOME/CLEAR_ALL';
}

export type KnownAction = 
    GetMaster
    | ClearAll;

const unloadedState: HomeState = {
    master: {
        word: ''
    }
};

export interface IActionCreators {
    setMaster: () => AppThunkAction<KnownAction>;
};

export type ActionCreators = IActionCreators;

export const actionCreators: ActionCreators = {
    setMaster: () => (dispatch, getState) => {
        dispatch({ type: 'HOME/GET_MASTER', master: { word: 'test' } });
    }
}

export const reducer = (state: HomeState, incomingAction: Action) => {
    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'HOME/GET_MASTER': {
            return {
                ...state,
                master: action.master
            }
        }
        case 'HOME/CLEAR_ALL': {
            return {
                ...unloadedState,
            }
        }
        default:
            const exhaustiveCheck: never = action;
    }
    return state || unloadedState;
};