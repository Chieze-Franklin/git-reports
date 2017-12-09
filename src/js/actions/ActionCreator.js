import ActionTypes from './ActionTypes';

export function githubAccountLoaded(account) {
    return {
        type: ActionTypes.GITHUB_ACCOUNT_LOADED,
        payload: account
    };
}

export function githubAccountLoading(name) {
    return {
        type: ActionTypes.GITHUB_ACCOUNT_LOADING,
        payload: name
    };
}

export function githubAccountLoadingFailed(error) {
    return {
        type: ActionTypes.GITHUB_ACCOUNT_LOADING_FAILED,
        payload: error
    };
}

export function githubRepoSelected(account) {
    return {
        type: ActionTypes.GITHUB_REPO_SELECTED,
        payload: account
    };
}

export function PrsLoaded(accountName, repoName, prs) {
    return {
        type: ActionTypes.PRS_LOADED,
        payload: {name: accountName, repo: repoName, prs: prs}
    };
}

export function PrsLoading(accountName, repoName) {
    return {
        type: ActionTypes.PRS_LOADING,
        payload: {name: accountName, repo: repoName}
    };
}

export function PrsLoadingFailed(error) {
    return {
        type: ActionTypes.PRS_LOADING_FAILED,
        payload: error
    };
}