import { call, all } from "redux-saga/effects";
import { authSagas } from "./Sagas/authSaga";
export default function* rootSaga() {
    yield all([call(authSagas)]);
}