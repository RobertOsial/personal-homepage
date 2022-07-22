import { delay, call, put, takeLatest } from "redux-saga/effects";
import { getRepositories } from "./homepageAPI";
import { fetchRepositories, fetchRepositoriesSucccess, fetchRepositoriesError } from "./hompageSlice"

const loadingDelay = 2_000

function* fetchRepositoriesHandler({ payload: username }) {
  try {
    yield delay(loadingDelay) // to demo the loading
    const repositories = yield call(getRepositories, username);
    yield put(fetchRepositoriesSucccess(repositories));
  } catch (error) {
    yield put(fetchRepositoriesError());
  }
}

export function* homepageSaga() {
  yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}