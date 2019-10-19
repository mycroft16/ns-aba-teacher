import * as ErrorsActions from './errors.actions';

export interface IState {
    errorHistory: string[];
    lastError: string;
}

export const initialState: IState = {
    errorHistory: null,
    lastError: null,
};

export function reducer(state: IState = initialState, action: ErrorsActions.ActionsUnion): IState {
    switch (action.type) {

        case ErrorsActions.clearAllErrors.type: {
            return {
                errorHistory: null,
                lastError: null,
            };
        }

        case ErrorsActions.clearLastError.type: {
            return {
                ...state,
                lastError: null,
            };
        }

        case ErrorsActions.setError.type: {
            return {
                ...state,
                errorHistory: [...state.errorHistory, action.error],
                lastError: action.error,
            };
        }

        default: {
            return state;
        }

    }
}
