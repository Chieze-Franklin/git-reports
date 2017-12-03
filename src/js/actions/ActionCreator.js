import ActionTypes from './ActionTypes';

export function getGithubAccountLoadedAction(account) {
    return {
        type: ActionTypes.GITHUB_ACCOUNT_LOADED,
        payload: account
    };
}

export function getGithubAccountLoadingAction(name) {
    return {
        type: ActionTypes.GITHUB_ACCOUNT_LOADING,
        payload: name
    };
}

export function getGithubAccountLoadingFailedAction(error) {
    return {
        type: ActionTypes.GITHUB_ACCOUNT_LOADING_FAILED,
        payload: error
    };
}