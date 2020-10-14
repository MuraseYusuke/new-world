import * as React from 'react';
import { Action, Reducer } from 'redux';
import { AppThunkAction } from '.';

export interface HomeState {
    master: Master;
    test: string;
};

interface Master {
    word: string
}

interface Init {
    type: 'HOME/INIT';
    value: string;
}

interface GetMaster {
    type: 'HOME/GET_MASTER';
    master: Master;
}

interface ClearAll {
    type: 'HOME/CLEAR_ALL';
}

export type KnownAction = 
    Init
    | GetMaster
    | ClearAll;

export const initialState: HomeState = {
    master: {
        word: ''
    },
    test: '',
};
const unloadedState: HomeState = {
    master: {
        word: ''
    },
    test: ''
};

export interface IActionCreators {
    onInit: (tst: string) => AppThunkAction<KnownAction>;
    setMaster: () => AppThunkAction<KnownAction>;
};

export type ActionCreators = IActionCreators;

export const actionCreators: ActionCreators = {
    onInit: (tst) => (dispatch, getState) => {
        dispatch({ type: 'HOME/INIT', value: tst });
    },
    setMaster: () => (dispatch, getState) => {
        dispatch({ type: 'HOME/GET_MASTER', master: { word: 'test' } });
    }
}

export const reducer = (state: HomeState, incomingAction: Action) => {
    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'HOME/INIT': {
            return {
                ...state,
                test: action.value
            }
        }
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