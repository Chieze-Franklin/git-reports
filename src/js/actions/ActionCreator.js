import ActionTypes from './ActionTypes';

export const getGithubAccountLoadedAction: (name) => {
    return {
        type: ActionTypes.GITHUB_ACCOUNT_LOADED,
        payload: name
    };
}

export const getGithubAccountLoadingAction: (name) => {
    return {
        type: ActionTypes.GITHUB_ACCOUNT_LOADING,
        payload: name
    };
}

export const getGithubAccountLoadingFailedAction: (error) => {
    return {
        type: ActionTypes.GITHUB_ACCOUNT_LOADING_FAILED,
        payload: error
    };
}