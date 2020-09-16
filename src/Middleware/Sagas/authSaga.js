import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from "axios";
import {
    todoViewSuccessful,
    todoCreateSuccessful
} from "../../Actions/authActions";

import AuthActions from "../../Actions/authActions";
import { call, takeLatest, all, put, takeEvery } from "redux-saga/effects";

export function* todoView() {
    try {
        console.log("Calling API");
        const response = yield call(
            axios.get,
            "https://tranquil-everglades-65025.herokuapp.com/get"
        );
        console.log("reponse", response.data);
        yield put(todoViewSuccessful(response));
    } catch (err) {
        //yield call(endFetchFun(error.message));
        console.log("error with Get API");
    }
}

export function* createWithAPI(desc, createdby) {
    try {
        console.log("Calling API");
        const response = yield call(
            axios.post,
            "https://tranquil-everglades-65025.herokuapp.com/create", { description: desc, createdBy: createdby },
        );
        console.log("Posted");
        yield put(todoCreateSuccessful());
    } catch (err) {
        //yield call(endFetchFun(error.message));
        console.log("error with Post API");
    }
}

export function* todoCreate({ payload: { desc, createdby } }) {
    // const { response, err } = 
    yield call(createWithAPI, desc, createdby);

    // if (response) {
    //     yield put(todoCreateSuccessful(response));
    // }
}

export function* authSagas() {
    yield all([
        yield takeLatest(AuthActions.VIEW_TODO_OPEN, todoView),
        yield takeLatest(AuthActions.CREATE_TODO_REQ_OPEN, todoCreate)
    ]);
}