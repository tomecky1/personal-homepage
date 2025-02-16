import {call, delay, put, takeLatest} from "redux-saga/effects";
import {fetchRepositories, fetchRepositoriesFailed, fetchRepositoriesSuccess} from "./personalHomepageSlice.jsx";
import {getRepositories} from "./personalHomepageAPI.jsx";


const loadingDelay = 8000;

function* fetchRepositoriesHandler({payload: username}) {
  try {
    yield delay(loadingDelay); // just to demo the Loading
    const repositories = yield call(getRepositories, username);
    yield put(fetchRepositoriesSuccess(repositories));
  } catch (error) {
    yield put(fetchRepositoriesFailed(
      error.message || 'Something went wrong!'));
  }
}

export function* personalHomepageSaga() {
  yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}